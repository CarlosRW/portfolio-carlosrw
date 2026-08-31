import React, { useRef } from 'react';

const FillButton = ({ children, as: Tag = 'a', className = '', ...rest }) => {
  const ref = useRef(null);

  const setOrigin = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  const handleEnter = (e) => {
    setOrigin(e);
    void ref.current.offsetWidth; // fuerza reflow: registra el punto de entrada antes de animar
    ref.current.classList.add('is-hover');
  };

  const handleLeave = (e) => {
    setOrigin(e); // el círculo se contrae hacia el punto exacto de salida
    ref.current.classList.remove('is-hover');
  };

  return (
    <Tag
      ref={ref}
      className={`fill-btn ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...rest}
    >
      <span className="fill-btn__layer" aria-hidden="true"></span>
      <span className="fill-btn__content">{children}</span>
    </Tag>
  );
};

export default FillButton;