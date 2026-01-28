import { useEffect, useState } from "react";
import { bookApi, cartApi } from "../api/axios";
import "./Boutique.css";

export default function Shop() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🛒 ACHAT
  const addBuy = async (id) => {
    try {
      await cartApi.post(`/add/${id}`, null, {
        params: { type: "BUY" },
      });
      alert("Livre ajouté au panier (achat)");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'achat");
    }
  };

  // 📦 LOCATION
  const addRent = async (id) => {
    try {
      await cartApi.post(`/add/${id}`, null, {
        params: { type: "RENT", days: 7 },
      });
      alert("Livre ajouté au panier (location)");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la location");
    }
  };

const [filteredBooks, setFilteredBooks] = useState([]);

const [filters, setFilters] = useState({
  sellable: false,
  rentable: false,
  available: false,
  maxPrice: "",
  search: "",
});


  // 📚 Chargement des livres
  useEffect(() => {
    bookApi
      .get("")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];
        console.log("BOOKS:", res.data);
  setBooks(data);
  setFilteredBooks(data);
      })
      .catch((err) => console.error("Erreur books:", err))
      .finally(() => setLoading(false));
  }, []);

useEffect(() => {
  let result = [...books];

  if (filters.sellable) {
    result = result.filter((b) => b.sellable);
  }

  if (filters.rentable) {
    result = result.filter((b) => b.rentable);
  }

  if (filters.available) {
    result = result.filter((b) => b.quantity > 0);
  }

  if (filters.maxPrice) {
    result = result.filter(
      (b) =>
        (b.sellPrice && b.sellPrice <= filters.maxPrice) ||
        (b.rentPrice && b.rentPrice <= filters.maxPrice)
    );
  }

  if (filters.search) {
    result = result.filter(
      (b) =>
        b.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        b.author.toLowerCase().includes(filters.search.toLowerCase())
    );
  }

  setFilteredBooks(result);
}, [filters, books]);


  if (loading) return <p>Chargement...</p>;

  return (
    <div className="shop-container">
      <h1>Boutique</h1>

<div className="filters">
  <input
    type="text"
    placeholder="Rechercher (titre ou auteur)"
    value={filters.search}
    onChange={(e) =>
      setFilters({ ...filters, search: e.target.value })
    }
  />

  <label>
    <input
      type="checkbox"
      checked={filters.sellable}
      onChange={(e) =>
        setFilters({ ...filters, sellable: e.target.checked })
      }
    />
    À vendre
  </label>

  <label>
    <input
      type="checkbox"
      checked={filters.rentable}
      onChange={(e) =>
        setFilters({ ...filters, rentable: e.target.checked })
      }
    />
    À louer
  </label>

  <label>
    <input
      type="checkbox"
      checked={filters.available}
      onChange={(e) =>
        setFilters({ ...filters, available: e.target.checked })
      }
    />
    En stock
  </label>

  <input
    type="number"
    placeholder="Prix max (€)"
    value={filters.maxPrice}
    onChange={(e) =>
      setFilters({ ...filters, maxPrice: e.target.value })
    }
  />
</div>


      <div className="book-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <div className="image-wrapper">
              <img
                src={
                  book.coverImage
                    ? `http://localhost:8080${book.coverImage}`
                    : "/images/no-cover.png"
                }
                alt={book.title}
                className="book-cover"
                onError={(e) => {
                  e.target.src = "/images/no-cover.png";
                }}
              />

              <div className="overlay">
                {book.sellable && (
                  <button onClick={() => addBuy(book.id)}>
                    Acheter ({book.sellPrice} €)
                  </button>
                )}

                {book.rentable && (
                  <button onClick={() => addRent(book.id)}>
                    Louer ({book.rentPrice} €)
                  </button>
                )}
              </div>
            </div>

            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
