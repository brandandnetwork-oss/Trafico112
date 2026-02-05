import React from 'react';
import HeaderClassic from '../components/HeaderClassic';
import HeroClassic from '../components/HeroClassic';
import EmergencyCTA from '../components/EmergencyCTA';
import Footer from '../components/Footer';

import backgroundContacto from '../assets/images/fondo-contacto.jpg';

const ContactoPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc]">
            <HeaderClassic />
            <main>
                <div className="pt-6 pb-20">
                    <HeroClassic
                        title="Contacta con Nosotros"
                        description="Estamos disponibles las 24 horas del día. Si has tenido un accidente, no esperes más y llámanos."
                        badgeText="● Estamos aquí para ti"
                        backgroundImage={backgroundContacto}
                    />
                </div>

                <div className="bg-[#f8fafc] pb-24 px-6">
                    <div className="max-w-[1100px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                                <span className="material-symbols-outlined text-4xl text-[#1392ec] mb-4">call</span>
                                <h3 className="font-bold text-xl text-[#111518] mb-2">Teléfono</h3>
                                <p className="text-slate-500 mb-4">Atención 24/7 gratuita</p>
                                <a href="tel:900877808" className="text-2xl font-black text-[#111518] hover:text-[#1392ec] transition-colors">900 87 78 08</a>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                                <span className="material-symbols-outlined text-4xl text-[#e11d48] mb-4">mail</span>
                                <h3 className="font-bold text-xl text-[#111518] mb-2">Email</h3>
                                <p className="text-slate-500 mb-4">Envíanos tu consulta</p>
                                <a href="mailto:gestion@trafico112.es" className="text-lg font-bold text-[#111518] hover:text-[#e11d48] transition-colors">gestion@trafico112.es</a>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                                <span className="material-symbols-outlined text-4xl text-[#1392ec] mb-4">calendar_clock</span>
                                <h3 className="font-bold text-xl text-[#111518] mb-2">Horario Oficina</h3>
                                <p className="text-slate-500">Lunes a Viernes</p>
                                <p className="text-[#111518] font-bold text-lg">09:00 - 20:00</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
                            <div className="w-full h-[400px] bg-slate-200 rounded-2xl overflow-hidden relative flex items-center justify-center">
                                {/* Map Placeholder - In a real app integrate Google Maps iframe */}
                                <div className="text-center text-slate-400">
                                    <span className="material-symbols-outlined text-6xl mb-2">map</span>
                                    <p className="font-bold">Mapa Ubicación</p>
                                    <p className="text-sm">Av. Del Ventisquero de la Condesa Mirasierra 42, 28035 Madrid</p>
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

export default ContactoPage;
