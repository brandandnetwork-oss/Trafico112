
import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1392ec] font-bold text-sm uppercase tracking-widest block mb-2">La Realidad Detrás del Siniestro</span>
          <h2 className="text-[#111518] text-4xl font-black">Tu aseguradora vs. Tráfico112</h2>
          <p className="text-[#617989] mt-4 text-lg">
            Las compañías de seguros tienen acuerdos entre ellas para minimizar pagos. Nosotros rompemos ese círculo para ponerte a ti primero.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#dbe1e6] shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-6 text-sm font-bold uppercase tracking-wider text-[#111518] border-b border-[#dbe1e6]">Concepto de Defensa</th>
                <th className="px-6 py-6 text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-[#dbe1e6] bg-slate-100/50">Aseguradora (UNESPA)</th>
                <th className="px-6 py-6 text-sm font-bold uppercase tracking-wider text-[#1392ec] border-b border-[#dbe1e6] bg-[#1392ec]/5">Propuesta Tráfico112</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-6 py-6 font-bold text-[#111518]">Objetivo Principal</td>
                <td className="px-6 py-6 text-slate-500 bg-slate-50/50">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e11d48] text-[20px]">cancel</span>
                    Ahorro de costes corporativos
                  </div>
                </td>
                <td className="px-6 py-6 font-semibold text-[#111518] bg-[#1392ec]/10">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                    Recuperación médica completa
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-6 font-bold text-[#111518]">Calidad Médica</td>
                <td className="px-6 py-6 text-slate-500 bg-slate-50/50">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e11d48] text-[20px]">cancel</span>
                    Centros limitados y altas rápidas
                  </div>
                </td>
                <td className="px-6 py-6 font-semibold text-[#111518] bg-[#1392ec]/10">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                    Acceso a mejores hospitales privados
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-6 font-bold text-[#111518]">Transparencia</td>
                <td className="px-6 py-6 text-slate-500 bg-slate-50/50">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e11d48] text-[20px]">cancel</span>
                    Conflicto de intereses
                  </div>
                </td>
                <td className="px-6 py-6 font-semibold text-[#111518] bg-[#1392ec]/10">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                    Defensa 100% independiente
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
