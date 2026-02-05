import React from 'react';
import { Link } from 'react-router-dom';

const HeaderEducational: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-[#f0f3f4] py-4">
            <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="text-[#1392ec]">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <span className="text-[#111518] text-lg font-bold tracking-tight">Tráfico112</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#el-pacto" className="text-sm font-semibold text-slate-600 hover:text-[#1392ec] transition-colors">El Pacto</a>
                    <a href="#altas" className="text-sm font-semibold text-slate-600 hover:text-[#1392ec] transition-colors">Altas Médicas</a>
                    <a href="#delta-v" className="text-sm font-semibold text-slate-600 hover:text-[#1392ec] transition-colors">Mito Delta V</a>
                </nav>

                <button className="bg-[#1392ec] hover:bg-[#0b7cbd] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-md">
                    Contactar
                </button>
            </div>
        </header>
    );
};

export default HeaderEducational;
