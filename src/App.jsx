import React from 'react';
import Starfield from './components/Starfield';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-space-dark text-gray-100 overflow-x-hidden">
      {/* Dynamic Starfield Background */}
      <Starfield />

      {/* Navigation */}
      <Navbar />

      {/* Content Layout */}
      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
