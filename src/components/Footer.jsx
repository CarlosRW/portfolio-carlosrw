import React, { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showTooltip, setShowTooltip] = useState(false);
  const email = "carlos.ramirezw23@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  const socialLinks = [
    { icon: 'bxl-github', link: 'https://github.com/CarlosRW' },
    { icon: 'bxl-linkedin', link: 'https://linkedin.com/in/carlosrw' }
  ];

  return (
    <footer className="relative pt-32 pb-16 px-[7%] bg-bg-color border-t border-white/5 overflow-hidden font-['Poppins',_sans-serif]">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Botón Volver Arriba */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2">
          <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
            className="group flex flex-col items-center gap-4 transition-all"
          >
            <span className="text-text-purple/30 text-[1.2rem] uppercase tracking-[0.3em] group-hover:text-main-purple transition-colors">Volver</span>
            <div className="w-[4.5rem] h-[4.5rem] bg-transparent border-2 border-main-purple rounded-full flex items-center justify-center text-main-purple transition-all duration-500 hover:bg-main-purple hover:text-bg-color hover:shadow-[0_0_1.5rem_#6c34d3]">
              <i className='bx bx-up-arrow-alt text-[2.5rem]'></i>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center border-b border-white/5 pb-20">
          
          {/* Lado Izquierdo - Branding */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <a href="#home" className="text-[3.2rem] font-bold text-white tracking-tighter">
              Carlos <span className="gradient-text">RW</span>
            </a>
            <p className="text-[1.6rem] text-text-purple/40 font-medium text-center md:text-left">
              Estudiante de Ingeniería de Software creando experiencias digitales excepcionales.
            </p>
          </div>

          {/* Centro - Redes Sociales (Links Corregidos) */}
          <div className="flex flex-col items-center space-y-8">
            <span className="text-text-purple/20 text-[1.3rem] uppercase tracking-[0.4em] font-bold">Conectemos</span>
            <div className="flex gap-6">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-[4.5rem] h-[4.5rem] border-2 border-main-purple rounded-full flex items-center justify-center text-[2.5rem] text-main-purple hover:bg-main-purple hover:text-bg-color transition-all duration-500 hover:shadow-[0_0_1.5rem_#6c34d3]"
                >
                  <i className={`bx ${social.icon}`}></i>
                </a>
              ))}
              
              {/* Botón Email con Tooltip */}
              <div className="relative">
                {showTooltip && (
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-main-purple text-white text-[1.2rem] px-4 py-2 rounded-lg font-bold animate-bounce shadow-lg whitespace-nowrap z-50">
                    ¡Copiado!
                  </div>
                )}
                <button 
                  onClick={copyEmail} 
                  className="w-[4.5rem] h-[4.5rem] border-2 border-main-purple rounded-full flex items-center justify-center text-[2.5rem] text-main-purple hover:bg-main-purple hover:text-bg-color transition-all duration-500 hover:shadow-[0_0_1.5rem_#6c34d3] cursor-pointer"
                >
                  <i className='bx bx-envelope'></i>
                </button>
              </div>
            </div>
          </div>

          {/* Lado Derecho - Status */}
          <div className="flex flex-col items-center md:items-end space-y-4">
             <div className="flex items-center gap-3 bg-main-purple/10 border border-main-purple/20 px-6 py-2 rounded-full uppercase">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-main-purple opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-main-purple"></span>
                </span>
                <span className="text-main-purple font-bold text-[1.3rem] tracking-widest">Disponible para trabajar</span>
             </div>
             <p className="text-[1.4rem] text-text-purple/40 font-medium italic">San José, Costa Rica 🇨🇷</p>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 uppercase tracking-[0.2em] text-[1.1rem]">
          <p>© {currentYear} Todos los derechos reservados</p>
          <p>Hecho con 💜 por Carlos Eduardo Ramírez Wong</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;