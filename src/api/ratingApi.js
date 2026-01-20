import api from "./axios";

export const rateBook = (bookId, rating) =>
  api.post(`/ratings/${bookId}`, { rating });

export const getAverageRating = (bookId) =>
  api.get(`/ratings/average/${bookId}`);
