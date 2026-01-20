import { Link } from "react-router-dom";
import { getCurrentUser } from "../auth/AuthService";
import "./Home.css";

export default function Home() {
  const user = getCurrentUser();

  return (
    <div className="home-container">
      <h1>
        📚 Bienvenue{" "}
        {user ? <span className="user-name">{user.name}</span> : "dans notre Bibliothèque"}
      </h1>

      <p className="home-lead">
        Achetez ou louez vos livres préférés en ligne
      </p>

      <Link to="/boutique" className="shop-btn">
        🛒 Aller à la boutique
      </Link>

      <img
        src="https://via.placeholder.com/800x300"
        className="home-img"
        alt="Bibliothèque"
      />
    </div>
  );
}
