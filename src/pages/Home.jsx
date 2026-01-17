import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>📚 Bienvenue dans notre Bibliothèque</h1>
      <p className="home-lead">
        Achetez ou louez vos livres préférés en ligne
      </p>

      <Link to="/shop" className="shop-btn">
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
