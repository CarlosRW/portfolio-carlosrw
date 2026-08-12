import React, { useState } from 'react';

// NOTA PARA CARLOS:
// - "image" debe apuntar a una FOTO/CAPTURA del certificado real (el diploma en sí),
//   no al logo de la empresa. Guarda esas imágenes en /public/assets/certs/ y
//   referencia la ruta como '/assets/certs/nombre-del-archivo.webp'.
// - "logo" sigue siendo el logo pequeño de la institución (el mismo que usas en Journey),
//   se muestra como un sello superpuesto sobre la esquina del certificado.
// - "verifyLink" es la URL real de verificación (Credly, LinkedIn, Alura, EF SET, etc.).
// - Mientras no subas una imagen (o falte el archivo, como "efset.webp" que aún no existe
//   en /public/assets/logos/), la tarjeta muestra automáticamente un ícono en su lugar,
//   en vez de un cuadro roto. Copia el mismo formato de objeto para agregar más certificaciones.
const certifications = [
    {
        title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
        issuer: 'Oracle',
        date: '2025',
        image: '/assets/certs/oracle-cloud-cert.webp',
        logo: '/assets/logos/oracle_logo.webp',
        verifyLink: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=5179E7D50F8D0791C458BDB8DD0746204BB71E74A01AAAB21F2F6A96D7E0D322',
    },
    {
        title: 'English Certificate 67/100 (C1 Advanced)',
        issuer: 'EF SET',
        date: '2026',
        image: '/assets/certs/efset-eng-cert.webp',
        logo: '/assets/logos/efset_logo.webp',
        verifyLink: 'https://cert.efset.org/en/pZHxYK',
    },
    {
        title: 'Google Gemini AI Immersion',
        issuer: 'Alura Latam & Google',
        date: '2025',
        image: '/assets/certs/gemini-ai-cert.webp',
        logo: '/assets/logos/alura.webp',
        verifyLink: '#',
    },
    {
        title: 'Scrum Fundamentals Certified',
        issuer: 'VMEdu & SCRUMstudy',
        date: '2025',
        image: '/assets/certs/scrum-cert.webp',
        logo: '/assets/logos/vabro_vmedu_logo.webp',
        verifyLink: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=1070425',
    },
        {
        title: 'ONE Tech Foundation G8 - Back End',
        issuer: 'Oracle Next Education',
        date: '2025',
        image: '/assets/certs/oracle-tech-cert.webp',
        logo: '/assets/logos/oracle-one.webp',
        verifyLink: 'https://app.aluracursos.com/program/certificate/f21ca351-7ade-46b7-b9bd-6e186072a04a',
    },
];

const Certifications = () => {
    return (
        <section className="py-32 px-[7%] bg-secondary-purple/5" id="certifications">
            <div className="text-center mb-20">
                <h2 className="text-[5.5rem] md:text-[7.5rem] font-bold text-text-purple">
                    Mis <span className="gradient-text">Certificaciones</span>
                </h2>
                <div className="w-48 h-1.25 bg-main-purple mx-auto mt-4 rounded-full"></div>
                <p className="text-[1.8rem] text-text-purple/60 mt-6 font-medium">
                    Formación validada por instituciones y programas reconocidos.
                </p>
            </div>

            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {certifications.map((cert, index) => (
                    <CertCard key={index} cert={cert} />
                ))}
            </div>
        </section>
    );
};

const CertCard = ({ cert }) => {
    const [imageFailed, setImageFailed] = useState(false);
    const [logoFailed, setLogoFailed] = useState(false);

    return (
        <div className="group relative bg-bg-color border border-white/5 rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500 hover:border-main-purple/50 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(108,52,211,0.2)]">

            {/* Imagen real del certificado, protagonista de la tarjeta */}
            <a
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[1.4/1] overflow-hidden bg-secondary-purple/10 border-b border-white/5"
            >
                {imageFailed ? (
                    // Fallback: aún no se subió la imagen del certificado
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-text-purple/30">
                        <i className='bx bxs-certification text-[5rem]'></i>
                        <span className="text-[1.3rem] font-bold uppercase tracking-widest">Certificado pendiente</span>
                    </div>
                ) : (
                    <img
                        src={cert.image}
                        alt={`Certificado: ${cert.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={() => setImageFailed(true)}
                    />
                )}

                {/* Overlay + lupa al hacer hover, invita a ver el certificado completo */}
                <div className="absolute inset-0 bg-bg-color/0 group-hover:bg-bg-color/60 transition-all duration-500 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2 px-6 py-3 bg-main-purple rounded-full text-white text-[1.3rem] font-bold">
                        <i className='bx bx-zoom-in text-[1.8rem]'></i> Ver certificado
                    </span>
                </div>

                {/* Sello del logo de la institución, superpuesto en la esquina */}
                <div className="absolute -bottom-6 left-6 w-16 h-16 bg-bg-color rounded-2xl border-2 border-bg-color ring-1 ring-white/10 p-2.5 flex items-center justify-center shadow-lg z-10 overflow-hidden">
                    {logoFailed ? (
                        <div className="w-full h-full rounded-lg bg-main-purple/15 flex items-center justify-center">
                            <span className="text-main-purple font-black text-[1.6rem]">
                                {cert.issuer.charAt(0)}
                            </span>
                        </div>
                    ) : (
                        <img
                            src={cert.logo}
                            alt={cert.issuer}
                            className="w-full h-full object-contain"
                            onError={() => setLogoFailed(true)}
                        />
                    )}
                </div>
            </a>

            {/* Contenido */}
            <div className="flex flex-col items-start text-left p-8 pt-10 flex-grow">
                <span className="text-main-purple text-[1.25rem] font-black tracking-[0.2em] uppercase mb-2">
                    {cert.date}
                </span>

                <h3 className="text-[1.9rem] font-bold text-text-purple leading-tight mb-1">
                    {cert.title}
                </h3>

                <p className="text-[1.4rem] text-text-purple/60 font-medium mb-6">
                    {cert.issuer}
                </p>

                <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 text-main-purple text-[1.35rem] font-bold hover:text-white transition-colors"
                >
                    Ver credencial
                    <i className='bx bx-link-external text-[1.5rem]'></i>
                </a>
            </div>
        </div>
    );
};

export default Certifications;