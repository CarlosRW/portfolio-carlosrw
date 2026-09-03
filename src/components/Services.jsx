import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { key: 'fullstack', icon: 'bx-code-alt', techStack: ['React', 'Python', 'Java', 'SQL'] },
    { key: 'uiux', icon: 'bx-pen', techStack: ['Figma', 'Tailwind', 'Responsive'] },
    { key: 'gamedev', icon: 'bx-joystick', techStack: ['Godot', 'Unity', 'C#', 'GDScript'] },
    { key: 'ai', icon: 'bx-bot', techStack: ['Groq AI', 'Gemini', 'Python'] },
  ];

  return (
    <section className="min-h-screen bg-secondary-purple/5 py-32 px-[7%] flex flex-col items-center" id="services">
      <Reveal className="text-center mb-24">
        <h2 className="text-[5.5rem] md:text-[7.5rem] font-bold text-text-purple">
          {t('services.titlePart1')} <span className="gradient-text">{t('services.titlePart2')}</span>
        </h2>
        <div className="w-48 h-[5px] bg-main-purple mx-auto mt-4 rounded-full"></div>
        <p className="text-[2rem] text-text-purple/70 mt-6 font-medium">
          {t('services.tagline')}
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-[1500px]">
        {services.map((service, index) => (
          <Reveal key={service.key} index={index}>
            <SpotlightCard className="group relative bg-bg-color border border-white/5 rounded-[2rem] p-10 flex flex-col items-center text-center h-full transition-all duration-500 hover:border-main-purple/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(108,52,211,0.2)]">
              <div className="w-20 h-20 rounded-2xl bg-main-purple/10 border border-main-purple/20 flex items-center justify-center text-main-purple mb-8 group-hover:bg-main-purple group-hover:text-white transition-all duration-500">
                <i className={`bx ${service.icon} text-[3.6rem]`}></i>
              </div>

              <h3 className="text-[2.2rem] font-bold text-text-purple mb-4 leading-tight">
                {t(`services.items.${service.key}.title`)}
              </h3>

              <p className="text-[1.5rem] text-text-purple/60 leading-relaxed mb-8">
                {t(`services.items.${service.key}.description`)}
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