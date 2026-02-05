import React from 'react';
import HeaderEducational from '../components/HeaderEducational';
import UnespaHero from '../components/UnespaHero';
import TransparencySection from '../components/TransparencySection';
import MedicalDischargeSection from '../components/MedicalDischargeSection';
import DeltaVSection from '../components/DeltaVSection';
import FinalCTA from '../components/FinalCTA';
import SimpleFooter from '../components/SimpleFooter';

const EducationalPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <HeaderEducational />

            <UnespaHero />

            <TransparencySection />
            <MedicalDischargeSection />
            <DeltaVSection />

            <FinalCTA />
            <SimpleFooter />
        </div>
    );
};

export default EducationalPage;
