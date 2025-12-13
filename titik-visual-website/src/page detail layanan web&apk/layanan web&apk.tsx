import React from 'react';
import './style.css';

interface Technology {
  id: number;
  name: string;
  icon: string;
  iconClass: string;
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
  category: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  duration: string;
  bestFor: string;
  features: string[];
  featured?: boolean;
}

interface Testimonial {
  id: number;
  text: string;
  clientName: string;
  clientPosition: string;
  clientImage: string;
}

const WebsiteAppPage = () => {
  // Technology data
  const technologies: Technology[] = [
    {
      id: 1,
      name: 'React/Next.js',
      icon: 'fa-solid fa-code',
      iconClass: 'icon-blue'
    },
    {
      id: 2,
      name: 'Vue.js/Nuxt.js',
      icon: 'fa-solid fa-code',
      iconClass: 'icon-green'
    },
    {
      id: 3,
      name: 'Angular',
      icon: 'fa-solid fa-code',
      iconClass: 'icon-red'
    },
    {
      id: 4,
      name: 'WordPress',
      icon: 'fa-solid fa-globe',
      iconClass: 'icon-blue'
    },
    {
      id: 5,
      name: 'Laravel/PHP',
      icon: 'fa-solid fa-code',
      iconClass: 'icon-red'
    },
    {
      id: 6,
      name: 'Node.js',
      icon: 'fa-solid fa-code',
      iconClass: 'icon-green'
    },
    {
      id: 7,
      name: 'Python/Django',
      icon: 'fa-solid fa-code',
      iconClass: 'icon-blue'
    },
    {
      id: 8,
      name: 'Shopify',
      icon: 'fa-solid fa-mobile-screen-button',
      iconClass: 'icon-green'
    },
    {
      id: 9,
      name: 'Flutter',
      icon: 'fa-solid fa-mobile-screen-button',
      iconClass: 'icon-blue'
    },
    {
      id: 10,
      name: 'React Native',
      icon: 'fa-solid fa-mobile-screen-button',
      iconClass: 'icon-purple'
    },
    {
      id: 11,
      name: 'MySQL/PostgreSQL',
      icon: 'fa-solid fa-code',
      iconClass: 'icon-orange'
    },
    {
      id: 12,
      name: 'MongoDB',
      icon: 'fa-solid fa-code',
      iconClass: 'icon-green'
    }
  ];

  // Process steps data
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      stepNumber: '01',
      title: 'Discovery & Planning',
      description: 'Analisis kebutuhan, target audience, dan goals bisnis',
      duration: '1-2 hari'
    },
    {
      id: 2,
      stepNumber: '02',
      title: 'Design & Wireframe',
      description: 'Pembuatan wireframe dan design mockup',
      duration: '3-5 hari'
    },
    {
      id: 3,
      stepNumber: '03',
      title: 'Development',
      description: 'Coding dan development website dengan teknologi modern',
      duration: '2-4 minggu'
    },
    {
      id: 4,
      stepNumber: '04',
      title: 'Testing & QA',
      description: 'Testing functionality, responsiveness, dan performance',
      duration: '2-3 hari'
    },
    {
      id: 5,
      stepNumber: '05',
      title: 'Launch & Support',
      description: 'Deploy website dan training penggunaan CMS',
      duration: '1-2 hari'
    }
  ];

  // Portfolio data
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      category: 'Business Website',
      title: 'Corporate Website',
      description: 'Website corporate modern dengan CMS integration dan multi-language support',
      image: '../img/portfolio website.png',
      tags: ['Multi-page', 'CMS', 'Contact Forms', 'Gallery']
    },
    {
      id: 2,
      category: 'Online Store',
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce lengkap dengan payment gateway dan inventory management',
      image: '../img/portfolio website.png',
      tags: ['Shopping Cart', 'Payment Gateway', 'Admin Panel', 'Analytics']
    },
    {
      id: 3,
      category: 'Marketing Landing',
      title: 'Landing Page Campaign',
      description: 'Landing page high-converting untuk campaign marketing dan lead generation',
      image: '../img/portfolio website.png',
      tags: ['Lead Forms', 'A/B Testing', 'Analytics', 'Mobile Optimized']
    }
  ];

  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: 'Landing Page',
      price: 'Rp 3.500.000',
      duration: '1-2 minggu',
      bestFor: 'Best for: Campaign Marketing',
      features: [
        'Single Page Design',
        'Responsive Layout',
        'Contact Form',
        'SEO Basic',
        'Google Analytics',
        '2x Revisions',
        '1 Bulan Support'
      ]
    },
    {
      id: 2,
      name: 'Business Website',
      price: 'Rp 7.500.000',
      duration: '3-4 minggu',
      bestFor: 'Best for: Corporate & SME',
      features: [
        'Multi-page Website (5-10 pages)',
        'CMS Integration',
        'Contact Forms',
        'Gallery & Portfolio',
        'SEO Optimization',
        'Google Analytics',
        '3x Revisions',
        '3 Bulan Support'
      ],
      featured: true
    },
    {
      id: 3,
      name: 'E-Commerce',
      price: 'Rp 15.000.000',
      duration: '4-6 minggu',
      bestFor: 'Best for: Online Store',
      features: [
        'Full E-commerce Platform',
        'Product Management',
        'Shopping Cart & Checkout',
        'Payment Gateway Integration',
        'Admin Dashboard',
        'Inventory Management',
        'SEO & Analytics',
        'Unlimited Revisions',
        '6 Bulan Support'
      ]
    }
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: '"Website yang dibuat Titik Visual sangat profesional dan user-friendly. Traffic website kami meningkat 200% setelah redesign!"',
      clientName: 'Budi Santoso',
      clientPosition: 'Marketing Director at PT. Maju Bersama',
      clientImage: '../img/Website Development Mockup.png'
    },
    {
      id: 2,
      text: '"E-commerce platform yang dibuat sangat membantu bisnis online kami. Penjualan meningkat drastis!"',
      clientName: 'Sari Dewi',
      clientPosition: 'Owner at Toko Online Fashionista',
      clientImage: '../img/Website Development Mockup.png'
    }
  ];

  return (
    <div className="website-app-page">
      {/* TOP BAR & NAVBAR */}
      <div className="top-bar">
        <div className="top-left">
          <div className="item"><i className="fa-solid fa-phone"></i><span>081804376001</span></div>
          <div className="item"><i className="fa-solid fa-envelope"></i><span>titikvisualjogja@gmail.com</span></div>
        </div>
        <div className="top-right">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
      <nav className="main-nav">
        <div className="nav-left"><img src="../img/img.png" alt="Titik Visual Logo" className="logo" /></div>
        <ul className="nav-right">
          <li><a href="../beranda/beranda.tsx">Home</a></li>
          <li><a href="../page-about/page-about.tsx">Profile</a></li>
          <li className="active"><a href="../page-layanan/page-layanan.tsx">Layanan</a></li>
          <li><a href="../page-portfolio/page-portfolio.tsx">Portfolio</a></li>
          <li><a href="../page-contact/page-contact.tsx">Kontak</a></li>
        </ul>
        <div className="mobile-menu-toggle"><span></span><span></span><span></span></div>
      </nav>

      {/* BREADCRUMB */}
      <section className="breadcrumb">
        <div className="container">
          <a href="../beranda/beranda.tsx">Home</a> / <a href="../page-layanan/page-layanan.tsx">Services</a> / <span>Website & Aplikasi</span>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="subtitle"><i className="fa-solid fa-globe"></i>Website & Aplikasi Development</span>
            <h1>
              <span className="gradient-text">Website & Aplikasi</span>
              <span className="gradient-text">Professional</span>
              <span className="subtitle-text">yang Convert</span>
            </h1>
            <p>Bangun presence online yang kuat dengan website responsif, cepat, dan
              SEO-friendly. Dari landing page high-converting hingga e-commerce
              platform lengkap, kami ciptakan website yang mendorong pertumbuhan
              bisnis Anda. Selain itu, kami juga mengembangkan aplikasi mobile yang
              inovatif dan user-friendly.</p>
            <div className="hero-buttons">
              <a href="https://wa.me/6281804376001" className="btn btn-gradient" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-comment"></i> Konsultasi Gratis</a>
              <a href="../page-portfolio/page-portfolio.tsx" className="btn btn-outline"><i className="far fa-eye"></i> Lihat Portfolio</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image">
              <img src="../img/Website Development Mockup.png" alt="Website Development Mockup" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Mengapa Pilih Website Kami?</h2>
            <p>Website yang kami buat tidak hanya cantik, tapi juga powerful dan result-oriented</p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="icon">
                <i className="fa-solid fa-display"></i>
              </div>
              <h3>Responsive Design</h3>
              <p>Website yang tampil sempurna di semua device</p>
            </div>
            <div className="feature-item">
              <div className="icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <h3>SEO Optimized</h3>
              <p>Optimasi SEO untuk ranking Google yang lebih baik</p>
            </div>
            <div className="feature-item">
              <div className="icon">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3>Fast Loading</h3>
              <p>Performa website yang cepat dan optimal</p>
            </div>
            <div className="feature-item">
              <div className="icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>Secure & Reliable</h3>
              <p>Keamanan tingkat tinggi dengan SSL certificate</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="technologies">
        <div className="container">
          <div className="section-title">
            <h2>Teknologi yang Kami Gunakan untuk Website & Aplikasi</h2>
            <p>Platform dan teknologi terdepan untuk hasil yang optimal</p>
          </div>
          <div className="tech-grid">
            {technologies.map(tech => (
              <div className="tech-item" key={tech.id}>
                <div className={`icon ${tech.iconClass}`}>
                  <i className={tech.icon}></i>
                </div>
                <h3>{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process">
        <div className="container">
          <div className="section-title">
            <h2>Proses Development</h2>
            <p>Metodologi yang terbukti untuk website berkualitas tinggi</p>
          </div>
          <div className="process-grid">
            {processSteps.map(step => (
              <div className="process-item" key={step.id}>
                <div className="process-number">{step.stepNumber}</div>
                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="time-badge">
                    <i className="fa-regular fa-clock"></i> {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio Website</h2>
            <p>Beberapa website terbaik yang telah kami kembangkan</p>
          </div>

          <div className="portfolio-grid">
            {portfolioItems.map(item => (
              <div className="portfolio-item" key={item.id}>
                <div className="portfolio-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="portfolio-content">
                  <span className="portfolio-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="portfolio-tags">
                    {item.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="portfolio-cta">
            <a href="../page-portfolio/page-portfolio.tsx" className="btn-secondary">
              <i className="fa-solid fa-eye"></i> Lihat Semua Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-title">
            <h2>Paket Website</h2>
            <p>Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map(plan => (
              <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={plan.id}>
                <h3 className="plan-name">{plan.name}</h3>
                <div className="price">{plan.price}</div>
                <div className="duration">{plan.duration}</div>
                <div className="best-for">{plan.bestFor}</div>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index}><i className="far fa-check-circle"></i> {feature}</li>
                  ))}
                </ul>
                <a href="../page-contact/page-contact.tsx" className={`btn ${plan.featured ? 'btn-gradient' : 'btn-light'}`}>
                  <i className="fa-solid fa-arrow-right"></i> Pilih Paket
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Apa Kata Klien Kami</h2>
            <p>Testimoni dari klien yang puas dengan website kami</p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="text">{testimonial.text}</p>
                <div className="author">
                  <img src={testimonial.clientImage} alt={testimonial.clientName} />
                  <div className="info">
                    <h4>{testimonial.clientName}</h4>
                    <p>{testimonial.clientPosition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta" className="cta-section">
        <div className="container">
          <h2>Siap Membuat Website & Aplikasi Impian Anda?</h2>
          <p>Konsultasikan kebutuhan website dan aplikasi Anda dengan tim developer ahli kami secara gratis</p>
          <div className="actions">
            <a href="https://wa.me/6281804376001" className="btn btn-light" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-comment"></i> WhatsApp Sekarang</a>
            <a href="../page-portfolio/page-portfolio.tsx" className="btn btn-outline-light"><i className="fa-solid fa-download"></i> Download Portfolio</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Footer Column 1: About */}
            <div className="footer-col">
              <img src="../img/img.png" alt="Titik Visual Logo" className="footer-logo" />
              <p>Spesialis website development yang berfokus pada performa, SEO, dan user experience.</p>
            </div>

            {/* Footer Column 2: Services */}
            <div className="footer-col">
              <h4>Website & App Services</h4>
              <ul className="footer-links">
                <li><button onClick={() => window.location.href = '#landing-page'} className="link-button">Landing Page</button></li>
                <li><button onClick={() => window.location.href = '#business-website'} className="link-button">Business Website</button></li>
                <li><button onClick={() => window.location.href = '#ecommerce'} className="link-button">E-Commerce</button></li>
                <li><button onClick={() => window.location.href = '#web-application'} className="link-button">Web Application</button></li>
                <li><button onClick={() => window.location.href = '#mobile-applications'} className="link-button">Mobile Applications</button></li>
                <li><button onClick={() => window.location.href = '#progressive-web-apps'} className="link-button">Progressive Web Apps</button></li>
                <li><button onClick={() => window.location.href = '#cms-integration'} className="link-button">CMS Integration</button></li>
              </ul>
            </div>

            {/* Footer Column 3: Technologies */}
            <div className="footer-col">
              <h4>Technologies</h4>
              <ul className="footer-links">
                <li><button onClick={() => window.location.href = '#react-nextjs'} className="link-button">React/Next.js</button></li>
                <li><button onClick={() => window.location.href = '#wordpress'} className="link-button">WordPress</button></li>
                <li><button onClick={() => window.location.href = '#shopify'} className="link-button">Shopify</button></li>
                <li><button onClick={() => window.location.href = '#custom-php'} className="link-button">Custom PHP</button></li>
                <li><button onClick={() => window.location.href = '#seo-optimization'} className="link-button">SEO Optimization</button></li>
              </ul>
            </div>

            {/* Footer Column 4: Contact */}
            <div className="footer-col">
              <h4>Kontak</h4>
              <ul className="footer-contact">
                <li>081804376001</li>
                <li>titikvisualjogja@gmail.com</li>
                <li>Yogyakarta, Indonesia</li>
              </ul>
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

export default WebsiteAppPage;