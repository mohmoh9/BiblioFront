import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { bookApi } from "../api/axios";
import "../styles/EditBook.css";


export default function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    description: "",
    coverImage: "",
    rentable: false,
    sellable: false,
    rentPrice: 0,
    sellPrice: 0,
    quantity: 0,
  });

  // 🔁 Charger le livre
  useEffect(() => {
    bookApi
      .get(`/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur chargement livre:", err);
        alert("Livre introuvable");
        navigate("/adminbooks");
      });
  }, [id, navigate]);

  // ✏ Changement champs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBook({
      ...book,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 💾 Sauvegarde
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await bookApi.put(`/${id}`, book);
      alert("Livre modifié avec succès");
      navigate("/adminbooks");
    } catch (err) {
      console.error("Erreur update:", err);
      alert("Erreur lors de la modification");
    }
  };

  if (loading) return <p style={{ padding: "2rem" }}>Chargement...</p>;

  return (
    <div className="editbook-container mt-4" style={{ maxWidth: "600px" }}>
      <h2> Modifier le livre</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="title"
          value={book.title}
          placeholder="Titre"
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="author"
          value={book.author}
          placeholder="Auteur"
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="isbn"
          value={book.isbn}
          placeholder="ISBN"
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-2"
          name="description"
          value={book.description}
          placeholder="Description"
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="coverImage"
          value={book.coverImage || ""}
          placeholder="URL image (ex: /uploads/book.jpg)"
          onChange={handleChange}
        />

        {/* Preview image */}
        <div className="editbook-preview">
          <img
            src={
              book.coverImage
                ? `http://localhost:8080${book.coverImage}`
                : "/images/no-cover.png"
            }
            alt="preview"
            width="120"
            style={{ borderRadius: "8px" }}
            onError={(e) => (e.target.src = "/images/no-cover.png")}
          />
        </div>

        {/* OPTIONS */}
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            name="sellable"
            checked={book.sellable}
            onChange={handleChange}
          />
          <label className="form-check-label">Vendable</label>
        </div>

        {book.sellable && (
          <input
            className="form-control mb-2"
            type="number"
            name="sellPrice"
            value={book.sellPrice}
            placeholder="Prix de vente"
            onChange={handleChange}
          />
        )}

        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            name="rentable"
            checked={book.rentable}
            onChange={handleChange}
          />
          <label className="form-check-label">Louable</label>
        </div>

        {book.rentable && (
          <input
            className="form-control mb-2"
            type="number"
            name="rentPrice"
            value={book.rentPrice}
            placeholder="Prix de location"
            onChange={handleChange}
          />
        )}

        <input
          className="form-control mb-3"
          type="number"
          name="quantity"
          value={book.quantity}
          placeholder="Quantité"
          onChange={handleChange}
        />

        <div className="editbook-actions">
          <button className="btn btn-primary"> Enregistrer</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/adminbooks")}
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}
