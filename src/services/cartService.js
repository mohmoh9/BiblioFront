import { cartApi } from "../api/axios";

// Récupérer le panier
export const getCart = () => cartApi.get("");

// Achat
export const addBuy = (bookId) =>
  cartApi.post(`/add/${bookId}`, null, {
    params: { type: "BUY" },
  });

// Location
export const addRent = (bookId, days) =>
  cartApi.post(`/add/${bookId}`, null, {
    params: { type: "RENT", days },
  });

// Supprimer
export const removeFromCart = (bookId) =>
  cartApi.delete(`/remove/${bookId}`);

// Vider
export const clearCart = () => cartApi.delete("/clear");

// Checkout
export const checkout = () => cartApi.post("/checkout");
