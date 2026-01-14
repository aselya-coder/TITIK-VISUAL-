import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { useContent } from '../content/ContentContext';

const getImg = (name: string) => {
  try {
    return require(`../img/${name}`);
  } catch {
    return undefined as any;
  }
};

interface NavbarProps {
  currentPath?: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath = '/' }) => {
  const content = useContent();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const applyMobileMenuA11y = (open: boolean) => {
    const menu = mobileMenuRef.current;
    const toggleBtn = toggleBtnRef.current;
    if (!menu) return;

    if (open) {
      menu.removeAttribute('inert');
      menu.setAttribute('aria-hidden', 'false');
      toggleBtn?.setAttribute('aria-expanded', 'true');
      const firstLink = menu.querySelector<HTMLAnchorElement>('.mobile-nav-link');
      firstLink?.focus();
    } else {
      const active = document.activeElement as HTMLElement | null;
      if (active && menu.contains(active)) {
        active.blur();
      }
      menu.setAttribute('inert', '');
      menu.setAttribute('aria-hidden', 'true');
      toggleBtn?.setAttribute('aria-expanded', 'false');
      toggleBtn?.focus();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    applyMobileMenuA11y(isMobileMenuOpen);
  }, [isMobileMenuOpen]);

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

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-left">
            <span><i className="fa-solid fa-phone"></i> {content.get('global', 'topbar_phone', '081804376001')}</span>
            <span><i className="fa-regular fa-envelope"></i> {content.get('global', 'topbar_email', 'titikvisualjogja@gmail.com')}</span>
          </div>
          <div className="top-right">
            <a href={content.get('global', 'social_facebook_href', 'https://facebook.com')} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href={content.get('global', 'social_instagram_href', 'https://instagram.com')} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <header className={headerClass}>
      <div className="header-inner">
        {/* Logo */}
        <a href="/" className="logo-wrapper" onClick={(e) => handleLink(e, '/')}>
          <img src={getImg('img.png')} alt="Titik Visual" className="logo" />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="nav" aria-label="Primary navigation">
          <a href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={(e) => handleLink(e, '/')}>{content.get('global', 'nav_home', 'Home')}</a>
          <a href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={(e) => handleLink(e, '/about')}>{content.get('global', 'nav_about', 'About')}</a>
          <a href="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`} onClick={(e) => handleLink(e, '/services')}>{content.get('global', 'nav_services', 'Services')}</a>
          <a href="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`} onClick={(e) => handleLink(e, '/portfolio')}>{content.get('global', 'nav_portfolio', 'Portfolio')}</a>
          <a href="/careers" className={`nav-link ${isActive('/careers') ? 'active' : ''}`} onClick={(e) => handleLink(e, '/careers')}>{content.get('global', 'nav_careers', 'Careers')}</a>
          <a href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={(e) => handleLink(e, '/contact')}>{content.get('global', 'nav_contact', 'Contact')}</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          type="button" 
          aria-label="Toggle mobile menu" 
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          ref={toggleBtnRef}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div id="mobile-navigation" ref={mobileMenuRef} className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`} onClick={(e) => { setIsMobileMenuOpen(false); handleLink(e, '/'); }}>{content.get('global', 'nav_home', 'Home')}</a>
          <a href="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`} onClick={(e) => { setIsMobileMenuOpen(false); handleLink(e, '/about'); }}>{content.get('global', 'nav_about', 'About')}</a>
          <a href="/services" className={`mobile-nav-link ${isActive('/services') ? 'active' : ''}`} onClick={(e) => { setIsMobileMenuOpen(false); handleLink(e, '/services'); }}>{content.get('global', 'nav_services', 'Services')}</a>
          <a href="/portfolio" className={`mobile-nav-link ${isActive('/portfolio') ? 'active' : ''}`} onClick={(e) => { setIsMobileMenuOpen(false); handleLink(e, '/portfolio'); }}>{content.get('global', 'nav_portfolio', 'Portfolio')}</a>
          <a href="/careers" className={`mobile-nav-link ${isActive('/careers') ? 'active' : ''}`} onClick={(e) => { setIsMobileMenuOpen(false); handleLink(e, '/careers'); }}>{content.get('global', 'nav_careers', 'Careers')}</a>
          <a href="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={(e) => { setIsMobileMenuOpen(false); handleLink(e, '/contact'); }}>{content.get('global', 'nav_contact', 'Contact')}</a>
        </nav>
      </div>
      </header>
    </>
  );
};

export default Navbar;
