import React from 'react';
import HeaderClassic from '../components/HeaderClassic';
import HeroClassic from '../components/HeroClassic';
import EmergencyCTA from '../components/EmergencyCTA';
import Footer from '../components/Footer';

import backgroundConocenos from '../assets/images/fondo-conocenos.jpg';

const SomosPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc]">
            <HeaderClassic />
            <main>
                <div className="pt-6 pb-20">
                    <HeroClassic
                        title="Quiénes Somos - Tráfico 112"
                        description="Somos Tráfico 112, dedicados desde hace más de 15 años a proteger a las víctimas de accidentes."
                        badgeText="● Nuestra Historia"
                        backgroundImage={backgroundConocenos}
                    />
                </div>

                <div className="bg-[#f8fafc] pb-24 px-6">
                    <div className="max-w-[1100px] mx-auto">
                        <div className="flex flex-col md:flex-row gap-16 items-start mb-24">
                            <div className="flex-1 text-lg leading-relaxed text-slate-600 space-y-6">
                                <p>
                                    <strong className="text-[#111518]">Tráfico 112</strong> nació de la necesidad urgente de protección que tienen las víctimas de accidentes de tráfico frente a las grandes corporaciones aseguradoras.
                                </p>
                                <p>
                                    Nuestra experiencia nos ha demostrado que, en el momento más vulnerable, cuando una persona ha sufrido un trauma y lesiones, el sistema a menudo intenta minimizar sus derechos.
                                </p>
                                <p>
                                    Creamos esta asociación para ser el escudo y la espada de las víctimas. Un lugar donde encontrar no solo asesoramiento legal, sino apoyo humano, comprensión médica y la garantía de que alguien está luchando 100% por tus intereses, sin conflictos de lealtad.
                                </p>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-[#111518] text-white p-8 rounded-2xl flex flex-col items-center justify-center text-center aspect-square">
                                        <span className="material-symbols-outlined text-5xl mb-4 text-[#e11d48]">favorite</span>
                                        <h3 className="font-bold text-xl">Humanidad</h3>
                                    </div>
                                    <div className="bg-white text-[#111518] border border-slate-200 p-8 rounded-2xl flex flex-col items-center justify-center text-center aspect-square shadow-lg">
                                        <span className="material-symbols-outlined text-5xl mb-4 text-[#1392ec]">gavel</span>
                                        <h3 className="font-bold text-xl">Justicia</h3>
                                    </div>
                                    <div className="bg-white text-[#111518] border border-slate-200 p-8 rounded-2xl flex flex-col items-center justify-center text-center aspect-square shadow-lg">
                                        <span className="material-symbols-outlined text-5xl mb-4 text-[#1392ec]">verified_user</span>
                                        <h3 className="font-bold text-xl">Confianza</h3>
                                    </div>
                                    <div className="bg-[#1392ec] text-white p-8 rounded-2xl flex flex-col items-center justify-center text-center aspect-square">
                                        <span className="material-symbols-outlined text-5xl mb-4">handshake</span>
                                        <h3 className="font-bold text-xl">Compromiso</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 text-center">
                            <h2 className="text-2xl font-black text-[#111518] mb-8">Nuestro Compromiso</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                                <div>
                                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#1392ec]"></span> Independencia total
                                    </h3>
                                    <p className="text-slate-500 text-sm">No tenemos acuerdos con ninguna aseguradora. Nuestra lealtad es única y exclusivamente hacia la víctima.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#1392ec]"></span> Transparencia
                                    </h3>
                                    <p className="text-slate-500 text-sm">Te informamos de cada paso. Sin letra pequeña, sin falsas promesas. Claridad desde el primer momento.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#1392ec]"></span> Excelencia
                                    </h3>
                                    <p className="text-slate-500 text-sm">Contamos con los mejores especialistas médicos y jurídicos del sector para garantizar el mejor resultado.</p>
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

export default SomosPage;
