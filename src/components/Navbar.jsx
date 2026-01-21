import { Link, NavLink, useNavigate } from "react-router-dom";
import { isAuthenticated, logout, getCurrentUser } from "../auth/AuthService";
import { useState } from "react";
import "./Navbar.css"
import { useEffect } from "react";


export default function Navbar() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${search}`);
      setSearch("");
    }
  };



useEffect(() => {
  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          Bibliothèque
        </Link>

        {/* Toggler mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenu navbar */}
        <div className="collapse navbar-collapse" id="navbarMain">

          {/* Menu gauche */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/">Accueil</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/boutique">Boutique</NavLink></li>
            {/*<li className="nav-item"><NavLink className="nav-link" to="/location">Location</NavLink></li>*/}
            <li className="nav-item"><NavLink className="nav-link" to="/about">À propos</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/blog">Blog</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>

          {/* Menu droit */}
          <div className="d-flex align-items-center">

            {/* Recherche */}
            <form className="d-flex me-3" onSubmit={handleSearch}>
              <input
                className="form-control form-control-sm me-2"
                type="search"
                placeholder="Rechercher..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-outline-light btn-sm" type="submit">🔍</button>
            </form>

            {/* Panier */}
            <Link to="/panier" className="btn btn-outline-light me-3">🛒 Panier</Link>

            {/* Connexion / Profil */}
            {!isAuthenticated() ? (
              <Link to="/login" className="btn btn-light">Connexion</Link>
            ) : (
              <div className="dropdown">
                <button
                  className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
                  type="button"
                  id="dropdownProfile"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* Avatar */}
                  <img
                    src={user?.avatar || "https://i.pravatar.cc/40"}
                    alt="avatar"
                    className="rounded-circle me-2"
                    width="30"
                    height="30"
                  />
                  {/* Nom */}
                  <span>{user?.name || "Profil"}</span>
                </button>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/profile">Mon profil</Link>
                  </li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      Déconnexion
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}
