import React from 'react';

const FloatingWhatsApp = () => {
  const whatsappNumber = "50683933478";
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hola Carlos, vi tu portafolio y me gustaría conversar sobre un proyecto.'
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp"
      className="fixed bottom-8 right-8 z-90 w-16 h-16 md:w-18 md:h-18 flex items-center justify-center bg-[#25D366] rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] text-[#08140c] text-[3rem] hover:brightness-105 hover:-translate-y-1 transition-all duration-300"
    >
      <i className='bx bxl-whatsapp'></i>
    </a>
  );
};

export default FloatingWhatsApp;