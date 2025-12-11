import React, { useState } from 'react';
import './style.css';

// Definisikan tipe untuk parameter fungsi
type Direction = 'prev' | 'next';

const TitikVisualWebsite: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePortfolioIndex, setActivePortfolioIndex] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePortfolioNavigation = (direction: Direction) => {
    if (direction === 'prev') {
      setActivePortfolioIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
    } else {
      setActivePortfolioIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    }
  };

  return (
    <div className="titik-visual-website">
      {/* Navigation Bar */}
      <header className="site-header">
        <div className="container header-inner">
          {/* Logo */}
          <div className="logo-wrapper">
            <img src="../img/img.png" alt="Titik Visual Logo" className="logo" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="nav" aria-label="Primary navigation">
            <a href="#home" className="nav-link active">Home</a>
            <a href="../page-about/index.html" className="nav-link">About</a>
            <a href="../page-layanan/index.html" className="nav-link">Services</a>
            <a href="../page-portfolio/index.html" className="nav-link">Portfolio</a>
            <a href="../halaman-careers/index.html" className="nav-link">Careers</a>
            <a href="../page-contact/index.html" className="nav-link">Contact</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle" 
            type="button" 
            aria-label="Toggle mobile menu" 
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} aria-hidden={!isMobileMenuOpen}>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#home" className="mobile-nav-link active">Home</a>
            <a href="../page-about/index.html" className="mobile-nav-link">About</a>
            <a href="../page-layanan/index.html" className="mobile-nav-link">Services</a>
            <a href="../page-portfolio/index.html" className="mobile-nav-link">Portfolio</a>
            <a href="../halaman-careers/index.html" className="mobile-nav-link">Careers</a>
            <a href="../page-contact/index.html" className="mobile-nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="container hero-inner">
            <p className="kicker">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="kicker-icon"
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5z" />
              </svg>
              Titik Visual - Digital Creative Studio Yogyakarta
            </p>
            <h1 className="hero-title">
              <span className="line-1">Titik Visual</span><br />
              <span className="line-2">Creative Studio</span>
            </h1>
            <p className="hero-lead">Dari Ide Menjadi Kenyataan dengan <span className="highlight">Sentuhan Kreativitas</span></p>
            <p className="hero-sub">Titik Visual adalah Digital Creative Studio yang berpengalaman dalam UI/UX Design,
              Web Development, Mobile App, Social Media Management, dan Custom Merchandise Premium.
              Kami menghadirkan solusi kreatif lengkap untuk mengembangkan bisnis Anda di Yogyakarta dan seluruh Indonesia.</p>
            <div className="hero-actions">
              <a href="../page-portfolio/index.html" className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5z" />
                </svg>
                <span>Lihat Portofolio</span>
              </a>
              <a href="https://wa.me/6281804376001" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>Konsultasi Gratis</span>
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
              <div className="featured-card">
                <div className="icon-box">
                  <img src="../img/ui-ux desain.png" alt="UI/UX Design Icon" className="icon" />
                </div>
                <h4>UI/UX Design</h4>
                <p>Desain interface yang user-friendly dan menarik untuk aplikasi dan website</p>
              </div>

              <div className="featured-card">
                <div className="icon-box">
                  <img src="../img/icon-website.png" alt="Website Development Icon" className="icon" />
                </div>
                <h4>Website Development</h4>
                <p>Website responsif dan modern untuk bisnis Anda</p>
              </div>

              <div className="featured-card">
                <div className="icon-box">
                  <img src="../img/icon-custom-merchandise.png" alt="Custom Merchandise Icon" className="icon" />
                </div>
                <h4>Custom Merchandise</h4>
                <p>Payung, tumbler, totebag, dan merchandise custom berkualitas</p>
              </div>

              <div className="featured-card">
                <div className="icon-box">
                  <img src="../img/icon-corporate-gift.png" alt="Corporate Gifts Icon" className="icon" />
                </div>
                <h4>Corporate Gifts</h4>
                <p>Paket seminar kit, powerbank, flashdisk untuk kebutuhan corporate</p>
              </div>

              <div className="featured-card">
                <div className="icon-box">
                  <img src="../img/icon-drinkware.png" alt="Drinkware Collection Icon" className="icon" />
                </div>
                <h4>Drinkware Collection</h4>
                <p>Botol minum, tumbler, mug, gelas kaca, dan drink jar custom</p>
              </div>

              <div className="featured-card">
                <div className="icon-box">
                  <img src="../img/icon-logo dan brand.png" alt="Logo & Brand Identity Icon" className="icon" />
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
                <img src="../img/icon-custom-merchandise.png" alt="Custom Merchandise Icon" className="badge-icon" /> 
                Titik Visual Expertise
              </span>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src="../img/ui-ux desain.png" alt="UI/UX Design Icon" className="icon" />
                  </div>
                  <h4>UI/UX Design</h4>
                </div>
                <span className="tag">Populer</span>
                <p>Desain interface yang user-friendly dan menarik</p>
                <span className="price">Mulai Rp 2.5jt</span>
              </div>

              <div className="service-card">
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src="../img/icon-website.png" alt="Website Development Icon" className="icon" />
                  </div>
                  <h4>Website Development</h4>
                </div>
                <span className="tag">Populer</span>
                <p>Website responsif dan modern untuk bisnis</p>
                <span className="price">Mulai Rp 3.5jt</span>
              </div>

              <div className="service-card">
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src="../img/icon-mobile-app.png" alt="Mobile App Development Icon" className="icon" />
                  </div>
                  <h4>Mobile App Development</h4>
                </div>
                <span className="tag">Populer</span>
                <p>Aplikasi mobile iOS dan Android</p>
                <a className="price" href="../page-layanan/index.html">Mulai Rp 15jt</a>
              </div>

              <div className="service-card">
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src="../img/icon-custom-merchandise.png" alt="Logo Design Icon" className="icon" />
                  </div>
                  <h4>Logo Design</h4>
                </div>
                <span className="tag">Populer</span>
                <p>Logo profesional dan brand identity</p>
                <a className="price" href="../page-layanan/index.html">Mulai Rp 500rb</a>
              </div>

              <div className="service-card">
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src="../img/icon-sosial-media.png" alt="Social Media Management Icon" className="icon" />
                  </div>
                  <h4>Social Media Management</h4>
                </div>
                <span className="tag">Populer</span>
                <p>Kelola dan kembangkan media sosial brand</p>
                <a className="price" href="../page-layanan/index.html">Mulai Rp 1.5jt/bulan</a>
              </div>

              <div className="service-card">
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src="../img/icon-digital-marketing.png" alt="Digital Marketing Icon" className="icon" />
                  </div>
                  <h4>Digital Marketing</h4>
                </div>
                <span className="tag">Populer</span>
                <p>Strategi pemasaran digital yang efektif</p>
                <a className="price" href="../page-layanan/index.html">Mulai Rp 2jt/bulan</a>
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
                <img src="../img/icon-lifestyle.png" className="btn-icon" alt="icon" />Kualitas Premium
              </button>
            </div>

            <div className="merch-grid">
              <div className="merch-card">
                <div className="icon-box">
                  <img src="../img/icon-custom-drinkware.png" className="merch-icon" alt="Drinkware" />
                </div>
                <div className="card-title">
                  <h3>Custom Drinkware</h3>
                  <span className="badge">Terbaik</span>
                </div>
                <p>Botol minum, tumbler, mug kaca custom</p>
                <a className="price-link" href="../Page Detail Layanan Custom Merchandise/index.html">Mulai Rp 25rb/pcs →</a>
              </div>

              <div className="merch-card">
                <div className="icon-box">
                  <img src="../img/icon-custom-bag.png" className="merch-icon" alt="Custom Bags" />
                </div>
                <div className="card-title">
                  <h3>Custom Bags</h3>
                  <span className="badge">Terbaik</span>
                </div>
                <p>Tas kanvas, tote bag, furing, tas kantor branded</p>
                <a className="price-link" href="../Page Detail Layanan Custom Merchandise/index.html">Mulai Rp 50rb/pcs →</a>
              </div>

              <div className="merch-card">
                <div className="icon-box">
                  <img src="../img/icon-corporate.png" className="merch-icon" alt="Corporate Gifts" />
                </div>
                <div className="card-title">
                  <h3>Corporate Gifts</h3>
                  <span className="badge">Terbaik</span>
                </div>
                <p>Powerbank, handsfree, paket seminar kit</p>
                <a className="price-link" href="../Page Detail Layanan Custom Merchandise/index.html">Mulai Rp 50rb/pcs →</a>
              </div>

              <div className="merch-card">
                <div className="icon-box">
                  <img src="../img/icon-lifestyle.png" className="merch-icon" alt="Lifestyle" />
                </div>
                <div className="card-title">
                  <h3>Lifestyle Products</h3>
                  <span className="badge">Terbaik</span>
                </div>
                <p>Payung custom, jam dinding, pulpen branded</p>
                <a className="price-link" href="../Page Detail Layanan Custom Merchandise/index.html">Mulai Rp 30rb/pcs →</a>
              </div>
            </div>

            <div className="center-btn">
              <a href="../page-layanan/index.html" className="see-all-btn">
                <img src="../img/icon-eye.png" className="see-icon" alt="Lihat" />
                Lihat Semua Layanan Titik Visual
              </a>      
            </div>      
          </div>
        </section>

        {/* Hero Slider */}
        <section className="hero-slider">
          <div className="hero-card">
            <div className="center-icon">
              <img src="../img/Clip path group.png" alt="" />
            </div>

            <div className="hero-content">
              <h2>Digital Creative Services</h2>
              <p>Logo Design, Social Media Management, Brand Identity</p>
            </div>

            <a href="https://wa.me/6281804376001" className="cta-btn">
              <img src="../img/phone.png" className="cta-icon" alt="" />
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
                <div className="icon"><img src="../img/icon-drinkware.png" alt="Proyek Icon" /></div>
                <h3>500+</h3>
                <p>Proyek Selesai</p>
              </div>

              <div className="achievement-card">
                <div className="icon"><img src="../img/icon-corporate-gift.png" alt="Klien Icon" /></div>
                <h3>200+</h3>
                <p>Klien Puas</p>
              </div>

              <div className="achievement-card">            
                <div className="icon"><img src="../img/5+.png" alt="Tahun Icon" /></div>
                <h3>5+</h3>
                <p>Tahun Pengalaman</p>
              </div>

              <div className="achievement-card">
                <div className="icon"><img src="../img/24-7.png" alt="Support Icon" /></div>
                <h3>24/7</h3>
                <p>Support Titik Visual</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio-section">
          <div className="portfolio-header">
            <h2>Portfolio Karya Titik Visual</h2>
            <p>Karya terbaik yang telah kami ciptakan untuk klien</p>
          </div>

          <button className="portfolio-nav prev" onClick={() => handlePortfolioNavigation('prev')}>&#10094;</button>
          <button className="portfolio-nav next" onClick={() => handlePortfolioNavigation('next')}>&#10095;</button>

          <div className="portfolio-cards">
            <div className={`portfolio-card ${activePortfolioIndex === 0 ? 'active' : ''}`}>
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

            <div className={`portfolio-card ${activePortfolioIndex === 1 ? 'active' : ''}`}>
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

            <div className={`portfolio-card ${activePortfolioIndex === 2 ? 'active' : ''}`}>
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

          <a href="../page-portfolio/index.html" className="view-btn">
            <img src="../img/icon-eye.png" alt="icon" className="btn-icon" />
            Lihat Semua Portfolio Titik Visual
          </a>      
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
                  <img src="../img/ui-ux desain.png" alt="UI/UX Icon" className="career-icon" />
                </div>
                <div className="career-card-text">
                  <h3>UI/UX Designer</h3>
                  <p>Bergabung dengan tim Titik Visual sebagai UI/UX Designer</p>
                </div>
                <span className="label">
                  <img src="../img/icon kecil magang.png" alt="icon magang" className="label-icon" />
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
                  <i className="fas fa-arrow-right"></i>
                  Lamar Sekarang
                </a>
              </div>            
            </div>

            <div className="career-card">
              <div className="career-card-header">
                <div className="icon-box">
                  <img src="../img/wd.spesialist.png" alt="Web Developer Icon" className="career-icon" />
                </div>
                <div className="career-card-text">
                  <h3>Web Developer</h3>
                  <p>Bangun website dan aplikasi web bersama tim Titik Visual</p>
                </div>
                <span className="label">
                  <img src="../img/icon kecil magang.png" alt="icon magang" className="label-icon" />
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
                  <i className="fas fa-arrow-right"></i>
                  Lamar Sekarang
                </a>
              </div>                     
            </div>

            <div className="career-card">
              <div className="career-card-header">
                <div className="icon-box">
                  <img src="../img/dm.spesialist.png" alt="Digital Marketing Icon" className="career-icon" />
                </div>
                <div className="career-card-text">
                  <h3>Digital Marketing Specialist</h3>
                  <p>Kembangkan strategi digital marketing di Titik Visual</p>
                </div>
                <span className="label">
                  <img src="../img/icon kecil magang.png" alt="icon magang" className="label-icon" />
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
                  <i className="fas fa-arrow-right"></i>
                  Lamar Sekarang
                </a>
              </div>          
            </div>

            <div className="career-card">
              <div className="career-card-header">
                <div className="icon-box">
                  <img src="../img/icon-sosial-media.png" alt="Social Media Icon" className="career-icon" />
                </div>
                <div className="career-card-text">
                  <h3>Social Media Specialist</h3>
                  <p>Kelola dan kembangkan media sosial klien Titik Visual</p>
                </div>
                <span className="label">
                  <img src="../img/icon kecil magang.png" alt="icon magang" className="label-icon" />
                  Magang
                </span> 
              </div>
              <ul className="requirements">
                <li><i className="far fa-check-circle"></i>Pengalaman mengelola media sosial.</li>
                <li><i className="far fa-check-circle"></i>Kemampuan membuat konten yang menarik.</li>
                <li><i className="far fa-check-circle"></i>Memahami tren media sosial terkini.</li>
              </ul>
              <div className="job-card social-card">
                <a href="https://wa.me/6281804376001" className="btn primary">
                  <i className="fas fa-arrow-right"></i>
                  Lamar Sekarang
                </a>
              </div>          
            </div>
          </div>

          <div className="see-all">
            <a href="../halaman-program-magang/index.html">
              Lihat Semua Posisi
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </section>
      
        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <h2 className="contact-title">Mari Berkreasi Bersama Titik Visual</h2>
            <p className="contact-subtitle">Siap mewujudkan ide kreatif Anda bersama tim Titik Visual?</p>
            <div className="contact-grid">
              <div className="contact-left">
                <h3 className="contact-subheading">Hubungi Titik Visual</h3>
                <div className="contact-item">
                  <div className="icon-wrap">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h4>WhatsApp Titik Visual</h4>
                    <p>081804376001</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon-wrap">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h4>Telepon Titik Visual</h4>
                    <p>081804376001</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon-wrap">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h4>Email Titik Visual</h4>
                    <p>titikvisualjogja@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="contact-right">
                <h3 className="contact-subheading">Siap Memulai Proyek?</h3>
                <p className="contact-desc">
                  Konsultasikan kebutuhan UI/UX, web development, digital marketing,
                  dan custom merchandise Anda dengan tim ahli Titik Visual. 
                  Dapatkan penawaran terbaik untuk proyek impian Anda!
                </p>
                <a href="https://wa.me/6281804376001" className="btn btn-green">
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp Titik Visual
                </a>
                <a href="../page-contact/index.html" className="btn btn-outline">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Halaman Kontak Lengkap
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <img src="../img/img.png" alt="Titik Visual" className="footer-logo" />
          </div>

          <div className="footer-right">
            <p>© 2024 Titik Visual. All rights reserved.</p>
            <p>Digital Creative Studio Yogyakarta - Dari Ide Menjadi Kenyataan</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TitikVisualWebsite;