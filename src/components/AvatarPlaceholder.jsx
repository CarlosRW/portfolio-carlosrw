import React from 'react';

/**
 * PLACEHOLDER TEMPORAL de avatar.
 *
 * Este componente reemplaza la foto real de perfil (que no existía en el
 * proyecto - el archivo /public/CarlosRW.webp apuntaba, por error, a una
 * imagen de una flor). Mientras se prepara el avatar 3D interactivo,
 * este monograma geométrico mantiene la identidad visual de marca sin
 * usar una imagen rota o genérica.
 *
 * CÓMO REEMPLAZAR ESTE PLACEHOLDER MÁS ADELANTE:
 * 1) Foto real: en Hero.jsx, dentro del div con clase
 *    "relative w-full h-full rounded-[2.5rem] ...", cambia
 *    `<AvatarPlaceholder />` por:
 *      <img src="/CarlosRW.webp" alt="Carlos Ramírez" fetchPriority="high"
 *           className="w-full h-full object-cover" />
 *    y coloca tu foto real en /public/CarlosRW.webp (reemplazando el
 *    archivo actual, que es la imagen de la flor).
 * 2) Avatar 3D interactivo: crea un componente (ej. Avatar3D.jsx) que
 *    monte tu escena (Three.js / Spline / Rive) dentro del mismo
 *    contenedor cuadrado que usa este placeholder, y reemplaza
 *    `<AvatarPlaceholder />` por `<Avatar3D />` en Hero.jsx.
 */
const AvatarPlaceholder = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-linear-to-br from-secondary-purple to-bg-color overflow-hidden">
      {/* Patrón de fondo tipo circuito, sutil */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#e9dbf6" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#grid)" />
      </svg>

      {/* Halo pulsante */}
      <div className="absolute w-[60%] h-[60%] rounded-full bg-main-purple/30 blur-[60px] animate-pulse" aria-hidden="true"></div>

      {/* Anillo orbital */}
      <svg
        className="absolute w-[78%] h-[78%] animate-[spin_18s_linear_infinite]"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="#8558DA"
          strokeWidth="1.5"
          strokeDasharray="4 10"
          opacity="0.5"
        />
      </svg>

      {/* Monograma */}
      <span className="relative z-10 text-[7rem] font-bold text-text-purple tracking-tight select-none">
        C<span className="text-main-purple">R</span>
      </span>

      <span className="sr-only">Carlos Ramírez Wong - avatar temporal, foto próximamente</span>
    </div>
  );
};

export default AvatarPlaceholder;