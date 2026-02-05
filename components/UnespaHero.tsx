import React from 'react';

const UnespaHero: React.FC = () => {
    return (
        <section className="bg-[#111518] text-white py-20 px-6">
            <div className="max-w-[1100px] mx-auto text-center">
                <div className="max-w-4xl mx-auto flex flex-col gap-6">
                    <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                        La Mentira del Convenio <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">UNESPA</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        Educando a las víctimas sobre la verdad oculta tras los pactos de las aseguradoras y su derecho legal a una recuperación médica total.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <button className="bg-[#1392ec] hover:bg-[#0b7cbd] text-white px-8 py-4 rounded-lg font-bold transition-all">
                            Consulta gratuita
                        </button>
                        <button className="bg-white text-[#111518] hover:bg-slate-200 px-8 py-4 rounded-lg font-bold transition-all">
                            Conoce tus derechos
                        </button>
                    </div>
                </div>

                {/* Visual indicator of scrolling/content below could go here */}
            </div>
        </section>
    );
};

export default UnespaHero;
