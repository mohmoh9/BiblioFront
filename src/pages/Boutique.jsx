import BookCard from "../components/BookCard";

const books = [
  { id: 1, title: "Spring Boot", price: 25 },
  { id: 2, title: "React JS", price: 30 },
  { id: 3, title: "Java Avancé", price: 20 },
];

export default function Boutique() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">🛒 Boutique</h2>
      <div className="row">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
