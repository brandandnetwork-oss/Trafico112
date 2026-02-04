import React from 'react';

const HeroClassic: React.FC = () => {
    return (
        <section className="relative w-full max-w-[1200px] mx-auto mt-6 rounded-[32px] overflow-hidden min-h-[600px] flex items-center">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1626125345510-4703ee358f53?q=80&w=2670&auto=format&fit=crop')`, // Clean bright office/corridor similar to image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 px-8 md:px-16 max-w-2xl text-white">
                <span className="inline-block px-3 py-1 bg-[#e11d48] text-[10px] font-bold tracking-widest uppercase rounded-sm mb-6">
                    ● Atención 24/7 Accidentes
                </span>

                <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8">
                    Cuando el accidente es real, tu defensa también debe serlo.
                </h1>

                <p className="text-lg text-slate-200 font-medium mb-10 leading-relaxed max-w-lg">
                    No permitas que el convenio UNESPA limite tus derechos. En <span className="text-[#1392ec] font-bold">Tráfico112</span> priorizamos tu salud y tu indemnización frente a los recortes de las aseguradoras.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex items-center justify-center gap-2 bg-[#e11d48] hover:bg-[#be123c] text-white px-8 py-4 rounded-lg font-black text-sm uppercase tracking-wide transition-all shadow-lg shadow-[#e11d48]/40">
                        <span className="material-symbols-outlined text-[20px]">emergency</span>
                        S.O.S. SOLICITAR AYUDA
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
