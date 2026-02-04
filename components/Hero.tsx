
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-4 py-8 md:py-12 max-w-[1100px] mx-auto">
      <div
        className="relative min-h-[500px] flex flex-col items-center justify-center text-center p-8 md:p-16 rounded-3xl overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('https://picsum.photos/id/122/1600/900')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl z-10 flex flex-col gap-6 animate-fadeIn">
          <span className="text-[#1392ec] bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold w-fit mx-auto border border-white/20">
            Teléfono 24h víctimas de accidentes de tráfico: 900 87 78 08
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight shadow-black drop-shadow-lg">
            Tráfico112<br />
            Asociación de víctimas de accidentes de tráfico
          </h1>
          <p className="text-slate-100 text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
            Luchamos por los derechos de las víctimas y les garantizamos la mejor asistencia médica y jurídica. Humanidad, seriedad y confianza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button className="flex min-w-[220px] items-center justify-center rounded-xl h-14 px-8 bg-[#1392ec] text-white text-lg font-bold shadow-2xl hover:translate-y-[-2px] hover:shadow-[#1392ec]/40 transition-all">
              Consulta gratuita
            </button>
            <button className="flex min-w-[220px] items-center justify-center rounded-xl h-14 px-8 bg-white text-[#1392ec] text-lg font-bold shadow-2xl hover:translate-y-[-2px] transition-all">
              Te llamamos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
