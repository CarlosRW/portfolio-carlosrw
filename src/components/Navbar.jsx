import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full px-[9%] flex justify-between items-center z-[100] transition-all duration-300 ${
      isSticky ? 'bg-secondary-purple shadow-lg py-4' : 'bg-bg-color/80 backdrop-blur-md py-6'
    }`}>
      
      <a href="#" className="text-[2.5rem] text-text-purple font-bold">Carlos RW</a>

      {/* Navegación Principal */}
      <nav className={`
        /* Desktop */
        md:flex md:static md:flex-row md:gap-8 md:w-auto md:bg-transparent md:p-0 md:opacity-100 md:translate-y-0
        /* Mobile */
        absolute top-full left-0 w-full p-4 bg-secondary-purple border-t border-main-purple/20 
        flex flex-col gap-6 transition-all duration-300
        ${isMenuOpen ? 'flex opacity-100 translate-y-0' : 'hidden md:flex opacity-0 -translate-y-4'}
      `}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="text-[1.7rem] text-text-purple font-medium hover:text-main-purple transition-colors" onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}
      </nav>

      {/* Icono de Menú con clase personalizada para el CSS */}
      <div 
        className={`menu-icon-wrapper bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-[3.6rem] text-main-purple cursor-pointer md:hidden`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></div>
      
    </header>
  );
};

export default Navbar;