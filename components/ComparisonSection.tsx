
import React from 'react';

interface ComparisonSectionProps {
  introTitle?: string;
  mainTitle?: string;
  description?: string;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  introTitle = "Asociación de Víctimas",
  mainTitle = "Tráfico 112",
  description = "Desde hace más de 15 años, dedicamos especial atención a las víctimas de tráfico, ya que son las más vulnerables y requieren de una atención más inmediata."
}) => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1392ec] font-bold text-sm uppercase tracking-widest block mb-2">{introTitle}</span>
          <h2 className="text-[#111518] text-4xl font-black">{mainTitle}</h2>
          <p className="text-[#617989] mt-4 text-lg">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-xl transition-all card-hover">
            <h3 className="text-xl font-bold text-[#111518] mb-6">Objetivo Principal</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Aseguradora</span>
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <span className="material-symbols-outlined text-[#e11d48]">cancel</span>
                  Ahorro de costes
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#1392ec]/5 border border-[#1392ec]/10">
                <span className="text-xs font-bold text-[#1392ec] uppercase tracking-wider mb-2 block">Tráfico112</span>
                <div className="flex items-center gap-2 text-[#111518] font-bold">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                  Recuperación total
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-xl transition-all card-hover">
            <h3 className="text-xl font-bold text-[#111518] mb-6">Calidad Médica</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Aseguradora</span>
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <span className="material-symbols-outlined text-[#e11d48]">cancel</span>
                  Altas rápidas
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#1392ec]/5 border border-[#1392ec]/10">
                <span className="text-xs font-bold text-[#1392ec] uppercase tracking-wider mb-2 block">Tráfico112</span>
                <div className="flex items-center gap-2 text-[#111518] font-bold">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                  Mejores hospitales
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-xl transition-all card-hover">
            <h3 className="text-xl font-bold text-[#111518] mb-6">Transparencia</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Aseguradora</span>
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <span className="material-symbols-outlined text-[#e11d48]">cancel</span>
                  Conflicto interés
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#1392ec]/5 border border-[#1392ec]/10">
                <span className="text-xs font-bold text-[#1392ec] uppercase tracking-wider mb-2 block">Tráfico112</span>
                <div className="flex items-center gap-2 text-[#111518] font-bold">
                  <span className="material-symbols-outlined text-green-500">check_circle</span>
                  100% Independiente
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
