import { useEffect, useState } from "react";
import { bookApi } from "../api/axios";
import { useNavigate } from "react-router-dom";
import "../styles/AdminBook.css";

export default function AdminBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 🔁 Charger les livres
  const fetchBooks = () => {
    setLoading(true);
    bookApi
      .get("")
      .then((res) => {
        console.log("ADMIN BOOKS:", res.data);
        setBooks(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => console.error("Erreur API:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // ❌ DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer ce livre ?")) return;

    try {
      await bookApi.delete(`/${id}`);
      setBooks((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      console.error("Erreur suppression:", err);
      alert("Erreur lors de la suppression");
    }
  };

  // ✏ UPDATE (redirige vers un formulaire)
  const handleEdit = (id) => {
    navigate(`/admin/books/edit/${id}`);
  };

  if (loading) return <p className="loading">Chargement...</p>;

  return (
    <div className="admin-books">
      <h1>📚 Admin – Gestion des livres</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Stock</th>
            <th>Vente</th>
            <th>Prix Vente</th>
            <th>Location</th>
            <th>Prix Location</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.length === 0 && (
            <tr>
              <td colSpan="10">Aucun livre</td>
            </tr>
          )}

          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.quantity}</td>
              <td>{book.sellable ? "✔" : "❌"}</td>
              <td>{book.sellPrice}</td>
              <td>{book.rentable ? "✔" : "❌"}</td>
              <td>{book.rentPrice}</td>

              {/* IMAGE */}
              <td>
                <img
                  src={
                    book.coverImage
                      ? `http://localhost:8080${book.coverImage}`
                      : "/images/no-cover.png"
                  }
                  alt={book.title}
                  width="60"
                  height="80"
                  onError={(e) => {
                    e.target.src = "/images/no-cover.png";
                  }}
                />
              </td>

              {/* ACTIONS */}
              <td>
                <div className="actions">
                  <button
                    className="btn-edit"
                    onClick={() => handleEdit(book.id)}
                  >
                   Modifier
                  </button>

                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(book.id)}
                  >
                   Supprimer
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
