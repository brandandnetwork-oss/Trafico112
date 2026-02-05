import React from 'react';
import HeaderClassic from '../components/HeaderClassic';
import HeroClassic from '../components/HeroClassic';
import EmergencyCTA from '../components/EmergencyCTA';
import Footer from '../components/Footer';

import backgroundBlog from '../assets/images/fondo-blog.jpg';

const BlogPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc]">
            <HeaderClassic />
            <main>
                <div className="pt-6 pb-20">
                    <HeroClassic
                        title="Blog y Noticias"
                        description="Mantente informado sobre las últimas novedades en seguridad vial, cambios legales e indemnizaciones por accidentes."
                        badgeText="● Actualidad"
                        backgroundImage={backgroundBlog}
                    />
                </div>

                <div className="bg-[#f8fafc] pb-24 px-6">
                    <div className="max-w-[1100px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
                                    cat: "Legal",
                                    title: "¿Cómo calcular mi indemnización en 2025?",
                                    desc: "Novedades en el baremo de accidentes y cómo afectan a tu reclamación."
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
                                    cat: "Salud",
                                    title: "Latigazo cervical: La lesión invisible",
                                    desc: "Por qué las aseguradoras intentan infravalorar esta lesión y cómo demostrarla."
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop",
                                    cat: "Noticias",
                                    title: "Sentencia clave del Tribunal Supremo",
                                    desc: "Nuevo precedente a favor de las víctimas en colisiones de baja intensidad."
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc29862c?q=80&w=2670&auto=format&fit=crop",
                                    cat: "Consejos",
                                    title: "5 errores comunes tras un accidente",
                                    desc: "Lo que nunca debes decir o firmar sin asesoramiento previo."
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1590333748338-d629e4564c8d?q=80&w=2670&auto=format&fit=crop",
                                    cat: "Legal",
                                    title: "Accidentes en patinete eléctrico",
                                    desc: "Vacíos legales y derechos de los usuarios de VMP."
                                },
                                {
                                    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2591&auto=format&fit=crop",
                                    cat: "Peritaje",
                                    title: "La importancia del informe biomecánico",
                                    desc: "Cuando la física demuestra la realidad de tus lesiones."
                                }
                            ].map((post, i) => (
                                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group">
                                    <div className="h-48 overflow-hidden">
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6">
                                        <span className="text-xs font-bold text-[#1392ec] uppercase tracking-wider mb-2 block">{post.cat}</span>
                                        <h3 className="text-xl font-bold text-[#111518] mb-3 group-hover:text-[#1392ec] transition-colors">{post.title}</h3>
                                        <p className="text-slate-500 text-sm line-clamp-3">{post.desc}</p>
                                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-sm font-bold text-[#111518]">
                                            Leer más <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                                        </div>
                                    </div>
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

export default BlogPage;
