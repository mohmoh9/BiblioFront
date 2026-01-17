export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Pourquoi lire tous les jours ?",
      excerpt:
        "La lecture quotidienne améliore la concentration et la créativité..."
    },
    {
      id: 2,
      title: "Top 5 des livres de programmation",
      excerpt:
        "Découvrez les meilleurs livres pour devenir développeur..."
    },
    {
      id: 3,
      title: "Acheter ou louer un livre ?",
      excerpt:
        "Chaque option a ses avantages selon votre besoin..."
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📰 Blog</h2>

      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.excerpt}</p>
                <button className="btn btn-outline-primary">
                  Lire la suite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
