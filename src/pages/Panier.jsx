import { useEffect, useState } from "react";
import { cartApi } from "../api/axios"; // ✅ utiliser la bonne instance

export default function Panier() {
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCart = async () => {
    setLoading(true);
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

  const handleRemove = async (bookId) => {
    try {
      const response = await cartApi.delete(`/remove/${bookId}`);
      setCart(response.data);
    } catch (err) {
      console.error(err);
      setError("Impossible de supprimer le livre");
    }
  };
  const handleAdd = async (bookId) => {
    try {
      const response = await cartApi.post(`/add/${bookId}`, null, {
  params: { type: "BUY" }
}, {
  params: {
    type: "RENT",
    days: 7
  }
  }) ;
      setCart(response.data);
    } catch (err) {
      console.error(err);
      setError("Impossible d'ajouter le livre");
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
          {cart.items.map((item) => (
            <li key={item.id} className="border p-4 rounded-md flex justify-between items-center">
              <div>
                <h2 className="font-semibold">{item.book.title}</h2>
                <p>Auteur : {item.book.author}</p>
                <p>Quantité : {item.quantity}</p>
                <p>Prix : {item.book.price} €</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => handleAdd(item.book.id)}>+</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleRemove(item.book.id)}>-</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cart.items.length > 0 && (
        <div className="mt-4">
          <p className="font-semibold">
            Total : {cart.items.reduce((sum, item) => sum + item.book.price * item.quantity, 0)} €
          </p>
        </div>
      )}
    </div>
  );
}
