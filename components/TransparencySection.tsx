
import React from 'react';

const TransparencySection: React.FC = () => {
  const features = [
    {
      icon: 'payments',
      title: 'Enfoque en Recorte de Gastos',
      desc: 'Acuerdos diseñados para minimizar el desembolso por tratamientos médicos independientemente de la gravedad de tu lesión.'
    },
    {
      icon: 'inventory_2',
      title: 'El Sistema de Módulos',
      desc: 'Los hospitales reciben un pago fijo por paciente, incentivando el alta rápida para no perder dinero.'
    },
    {
      icon: 'rule',
      title: 'Conflicto de Intereses',
      desc: 'Muchas clínicas dependen de los contratos de las aseguradoras, creando un sesgo que perjudica tu cuidado.'
    }
  ];

  return (
    <section id="el-pacto" className="max-w-[1100px] mx-auto px-6 py-20">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="text-[#1392ec] text-sm font-bold uppercase tracking-widest">Informe de Transparencia</span>
          <h2 className="text-[#111518] text-3xl md:text-4xl font-black">¿Qué es el Convenio UNESPA?</h2>
          <p className="text-[#617989] text-lg leading-relaxed">
            Tras bambalinas, las aseguradoras firman "Pactos de Precios Bajos" que priorizan sus beneficios frente a tu salud. Estos acuerdos crean un sistema donde eres un número, no un paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-2xl border border-[#dbe1e6] bg-white p-8 shadow-sm hover:shadow-md transition-shadow group">
              <span className="material-symbols-outlined text-[#1392ec] text-4xl group-hover:scale-110 transition-transform">
                {f.icon}
              </span>
              <div>
                <h3 className="text-[#111518] text-xl font-bold">{f.title}</h3>
                <p className="text-[#617989] text-sm mt-3 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
