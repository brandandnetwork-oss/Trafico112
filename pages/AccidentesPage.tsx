import React from 'react';
import HeaderClassic from '../components/HeaderClassic';
import HeroClassic from '../components/HeroClassic';
import EmergencyCTA from '../components/EmergencyCTA';
import Footer from '../components/Footer';

import backgroundAccidente from '../assets/images/fondo-accidente.jpg';

const AccidentesPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc]">
            <HeaderClassic />
            <main>
                <div className="pt-6 pb-20">
                    <HeroClassic
                        title="Especialistas en Accidentes de Tráfico"
                        description="Nuestra unidad es única en España. Ofrecemos asistencia privada médico-quirúrgica gratuita y reclamamos tu máxima indemnización."
                        badgeText="● Tu recuperación es lo primero"
                        backgroundImage={backgroundAccidente}
                    />
                </div>

                <div className="bg-[#f8fafc] pb-24 px-6">
                    <div className="max-w-[1100px] mx-auto">
                        <h2 className="text-[#111518] text-3xl font-black mb-12 text-center">Cubrimos todo tipo de accidentes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Coche", icon: "directions_car", desc: "Reclamamos tanto si eres conductor no culpable como ocupante." },
                                { title: "Moto", icon: "two_wheeler", desc: "Los motoristas son vulnerables. Luchamos por tu indemnización total." },
                                { title: "Atropello", icon: "directions_walk", desc: "Peatones tienen derechos especiales. Te ayudamos a ejercerlos." },
                                { title: "Ciclista", icon: "pedal_bike", desc: "Defendemos a ciclistas frente a vehículos a motor en todo momento." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                                    <div className="bg-[#1392ec]/10 w-14 h-14 rounded-xl flex items-center justify-center text-[#1392ec] mb-6">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#111518] mb-3">{item.title}</h3>
                                    <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-24">
                            <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
                                <div className="flex-1">
                                    <span className="text-[#e11d48] font-bold tracking-widest uppercase text-xs mb-2 block">Guía rápida</span>
                                    <h2 className="text-3xl md:text-4xl font-black text-[#111518] mb-6">¿Qué hacer tras un accidente?</h2>
                                    <ul className="space-y-4">
                                        {[
                                            "Avisa a las autoridades y rellena el parte amistoso.",
                                            "Acude a urgencias antes de las 72 horas.",
                                            "No aceptes la primera oferta de tu aseguradora.",
                                            "Contacta con Tráfico112 para asesoramiento gratuito."
                                        ].map((step, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <div className="bg-[#111518] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                                                    {i + 1}
                                                </div>
                                                <p className="text-slate-600 font-medium pt-1">{step}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-1 h-64 md:h-80 w-full bg-slate-200 rounded-2xl overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                                        <span className="material-symbols-outlined text-6xl">medical_services</span>
                                    </div>
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

export default AccidentesPage;
