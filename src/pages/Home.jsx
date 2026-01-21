import { Link } from "react-router-dom";
import { getCurrentUser } from "../auth/AuthService";
import "./Home.css";

export default function Home() {
  const user = getCurrentUser();

  return (
    <section className="home-hero">
      <div className="home-overlay"></div>

      <div className="home-content">
        <h1 className="home-title">
          📚 Bienvenue{" "}
          {user ? (
            <span className="user-name">{user.name}</span>
          ) : (
            <span>dans notre Bibliothèque</span>
          )}
        </h1>

        <p className="home-lead">
          Achetez ou louez vos livres préférés, facilement et rapidement.
        </p>

        <div className="home-actions">
          <Link to="/boutique" className="btn-primary">
            🛒 Découvrir la boutique
          </Link>

          {user?.role === "ADMIN" && (
            <Link to="/addbookform" className="btn-secondary">
              ➕ Ajouter un livre
            </Link>
          )}
        </div>
      </div>

      {/* Image décorative */}
      <img
        src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
        alt="Bibliothèque"
        className="home-image"
      />
    </section>
  );
}
