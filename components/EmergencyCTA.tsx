import React from 'react';

const EmergencyCTA: React.FC = () => {
    return (
        <section className="max-w-[1100px] mx-auto px-6 py-12 mb-12">
            <div className="bg-[#1392ec] rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
                            ¿Hablamos?
                        </h2>
                        <p className="text-blue-50 text-lg leading-relaxed max-w-xl">
                            Cuando una persona nos confía su salud, sabe que haremos todo lo humano para ayudarla.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                        <button className="flex items-center justify-center gap-2 bg-white text-[#1392ec] px-6 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-lg">
                            <span className="material-symbols-outlined">call</span>
                            Llamar Gratis
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-[#e11d48] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#be123c] transition-colors shadow-lg shadow-[#e11d48]/20">
                            Consulta Online
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmergencyCTA;
