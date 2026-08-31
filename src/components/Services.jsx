import React from 'react';
import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';

const Services = () => {
  const services = [
    {
      title: 'Full-Stack Development',
      icon: 'bx-code-alt',
      description: 'Creación de aplicaciones web robustas usando tecnologías modernas con un enfoque en código limpio y escalabilidad.',
      techStack: ['React', 'Python', 'Java', 'SQL']
    },
    {
      title: 'UI/UX Design',
      icon: 'bx-pen',
      description: 'Interfaces intuitivas y responsivas centradas en el usuario, manteniendo una jerarquía visual clara y moderna.',
      techStack: ['Figma', 'Tailwind', 'Responsive']
    },
    {
      title: 'Game Development',
      icon: 'bx-joystick',
      description: 'Diseño de experiencias interactivas y mecánicas de juego "cozy" utilizando motores como Godot y Unity.',
      techStack: ['Godot', 'Unity', 'C#', 'GDScript']
    },
    {
      title: 'AI & Machine Learning',
      icon: 'bx-bot',
      description: 'Integración de modelos de IA y automatización de procesos para optimizar la experiencia del usuario y la eficiencia de datos.',
      techStack: ['Groq AI', 'Gemini', 'Python']
    },
  ];

  return (
    <section className="min-h-screen bg-secondary-purple/5 py-32 px-[7%] flex flex-col items-center" id="services">
      <Reveal className="text-center mb-24">
        <h2 className="text-[5.5rem] md:text-[7.5rem] font-bold text-text-purple">
          Mis <span className="gradient-text">Servicios</span>
        </h2>
        <div className="w-48 h-[5px] bg-main-purple mx-auto mt-4 rounded-full"></div>
        <p className="text-[2rem] text-text-purple/70 mt-6 font-medium">
          Diseñando soluciones digitales escalables y modernas.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-[1500px]">
        {services.map((service, index) => (
          <Reveal key={service.title} index={index}>
            <SpotlightCard className="group relative bg-bg-color border border-white/5 rounded-[2rem] p-10 flex flex-col items-center text-center h-full transition-all duration-500 hover:border-main-purple/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(108,52,211,0.2)]">
              <div className="w-20 h-20 rounded-2xl bg-main-purple/10 border border-main-purple/20 flex items-center justify-center text-main-purple mb-8 group-hover:bg-main-purple group-hover:text-white transition-all duration-500">
                <i className={`bx ${service.icon} text-[3.6rem]`}></i>
              </div>

              <h3 className="text-[2.2rem] font-bold text-text-purple mb-4 leading-tight">
                {service.title}
              </h3>

              <p className="text-[1.5rem] text-text-purple/60 leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="mt-auto flex flex-wrap justify-center gap-2">
                {service.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 text-white/60 rounded-lg text-[1.2rem] font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Services;