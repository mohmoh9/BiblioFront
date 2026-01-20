import { useState } from "react";
import { rateBook } from "../api/ratingApi";

export default function RatingStars({ bookId }) {
  const [rating, setRating] = useState(0);

  const handleRate = (value) => {
    setRating(value);
    rateBook(bookId, value);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          style={{ cursor: "pointer", color: n <= rating ? "gold" : "gray" }}
          onClick={() => handleRate(n)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
