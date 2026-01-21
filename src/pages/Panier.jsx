import { useEffect, useState } from "react";
import { cartApi } from "../api/axios";
import "./Panier.css"

export default function Panier() {
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCart = async () => {
    try {
      const response = await cartApi.get("");
      setCart(response.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Impossible de récupérer le panier");
    } finally {
      setLoading(false);
    }
  };

  // ➕ AJOUT ACHAT
  const handleAddBuy = async (bookId) => {
    try {
      const response = await cartApi.post(
        `/add/${bookId}`,
        null,
        { params: { type: "BUY" } }
      );
      setCart(response.data);
    } catch (err) {
      console.error(err);
      setError("Impossible d'ajouter le livre (achat)");
    }
  };

  // ➕ AJOUT LOCATION
  const handleAddRent = async (bookId, days = 7) => {
    try {
      const response = await cartApi.post(
        `/add/${bookId}`,
        null,
        {
          params: {
            type: "RENT",
            days: days
          }
        }
      );
      setCart(response.data);
    } catch (err) {
      console.error(err);
      setError("Impossible d'ajouter le livre (location)");
    }
  };

  // ➖ SUPPRESSION
  const handleRemove = async (bookId) => {
    try {
      const response = await cartApi.delete(`/remove/${bookId}`);
      setCart(response.data);
    } catch (err) {
      console.error(err);
      setError("Impossible de supprimer le livre");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) return <p>Chargement du panier...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="panier-container">
      <h1 className="panier-title">Mon Panier</h1>

      {cart.items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul className="panier-list">
          {cart.items.map((item) => {
  const price =
    item.type === "BUY"
      ? item.book.sellPrice
      : item.book.rentPrice * item.rentDays;

  return (
    <li
      key={`${item.book.id}-${item.type}`}
      className="book-item"
    >
      <div className="panier-info">
        <h2 className="font-semibold">{item.book.title}</h2>
        <img
  src={item.book.coverImage || "/images/no-cover.png"}
  alt={item.book.title}
  className="book-cover"
/>
<div className="panier-text">
        <p>Auteur : {item.book.author}</p>
        <p>Quantité : {item.quantity}</p>
        <p>Type : {item.type}</p>
        {item.type === "RENT" && <p>Durée : {item.rentDays} jours</p>}
        <p className="panier-price">Prix : {price} €</p>
        </div>
      </div>

      <div className="panier-actions">
        <button
          className="btn-buy"
          onClick={() => handleAddBuy(item.book.id)}
        >
          + Acheter
        </button>

        <button
          className="btn-rent"
          onClick={() => handleAddRent(item.book.id, 7)}
        >
          + Louer
        </button>

        <button
          className="btn-remove"
          onClick={() => handleRemove(item.book.id)}
        >
          -
        </button>
      </div>
    </li>
  );
})}

        </ul>
      )}
    </div>
  );
}
