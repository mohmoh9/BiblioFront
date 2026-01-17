import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function BookCard({ book }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src="https://via.placeholder.com/200x250"
          className="card-img-top"
          alt={book.title}
        />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">{book.price} FCFA</p>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(book)}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}
