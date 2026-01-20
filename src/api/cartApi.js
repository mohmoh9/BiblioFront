import axios from "axios";
import { cartApi } from "../api/axios";

const API_URL = "http://localhost:8080/api/panier"; // URL de ton backend

// Ajouter le token JWT si nécessaire
const getAuthHeader = () => {
  const token = localStorage.getItem("token"); // stocké après login
  return { Authorization: `Bearer ${token}` };
};

// Récupérer le panier
export const getCart = () => cartApi.get("");

// Ajouter un livre

export const addToCart = (bookId, type) =>
  cartApi.post(`/add?bookId=${bookId}&type=${type}`);

export const checkout = () => cartApi.post("/checkout");


// Supprimer un livre
export const removeFromCart = (bookId) => {
  return axios.delete(`${API_URL}/remove/${bookId}`, { headers: getAuthHeader() });
};

// Vider le panier
export const clearCart = () => {
  return axios.post(`${API_URL}/clear`, null, { headers: getAuthHeader() });
};
