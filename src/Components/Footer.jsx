import React, { useState } from "react";
import Style from "./Styles/Footer.module.css";
import validation from "../validate";
import axios from "axios";

export const Footer = () => {
  const [input, setInput] = useState({ email: "", message: "" });
  const [errors, setErrors] = useState({ email: "", message: "" });

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    setErrors(
      validation({ ...input, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (Object.values(errors).length === 0) {
      try {
        await axios.post(
          "https://portfolio-back-production-bce7.up.railway.app/",
          input
        );
      } catch (error) {
        console.error("No se envió el correo", error);
      }
      setInput({ email: "", message: "" });
    }
  };

  return (
    <div className={Style.contact}>
      <h2 className={Style.title}>➡ Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
          placeholder="Escribe tu correo..."
        />
        {errors.email && <p>{errors.email}</p>}
        <textarea
          name="message"
          cols="30"
          rows="5"
          value={input.message}
          onChange={handleChange}
          placeholder="Escribe un mensaje..."
        ></textarea>
        {errors.message && <p>{errors.message}</p>}
        <button>Enviar mensaje</button>
      </form>
      <div className={Style.social}>
        <a href="https://github.com/judaargu" target="_blank" rel="noreferrer">
          <img
            src="https://res.cloudinary.com/juan-ardila/image/upload/v1698187203/Folder-Icons/github_assghd.png"
            alt="gitHub"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ardila-juan/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://res.cloudinary.com/juan-ardila/image/upload/v1698187207/Folder-Icons/linkedin_v2su8b.png"
            alt="linkedin"
          />
        </a>
        <a
          href="https://www.instagram.com/juandavidarg/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://res.cloudinary.com/juan-ardila/image/upload/v1698187205/Folder-Icons/instagram_wre12l.png"
            alt="instagram"
          />
        </a>
      </div>
    </div>
  );
};
