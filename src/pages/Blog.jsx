import "./Blog.css";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Pourquoi lire tous les jours ?",
      excerpt:
        "La lecture quotidienne améliore la concentration, la créativité et réduit le stress.",
      image: "https://source.unsplash.com/400x300/?reading,book"
    },
    {
      id: 2,
      title: "Top 5 des livres de programmation",
      excerpt:
        "Découvrez les meilleurs livres pour devenir développeur web et logiciel.",
      image: "https://source.unsplash.com/400x300/?programming,code"
    },
    {
      id: 3,
      title: "Acheter ou louer un livre ?",
      excerpt:
        "Chaque option a ses avantages selon votre budget et vos habitudes.",
      image: "https://source.unsplash.com/400x300/?library,books"
    }
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">📰 Notre Blog</h1>
      <p className="blog-subtitle">
        Conseils, lectures et actualités autour des livres
      </p>

      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} />
            <div className="blog-card-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <button>Lire la suite</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
