import React from 'react';
import './style.css';
import { useContent } from '../content/ContentContext';
import portfolioImage from '../img/portfolio.png';
const getImg = (name: string) => {
  try {
    return require(`../img/${name}`);
  } catch {
    return '';
  }
};


interface Project {
  id: number;
  image: string;
  tag?: string;
  category: string;
  year: string;
  title: string;
  description: string;
  tech: string[];
  client: string;
  link: string;
}

function App() {
  const content = useContent();

  const projects: Project[] = [
    {
      id: 1,
      image: portfolioImage,
      tag: 'Featured',
      category: 'UI/UX Design',
      year: '2024',
      title: content.get('page-portofolio', 'project_1_title', 'E-Commerce Mobile App'),
      description: content.get('page-portofolio', 'project_1_desc', 'Complete mobile app design untuk platform e-commerce dengan user experience yang optimal dan conversion rate tinggi.'),
      tech: ['Mobile', 'E-commerce', 'iOS'],
      client: 'ShopNow Indonesia',
      link: '/portfolio'
    },
    {
      id: 2,
      image: portfolioImage,
      tag: 'Featured',
      category: 'UI/UX Design',
      year: '2024',
      title: content.get('page-portofolio', 'project_2_title', 'SaaS Dashboard Design'),
      description: content.get('page-portofolio', 'project_2_desc', 'Dashboard design untuk SaaS platform dengan data visualization yang clear dan user-friendly interface.'),
      tech: ['Web App', 'Dashboard', 'SaaS'],
      client: 'DataFlow Solutions',
      link: '/portfolio'
    },
    {
      id: 3,
      image: portfolioImage,
      tag: 'Featured',
      category: 'Mobile App',
      year: '2023',
      title: content.get('page-portofolio', 'project_3_title', 'Banking Mobile App'),
      description: content.get('page-portofolio', 'project_3_desc', 'Secure dan user-friendly banking app dengan modern interface dan advanced security features.'),
      tech: ['Mobile App', 'Banking', 'Security'],
      client: 'SecureBank Digital',
      link: '/portfolio'
    },
    {
      id: 4,
      image: portfolioImage,
      tag: 'Featured',
      category: 'UI/UX Design',
      year: '2024',
      title: content.get('page-portofolio', 'project_4_title', 'E-Commerce Mobile App'),
      description: content.get('page-portofolio', 'project_4_desc', 'Complete mobile app design untuk platform e-commerce dengan user experience yang optimal dan conversion rate tinggi.'),
      tech: ['Mobile', 'E-commerce', 'iOS'],
      client: 'ShopNow Indonesia',
      link: '/portfolio'
    },
    {
      id: 5,
      image: portfolioImage,
      tag: 'Featured',
      category: 'UI/UX Design',
      year: '2024',
      title: content.get('page-portofolio', 'project_5_title', 'SaaS Dashboard Design'),
      description: content.get('page-portofolio', 'project_5_desc', 'Dashboard design untuk SaaS platform dengan data visualization yang clear dan user-friendly interface.'),
      tech: ['Web App', 'Dashboard', 'SaaS'],
      client: 'DataFlow Solutions',
      link: '/portfolio'
    },
    {
      id: 6,
      image: portfolioImage,
      category: 'Web Development',
      year: '2024',
      title: content.get('page-portofolio', 'project_6_title', 'Corporate Website'),
      description: content.get('page-portofolio', 'project_6_desc', 'Website corporate yang modern dan professional dengan CMS integration untuk easy content management.'),
      tech: ['Website', 'Corporate', 'Responsive'],
      client: 'PT. Maju Bersama',
      link: '/portfolio'
    },
    {
      id: 7,
      image: portfolioImage,
      tag: 'Featured',
      category: 'Mobile App',
      year: '2023',
      title: content.get('page-portofolio', 'project_7_title', 'Banking Mobile App'),
      description: content.get('page-portofolio', 'project_7_desc', 'Secure dan user-friendly banking app dengan modern interface dan advanced security features.'),
      tech: ['Mobile App', 'Banking', 'Security'],
      client: 'SecureBank Digital',
      link: '/portfolio'
    },
    {
      id: 8,
      image: portfolioImage,
      category: 'Branding',
      year: '2024',
      title: content.get('page-portofolio', 'project_8_title', 'Brand Identity Package'),
      description: content.get('page-portofolio', 'project_8_desc', 'Complete brand identity package termasuk logo, color palette, typography, dan brand guidelines.'),
      tech: ['Logo', 'Brand Identity', 'Guidelines'],
      client: 'GreenTech Startup',
      link: '/portfolio'
    },
    {
      id: 9,
      image: portfolioImage,
      category: 'Social Media',
      year: '2024',
      title: content.get('page-portofolio', 'project_9_title', 'Social Media Campaign'),
      description: content.get('page-portofolio', 'project_9_desc', 'Social media campaign design untuk fashion brand dengan consistent visual identity dan engaging content.'),
      tech: ['Social Media', 'Campaign', 'Instagram'],
      client: 'Fashion Brand Co',
      link: '/portfolio'
    },
    {
      id: 10,
      image: portfolioImage,
      category: 'Web Development',
      year: '2023',
      title: content.get('page-portofolio', 'project_10_title', 'Restaurant Website'),
      description: content.get('page-portofolio', 'project_10_desc', 'Website restaurant dengan online menu, table booking system, dan gallery yang menarik.'),
      tech: ['Website', 'Restaurant', 'Online Menu'],
      client: 'Rasa Nusantara',
      link: '/portfolio'
    },
    {
      id: 11,
      image: portfolioImage,
      tag: 'Featured',
      category: 'UI/UX Design',
      year: '2024',
      title: content.get('page-portofolio', 'project_11_title', 'Fitness App UI/UX'),
      description: content.get('page-portofolio', 'project_11_desc', 'Fitness tracking app dengan motivational design dan comprehensive workout planning features.'),
      tech: ['Mobile', 'Fitness', 'Health'],
      client: 'FitLife App',
      link: '/portfolio'
    },
    {
      id: 12,
      image: portfolioImage,
      category: 'Web Development',
      year: '2023',
      title: content.get('page-portofolio', 'project_12_title', 'E-Learning Platform'),
      description: content.get('page-portofolio', 'project_12_desc', 'E-learning platform dengan interactive course content dan comprehensive student management system.'),
      tech: ['Web App', 'Education', 'LMS'],
      client: 'EduTech Indonesia',
      link: '/portfolio'
    }
  ];

  return (
    <div className="App">




      <main>
        {/* Portfolio Hero Section */}
        <section className="portfolio-hero-section">
          <div className="container">
            <h1>{content.get('page-portfolio', 'hero.title', 'Portfolio Kami')}</h1>
            <p>{content.get('page-portfolio', 'hero.description', 'Jelajahi koleksi karya terbaik kami dalam UI/UX Design, Web Development, Mobile App, dan Digital Marketing yang telah membantu klien mencapai tujuan bisnis mereka.')}</p>
            <div className="hero-buttons">
              <a href={content.get('page-portfolio', 'hero.cta_primary.url', '#portfolio')} className="btn btn-primary">
                <i className="fas fa-eye"></i>
                {content.get('page-portfolio', 'hero.cta_primary.label', 'Lihat Semua Karya')}
              </a>
              <a href={content.get('page-portfolio', 'hero.cta_secondary.url', '/contact')} className="btn btn-secondary">
                <i className="fas fa-arrow-up-right-from-square"></i>
                {content.get('page-portfolio', 'hero.cta_secondary.label', 'Diskusi Proyek')}
              </a>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio-section">
          <div className="container">
            <h2 className="section-title">{content.get('page-portfolio', 'portfolio_title', 'Semua Karya Titik Visual')}</h2>
            <p className="section-subtitle">{content.get('page-portfolio', 'portfolio_subtitle', 'Kumpulan lengkap karya kami di berbagai kategori')}</p>

            <div className="portfolio-grid">
              {Array.from({ length: 50 }, (_, i) => i)
                .filter(i => content.get('page-portfolio', `items.${i}.title`, '').trim() !== '')
                .map((i) => (
                  <div className="project-card" key={i}>
                    <div className="card-image">
                      <img
                        src={getImg(content.get('page-portfolio', `items.${i}.image`, 'portfolio.png'))}
                        alt={content.get('page-portfolio', `items.${i}.title`, 'Project')}
                      />
                    </div>
                    <div className="card-content">
                      <div className="content-header">
                        <span className="project-category">
                          {content.get('page-portfolio', `items.${i}.category`, 'Kategori')}
                        </span>
                        <span className="project-year">
                          {content.get('page-portfolio', `items.${i}.year`, '2024')}
                        </span>
                      </div>
                      <h3 className="project-title">
                        {content.get('page-portfolio', `items.${i}.title`, 'Judul Project')}
                      </h3>
                      <p className="project-description">
                        {content.get('page-portfolio', `items.${i}.description`, 'Deskripsi Project')}
                      </p>
                      <div className="project-tech">
                        {Array.from({ length: 20 }, (_, j) => content.get('page-portfolio', `items.${i}.tags.${j}`, '').trim())
                          .filter((t) => t !== '')
                          .map((t, j2) => (
                            <span key={j2}>{t}</span>
                          ))}
                      </div>
                      <div className="project-footer">
                        <span className="client-name">
                          Client: {content.get('page-portfolio', `items.${i}.client`, 'Client')}
                        </span>
                        <a
                          href={content.get('page-portfolio', `items.${i}.link`, '/portfolio')}
                          className="project-link"
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
        <section className="cta-section">
          <div className="container">
            <h2>{content.get('page-portfolio', 'cta_title', 'Tertarik dengan Karya Kami?')}</h2>
            <p>{content.get('page-portfolio', 'cta_subtitle', 'Mari diskusikan bagaimana kami bisa membantu mewujudkan visi digital Anda')}</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary-cta">
                <i className="fas fa-arrow-up-right-from-square"></i> {content.get('page-portfolio', 'cta_primary', 'Diskusi Proyek')}
              </a>
              <a href="#portfolio" className="btn btn-secondary-cta">
                <i className="fas fa-eye"></i> {content.get('page-portfolio', 'cta_secondary', 'Lihat Semua Portfolio')}
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src={getImg('img.png')} alt="Titik Visual Logo" className="footer-logo" />
              <p>{content.get('page-portofolio', 'footer_brand_desc', 'Portfolio lengkap karya digital creative yang telah membantu berbagai klien mencapai kesuksesan.')}</p>
            </div>
            <div className="footer-links">
              <h4>Portfolio</h4>
              <ul>
                  <li><a href="/portfolio/ui-ux">UI/UX Design</a></li>
                  <li><a href="/portfolio/web-development">Web Development</a></li>
                  <li><a href="/portfolio/mobile-app">Mobile App</a></li>
                  <li><a href="/portfolio/branding">Branding</a></li>
                  <li><a href="/portfolio/social-media">Social Media</a></li>
                </ul>
              </div>
              <div className="footer-links">
                <h4>Kategori</h4>
                <ul>
                  <li><a href="/portfolio/featured">Featured Works</a></li>
                  <li><a href="/portfolio/case-studies">Case Studies</a></li>
                  <li><a href="/portfolio/client-stories">Client Stories</a></li>
                  <li><a href="/portfolio/awards">Awards</a></li>
                  <li><a href="/portfolio/recognition">Recognition</a></li>
                </ul>
              </div>
              <div className="footer-links">
                <h4>Kontak</h4>
                <ul>
                  <li>081804376001</li>
                  <li>titikvisualjogja@gmail.com</li>
                  <li>Yogyakarta, Indonesia</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>
                {content.get('page-portfolio', 'footer_line1_top', '© 2024 Titik Visual.')}<br />
                {content.get('page-portfolio', 'footer_line1_bottom', 'All rights reserved.')}
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
