import { useState } from "react";
import { getCurrentUser } from "../auth/authService";
import { userApi } from "../api/axios";
import "./Profile.css";

export default function Profile() {
  const currentUser = getCurrentUser();

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(currentUser?.name || "");
  const [loading, setLoading] = useState(false);

  if (!currentUser) {
    return <p className="profile-error">Utilisateur non connecté</p>;
  }

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await userApi.put("/me", { name });

      // 🔄 mettre à jour le user stocké
      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Profil mis à jour");
      setEditMode(false);
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la sauvegarde");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-page">
      <h1 className="profile-title">Mon Profil</h1>

      <div className="profile-card">
        <div className="profile-avatar">
          <img
            src={currentUser.avatar || "https://i.pravatar.cc/150"}
            alt="Avatar"
          />
          <h2>{name}</h2>
          <p>{currentUser.email}</p>

          <span
            className={`profile-role ${
              currentUser.role === "ADMIN" ? "admin" : "user"
            }`}
          >
            {currentUser.role}
          </span>
        </div>

        <div className="profile-info">
          <div className="profile-field">
            <label>Nom</label>
            <input
              type="text"
              value={name}
              disabled={!editMode}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="profile-field">
            <label>Email</label>
            <input type="email" value={currentUser.email} disabled />
          </div>
        </div>

        <div className="profile-actions">
          <button
            className={editMode ? "cancel-btn" : "edit-btn"}
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? "Annuler" : "Modifier"}
          </button>

          {editMode && (
            <button
              className="save-btn"
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? "Sauvegarde..." : "Sauvegarder"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
