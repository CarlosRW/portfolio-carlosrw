import React, { useState } from 'react';

const Services = () => {
  const services = [
    {
      title: 'Full-Stack Development',
      icon: 'bx-code-alt',
      tagline: 'Apps web robustas de punta a punta.',
      description: 'Creación de aplicaciones web robustas usando tecnologías modernas con un enfoque en código limpio y escalabilidad.',
      techStack: ['React', 'Python', 'Java', 'SQL']
    },
    {
      title: 'UI/UX Design',
      icon: 'bx-pen',
      tagline: 'Interfaces claras, humanas, modernas.',
      description: 'Interfaces intuitivas y responsivas centradas en el usuario, manteniendo una jerarquía visual clara y moderna.',
      techStack: ['Figma', 'Tailwind', 'Responsive']
    },
    {
      title: 'Game Development',
      icon: 'bx-joystick',
      tagline: 'Mecánicas "cozy" con propósito.',
      description: 'Diseño de experiencias interactivas y mecánicas de juego "cozy" utilizando motores como Godot y Unity.',
      techStack: ['Godot', 'Unity', 'C#', 'GDScript']
    },
    {
      title: 'AI & Machine Learning',
      icon: 'bx-bot',
      tagline: 'IA aplicada a problemas reales.',
      description: 'Integración de modelos de IA y automatización de procesos para optimizar la experiencia del usuario y la eficiencia de datos.',
      techStack: ['Groq AI', 'Gemini', 'Python']
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="min-h-screen bg-secondary-purple/5 py-32 px-[7%] flex flex-col items-center" id="services">
      <div className="text-center mb-24">
        <h2 className="text-[5.5rem] md:text-[7.5rem] font-bold text-text-purple">
          Mis <span className="gradient-text">Servicios</span>
        </h2>
        <div className="w-[12rem] h-[5px] bg-main-purple mx-auto mt-4 rounded-full"></div>
        <p className="text-[2rem] text-text-purple/70 mt-6 font-medium">
          Diseñando soluciones digitales escalables y modernas.
        </p>
      </div>

      {/* Paneles interactivos: en desktop se expanden en horizontal al hacer hover,
          en móvil funcionan como acordeón vertical al hacer click */}
      <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1500px] lg:h-[520px]">
        {services.map((service, index) => {
          const isActive = active === index;
          return (
            <div
              key={service.title}
              onMouseEnter={() => setActive(index)}
              onClick={() => setActive(index)}
              className={`relative overflow-hidden bg-bg-color border rounded-[2.5rem] cursor-pointer
                transition-all duration-500 ease-out flex flex-col
                ${isActive
                  ? 'border-main-purple/60 lg:flex-[2.4] shadow-[0_25px_60px_rgba(108,52,211,0.25)]'
                  : 'border-white/5 lg:flex-1 hover:border-main-purple/30'}
                px-10 py-10 lg:py-12`}
            >
              {/* Glow decorativo */}
              <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[90px] transition-opacity duration-500
                bg-main-purple/30 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

              {/* Header: icono + número + título */}
              <div className="relative z-10 flex lg:flex-col items-center lg:items-start gap-6 lg:gap-0">
                <div className={`shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-3xl flex items-center justify-center border transition-all duration-500
                  ${isActive ? 'bg-main-purple border-main-purple text-white' : 'bg-main-purple/10 border-main-purple/20 text-main-purple'}`}>
                  <i className={`bx ${service.icon} text-[3.6rem] lg:text-[4rem]`}></i>
                </div>

                <div className="lg:mt-8">
                  <span className="block text-[1.3rem] font-black tracking-[0.25em] text-main-purple/70 uppercase mb-1">
                    0{index + 1}
                  </span>
                  <h3 className="text-[2.2rem] lg:text-[2.6rem] font-bold text-text-purple leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Contenido expandido */}
              <div className={`relative z-10 grid transition-all duration-500 ease-out
                ${isActive ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0 lg:mt-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="text-[1.7rem] text-text-purple/70 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.techStack.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-main-purple/10 border border-main-purple/20 text-main-purple rounded-lg text-[1.3rem] font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tagline visible solo cuando está colapsado (desktop) */}
              {!isActive && (
                <p className="hidden lg:block relative z-10 text-[1.5rem] text-text-purple/50 font-medium mt-8 leading-snug">
                  {service.tagline}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;