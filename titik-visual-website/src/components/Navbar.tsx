import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useContent } from '../content/ContentContext';

const getImg = (name: string) => {
  try {
    return require(`../img/${name}`);
  } catch {
    return '';
  }
};

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const content = useContent();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we should apply "layanan" styles
  // Logic adapted from App.tsx
  const layananRoutes = [
    '/services',
    '/layanan',
    '/ui-ux',
    '/web-apk',
    '/logo-design',
    '/social-media',
    '/custom-merchandise'
  ];
  const isLayanan = layananRoutes.some(
    (route) => currentPath.startsWith(route) || currentPath.includes(route)
  );
  
  // Construct class names
  let headerClass = `site-header ${scrolled ? 'scrolled' : ''}`;
  if (isLayanan) {
    headerClass += ' layanan-nav';
  }

  // Helper to determine active class
  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/' || currentPath === '';
    return currentPath.startsWith(path);
  };

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-left">
            <span><i className="fa-solid fa-phone"></i> 081804376001</span>
            <span><i className="fa-regular fa-envelope"></i> titikvisualjogja@gmail.com</span>
          </div>
          <div className="top-right">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <header className={headerClass}>
      <div className="header-inner">
        {/* Logo */}
        <div className="logo-wrapper" onClick={() => window.location.href = '/'} role="button" tabIndex={0}>
          <img src={getImg('img.png')} alt="Titik Visual" className="logo" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nav" aria-label="Primary navigation">
          <a href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>{content.get('global', 'nav_home', 'Home')}</a>
          <a href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>{content.get('global', 'nav_about', 'About')}</a>
          <a href="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>{content.get('global', 'nav_services', 'Services')}</a>
          <a href="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}>{content.get('global', 'nav_portfolio', 'Portfolio')}</a>
          <a href="/careers" className={`nav-link ${isActive('/careers') ? 'active' : ''}`}>{content.get('global', 'nav_careers', 'Careers')}</a>
          <a href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>{content.get('global', 'nav_contact', 'Contact')}</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          type="button" 
          aria-label="Toggle mobile menu" 
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} aria-hidden={!isMobileMenuOpen}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="/services" className={`mobile-nav-link ${isActive('/services') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="/portfolio" className={`mobile-nav-link ${isActive('/portfolio') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
          <a href="/careers" className={`mobile-nav-link ${isActive('/careers') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
          <a href="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </nav>
      </div>
      </header>
    </>
  );
};

export default Navbar;
