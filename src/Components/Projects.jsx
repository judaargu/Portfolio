import React from "react";
import Style from "./Styles/Projects.module.css";

export const Projects = () => {
  return (
    <div>
      <h2 className={Style.h2}>➡ Proyectos </h2>
      <div className={Style.projects}>
        <div className={Style.slider}>
          <img src="/src/images/Rickandmorty.jpg" alt="Rick and morty" />
          <div>
            <h3>Aplicación Rick and Morty</h3>
            <p>
              Tomando la api encontrada en rickandmortyapi.com y usando
              tecnologías como JavaScript, React.JS, Redux.JS, Express,
              PostgreSQL y CSS, se desarrolla la aplicación web de Rick and
              Morty. Esta aplicación, cuenta con una interfaz dinámica y
              amigable en donde el usuario podrá encontrar a todos los
              personajes de la serie junto su información y seleccionar a sus
              favoritos.
            </p>
            <br />
            <p>GitHub: https://github.com/judaargu/Proyecto-integrador.git</p>
          </div>
        </div>
        <div className={Style.slider}>
          <img src="/src/images/vinilo.jpg" alt="Vinilo" />
          <div>
            <h3>Aplicación web de Vinyls-trade</h3>
            <p>
              Vinyls-Trade es un eCommerce de alto rendimiento de venta de
              vinilos. El equipo hizo uso de la metodología Scrum para
              garantizar un desarrollo ágil y eficiente, mi enfoque estuvo en el
              backend, donde tuve gran impacto en el desarrollo de la
              autenticación por terceros con google, pasarela de pagos con
              Mercado Pago y la configuración de notificaciones por correo
              electrónico. Colaboré con un equipo multidisciplinario y mantuve
              un flujo de trabajo eficiente en GitHub.
            </p>
            <br />
            <p>Video: https://www.youtube.com/watch?v=8BUv3IHz7Ew</p>
            <p>GitHub: https://github.com/judaargu/Vinysls-trade-back.git</p>
          </div>
        </div>
        <div className={Style.slider}>
          <img src="/src/images/receta.jpg" alt="Receta" />
          <div>
            <h3>Aplicación web de recetas de cocina</h3>
            <p>
              Aplicación web especializada en recetas de cocina. La aplicación
              cuenta con una interfaz amigable para el usuario, en donde
              inicialmente se renderizan todas las recetas con un paginado de 9
              recetas por página. En PostgreSQL se diseñan dos bases de datos
              con ayuda de Sequelize. En la ventana principal, cuenta con
              diferentes tipos de filtrado. Además, la página cuenta con una
              opción para que el usuario pueda incluir su propia receta.
            </p>
            <br />
            <p>GitHub: https://github.com/judaargu/Proyecto-individual.git</p>
          </div>
        </div>
      </div>
    </div>
  );
};
