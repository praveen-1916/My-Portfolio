import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#F2FFF9] to-[#FFF6F1]">
        <NavBar />
        <div id="Home">
          <Home />
        </div>
        <div id="About Me">
          <AboutMe />
        </div>
        <div id="Technical Skills">
          <Skills />
        </div>
        <div id="My works">
          <Projects />
        </div>
        <div id="Contact">
          <Contact />
        </div>
        <Footer />
      </div>
      "", "", "", "", "",
      {/* <div id="Contact" className="h-screen">
        <NavBar />
      </div> */}
    </>
  );
}

export default App;
