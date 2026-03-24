import React, { useState } from 'react';

const Contact = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const email = "carlos.ramirezw23@gmail.com";
  const phone = "+506 83933478";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'bxl-linkedin', url: 'https://linkedin.com/in/carlosrw' },
    { name: 'GitHub', icon: 'bxl-github', url: 'https://github.com/CarlosRW' },
  ];

  return (
    <section 
      id="contact" 
      className="py-32 px-[7%] bg-bg-color flex flex-col items-center justify-center font-['Poppins',_sans-serif]"
    >
      {/* 1. Título de la Sección */}
      <div className="text-center mb-24">
        <h2 className="text-[5.5rem] md:text-[7.5rem] font-bold text-white tracking-tight">
          Contácta<span className="gradient-text">me</span>
        </h2>
        <div className="w-[12rem] h-[5px] bg-main-purple mx-auto mt-4 rounded-full shadow-[0_0_10px_#6c34d3]"></div>
      </div>

      {/* 2. Tarjeta de Contacto */}
      <div className="relative max-w-[850px] w-full bg-secondary-purple/5 border-2 border-main-purple/30 rounded-[3rem] p-12 md:p-20 backdrop-blur-sm overflow-hidden group hover:border-main-purple/60 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(108,52,211,0.2)]">
        
        {/* Resplandor de fondo */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-main-purple/10 blur-[80px] rounded-full group-hover:bg-main-purple/20 transition-all duration-500"></div>

        <div className="relative z-10 flex flex-col items-start gap-12 text-left">
          
          <div className="space-y-6">
            <h3 className="text-[3.2rem] md:text-[3.8rem] font-bold text-white tracking-tight">
              ¡Trabajemos juntos!
            </h3>
            <p className="text-[1.7rem] text-text-purple/80 leading-relaxed font-medium">
              Siempre estoy abierto a explorar nuevas oportunidades y desafíos donde pueda aportar valor y seguir creciendo profesionalmente. Si buscas a alguien comprometido, con ganas de aprender y contribuir a tu equipo, ¡me encantaría saber de ti!
            </p>
          </div>

          {/* Información de Contacto */}
          <div className="w-full space-y-10">
            
            {/* Bloque: Email */}
            <div className="flex items-center gap-6 group/item cursor-pointer" onClick={copyEmail}>
              <div className="relative shrink-0 w-20 h-20 bg-main-purple/20 border border-main-purple/40 rounded-full flex items-center justify-center group-hover/item:bg-main-purple group-hover/item:shadow-[0_0_20px_#6c34d3] transition-all duration-300">
                <i className='bx bx-envelope text-[3.5rem] text-main-purple group-hover/item:text-white transition-colors'></i>
              </div>
              <div className="flex-1 relative">
                {showTooltip && (
                  <div className="absolute -top-12 left-0 bg-main-purple text-white text-[1.2rem] px-5 py-2 rounded-xl font-bold animate-bounce shadow-lg">
                    ¡Copiado!
                  </div>
                )}
                <h4 className="text-[1.5rem] text-main-purple font-black tracking-widest uppercase">Correo</h4>
                <p className="text-[1.7rem] md:text-[2rem] text-white font-semibold tracking-tight hover:text-main-purple transition-colors truncate">
                  {email}
                </p>
              </div>
            </div>

            {/* Bloque: Teléfono (Nuevo) */}
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-6 group/phone">
              <div className="shrink-0 w-20 h-20 bg-main-purple/20 border border-main-purple/40 rounded-full flex items-center justify-center group-hover/phone:bg-main-purple group-hover/phone:shadow-[0_0_20px_#6c34d3] transition-all duration-300">
                <i className='bx bx-phone text-[3.5rem] text-main-purple group-hover/phone:text-white transition-colors'></i>
              </div>
              <div>
                <h4 className="text-[1.5rem] text-main-purple font-black tracking-widest uppercase">Teléfono</h4>
                <p className="text-[1.7rem] md:text-[2rem] text-white font-semibold tracking-tight group-hover:text-main-purple transition-colors">
                  {phone}
                </p>
              </div>
            </a>

            {/* Bloque: Ubicación */}
            <div className="flex items-center gap-6">
              <div className="shrink-0 w-20 h-20 bg-main-purple/20 border border-main-purple/40 rounded-full flex items-center justify-center">
                <i className='bx bx-map text-[3.5rem] text-main-purple'></i>
              </div>
              <div>
                <h4 className="text-[1.5rem] text-main-purple font-black tracking-widest uppercase">Ubicación</h4>
                <p className="text-[1.7rem] md:text-[2rem] text-white font-semibold tracking-tight">
                  San José, Costa Rica 🇨🇷
                </p>
              </div>
            </div>

          </div>

          {/* Redes Sociales */}
          <div className="w-full flex justify-center pt-8 border-t border-white/5 gap-8">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-[5rem] h-[5rem] border-2 border-main-purple rounded-full flex items-center justify-center text-[2.8rem] text-main-purple transition-all duration-500 hover:bg-main-purple hover:text-bg-color hover:shadow-[0_0_1.5rem_#6c34d3]"
              >
                <i className={`bx ${social.icon}`}></i>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;