import "./Boutique.css";

const books = [
  {
    id: 1,
    title: "React pour débutants",
    author: "Jean Dupont",
    price: "15 €",
    image: "https://via.placeholder.com/200x280",
  },
  {
    id: 2,
    title: "JavaScript Avancé",
    author: "Marie Diallo",
    price: "20 €",
    image: "https://via.placeholder.com/200x280",
  },
  {
    id: 3,
    title: "Node.js Pratique",
    author: "Ali Traoré",
    price: "18 €",
    image: "https://via.placeholder.com/200x280",
  },
  {
    id: 4,
    title: "UX/UI Design",
    author: "Fatou Konaté",
    price: "22 €",
    image: "https://via.placeholder.com/200x280",
  },
];

export default function Shop() {
  return (
    <div className="shop-container">
      <h1>🛒 Boutique</h1>
      <p className="shop-subtitle">
        Découvrez notre sélection de livres
      </p>

      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p className="author">{book.author}</p>
            <p className="price">{book.price}</p>

            <div className="book-actions">
              <button className="buy-btn">Acheter</button>
              <button className="rent-btn">Louer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
