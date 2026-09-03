import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const { t, i18n } = useTranslation();

  // Sincroniza <meta name="description"> con el idioma activo - SEO básico
  // para una SPA sin SSR: el contenido inicial en el HTML sigue siendo el
  // fallback en español para crawlers que no ejecutan JS.
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'));
    }
  }, [i18n.language, t]);

  return (
    <div className="bg-bg-color min-h-screen font-poppins relative">
      <CursorGlow />
      <FloatingWhatsApp />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;