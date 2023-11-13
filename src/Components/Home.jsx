import React from "react";
import Style from "./Styles/Home.module.css";

export default function Home() {
  return (
    <div className={Style.home}>
      <div className={Style.description}>
        <h1>Hola! Soy Juan Ardila</h1>
        <br />
        <p>
          Bienvenido a mi página web. Aquí encontrarás información sobre; mi
          formación profesional, proyectos en los que he trabajado, tecnologías
          que manejo y demás.
        </p>
        <br />
        <p>
          Te invito a darle play a la música para tener la mejor experiencia y a
          continuar para conocer más sobre mí y mi trabajo.
        </p>
      </div>
      <div className={Style.image}>
        <img
          src="https://res.cloudinary.com/juan-ardila/image/upload/v1698184548/Folder-images/Juancho_def1e5.png"
          alt="Yo"
          height="400px"
        />
      </div>
    </div>
  );
}
