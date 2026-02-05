import { Link } from 'react-router-dom';

const HeaderClassic: React.FC = () => {
    return (
        <header className="w-full bg-white py-6 px-8">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="bg-[#111518] text-white p-1 rounded-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4l6 14H6l6-14z" /></svg>
                    </div>
                    <span className="font-bold text-[#111518] text-lg tracking-tight">Tráfico112</span>
                </Link>

                {/* Links */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/" className="text-sm font-bold text-[#111518]">Inicio</Link>
                    <Link to="/accidentes" className="text-sm font-bold text-[#111518]">Accidentes de tráfico</Link>
                    <Link to="/juridico" className="text-sm font-bold text-[#111518]">Servicio jurídico</Link>
                    <Link to="/peritaje" className="text-sm font-bold text-[#111518]">Peritaje médico</Link>
                    <Link to="/somos" className="text-sm font-bold text-[#111518]">Quiénes somos</Link>
                    <Link to="/blog" className="text-sm font-bold text-[#111518]">Blog</Link>
                    <Link to="/contacto" className="text-sm font-bold text-[#111518]">Contacto</Link>
                </nav>

                {/* Contact */}
                <div className="flex items-center gap-3">
                    <button className="bg-[#1392ec] text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-[#0b7cbd] transition-colors">
                        900 87 78 08
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
