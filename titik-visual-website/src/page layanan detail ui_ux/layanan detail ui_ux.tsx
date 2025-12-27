import React from 'react';
import './style.css';
import UiUxSection from './UiUxSection';
const images: any = (require as any).context('../img', false, /\.(png|jpe?g|svg)$/);
const getImg = (name: string) => images(`./${name}`);

interface Offering {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface ProcessStep {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  duration: string;
}

interface PortfolioItem {
  id: number;
  image: string;
  tag: string;
  title: string;
  description: string;
}

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  duration: string;
  features: string[];
  featured?: boolean;
}

interface Testimonial {
  id: number;
  text: string;
  authorName: string;
  authorPosition: string;
  authorImage: string;
}

const UIUXPage = () => {
  // Offerings data
  const offerings: Offering[] = [
    {
      id: 1,
      icon: 'fas fa-users',
      title: 'User Research & Analysis',
      description: 'Riset mendalam tentang target user dan behavior analysis'
    },
    {
      id: 2,
      icon: 'fas fa-desktop',
      title: 'Wireframing & Prototyping',
      description: 'Pembuatan wireframe dan prototype interaktif'
    },
    {
      id: 3,
      icon: 'fas fa-palette',
      title: 'Visual Design System',
      description: 'Design system yang konsisten dan scalable'
    },
    {
      id: 4,
      icon: 'far fa-eye',
      title: 'Usability Testing',
      description: 'Testing dengan real users untuk optimal experience'
    }
  ];

  // Process steps data
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      stepNumber: '01',
      title: 'Discovery & Research',
      description: 'Memahami business goals, target users, dan market research',
      duration: '1-2 hari'
    },
    {
      id: 2,
      stepNumber: '02',
      title: 'Information Architecture',
      description: 'Membuat struktur informasi dan user flow yang optimal',
      duration: '2-3 hari'
    },
    {
      id: 3,
      stepNumber: '03',
      title: 'Wireframing',
      description: 'Pembuatan wireframe low-fidelity dan high-fidelity',
      duration: '3-5 hari'
    },
    {
      id: 4,
      stepNumber: '04',
      title: 'Visual Design',
      description: 'Aplikasi visual design dan pembuatan design system',
      duration: '5-7 hari'
    },
    {
      id: 5,
      stepNumber: '05',
      title: 'Prototyping',
      description: 'Pembuatan prototype interaktif untuk testing',
      duration: '2-3 hari'
    },
    {
      id: 6,
      stepNumber: '06',
      title: 'Testing & Iteration',
      description: 'User testing dan refinement berdasarkan feedback',
      duration: '2-3 hari'
    }
  ];

  // Portfolio data
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image: getImg('portfolio_UI_UX.png'),
      tag: 'Mobile App UI/UX',
      title: 'E-Commerce Mobile App',
      description: 'Complete mobile app design untuk platform e-commerce dengan user experience yang optimal.'
    },
    {
      id: 2,
      image: getImg('portfolio_UI_UX.png'),
      tag: 'Web App UI/UX',
      title: 'SaaS Dashboard',
      description: 'Dashboard design untuk SaaS platform dengan data visualization yang clear.'
    },
    {
      id: 3,
      image: getImg('portfolio_UI_UX.png'),
      tag: 'Mobile App UI/UX',
      title: 'Banking Mobile App',
      description: 'Secure dan user-friendly banking app dengan modern interface.'
    }
  ];

  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: 'Basic UI/UX',
      price: 'Rp 2.500.000',
      duration: '2-3 minggu',
      features: [
        'User Research',
        'Wireframing (5 screens)',
        'Visual Design',
        'Basic Prototype',
        '2x Revisions'
      ]
    },
    {
      id: 2,
      name: 'Professional UI/UX',
      price: 'Rp 4.500.000',
      duration: '3-4 minggu',
      features: [
        'Comprehensive User Research',
        'Wireframing (10 screens)',
        'Complete Visual Design',
        'Interactive Prototype',
        'Design System',
        'Usability Testing',
        '3x Revisions'
      ],
      featured: true
    },
    {
      id: 3,
      name: 'Enterprise UI/UX',
      price: 'Rp 8.000.000',
      duration: '4-6 minggu',
      features: [
        'Full UX Research & Strategy',
        'Unlimited Screens',
        'Complete Design System',
        'Advanced Prototyping',
        'Multiple User Testing',
        'Developer Handoff',
        'Unlimited Revisions',
        '3 Months Support'
      ]
    }
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: '"Tim Titik Visual berhasil menciptakan UI/UX yang luar biasa untuk aplikasi kami. User engagement meningkat 40% setelah redesign!"',
      authorName: 'Sarah Johnson',
      authorPosition: 'Product Manager at TechStart Indonesia',
      authorImage: getImg('ui_ux.png')
    },
    {
      id: 2,
      text: '"Proses kerja yang sangat profesional dan hasil yang melampaui ekspektasi. Highly recommended!"',
      authorName: 'Ahmad Rizki',
      authorPosition: 'CEO at Digital Commerce',
      authorImage: getImg('ui_ux.png')
    }
  ];

  return (
    <div className="uiux-page">
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-left">
          <div className="item">
            <i className="fa-solid fa-phone"></i>
            <span>081804376001</span>
          </div>
          <div className="item">
            <i className="fa-solid fa-envelope"></i>
            <span>titikvisualjogja@gmail.com</span>
          </div>
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

      {/* MAIN NAVBAR */}
      <nav className="main-nav">
        <div className="nav-left">
          <img src={getImg('img.png')} alt="Titik Visual Logo" className="logo" />
        </div>
        <ul className="nav-right">
          <li><a href="../beranda/beranda.tsx">Home</a></li>
          <li><a href="../page-about/page-about.tsx">Profile</a></li>
          <li className="active"><a href="../page-layanan/page-layanan.tsx">Layanan</a></li>
          <li><a href="../page-portfolio/page-portfolio.tsx">Portfolio</a></li>
          <li><a href="../page-contact/page-contact.tsx">Kontak</a></li>
        </ul>
        <div className="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* BREADCRUMB */}
      <section className="breadcrumb">
        <div className="container">
          <a href="../beranda/beranda.tsx">Home</a> / <a href="/services">Services</a> / <span>UI/UX Design</span>
        </div>
      </section>

      <UiUxSection iconSrc={getImg('ui-ux desain.png')} imageSrc={getImg('ui_ux.png')} />

      {/* OFFERINGS SECTION */}
      <section className="offerings">
        <div className="container">
          <h2 className="section-title">Apa yang Kami Tawarkan</h2>
          <p className="section-subtitle">Layanan UI/UX Design Komprehensif yang mencakup seluruh proses dari riset hingga implementasi</p>
          <div className="offerings-grid">
            {offerings.map(offering => (
              <div className="offering-card" key={offering.id}>
                <div className="icon-wrapper">
                  <i className={offering.icon}></i>
                </div>
                <h3>{offering.title}</h3>
                <p>{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process">
        <div className="container">
          <h2 className="section-title">Proses Kerja Kami</h2>
          <p className="section-subtitle">Metodologi yang terbukti untuk hasil UI/UX yang optimal</p>
          <div className="process-grid">
            {processSteps.map(step => (
              <div className="process-card" key={step.id}>
                <div className="process-header">
                  <div className="process-number">{step.stepNumber}</div>
                  <h4>{step.title}</h4>
                </div>
                <p>{step.description}</p>
                <div className="process-duration">
                  <i className="far fa-clock"></i> {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="portfolio">
        <div className="container">
          <h2 className="section-title">Portfolio UI/UX Design</h2>
          <p className="section-subtitle">Beberapa karya UI/UX Design terbaik kami</p>
          <div className="portfolio-grid">
            {portfolioItems.map(item => (
              <div className="portfolio-card" key={item.id}>
                <img src={item.image} alt={item.title} className="portfolio-image" />
                <div className="portfolio-content">
                  <span className="portfolio-tag">{item.tag}</span>
                  <h3 className="portfolio-title">{item.title}</h3>
                  <p className="portfolio-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="portfolio-cta">
            <a href="../page-portfolio/page-portfolio.tsx" className="btn btn-outline-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Lihat Semua Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">Paket UI/UX Design</h2>
          <p className="section-subtitle">Pilih paket yang sesuai dengan kebutuhan proyek Anda</p>
          <div className="pricing-grid">
            {pricingPlans.map(plan => (
              <div className={`pricing-card ${plan.featured ? 'featured' : ''} ${plan.id === 1 ? 'basic' : ''} ${plan.id === 2 ? 'professional' : ''} ${plan.id === 3 ? 'enterprise' : ''}`} key={plan.id}>
                <h3>{plan.name}</h3>
                {(plan.id === 1 || plan.id === 2 || plan.id === 3) && <div className="price">{plan.price}</div>}
                <div className="duration">{plan.duration}</div>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}><i className="far fa-check-circle"></i> {feature}</li>
                  ))}
                </ul>
                <a href="../page-contact/page-contact.tsx" className={`btn ${plan.featured ? 'btn-gradient-blue' : 'btn-light'}`}>
                  <i className="fas fa-arrow-right"></i> Pilih Paket
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Apa Kata Klien Kami</h2>
          <p className="section-subtitle">Testimoni dari klien yang puas dengan layanan UI/UX Design kami</p>
          <div className="testimonial-grid">
            {testimonials.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>{testimonial.text}</p>
                <div className="author">
                  <img src={testimonial.authorImage} alt={testimonial.authorName} />
                  <div>
                    <h4>{testimonial.authorName}</h4>
                    <span>{testimonial.authorPosition}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <h2>Siap Membuat UI/UX yang Luar Biasa?</h2>
          <p>Konsultasikan kebutuhan UI/UX Design Anda dengan tim ahli kami secara gratis</p>
          <div className="cta-buttons">
            <a href="https://wa.me/6281804376001" className="btn btn-light" target="_blank" rel="noopener noreferrer">
              <i className="far fa-comment"></i> WhatsApp Sekarang
            </a>
            <a href="../page-portfolio/page-portfolio.tsx" className="btn btn-outline-light">
              <i className="fas fa-download"></i> Download Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column about">
              <img src={getImg('img.png')} alt="Titik Visual Logo" className="footer-logo" />
              <p>Spesialis UI/UX Design yang berfokus pada user experience dan business goals.</p>
            </div>
            <div className="footer-column">
              <h4>UI/UX Services</h4>
              <ul>
                <li><button onClick={() => window.location.href = '#user-research'} className="link-button">User Research</button></li>
                <li><button onClick={() => window.location.href = '#wireframing'} className="link-button">Wireframing</button></li>
                <li><button onClick={() => window.location.href = '#visual-design'} className="link-button">Visual Design</button></li>
                <li><button onClick={() => window.location.href = '#prototyping'} className="link-button">Prototyping</button></li>
                <li><button onClick={() => window.location.href = '#usability-testing'} className="link-button">Usability Testing</button></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><button onClick={() => window.location.href = '#design-process'} className="link-button">Design Process</button></li>
                <li><button onClick={() => window.location.href = '#case-studies'} className="link-button">Case Studies</button></li>
                <li><button onClick={() => window.location.href = '#design-system'} className="link-button">Design System</button></li>
                <li><button onClick={() => window.location.href = '#ui-kit'} className="link-button">UI Kit</button></li>
                <li><button onClick={() => window.location.href = '#blog'} className="link-button">Blog</button></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Kontak</h4>
              <p>081804376001</p>
              <p>titikvisualjogja@gmail.com</p>
              <p>Yogyakarta, Indonesia</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Titik Visual. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UIUXPage;
