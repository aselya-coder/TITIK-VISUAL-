import React, { useEffect, useState } from 'react';
import CareersFooter from '../halaman-careers/CareersFooter';
import { useContent } from '../content/ContentContext';
import './style.css';

// Helper to safely get images
const getImg = (name: string) => {
  try {
    if (!name) return require('../img/portfolio.png');
    if (name.startsWith('http')) return name;
    return require(`../img/${name}`);
  } catch {
    return require('../img/portfolio.png'); // Fallback
  }
};

interface Project {
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  image: string;
  link: string;
  featured: boolean;
  tags: string[];
}

const DEFAULT_PROJECTS: Project[] = [
  {
    title: 'E-Commerce Mobile App',
    category: 'UI/UX Design',
    year: '2024',
    client: 'ShopNow Indonesia',
    description: 'Complete mobile app design untuk platform e-commerce dengan user experience yang optimal dan conversion rate tinggi.',
    image: 'portfolio.png',
    link: '#',
    featured: true,
    tags: ['Mobile', 'E-commerce', 'iOS']
  },
  {
    title: 'SaaS Dashboard Design',
    category: 'UI/UX Design',
    year: '2024',
    client: 'DataFlow Solutions',
    description: 'Dashboard design untuk SaaS platform dengan data visualization yang clear dan user-friendly interface.',
    image: 'portfolio.png',
    link: '#',
    featured: true,
    tags: ['Web App', 'Dashboard', 'SaaS']
  },
  {
    title: 'Banking Mobile App',
    category: 'Mobile App',
    year: '2023',
    client: 'SecureBank Digital',
    description: 'Secure dan user-friendly banking app dengan modern interface dan advanced security features.',
    image: 'portfolio.png',
    link: '#',
    featured: true,
    tags: ['Mobile App', 'Banking', 'Security']
  },
  {
    title: 'E-Commerce Mobile App',
    category: 'UI/UX Design',
    year: '2024',
    client: 'ShopNow Indonesia',
    description: 'Complete mobile app design untuk platform e-commerce dengan user experience yang optimal dan conversion rate tinggi.',
    image: 'portfolio.png',
    link: '#',
    featured: true,
    tags: ['Mobile', 'E-commerce', 'iOS']
  },
  {
    title: 'SaaS Dashboard Design',
    category: 'UI/UX Design',
    year: '2024',
    client: 'DataFlow Solutions',
    description: 'Dashboard design untuk SaaS platform dengan data visualization yang clear dan user-friendly interface.',
    image: 'portfolio.png',
    link: '#',
    featured: true,
    tags: ['Web App', 'Dashboard', 'SaaS']
  },
  {
    title: 'Corporate Website',
    category: 'Web Development',
    year: '2024',
    client: 'PT Maju Bersama',
    description: 'Website corporate yang modern dan professional dengan CMS integration untuk easy content management.',
    image: 'portfolio.png',
    link: '#',
    featured: false,
    tags: ['Website', 'Corporate', 'Responsive']
  },
  {
    title: 'Banking Mobile App',
    category: 'Mobile App',
    year: '2023',
    client: 'SecureBank Digital',
    description: 'Secure dan user-friendly banking app dengan modern interface dan advanced security features.',
    image: 'portfolio.png',
    link: '#',
    featured: true,
    tags: ['Mobile App', 'Banking', 'Security']
  },
  {
    title: 'Brand Identity Package',
    category: 'Branding',
    year: '2024',
    client: 'GreenTech Startup',
    description: 'Complete brand identity package termasuk logo, color palette, typography, dan brand guidelines.',
    image: 'portfolio.png',
    link: '#',
    featured: false,
    tags: ['Logo', 'Brand Identity', 'Guidelines']
  },
  {
    title: 'Social Media Campaign',
    category: 'Social Media',
    year: '2024',
    client: 'Fashion Brand Co',
    description: 'Social media campaign design untuk fashion brand dengan consistent visual identity dan engaging content.',
    image: 'portfolio.png',
    link: '#',
    featured: false,
    tags: ['Social Media', 'Campaign', 'Instagram']
  },
  {
    title: 'Restaurant Website',
    category: 'Web Development',
    year: '2023',
    client: 'Rasa Nusantara',
    description: 'Website restaurant dengan online menu, table booking system, dan gallery yang menarik.',
    image: 'portfolio.png',
    link: '#',
    featured: false,
    tags: ['Web', 'Restaurant', 'Online Menu']
  },
  {
    title: 'Fitness App Design',
    category: 'UI/UX Design',
    year: '2024',
    client: 'FitLife App',
    description: 'Fitness tracking app dengan motivational design dan comprehensive workout planning features.',
    image: 'portfolio.png',
    link: '#',
    featured: true,
    tags: ['Mobile', 'Fitness', 'Health']
  },
  {
    title: 'E-Learning Platform',
    category: 'Web Development',
    year: '2023',
    client: 'EduTech Solutions',
    description: 'E-learning platform dengan interactive course content dan comprehensive student management system.',
    image: 'portfolio.png',
    link: '#',
    featured: false,
    tags: ['Web App', 'Education', 'LMS']
  }
];

