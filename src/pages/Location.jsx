import { useState } from "react";

export default function Location() {
  const [days, setDays] = useState(1);

  const pricePerDay = 2;
  const total = days * pricePerDay;

  return (
    <div className="container mt-4">
      <h2>📅 Location de livres</h2>

      <div className="card p-4 mt-3">
        <h5>Clean Code</h5>

        <label className="mt-2">Durée (jours)</label>
        <input
          type="number"
          min="1"
          value={days}
          className="form-control"
          onChange={(e) => setDays(e.target.value)}
        />

        <p className="mt-3">
          Prix total : <strong>{total} €</strong>
        </p>

        <button className="btn btn-success">
          Louer le livre
        </button>
      </div>
    </div>
  );
}
