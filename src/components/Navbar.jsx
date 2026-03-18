import React, { useState } from 'react';

const Navbar = () => {
  const [lang, setLang] = useState('ES');
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home'); // Estado para el link seleccionado

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-10 left-0 w-full z-[100] px-8 md:px-[6%]">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        
        {/* 1. Izquierda: Branding (Texto más grande) */}
        <div className="flex-1">
          <a href="#home" className="text-[2.8rem] font-bold text-white tracking-tighter group">
            Carlos <span className="text-main-purple group-hover:text-white transition-colors">RW</span>
          </a>
        </div>

        {/* 2. Centro: Cápsula (Más grande y con lógica de selección) */}
        <nav className="hidden lg:flex items-center gap-12 bg-[#1a1723]/60 backdrop-blur-xl border border-white/10 px-12 py-5 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`text-[1.7rem] font-semibold transition-all relative group ${
                activeLink === link.name ? 'text-white' : 'text-text-purple/60 hover:text-white'
              }`}
            >
              {link.name}
              {/* Línea inferior: se queda fija si el link está activo */}
              <span className={`absolute -bottom-2 left-0 h-[3px] bg-main-purple transition-all duration-300 ${
                activeLink === link.name ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </nav>

        {/* 3. Derecha: Idiomas y Botón (Escala mejorada) */}
        <div className="flex-1 flex justify-end items-center gap-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang('ES')}
              className={`text-[1.5rem] font-bold transition-all ${lang === 'ES' ? 'text-main-purple scale-125' : 'text-text-purple/40 hover:text-text-purple'}`}
            >
              ES
            </button>
            <div className="w-[1px] h-6 bg-white/10"></div>
            <button 
              onClick={() => setLang('EN')}
              className={`text-[1.5rem] font-bold transition-all ${lang === 'EN' ? 'text-main-purple scale-125' : 'text-text-purple/40 hover:text-text-purple'}`}
            >
              EN
            </button>
          </div>

          <a 
            href="#contact" 
            className="hidden xl:block bg-transparent border-2 border-main-purple text-main-purple px-10 py-4 rounded-full text-[1.6rem] font-bold hover:bg-main-purple hover:text-bg-color hover:shadow-[0_0_20px_rgba(108,52,211,0.5)] transition-all duration-300"
          >
            Hablemos
          </a>

          <button 
            className="lg:hidden text-[4rem] text-text-purple"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu-alt-right'}`}></i>
          </button>
        </div>
      </div>

      {/* Menú Móvil (Tamaño de fuente aumentado) */}
      <div className={`absolute top-28 left-8 right-8 bg-[#1a1723] border border-white/10 rounded-[2.5rem] p-12 transition-all duration-400 lg:hidden shadow-3xl ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'}`}>
        <div className="flex flex-col gap-10 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name);
                setIsOpen(false);
              }}
              className={`text-[2.4rem] font-bold transition-colors ${
                activeLink === link.name ? 'text-main-purple' : 'text-text-purple hover:text-main-purple'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;