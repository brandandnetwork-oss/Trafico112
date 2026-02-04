
import React from 'react';

const DeltaVSection: React.FC = () => {
  return (
    <section id="delta-v" className="max-w-[1100px] mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-6">El Mito del "Delta V" (Baja Intensidad)</h2>
        <p className="text-[#617989] text-lg max-w-2xl mx-auto">
          Las aseguradoras suelen afirmar que si tu coche no tiene daños visibles, tu cuerpo no puede estar lesionado. Esto es científica y legalmente falso.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-red-50/50 p-10 rounded-3xl border border-red-100 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[#e11d48]">
            <span className="material-symbols-outlined">cancel</span>
            <h3 className="text-xl font-bold uppercase tracking-tight">El Mito de la Aseguradora</h3>
          </div>
          <p className="text-slate-600 italic leading-relaxed text-lg">
            "El impacto fue a menos de 5km/h. No existe posibilidad biomecánica de lesión. Por lo tanto, no pagaremos tu tratamiento."
          </p>
        </div>

        <div className="bg-green-50/50 p-10 rounded-3xl border border-green-100 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-green-600">
            <span className="material-symbols-outlined">check_circle</span>
            <h3 className="text-xl font-bold uppercase tracking-tight">La Realidad</h3>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg">
            Los parachoques modernos absorben la energía de forma distinta. Estudios demuestran que las lesiones de latigazo cervical ocurren a velocidades muy bajas sin deformación del vehículo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DeltaVSection;
