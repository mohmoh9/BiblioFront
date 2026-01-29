import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/books")
      .then((res) => res.json())
      .then((data) => {
        // on prend les 3 derniers
        setBooks(data.slice(-3).reverse());
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home">
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-content">
          <h1>
            Découvrez votre prochaine <span>lecture</span>
          </h1>
          <p>
            Achetez ou louez vos livres préférés dans une bibliothèque moderne.
          </p>

          <div className="home-hero-actions">
            <Link to="/boutique" className="btn-primary">
               Voir la boutique
            </Link>
            <Link to="/register" className="btn-outline">
              Créer un compte
            </Link>
          </div>
        </div>
      </section>

      {/* NOUVEAUTÉS */}
      <section className="home-latest">
        <h2>Nouveautés</h2>

        {loading ? (
          <p className="loading">Chargement...</p>
        ) : (
          <div className="book-grid">
            {books.map((book) => (
              <div key={book.id} className="book-card">
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
                <h3>{book.title}</h3>
                <p className="author">{book.author}</p>
                <p className="sellPrice">{book.sellPrice} F CFA</p>
                <Link to="/boutique" className="btn-secondary">
                  Voir
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ADMIN CTA */}
      <section className="home-admin">
        <h3>Administration</h3>
        <p>Gérez le catalogue de livres depuis votre espace admin</p>
        <Link to="/admin" className="btn-primary">
          Accéder à l’admin
        </Link>
      </section>
    </div>
  );
}
