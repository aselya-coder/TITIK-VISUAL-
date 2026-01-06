import React, { useState, useEffect } from 'react';
import './style.css';
import logoImg from '../img/img.png';
import iconKonsep from '../img/icon konsep unik .png';
import iconMultiple from '../img/icon multiple.png';
import iconFile from '../img/icon file.png';
import iconUnlimited from '../img/icon unlimited.png';
import jenisLogoImg from '../img/jenis logo.png';
import portfolioImg from '../img/portfolio logo desain.png';
import { useContent } from '../content/ContentContext';

const getImg = (name: string) => {
  try {
    return require(`../img/${name}`);
  } catch {
    return '';
  }
};

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
  const content = useContent();
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Back to top visibility
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial load animation
    document.body.classList.add('loaded');

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleScrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('portfolio-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(content.get('Page Detail Layanan Logo Design', 'alert_portfolio_download', 'Portfolio download akan segera tersedia. Silakan hubungi kami untuk informasi lebih lanjut.'));
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Portfolio data
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      category: content.get('Page Detail Layanan Logo Design', 'portfolio_1_cat', 'Technology'),
      style: content.get('Page Detail Layanan Logo Design', 'portfolio_1_style', 'Minimalist'),
      title: content.get('Page Detail Layanan Logo Design', 'portfolio_1_title', 'Tech Startup Logo'),
      description: content.get('Page Detail Layanan Logo Design', 'portfolio_1_desc', 'Logo modern untuk startup teknologi dengan konsep minimalis dan futuristik'),
      image: portfolioImg
    },
    {
      id: 2,
      category: content.get('Page Detail Layanan Logo Design', 'portfolio_2_cat', 'Food & Beverage'),
      style: content.get('Page Detail Layanan Logo Design', 'portfolio_2_style', 'Classic'),
      title: content.get('Page Detail Layanan Logo Design', 'portfolio_2_title', 'Restaurant Brand'),
      description: content.get('Page Detail Layanan Logo Design', 'portfolio_2_desc', 'Logo restaurant dengan nuansa warm dan appetizing untuk brand makanan'),
      image: portfolioImg
    },
    {
      id: 3,
      category: content.get('Page Detail Layanan Logo Design', 'portfolio_3_cat', 'Fashion'),
      style: content.get('Page Detail Layanan Logo Design', 'portfolio_3_style', 'Elegant'),
      title: content.get('Page Detail Layanan Logo Design', 'portfolio_3_title', 'Fashion Brand Logo'),
      description: content.get('Page Detail Layanan Logo Design', 'portfolio_3_desc', 'Logo fashion brand dengan typography elegant dan sophisticated'),
      image: portfolioImg
    }
  ];

  

  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: content.get('Page Detail Layanan Logo Design', 'price_1_name', 'Logo Basic'),
      price: content.get('Page Detail Layanan Logo Design', 'price_1_cost', 'Rp 500.000'),
      duration: content.get('Page Detail Layanan Logo Design', 'price_1_time', '3 Hari'),
      bestFor: content.get('Page Detail Layanan Logo Design', 'price_1_best', 'Best for: Startup & UKM'),
      features: [
        content.get('Page Detail Layanan Logo Design', 'price_1_feat_1', '3 Konsep Logo'),
        content.get('Page Detail Layanan Logo Design', 'price_1_feat_2', '2x Major Revisions'),
        content.get('Page Detail Layanan Logo Design', 'price_1_feat_3', 'File PNG & JPG'),
        content.get('Page Detail Layanan Logo Design', 'price_1_feat_4', 'Logo Hitam Putih'),
        content.get('Page Detail Layanan Logo Design', 'price_1_feat_5', 'Basic Brand Guidelines')
      ]
    },
    {
      id: 2,
      name: content.get('Page Detail Layanan Logo Design', 'price_2_name', 'Logo Professional'),
      price: content.get('Page Detail Layanan Logo Design', 'price_2_cost', 'Rp 1.200.000'),
      duration: content.get('Page Detail Layanan Logo Design', 'price_2_time', '5-7 Hari'),
      bestFor: content.get('Page Detail Layanan Logo Design', 'price_2_best', 'Best for: Business & Corporate'),
      features: [
        content.get('Page Detail Layanan Logo Design', 'price_2_feat_1', '5 Konsep Logo'),
        content.get('Page Detail Layanan Logo Design', 'price_2_feat_2', 'Unlimited Revisions'),
        content.get('Page Detail Layanan Logo Design', 'price_2_feat_3', 'File AI, EPS, PNG, JPG, SVG'),
        content.get('Page Detail Layanan Logo Design', 'price_2_feat_4', 'Color & Monochrome Version'),
        content.get('Page Detail Layanan Logo Design', 'price_2_feat_5', 'Complete Brand Guidelines'),
        content.get('Page Detail Layanan Logo Design', 'price_2_feat_6', 'Business Card Design'),
        content.get('Page Detail Layanan Logo Design', 'price_2_feat_7', 'Letterhead Template')
      ],
      recommended: true
    },
    {
      id: 3,
      name: content.get('Page Detail Layanan Logo Design', 'price_3_name', 'Brand Identity Package'),
      price: content.get('Page Detail Layanan Logo Design', 'price_3_cost', 'Rp 2.500.000'),
      duration: content.get('Page Detail Layanan Logo Design', 'price_3_time', '1-2 Minggu'),
      bestFor: content.get('Page Detail Layanan Logo Design', 'price_3_best', 'Best for: Complete Branding'),
      features: [
        content.get('Page Detail Layanan Logo Design', 'price_3_feat_1', 'Logo Professional Package'),
        content.get('Page Detail Layanan Logo Design', 'price_3_feat_2', 'Color Palette'),
        content.get('Page Detail Layanan Logo Design', 'price_3_feat_3', 'Typography System'),
        content.get('Page Detail Layanan Logo Design', 'price_3_feat_4', 'Brand Pattern/Texture'),
        content.get('Page Detail Layanan Logo Design', 'price_3_feat_5', 'Social Media Kit'),
        content.get('Page Detail Layanan Logo Design', 'price_3_feat_6', 'Stationery Design'),
        content.get('Page Detail Layanan Logo Design', 'price_3_feat_7', 'Brand Manual Lengkap'),
        content.get('Page Detail Layanan Logo Design', 'price_3_feat_8', '3 Bulan Support')
      ]
    }
  ];

  // Process steps data
  const processSteps = [
    {
      step: '01',
      title: content.get('Page Detail Layanan Logo Design', 'process_1_title', 'Brief & Research'),
      description: content.get('Page Detail Layanan Logo Design', 'process_1_desc', 'Memahami brand, target audience, dan kompetitor'),
      duration: content.get('Page Detail Layanan Logo Design', 'process_1_time', '1 hari')
    },
    {
      step: '02',
      title: content.get('Page Detail Layanan Logo Design', 'process_2_title', 'Concept Development'),
      description: content.get('Page Detail Layanan Logo Design', 'process_2_desc', 'Brainstorming dan sketching konsep awal'),
      duration: content.get('Page Detail Layanan Logo Design', 'process_2_time', '2-3 hari')
    },
    {
      step: '03',
      title: content.get('Page Detail Layanan Logo Design', 'process_3_title', 'Design Creation'),
      description: content.get('Page Detail Layanan Logo Design', 'process_3_desc', 'Pembuatan 3-5 konsep logo digital'),
      duration: content.get('Page Detail Layanan Logo Design', 'process_3_time', '3-4 hari')
    },
    {
      step: '04',
      title: content.get('Page Detail Layanan Logo Design', 'process_4_title', 'Revision & Refinement'),
      description: content.get('Page Detail Layanan Logo Design', 'process_4_desc', 'Revisi berdasarkan feedback klien'),
      duration: content.get('Page Detail Layanan Logo Design', 'process_4_time', '2-3 hari')
    },
    {
      step: '05',
      title: content.get('Page Detail Layanan Logo Design', 'process_5_title', 'Final Delivery'),
      description: content.get('Page Detail Layanan Logo Design', 'process_5_desc', 'Delivery file final dan brand guidelines'),
      duration: content.get('Page Detail Layanan Logo Design', 'process_5_time', '1 hari')
    }
  ];

  // Logo types data
  const logoTypes = [
    {
      name: content.get('Page Detail Layanan Logo Design', 'type_1_name', 'Wordmark Logo'),
      description: content.get('Page Detail Layanan Logo Design', 'type_1_desc', 'Logo berbasis teks dengan typography yang kuat'),
      examples: ['Google', 'Coca-Cola', 'FedEx']
    },
    {
      name: content.get('Page Detail Layanan Logo Design', 'type_2_name', 'Pictorial Logo'),
      description: content.get('Page Detail Layanan Logo Design', 'type_2_desc', 'Logo dengan simbol atau ikon yang memorable'),
      examples: ['Apple', 'Twitter', 'Nike']
    },
    {
      name: content.get('Page Detail Layanan Logo Design', 'type_3_name', 'Combination Logo'),
      description: content.get('Page Detail Layanan Logo Design', 'type_3_desc', 'Kombinasi teks dan simbol yang seimbang'),
      examples: ['Adidas', 'Burger King', 'Lacoste']
    },
    {
      name: content.get('Page Detail Layanan Logo Design', 'type_4_name', 'Emblem Logo'),
      description: content.get('Page Detail Layanan Logo Design', 'type_4_desc', 'Logo dengan style badge atau seal yang elegan'),
      examples: ['Starbucks', 'BMW', 'Harley Davidson']
    }
  ];

  const WhyChooseLogoSection: React.FC = () => (
    <section className="features section-padding" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>{content.get('Page Detail Layanan Logo Design', 'why_choose_title', 'Mengapa Pilih Logo Design Kami?')}</h2>
          <p>{content.get('Page Detail Layanan Logo Design', 'why_choose_subtitle', 'Logo yang kami buat tidak hanya indah, tapi juga strategis dan meaningful.')}</p>
        </div>
        <div className="features-grid">
          <div className="feature-item">
            <div className="icon">
              <img src={iconKonsep} alt="Konsep Unik Icon" />
            </div>
            <h3>{content.get('Page Detail Layanan Logo Design', 'feature_1_title', 'Konsep Unik')}</h3>
            <p>{content.get('Page Detail Layanan Logo Design', 'feature_1_desc', 'Logo original yang mencerminkan identitas brand Anda.')}</p>
          </div>
          <div className="feature-item">
            <div className="icon">
              <img src={iconMultiple} alt="Multiple Variations Icon" />
            </div>
            <h3>{content.get('Page Detail Layanan Logo Design', 'feature_2_title', 'Multiple Variations')}</h3>
            <p>{content.get('Page Detail Layanan Logo Design', 'feature_2_desc', 'Berbagai variasi logo untuk berbagai kebutuhan.')}</p>
          </div>
          <div className="feature-item">
            <div className="icon">
              <img src={iconFile} alt="File Format Lengkap Icon" />
            </div>
            <h3>{content.get('Page Detail Layanan Logo Design', 'feature_3_title', 'File Format Lengkap')}</h3>
            <p>{content.get('Page Detail Layanan Logo Design', 'feature_3_desc', 'AI, EPS, PNG, JPG, SVG untuk semua keperluan.')}</p>
          </div>
          <div className="feature-item">
            <div className="icon">
              <img src={iconUnlimited} alt="Unlimited Revisions Icon" />
            </div>
            <h3>{content.get('Page Detail Layanan Logo Design', 'feature_4_title', 'Unlimited Revisions')}</h3>
            <p>{content.get('Page Detail Layanan Logo Design', 'feature_4_desc', 'Revisi tanpa batas hingga Anda puas.')}</p>
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
          <a href="/">{content.get('Page Detail Layanan Logo Design', 'breadcrumb_home', 'Home')}</a> / <a href="/services">{content.get('Page Detail Layanan Logo Design', 'breadcrumb_services', 'Services')}</a> / <span>{content.get('Page Detail Layanan Logo Design', 'breadcrumb_current', 'Logo Design')}</span>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="logo-design-hero">
        <div className="container hero-container">
          {/* hero-left (TEXT AREA) */}
          <div className="hero-left hero-content">
            <div className="logo-badge">
              <i className="fa-solid fa-palette"></i>
              {content.get('Page Detail Layanan Logo Design', 'hero_badge', 'Professional Logo Design')}
            </div>
            
            <h1 className="logo-title">
              <span className="text-gradient-pink">{content.get('Page Detail Layanan Logo Design', 'hero_title_line1', 'Logo yang Memorable')}</span><br />
              {content.get('Page Detail Layanan Logo Design', 'hero_title_line2', 'untuk Brand Anda')}
            </h1>
            
            <p className="logo-desc">
              {content.get(
                'Page Detail Layanan Logo Design',
                'hero_desc',
                'Ciptakan identitas visual yang kuat dengan logo profesional yang mencerminkan nilai dan kepribadian brand Anda. Dari konsep hingga eksekusi, kami pastikan logo Anda memorable dan timeless.'
              )}
            </p>
            
            <div className="hero-actions">
              <a
                href={content.get('Page Detail Layanan Logo Design', 'cta_whatsapp_href', 'https://wa.me/6281804376001')}
                className="btn-consult"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-regular fa-comment"></i>
                <span>{content.get('Page Detail Layanan Logo Design', 'cta_whatsapp_label', 'Konsultasi Gratis')}</span>
              </a>
              <a
                href={content.get('Page Detail Layanan Logo Design', 'cta_portfolio_href', '/portfolio')}
                className="btn-portfolio-outline"
              >
                <i className="far fa-eye"></i>
                <span>{content.get('Page Detail Layanan Logo Design', 'cta_portfolio_label', 'Lihat Portfolio')}</span>
              </a>
            </div>
          </div>
          
          {/* hero-right (LOGO PREVIEW CARD) */}
          <div className="hero-right">
            <div className="preview-card-wrapper">
              <div className="decorative-circle"></div>
              <img
                src={getImg('Page Detail Layanan Logo Design.png')}
                alt="Logo Design Preview"
                className="hero-right-img"
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
            <h2>{content.get('Page Detail Layanan Logo Design', 'types_title', 'Jenis Logo yang Kami Buat')}</h2>
            <p>{content.get('Page Detail Layanan Logo Design', 'types_subtitle', 'Berbagai style logo untuk berbagai kebutuhan brand')}</p>
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
            <h2>{content.get('Page Detail Layanan Logo Design', 'process_title', 'Proses Design Logo')}</h2>
            <p>{content.get('Page Detail Layanan Logo Design', 'process_subtitle', 'Metodologi yang terbukti untuk logo yang powerful')}</p>
          </div>
          <div className="process-grid-cards">
            {processSteps.map((step, index) => (
              <div className="process-card" key={index}>
                <div className="process-step-circle">
                  <span className="step-number">{step.step}</span>
                </div>
                <div className="process-card-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="process-duration-pill">
                    <i className="fa-regular fa-clock"></i>
                    <span>{step.duration}</span>
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
            }}>{content.get('Page Detail Layanan Logo Design', 'portfolio_title', 'Portfolio Logo Design')}</h2>
            <p className="portfolio-subtitle-text" style={{ color: '#4B5563', textAlign: 'center', fontWeight: 500, fontSize: '18px' }}>{content.get('Page Detail Layanan Logo Design', 'portfolio_subtitle', 'Beberapa logo terbaik yang telah kami ciptakan')}</p>
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
                <button onClick={handleDownloadPortfolio} className="btn btn-outline">
                  <i className="fa-solid fa-download"></i> {content.get('Page Detail Layanan Logo Design', 'cta_download_portfolio', 'Download Portfolio')}
                </button>
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
            }}>{content.get('Page Detail Layanan Logo Design', 'pricing_title', 'Paket Logo Design')}</h2>
            <p className="pricing-subtitle-text" style={{
               color: '#000000',
               textAlign: 'center',
               fontSize: '18px',
               fontWeight: 500,
               maxWidth: '600px',
               margin: '0 auto'
             }}>{content.get('Page Detail Layanan Logo Design', 'pricing_subtitle', 'Pilih paket yang sesuai dengan kebutuhan brand Anda')}</p>
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
                <a href={content.get('Page Detail Layanan Logo Design', 'pricing_btn_href', '/contact')} className="btn-pricing"><i className="fas fa-arrow-right"></i> {content.get('Page Detail Layanan Logo Design', 'pricing_btn_label', 'Pilih Paket')}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>{content.get('Page Detail Layanan Logo Design', 'testimonials_title', 'Apa Kata Klien Kami')}</h2>
            <p>{content.get('Page Detail Layanan Logo Design', 'testimonials_subtitle', 'Testimoni dari klien yang puas dengan logo design kami')}</p>
          </div>
          <div className="testimonial-grid" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">{content.get('Page Detail Layanan Logo Design', 'testimonials.items.0.quote', '"Logo yang dibuat Titik Visual sangat mencerminkan visi startup kami. Prosesnya profesional dan hasilnya melampaui ekspektasi!"')}</p>
              <div className="testimonial-client">
                <img src={getImg(content.get('Page Detail Layanan Logo Design', 'testimonials.items.0.avatar', 'Page Detail Layanan Logo Design.png'))} alt={content.get('Page Detail Layanan Logo Design', 'testimonials.items.0.name', 'Klien')} />
                <div className="client-info">
                  <h4>{content.get('Page Detail Layanan Logo Design', 'testimonials.items.0.name', 'Ahmad Rizki')}</h4>
                  <span>{content.get('Page Detail Layanan Logo Design', 'testimonials.items.0.role', 'Founder at StartupHub Jakarta')}</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">{content.get('Page Detail Layanan Logo Design', 'testimonials.items.1.quote', '"Tim sangat memahami brand kami. Logo yang dihasilkan elegant dan memorable. Highly recommended!"')}</p>
              <div className="testimonial-client">
                <img src={getImg(content.get('Page Detail Layanan Logo Design', 'testimonials.items.1.avatar', 'Page Detail Layanan Logo Design.png'))} alt={content.get('Page Detail Layanan Logo Design', 'testimonials.items.1.name', 'Klien')} />
                <div className="client-info">
                  <h4>{content.get('Page Detail Layanan Logo Design', 'testimonials.items.1.name', 'Maya Sari')}</h4>
                  <span>{content.get('Page Detail Layanan Logo Design', 'testimonials.items.1.role', 'Owner at Boutique Fashion')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta" style={{ background: 'linear-gradient(90deg, #F97316, #EC4899)', color: '#ffffff' }}>
        <div className="container">
          <div data-aos="fade-up">
            <h2>{content.get('Page Detail Layanan Logo Design', 'cta_bottom_title', 'Siap Membuat Logo yang Memorable?')}</h2>
            <p>{content.get('Page Detail Layanan Logo Design', 'cta_bottom_desc', 'Konsultasikan kebutuhan logo dan brand identity Anda dengan tim designer ahli kami secara gratis')}</p>
            <div className="cta-buttons">
              <a href={content.get('Page Detail Layanan Logo Design', 'cta_whatsapp_href', 'https://wa.me/6281804376001')} className="btn btn-light" target="_blank" rel="noopener noreferrer">
                <i className="fa-regular fa-comment"></i> {content.get('Page Detail Layanan Logo Design', 'cta_bottom_wa_label', 'WhatsApp Sekarang')}
              </a>
              <a href={content.get('Page Detail Layanan Logo Design', 'cta_portfolio_href', '/portfolio')} className="btn btn-outline-light">
                <i className="fa-solid fa-download"></i> {content.get('Page Detail Layanan Logo Design', 'cta_bottom_dl_label', 'Download Portfolio')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col footer-brand">
              <img src={logoImg} alt="Titik Visual Logo" className="footer-logo" />
              <p>{content.get('Page Detail Layanan Logo Design', 'footer_desc', 'Spesialis logo design dan brand identity yang berfokus pada kreativitas dan makna brand.')}</p>
            </div>
            <div className="footer-col">
              <h4>{content.get('Page Detail Layanan Logo Design', 'footer_services_title', 'Logo Services')}</h4>
              <ul className="footer-links">
                <li><a href="#logo-design">{content.get('Page Detail Layanan Logo Design', 'footer_link_custom', 'Logo Custom')}</a></li>
                <li><a href="#brand-identity">{content.get('Page Detail Layanan Logo Design', 'footer_link_identity', 'Brand Identity')}</a></li>
                <li><a href="#logo-redesign">{content.get('Page Detail Layanan Logo Design', 'footer_link_redesign', 'Logo Redesign')}</a></li>
                <li><a href="#brand-guidelines">{content.get('Page Detail Layanan Logo Design', 'footer_link_guidelines', 'Brand Guidelines')}</a></li>
                <li><a href="#stationery-design">{content.get('Page Detail Layanan Logo Design', 'footer_link_stationery', 'Stationery Design')}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{content.get('Page Detail Layanan Logo Design', 'footer_types_title', 'Logo Types')}</h4>
              <ul className="footer-links">
                <li><a href="#wordmark">{content.get('Page Detail Layanan Logo Design', 'footer_link_wordmark', 'Wordmark')}</a></li>
                <li><a href="#pictorial">{content.get('Page Detail Layanan Logo Design', 'footer_link_pictorial', 'Pictorial')}</a></li>
                <li><a href="#combination">{content.get('Page Detail Layanan Logo Design', 'footer_link_combination', 'Combination')}</a></li>
                <li><a href="#emblem">{content.get('Page Detail Layanan Logo Design', 'footer_link_emblem', 'Emblem')}</a></li>
                <li><a href="#abstract">{content.get('Page Detail Layanan Logo Design', 'footer_link_abstract', 'Abstract')}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{content.get('Page Detail Layanan Logo Design', 'footer_contact_title', 'KONTAK')}</h4>
              <ul className="footer-contact">
                <li>{content.get('Page Detail Layanan Logo Design', 'footer_contact_phone', '081804376001')}</li>
                <li>{content.get('Page Detail Layanan Logo Design', 'footer_contact_email', 'titikvisualjogja@gmail.com')}</li>
                <li>{content.get('Page Detail Layanan Logo Design', 'footer_contact_address', 'Yogyakarta, Indonesia')}</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{content.get('Page Detail Layanan Logo Design', 'footer_copyright', '© 2024 Titik Visual. All rights reserved.')}</p>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP BUTTON */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={handleScrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'linear-gradient(90deg, #2563EB, #0891B2)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          opacity: showBackToTop ? 1 : 0,
          visibility: showBackToTop ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default LogoDesignPage;
