import React from "react";
import Style from "./Styles/Home.module.css"

export default function Home() {
  return (
    <div className={Style.home}>
      <div className={Style.description}>
        <h1>Hola! Soy FullStack developer</h1>
        <br />
        <p>
          Bienvenido a mi página web. Aquí encontrarás información sobre mí;
          formación profesional, proyectos en los que he trabajado, tecnologías y
          demás.
          Te invito a continuar para conocer más sobre mí y mi trabajo.
        </p>
        <br />
        <button>Botón para algo</button>
        <br />
      </div>
      <div className={Style.image}>
        <img src="/src/images/yo.png" alt="Yo"/>
      </div>
    </div>
  );
}
