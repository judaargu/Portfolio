import React from "react";
import Style from "./Styles/About.module.css"

export const About = () => {
  return (
    <div>
      <div className={Style.about}>
        <img src="/src/Images/personaje.png" alt="Personaje" width='400px' />
        <div>
          <h2>➡ Acerca de mí</h2>
          <p>
            Mi nombre es Juan david Ardia Gutiérrez, vivo en Bogotá
            D.C, Colombia. Soy desarrollador FullStack, con conocimientos en el diseño,
            desarrollo y mantenimiento de soluciones informáticas con tecnologías como JavaScript,
            Python, ReactJS, Redux, Express, HTML, CSS, PostgreSQL y MySQL.
          </p>
          <br />
          <p>
            Además, soy un ingeniero de sonido con experiencia en grabación de audio para televisión
            y sonido en vivo, en donde estuve a cargo de un grupo de personas y pude afianzar habilidades
            de liderazgo.
          </p>
          <br />
          <p>
            Soy un apasionado de la música, el sonido y la tecnología. En mis tiempos libres, lo que más me agrada
            es escuchar música, tocar batería y compartir con mis amigos y familia.
          </p>
          <br />
          <p>
            Mi enfoque profesional aspira unir de la mejor manera los dos campos en
            los cuales me he prepadado a lo largo de mi vida profesional.
          </p>
          <br />
        </div>
      </div>
      <h2 className={Style.h2}>Soft Skills</h2>
      <div className={Style.soft}>
        <button>Liderazgo</button>
        <button>Trabajo en equipo</button>
        <button>Adaptabilidad al cambio</button>
        <button>Rápido aprendizaje</button>
        <button>Autoaprendizaje</button>
        <button>Solución de problemas</button>
      </div>
    </div>
  );
};
