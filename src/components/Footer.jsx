import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Bouton retour en haut */}
      <button className="back-to-top" onClick={scrollToTop}>
        ⬆
      </button>

      <footer className="footer-glass pt-5 mt-5">
        {/* Ligne dégradée animée */}
        <div className="footer-gradient-line"></div>

        <div className="container">
          <div className="row">

            {/* Logo / Description */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">📚 Bibliothèque</h5>
              <p className="small">
                Plateforme moderne de vente et de location de livres.
                Découvrez, lisez et partagez le savoir.
              </p>

              {/* Réseaux sociaux */}
              <div className="social-icons">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="X">🐦</a>
                <a href="#" aria-label="LinkedIn">💼</a>
              </div>
            </div>

            {/* Navigation */}
            <div className="col-md-2 mb-4">
              <h6 className="fw-bold">Navigation</h6>
              <ul className="list-unstyled">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/boutique">Boutique</Link></li>
                <li><Link to="/location">Location</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>

            {/* À propos */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">À propos</h6>
              <ul className="list-unstyled">
                <li><Link to="/about">Qui sommes-nous</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/mentions-legales">Mentions légales</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">Contact</h6>
              <p className="small">📍 Bamako, Mali</p>
              <p className="small">📧 mohamedtamboura452@gmail.com</p>
              <p className="small">📞 +223 90 29 70 33</p>
            </div>

          </div>

          <hr />

          <div className="text-center pb-3">
            <small>
              © {new Date().getFullYear()} Bibliothèque — Tous droits réservés
            </small>
          </div>
        </div>
      </footer>
    </>
  );
}
