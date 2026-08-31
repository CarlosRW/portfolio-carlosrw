import React, { useEffect, useRef } from 'react';

/**
 * Halo de luz morada que sigue al cursor con interpolación (lerp),
 * dando la sensación de "iluminar" la interfaz al pasar el mouse
 * (firma visual de sitios tipo Flowty). Se desactiva en touch y
 * prefers-reduced-motion. Solo anima transform -> 60fps garantizado.
 */
const CursorGlow = () => {
  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const frame = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reducedMotion) return;

    const handleMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      frame.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow hidden md:block" aria-hidden="true" />;
};

export default CursorGlow;