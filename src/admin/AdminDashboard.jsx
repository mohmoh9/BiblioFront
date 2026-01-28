import { Link } from "react-router-dom";
import { getCurrentUser } from "../auth/AuthService";

export default function AdminDashboard() {

  const user = getCurrentUser();
console.log("CURRENT USER:", user);

  return(
<section className="home-hero">
      <div className="home-overlay"></div>

      <div className="home-content">
        <h1 className="home-title">
           Bienvenue{" "}
          {user ? (
            <span className="user-name">{user.name}</span>
          ) : (
            <span>dans notre Bibliothèque</span>
          )}
        </h1>

        <p className="home-lead">
        Vous êtes sur la page Admin,  
        </p>

        <div className="home-actions">


                   {user?.role === "ADMIN" && (
            <Link to="/addbookform" className="btn-secondary">
               Ajouter un livre
            </Link>
          )}

                    {user?.role === "ADMIN" && (
            <Link to="/adminbooks" className="btn-secondary">
               Liste des livres
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
