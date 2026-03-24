import React, { useState } from 'react';
// Importamos Swiper React components y estilos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  const [filter, setFilter] = useState('Todos');
  const [visibleCount, setVisibleCount] = useState(3);

  // --- TUS DATOS DE PROYECTOS (Actualizados con webp) ---
  const projectsData = [
    {
      id: 1,
      title: 'FINCE: Gestor de Finanzas con IA',
      category: 'Destacados',
      badge: 'Proyecto Personal',
      type: 'Full-Stack Development',
      description: 'Plataforma inteligente de gestión financiera que utiliza IA para analizar patrones de gasto y generar recomendaciones de presupuesto personalizadas.',
      techStack: ['React', 'JavaScript', 'PostgreSQL', 'Groq AI'],
      images: [
        { src: '/assets/projects/fince-1.webp' },
        { src: '/assets/projects/fince-2.webp' }
      ],
      liveDemo: 'https://fince.netlify.app',
      githubRepo: 'https://github.com/CarlosRW/Fince-AI-Budget',
    },
    {
      id: 2,
      title: 'Happy Pizza - Sitio Web',
      category: 'Destacados',
      badge: 'Proyecto Personal',
      type: 'Full-Stack Development',
      description: 'Sitio web de restaurante con diseño moderno, menú interactivo y sistema de pedidos integrado con WhatsApp. Experiencia de usuario optimizada.',
      techStack: ['React', 'JavaScript', 'Node.js'],
      images: [
        { src: '/assets/projects/pizza-1.webp' },
        { src: '/assets/projects/pizza-2.webp' },
        { src: '/assets/projects/pizza-3.webp' }
      ],
      liveDemo: 'https://happy-pizza-cr.vercel.app/',
    },
    {
      id: 3,
      title: '',
      category: 'Universidad',
      badge: 'Universidad',
      type: '',
      description: '.',
      techStack: [''],
      images: [
        { src: '/assets/projects/ml-1.webp' }
      ],
      githubRepo: 'https://github.com/CarlosRW/',
    },
    {
      id: 4,
      title: 'Spread the Bread',
      category: 'Juegos',
      badge: 'Videojuego',
      type: 'Game Jam Project',
      description: 'Videojuego desarrollado para Bread Jam 2, inspirado en Fruit Ninja, con scoreboard y sistema de puntuación. Completado en 48 horas con Godot Engine.',
      techStack: ['Godot Engine', 'GDScript', 'Aseprite'],
      images: [
        { src: '/assets/projects/sandwich-1.webp' },
        { src: '/assets/projects/sandwich-2.webp' }
      ],
      liveDemo: 'https://skycito23.itch.io/spread-the-bread',
    },
    {
      id: 4,
      title: 'Paws Together',
      category: 'Juegos',
      badge: 'Videojuego',
      type: 'Game Jam Project',
      description: 'Videojuego cooperativo de plataformas y puzles para dos jugadores, centrado en el trabajo en equipo, la comunicación y la conexión entre ambos personajes. Combinando habilidades para superar trampas, resolver niveles y avanzar juntos.',
      techStack: ['Godot Engine', 'GDScript', 'Aseprite'],
      images: [
        { src: '/assets/projects/sandwich-1.webp' },
        { src: '/assets/projects/sandwich-2.webp' }
      ],
      liveDemo: 'https://skycito23.itch.io/paws-together',
    },
  ];

  // Lógica de Filtrado y "Ver más" 
  const filteredProjects = filter === 'Todos'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section className="min-h-screen bg-bg-color py-32 px-[7%] flex flex-col items-center" id="projects">
      {/* Título y Filtros */}
      <div className="text-center mb-20">
        <h2 className="text-[5.5rem] md:text-[7.5rem] font-bold text-text-purple">
          Mis <span className="gradient-text">Proyectos</span>
        </h2>
        <div className="w-[12rem] h-[5px] bg-main-purple mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-20">
        {['Todos', 'Destacados', 'Universidad', 'Juegos'].map((cat) => (
          <button
            key={cat}
            onClick={() => { setFilter(cat); setVisibleCount(3); }}
            className={`px-10 py-4 rounded-full text-[1.6rem] font-bold transition-all border-2 
              ${filter === cat
                ? 'bg-main-purple border-main-purple text-white shadow-[0_0_20px_rgba(108,52,211,0.4)]'
                : 'bg-transparent border-white/10 text-text-purple/60 hover:border-main-purple/50'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-[1600px]">
        {displayedProjects.map((project) => (
          <div key={project.id} className="group bg-secondary-purple/10 border border-white/5 rounded-[2.5rem] p-10 flex flex-col hover:border-main-purple/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(108,52,211,0.2)] hover:-translate-y-3">

            {/* --- NUEVA SECCIÓN DE IMAGEN: CARRUSEL INTEGRADO --- */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-10 border-4 border-transparent group-hover:border-main-purple transition-all project-swiper-container">

              {/* Badge de Categoría */}
              <div className="absolute top-4 left-4 z-30 bg-main-purple text-white px-5 py-2 rounded-full text-[1.2rem] font-bold uppercase shadow-lg">
                {project.badge}
              </div>

              {/* Degradado superpuesto sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-color/40 via-transparent to-transparent z-20 opacity-70"></div>

              {/* Swiper Carrusel */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={project.images.length > 1} // Solo muestra flechas si hay > 1 imagen
                pagination={{ clickable: true }} // Puntos inferiores
                autoplay={{ delay: 5000, disableOnInteraction: true }} // Autoplay sutil
                className="w-full h-full"
              >
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image.src}
                      alt={`${project.title} - Vista ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* --- RESTO DE LA TARJETA (Texto y Botones igual) --- */}
            <div className="flex-grow flex flex-col">
              <span className="text-main-purple text-[1.4rem] font-bold tracking-widest mb-2 uppercase italic">
                {project.type}
              </span>
              <h3 className="text-[2.6rem] font-bold text-text-purple mb-5 leading-tight">
                {project.title}
              </h3>
              <p className="text-[1.7rem] text-text-purple/80 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10 mt-auto">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-4 py-1.5 bg-white/5 border border-white/10 text-white/80 rounded-lg text-[1.3rem] font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-auto pt-8 border-t border-white/10">
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-5 bg-main-purple rounded-xl text-[1.5rem] text-white font-bold transition-all hover:brightness-110 hover:shadow-[0_0_15px_#6c34d3]">
                  <i className='bx bx-play-circle'></i> Demo
                </a>
              )}
              {project.githubRepo && (
                <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-5 bg-transparent border-2 border-white/20 rounded-xl text-[1.5rem] text-text-purple font-semibold hover:border-main-purple hover:text-white transition-all">
                  <i className='bx bxl-github'></i> Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Botón Ver Más (Igual a la anterior) */}
      {visibleCount < filteredProjects.length && (
        <button
          onClick={() => setVisibleCount(prev => prev + 3)}
          className="mt-20 px-16 py-5 bg-transparent border-2 border-main-purple text-main-purple rounded-full text-[1.8rem] font-bold hover:bg-main-purple hover:text-white transition-all flex items-center gap-4"
        >
          Explorar más proyectos
          <i className='bx bx-chevron-down text-[2.5rem]'></i>
        </button>
      )}
    </section>
  );
};

export default Projects;