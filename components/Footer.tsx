import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-[#111518] text-white pt-20 pb-10">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 mb-20">
          {/* Left Column: Info */}
          <div className="flex-1 flex flex-col gap-8">
            <h2 className="text-4xl font-black tracking-tight">¡Te llamamos!</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Tráfico112 cuenta con un equipo de prestigiosos peritos especializados en accidentes de tráfico y lesiones.
            </p>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-start gap-4">
                <div className="bg-[#1392ec]/20 p-3 rounded-xl text-[#1392ec]">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Ubicación</h4>
                  <p className="text-slate-400">Av. Del Ventisquero de la Condesa Mirasierra 42, 28035 Madrid, España</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#1392ec]/20 p-3 rounded-xl text-[#1392ec]">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Contacto</h4>
                  <p className="text-slate-400"><a href="mailto:gestion@trafico112.es" className="hover:text-white transition-colors">gestion@trafico112.es</a></p>
                  <p className="text-slate-400 font-bold mt-1 text-xl">900 87 78 08</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1 bg-white rounded-3xl p-8 text-[#111518]">
            <h3 className="text-2xl font-black mb-6">Envíanos tu número y te llamaremos cuanto antes</h3>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold mb-2 ml-1 text-slate-500">*Nombre</label>
                <input type="text" className="w-full bg-[#f6f7f8] border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1392ec] transition-colors" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-1 text-slate-500">*Teléfono</label>
                <input type="tel" className="w-full bg-[#f6f7f8] border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1392ec] transition-colors" placeholder="Tu teléfono" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-1 text-slate-500">*Email</label>
                <input type="email" className="w-full bg-[#f6f7f8] border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#1392ec] transition-colors" placeholder="Tu correo electrónico" />
              </div>

              <div className="flex items-center gap-3 mt-2">
                <input type="checkbox" id="privacy" className="w-5 h-5 rounded text-[#1392ec] focus:ring-[#1392ec]" />
                <label htmlFor="privacy" className="text-sm text-slate-500">He leído y acepto la Política de privacidad.</label>
              </div>

              <button type="button" className="mt-4 w-full bg-[#1392ec] text-white font-bold py-4 rounded-xl hover:bg-[#0b7cbd] transition-colors shadow-lg shadow-[#1392ec]/30">
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h4 className="font-black text-xl tracking-tight">Tráfico112</h4>
            <p className="text-slate-500 text-sm">Asociación de víctimas de accidentes de tráfico</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span>TRÁFICO112 © 2025</span>
            <a href="#" className="hover:text-white transition-colors">Aviso legal y Política de privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Política de cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
