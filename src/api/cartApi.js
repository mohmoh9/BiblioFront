import axios from "axios";

const API_URL = "http://localhost:8080/api/panier"; // URL de ton backend

// Ajouter le token JWT si nécessaire
const getAuthHeader = () => {
  const token = localStorage.getItem("token"); // stocké après login
  return { Authorization: `Bearer ${token}` };
};

// Récupérer le panier
export const getCart = () => {
  return axios.get(API_URL, { headers: getAuthHeader() });
};

// Ajouter un livre
export const addToCart = (bookId) => {
  return axios.post(`${API_URL}/add/${bookId}`, null, { headers: getAuthHeader() });
};

// Supprimer un livre
export const removeFromCart = (bookId) => {
  return axios.delete(`${API_URL}/remove/${bookId}`, { headers: getAuthHeader() });
};

// Vider le panier
export const clearCart = () => {
  return axios.post(`${API_URL}/clear`, null, { headers: getAuthHeader() });
};
