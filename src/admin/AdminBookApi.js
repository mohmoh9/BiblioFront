export const adminBookApi = axios.create({
  baseURL: "http://localhost:8080/api/books",
});

adminBookApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
