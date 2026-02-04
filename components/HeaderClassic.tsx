import React from 'react';

const HeaderClassic: React.FC = () => {
    return (
        <header className="w-full bg-white py-6 px-8">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="bg-[#111518] text-white p-1 rounded-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4l6 14H6l6-14z" /></svg>
                    </div>
                    <span className="font-bold text-[#111518] text-lg tracking-tight">Tráfico112</span>
                </div>

                {/* Links */}
                <nav className="hidden md:flex items-center gap-10">
                    <a href="#" className="text-sm font-bold text-[#111518]">Servicios</a>
                    <a href="#" className="text-sm font-bold text-[#111518]">Sobre nosotros</a>
                    <a href="#" className="text-sm font-bold text-[#111518]">Contacto</a>
                </nav>

                {/* Contact */}
                <div className="flex items-center gap-3">
                    <button className="bg-[#1392ec] text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-[#0b7cbd] transition-colors">
                        900 000 000
                    </button>
                    <button className="bg-[#e11d48] text-white w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#be123c] transition-colors">
                        <span className="material-symbols-outlined text-sm">phone_in_talk</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default HeaderClassic;
