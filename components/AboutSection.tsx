import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <section id="quienes-somos" className="py-20 px-6 bg-white">
            <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1 flex flex-col gap-8">
                    <span className="text-[#1392ec] font-black tracking-wider uppercase">Tráfico112</span>
                    <h2 className="text-[#111518] text-3xl md:text-5xl font-black leading-tight">
                        Asociación de víctimas de accidentes de tráfico
                    </h2>
                    <div className="flex flex-col gap-6 text-[#617989] text-lg leading-relaxed">
                        <p>
                            Desde hace más de 15 años, dedicamos especial atención a las víctimas de tráfico, ya que son las más vulnerables y requieren de una atención más inmediata.
                        </p>
                        <p>
                            Desde nuestro inicio, la vocación de ayuda se instauró en todo el equipo de la asociación, en la actualidad somos un referente nacional en traumatología y servicios jurídicos.
                        </p>
                        <div className="bg-[#f0f9ff] p-6 rounded-2xl border-l-4 border-[#1392ec]">
                            <p className="text-[#111518] font-bold italic">
                                "Siempre estamos a disposición de la víctima, en cualquiera de sus variantes. Cuando una persona nos confía su salud, sabe que haremos todo lo humano para ayudarla."
                            </p>
                        </div>
                    </div>

                    <button className="w-fit bg-[#111518] text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-colors shadow-lg">
                        ¿Hablamos?
                    </button>
                </div>

                <div className="flex-1 w-full">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-[#f8fafc] p-8 rounded-3xl border border-slate-100 hover:border-[#1392ec] transition-colors">
                            <h3 className="text-xl font-black text-[#111518] mb-3 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#1392ec]">flag</span> Misión
                            </h3>
                            <p className="text-[#617989]">Luchar por los derechos de las víctimas y garantizarles la mejor asistencia médica y jurídica.</p>
                        </div>
                        <div className="bg-[#f8fafc] p-8 rounded-3xl border border-slate-100 hover:border-[#1392ec] transition-colors">
                            <h3 className="text-xl font-black text-[#111518] mb-3 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#1392ec]">visibility</span> Visión
                            </h3>
                            <p className="text-[#617989]">Convertirnos en el mayor referente en atención asistencial de víctimas de accidentes de tráfico.</p>
                        </div>
                        <div className="bg-[#f8fafc] p-8 rounded-3xl border border-slate-100 hover:border-[#1392ec] transition-colors">
                            <h3 className="text-xl font-black text-[#111518] mb-3 flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#1392ec]">diamond</span> Valores
                            </h3>
                            <p className="text-[#617989]">Humanidad, seriedad y confianza.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
