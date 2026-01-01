import React from 'react';
import './style.css';
import heroImage from '../img/Page Detail Layanan Logo Design.png';
import logoImg from '../img/img.png';
import iconKonsep from '../img/icon konsep unik .png';
import iconMultiple from '../img/icon multiple.png';
import iconFile from '../img/icon file.png';
import iconUnlimited from '../img/icon unlimited.png';
import jenisLogoImg from '../img/jenis logo.png';
import portfolioImg from '../img/portfolio logo desain.png';

interface PortfolioItem {
  id: number;
  category: string;
  style: string;
  title: string;
  description: string;
  image: string;
}

interface Testimonial {
  id: number;
  text: string;
  clientName: string;
  clientPosition: string;
  clientImage: string;
}

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  duration: string;
  bestFor: string;
  features: string[];
  recommended?: boolean;
}

const LogoDesignPage = () => {
  // Portfolio data
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      category: 'Technology',
      style: 'Minimalist',
      title: 'Tech Startup Logo',
      description: 'Logo modern untuk startup teknologi dengan konsep minimalis dan futuristik',
      image: portfolioImg
    },
    {
      id: 2,
      category: 'Food & Beverage',
      style: 'Classic',
      title: 'Restaurant Brand',
      description: 'Logo restaurant dengan nuansa warm dan appetizing untuk brand makanan',
      image: portfolioImg
    },
    {
      id: 3,
      category: 'Fashion',
      style: 'Elegant',
      title: 'Fashion Brand Logo',
      description: 'Logo fashion brand dengan typography elegant dan sophisticated',
      image: portfolioImg
    }
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: '"Logo yang dibuat Titik Visual sangat mencerminkan visi startup kami. Prosesnya profesional dan hasilnya melampaui ekspektasi!"',
      clientName: 'Ahmad Rizki',
      clientPosition: 'Founder at StartupHub Jakarta',
      clientImage: heroImage
    },
    {
      id: 2,
      text: '"Tim sangat memahami brand kami. Logo yang dihasilkan elegant dan memorable. Highly recommended!"',
      clientName: 'Maya Sari',
      clientPosition: 'Owner at Boutique Fashion',
      clientImage: heroImage
    }
  ];

  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: 'Logo Basic',
      price: 'Rp 500.000',
      duration: '3-5 hari',
      bestFor: 'Best for: Startup & UKM',
      features: [
        '3 Konsep Logo',
        '2x Major Revisions',
        'File PNG & JPG',
        'Logo Hitam Putih',
        'Basic Brand Guidelines'
      ]
    },
    {
      id: 2,
      name: 'Logo Professional',
      price: 'Rp 1.200.000',
      duration: '5-7 hari',
      bestFor: 'Best for: Business & Corporate',
      features: [
        '5 Konsep Logo',
        'Unlimited Revisions',
        'File AI, EPS, PNG, JPG, SVG',
        'Color & Monochrome Version',
        'Complete Brand Guidelines',
        'Business Card Design',
        'Letterhead Template'
      ],
      recommended: true
    },
    {
      id: 3,
      name: 'Brand Identity Package',
      price: 'Rp 2.500.000',
      duration: '1-2 minggu',
      bestFor: 'Best for: Complete Branding',
      features: [
        'Logo Professional Package',
        'Color Palette',
        'Typography System',
        'Brand Pattern/Texture',
        'Social Media Kit',
        'Stationery Design',
        'Brand Manual Lengkap',
        '3 Bulan Support'
      ]
    }
  ];

  // Process steps data
  const processSteps = [
    {
      step: '01',
      title: 'Brief & Research',
      description: 'Memahami brand, target audience, dan kompetitor',
      duration: '1 hari'
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'Brainstorming dan sketching konsep awal',
      duration: '2-3 hari'
    },
    {
      step: '03',
      title: 'Design Creation',
      description: 'Pembuatan 3-5 konsep logo digital',
      duration: '3-4 hari'
    },
    {
      step: '04',
      title: 'Revision & Refinement',
      description: 'Revisi berdasarkan feedback klien',
      duration: '2-3 hari'
    },
    {
      step: '05',
      title: 'Final Delivery',
      description: 'Delivery file final dan brand guidelines',
      duration: '1 hari'
    }
  ];

  // Logo types data
  const logoTypes = [
    {
      name: 'Wordmark Logo',
      description: 'Logo berbasis teks dengan typography yang kuat',
      examples: ['Google', 'Coca-Cola', 'FedEx']
    },
    {
      name: 'Pictorial Logo',
      description: 'Logo dengan simbol atau ikon yang memorable',
      examples: ['Apple', 'Twitter', 'Nike']
    },
    {
      name: 'Combination Logo',
      description: 'Kombinasi teks dan simbol yang seimbang',
      examples: ['Adidas', 'Burger King', 'Lacoste']
    },
    {
      name: 'Emblem Logo',
      description: 'Logo dengan style badge atau seal yang elegan',
      examples: ['Starbucks', 'BMW', 'Harley Davidson']
    }
  ];

  const WhyChooseLogoSection: React.FC = () => (
    <section className="features section-padding" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>Mengapa Pilih Logo Design Kami?</h2>
          <p>Logo yang kami buat tidak hanya indah, tapi juga strategis dan meaningful.</p>
        </div>
        <div className="features-grid">
          <div className="feature-item">
            <div className="icon">
              <img src={iconKonsep} alt="Konsep Unik Icon" />
            </div>
            <h3>Konsep Unik</h3>
            <p>Logo original yang mencerminkan identitas brand Anda.</p>
          </div>
          <div className="feature-item">
            <div className="icon">
              <img src={iconMultiple} alt="Multiple Variations Icon" />
            </div>
            <h3>Multiple Variations</h3>
            <p>Berbagai variasi logo untuk berbagai kebutuhan.</p>
          </div>
          <div className="feature-item">
            <div className="icon">
              <img src={iconFile} alt="File Format Lengkap Icon" />
            </div>
            <h3>File Format Lengkap</h3>
            <p>AI, EPS, PNG, JPG, SVG untuk semua keperluan.</p>
          </div>
          <div className="feature-item">
            <div className="icon">
              <img src={iconUnlimited} alt="Unlimited Revisions Icon" />
            </div>
            <h3>Unlimited Revisions</h3>
            <p>Revisi tanpa batas hingga Anda puas.</p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="logo-design-page">
      

      {/* BREADCRUMB */}
      <section className="breadcrumb">
        <div className="container">
          <a href="../beranda/beranda.tsx">Home</a> / <a href="../page-layanan/page-layanan.tsx">Services</a> / <span>Logo Design</span>
        </div>
      </section>

      {/* HERO SECTION */}
      <section
        className="hero"
        style={{
          background: '#FFFFFF',
          padding: '80px 0'
        }}
      >
        <div
          className="container hero-container"
        >
          {/* hero-left (TEXT AREA) */}
          <div className="hero-left hero-content" style={{ textAlign: 'left' }}>
            <div className="badge" style={{ marginBottom: 16 }}>
              <span className="subtitle" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <i className="fa-solid fa-palette"></i>
                Professional Logo Design
              </span>
            </div>
            <div className="hero-title" style={{ marginBottom: 16 }}>
              <h1 style={{ fontWeight: 800, lineHeight: 1.15 }}>
                <span className="gradient-text">Logo yang Memorable</span>
                <span className="subtitle-text" style={{ display: 'block', color: '#111827', fontWeight: 800 }}>
                  untuk Brand Anda
                </span>
              </h1>
            </div>
            <p
              className="hero-desc"
              style={{ maxWidth: 720, color: '#6b7280', marginBottom: 28 }}
            >
              Ciptakan identitas visual yang kuat dengan logo profesional yang
              mencerminkan nilai dan kepribadian brand Anda. Dari konsep hingga
              eksekusi, kami pastikan logo Anda memorable dan timeless.
            </p>
            <div className="hero-actions hero-buttons">
              <a
                href="https://wa.me/6281804376001"
                className="btn btn-gradient"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  borderRadius: 12,
                  padding: '14px 28px',
                  background: 'linear-gradient(90deg, #F97316, #EC4899)',
                  color: '#ffffff'
                }}
              >
                <i className="fa-regular fa-comment"></i>
                <span>Konsultasi Gratis</span>
              </a>
              <a
                href="../page-portfolio/page-portfolio.tsx"
                className="btn btn-outline"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 12,
                  padding: '14px 28px',
                  borderWidth: 2,
                  borderStyle: 'solid',
                  borderColor: 'rgba(235, 86, 31, 0.45)',
                  color: '#EA580C'
                }}
              >
                <i className="far fa-eye"></i>
                <span>Lihat Portfolio</span>
              </a>
            </div>
          </div>
          {/* hero-right (IMAGE AREA) */}
          <div className="hero-right">
            <div
              className="image-wrapper"
              style={{
                position: 'relative',
                justifySelf: 'center'
              }}
            >
              <div
                className="image-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 20,
                  padding: 20,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.07)',
                  position: 'relative',
                  zIndex: 1,
                  border: '1px solid #F3E8FF',
                  maxWidth: '100%'
                }}
              >
                <img
                  src={heroImage}
                  alt="Logo Preview"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: 12,
                    display: 'block'
                  }}
                />
              </div>
              <div
                className="decorative-circle"
                style={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  background: 'linear-gradient(135deg, #60A5FA, #22D3EE)',
                  borderRadius: '50%',
                  zIndex: 2
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <WhyChooseLogoSection />

      {/* LOGO TYPES SECTION */}
      <section className="logo-types section-padding" data-aos="fade-up">
        <div className="container">
          <div className="section-title">
            <h2>Jenis Logo yang Kami Buat</h2>
            <p>Berbagai style logo untuk berbagai kebutuhan brand</p>
          </div>
          <div className="logo-types-grid">
            {logoTypes.map((type, index) => (
              <div className="logo-type-item" key={index}>
                <div className="logo-type-img">
                  <img src={jenisLogoImg} alt={`Contoh ${type.name}`} />
                </div>
                <h3>{type.name}</h3>
                <p>{type.description}</p>
                <div className="brand-examples">
                  <span>Contoh Brand:</span>
                  <div className="brand-tags">
                    {type.examples.map((example, idx) => (
                      <span className="tag" key={idx}>{example}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process section-padding" data-aos="fade-up">
        <div className="container">
          <div className="section-title">
            <h2>Proses Design Logo</h2>
            <p>Metodologi yang terbukti untuk logo yang powerful</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div className="process-item" key={index} data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                <div className="process-step">{step.step}</div>
                <div className="process-item-content" style={{ textAlign: 'left', flex: 1 }}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="process-duration" style={{ display: 'inline-flex' }}>
                    <i className="fa-regular fa-clock"></i> {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="portfolio section-padding" data-aos="fade-up">
        <div className="container">
          <div className="section-title">
            <h2 style={{
              background: 'linear-gradient(90deg, #EA580C, #DB2777)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 800,
              textAlign: 'center'
            }}>Portfolio Logo Design</h2>
            <p className="portfolio-subtitle-text" style={{ color: '#4B5563', textAlign: 'center', fontWeight: 500, fontSize: '18px' }}>Beberapa logo terbaik yang telah kami ciptakan</p>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map(item => (
              <div className="portfolio-item" key={item.id}>
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="portfolio-content">
                  <div className="portfolio-tags">
                    <span className="tag-category">{item.category}</span>
                    <span className="tag-style">{item.style}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-button-container">
            <a href="../page-portfolio/page-portfolio.tsx" className="btn btn-outline">
              <i className="fa-solid fa-eye"></i> Lihat Semua Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="pricing section-padding" data-aos="fade-up">
        <div className="container">
          <div className="section-title">
            <h2 style={{
              color: '#EF4444',
              textAlign: 'center',
              fontWeight: 800,
              fontSize: '36px',
              marginBottom: '10px',
              background: 'none',
              WebkitBackgroundClip: 'initial',
              WebkitTextFillColor: 'initial'
            }}>Paket Logo Design</h2>
            <p className="pricing-subtitle-text" style={{
               color: '#000000',
               textAlign: 'center',
               fontSize: '18px',
               fontWeight: 500,
               maxWidth: '600px',
               margin: '0 auto'
             }}>Pilih paket yang sesuai dengan kebutuhan brand Anda</p>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div className={`pricing-card ${plan.recommended ? 'recommended' : ''}`} key={plan.id} data-aos="fade-up" data-aos-delay={`${(index + 1) * 100}`}>
                <h3>{plan.name}</h3>
                <div className="price">{plan.price}</div>
                <div className="duration">{plan.duration}</div>
                <div className="best-for">{plan.bestFor}</div>
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}><i className="far fa-check-circle"></i> {feature}</li>
                  ))}
                </ul>
                <a href="../page-contact/page-contact.tsx" className="btn-pricing"><i className="fas fa-arrow-right"></i> Pilih Paket</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Apa Kata Klien Kami</h2>
            <p>Testimoni dari klien yang puas dengan logo design kami</p>
          </div>
          <div className="testimonial-grid" data-aos="fade-up" data-aos-delay="200">
            {testimonials.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-client">
                  <img src={testimonial.clientImage} alt={testimonial.clientName} />
                  <div className="client-info">
                    <h4>{testimonial.clientName}</h4>
                    <span>{testimonial.clientPosition}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta" style={{ background: 'linear-gradient(90deg, #F97316, #EC4899)', color: '#ffffff' }}>
        <div className="container">
          <div data-aos="fade-up">
            <h2>Siap Membuat Logo yang Memorable?</h2>
            <p>Konsultasikan kebutuhan logo dan brand identity Anda dengan tim designer ahli kami secara gratis</p>
            <div className="cta-buttons">
              <a href="https://wa.me/6281804376001" className="btn btn-light" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-comment"></i> WhatsApp Sekarang</a>
              <a href="../page-portfolio/page-portfolio.tsx" className="btn btn-outline-light"><i className="fas fa-download"></i> Download Portfolio</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <img src={logoImg} alt="Titik Visual Logo" className="footer-logo" />
              <p>Spesialis logo design dan brand identity yang berfokus pada kreativitas dan makna brand.</p>
            </div>
            <div className="footer-col">
              <h4>Logo Services</h4>
              <ul className="footer-links">
                <li><button onClick={() => window.location.href = '#logo-design'} className="link-button">Logo Design</button></li>
                <li><button onClick={() => window.location.href = '#brand-identity'} className="link-button">Brand Identity</button></li>
                <li><button onClick={() => window.location.href = '#logo-redesign'} className="link-button">Logo Redesign</button></li>
                <li><button onClick={() => window.location.href = '#brand-guidelines'} className="link-button">Brand Guidelines</button></li>
                <li><button onClick={() => window.location.href = '#stationery-design'} className="link-button">Stationery Design</button></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Logo Types</h4>
              <ul className="footer-links">
                <li><button onClick={() => window.location.href = '#wordmark'} className="link-button">Wordmark</button></li>
                <li><button onClick={() => window.location.href = '#pictorial'} className="link-button">Pictorial</button></li>
                <li><button onClick={() => window.location.href = '#combination'} className="link-button">Combination</button></li>
                <li><button onClick={() => window.location.href = '#emblem'} className="link-button">Emblem</button></li>
                <li><button onClick={() => window.location.href = '#abstract'} className="link-button">Abstract</button></li>
              </ul>
            </div>
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
            © 2024 Titik Visual. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LogoDesignPage;
