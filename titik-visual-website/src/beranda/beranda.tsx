import React, { useState, useEffect } from 'react';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import './style.css';
import { useContent } from '../content/ContentContext';

const PhoneIcon = FaPhone as unknown as React.ComponentType;
const EmailIcon = MdEmail as unknown as React.ComponentType;

const getImg = (name: string) => {
  try {
    return require(`../img/${name}`);
  } catch {
    return '';
  }
};

// Definisikan tipe untuk parameter fungsi
type Direction = 'prev' | 'next';

const navigateToPage = (path: string) => {
  window.location.href = path;
};

const ContactList: React.FC = () => {
  const contacts = [
    { type: 'whatsapp', title: 'WhatsApp Titik Visual', value: '081804376001' },
    { type: 'phone', title: 'Telepon Titik Visual', value: '081804376001' },
    { type: 'email', title: 'Email Titik Visual', value: 'titikvisualjogja@gmail.com' }
  ] as const;

  return (
    <div className="contact-list">
      <h3 className="contact-list-title">Hubungi Titik Visual</h3>
      <div className="contact-list-cards">
        {contacts.map((item, idx) => (
          <div className="contact-list-card" key={idx}>
            <div className="contact-list-header">
              <div className={`contact-list-icon ${item.type === 'email' ? 'icon-gray' : 'icon-green'}`}>
                {item.type === 'email' ? <EmailIcon /> : <PhoneIcon />}
              </div>
              <div className="contact-list-text">
                <h4>{item.title}</h4>
                <p>{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RightCTACard: React.FC = () => {
  return (
    <div className="cta-card">
      <div>
        <h3 className="cta-title">Siap Memulai Proyek?</h3>
        <p className="cta-desc">
          Konsultasikan kebutuhan UI/UX, web development, digital marketing,
          dan custom merchandise Anda dengan tim ahli Titik Visual.
          Dapatkan penawaran terbaik untuk proyek impian Anda!
        </p>
      </div>
      <div className="cta-actions">
        <a
          href="https://wa.me/6281804376001"
          className="btn-cta-primary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 20px',
            borderRadius: 12,
            textDecoration: 'none',
            background: 'linear-gradient(90deg, #16A34A, #22C55E)',
            color: '#ffffff',
            fontWeight: 600,
            border: '1px solid transparent',
            width: '100%',
            boxShadow: '0 10px 22px rgba(34, 197, 94, 0.25)'
          }}
        >
          <i className="fa-brands fa-whatsapp" style={{ color: '#ffffff' }}></i> WhatsApp Titik Visual
        </a>
        <button
          type="button"
          className="btn-cta-secondary"
          onClick={() => navigateToPage('/contact')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 20px',
            borderRadius: 12,
            textDecoration: 'none',
            background: '#ffffff',
            color: '#111827',
            fontWeight: 600,
            border: '1.5px solid #e5e7eb',
            width: '100%',
            boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
          }}
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i> Halaman Kontak Lengkap
        </button>
      </div>
    </div>
  );
};

const ContactCTASection: React.FC = () => {
  return (
    <section className="contact-cta-section">
      <div className="container">
        <div className="contact-cta-header">
          <h2 className="section-title-main">Mari Berkreasi Bersama Titik Visual</h2>
          <p className="section-subtitle">Jelajahi layanan kami dan mulai konsultasi proyek Anda sekarang</p>
        </div>
        <div className="contact-cta-grid">
          <div className="contact-cta-left"><ContactList /></div>
          <RightCTACard />
        </div>
      </div>
    </section>
  );
};


const TitikVisualWebsite: React.FC = () => {
  const content = useContent();
  const [activePortfolioIndex, setActivePortfolioIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);



  const handlePortfolioNavigation = (direction: Direction) => {
    if (direction === 'prev') {
      setActivePortfolioIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
    } else {
      setActivePortfolioIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    }
  };

  useEffect(() => {
    document.body.classList.add('page-loaded');
    return () => {
      document.body.classList.remove('page-loaded');
    };
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  /* dynamic content for hero disabled to ensure design consistency */
  return (
    <div className={`titik-visual-website ${loaded ? 'page-loaded' : ''}`}>


      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="container hero-inner">
            <div
              className="tv-badge pill-shape"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                background: 'linear-gradient(90deg, #FCE7F3, #E4E4E7)',
                color: '#7E22CE',
                fontSize: 12,
                fontWeight: 700,
                padding: '6px 12px',
                borderRadius: 9999,
                border: '1px solid #E9D5FF',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.6), 0 6px 16px rgba(126,34,206,0.12)',
                backdropFilter: 'blur(5px)'
              }}
            >
              <img
                src={getImg('icon-custom-merchandise.png')}
                alt="Icon"
                style={{ width: 14, height: 14, objectFit: 'contain' }}
              />
              <span className="badge-text" style={{ letterSpacing: 0.2 }}>
                {content.get('beranda', 'hero_badge_text', 'Titik Visual • Digital Creative Studio Yogyakarta')}
              </span>
            </div>
            <h1 className="hero-title gradient-text">
              <span
                className="line-1"
                style={{
                  background: 'linear-gradient(90deg, #1F2937, #9333EA, #0891B2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800
                }}
              >
                {content.get('beranda', 'hero_title_line1', 'Titik Visual')}
              </span>
              <span
                className="line-2"
                style={{
                  background: 'linear-gradient(90deg, #A855F7, #EC4899, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800
                }}
              >
                {content.get('beranda', 'hero_title_line2', 'Creative Studio')}
              </span>
            </h1>
            <p
              className="hero-lead"
              style={{ fontSize: 28, lineHeight: 1.5, whiteSpace: 'nowrap', maxWidth: 'none' }}
            >
              {content.get('beranda', 'hero_lead_prefix', 'Dari Ide Menjadi Kenyataan dengan')}{' '}
              <span
                className="highlight"
                style={{
                  background: 'linear-gradient(90deg, #F97316, #EC4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700
                }}
              >
                {content.get('beranda', 'hero_lead_highlight', 'Sentuhan Kreativitas')}
              </span>
            </p>
            <p className="hero-sub description">
              Titik Visual adalah Digital Creative Studio yang berpengalaman dalam UI/UX Design, Web Development, Mobile App, Social Media Management, dan Custom Merchandise Premium.
              Kami menghadirkan solusi kreatif lengkap untuk mengembangkan bisnis Anda di Yogyakarta dan seluruh Indonesia.
            </p>
            <div
              className="cta-buttons"
              style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center', flexWrap: 'nowrap' }}
            >
              <a
                href="/portfolio"
                className="btn btn-primary gradient-purple-blue"
                style={{ padding: '8px 16px', fontSize: 14, borderRadius: 8, minWidth: 'auto' }}
              >
                <img
                  src={getImg('icon-custom-merchandise.png')}
                  alt="Icon"
                  style={{ width: 14, height: 14, objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
                <span>{content.get('beranda', 'cta_portfolio_label', 'Lihat Portofolio')}</span>
              </a>
              <a
                href="https://wa.me/6281804376001"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary white-bg thin-border"
                style={{ padding: '8px 16px', fontSize: 14, borderRadius: 8, minWidth: 'auto' }}
              >
                <i className="chat fa-solid fa-comments" style={{ fontSize: 14 }}></i>
                <span>{content.get('beranda', 'cta_consult_label', 'Konsultasi Gratis')}</span>
              </a>
            </div>
          </div>
        </section>
        

        {/* Featured Services */}
        <section className="featured-services">
          <div className="container">
            <h2 className="featured-title">Layanan Unggulan Titik Visual</h2>
            <p className="featured-subtitle">
              Solusi kreatif terlengkap dari Titik Visual untuk mengembangkan bisnis digital Anda
            </p>

            <div className="featured-grid">
              <div className="featured-card" onClick={() => navigateToPage('/ui-ux')} style={{ cursor: 'pointer' }}>
                <div className="icon-box">
                  <img src={getImg('ui-ux desain.png')} alt="UI/UX Design Icon" className="icon" />
                </div>
                <h4>UI/UX Design</h4>
                <p>Desain interface yang user-friendly dan menarik untuk aplikasi dan website</p>
              </div>

              <div className="featured-card" onClick={() => navigateToPage('/web-apk')} style={{ cursor: 'pointer' }}>
                <div className="icon-box">
                  <img src={getImg('icon-website.png')} alt="Website Development Icon" className="icon" />
                </div>
                <h4>Website Development</h4>
                <p>Website responsif dan modern untuk bisnis Anda</p>
              </div>

              <div className="featured-card" onClick={() => navigateToPage('/custom-merchandise')} style={{ cursor: 'pointer' }}>
                <div className="icon-box">
                  <img src={getImg('icon-custom-merchandise.png')} alt="Custom Merchandise Icon" className="icon" />
                </div>
                <h4>Custom Merchandise</h4>
                <p>Payung, tumbler, totebag, dan merchandise custom berkualitas</p>
              </div>

              <div className="featured-card" onClick={() => navigateToPage('/custom-merchandise')} style={{ cursor: 'pointer' }}>
                <div className="icon-box">
                  <img src={getImg('icon-corporate-gift.png')} alt="Corporate Gifts Icon" className="icon" />
                </div>
                <h4>Corporate Gifts</h4>
                <p>Paket seminar kit, powerbank, flashdisk untuk kebutuhan corporate</p>
              </div>

              <div className="featured-card" onClick={() => navigateToPage('/custom-merchandise')} style={{ cursor: 'pointer' }}>
                <div className="icon-box">
                  <img src={getImg('icon-drinkware.png')} alt="Drinkware Collection Icon" className="icon" />
                </div>
                <h4>Drinkware Collection</h4>
                <p>Botol minum, tumbler, mug, gelas kaca, dan drink jar custom</p>
              </div>

              <div className="featured-card" onClick={() => navigateToPage('/logo-design')} style={{ cursor: 'pointer' }}>
                <div className="icon-box">
                  <img src={getImg('icon-logo dan brand.png')} alt="Logo & Brand Identity Icon" className="icon" />
                </div>
                <h4>Logo & Brand Identity</h4>
                <p>Logo design dan brand identity package lengkap</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <div className="container">
            <h2 className="services-title">Semua Layanan Titik Visual</h2>
            <p className="services-subtitle">
              Solusi kreatif lengkap dari Titik Visual untuk kebutuhan digital dan merchandise Anda
            </p>

            <div className="services-header">
              <h3>Digital Creative Services</h3>
              <span className="badge">
                <img src={getImg('icon-custom-merchandise.png')} alt="Custom Merchandise Icon" className="badge-icon" /> 
                Titik Visual Expertise
              </span>
            </div>

            <div className="services-grid">
              <div className="service-card" onClick={() => navigateToPage('/ui-ux')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('ui-ux desain.png')} alt="UI/UX Design Icon" className="icon" />
                  </div>
                  <h4>UI/UX Design</h4>
                </div>
                <span className="tag">Populer</span>
                <p>Desain interface yang user-friendly dan menarik</p>
                <span className="price">Mulai Rp 2.5jt</span>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/web-apk')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('icon-website.png')} alt="Website Development Icon" className="icon" />
                  </div>
                  <h4>Website Development</h4>
                </div>
                <span className="tag">Populer</span>
                <p>Website responsif dan modern untuk bisnis</p>
                <span className="price"><span className="price-label">Mulai</span> <span className="price-amount">Rp 3.5jt</span></span>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/web-apk')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('icon-mobile-app.png')} alt="Mobile App Development Icon" className="icon" />
                  </div>
                  <h4>Mobile App Development</h4>
                </div>
                <span className="tag">Populer</span>
                <p>Aplikasi mobile iOS dan Android</p>
                <a className="price" href="/layanan"><span className="price-label">Mulai</span> <span className="price-amount">Rp 15jt</span></a>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/logo-design')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('icon-custom-merchandise.png')} alt="Logo Design Icon" className="icon" />
                  </div>
                  <h4>Logo Design</h4>
                </div>
                <span className="tag">Populer</span>
                <p>Logo profesional dan brand identity</p>
                <a className="price" href="/layanan"><span className="price-label">Mulai</span> <span className="price-amount">Rp 500rb</span></a>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/social-media')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('icon-sosial-media.png')} alt="Social Media Management Icon" className="icon" />
                  </div>
                  <h4>Social Media Management</h4>
                </div>
                <span className="tag">Populer</span>
                <p>Kelola dan kembangkan media sosial brand</p>
                <a className="price" href="/layanan"><span className="price-label">Mulai</span> <span className="price-amount">Rp 1.5jt/bulan</span></a>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/social-media')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('icon-digital-marketing.png')} alt="Digital Marketing Icon" className="icon" />
                  </div>
                  <h4>Digital Marketing</h4>
                </div>
                <span className="tag">Populer</span>
                <p>Strategi pemasaran digital yang efektif</p>
                <a className="price" href="/layanan"><span className="price-label">Mulai</span> <span className="price-amount">Rp 2jt/bulan</span></a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Merch Section */}
        <section className="merch-section">
          <div className="container">
            <div className="top-title">
              <h2 className="gradient-text">Custom Merchandise Titik Visual</h2>
              <button className="premium-btn">
                <img src={getImg('icon-lifestyle.png')} className="btn-icon" alt="icon" />Kualitas Premium
              </button>
            </div>

            <div className="merch-grid">
              <div className="merch-card" onClick={() => navigateToPage('/custom-merchandise')} style={{ cursor: 'pointer' }}>
                <div className="icon-box">
                  <img src={getImg('icon-custom-drinkware.png')} className="merch-icon" alt="Drinkware" />
                </div>
                <div className="card-title">
                  <h3>Custom Drinkware</h3>
                  <span className="badge">Terbaik</span>
                </div>
                <p>Botol minum, tumbler, mug kaca custom</p>
                <a className="price-link" href="/layanan/merchandise">Mulai Rp 25rb/pcs →</a>
              </div>

              <div className="merch-card" onClick={() => navigateToPage('/custom-merchandise')} style={{ cursor: 'pointer' }}>
                <div className="icon-box">
                  <img src={getImg('icon-custom-bag.png')} className="merch-icon" alt="Custom Bags" />
                </div>
                <div className="card-title">
                  <h3>Custom Bags</h3>
                  <span className="badge">Terbaik</span>
                </div>
                <p>Tas kanvas, tote bag, furing, tas kantor branded</p>
                <a className="price-link" href="/layanan/merchandise">Mulai Rp 50rb/pcs →</a>
              </div>

              <div className="merch-card" onClick={() => navigateToPage('/custom-merchandise')} style={{ cursor: 'pointer' }}>
                <div className="icon-box">
                  <img src={getImg('icon-corporate.png')} className="merch-icon" alt="Corporate Gifts" />
                </div>
                <div className="card-title">
                  <h3>Corporate Gifts</h3>
                  <span className="badge">Terbaik</span>
                </div>
                <p>Powerbank, handsfree, paket seminar kit</p>
                <a className="price-link" href="/layanan/merchandise">Mulai Rp 50rb/pcs →</a>
              </div>

              <div className="merch-card" onClick={() => navigateToPage('/custom-merchandise')} style={{ cursor: 'pointer' }}>
                <div className="icon-box">
                  <img src={getImg('icon-lifestyle.png')} className="merch-icon" alt="Lifestyle" />
                </div>
                <div className="card-title">
                  <h3>Lifestyle Products</h3>
                  <span className="badge">Terbaik</span>
                </div>
                <p>Payung custom, jam dinding, pulpen branded</p>
                <a className="price-link" href="/layanan/merchandise">Mulai Rp 30rb/pcs →</a>
              </div>
            </div>

            <div className="center-btn">
              <a href="/layanan" className="see-all-btn">
                <img src={getImg('icon-eye.png')} className="see-icon" alt="Lihat" />
                Lihat Semua Layanan Titik Visual
              </a>      
            </div>      
          </div>
        </section>

        {/* Hero Slider */}
        <section className="hero-slider">
          <div className="hero-card">
            <div className="center-icon">
              <img src={getImg('Clip path group.png')} alt="" />
            </div>

            <div className="hero-content">
              <h2>Digital Creative Services</h2>
              <p>Logo Design, Social Media Management, Brand Identity</p>
            </div>

            <a href="https://wa.me/6281804376001" className="cta-btn">
              <img src={getImg('phone.png')} className="cta-icon" alt="" />
              Hubungi Titik Visual
            </a>

            <div className="slider-wrapper">
              <button className="arrow-btn left" onClick={() => handlePortfolioNavigation('prev')}>&lt;</button>
              <button className="arrow-btn right" onClick={() => handlePortfolioNavigation('next')}>&gt;</button>
            </div>

            <div className="hero-dots">
              <span className={`dot ${activePortfolioIndex === 0 ? 'active' : ''}`}></span>
              <span className={`dot ${activePortfolioIndex === 1 ? 'active' : ''}`}></span>
              <span className={`dot ${activePortfolioIndex === 2 ? 'active' : ''}`}></span>
            </div>
          </div>
        </section>
      
        {/* Achievements Section */}
        <section className="achievements-section">
          <div className="container">
            <h2 className="title">Pencapaian Titik Visual</h2>
            <p className="subtitle">Kepercayaan klien adalah prioritas utama kami</p>

            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="icon"><img src={getImg('icon-drinkware.png')} alt="Proyek Icon" /></div>
                <h3>500+</h3>
                <p>Proyek Selesai</p>
              </div>

              <div className="achievement-card">
                <div className="icon"><img src={getImg('icon-corporate-gift.png')} alt="Klien Icon" /></div>
                <h3>200+</h3>
                <p>Klien Puas</p>
              </div>

              <div className="achievement-card">            
                <div className="icon"><img src={getImg('5+.png')} alt="Tahun Icon" /></div>
                <h3>5+</h3>
                <p>Tahun Pengalaman</p>
              </div>

              <div className="achievement-card">
                <div className="icon"><img src={getImg('24-7.png')} alt="Support Icon" /></div>
                <h3>24/7</h3>
                <p>Support Titik Visual</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio-section">
          <div className="portfolio-inner">
          <div className="portfolio-header">
            <h2>Portfolio Karya Titik Visual</h2>
            <p>Karya terbaik yang telah kami ciptakan untuk klien</p>
          </div>

          <button className="portfolio-nav prev" onClick={() => handlePortfolioNavigation('prev')}>&#10094;</button>
          <button className="portfolio-nav next" onClick={() => handlePortfolioNavigation('next')}>&#10095;</button>

          <div className="portfolio-cards">
            <div className={`portfolio-card ${activePortfolioIndex === 0 ? 'active' : ''}`} onClick={() => navigateToPage('/portfolio')} style={{ cursor: 'pointer' }}>
              <div className="card-thumb green">
                <span className="year">2024</span>
                <i className="icon">▶</i>
              </div>
              <div className="card-body">
                <span className="category">Merchandise by Titik Visual</span>
                <h3>Custom Merchandise Package</h3>
                <p>Paket merchandise lengkap termasuk tumbler, totebag, dan corporate gifts untuk event perusahaan.</p>
              </div>
              <div className="card-bottom">
                <div className="client">Client: PT. Teknologi Maju</div>
                <i className="fa-solid fa-arrow-up-right-from-square" style={{color:"#8b5cf6"}}></i>
              </div>            
            </div>

            <div className={`portfolio-card ${activePortfolioIndex === 1 ? 'active' : ''}`} onClick={() => navigateToPage('/portfolio')} style={{ cursor: 'pointer' }}>
              <div className="card-thumb purple">
                <span className="year">2024</span>
                <i className="icon">▶</i>
              </div>
              <div className="card-body">
                <span className="category">Digital Marketing by Titik Visual</span>
                <h3>Social Media Management</h3>
                <p>Pengelolaan social media lengkap dengan content creation, posting schedule, dan analytics reporting.</p>
              </div>
              <div className="card-bottom">
                <div className="client">Client: Fashion Brand Indonesia</div>
                <i className="fa-solid fa-arrow-up-right-from-square" style={{color:"#8b5cf6"}}></i>
              </div>            
            </div>

            <div className={`portfolio-card ${activePortfolioIndex === 2 ? 'active' : ''}`} onClick={() => navigateToPage('/portfolio')} style={{ cursor: 'pointer' }}>
              <div className="card-thumb pink">
                <span className="year">2023</span>
                <i className="icon">▶</i>
              </div>
              <div className="card-body">
                <span className="category">UI/UX Design by Titik Visual</span>
                <h3>E-Learning Platform UI/UX</h3>
                <p>Design interface untuk platform e-learning dengan fokus pada user experience dan engagement siswa.</p>
              </div>
              <div className="card-bottom">
                <div className="client">Client: EduTech Indonesia</div>
                <i className="fa-solid fa-arrow-up-right-from-square" style={{color:"#8b5cf6"}}></i>
              </div>  
            </div>
          </div>

          <div className="portfolio-dots">
            <span className={`p-dot ${activePortfolioIndex === 0 ? 'active' : ''}`}></span>
            <span className={`p-dot ${activePortfolioIndex === 1 ? 'active' : ''}`}></span>
            <span className={`p-dot ${activePortfolioIndex === 2 ? 'active' : ''}`}></span>
          </div>

          <a href="/portfolio" className="view-btn">
            <img src={getImg('icon-eye.png')} alt="icon" className="btn-icon" />
            Lihat Semua Portfolio Titik Visual
          </a>      
          </div>
        </section>

        {/* Career Section */}
        <section className="career-section">
          <div className="career-header">
            <h2>Bergabung dengan Tim Titik Visual</h2>
            <p>Kembangkan karir kreatif Anda bersama Titik Visual</p>
          </div>
      
          <div className="career-grid">
            <div className="career-card">
              <div className="career-card-header">
                <div className="icon-box">
                  <img src={getImg('ui-ux desain.png')} alt="UI/UX Icon" className="career-icon" />
                </div>
                <div className="career-card-text">
                  <h3>UI/UX Designer</h3>
                  <p>Bergabung dengan tim Titik Visual sebagai UI/UX Designer</p>
                </div>
                <span className="label">
                  <img src={getImg('icon kecil magang.png')} alt="icon magang" className="label-icon" />
                  Magang
                </span>                
              </div>
              <ul className="requirements">
                <li><i className="far fa-check-circle"></i>Pengalaman dengan software desain (Figma, Adobe XD, Sketch).</li>
                <li><i className="far fa-check-circle"></i>Memahami prinsip desain UI/UX.</li>
                <li><i className="far fa-check-circle"></i>Kemampuan berkomunikasi yang baik.</li>
              </ul>
              <div className="job-card uiux-card">
                <a href="https://wa.me/6281804376001" className="btn primary">
                  <i className="fa-solid fa-arrow-right"></i>
                  Lamar Sekarang
                </a>
              </div>            
            </div>

            <div className="career-card">
              <div className="career-card-header">
                <div className="icon-box">
                  <img src={getImg('wd.spesialist.png')} alt="Web Developer Icon" className="career-icon" />
                </div>
                <div className="career-card-text">
                  <h3>Web Developer</h3>
                  <p>Bangun website dan aplikasi web bersama tim Titik Visual</p>
                </div>
                <span className="label">
                  <img src={getImg('icon kecil magang.png')} alt="icon magang" className="label-icon" />
                  Magang
                </span> 
              </div>
              <ul className="requirements">
                <li><i className="far fa-check-circle"></i>Penguasaan HTML, CSS, JavaScript.</li>
                <li><i className="far fa-check-circle"></i>Pengalaman dengan framework (React, Vue, Angular).</li>
                <li><i className="far fa-check-circle"></i>Kemampuan memecahkan masalah.</li>
              </ul>
              <div className="job-card web-card">
                <a href="https://wa.me/6281804376001" className="btn primary">
                  <i className="fa-solid fa-arrow-right"></i>
                  Lamar Sekarang
                </a>
              </div>                     
            </div>

            <div className="career-card">
              <div className="career-card-header">
                <div className="icon-box">
                  <img src={getImg('dm.spesialist.png')} alt="Digital Marketing Icon" className="career-icon" />
                </div>
                <div className="career-card-text">
                  <h3>Digital Marketing Specialist</h3>
                  <p>Kembangkan strategi digital marketing di Titik Visual</p>
                </div>
                <span className="label">
                  <img src={getImg('icon kecil magang.png')} alt="icon magang" className="label-icon" />
                  Magang
                </span> 
              </div>
              <ul className="requirements">
                <li><i className="far fa-check-circle"></i>Pengetahuan tentang strategi pemasaran digital.</li>
                <li><i className="far fa-check-circle"></i>Pengalaman dengan SEO/SEM.</li>
                <li><i className="far fa-check-circle"></i>Kemampuan analisis data.</li>
              </ul>
              <div className="job-card digital-card">
                <a href="https://wa.me/6281804376001" className="btn primary">
                  <i className="fa-solid fa-arrow-right"></i>
                  Lamar Sekarang
                </a>
              </div>          
            </div>

            <div className="career-card">
              <div className="career-card-header">
                <div className="icon-box">
                  <img src={getImg('icon-sosial-media.png')} alt="Social Media Icon" className="career-icon" />
                </div>
                <div className="career-card-text">
                  <h3>Social Media Specialist</h3>
                  <p>Kelola dan kembangkan media sosial klien Titik Visual</p>
                </div>
                <span className="label">
                  <img src={getImg('icon kecil magang.png')} alt="icon magang" className="label-icon" />
                  Magang
                </span> 
              </div>
              <ul className="requirements">
                <li><i className="fa-regular fa-circle-check"></i>Pengalaman mengelola media sosial.</li>
                <li><i className="fa-regular fa-circle-check"></i>Kemampuan membuat konten yang menarik.</li>
                <li><i className="fa-regular fa-circle-check"></i>Memahami tren media sosial terkini.</li>
              </ul>
              <div className="job-card social-card">
                <a href="https://wa.me/6281804376001" className="btn primary">
                  <i className="fa-solid fa-arrow-right"></i>
                  Lamar Sekarang
                </a>
              </div>          
            </div>
          </div>

          <div className="see-all">
            <a href="/careers">
              Lihat Semua Posisi
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </section>
      
        <ContactCTASection />
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <img src={getImg('img.png')} alt="Titik Visual" className="footer-logo" />
          </div>
          <div className="footer-right">
            <p>
              {content.get('beranda', 'footer_line1_top', '© 2024 Titik Visual.')}<br />
              {content.get('beranda', 'footer_line1_bottom', 'All rights reserved.')}
            </p>
            <p>
              {content.get('beranda', 'footer_line2_top', 'Digital Creative Studio Yogyakarta')}<br />
              {content.get('beranda', 'footer_line2_bottom', 'Dari Ide Menjadi Kenyataan')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TitikVisualWebsite;
