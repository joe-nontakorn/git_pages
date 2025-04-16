import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import BackgroundBalls from "./components/BackgroundBalls";

function App() {
  return (
    <div>
      <Header />
      <main>
      <BackgroundBalls />
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
