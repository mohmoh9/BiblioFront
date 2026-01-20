import { useEffect, useState } from "react";
import { bookApi, cartApi } from "../api/axios";

export default function Shop() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ ACHAT
  const addBuy = async (id) => {
    try {
      await cartApi.post(`/add/${id}`, null, {
        params: { type: "BUY" }
      });
      alert("Livre ajouté au panier (achat)");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'achat");
    }
  };

  // ✅ LOCATION
  const addRent = async (id) => {
    try {
      await cartApi.post(`/add/${id}`, null, {
        params: { type: "RENT", days: 7 }
      });
      alert("Livre ajouté au panier (location)");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la location");
    }
  };

  useEffect(() => {
    bookApi
      .get("")
      .then((res) => {
        setBooks(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => console.error("Erreur books:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="shop-container">
      <h1>🛒 Boutique</h1>

      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>

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
        ))}
      </div>
    </div>
  );
}
