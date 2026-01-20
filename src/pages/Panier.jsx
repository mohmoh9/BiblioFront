import { useEffect, useState } from "react";
import { cartApi } from "../api/axios";

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mon Panier</h1>

      {cart.items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul className="space-y-4">
          {cart.items.map((item) => {
  const price =
    item.type === "BUY"
      ? item.book.sellPrice
      : item.book.rentPrice * item.rentDays;

  return (
    <li
      key={`${item.book.id}-${item.type}`}
      className="border p-4 rounded-md flex justify-between items-center"
    >
      <div>
        <h2 className="font-semibold">{item.book.title}</h2>
        <p>Auteur : {item.book.author}</p>
        <p>Quantité : {item.quantity}</p>
        <p>Type : {item.type}</p>
        {item.type === "RENT" && <p>Durée : {item.rentDays} jours</p>}
        <p className="font-semibold">Prix : {price} €</p>
      </div>

      <div className="flex gap-2">
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={() => handleAddBuy(item.book.id)}
        >
          + Acheter
        </button>

        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => handleAddRent(item.book.id, 7)}
        >
          + Louer
        </button>

        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
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
