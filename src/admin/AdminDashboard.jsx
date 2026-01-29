import { Link } from "react-router-dom";
import { getCurrentUser } from "../auth/authService";
import "../styles/AdminDahboard.css";

export default function AdminDashboard() {
  const user = getCurrentUser();

  return (
<section className="admin-dashboard">
  <div className="admin-card">
    <div className="admin-content">
      <h1 className="admin-title">
        Bienvenue <span>{user?.name || "Administrateur"}</span>
      </h1>

      <p className="admin-text">
        Vous êtes connecté à l’espace d’administration de la bibliothèque.
      </p>

      <div className="admin-actions">
        <Link to="/addbookform" className="admin-btn-primary">
           Ajouter un livre
        </Link>

        <Link to="/adminbooks" className="admin-btn-secondary">
           Gérer les livres
        </Link>
      </div>
    </div>

    <div className="admin-image">
      <img
        src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
        alt="Bibliothèque"
      />
    </div>
  </div>
</section>

  );
}
