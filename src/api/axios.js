import axios from "axios";


// Axios pour l'auth
export const authApi = axios.create({
  baseURL: "http://localhost:8080/api/auth",
  headers: { "Content-Type": "application/json" },
});

// Axios pour le panier
export const cartApi = axios.create({
  baseURL: "http://localhost:8080/api/panier",
  headers: { "Content-Type": "application/json" },
});

// instance livres
export const bookApi = axios.create({
  baseURL: "http://localhost:8080/api/books",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors pour ajouter le token
[authApi, cartApi].forEach((instance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );
});

const api = {
  authApi,
  cartApi,
};

export default api;