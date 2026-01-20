import { useState } from "react";
import { getCurrentUser } from "../auth/AuthService";
import "./Profile.css";


export default function Profile() {
  const user = getCurrentUser(); // utilisateur connecté
  const [editMode, setEditMode] = useState(false);

  if (!user) return <p className="p-8 text-center text-red-500">Utilisateur non connecté</p>;

  return (
    <div className="profile-page">
  <h1>Mon Profil</h1>
  <div className="profile-card">
    <div className="profile-avatar">
      <img src={user?.avatar || "https://i.pravatar.cc/100"} alt="Avatar" />
      <h2>{user?.name || user?.email}</h2>
      <p>{user?.email}</p>
    </div>

    <div className="profile-info">
      <div>
        <label>Nom</label>
        <input type="text" defaultValue={user?.name} disabled={!editMode} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" defaultValue={user?.email} disabled />
      </div>
    </div>

    <div className="profile-actions">
      <button
        className={editMode ? "cancel-btn" : "edit-btn"}
        onClick={() => setEditMode(!editMode)}
      >
        {editMode ? "Annuler" : "Modifier"}
      </button>
    </div>
  </div>
</div>

  );
}
