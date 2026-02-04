
import React from 'react';

const GuaranteesSection: React.FC = () => {
  const items = [
    { icon: 'payments', title: 'Sin Coste', desc: 'Nuestros honorarios los suele cubrir tu propia póliza de defensa jurídica.' },
    { icon: 'stethoscope', title: 'Médicos Independientes', desc: 'Especialistas que velan por tu salud real, no por el beneficio de la compañía.' },
    { icon: 'lock_open', title: 'Sin Adelantos', desc: 'No pagas ni un solo euro hasta que tú cobres tu indemnización justa.' }
  ];

  return (
    <section className="max-w-[1100px] mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col gap-6 rounded-3xl border border-[#dbe1e6] bg-white p-10 hover:shadow-2xl transition-all border-b-8 border-b-[#1392ec] group">
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
