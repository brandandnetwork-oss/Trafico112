
import React from 'react';

const MedicalDischargeSection: React.FC = () => {
  const points = [
    'La trampa de la "Duración Media": Si tu lesión dura más que la media, cortan la financiación.',
    'Topes Financieros: Las clínicas son penalizadas por dar "excesivas" sesiones.',
    'Métricas Ocultas: Decisiones auditadas por algoritmos, no por médicos humanos.'
  ];

  return (
    <section id="altas" className="bg-slate-50 py-24 flex justify-center px-6">
      <div className="max-w-[1100px] w-full grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img 
            alt="Doctor profesional" 
            className="rounded-3xl shadow-2xl w-full h-auto object-cover aspect-[4/5]" 
            src="https://picsum.photos/id/447/800/1000" 
          />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-[#111518] text-3xl md:text-4xl font-black leading-tight">
            ¿Por qué me están dando el alta?
          </h2>
          <p className="text-[#617989] text-lg leading-relaxed">
            Muchas víctimas se sorprenden al recibir el "alta médica" mientras siguen con dolor. Esto no suele basarse en tu salud real, sino en cuotas de las aseguradoras.
          </p>
          <ul className="flex flex-col gap-6">
            {points.map((p, i) => (
              <li key={i} className="flex gap-4">
                <span className="material-symbols-outlined text-[#1392ec] mt-1 shrink-0">info</span>
                <span className="text-slate-700 font-medium leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MedicalDischargeSection;
