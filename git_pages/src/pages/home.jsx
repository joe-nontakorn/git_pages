// pages/home.jsx
import { Element, scroller } from 'react-scroll';
import { useEffect } from "react";
import Skills from "../components/view/Skills";
import Certificates from "../components/view/Certificates";
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
        <section className="min-h-screen bg-gradient-to-b ">
          <div className="max-w-7xl mx-auto px-4">
            <HeroSection />
          </div>
        </section>
      </Element>

      <Element name="about">
        <section className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4">
            <br />
            <br />
            <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
              About
            </h3>
            <p className="text-center text-gray-500">Coming soon...</p>
          </div>
        </section>
      </Element>

      <Element name="skills">
        <section className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4">
            <br />
            <br />
            <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
              Skills
            </h3>
            <Skills />
          </div>
        </section>
      </Element>

      <Element name="projects">
        <section className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4">
            <br />
            <br />
            <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
              Projects
            </h3>
            <p className="text-center text-gray-500">Coming soon...</p>
          </div>
        </section>
      </Element>

      <Element name="certificates">
        <section className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4">
            <br />
            <br />
            <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
              Certificates
            </h3>
            <Certificates />
          </div>
        </section>
      </Element>

      <Element name="contact">
        <section className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4">
            <br />
            <br />
            <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
              Contact
            </h3>
          </div>
        </section>
      </Element>
    </main>
  );
}

export default Home;
