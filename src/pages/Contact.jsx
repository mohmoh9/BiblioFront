import { useState } from "react";
import axios from "axios";
import "./Contact.css"

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/contact", form);
    alert("Message envoyé !");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container mt-5">
      <h2>Contactez-nous</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-3"
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
