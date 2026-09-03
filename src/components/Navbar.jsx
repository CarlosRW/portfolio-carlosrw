import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeKey, setActiveKey] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  // key: identificador estable usado para scroll-spy y hrefs (no se traduce).
  // labelKey: ruta en los JSON de traducción para el texto visible.
  const navLinks = [
    { key: 'home', href: '#home', labelKey: 'nav.home' },
    { key: 'about', href: '#about', labelKey: 'nav.about' },
    { key: 'skills', href: '#skills', labelKey: 'nav.skills' },
    { key: 'projects', href: '#projects', labelKey: 'nav.projects' },
    { key: 'journey', href: '#education', labelKey: 'nav.journey' },
    { key: 'certifications', href: '#certifications', labelKey: 'nav.certifications' },
    { key: 'contact', href: '#contact', labelKey: 'nav.contact' },
  ];

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const scrollPosition = window.scrollY + 200;
      setScrolled(window.scrollY > 40);

      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveKey(link.key);
          break;
        }
      }
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Mantiene <html lang="..."> sincronizado - accesibilidad y SEO.
  useEffect(() => {
    document.documentElement.lang = i18n.language.startsWith('en') ? 'en' : 'es';
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = i18n.language.startsWith('en') ? 'en' : 'es';

  return (
    <header
      className={`fixed left-0 w-full z-100 px-8 md:px-[6%] transition-[top] duration-300 ${scrolled ? 'top-4' : 'top-10'}`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">

        <div className="flex-1">
          <a href="#home" className="text-[2.8rem] font-bold text-white tracking-tighter group">
            Carlos <span className="gradient-text group-hover:text-white transition-colors">RW</span>
          </a>
        </div>

        <nav
          className={`hidden lg:flex items-center gap-12 border border-white/10 px-12 rounded-full transition-all duration-300 backdrop-blur-xl ${
            scrolled ? 'bg-bg-color/85 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.7)]' : 'bg-bg-color/60 py-5 shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href).scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }}
              className={`text-[1.7rem] font-semibold transition-colors relative group ${activeKey === link.key ? 'text-white' : 'text-text-purple/60 hover:text-white'
                }`}
            >
              {t(link.labelKey)}
              <span className={`absolute -bottom-2 left-0 h-[3px] bg-main-purple transition-all duration-300 ${activeKey === link.key ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
        </nav>

        <div className="flex-1 flex justify-end items-center gap-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => changeLanguage('es')}
              aria-pressed={currentLang === 'es'}
              aria-label="Cambiar idioma a Español"
              className={`text-[1.5rem] font-bold transition-colors ${currentLang === 'es' ? 'text-main-purple' : 'text-white/40 hover:text-white/70'}`}
            >
              ES
            </button>
            <div className="w-px h-6 bg-white/10"></div>
            <button
              onClick={() => changeLanguage('en')}
              aria-pressed={currentLang === 'en'}
              aria-label="Switch language to English"
              className={`text-[1.5rem] font-bold transition-colors ${currentLang === 'en' ? 'text-main-purple' : 'text-white/40 hover:text-white/70'}`}
            >
              EN
            </button>
          </div>

          <button className="lg:hidden text-[4rem] text-text-purple" onClick={() => setIsOpen(!isOpen)}>
            <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu-alt-right'}`}></i>
          </button>
        </div>
      </div>

      <div className={`absolute top-28 left-8 right-8 bg-bg-color border border-white/10 rounded-[2.5rem] p-12 transition-all duration-300 lg:hidden ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <div className="flex flex-col gap-8 text-center text-[2rem] font-bold text-white">
          {navLinks.map(link => (
            <a key={link.key} href={link.href} onClick={() => setIsOpen(false)}>{t(link.labelKey)}</a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;