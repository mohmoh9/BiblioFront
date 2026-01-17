import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 mt-5">
      <div className="container">
        <div className="row">

          {/* Logo / Description */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">📚 Bibliothèque</h5>
            <p className="small">
              Plateforme de vente et de location de livres.
              Découvrez, lisez et partagez le savoir.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Navigation</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Accueil</Link></li>
              <li><Link to="/boutique" className="text-light text-decoration-none">Boutique</Link></li>
              <li><Link to="/location" className="text-light text-decoration-none">Location</Link></li>
              <li><Link to="/blog" className="text-light text-decoration-none">Blog</Link></li>
            </ul>
          </div>

          {/* À propos */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">À propos</h6>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-light text-decoration-none">Qui sommes-nous</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
              <li><Link to="/faq" className="text-light text-decoration-none">FAQ</Link></li>
              <li><Link to="/mentions-legales" className="text-light text-decoration-none">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Contact</h6>
            <p className="small mb-1">📍 Bamako, Mali</p>
            <p className="small mb-1">📧 mohamedtamboura452@gmail.com</p>
            <p className="small mb-1">📞 +223 90 29 70 33</p>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Copyright */}
        <div className="text-center pb-3">
          <small>
            © {new Date().getFullYear()} Bibliothèque — Tous droits réservés
          </small>
        </div>
      </div>
    </footer>
  );
}
