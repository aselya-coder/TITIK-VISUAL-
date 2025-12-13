import React, { useEffect, useState } from 'react';
import './App.css';
import TitikVisualWebsite from './beranda/beranda';
import AboutPage from './page-about/page-about';
import ServicesPage from './page-layanan/page-layanan';
import PortfolioPage from './page-portfolio/page-portfolio';
import ContactPage from './page-contact/page-contact';
import CareersPage from './halaman-careers/careers';
import CustomMerchandisePage from './Page Detail Layanan Custom Merchandise/Layanan Custom Merchandise';
import InternshipPage from './halaman-program-magang/program-magang';

function App() {
  const [route, setRoute] = useState<string>(window.location.hash || '#home');

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  switch (route) {
    case '#about':
      return <AboutPage />;
    case '#services':
      return <ServicesPage />;
    case '#portfolio':
      return <PortfolioPage />;
    case '#contact':
      return <ContactPage />;
    case '#careers':
      return <CareersPage />;
    case '#custom-merchandise':
      return <CustomMerchandisePage />;
    case '#internship':
      return <InternshipPage />;
    default:
      return <TitikVisualWebsite />;
  }
}

export default App;
