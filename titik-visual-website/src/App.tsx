import React, { useEffect, useCallback } from 'react';
import './App.css';
import TitikVisualWebsite from './beranda/beranda';
import AboutPage from './page-about/page-about';
import ServicesPage from './page-layanan/page-layanan';
import PortfolioPage from './page-portfolio/page-portfolio';
import ContactPage from './page-contact/page-contact';
import CareersPage from './halaman-careers/careers';
import CustomMerchandisePage from './Page Detail Layanan Custom Merchandise/Layanan Custom Merchandise';
import UIUXPage from './page layanan detail ui_ux/layanan detail ui_ux';
import WebsiteAppPage from './page detail layanan web&apk/layanan web&apk';
import LogoDesignPage from './Page Detail Layanan Logo Design/Layanan Logo Design';
import SocialMediaPage from './Page Detail layanan Social Media/Layanan Social Media';
import InternshipPage from './halaman-program-magang/program-magang';
import LowonganKerjaPage from './halaman-lowongan-kerja/lowongan-kerja';
import CareersFooter from './halaman-careers/CareersFooter.jsx';
import Navbar from './components/Navbar';

// custom lightweight router without external wrappers

function HashRedirector() {

  useEffect(() => {
    const map: Record<string, string> = {
      '#home': '/',
      '#about': '/about',
      '#services': '/services',
      '#portfolio': '/portfolio',
      '#contact': '/contact',
      '#careers': '/careers',
      '#custom-merchandise': '/custom-merchandise',
      '#internship': '/internship'
    };
    const applyRedirect = () => {
      const hash = window.location.hash;
      const target = map[hash];
      if (target) {
        (window as any)['history'].replaceState(null, '', target);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    };
    applyRedirect();
    window.addEventListener('hashchange', applyRedirect);
    return () => window.removeEventListener('hashchange', applyRedirect);
  }, []);
  return null;
}

function App() {
  const normalize = useCallback((p: string) => {
    if (!p) return '/';
    if (p.includes('/page-about')) return '/about';
    if (p.includes('/page-layanan')) return '/services';
    if (p.includes('/page-portfolio')) return '/portfolio';
    if (p.includes('/page-porfolio')) return '/portfolio';
    if (p.includes('/page-contact')) return '/contact';
    if (p.includes('/beranda/beranda.tsx')) return '/';
    if (p.startsWith('/layanan')) return '/services';
    if (p === '/about/' || p === '/services/' || p === '/portfolio/' || p === '/contact/') {
      return p.slice(0, -1);
    }
    return p;
  }, []);
  const resolvePath = useCallback(() => {
    const h = window.location.hash;
    if (h) {
      const map: Record<string, string> = {
        '#home': '/',
        '#about': '/about',
        '#services': '/services',
        '#portfolio': '/portfolio',
        '#contact': '/contact',
        '#careers': '/careers',
        '#custom-merchandise': '/custom-merchandise',
        '#program-magang': '/program-magang'
      };
      return map[h] || normalize(window.location.pathname || '/');
    }
    return normalize(window.location.pathname || '/');
  }, [normalize]);
  const [path, setPath] = React.useState<string>(resolvePath());
  useEffect(() => {
    const onPop = () => setPath(resolvePath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [resolvePath]);
  useEffect(() => {
    const onHash = () => setPath(resolvePath());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [resolvePath]);
  useEffect(() => {
    document.body.classList.add('page-loaded');
    setTimeout(() => document.body.classList.add('page-loaded'), 0);
  }, [path]);
  useEffect(() => {
    if (path !== '/contact') return;
    const hero = document.querySelector('.hero-section, .hero') as HTMLElement | null;
    if (!hero) return;
    const apply = () => {
      hero.style.setProperty('background', '#FFFFFF', 'important');
      hero.style.setProperty('backgroundImage', 'none', 'important');
      hero.style.setProperty('backgroundColor', '#FFFFFF', 'important');
      const h1 = hero.querySelector('h1') as HTMLElement | null;
      if (!h1) return;
      if (h1.getAttribute('data-contact-heading') === 'true') return;
      h1.setAttribute('data-contact-heading', 'true');
      h1.style.display = 'block';
      h1.style.textAlign = 'center';
      h1.style.removeProperty('background');
      h1.style.removeProperty('background-image');
      h1.style.removeProperty('-webkit-background-clip');
      h1.style.removeProperty('background-clip');
      h1.style.removeProperty('-webkit-text-fill-color');
      h1.style.color = '';
      const line1 = document.createElement('span');
      line1.textContent = 'Mari Diskusi';
      line1.style.display = 'block';
      line1.style.whiteSpace = 'nowrap';
      line1.style.background = 'linear-gradient(90deg, #9333EA, #0891B2)';
      (line1.style as any).WebkitBackgroundClip = 'text';
      (line1.style as any).backgroundClip = 'text';
      (line1.style as any).WebkitTextFillColor = 'transparent';
      line1.style.color = 'transparent';
      const line2 = document.createElement('span');
      line2.textContent = 'Proyek Anda';
      line2.style.display = 'block';
      line2.style.whiteSpace = 'nowrap';
      line2.style.marginTop = '6px';
      line2.style.color = '#000000';
      line2.style.background = 'none';
      line2.style.removeProperty('background-image');
      (line2.style as any).WebkitBackgroundClip = '';
      (line2.style as any).backgroundClip = '';
      (line2.style as any).WebkitTextFillColor = '#000000';
      h1.innerHTML = '';
      h1.appendChild(line1);
      h1.appendChild(line2);
    };
    apply();
    let scheduled = false;
    const observer = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      setTimeout(() => {
        scheduled = false;
        apply();
      }, 50);
    });
    observer.observe(hero, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [path]);
  useEffect(() => {
    const forceHeroWhite = () => {
      const isContact = path === '/contact' || (window.location && window.location.pathname === '/contact');
      const candidates = Array.from(document.querySelectorAll('.hero-section, .hero')) as HTMLElement[];
      candidates.forEach(el => {
        if (isContact) {
          el.setAttribute('data-contact-hero', 'true');
          el.style.setProperty('background', '#FFFFFF', 'important');
          el.style.setProperty('backgroundImage', 'none', 'important');
          el.style.setProperty('backgroundColor', '#FFFFFF', 'important');
        } else if (el.getAttribute('data-contact-hero') === 'true') {
          el.removeAttribute('data-contact-hero');
          el.style.removeProperty('background');
          el.style.removeProperty('backgroundImage');
          el.style.removeProperty('backgroundColor');
        }
      });
    };
    forceHeroWhite();
    const t = setTimeout(forceHeroWhite, 0);
    return () => clearTimeout(t);
  }, [path]);
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.footer')) as HTMLElement[];
    nodes.forEach(n => {
      if (path === '/careers') {
        n.style.display = 'none';
      } else {
        n.style.display = '';
      }
    });
  }, [path]);

  useEffect(() => {
    const routeTo = (p: string) => {
      if (window.location.pathname !== p) {
        (window as any)['history'].pushState(null, '', p);
        window.dispatchEvent(new PopStateEvent('popstate'));
        setPath(p);
      }
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target ? target.closest('a') as HTMLAnchorElement | null : null;
      if (!a) return;
      const raw = a.getAttribute('href') || '';
      const abs = a.href || '';
      const href = raw || abs;
      const pathname = a.pathname || '';
      const txt = (a.textContent || '').toLowerCase().trim();
      const map: Array<{ test: (s: string) => boolean; to: string }> = [
        { test: (s) => s.includes('#home') || s.endsWith('/#/home'), to: '/' },
        { test: (s) => s.includes('#about') || s.includes('page-about/page-about.tsx') || pathname === '/about' || abs.endsWith('/about'), to: '/about' },
        { test: (s) => s.includes('#services') || s.includes('page-layanan/page-layanan.tsx') || pathname === '/services' || pathname.startsWith('/layanan') || abs.endsWith('/services'), to: '/services' },
        { test: (s) => s.includes('#portfolio') || s.includes('page-portfolio/page-portfolio.tsx') || s.includes('page-porfolio/page-porfolio.tsx') || pathname === '/portfolio' || abs.endsWith('/portfolio'), to: '/portfolio' },
        { test: (s) => s.includes('#contact') || s.includes('page-contact/page-contact.tsx') || pathname === '/contact' || abs.endsWith('/contact'), to: '/contact' },
        { test: () => pathname === '/careers' || abs.endsWith('/careers'), to: '/careers' },
        { test: (s) => s.includes('beranda/beranda.tsx'), to: '/' }
      ];
      for (const m of map) {
        if (m.test(href)) {
          e.preventDefault();
          routeTo(m.to);
          break;
        }
      }
      if (txt === 'services' || txt === 'layanan') {
        e.preventDefault();
        routeTo('/services');
        return;
      }
      if (txt === 'home') {
        e.preventDefault();
        routeTo('/');
        return;
      }
      if (txt === 'about' || txt === 'profile') {
        e.preventDefault();
        routeTo('/about');
        return;
      }
      if (txt === 'portfolio') {
        e.preventDefault();
        routeTo('/portfolio');
        return;
      }
      if (txt === 'contact' || txt === 'kontak') {
        e.preventDefault();
        routeTo('/contact');
        return;
      }
      if (txt === 'careers') {
        e.preventDefault();
        routeTo('/careers');
        return;
      }
      if (
        a.origin === window.location.origin &&
        pathname &&
        pathname !== window.location.pathname
      ) {
        e.preventDefault();
        routeTo(normalize(pathname));
      }
    };
    document.addEventListener('click', onClick, true);
    const selector = '.nav a, .mobile-nav-link, nav a';
    const nodes = Array.from(document.querySelectorAll(selector)) as HTMLAnchorElement[];
    const directHandler = (ev: Event) => {
      const a = ev.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute('href') || '';
      const pathname = a.pathname || '';
      const txt = (a.textContent || '').toLowerCase().trim();
      const map2: Array<{ test: (s: string) => boolean; to: string }> = [
        { test: (s) => s === '#home' || s.endsWith('/#/home'), to: '/' },
        { test: (s) => s === '#about' || pathname === '/about' || s.endsWith('/about'), to: '/about' },
        { test: (s) => s === '#services' || pathname === '/services' || pathname.startsWith('/layanan') || s.endsWith('/services'), to: '/services' },
        { test: (s) => s === '#portfolio' || pathname === '/portfolio' || s.includes('page-porfolio'), to: '/portfolio' },
        { test: (s) => s === '#contact' || pathname === '/contact' || s.endsWith('/contact'), to: '/contact' },
        { test: () => pathname === '/careers' || href.endsWith('/careers'), to: '/careers' },
        { test: () => pathname === '/program-magang' || href.endsWith('/program-magang'), to: '/program-magang' },
        { test: () => pathname === '/lowongan-kerja' || href.endsWith('/lowongan-kerja'), to: '/lowongan-kerja' }
      ];
      for (const m of map2) {
        if (m.test(href)) {
          ev.preventDefault();
          routeTo(m.to);
          return;
        }
      }
      if (txt === 'home') {
        ev.preventDefault();
        routeTo('/');
        return;
      }
      if (txt === 'services' || txt === 'layanan') {
        ev.preventDefault();
        routeTo('/services');
        return;
      }
      if (txt === 'about' || txt === 'profile') {
        ev.preventDefault();
        routeTo('/about');
        return;
      }
      if (txt === 'portfolio') {
        ev.preventDefault();
        routeTo('/portfolio');
        return;
      }
      if (txt === 'contact' || txt === 'kontak') {
        ev.preventDefault();
        routeTo('/contact');
        return;
      }
      if (txt === 'careers') {
        ev.preventDefault();
        routeTo('/careers');
        return;
      }
    };
    nodes.forEach(n => n.addEventListener('click', directHandler));
    return () => document.removeEventListener('click', onClick, true);
  }, [normalize]);
  useEffect(() => {
    const anchors = Array.from(
      document.querySelectorAll('a[href="#home"], a[href="#about"], a[href="#services"], a[href="#portfolio"], a[href="#contact"], a[href="#careers"]')
    ) as HTMLAnchorElement[];
    const map: Record<string, string> = {
      '#home': '/',
      '#about': '/about',
      '#services': '/services',
      '#portfolio': '/portfolio',
      '#contact': '/contact',
      '#careers': '/careers'
    };
    const handler = (ev: Event) => {
      const a = ev.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute('href') || '';
      const to = map[href];
      if (to) {
        ev.preventDefault();
        if (window.location.pathname !== to) {
          (window as any)['history'].pushState(null, '', to);
          window.dispatchEvent(new PopStateEvent('popstate'));
          setPath(to);
        }
      }
    };
    anchors.forEach(a => a.addEventListener('click', handler));
    return () => anchors.forEach(a => a.removeEventListener('click', handler));
  }, [path]);

  if (path.startsWith('/admin')) {
    return (
      <>
        <HashRedirector />
        <AdminRedirect />
      </>
    );
  }

  let element: React.ReactElement;
  switch (path) {
    case '/':
      element = <TitikVisualWebsite />;
      break;
    case '/about':
      element = <AboutPage />;
      break;
    case '/services':
      element = <ServicesPage />;
      break;
    case '/ui-ux':
      element = <UIUXPage />;
      break;
    case '/web-apk':
      element = <WebsiteAppPage />;
      break;
    case '/logo-design':
      element = <LogoDesignPage />;
      break;
    case '/social-media':
      element = <SocialMediaPage />;
      break;
    case '/portfolio':
      element = <PortfolioPage />;
      break;
    case '/contact':
      element = <ContactPage />;
      break;
    case '/careers':
      element = <CareersPage />;
      break;
    case '/custom-merchandise':
      element = <CustomMerchandisePage />;
      break;
    case '/program-magang':
      element = <InternshipPage />;
      break;
    case '/lowongan-kerja':
      element = <LowonganKerjaPage />;
      break;
    default:
      element = <TitikVisualWebsite />;
      break;
  }
  return (
    <>
      <Navbar currentPath={path} />
      <HashRedirector />
      {element}
      {path === '/careers' ? <CareersFooter /> : null}
    </>
  );
}

function AdminRedirect() {
  useEffect(() => {
    window.location.href = 'http://localhost:5173/';
  }, []);
  return null;
}

export default App;
