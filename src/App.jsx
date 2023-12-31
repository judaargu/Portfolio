import Home from "./Components/Home";
import { About } from "./Components/About";
import Style from "./App.module.css";
import { NavBar } from "./Components/NavBar";
import { Projects } from "./Components/Projects";
import { Tecnologies } from "./Components/Tecnologies";
import { Footer } from "./Components/Footer";

function App() {
 
  return (
    <div >
      <div>
        <NavBar />
      </div>
      <div id="home" className={Style.home}>
        <Home />
      </div>
      <div id="about" className={Style.about}>
        <About />
      </div>
      <div id="projects" className={Style.projects}>
        <Projects />
      </div>
      <div id="tecnologies" className={Style.tecnologies}>
        <Tecnologies />
      </div>
      <div id="footer" className={Style.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
