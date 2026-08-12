import React, { useState } from 'react';

const Hero = () => {
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
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 md:px-[8%] lg:px-[10%] bg-bg-color pt-[12vh] md:pt-0 gap-16 lg:gap-24"
      id="home"
    >
      {/* 1. Contenedor de Imagen (Arriba en móvil, Derecha en PC) */}
      <div className="order-1 md:order-2 flex justify-center items-center flex-shrink-0 w-full md:w-auto">
        <div className="relative w-[58vw] h-[58vw] sm:w-[42vw] sm:h-[42vw] md:w-[28vw] md:h-[28vw] lg:w-[24vw] lg:h-[24vw] max-w-[320px] max-h-[320px] lg:max-w-[400px] lg:max-h-[400px] animate-float">

          {/* Capa sólida morada, desfasada y rotada: la firma visual de la sección */}
          <div className="absolute inset-0 bg-gradient-to-br from-main-purple to-secondary-purple rounded-[2.5rem] rotate-6 translate-x-4 translate-y-4"></div>

          {/* Contenedor de la imagen */}
          <div className="relative w-full h-full rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden -rotate-2">
            <img
              src="/CarlosRW.webp"
              alt="Carlos Ramírez"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Chip flotante: único acento morado adicional, con propósito (identifica el rol) */}
          <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 bg-bg-color border border-white/10 rounded-2xl px-5 py-3 shadow-xl flex items-center gap-2.5 z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-main-purple shadow-[0_0_10px_#6c34d3] shrink-0"></span>
            <span className="text-[1.4rem] font-bold text-text-purple whitespace-nowrap">Software Developer</span>
          </div>
        </div>
      </div>

      {/* 2. Contenedor de Texto: Abajo en móvil, Izquierda en PC */}
      <div className="flex-1 order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start max-w-[65rem] lg:max-w-[75rem]">
        <h3 className="text-[2.2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-medium text-text-purple/70 tracking-wide">
          Hola, soy
        </h3>

        <h1 className="text-[4rem] sm:text-[5rem] md:text-[5.6rem] lg:text-[6.8rem] font-bold leading-[1.1] text-shine mb-6 mt-1">
          Carlos Ramírez Wong
        </h1>

        <p className="text-[1.5rem] sm:text-[1.6rem] lg:text-[1.8rem] mb-8 lg:mb-10 leading-relaxed text-text-purple/70 max-w-[55rem]">
          Estudiante de Ingeniería en Desarrollo de Software apasionado por crear soluciones innovadoras, desde aplicaciones web full-stack hasta experiencias inmersivas en videojuegos.
        </p>

        {/* Redes Sociales - neutras por defecto, morado solo en hover para no competir con el CTA */}
        <div className="flex justify-center md:justify-start gap-6 mb-10 lg:mb-12">
          {socialLinks.map((soc, i) => (
            <a
              key={i}
              href={soc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center w-[4.5rem] h-[4.5rem] lg:w-[5rem] lg:h-[5rem] bg-transparent border-2 border-white/15 rounded-full text-[2.5rem] lg:text-[2.8rem] text-text-purple/70 transition-all duration-500 hover:bg-main-purple hover:border-main-purple hover:text-white hover:shadow-[0_0_1.5rem_#6c34d3]"
            >
              <i className={`bx ${soc.icon}`}></i>
            </a>
          ))}

          {/* Botón de Copiar Email */}
          <div className="relative">
            {showTooltip && (
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-main-purple text-white text-[1.2rem] px-4 py-2 rounded-lg font-bold animate-bounce shadow-lg whitespace-nowrap z-50">
                ¡Copiado!
              </div>
            )}
            <button
              onClick={copyEmail}
              className="relative inline-flex items-center justify-center w-[4.5rem] h-[4.5rem] lg:w-[5rem] lg:h-[5rem] bg-transparent border-2 border-white/15 rounded-full text-[2.5rem] lg:text-[2.8rem] text-text-purple/70 transition-all duration-500 hover:bg-main-purple hover:border-main-purple hover:text-white hover:shadow-[0_0_1.5rem_#6c34d3] cursor-pointer"
            >
              <i className='bx bx-envelope'></i>
            </button>
          </div>
        </div>

        {/* Botones de Acción: jerarquía clara — CV es la única acción morada sólida */}
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <a
            href="/CV CarlosRamirezWong.pdf"
            download="CV_CarlosRamirezWong.pdf"
            className="relative inline-flex items-center justify-center sm:w-[20rem] h-[5.5rem] bg-main-purple rounded-lg text-[1.8rem] lg:text-[2rem] text-white font-semibold hover:brightness-110 hover:shadow-[0_0_2rem_rgba(108,52,211,0.5)] w-full transition-all duration-500"
          >
            Descargar CV
          </a>

          <a
            href="#projects"
            className="relative inline-flex items-center justify-center sm:w-[20rem] h-[5.5rem] bg-transparent border-2 border-white/15 rounded-lg text-[1.8rem] lg:text-[2rem] text-text-purple font-semibold hover:border-main-purple hover:text-main-purple w-full transition-all duration-500"
          >
            Proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;