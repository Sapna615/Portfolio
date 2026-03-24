import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Training from './components/Training';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <main className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900 relative bg-white">
      <CustomCursor />
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Training />
      <Projects />
      <Internship />
      <Certificates />
      <Contact />
    </main>
  );
}

export default App;
