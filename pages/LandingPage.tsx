import React from 'react';
import HeaderClassic from '../components/HeaderClassic';
import HeroClassic from '../components/HeroClassic';
import ComparisonSection from '../components/ComparisonSection';
import GuaranteesSection from '../components/GuaranteesSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <HeaderClassic />
            <HeroClassic />

            {/* Spacer title for Comparison */}
            <div className="pt-24 pb-4 bg-[#f8fafc] text-center">
                <span className="text-[#1392ec] font-bold text-xs uppercase tracking-widest">LA REALIDAD DETRÁS DEL SINIESTRO</span>
            </div>

            <div className="bg-[#f8fafc] pb-20">
                <ComparisonSection />
                <GuaranteesSection />
            </div>

            <FinalCTA />

            {/* Simple Footer Bar matching visual style */}
            <div className="bg-white py-10 px-8 border-t border-slate-100">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="bg-[#5e6a75] text-white p-0.5 rounded-[2px]">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4l6 14H6l6-14z" /></svg>
                        </div>
                        <span className="font-bold text-[#5e6a75] tracking-tight">Tráfico112</span>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-slate-800">Aviso Legal</a>
                        <a href="#" className="hover:text-slate-800">Privacidad</a>
                        <a href="#" className="hover:text-slate-800">Cookies</a>
                    </div>
                    <div className="mt-4 md:mt-0">
                        © 2024 Tráfico112. Asociación de Víctimas de Tráfico.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
