# 📚 Bibliothèque en ligne – Application Web

Application web complète de **bibliothèque en ligne** permettant aux utilisateurs de :
- consulter des livres
- acheter ou louer des livres
- rechercher des ouvrages
- gérer un panier
- créer un compte et se connecter
- gérer leur profil utilisateur

Le projet est composé d’un **frontend React** et d’un **backend Spring Boot**.

---

## 🚀 Fonctionnalités

### 👤 Authentification
- Inscription
- Connexion / Déconnexion
- Stockage du token JWT
- Gestion de la session utilisateur

### 📖 Livres
- Liste des livres
- Boutique (achat)
- Location de livres
- Notation des livres ⭐
- Recherche par mot-clé

### 🛒 Panier
- Ajout / suppression de livres
- Accès rapide depuis la navbar
- Compatible mobile

### 👤 Profil utilisateur
- Affichage du nom et de l’email
- Avatar utilisateur
- Mode édition du profil
- Déconnexion

### 🌐 Navigation
- Navbar **Bootstrap Dark Mode**
- Menu responsive (burger menu)
- Pages :
  - Accueil
  - Boutique
  - Location
  - À propos
  - Blog
  - Contact
  - Recherche
  - Panier
  - Profil

---

## 🧱 Stack Technique

### Frontend
- **React**
- **React Router**
- **Bootstrap 5**
- JavaScript (ES6+)
- CSS

### Backend
- **Spring Boot**
- Spring Security
- JWT (authentification)
- REST API

### Base de données
- MySQL / PostgreSQL (selon configuration)

---

## 📁 Structure du projet

### Frontend

src/
├── auth/
│ └── authService.js
├── components/
│ └── Navbar.jsx
├── pages/
│ ├── Home.jsx
│ ├── Shop.jsx
│ ├── Location.jsx
│ ├── Profile.jsx
│ └── Cart.jsx
├── App.jsx
└── main.jsx


### Backend

src/main/java/com/bibliotheque/
├── controller/
├── service/
├── repository/
├── model/
└── security/


---

## ⚙️ Installation & Lancement

### 🔹 Backend (Spring Boot)

1. Cloner le projet
```bash
git clone https://github.com/ton-repo/bibliotheque.git

    Configurer la base de données (application.properties)

spring.datasource.url=jdbc:mysql://localhost:3306/bibliotheque
spring.datasource.username=root
spring.datasource.password=******

    Lancer le backend

mvn spring-boot:run

➡️ Backend disponible sur :
http://localhost:8080
🔹 Frontend (React)

    Aller dans le dossier frontend

cd frontend

    Installer les dépendances

npm install

    Lancer l’application

npm run dev

➡️ Frontend disponible sur :
http://localhost:5173
🔐 Authentification (JWT)

    Token stocké dans localStorage

    Utilisateur stocké sous la clé user

    Protection des routes sensibles (profil, panier)

📱 Responsive Design

    Navbar responsive (Bootstrap)

    Menu burger mobile

    Interface adaptée mobile / tablette / desktop

🧪 Améliorations futures

    Paiement en ligne 💳

    Historique des commandes

    Avis et commentaires utilisateurs

    Dashboard administrateur

    Upload d’avatar utilisateur

    Mode sombre global 🌙

👨‍💻 Auteur

Moh Tamboura
Projet académique / personnel
Développé avec ❤️ en React & Spring Boot
📄 Licence

Ce projet est libre d’utilisation à des fins pédagogiques.