import api from "../api/axios";

export const login = async (email, password) => {
  const response = await api.post("/api/auth/login", {
    email,
    password,
  });

  localStorage.setItem("token", response.data.token);
  localStorage.setItem("user", JSON.stringify(response.data));

  return response.data;
};

export const signup = async (user) => {
  return api.post("/api/auth/register", user);
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}; 

