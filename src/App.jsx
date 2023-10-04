import Home from "./Components/Home";
import { About } from "./Components/About";
import Style from "./App.module.css";
import { NavBar } from "./Components/NavBar";

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
    </div>
  );
}

export default App;
