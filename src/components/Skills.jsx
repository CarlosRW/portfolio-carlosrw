import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';
import SpotlightCard from './SpotlightCard';

const Skills = () => {
    const { t } = useTranslation();

    // Los nombres/íconos de tecnologías son universales y no se traducen;
    // solo el título de cada categoría viene de i18n.
    const skillCategories = [
        {
            titleKey: 'skills.categories.frontend',
            skills: [
                { name: 'React', icon: 'bxl-react' },
                { name: 'JavaScript', icon: 'bxl-javascript' },
                { name: 'Tailwind CSS', icon: 'bxl-tailwind-css' },
                { name: 'HTML5/CSS3', icon: 'bxl-html5' },
            ]
        },
        {
            titleKey: 'skills.categories.backend',
            skills: [
                { name: 'Spring Boot', icon: 'bxl-spring-boot' },
                { name: 'Python', icon: 'bxl-python' },
                { name: 'PHP', icon: 'bxl-php' },
                { name: 'Node.js', icon: 'bxl-nodejs' },
            ]
        },
        {
            titleKey: 'skills.categories.data',
            skills: [
                { name: 'PostgreSQL', icon: 'bxl-postgresql' },
                { name: 'MySQL', icon: 'bx-data' },
                { name: 'Docker', icon: 'bxl-docker' },
                { name: 'Git/GitHub', icon: 'bxl-github' },
            ]
        }
    ];

    return (
        <section className="py-32 px-[7%] bg-bg-color flex flex-col items-center" id="skills">
            <Reveal className="text-center mb-28">
                <h2 className="text-[5.5rem] md:text-[7.5rem] font-bold text-white/90 tracking-tight">
                    {t('skills.titlePart1')} <span className="text-main-purple drop-shadow-[0_0_15px_rgba(108,52,211,0.5)]">{t('skills.titlePart2')}</span>
                </h2>
                <div className="w-48 h-[5px] bg-main-purple mx-auto mt-4 rounded-full"></div>
                <p className="text-[1.8rem] text-text-purple/60 mt-8 font-medium italic">
                    {t('skills.tagline')}
                </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-[1400px]">
                {skillCategories.map((cat, idx) => (
                    <Reveal key={idx} index={idx}>
                        <SpotlightCard className="group relative flex flex-col bg-secondary-purple/5 border border-white/10 p-12 rounded-[3.5rem] overflow-hidden transition-all duration-500 hover:border-main-purple/50 hover:-translate-y-2">
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-main-purple/10 blur-[80px] rounded-full group-hover:bg-main-purple/20 transition-all"></div>

                            <h3 className="relative z-10 text-[2.4rem] font-black text-white mb-12 flex items-center gap-4">
                                <span className="w-10 h-[2px] bg-main-purple"></span>
                                {t(cat.titleKey)}
                            </h3>

                            <div className="relative z-10 grid grid-cols-2 gap-y-10 gap-x-6 mt-auto">
                                {cat.skills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center group/item cursor-pointer">
                                        <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                                            <div className="absolute inset-0 bg-main-purple/5 rounded-3xl rotate-45 group-hover/item:rotate-90 group-hover/item:bg-main-purple/20 transition-all duration-500 border border-white/5 group-hover/item:border-main-purple/40"></div>
                                            <i className={`bx ${skill.icon} text-[4.5rem] text-main-purple z-10 drop-shadow-[0_0_8px_rgba(108,52,211,0.3)] group-hover/item:drop-shadow-[0_0_15px_rgba(108,52,211,0.8)] group-hover/item:scale-110 transition-all duration-300`}></i>
                                        </div>
                                        <span className="text-[1.5rem] text-text-purple/50 font-bold tracking-wide group-hover/item:text-white transition-colors duration-300 uppercase">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </SpotlightCard>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Skills;