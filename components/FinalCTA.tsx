
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-[#1392ec] py-20 px-6 relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="max-w-[1100px] mx-auto text-center relative z-10 flex flex-col items-center">
        <h2 className="text-white text-3xl md:text-5xl font-black mb-8 leading-tight">
          ¿Te han dicho que ya no procede más tratamiento?
        </h2>
        <p className="text-white/90 text-xl md:text-2xl font-medium mb-12 max-w-3xl">
          No dejes que ellos decidan cuándo termina tu recuperación. Tu salud no es una partida de gastos en su presupuesto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="flex items-center justify-center gap-3 bg-white text-[#1392ec] px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
            <span className="material-symbols-outlined">call</span>
            Llámanos hoy
          </button>
          <button className="flex items-center justify-center gap-3 bg-transparent border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all">
            Conoce tus derechos
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
