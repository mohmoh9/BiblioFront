import api from "./axios";

export const createOrder = () => api.post("/orders");
export const getMyOrders = () => api.get("/orders");
