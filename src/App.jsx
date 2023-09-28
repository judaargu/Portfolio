import Home from "./Components/Home";
import { About } from "./Components/About";
import Style from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const adjustNavBar = () => {
      if (window.scrollY > 0) {
        setFixed(true);
        
      } else {
        setFixed(false);
      }
    };
    // Escuchamos el evento de scroll cuando el componente se monta
    window.addEventListener('scroll', adjustNavBar);

    // Eliminamos el evento de scroll cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', adjustNavBar);
    };
   }, []);

  return (
    <div >
      <div className={` ${Style.navBar} ${fixed ? Style.navBar_fixed : ""}`} >
        <span>
          <a href="#home">Inicio</a>
        </span>
        <span>
          <a href="#about">Acerca de mi</a>
        </span>
        <span>
          <a href="">Proyectos</a>
        </span>
        <span>
          <a href="">Tecnologías</a>
        </span>
        <span>
          <a href="">Contacto</a>
        </span>
      </div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  );
}

export default App;
