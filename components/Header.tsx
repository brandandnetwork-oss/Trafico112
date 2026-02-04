
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#f0f3f4] py-4">
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-[#1392ec]">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-[#111518] text-xl font-black tracking-tight">Tráfico112</h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#el-pacto" className="text-sm font-semibold hover:text-[#1392ec] transition-colors">El Pacto</a>
          <a href="#altas" className="text-sm font-semibold hover:text-[#1392ec] transition-colors">Altas Médicas</a>
          <a href="#delta-v" className="text-sm font-semibold hover:text-[#1392ec] transition-colors">Mito Delta V</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex min-w-[120px] items-center justify-center rounded-lg h-10 px-5 bg-[#1392ec] text-white text-sm font-bold shadow-lg shadow-[#1392ec]/20 hover:bg-[#1392ec]/90 transition-all">
            Contactar
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#e11d48] text-white hover:bg-[#e11d48]/90 transition-all">
            <span className="material-symbols-outlined text-[22px]">phone_in_talk</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
