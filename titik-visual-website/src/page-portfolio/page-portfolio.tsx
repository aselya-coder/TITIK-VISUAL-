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
            <h1>{content.get('page-portofolio', 'hero_title', 'Portfolio Kami')}</h1>
            <p>{content.get('page-portofolio', 'hero_subtitle', 'Jelajahi koleksi karya terbaik kami dalam UI/UX Design, Web Development, Mobile App, dan Digital Marketing yang telah membantu klien mencapai tujuan bisnis mereka.')}</p>
            <div className="hero-buttons">
              <a href="#portfolio" className="btn btn-primary">
                <i className="fas fa-eye"></i>
                {content.get('page-portofolio', 'cta_all_works_label', 'Lihat Semua Karya')}
              </a>
              <a href="/contact" className="btn btn-secondary">
                <i className="fas fa-arrow-up-right-from-square"></i>
                {content.get('page-portofolio', 'cta_discuss_label', 'Diskusi Proyek')}
              </a>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio-section">
          <div className="container">
            <h2 className="section-title">{content.get('page-portofolio', 'section_title', 'Featured Projects')}</h2>
            <p className="section-subtitle">{content.get('page-portofolio', 'section_subtitle', 'Karya-karya unggulan yang menjadi kebanggaan kami')}</p>

            <div className="portfolio-grid">
              {/* Project Card 1 */}
              <div className="project-card">
                <div className="card-image">
                  <img src={portfolioImage} alt="E-Commerce Mobile App" />
                  <span className="project-tag">Featured</span>
                </div>
                <div className="card-content">
                  <div className="content-header">
                    <span className="project-category">UI/UX Design</span>
                    <span className="project-year">2024</span>
                  </div>
                  <h3 className="project-title">E-Commerce Mobile App</h3>
                  <p className="project-description">Complete mobile app design untuk platform e-commerce 
                    dengan user experience yang optimal dan conversion rate
                    tinggi.</p>
                  <div className="project-tech">
                    <span>Mobile</span>
                    <span>E-commerce</span>
                    <span>iOS</span>
                  </div>
                  <div className="project-footer">
                    <span className="client-name">Client: ShopNow Indonesia</span>
                    <a href="/portfolio" className="project-link">
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="project-card">
                <div className="card-image">
                  <img src={portfolioImage} alt="SaaS Dashboard Design" />
                  <span className="project-tag">Featured</span>
                </div>
                <div className="card-content">
                  <div className="content-header">
                    <span className="project-category">UI/UX Design</span>
                    <span className="project-year">2024</span>
                  </div>
                  <h3 className="project-title">SaaS Dashboard Design</h3>
                  <p className="project-description">Dashboard design untuk SaaS platform dengan data 
                    visualization yang clear dan user-friendly interface.</p>
                  <div className="project-tech">
                    <span>Web App</span>
                    <span>Dashboard</span>
                    <span>SaaS</span>
                  </div>
                  <div className="project-footer">
                    <span className="client-name">Client: DataFlow Solutions</span>
                    <a href="/portfolio" className="project-link">
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="project-card">
                <div className="card-image">
                  <img src={portfolioImage} alt="Banking Mobile App" />
                  <span className="project-tag">Featured</span>
                </div>
                <div className="card-content">
                  <div className="content-header">
                    <span className="project-category">Mobile App</span>
                    <span className="project-year">2023</span>
                  </div>
                  <h3 className="project-title">Banking Mobile App</h3>
                  <p className="project-description">Secure dan user-friendly banking app dengan modern 
                    interface dan advanced security features.</p>
                  <div className="project-tech">
                    <span>Mobile App</span>
                    <span>Banking</span>
                    <span>Security</span>
                  </div>
                  <div className="project-footer">
                    <span className="client-name">Client: SecureBank Digital</span>
                    <a href="/portfolio" className="project-link">
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 4 */}
              <div className="project-card">
                <div className="card-image">
                  <img src={portfolioImage} alt="E-Commerce Mobile App" />
                  <span className="project-tag">Featured</span>
                </div>
                <div className="card-content">
                  <div className="content-header">
                    <span className="project-category">UI/UX Design</span>
                    <span className="project-year">2024</span>
                  </div>
                  <h3 className="project-title">E-Commerce Mobile App</h3>
                  <p className="project-description">Complete mobile app design untuk platform e-commerce
                    dengan user experience yang optimal dan conversion rate
                    tinggi.</p>
                  <div className="project-tech">
                    <span>Mobile</span>
                    <span>E-commerce</span>
                    <span>iOS</span>
                  </div>
                  <div className="project-footer">
                    <span className="client-name">Client: ShopNow Indonesia</span>
                    <a href="/portfolio" className="project-link">
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 5 */}
              <div className="project-card">
                <div className="card-image">
                  <img src={portfolioImage} alt="SaaS Dashboard Design" />
                  <span className="project-tag">Featured</span>
                </div>
                <div className="card-content">
                  <div className="content-header">
                    <span className="project-category">UI/UX Design</span>
                    <span className="project-year">2024</span>
                  </div>
                  <h3 className="project-title">SaaS Dashboard Design</h3>
                  <p className="project-description">Dashboard design untuk SaaS platform dengan data 
                    visualization yang clear dan user-friendly interface.</p>
                  <div className="project-tech">
                    <span>Web App</span>
                    <span>Dashboard</span>
                    <span>SaaS</span>
                  </div>
                  <div className="project-footer">
                    <span className="client-name">Client: DataFlow Solutions</span>
                    <a href="/portfolio" className="project-link">
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 6 */}
              <div className="project-card">
                <div className="card-image">
                  <img src={portfolioImage} alt="Corporate Website" />
                </div>
                <div className="card-content">
                  <div className="content-header">
                    <span className="project-category">Web Development</span>
                    <span className="project-year">2024</span>
                  </div>
                  <h3 className="project-title">Corporate Website</h3>
                  <p className="project-description">Website corporate yang modern dan professional dengan
                    CMS integration untuk easy content management.</p>
                  <div className="project-tech">
                    <span>Website</span>
                    <span>Corporate</span>
                    <span>Responsive</span>
                  </div>
                  <div className="project-footer">
                    <span className="client-name">Client: PT. Maju Bersama</span>
                    <a href="/portfolio" className="project-link">
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 7 */}
              <div className="project-card">
                <div className="card-image">
                  <img src={portfolioImage} alt="Banking Mobile App" />
                  <span className="project-tag">Featured</span>
                </div>
                <div className="card-content">
                  <div className="content-header">
                    <span className="project-category">Mobile App</span>
                    <span className="project-year">2023</span>
                  </div>
                  <h3 className="project-title">Banking Mobile App</h3>
                  <p className="project-description">Secure dan user-friendly banking app dengan modern
                    interface dan advanced security features.</p>
                  <div className="project-tech">
                    <span>Mobile App</span>
                    <span>Banking</span>
                    <span>Security</span>
                  </div>
                  <div className="project-footer">
                    <span className="client-name">Client: SecureBank Digital</span>
                    <a href="/portfolio" className="project-link">
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 8 */}
              <div className="project-card">
                <div className="card-image">
                  <img src={portfolioImage} alt="Brand Identity Package" />
                </div>
                <div className="card-content">
                  <div className="content-header">
                    <span className="project-category">Branding</span>
                    <span className="project-year">2024</span>
                  </div>
                  <h3 className="project-title">Brand Identity Package</h3>
                  <p className="project-description">Complete brand identity package termasuk logo, color
                    palette, typography, dan brand guidelines.</p>
                  <div className="project-tech">
                    <span>Logo</span>
                    <span>Brand Identity</span>
                    <span>Guidelines</span>
                  </div>
                  <div className="project-footer">
                    <span className="client-name">Client: GreenTech Startup</span>
                    <a href="/portfolio" className="project-link">
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 9 */}
              <div className="project-card">
                <div className="card-image">
                  <img src={portfolioImage} alt="Social Media Campaign" />
                </div>
                <div className="card-content">
                  <div className="content-header">
                    <span className="project-category">Social Media</span>
                    <span className="project-year">2024</span>
                  </div>
                  <h3 className="project-title">Social Media Campaign</h3>
                  <p className="project-description">Social media campaign design untuk fashion brand dengan
                    consistent visual identity dan engaging content.</p>
                  <div className="project-tech">
                    <span>Social Media</span>
                    <span>Campaign</span>
                    <span>Instagram</span>
                  </div>
                  <div className="project-footer">
                    <span className="client-name">Client: Fashion Brand Co</span>
                    <a href="/portfolio" className="project-link">
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 10 */}
              <div className="project-card">
                <div className="card-image">
                  <img src={portfolioImage} alt="Restaurant Website" />
                </div>
                <div className="card-content">
                  <div className="content-header">
                    <span className="project-category">Web Development</span>
                    <span className="project-year">2023</span>
                  </div>
                  <h3 className="project-title">Restaurant Website</h3>
                  <p className="project-description">Website restaurant dengan online menu, table booking
                    system, dan gallery yang menarik.</p>
                  <div className="project-tech">
                    <span>Website</span>
                    <span>Restaurant</span>
                    <span>Online Menu</span>
                  </div>
                  <div className="project-footer">
                    <span className="client-name">Client: Rasa Nusantara</span>
                    <a href="/portfolio" className="project-link">
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 11 */}
              <div className="project-card">
                <div className="card-image">
                  <img src={portfolioImage} alt="Fitness App UI/UX" />
                  <span className="project-tag">Featured</span>
                </div>
                <div className="card-content">
                  <div className="content-header">
                    <span className="project-category">UI/UX Design</span>
                    <span className="project-year">2024</span>
                  </div>
                  <h3 className="project-title">Fitness App UI/UX</h3>
                  <p className="project-description">Fitness tracking app dengan motivational design dan
                    comprehensive workout planning features.</p>
                  <div className="project-tech">
                    <span>Mobile</span>
                    <span>Fitness</span>
                    <span>Health</span>
                  </div>
                  <div className="project-footer">
                    <span className="client-name">Client: FitLife App</span>
                    <a href="/portfolio" className="project-link">
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 12 */}
              <div className="project-card">
                <div className="card-image">
                  <img src={portfolioImage} alt="E-Learning Platform" />
                </div>
                <div className="card-content">
                  <div className="content-header">
                    <span className="project-category">Web Development</span>
                    <span className="project-year">2023</span>
                  </div>
                  <h3 className="project-title">E-Learning Platform</h3>
                  <p className="project-description">E-learning platform dengan interactive course content dan
                    comprehensive student management system.</p>
                  <div className="project-tech">
                    <span>Web App</span>
                    <span>Education</span>
                    <span>LMS</span>
                  </div>
                  <div className="project-footer">
                    <span className="client-name">Client: EduTech Indonesia</span>
                    <a href="/portfolio" className="project-link">
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Tertarik dengan Karya Kami?</h2>
            <p>Mari diskusikan bagaimana kami bisa membantu mewujudkan visi digital Anda</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary-cta">
                <i className="fas fa-arrow-up-right-from-square"></i> Diskusi Proyek
              </a>
              <a href="#portfolio" className="btn btn-secondary-cta">
                <i className="fas fa-eye"></i> Lihat Semua Portfolio
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
