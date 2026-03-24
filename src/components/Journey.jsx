const Journey = () => {
  return (
    <section id="education" className="py-32 px-[7%] bg-bg-color">
      <div className="text-center mb-20">
        <h2 className="text-[5.5rem] md:text-[7.5rem] font-bold text-white">
          My <span className="gradient-text">Journey</span>
        </h2>
        <div className="w-[12rem] h-[5px] bg-main-purple mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Educación */}
        <div>
          <h3 className="text-[3rem] font-bold text-white mb-12 flex items-center gap-4">
            <i className='bx bxs-graduation text-main-purple'></i> Education
          </h3>
          <div className="space-y-8 border-l-2 border-main-purple/30 pl-8">
            <TimelineItem 
              date="2024 - PRESENT"
              title="Software Development Engineering"
              subtitle="Universidad Fidélitas"
              desc="Formación sólida en ingeniería, estructuras de datos y arquitectura de software."
              logo="/assets/logos/fidelitas.webp" 
            />
            <TimelineItem 
              date="2025 - COMPLETED"
              title="Back-End Developer"
              subtitle="Oracle Next Education (ONE G8)"
              desc="Especialización en soluciones escalables y arquitectura empresarial."
              logo="/assets/logos/oracle-one.webp"
            />
            <TimelineItem 
              date="2025 - PRESENT"
              title="Google Gemini AI Immersion"
              subtitle="Alura Latam & Google"
              desc="Dominio de IA generativa aplicada al desarrollo de software real."
              logo="/assets/logos/alura.webp"
            />
          </div>
        </div>

        {/* Experiencia */}
        <div>
          <h3 className="text-[3rem] font-bold text-white mb-12 flex items-center gap-4">
            <i className='bx bxs-briefcase text-main-purple'></i> Experience
          </h3>
          <div className="space-y-8 border-l-2 border-main-purple/30 pl-8">
            <TimelineItem 
              date="2023 - 2023"
              title="Web Development Intern"
              subtitle="QXD Quality XP Development"
              desc="Desarrollo full-stack colaborativo usando metodologías ágiles y frameworks modernos."
              logo="/assets/logos/qxd.webp"
            />
            <TimelineItem 
              date="2024 - PRESENT"
              title="Freelance Full-Stack Developer"
              subtitle="Proyectos Independientes"
              desc="Creación de soluciones personalizadas y despliegue de aplicaciones web escalables."
              logo="/assets/logos/personal-logo.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Subcomponente Ajustado para Imágenes
const TimelineItem = ({ date, title, subtitle, desc, logo }) => (
  <div className="relative bg-secondary-purple/5 border border-white/5 p-10 rounded-[2.5rem] group hover:border-main-purple/50 transition-all duration-500 hover:bg-secondary-purple/10">
    {/* Indicador de Línea de Tiempo con Brillo Proyectado */}
    <div className="absolute -left-[43px] top-12 w-6 h-6 bg-main-purple rounded-full shadow-[0_0_20px_#6c34d3] group-hover:scale-125 transition-all duration-500"></div>
    
    <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-10">
      <div className="flex-1 order-2 xl:order-1 text-center xl:text-left">
        <span className="text-main-purple font-black text-[1.4rem] tracking-[0.2em] uppercase">{date}</span>
        <h4 className="text-[2.6rem] font-bold text-white mt-3 leading-tight group-hover:text-main-purple transition-colors">{title}</h4>
        <p className="text-white/80 text-[1.8rem] font-semibold mt-1">{subtitle}</p>
        <p className="text-white/50 text-[1.6rem] mt-6 leading-relaxed max-w-[600px]">{desc}</p>
      </div>
      
      {/* Contenedor del Logo de Gran Tamaño */}
      <div className="order-1 xl:order-2 shrink-0 relative">
        {/* Resplandor de fondo para el logo */}
        <div className="absolute inset-0 bg-main-purple/20 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white/5 backdrop-blur-md rounded-[2rem] flex items-center justify-center p-4 border border-white/10 group-hover:border-main-purple/40 group-hover:scale-110 transition-all duration-500 overflow-hidden shadow-2xl">
          <img 
            src={logo} 
            alt={subtitle} 
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            onError={(e) => { e.target.src = "https://via.placeholder.com/150/6c34d3/ffffff?text=Logo"; }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Journey;