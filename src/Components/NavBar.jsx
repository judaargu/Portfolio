import React from "react";
import { useEffect, useState } from "react";
import Style from "./Styles/NavBar.module.css";

export const NavBar = () => {
  const [fixed, setFixed] = useState(false);
  const [audio, setAudio] = useState(
    new Audio("https://res.cloudinary.com/juan-ardila/video/upload/v1698188426/Folder-song/your-little-wings_ms914f.mp3")
  );
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    const adjustNavBar = () => {
      if (window.scrollY > 0) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };
    // Escuchamos el evento de scroll cuando el componente se monta
    window.addEventListener("scroll", adjustNavBar);

    // Eliminamos el evento de scroll cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", adjustNavBar);
    };
  }, []);

  const handleCV = () => {
    const cvURL = "https://res.cloudinary.com/juan-ardila/image/upload/v1698188120/CV/CV_Juan_Ardila_Desarrollador_Fullstack_igewva.pdf";

    const link = document.createElement("a");
    link.href = cvURL;
    link.download = "CV_Juan_Ardila.pdf";

    link.click();
  };

  const playSong = () => {
    if (!isPlay) {
      audio.play();
      audio.volume = 0.5;
      setIsPlay(true);
    } else {
      audio.pause();
      setIsPlay(false);
    }
  };

  return (
    <div className={` ${Style.navBar} ${fixed ? Style.navBar_fixed : ""}`}>
      <div className={Style.music}>
        <span onClick={playSong}>
          {isPlay ? (
            <img
              src="https://res.cloudinary.com/juan-ardila/image/upload/v1698187193/Folder-Icons/ondas-sonoras_yyggr4.png"
              alt="Música"
              width="50px"
            />
          ) : (
            <img
              src="https://res.cloudinary.com/juan-ardila/image/upload/v1698187208/Folder-Icons/musica_syn7ta.png"
              alt="Música"
              width="50px"
            />
          )}
        </span>
        <span>¡Dale play a la música!</span>
      </div>
      <span>
        <a href="#home">Inicio</a>
      </span>
      <span>
        <a href="#about">Acerca de mi</a>
      </span>
      <span>
        <a href="#projects">Proyectos</a>
      </span>
      <span>
        <a href="#tecnologies">Tecnologías</a>
      </span>
      <span>
        <a href="#footer">Contacto</a>
      </span>
      <div>
        <button onClick={handleCV}>
          <img
            src="https://res.cloudinary.com/juan-ardila/image/upload/v1698187199/Folder-Icons/descargar_xxjj2j.png"
            alt="descargar CV"
            height="27px"
          />
          Descargar CV
        </button>
      </div>
    </div>
  );
};
