import { addToCart } from "../api/cartApi";
import RatingStars from "./RatingStars";

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <h4>{book.title}</h4>
      <p>{book.price} €</p>

      <RatingStars bookId={book.id} />

      <button onClick={() => addToCart(book.id)}>
        Ajouter au panier
      </button>
    </div>
  );
}
