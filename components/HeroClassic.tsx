import React from 'react';
import background from '../assets/images/fondo-top.jpg';

interface HeroClassicProps {
    badgeText?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    backgroundImage?: string;
}

const HeroClassic: React.FC<HeroClassicProps> = ({
    badgeText = "● Atención 24/7 Víctimas",
    title = "Asociación de víctimas de accidentes de tráfico",
    description = "Luchar por los derechos de las víctimas y garantizarles la mejor asistencia médica y jurídica. Humanidad, seriedad y confianza.",
    buttonText = "¿Hablamos?",
    backgroundImage = background
}) => {
    return (
        <section className="relative w-full max-w-[1200px] mx-auto mt-6 rounded-[32px] overflow-hidden min-h-[600px] flex items-center py-20">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 px-8 md:px-16 max-w-2xl text-white">
                <span className="inline-block px-3 py-1 bg-[#e11d48] text-[10px] font-bold tracking-widest uppercase rounded-sm mb-6 animate-fade-in-up">
                    {badgeText}
                </span>

                <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8 animate-fade-in-up animate-delay-100">
                    {title}
                </h1>

                <p className="text-lg text-slate-200 font-medium mb-10 leading-relaxed max-w-lg animate-fade-in-up animate-delay-200">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex items-center justify-center gap-2 bg-[#e11d48] hover:bg-[#be123c] text-white px-8 py-4 rounded-lg font-black text-sm uppercase tracking-wide transition-all shadow-lg shadow-[#e11d48]/40">
                        <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                        {buttonText}
                    </button>

                    <button className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-sm transition-all">
                        Ver mis derechos
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroClassic;
