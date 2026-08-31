import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Wrapper genérico de scroll-reveal con soporte de stagger.
 * Uso: <Reveal index={0}><h2>Título</h2></Reveal>
 * index -> delay escalonado en pasos de 90ms (máx 6 para no alargar demasiado).
 */
const Reveal = ({ children, as: Tag = 'div', index = 0, className = '', ...rest }) => {
  const [ref, isVisible] = useScrollReveal();
  const delay = Math.min(index, 6) * 90;

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;