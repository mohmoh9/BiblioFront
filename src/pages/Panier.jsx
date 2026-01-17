import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Panier() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>🧺 Panier</h2>

      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <ul className="list-group">
          {cart.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between"
            >
              {item.title} - {item.price} €
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
