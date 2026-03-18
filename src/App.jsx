import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
function App() {
  return (
    <div className="bg-bg-color min-h-screen font-poppins">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </div>
  );
}

export default App;