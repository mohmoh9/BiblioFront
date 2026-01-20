import { useEffect, useState } from "react";
import { bookApi } from "../api/axios";

export default function AdminDashboard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookApi.get("").then(res => setBooks(res.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">📚 Admin Livres</h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Stock</th>
            <th>Vente</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {books.map(b => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.quantity}</td>
              <td>{b.sellable ? "✔" : "❌"}</td>
              <td>{b.rentable ? "✔" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
