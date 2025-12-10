import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Plans from './components/Plans';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter text-gray-800">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Plans />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;