import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      {/* Hero */}
      <section className="about-hero">
        <h1> À propos de nous</h1>
        <p>
          Une bibliothèque en ligne moderne dédiée à la vente et à la location
          de livres pour tous les passionnés de lecture.
        </p>
      </section>

      {/* Content */}
      <section className="about-content">
        <div className="about-card">
          <h3> Notre mission</h3>
          <p>
            Rendre la lecture accessible à tous en proposant des livres de
            qualité à des prix abordables, disponibles à l’achat ou à la
            location, partout et à tout moment.
          </p>
        </div>

        <div className="about-card">
          <h3> Notre vision</h3>
          <p>
            Devenir la plateforme de référence pour les étudiants,
            professionnels et passionnés de lecture en Afrique et à
            l’international.
          </p>
        </div>

        <div className="about-card">
          <h3> Nos valeurs</h3>
          <ul>
            <li> Passion pour la lecture</li>
            <li> Accessibilité et partage</li>
            <li> Innovation numérique</li>
            <li> Culture et savoir</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
