import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Full-Stack Development',
      description: 'Creación de aplicaciones web robustas usando tecnologías modernas con un enfoque en código limpio y escalabilidad.',
      techStack: ['React', 'Python', 'Java', 'SQL']
    },
    {
      title: 'UI/UX Design',
      description: 'Interfaces intuitivas y responsivas centradas en el usuario, manteniendo una jerarquía visual clara y moderna.',
      techStack: ['Figma', 'Tailwind', 'Responsive']
    },
    {
      title: 'Game Development',
      description: 'Diseño de experiencias interactivas y mecánicas de juego "cozy" utilizando motores como Godot y Unity.',
      techStack: ['Godot', 'Unity', 'C#', 'GDScript']
    },
{
      title: 'AI & Machine Learning',
      description: 'Integración de modelos de IA y automatización de procesos para optimizar la experiencia del usuario y la eficiencia de datos.',
      techStack: ['Groq AI', 'Gemini', 'Python']
    },
  ];

  return (
    <section className="min-h-screen bg-secondary-purple/5 py-32 px-[7%] flex flex-col items-center" id="services">
      <div className="text-center mb-24">
        <h2 className="text-[5.5rem] md:text-[7rem] font-bold text-text-purple">
          Mis <span className="text-main-purple">Servicios</span>
        </h2>
        <p className="text-[2rem] text-text-purple/70 mt-6 font-medium">
          Diseñando soluciones digitales escalables y modernas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-[1500px]">
        {services.map((service, index) => (
          <div key={index} className="p-12 bg-bg-color border border-white/5 rounded-3xl hover:border-main-purple/50 transition-all duration-500 hover:-translate-y-4 flex flex-col min-h-[450px]">
            <h3 className="text-[2.6rem] font-bold text-text-purple mb-6 leading-tight">
              {service.title}
            </h3>
            <p className="text-[1.7rem] text-text-purple/70 leading-relaxed mb-10 flex-grow">
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
        ))}
      </div>
    </section>
  );
};

export default Services;