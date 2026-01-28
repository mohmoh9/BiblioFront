import { useState } from "react";
import { adminBookApi } from "../api/axios";

export default function BookImageUpload({ bookId, onUploaded }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

const handleUpload = async () => {
  if (!file) return alert("Choisis une image");

  const formData = new FormData();
  formData.append("file", file);

  try {
    setLoading(true);
    const res = await adminBookApi.post(
      `/${bookId}/upload-cover`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" }
      }
    );

    // renvoie l'objet livre mis à jour au parent
    onUploaded(res.data);
    alert("Image uploadée !");
  } catch (err) {
    console.error("Erreur upload:", err);
    alert("Erreur lors de l'upload");
  } finally {
    setLoading(false);
  }
};


  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Upload..." : "Uploader image"}
      </button>
    </div>
  );
}
