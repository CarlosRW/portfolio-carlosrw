import React, { useRef } from 'react';

/**
 * Tarjeta con halo que sigue al cursor (spotlight), firma visual
 * de sitios premium tipo Flowty. Usa CSS custom properties
 * actualizadas vía rAF -> solo repinta un overlay con
 * background (compositing barato, sin reflow).
 */
const SpotlightCard = ({ children, className = '', as: Tag = 'div', ...rest }) => {
  const ref = useRef(null);
  const frame = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.setProperty('--spot-x', `${x}px`);
        ref.current.style.setProperty('--spot-y', `${y}px`);
      }
    });
  };

  const handleMouseLeave = () => {
    if (frame.current) cancelAnimationFrame(frame.current);
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card ${className}`}
      {...rest}
    >
      <div className="spotlight-overlay" aria-hidden="true" />
      {children}
    </Tag>
  );
};

export default SpotlightCard;