import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import CurrentlyLearning from './Components/CurrentlyLearning';
import CoreStrengths from './Components/CoreStrengths';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

export default function App() {
  // Lenis smooth scroll — initialised here so the single instance
  // covers the entire page lifecycle
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
    });

    let raf;
    function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Subtle noise film-grain overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Ambient background blobs */}
      <div className="ambient-orb ambient-orb-1" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-2" aria-hidden="true" />

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <CurrentlyLearning />
        <CoreStrengths />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
