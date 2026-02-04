
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 text-[#1392ec]">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
            <span className="text-slate-900 font-black text-lg">Tráfico112</span>
          </div>
          
          <p className="text-slate-400 text-sm max-w-md text-center md:text-left leading-relaxed">
            Tráfico112 - No estamos afiliados a UNESPA ni a ninguna entidad aseguradora. Somos una asociación independiente para la defensa de las víctimas.
          </p>

          <div className="flex gap-8 text-sm font-bold text-slate-500">
            <a href="#" className="hover:text-[#1392ec] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#1392ec] transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-[#1392ec] transition-colors">Cookies</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-50 text-center text-slate-400 text-xs">
          © 2024 Tráfico112. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
