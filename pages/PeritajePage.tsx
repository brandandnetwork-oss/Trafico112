import React from 'react';
import HeaderClassic from '../components/HeaderClassic';
import HeroClassic from '../components/HeroClassic';
import EmergencyCTA from '../components/EmergencyCTA';
import Footer from '../components/Footer';

import backgroundPeritaje from '../assets/images/fondo-peritaje.jpg';

const PeritajePage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc]">
            <HeaderClassic />
            <main>
                <div className="pt-6 pb-20">
                    <HeroClassic
                        title="Peritaje Médico Independiente"
                        description="Informes periciales contundentes para valorar tus secuelas con rigor científico. Avalados por especialistas de prestigio."
                        badgeText="● Valoración del Daño Corporal"
                        backgroundImage={backgroundPeritaje}
                    />
                </div>

                <div className="bg-[#f8fafc] pb-24 px-6">
                    <div className="max-w-[1100px] mx-auto">
                        <div className="bg-[#111518] rounded-[32px] p-8 md:p-16 text-white mb-20 relative overflow-hidden">
                            <div className="relative z-10 max-w-2xl">
                                <h2 className="text-3xl md:text-5xl font-black mb-6">La prueba reina en un juicio</h2>
                                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                                    De nada sirve tener razón si no puedes demostrarla. El informe médico pericial es la herramienta fundamental para objetivar tus lesiones y cuantificar legalmente el daño sufrido.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[#1392ec]">check_circle</span>
                                        <span className="font-semibold">Valoración del Daño Corporal</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[#1392ec]">check_circle</span>
                                        <span className="font-semibold">Peritos Judicales Expertos</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[#1392ec]">check_circle</span>
                                        <span className="font-semibold">Defensa del informe en juicio</span>
                                    </li>
                                </ul>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1392ec]/20 to-transparent pointer-events-none"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-black text-[#111518] mb-6">¿Qué valoramos?</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><span className="material-symbols-outlined text-[#e11d48]">personal_injury</span></div>
                                        <div>
                                            <h4 className="font-bold text-[#111518]">Secuelas Físicas</h4>
                                            <p className="text-slate-500 text-sm mt-1">Limitaciones de movilidad, dolores crónicos, material de osteosíntesis, perjuicio estético.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><span className="material-symbols-outlined text-[#e11d48]">psychology</span></div>
                                        <div>
                                            <h4 className="font-bold text-[#111518]">Secuelas Psicológicas</h4>
                                            <p className="text-slate-500 text-sm mt-1">Estrés postraumático, ansiedad, depresión derivada del accidente o cambio de vida.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="bg-white p-3 rounded-lg shadow-sm h-fit"><span className="material-symbols-outlined text-[#e11d48]">work_history</span></div>
                                        <div>
                                            <h4 className="font-bold text-[#111518]">Incapacidad Laboral</h4>
                                            <p className="text-slate-500 text-sm mt-1">Impacto de las lesiones en tu capacidad para desempeñar tu profesión habitual.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg">
                                <h3 className="text-xl font-bold text-[#111518] mb-6">El Proceso Pericial</h3>
                                <div className="space-y-8 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                                    {[
                                        { step: "1", title: "Estudio de Viabilidad", desc: "Analizamos tu documentación médica previa." },
                                        { step: "2", title: "Exploración Médica", desc: "Nuestros peritos te examinan presencialmente." },
                                        { step: "3", title: "Emisión del Informe", desc: "Redacción detallada y baremación de secuelas." },
                                        { step: "4", title: "Ratificación", desc: "Defensa del informe ante el juez si es necesario." }
                                    ].map((item, i) => (
                                        <div key={i} className="relative pl-12">
                                            <div className="absolute left-0 top-0 w-8 h-8 bg-[#1392ec] text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white shadow-sm z-10">
                                                {item.step}
                                            </div>
                                            <h4 className="font-bold text-[#111518]">{item.title}</h4>
                                            <p className="text-slate-500 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <EmergencyCTA />
            </main>
            <Footer />
        </div>
    );
};

export default PeritajePage;
