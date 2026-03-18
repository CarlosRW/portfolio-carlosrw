import React from 'react';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-12 md:px-[8%] lg:px-[10%] bg-bg-color pt-[12vh] md:pt-0 gap-12 lg:gap-20" 
      id="home"
    >
      {/* 1. Contenedor de Imagen: Arriba en móvil, Derecha en PC */}
      <div className="order-1 md:order-2 flex justify-center items-center flex-shrink-0 w-full md:w-auto">
        <div className="relative w-[50vw] h-[50vw] sm:w-[40vw] sm:h-[40vw] md:w-[30vw] md:h-[30vw] lg:w-[28vw] lg:h-[28vw] max-w-[350px] max-h-[350px] lg:max-w-[450px] lg:max-h-[450px]">
          {/* Círculo de fondo con resplandor (pulsante) */}
          <div className="absolute inset-0 bg-main-purple rounded-full blur-[30px] opacity-25 animate-pulse"></div>
          
          {/* Contenedor de la imagen (flotante) */}
          <div className="relative w-full h-full rounded-full border-[.6rem] lg:border-[.8rem] border-main-purple p-3 lg:p-4 shadow-[0_0_3rem_#6c34d3] animate-float overflow-hidden">
            <img 
              src="/tu-foto.png" // Asegúrate de que esta ruta sea correcta en /public
              alt="Carlos Ramírez" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* 2. Contenedor de Texto: Abajo en móvil, Izquierda en PC */}
      <div className="flex-1 order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start max-w-[65rem] lg:max-w-[75rem]">
        <h3 className="text-[2.2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-medium text-text-purple tracking-wide">
          Hola, soy
        </h3>
        
        {/* Tu nombre con efecto de Resplandor Barrido (text-shine definido en index.css) */}
        <h1 className="text-[4rem] sm:text-[5rem] md:text-[5.6rem] lg:text-[6.8rem] font-bold leading-[1.1] md:whitespace-nowrap text-shine mb-3 mt-1">
          Carlos Ramírez
        </h1>
        
        <h3 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-main-purple to-primary-purple mt-[-0.5rem]">
          Software Developer
        </h3>
        
        <p className="text-[1.5rem] sm:text-[1.6rem] lg:text-[1.8rem] my-8 lg:my-10 leading-relaxed text-text-purple/80 max-w-[50rem] md:max-w-none">
          Estudiante de Ingeniería en Desarrollo de Software apasionado por crear 
          soluciones innovadoras, desde aplicaciones web full-stack hasta experiencias 
          inmersivas en videojuegos.
        </p>

        {/* Redes Sociales - Alineación corregida */}
        <div className="flex justify-center md:justify-start gap-6 mb-10 lg:mb-12">
          {[
            { icon: 'bxl-github', link: 'https://github.com/CarlosRW' },
            { icon: 'bxl-linkedin', link: 'https://www.linkedin.com/in/carlosrw' },
            { icon: 'bx-envelope', link: 'mailto:carlos.ramirezw23@gmail.com' }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center w-[4.5rem] h-[4.5rem] lg:w-[5rem] lg:h-[5rem] bg-transparent border-2 border-main-purple rounded-full text-[2.5rem] lg:text-[2.8rem] text-main-purple transition-all duration-500 hover:bg-main-purple hover:text-bg-color hover:shadow-[0_0_1.5rem_#6c34d3]"
            >
              <i className={`bx ${social.icon}`}></i>
            </a>
          ))}
        </div>

        {/* Botones de Acción - Medidas fluidas */}
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <a 
            href="/tu-cv.pdf" // Asegúrate de subir tu CV a la carpeta /public
            download
            className="relative inline-flex items-center justify-center sm:w-[20rem] h-[5.5rem] bg-main-purple border-2 border-main-purple rounded-lg text-[1.8rem] lg:text-[2rem] text-bg-color font-semibold transition-all duration-500 overflow-hidden group z-10 hover:text-main-purple w-full"
          >
            Descargar CV
            <span className="absolute top-0 left-0 w-0 h-full bg-bg-color z-[-1] transition-all duration-500 group-hover:w-full"></span>
          </a>
          
          <a 
            href="#portfolio" 
            className="relative inline-flex items-center justify-center sm:w-[20rem] h-[5.5rem] bg-transparent border-2 border-main-purple rounded-lg text-[1.8rem] lg:text-[2rem] text-main-purple font-semibold transition-all duration-500 overflow-hidden group z-10 hover:text-bg-color w-full"
          >
            Proyectos
            <span className="absolute top-0 left-0 w-0 h-full bg-main-purple z-[-1] transition-all duration-500 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;