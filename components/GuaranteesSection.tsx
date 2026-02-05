
import React from 'react';

const GuaranteesSection: React.FC = () => {
  const items = [
    { icon: 'medical_services', title: 'Accidentes de tráfico', desc: 'Nuestra unidad es única en España, por ser la pionera en ofrecer asistencia privada médico-quirúrgica gratuita. Fuera del convenio.' },
    { icon: 'gavel', title: 'Servicio Jurídico', desc: 'El asesoramiento jurídico a la víctima es primordial en los casos de accidentes de tráfico. Son muchas las dudas que surgen.' },
    { icon: 'stethoscope', title: 'Peritaje médico', desc: 'El servicio de medicina del trabajo pericial, está compuesto por peritos de máxima solvencia y experiencia.' }
  ];

  return (
    <section className="max-w-[1100px] mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-6 rounded-3xl border border-[#dbe1e6] bg-white p-10 hover:shadow-2xl transition-all border-b-8 border-b-[#1392ec] group card-hover">
            <div className="bg-[#1392ec]/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#1392ec] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[32px]">{item.icon}</span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[#111518] text-2xl font-black">{item.title}</h3>
              <p className="text-[#617989] text-base leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuaranteesSection;
