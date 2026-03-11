import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <main className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900 relative">
      <CustomCursor />
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internship />
      <Certificates />
      <Contact />
    </main>
  );
}

export default App;
