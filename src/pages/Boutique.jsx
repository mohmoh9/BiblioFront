import { useEffect, useState } from "react";
import { bookApi } from "../api/axios";

export default function Shop() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    bookApi.get("") // baseURL = /api/books
      .then(res => {
        console.log("Books API:", res.data);
        setBooks(Array.isArray(res.data) ? res.data : res.data.content || []);
      })
      .catch(err => console.error("Erreur books:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="shop-container">
      <h1>🛒 Boutique</h1>

      <div className="book-grid">
        {books.map(book => (
          <div className="book-card" key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.sellPrice} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}
