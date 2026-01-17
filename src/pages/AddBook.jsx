import { useState } from "react";
import axios from "axios";

export default function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    rentable: false,
    sellable: false,
    rentPrice: 0,
    sellPrice: 0,
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBook({
      ...book,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/books", book, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    alert("Livre ajouté avec succès");
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un livre</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="title" placeholder="Titre" onChange={handleChange} />
        <input className="form-control mb-2" name="author" placeholder="Auteur" onChange={handleChange} />
        <textarea className="form-control mb-2" name="description" placeholder="Description" onChange={handleChange} />

        <div className="form-check">
          <input type="checkbox" className="form-check-input" name="rentable" onChange={handleChange} />
          <label className="form-check-label">Louable</label>
        </div>

        {book.rentable && (
          <input
            className="form-control mb-2"
            name="rentPrice"
            type="number"
            placeholder="Prix de location"
            onChange={handleChange}
          />
        )}

        <div className="form-check mt-2">
          <input type="checkbox" className="form-check-input" name="sellable" onChange={handleChange} />
          <label className="form-check-label">Vendable</label>
        </div>

        {book.sellable && (
          <input
            className="form-control mb-2"
            name="sellPrice"
            type="number"
            placeholder="Prix de vente"
            onChange={handleChange}
          />
        )}

        <input
          className="form-control mb-2"
          name="quantity"
          type="number"
          placeholder="Quantité"
          onChange={handleChange}
        />

        <button className="btn btn-primary mt-3">Ajouter</button>
      </form>
    </div>
  );
}
