import React from 'react';

const ServicesSection: React.FC = () => {
    const services = [
        {
            title: "Accidentes de tráfico",
            subtitle: "Atención a víctimas",
            desc: "Nuestra unidad es única en España, por ser la pionera en ofrecer asistencia privada médico-quirúrgica gratuita. Fuera del convenio...",
            icon: "personal_injury"
        },
        {
            title: "Servicio Jurídico",
            subtitle: "Abogados expertos",
            desc: "El asesoramiento jurídico a la víctima es primordial en los casos de accidentes de tráfico. Son muchas las dudas que...",
            icon: "gavel"
        },
        {
            title: "Peritaje médico",
            subtitle: "Peritos expertos",
            desc: "El servicio de medicina del trabajo pericial, está compuesto por peritos de máxima solvencia y experiencia en las siguientes especialidades.",
            icon: "medical_services"
        }
    ];

    return (
        <section id="servicios" className="py-20 px-6 bg-[#f6f7f8]">
            <div className="max-w-[1100px] mx-auto flex flex-col gap-12">
                <div className="text-center flex flex-col gap-4">
                    <h2 className="text-[#111518] text-3xl md:text-5xl font-black tracking-tight">NUESTROS SERVICIOS</h2>
                    <p className="text-[#617989] text-lg max-w-2xl mx-auto">
                        Contamos con un equipo de prestigiosos peritos especializados en medicina del trabajo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col gap-6 group">
                            <div className="w-16 h-16 bg-[#1392ec]/10 rounded-2xl flex items-center justify-center text-[#1392ec] group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-[#1392ec] font-bold text-sm tracking-wide uppercase">{service.subtitle}</span>
                                <h3 className="text-[#111518] text-2xl font-bold">{service.title}</h3>
                            </div>
                            <p className="text-[#617989] leading-relaxed">
                                {service.desc}
                            </p>
                            <button className="text-[#1392ec] font-bold self-start mt-auto flex items-center gap-2 hover:gap-3 transition-all">
                                Leer más <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
