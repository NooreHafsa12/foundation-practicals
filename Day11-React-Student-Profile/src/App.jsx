import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Internships from "./components/Internships";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Education />
      <Internships />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;