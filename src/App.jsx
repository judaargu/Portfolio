import Home from './Components/Home'
import { About } from './Components/About'

function App() {

  return (
    <div>
      <div>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Acerca de mi</a></li>
          <li><a href="">Proyectos</a></li>
          <li><a href="">Tecnologías</a></li>
          <li><a href="">Contacto</a></li>
        </ul>
      </div>
      <div id='home'>
        <Home />
      </div>
      <div id='about'>
        <About />
      </div>
    </div>    
  )
}

export default App
