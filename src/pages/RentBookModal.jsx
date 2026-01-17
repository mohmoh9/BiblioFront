import { useState } from "react";
import axios from "axios";

export default function RentBookModal({ bookId }) {
  const [duration, setDuration] = useState(7);

  const rentBook = async () => {
    await axios.post(
      "http://localhost:8080/api/loans/rent",
      {
        bookId: bookId,
        durationDays: duration,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    alert("Livre loué avec succès");
  };

  return (
    <div>
      <select
        className="form-select mb-2"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      >
        <option value={7}>7 jours</option>
        <option value={14}>14 jours</option>
        <option value={30}>30 jours</option>
      </select>

      <button className="btn btn-warning w-100" onClick={rentBook}>
        Confirmer la location
      </button>
    </div>
  );
}
