import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Contact />
        <Work />
      </main>
    </>
  );
}

export default App;
