import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;