import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TeamPerformance from './components/TeamPerformance';
import Features from './components/Features';
import Clients from './components/Clients';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'HDMTI - Soluções em TI';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TeamPerformance />
        <Features />
        <Clients />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;