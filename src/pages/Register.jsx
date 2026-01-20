import { useState } from "react";
import { signup } from "../auth/AuthService";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";


export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });

  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const navigate = useNavigate();

  // ----------- VALIDATION -----------
  const isNameValid = form.name.trim().length >= 2;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isPasswordValid = form.password.length >= 6;

  const isFormValid =
    isNameValid &&
    isEmailValid &&
    isPasswordValid;

  // ----------- HANDLERS -----------
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 350);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setTouched({
        name: true,
        email: true,
        password: true,
      });
      triggerShake();
      return;
    }

    try {
      await signup(form);
      navigate("/login");
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Erreur lors de la création du compte";
      setError(message);
      triggerShake();
    }
  };

  return (
    <div className="login-bg min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className={`login-card bg-white border rounded-xl p-8 w-80 space-y-4 ${
          shake ? "shake" : ""
        }`}
      >
        <h2 className="text-xl font-semibold text-center">
          Créer un compte
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* Nom */}
        <div>
          <input
            name="name"
            value={form.name}
            placeholder="Nom"
            className={`login-input w-full border rounded-md px-3 py-2 text-sm outline-none
              ${
                touched.name
                  ? isNameValid
                    ? "input-success"
                    : "input-error"
                  : ""
              }
            `}
            onChange={handleChange}
            onBlur={() =>
              setTouched((t) => ({ ...t, name: true }))
            }
          />
          {touched.name && !isNameValid && (
            <p className="error-text">Minimum 2 caractères</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            name="email"
            value={form.email}
            type="email"
            placeholder="Email"
            className={`login-input w-full border rounded-md px-3 py-2 text-sm outline-none
              ${
                touched.email
                  ? isEmailValid
                    ? "input-success"
                    : "input-error"
                  : ""
              }
            `}
            onChange={handleChange}
            onBlur={() =>
              setTouched((t) => ({ ...t, email: true }))
            }
          />
          {touched.email && !isEmailValid && (
            <p className="error-text">Email invalide</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            name="password"
            value={form.password}
            type="password"
            placeholder="Password"
            className={`login-input w-full border rounded-md px-3 py-2 text-sm outline-none
              ${
                touched.password
                  ? isPasswordValid
                    ? "input-success"
                    : "input-error"
                  : ""
              }
            `}
            onChange={handleChange}
            onBlur={() =>
              setTouched((t) => ({ ...t, password: true }))
            }
          />
          {touched.password && !isPasswordValid && (
            <p className="error-text">Minimum 6 caractères</p>
          )}
        </div>

        <button
          type="submit"
          className="login-btn w-full bg-black text-white py-2 rounded-md transition"
        >
          S’inscrire
        </button>

        <p className="text-sm text-center text-neutral-600">
          Déjà un compte ?{" "}
          <Link to="/login" className="underline hover:text-black">
            Se connecter
          </Link>
        </p>
      </form>
    </div>
  );
}
