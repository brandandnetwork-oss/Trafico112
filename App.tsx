import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import EducationalPage from './pages/EducationalPage';

import AccidentesPage from './pages/AccidentesPage';
import JuridicoPage from './pages/JuridicoPage';
import PeritajePage from './pages/PeritajePage';
import SomosPage from './pages/SomosPage';
import BlogPage from './pages/BlogPage';
import ContactoPage from './pages/ContactoPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/accidentes" element={<AccidentesPage />} />
        <Route path="/juridico" element={<JuridicoPage />} />
        <Route path="/peritaje" element={<PeritajePage />} />
        <Route path="/somos" element={<SomosPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/la-mentira-unespa" element={<EducationalPage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
