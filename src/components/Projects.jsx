import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Reveal from './Reveal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projectsData = [
  {
    key: 'zumi',
    category: 'featured',
    badgeTone: 'progress',
    techStack: ['Next.js', 'React', 'TypeScript'],
    images: [{ src: '/assets/projects/zumi-1.png' }],
    liveDemo: 'https://zumi-dev.vercel.app/',
    hasCaseStudy: true,
  },
  {
    key: 'moki',
    category: 'featured',
    badgeTone: 'progress',
    techStack: ['React', 'IA Generativa', 'Auth (Google)'],
    images: [{ src: '/assets/projects/moki-1.png' }],
    liveDemo: 'https://moki-app.vercel.app/home',
    hasCaseStudy: true,
  },
  {
    key: 'fince',
    category: 'featured',
    techStack: ['React', 'JavaScript', 'PostgreSQL', 'Groq AI'],
    images: [
      { src: '/assets/projects/fince-1.webp' },
      { src: '/assets/projects/fince-2.webp' }
    ],
    liveDemo: 'https://fince.netlify.app',
    githubRepo: 'https://github.com/CarlosRW/Fince-AI-Budget',
    hasCaseStudy: true,
  },
  {
    key: 'pizza',
    category: 'featured',
    techStack: ['React', 'JavaScript', 'Node.js'],
    images: [
      { src: '/assets/projects/pizza-1.webp' },
      { src: '/assets/projects/pizza-2.webp' },
      { src: '/assets/projects/pizza-3.webp' }
    ],
    liveDemo: 'https://happy-pizza-cr.vercel.app/',
    hasCaseStudy: true,
  },
  {
    key: 'coffeelab',
    category: 'featured',
    techStack: ['React', 'Node.js', 'Tailwind CSS'],
    images: [
      { src: '/assets/projects/Coffee-Lab-1.webp' },
      { src: '/assets/projects/Coffee-Lab-2.webp' },
      { src: '/assets/projects/Coffee-Lab-3.webp' }
    ],
    liveDemo: 'https://coffeelab-seven.vercel.app',
  },
  {
    key: 'catgame',
    category: 'featured',
    techStack: ['React', 'JavaScript'],
    images: [{ src: '/assets/projects/catgame-1.webp' }],
    liveDemo: 'https://cat-queen-game-beta.vercel.app',
    githubRepo: 'https://github.com/CarlosRW/Cat-Queen-Game',
  },
  {
    key: 'agrodirecto',
    category: 'university',
    badgeTone: 'academic',
    techStack: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
    images: [{ src: '/assets/projects/AgroDirecto-1.webp' }],
    githubRepo: 'https://github.com/CarlosRW/AgroDirectoCR',
  },
  {
    key: 'agenteia',
    category: 'ai',
    badgeTone: 'academic',
    techStack: ['Groq AI', 'Python', 'Streamlit'],
    images: [
      { src: '/assets/projects/Agente-IA-1.webp' },
      { src: '/assets/projects/Agente-IA-2.webp' }
    ],
    liveDemo: 'https://modova-agente-ia.streamlit.app/',
  },
  {
    key: 'breadgame',
    category: 'games',
    badgeTone: 'academic',
    techStack: ['Godot Engine', 'GDScript', 'Aseprite'],
    images: [
      { src: '/assets/projects/bread-1.webp' },
      { src: '/assets/projects/bread-2.webp' }
    ],
    liveDemo: 'https://skycito23.itch.io/spread-the-bread',
  },
  {
    key: 'pawsgame',
    category: 'games',
    badgeTone: 'academic',
    techStack: ['Godot Engine', 'GDScript', 'Aseprite'],
    images: [
      { src: '/assets/projects/Paws-Together-1.webp' },
      { src: '/assets/projects/Paws-Together-2.webp' }
    ],
    liveDemo: 'https://skycito23.itch.io/paws-together',
  },
];

