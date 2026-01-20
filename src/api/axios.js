import axios from "axios";

/* ===========================
   AUTH API
=========================== */
export const authApi = axios.create({
  baseURL: "http://localhost:8080/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

/* ===========================
   CART API
=========================== */
export const cartApi = axios.create({
  baseURL: "http://localhost:8080/api/panier",
  headers: {
    "Content-Type": "application/json",
  },
});

/* ===========================
   BOOK API
=========================== */
export const bookApi = axios.create({
  baseURL: "http://localhost:8080/api/books",
  headers: {
    "Content-Type": "application/json",
  },
});

/* ===========================
   JWT INTERCEPTOR
=========================== */
[authApi, cartApi, bookApi].forEach((api) => {
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
});
