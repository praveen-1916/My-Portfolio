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
        {/* <div id="Home"> */}
        <Home />
        {/* </div> */}
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      {/* <div id="Contact" className="h-screen">
        <NavBar />
      </div> */}
    </>
  );
}

export default App;
