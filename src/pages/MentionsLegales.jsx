import "./MentionsLegales.css";

export default function MentionsLegales() {
  return (
    <section className="legal-container">
      <h1 className="legal-title"> Mentions légales</h1>

      <div className="legal-block">
        <h3> Éditeur du site</h3>
        <p>
          <strong>Nom :</strong> Bibliothèque en ligne<br />
          <strong>Responsable :</strong> Administrateur<br />
          <strong>Email :</strong> contact@bibliotheque.com
        </p>
      </div>

      <div className="legal-block">
        <h3> Données personnelles</h3>
        <p>
          Les données collectées servent uniquement à la gestion des comptes
          utilisateurs et des commandes.
        </p>
      </div>

      <div className="legal-block">
        <h3> Sécurité</h3>
        <p>
          Toutes les informations sont protégées et ne sont jamais partagées
          sans consentement.
        </p>
      </div>

      <div className="legal-block">
        <h3> Responsabilité</h3>
        <p>
          L’éditeur ne peut être tenu responsable d’une mauvaise utilisation
          du service.
        </p>
      </div>
    </section>
  );
}
