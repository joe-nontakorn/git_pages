// pages/home.jsx
import { Element, scroller } from 'react-scroll';
import { useEffect } from "react";
// import Skills from "../components/view/Skills";
// import Certificates from "../components/view/Certificates";
import HeroSection from "../components/view/HeroSection";

function Home() {
    useEffect(() => {
        scroller.scrollTo("home", {
          smooth: true,
          duration: 500,
          offset: -60, // ชดเชย header ไม่ให้บัง
        });
      }, []);
      
  return (
    <main className="pt-24">
      <Element name="home">
        <section className="">
          <div className="">
            <HeroSection />
          </div>
        </section>
      </Element>
    </main>
  );
}

export default Home;
