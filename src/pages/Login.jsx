import { useState, useEffect } from "react";
import { login, isAuthenticated } from "../auth/authService";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

export default function Login() {
  const { setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) navigate("/");
  }, [navigate]);

  const isEmailValid = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid = password.length >= 4;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailValid(email) || !isPasswordValid) {
      setTouched({ email: true, password: true });
      return;
    }

    try {
      const user = await login(email, password);
      setUser(user); // 🔥 IMPORTANT
      navigate("/");
    } catch {
      setError("Identifiants invalides");
    }
  };

  return (
    <div className="login-bg min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="login-card bg-white border rounded-xl p-8 w-80 space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">Connexion</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Email */}
        <div>
          <input
            className={`login-input w-full border rounded-md px-3 py-2 text-sm outline-none
              ${touched.email ? (isEmailValid(email) ? "input-success" : "input-error") : ""}`}
            placeholder="Email"
            value={email}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            onChange={(e) => setEmail(e.target.value)}
          />
          {touched.email && !isEmailValid(email) && (
            <p className="error-text">Email requis</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            className={`login-input w-full border rounded-md px-3 py-2 text-sm outline-none
              ${touched.password ? (isPasswordValid ? "input-success" : "input-error") : ""}`}
            placeholder="Password"
            value={password}
            onBlur={() => setTouched((t) => ({ ...t, password: true }))}
            onChange={(e) => setPassword(e.target.value)}
          />
          {touched.password && !isPasswordValid && (
            <p className="error-text">Mot de passe (min. 4 caractères)</p>
          )}
        </div>

        <button
          type="submit"
          className="login-btn w-full bg-black text-white py-2 rounded-md transition"
        >
          Se connecter
        </button>

        <p className="text-sm text-center text-neutral-600">
          Pas de compte ?{" "}
          <Link to="/register" className="underline hover:text-black">
            Créer un compte
          </Link>
        </p>
      </form>
    </div>
  );
}
