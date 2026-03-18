import React from 'react';

const About = () => {
  const approachItems = [
    { number: '01', text: 'Entender usuarios y metas' },
    { number: '02', text: 'Crear layouts UI limpios' },
    { number: '03', text: 'Experiencias responsivas' },
  ];

  const stats = [
    { number: '56%', text: 'UNIVERSIDAD FIDÉLITAS COMPLETADO' },
    { number: '10+', text: 'PROYECTOS COMPLETADOS' },
    { number: '03+', text: 'JUEGOS/DEMOS DESARROLLADOS' },
  ];

  return (
    <section className="min-h-screen bg-bg-color py-32 px-[7%] flex flex-col items-center" id="about">
      {/* Título Principal Gigante */}
      <div className="text-center mb-24">
        <h2 className="text-[5.5rem] md:text-[7rem] font-bold text-text-purple">
          Sobre <span className="text-main-purple">Mí</span>
        </h2>
        <div className="w-[10rem] h-[4px] bg-main-purple mx-auto mt-2 rounded-full"></div>
        
        <p className="text-[1.8rem] md:text-[2.2rem] text-text-purple/80 mt-12 max-w-[100rem] mx-auto leading-relaxed">
          Soy un estudiante de Ingeniería en Desarrollo de Software apasionado por crear experiencias digitales limpias, intuitivas y responsivas. Mi enfoque se centra en transformar ideas en interfaces fluidas a través de un profundo entendimiento de las necesidades de los usuarios y un diseño visual coherente.
        </p>
      </div>

      {/* Mi Enfoque - Más ancho y espaciado */}
      <div className="w-full max-w-[1400px] mb-32 text-center">
        <h3 className="text-[2.8rem] font-semibold text-text-purple mb-16 inline-block relative border-b-2 border-main-purple pb-2">
          Mi <span className="text-main-purple">Enfoque</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {approachItems.map((item, index) => (
            <div key={index} className="flex items-center gap-8 p-10 bg-secondary-purple/5 border border-main-purple/20 rounded-2xl hover:border-main-purple transition-all duration-300">
              <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-main-purple flex items-center justify-center text-[2.8rem] font-bold text-main-purple">
                {item.number}
              </div>
              <p className="text-[2rem] text-text-purple font-medium text-left leading-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats con Cuadros de Resplandor */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-[1300px]">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="relative p-10 border-2 border-white/10 rounded-xl transition-all duration-500 group-hover:border-main-purple group-hover:shadow-[0_0_4rem_rgba(108,52,211,0.4)]">
              {/* Resplandor detrás del número */}
              <div className="absolute inset-0 blur-[30px] bg-white/5 group-hover:bg-main-purple/20 transition-all"></div>
              
              <h4 className="relative text-[8rem] md:text-[8rem] font-bold text-white leading-none">
                {stat.number}
              </h4>
            </div>
            <p className="text-[1.5rem] md:text-[1.8rem] text-text-purple/70 mt-8 tracking-[0.2em] font-bold text-center uppercase">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;