const PortfolioPage: React.FC = () => {
  const content = useContent();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const getUrl = (primary: string, legacy?: string, fallback: string = '#') => {
    const v = content.get('page-portfolio', primary, undefined);
    if (typeof v === 'string' && v.trim()) return v;
    if (legacy) {
      const legacyVal = content.get('page-portfolio', legacy, undefined);
      if (typeof legacyVal === 'string' && legacyVal.trim()) return legacyVal;
    }
    return fallback;
  };

  // Adapter: Transform Admin Panel data to Frontend Structure
  useEffect(() => {
    const rawItems = content.get('page-portfolio', 'items');
    
    if (Array.isArray(rawItems) && rawItems.length > 0) {
      const loadedProjects = rawItems.map((item: any) => {
        // Handle tags which might be strings or objects depending on admin panel version
        const tagsRaw = item.tags || [];
        const tags = Array.isArray(tagsRaw) 
          ? tagsRaw.map((t: any) => typeof t === 'string' ? t : t?.label || '').filter(Boolean)
          : [];

        return {
          title: item.title || '',
          category: item.category || 'General',
          year: item.year || new Date().getFullYear().toString(),
          client: item.client || 'Client',
          description: item.description || '',
          image: item.image || 'portfolio.png',
          link: item.link || '#',
          featured: Boolean(item.featured),
          tags
        };
      });
      setProjects(loadedProjects);
    } else {
      // Fallback to default design data if Admin Panel is empty or undefined
      setProjects(DEFAULT_PROJECTS);
    }
  }, [content]); // Re-run when content changes

  useEffect(() => {
    document.body.classList.add("page-portfolio");
    document.body.setAttribute("data-page", "portfolio");
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.classList.remove("page-portfolio");
      document.body.removeAttribute("data-page");
      document.body.style.removeProperty('overflow-x');
    };
  }, []);

  useEffect(() => {
    const onResizeFlag = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResizeFlag);
    onResizeFlag();
    return () => window.removeEventListener('resize', onResizeFlag);
  }, []);

  useEffect(() => {
    const apply = () => {
      const isMobile = window.innerWidth <= 768;
      const root = document.querySelector('.portfolio-hero-section .hero-content') as HTMLElement | null;
      if (!root) return;
      const title = root.querySelector('.hero-title') as HTMLElement | null;
      const desc = root.querySelector('.hero-description') as HTMLElement | null;
      const buttons = root.querySelector('.hero-buttons') as HTMLElement | null;
      const btnEls = buttons ? Array.from(buttons.querySelectorAll('.btn')) as HTMLElement[] : [];
      if (isMobile) {
        root.style.setProperty('display', 'flex', 'important');
        root.style.setProperty('flexDirection', 'column', 'important');
        root.style.setProperty('alignItems', 'center', 'important');
        root.style.setProperty('justifyContent', 'center', 'important');
        root.style.setProperty('textAlign', 'center', 'important');
        if (title) {
          title.style.setProperty('padding', '0 16px', 'important');
          title.style.setProperty('width', '100%', 'important');
          title.style.setProperty('whiteSpace', 'normal', 'important');
          title.style.setProperty('wordBreak', 'break-word', 'important');
          title.style.setProperty('overflowWrap', 'anywhere', 'important');
          title.style.setProperty('textAlign', 'center', 'important');
        }
        if (desc) {
          desc.style.setProperty('padding', '0 16px', 'important');
          desc.style.setProperty('width', '100%', 'important');
          desc.style.setProperty('whiteSpace', 'normal', 'important');
          desc.style.setProperty('wordBreak', 'break-word', 'important');
          desc.style.setProperty('overflowWrap', 'anywhere', 'important');
          desc.style.setProperty('textAlign', 'center', 'important');
        }
        if (buttons) {
          buttons.style.setProperty('display', 'flex', 'important');
          buttons.style.setProperty('flexDirection', 'column', 'important');
          buttons.style.setProperty('gap', '12px', 'important');
          buttons.style.setProperty('width', '100%', 'important');
          buttons.style.setProperty('alignItems', 'center', 'important');
          buttons.style.setProperty('justifyContent', 'center', 'important');
          btnEls.forEach(b => {
            b.style.setProperty('width', 'auto', 'important');
            b.style.setProperty('maxWidth', '100%', 'important');
            b.style.setProperty('minHeight', '44px', 'important');
            b.style.setProperty('whiteSpace', 'normal', 'important');
            b.style.setProperty('marginLeft', 'auto', 'important');
            b.style.setProperty('marginRight', 'auto', 'important');
          });
        }
      } else {
        root.style.removeProperty('display');
        root.style.removeProperty('flexDirection');
        root.style.removeProperty('alignItems');
        root.style.removeProperty('justifyContent');
        root.style.removeProperty('textAlign');
        title?.removeAttribute('style');
        desc?.removeAttribute('style');
        if (buttons) {
          buttons.removeAttribute('style');
          btnEls.forEach(b => b.removeAttribute('style'));
        }
      }
    };
    apply();
    const onResize = () => apply();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navigateToPage = (path: string) => {
    if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:')) {
      window.location.href = path;
    } else if (path.startsWith('#')) {
      const id = path.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.history.pushState(null, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="portfolio-page-wrapper">
      
      <main>
        {/* Portfolio Hero Section */}
        <section className="portfolio-hero-section">
          <section id="portfolio-fix">
            <div className="container">
              <div className="hero-content">
              <h1 className="hero-title">{content.get('page-portfolio', 'hero.title', 'Portfolio Kami')}</h1>
              <p className="hero-description">
                {content.get('page-portfolio', 'hero.description', 'Jelajahi koleksi karya terbaik kami dalam UI/UX Design, Web Development, Mobile App, dan Digital Marketing yang telah membantu klien mencapai tujuan bisnis mereka.')}
              </p>
              <div className="hero-buttons portfolio-buttons">
                <button
                  onClick={() => {
                    const url = getUrl('hero.cta_primary.url', 'hero.cta_primary.link', '');
                    if (url) {
                      navigateToPage(url);
                      return;
                    }
                    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-primary"
                >
                  <i className="fas fa-eye"></i> {content.get('page-portfolio', 'hero.cta_primary.label', 'Lihat Semua Karya')}
                </button>
                <button
                  onClick={() => navigateToPage(getUrl('hero.cta_secondary.url', 'hero.cta_secondary.link', '/contact'))}
                  className="btn btn-secondary"
                >
                  <i className="fas fa-arrow-right"></i> {content.get('page-portfolio', 'hero.cta_secondary.label', 'Diskusi Proyek')}
                </button>
              </div>
              </div>
            </div>
          </section>
        </section>

        {/* Featured Projects Section */}
        <section id="portfolio" className="featured-projects-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{content.get('page-portfolio', 'portfolio_title', 'Featured Projects')}</h2>
              <p className="section-subtitle">{content.get('page-portfolio', 'portfolio_subtitle', 'Karya-karya unggulan yang menjadi kebanggaan kami')}</p>
            </div>

            <div className="portfolio-grid">
              {projects.map((project, index) => (
                <div className="project-card" key={index}>
                  <div className="card-image-wrapper">
                    <img
                      src={getImg(project.image)}
                      alt={project.title}
                      className="card-image"
                    />
                    {project.featured && <span className="featured-badge">Featured</span>}
                  </div>
                  <div className="card-content">
                    <div className="content-header">
                      <span className="project-category-badge">{project.category}</span>
                      <span className="project-year">{project.year}</span>
                    </div>
                    
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="tag-item">{tag}</span>
                      ))}
                    </div>
                    
                    <div className="project-footer">
                      <span className="client-info">Client: {project.client}</span>
                      <a 
                        href={project.link} 
                        className="project-link-btn" 
                        aria-label="View Project"
                        onClick={(e) => {
                          e.preventDefault();
                          navigateToPage(project.link);
                        }}
                      >
                        <i className="fas fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="portfolio-cta-green">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">{content.get('page-portfolio', 'cta.title', 'Tertarik dengan Karya Kami?')}</h2>
              <p className="cta-description">
                {content.get('page-portfolio', 'cta.description', 'Mari diskusikan bagaimana kami bisa membantu mewujudkan visi digital Anda.')}
              </p>
              <div className="cta-buttons">
                <button onClick={() => navigateToPage(getUrl('cta.primary.url', 'cta.primary.link', '/contact'))} className="btn btn-white">
                  <i className="fas fa-paper-plane"></i> {content.get('page-portfolio', 'cta.primary.label', 'Diskusi Proyek')}
                </button>
                <button
                  onClick={() => {
                    const url = getUrl('cta.secondary.url', 'cta.secondary.link', '');
                    if (url) {
                      navigateToPage(url);
                      return;
                    }
                    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-outline-white"
                >
                  <i className="fas fa-images"></i> {content.get('page-portfolio', 'cta.secondary.label', 'Lihat Semua Portfolio')}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CareersFooter />
    </div>
  );
};

export default PortfolioPage;
