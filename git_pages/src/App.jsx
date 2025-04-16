import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;
