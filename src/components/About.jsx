import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';

const About = () => {
  const { t } = useTranslation();

  const approachItems = t('about.approachItems', { returnObjects: true });
  const statsLabels = t('about.statsLabels', { returnObjects: true });
  const statsNumbers = ['10+', '05', '03+'];

  return (
    <section className="min-h-screen bg-bg-color py-32 px-[7%] flex flex-col items-center" id="about">
      <Reveal className="text-center mb-24">
        <h2 className="text-[5.5rem] md:text-[7.5rem] font-bold text-text-purple">
          {t('about.titlePart1')} <span className="gradient-text">{t('about.titlePart2')}</span>
        </h2>
        <div className="w-48 h-[5px] bg-main-purple mx-auto mt-4 rounded-full"></div>

        <p className="text-[1.8rem] md:text-[2.2rem] text-text-purple/80 mt-12 max-w-400 mx-auto leading-relaxed">
          {t('about.description')}
        </p>
      </Reveal>

      <div className="w-full max-w-[1400px] mb-32 text-center">
        <h3 className="text-[2.8rem] font-semibold text-text-purple mb-16 inline-block relative border-b-2 border-main-purple pb-2">
          {t('about.approachTitle1')} <span className="text-main-purple">{t('about.approachTitle2')}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-[1300px] mx-auto">
          {approachItems.map((text, index) => (
            <Reveal key={index} index={index} className="flex items-center gap-8 p-10 bg-secondary-purple/5 border border-main-purple/20 rounded-2xl hover:border-main-purple hover:-translate-y-1 transition-all duration-300">
              <div className="shrink-0 w-20 h-20 rounded-full border-2 border-main-purple flex items-center justify-center text-[2.8rem] font-bold text-main-purple">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-[2rem] text-text-purple font-medium text-left leading-tight">
                {text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[1300px] mx-auto">
        {statsNumbers.map((number, index) => (
          <Reveal key={index} index={index} className="flex flex-col items-center text-center">
            <div className="w-full py-10 px-6 border-2 border-white/10 rounded-2xl bg-secondary-purple/5 transition-all duration-500 hover:border-main-purple hover:shadow-[0_0_3rem_rgba(108,52,211,0.3)]">
              <h4 className="text-[4.5rem] sm:text-[6rem] md:text-[7rem] font-bold text-white leading-none">
                {number}
              </h4>
            </div>
            <p className="text-[1.4rem] md:text-[1.6rem] text-text-purple/70 mt-6 tracking-[0.15em] font-bold uppercase">
              {statsLabels[index]}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default About;