// Filtros visibles en la UI. 'all' incluye todo; el resto matchea project.category.
const filterOptions = ['all', 'featured', 'university', 'games'];

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(3);
  const [expandedKey, setExpandedKey] = useState(null);

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section className="min-h-screen bg-bg-color py-32 px-[7%] flex flex-col items-center" id="projects">

      <Reveal className="text-center mb-20">
        <h2 className="text-[5.5rem] md:text-[7.5rem] font-bold text-text-purple">
          {t('projects.titlePart1')} <span className="gradient-text">{t('projects.titlePart2')}</span>
        </h2>
        <div className="w-48 h-[5px] bg-main-purple mx-auto mt-4 rounded-full"></div>
      </Reveal>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-6 mb-20">
        {filterOptions.map((cat) => (
          <button
            key={cat}
            onClick={() => { setFilter(cat); setVisibleCount(3); }}
            className={`px-10 py-4 rounded-full text-[1.6rem] font-bold transition-all border-2 ${filter === cat ? 'bg-main-purple border-main-purple text-white shadow-[0_0_20px_rgba(108,52,211,0.4)]' : 'bg-transparent border-white/10 text-text-purple/60 hover:border-main-purple/50'}`}
          >
            {t(`projects.filters.${cat}`)}
          </button>
        ))}
      </div>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-[1600px]">
        {displayedProjects.map((project, index) => {
          const base = `projects.items.${project.key}`;
          return (
            <Reveal
              key={project.key}
              as="article"
              index={index % 3}
              className={`group relative flex flex-col border rounded-4xl overflow-hidden transition-all duration-500 hover:border-main-purple/40 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(108,52,211,0.2)] ${
                project.badgeTone === 'academic'
                  ? 'bg-secondary-purple/5 border-white/5 opacity-90'
                  : 'bg-secondary-purple/10 border-white/5'
              }`}
            >
              {/* Imagen a sangre completa con overlay editorial */}
              <div className="relative aspect-4/3 overflow-hidden [&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white [&_.swiper-button-next]:bg-black/30 [&_.swiper-button-prev]:bg-black/30 [&_.swiper-button-next]:backdrop-blur-md [&_.swiper-button-prev]:backdrop-blur-md [&_.swiper-button-next]:w-12 [&_.swiper-button-prev]:w-12 [&_.swiper-button-next]:h-12 [&_.swiper-button-prev]:h-12 [&_.swiper-button-next]:rounded-full [&_.swiper-button-prev]:rounded-full [&_.swiper-button-next]:after:text-[1.5rem] [&_.swiper-button-prev]:after:text-[1.5rem] [&_.swiper-button-next]:opacity-0 [&_.swiper-button-prev]:opacity-0 group-hover:[&_.swiper-button-next]:opacity-100 group-hover:[&_.swiper-button-prev]:opacity-100 [&_.swiper-button-next]:transition-all [&_.swiper-button-prev]:transition-all [&_.swiper-button-next]:hover:bg-main-purple [&_.swiper-button-prev]:hover:bg-main-purple [&_.swiper-pagination-bullet]:bg-white/50 [&_.swiper-pagination-bullet-active]:bg-main-purple [&_.swiper-pagination-bullet-active]:w-5 [&_.swiper-pagination-bullet-active]:rounded-full">

                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation={project.images.length > 1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  className="w-full h-full"
                >
                  {project.images.map((image, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={image.src}
                        alt={t(`${base}.title`)}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Overlay degradado para legibilidad, fundiendo con el color de fondo */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-secondary-purple/10 via-transparent to-black/20 z-10"></div>

                {/* Badge de categoría */}
                <div
                  className={`absolute top-5 left-5 z-30 backdrop-blur-md border px-5 py-2 rounded-full text-[1.15rem] font-bold uppercase tracking-wide flex items-center gap-2 ${
                    project.badgeTone === 'progress'
                      ? 'bg-amber-500/20 border-amber-400/40 text-amber-300'
                      : 'bg-bg-color/70 border-white/10 text-text-purple'
                  }`}
                >
                  {project.badgeTone === 'progress' && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                    </span>
                  )}
                  {t(`${base}.badge`)}
                </div>

                {/* Accesos rápidos flotantes */}
                <div className="absolute top-5 right-5 z-30 flex gap-3 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" aria-label={t('projects.viewDemo')} className="w-12 h-12 flex items-center justify-center bg-bg-color/70 backdrop-blur-md border border-white/10 rounded-full text-white text-[1.8rem] hover:bg-main-purple hover:border-main-purple transition-all">
                      <i className='bx bx-link-external'></i>
                    </a>
                  )}
                  {project.githubRepo && (
                    <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" aria-label={t('projects.viewCode')} className="w-12 h-12 flex items-center justify-center bg-bg-color/70 backdrop-blur-md border border-white/10 rounded-full text-white text-[1.8rem] hover:bg-main-purple hover:border-main-purple transition-all">
                      <i className='bx bxl-github'></i>
                    </a>
                  )}
                </div>
              </div>

              {/* Contenido */}
              <div className="grow flex flex-col p-9">
                <span className="flex items-center gap-2 text-main-purple text-[1.3rem] font-bold tracking-widest mb-3 uppercase">
                  <span className="w-6 h-[2px] bg-main-purple"></span>
                  {t(`${base}.type`)}
                </span>

                <h3 className="text-[2.3rem] font-bold text-text-purple mb-4 leading-tight group-hover:text-white transition-colors">
                  {t(`${base}.title`)}
                </h3>

                <p className="text-[1.55rem] text-text-purple/70 leading-relaxed mb-7 line-clamp-3">
                  {t(`${base}.description`)}
                </p>

                <div className="flex flex-wrap gap-2.5 mb-8">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3.5 py-1.5 bg-white/5 border border-white/10 text-white/70 rounded-lg text-[1.2rem] font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Caso de estudio expandible: Problema → Solución → Resultado */}
                {project.hasCaseStudy && (
                  <div className="mb-7 -mt-2">
                    <button
                      onClick={() => setExpandedKey(expandedKey === project.key ? null : project.key)}
                      aria-expanded={expandedKey === project.key}
                      className="flex items-center gap-2 text-[1.3rem] font-bold text-main-purple hover:text-white transition-colors"
                    >
                      <i className={`bx bx-chevron-down text-[1.8rem] transition-transform ${expandedKey === project.key ? 'rotate-180' : ''}`}></i>
                      {expandedKey === project.key ? t('projects.hideCaseStudy') : t('projects.viewCaseStudy')}
                    </button>

                    {expandedKey === project.key && (
                      <div className="mt-5 space-y-4 text-[1.4rem] leading-relaxed text-text-purple/70 border-l-2 border-main-purple/30 pl-5">
                        <div>
                          <span className="block text-main-purple font-bold uppercase tracking-wide text-[1.1rem] mb-1">{t('projects.problem')}</span>
                          {t(`${base}.caseStudy.problem`)}
                        </div>
                        <div>
                          <span className="block text-main-purple font-bold uppercase tracking-wide text-[1.1rem] mb-1">{t('projects.solution')}</span>
                          {t(`${base}.caseStudy.solution`)}
                        </div>
                        <div>
                          <span className="block text-main-purple font-bold uppercase tracking-wide text-[1.1rem] mb-1">{t('projects.result')}</span>
                          {t(`${base}.caseStudy.result`)}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Footer: CTA principal + acción secundaria */}
                <div className="mt-auto pt-7 border-t border-white/10 flex gap-4">
                  <a href={project.liveDemo || project.githubRepo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-4 bg-main-purple rounded-xl text-[1.4rem] text-white font-bold transition-all hover:brightness-110 hover:shadow-[0_0_15px_#6c34d3]">
                    <i className={`bx ${project.liveDemo ? 'bx-play-circle' : 'bxl-github'} text-[1.8rem]`}></i>
                    {project.liveDemo ? t('projects.viewDemo') : t('projects.viewCode')}
                  </a>
                  {project.liveDemo && project.githubRepo && (
                    <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" aria-label={t('projects.viewCode')} className="w-[5.6rem] flex items-center justify-center bg-transparent border-2 border-white/15 rounded-xl text-text-purple text-[2rem] hover:border-main-purple hover:text-white transition-all">
                      <i className='bx bxl-github'></i>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Botón Ver Más */}
      {visibleCount < filteredProjects.length && (
        <button
          onClick={() => setVisibleCount(prev => prev + 3)}
          className="mt-20 px-16 py-5 bg-transparent border-2 border-main-purple text-main-purple rounded-full text-[1.8rem] font-bold hover:bg-main-purple hover:text-white transition-all flex items-center gap-4 group"
        >
          {t('projects.exploreMore')}
          <i className='bx bx-chevron-down text-[2.5rem] transition-transform group-hover:translate-y-2'></i>
        </button>
      )}
    </section>
  );
};

export default Projects;