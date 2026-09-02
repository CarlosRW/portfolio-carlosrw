import React, { useState } from 'react';
import Reveal from './Reveal';
import FillButton from './FillButton';

const Contact = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const email = "carlos.ramirezw23@gmail.com";
  const phone = "+506 83933478";
  const whatsappNumber = "50683933478"; // sin espacios ni '+', formato requerido por wa.me

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde el portafolio — ${form.name || 'Nuevo mensaje'}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hola Carlos, vi tu portafolio y me gustaría conversar sobre un proyecto.'
  )}`;

  const socialLinks = [
    { name: 'LinkedIn', icon: 'bxl-linkedin', url: 'https://linkedin.com/in/carlosrw' },
    { name: 'GitHub', icon: 'bxl-github', url: 'https://github.com/CarlosRW' },
  ];

  return (
    <section
      id="contact"
      className="py-32 px-[7%] bg-bg-color flex flex-col items-center justify-center font-['Poppins',sans-serif]"
    >
      <Reveal className="text-center mb-24">
        <h2 className="text-[5.5rem] md:text-[7.5rem] font-bold text-white tracking-tight">
          Contácta<span className="gradient-text">me</span>
        </h2>
        <div className="w-48 h-[5px] bg-main-purple mx-auto mt-4 rounded-full shadow-[0_0_10px_#6c34d3]"></div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1200px] w-full items-stretch">

        {/* Columna izquierda: info + WhatsApp + socials */}
        <Reveal index={1} className="relative h-full bg-secondary-purple/5 border-2 border-main-purple/30 rounded-[3rem] p-12 md:p-16 backdrop-blur-sm overflow-hidden group hover:border-main-purple/60 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(108,52,211,0.2)]">

          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-main-purple/10 blur-[80px] rounded-full group-hover:bg-main-purple/20 transition-all duration-500"></div>

          <div className="relative z-10 flex flex-col items-start gap-10 text-left h-full">

            <div className="space-y-6">
              <h3 className="text-[3.2rem] md:text-[3.8rem] font-bold text-white tracking-tight">
                ¡Trabajemos juntos!
              </h3>
              <p className="text-[1.7rem] text-text-purple/80 leading-relaxed font-medium">
                Siempre estoy abierto a explorar nuevas oportunidades y desafíos donde pueda aportar valor y seguir creciendo profesionalmente. Si buscas a alguien comprometido, con ganas de aprender y contribuir a tu equipo, ¡me encantaría saber de ti!
              </p>
            </div>

            {/* CTA WhatsApp - canal de menor fricción para consultas rápidas */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-5 bg-[#25D366] rounded-2xl text-[1.8rem] text-[#08140c] font-bold hover:brightness-105 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(37,211,102,0.25)]"
            >
              <i className='bx bxl-whatsapp text-[2.4rem]'></i>
              Escríbeme por WhatsApp
            </a>

            <div className="w-full space-y-8">

              <div className="flex items-center gap-6 group/item cursor-pointer" onClick={copyEmail}>
                <div className="relative shrink-0 w-16 h-16 bg-main-purple/20 border border-main-purple/40 rounded-full flex items-center justify-center group-hover/item:bg-main-purple group-hover/item:shadow-[0_0_20px_#6c34d3] transition-all duration-300">
                  <i className='bx bx-envelope text-[2.8rem] text-main-purple group-hover/item:text-white transition-colors'></i>
                </div>
                <div className="flex-1 relative">
                  {showTooltip && (
                    <div className="absolute -top-12 left-0 bg-main-purple text-white text-[1.2rem] px-5 py-2 rounded-xl font-bold animate-bounce shadow-lg" role="status" aria-live="polite">
                      ¡Copiado!
                    </div>
                  )}
                  <h4 className="text-[1.4rem] text-main-purple font-black tracking-widest uppercase">Correo</h4>
                  <p className="text-[1.6rem] md:text-[1.8rem] text-white font-semibold tracking-tight hover:text-main-purple transition-colors truncate">
                    {email}
                  </p>
                </div>
              </div>

              <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-6 group/phone">
                <div className="shrink-0 w-16 h-16 bg-main-purple/20 border border-main-purple/40 rounded-full flex items-center justify-center group-hover/phone:bg-main-purple group-hover/phone:shadow-[0_0_20px_#6c34d3] transition-all duration-300">
                  <i className='bx bx-phone text-[2.8rem] text-main-purple group-hover/phone:text-white transition-colors'></i>
                </div>
                <div>
                  <h4 className="text-[1.4rem] text-main-purple font-black tracking-widest uppercase">Teléfono</h4>
                  <p className="text-[1.6rem] md:text-[1.8rem] text-white font-semibold tracking-tight group-hover:text-main-purple transition-colors">
                    {phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="shrink-0 w-16 h-16 bg-main-purple/20 border border-main-purple/40 rounded-full flex items-center justify-center">
                  <i className='bx bx-map text-[2.8rem] text-main-purple'></i>
                </div>
                <div>
                  <h4 className="text-[1.4rem] text-main-purple font-black tracking-widest uppercase">Ubicación</h4>
                  <p className="text-[1.6rem] md:text-[1.8rem] text-white font-semibold tracking-tight">
                    San José, Costa Rica 🇨🇷
                  </p>
                </div>
              </div>

            </div>

            <div className="w-full flex justify-center pt-8 mt-auto border-t border-white/5 gap-8">
              {socialLinks.map((social) => (
                <FillButton
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[5rem] h-[5rem] border-2 border-main-purple rounded-full text-[2.8rem] text-main-purple hover:border-main-purple/70 transition-colors duration-500"
                  style={{ '--fill-color': '#6c34d3' }}
                >
                  <i className={`bx ${social.icon}`}></i>
                </FillButton>
              ))}
            </div>

          </div>
        </Reveal>

        {/* Columna derecha: formulario corto */}
        <Reveal index={2} className="relative h-full bg-secondary-purple/5 border-2 border-main-purple/30 rounded-[3rem] p-12 md:p-16 backdrop-blur-sm overflow-hidden group hover:border-main-purple/60 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(108,52,211,0.2)]">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-main-purple/10 blur-[80px] rounded-full group-hover:bg-main-purple/20 transition-all duration-500"></div>

          <form onSubmit={handleFormSubmit} className="relative z-10 flex flex-col gap-7 h-full">
            <div>
              <h3 className="text-[2.6rem] md:text-[3rem] font-bold text-white tracking-tight mb-2">
                Cuéntame de tu proyecto
              </h3>
              <p className="text-[1.5rem] text-text-purple/60 leading-relaxed">
                Completa el formulario y se abrirá tu cliente de correo con el mensaje listo para enviar.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-[1.3rem] text-main-purple font-black tracking-widest uppercase">
                Nombre
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleFormChange}
                placeholder="Tu nombre"
                className="w-full bg-bg-color/60 border border-white/10 rounded-xl px-6 py-4 text-[1.6rem] text-white placeholder:text-text-purple/30 focus:outline-none focus:border-main-purple focus:ring-2 focus:ring-main-purple/30 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="text-[1.3rem] text-main-purple font-black tracking-widest uppercase">
                Correo
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleFormChange}
                placeholder="tu@correo.com"
                className="w-full bg-bg-color/60 border border-white/10 rounded-xl px-6 py-4 text-[1.6rem] text-white placeholder:text-text-purple/30 focus:outline-none focus:border-main-purple focus:ring-2 focus:ring-main-purple/30 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="contact-message" className="text-[1.3rem] text-main-purple font-black tracking-widest uppercase">
                Mensaje
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                value={form.message}
                onChange={handleFormChange}
                placeholder="Cuéntame qué necesitas..."
                rows={4}
                className="w-full flex-1 bg-bg-color/60 border border-white/10 rounded-xl px-6 py-4 text-[1.6rem] text-white placeholder:text-text-purple/30 focus:outline-none focus:border-main-purple focus:ring-2 focus:ring-main-purple/30 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-5 bg-main-purple rounded-2xl text-[1.8rem] text-white font-bold hover:brightness-110 hover:shadow-[0_0_2rem_rgba(108,52,211,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <i className='bx bx-send text-[2.2rem]'></i>
              Enviar mensaje
            </button>
          </form>
        </Reveal>

      </div>
    </section>
  );
};

export default Contact;