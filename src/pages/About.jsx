export default function About() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">📖 À propos de nous</h2>

      <p className="lead">
        Notre bibliothèque en ligne a pour objectif de faciliter l’accès
        aux livres à travers la vente et la location.
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <h5>🎯 Notre mission</h5>
          <p>
            Rendre la lecture accessible à tous en proposant des livres
            à prix abordables, disponibles à l’achat ou à la location.
          </p>
        </div>

        <div className="col-md-6">
          <h5>🚀 Notre vision</h5>
          <p>
            Devenir une plateforme de référence pour les passionnés de lecture,
            étudiants et professionnels.
          </p>
        </div>
      </div>
    </div>
  );
}
