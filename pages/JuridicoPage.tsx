import React from 'react';
import HeaderClassic from '../components/HeaderClassic';
import HeroClassic from '../components/HeroClassic';
import EmergencyCTA from '../components/EmergencyCTA';
import Footer from '../components/Footer';

import backgroundJuridico from '../assets/images/fondo-juridico.jpg';

const JuridicoPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc]">
            <HeaderClassic />
            <main>
                <div className="pt-6 pb-20">
                    <HeroClassic
                        title="Servicio Jurídico Especializado"
                        description="Abogados expertos en responsabilidad civil y seguros. Luchamos contra las aseguradoras para conseguir lo que te corresponde."
                        badgeText="● Defensa Legal Gratuita"
                        backgroundImage={backgroundJuridico}
                    />
                </div>

                <div className="bg-[#f8fafc] pb-24 px-6">
                    <div className="max-w-[1100px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                            <div>
                                <span className="text-[#1392ec] font-bold tracking-widest uppercase text-xs mb-2 block">Defensa Especializada</span>
                                <h2 className="text-3xl md:text-4xl font-black text-[#111518] mb-6">No somos abogados generalistas</h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    Las compañías de seguros cuentan con equipos jurídicos poderosos cuyo objetivo es pagar lo mínimo posible. Para enfrentarte a ellos, necesitas especialistas que conozcan sus estrategias.
                                </p>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    En Tráfico112, nuestros abogados se dedican exclusivamente a la Responsabilidad Civil y el Derecho del Seguro. Conocemos cada resquicio de la ley para maximizar tu indemnización.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                                    <h4 className="text-4xl font-black text-[#e11d48] mb-2">98%</h4>
                                    <p className="text-slate-500 font-bold text-sm uppercase">Casos ganados</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                                    <h4 className="text-4xl font-black text-[#1392ec] mb-2">+15</h4>
                                    <p className="text-slate-500 font-bold text-sm uppercase">Años exper.</p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 col-span-2">
                                    <h4 className="text-4xl font-black text-[#111518] mb-2">0€</h4>
                                    <p className="text-slate-500 font-bold text-sm uppercase">Coste inicial para ti</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-[#111518] text-3xl font-black mb-10 text-center">Nuestras Áreas de Práctica</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Reclamación de Lesiones", desc: "Obtenemos la máxima compensación por días de baja y secuelas." },
                                { title: "Incapacidad Permanente", desc: "Luchamos por pensiones si las secuelas te impiden trabajar." },
                                { title: "Fallecimientos", desc: "Asistencia integral y humana para familiares en los casos más graves." }
                            ].map((area, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl border-l-4 border-l-[#1392ec] shadow-sm hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-[#111518] mb-3">{area.title}</h3>
                                    <p className="text-slate-500">{area.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <EmergencyCTA />
            </main>
            <Footer />
        </div>
    );
};

export default JuridicoPage;
