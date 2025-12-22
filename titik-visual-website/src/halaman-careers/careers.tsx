import React, { useState, useEffect } from 'react';
import './style.css';
import careersImg from '../img/carreers.png';
import logoImage from '../img/image.png';
import navbarLogo from '../img/img.png';

const CareersPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Add page-loaded class to body for fade-in effect
    document.body.classList.add("page-loaded");
    
    // Ensure navbar looks correct specifically on Careers
    const nav = document.querySelector('.main-nav') as HTMLElement | null;
    const links = Array.from(document.querySelectorAll('.main-nav .nav-right a')) as HTMLAnchorElement[];
    const icons = Array.from(document.querySelectorAll('.main-nav .nav-right i')) as HTMLElement[];
    const prev: { bg?: string; shadow?: string; colors: string[]; iconColors: string[] } = { colors: [], iconColors: [] };
    if (nav) {
      prev.bg = nav.style.background;
      prev.shadow = nav.style.boxShadow;
      links.forEach(a => prev.colors.push(a.style.color));
      icons.forEach(i => prev.iconColors.push(i.style.color));
      nav.classList.remove('layanan-nav');
      nav.style.background = '#FFFFFF';
      nav.style.boxShadow = '';
      links.forEach(a => {
        a.classList.remove('text-white');
        a.style.color = '#4B5563';
      });
      icons.forEach(i => {
        i.classList.remove('fa-white');
        i.style.color = '#4B5563';
      });
    }
    return () => {
      document.body.classList.remove("page-loaded");
      // restore previous navbar inline styles when leaving Careers
      if (nav) {
        nav.style.background = prev.bg || '';
        nav.style.boxShadow = prev.shadow || '';
      }
      links.forEach((a, idx) => {
        a.style.color = prev.colors[idx] || '';
      });
      icons.forEach((i, idx) => {
        i.style.color = prev.iconColors[idx] || '';
      });
    };
  }, []);

  return (
    <div className="careers-page">
      {/* TOP BAR & NAVBAR */}
      <div className="top-bar">
        <div className="top-left">
          <div className="item"><i className="fa-solid fa-phone"></i><span>081804376001</span></div>
          <div className="item"><i className="fa-solid fa-envelope"></i><span>titikvisualjogja@gmail.com</span></div>
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
      <nav className="main-nav">
        <div className="nav-left">
          <img src={navbarLogo} alt="Titik Visual Logo" className="logo" />
        </div>
        <ul className="nav-right">
          <li><a href="../beranda/beranda.tsx" className="nav-link">Home</a></li>
          <li><a href="../page-about/page-about.tsx" className="nav-link">About</a></li>
          <li><a href="../page-layanan/page-layanan.tsx" className="nav-link">Services</a></li>
          <li><a href="../page-portfolio/page-portfolio.tsx" className="nav-link">Portfolio</a></li>
          <li><button 
            onClick={() => scrollToSection('careers')} 
            className="nav-link active"
            aria-label="Careers section"
          >
            Careers
          </button></li>
          <li><a href="../page-contact/page-contact.tsx" className="nav-link">Contact</a></li>
        </ul>
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="../beranda/beranda.tsx" className="mobile-nav-link">Home</a>
          <a href="../page-about/page-about.tsx" className="mobile-nav-link">About</a>
          <a href="../page-layanan/page-layanan.tsx" className="mobile-nav-link">Services</a>
          <a href="../page-portfolio/page-porfolio.tsx" className="mobile-nav-link">Portfolio</a>
          <button 
            onClick={() => scrollToSection('careers')} 
            className="mobile-nav-link active"
            aria-label="Careers section"
          >
            Careers
          </button>
          <a href="../page-contact/page-contact.tsx" className="mobile-nav-link">Contact</a>
        </nav>
      </div>

      <main>
        {/* Hero Section */}
        <section
          id="careers"
          className="hero relative min-h-[80vh] w-full bg-center bg-cover flex items-center justify-center"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/carreers.png), url(${careersImg})` }}
        >
          <div
            className="absolute inset-0 bg-white/80"
            style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
          />
          <div className="relative z-10 container text-center px-4">
            <h1 className="font-bold text-[52px] leading-[1.2] md:text-[56px]">
              Bergabunglah dengan Program <br />
              <span className="highlight text-orange-500">Titik Visual</span> Yogyakarta
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-gray-700">
              Tempat berkarya dan berkembang di industri kreatif. Kami menawarkan program magang dan kesempatan karir untuk talenta muda yang passionate di bidang digital dan creative industry.
            </p>
            <div
              className="hero-buttons mt-8 flex flex-row gap-4 justify-center"
              style={{ flexWrap: 'nowrap' }}
            >
              <a
                href="../halaman-program-magang/program-magang.tsx"
                className="btn btn-primary inline-flex items-center justify-center"
                style={{
                  background: 'linear-gradient(90deg, #F97316 0%, #DC2626 100%)',
                  color: '#ffffff',
                  borderRadius: '8px',
                  padding: '12px 28px',
                  boxShadow: '0 12px 24px rgba(249,115,22,0.35)',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '16px',
                  gap: '10px',
                  width: 'auto',
                  minWidth: 0,
                  whiteSpace: 'nowrap'
                }}
              >
                <i className="fas fa-graduation-cap"></i> Lihat Program Magang
              </a>
              <a
                href="../halaman-lowongan-kerja/lowongan-kerja.tsx"
                className="btn inline-flex items-center justify-center border"
                style={{
                  borderColor: '#F97316',
                  color: '#F97316',
                  backgroundColor: 'transparent',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderRadius: '8px',
                  padding: '12px 28px',
                  boxShadow: '0 8px 20px rgba(249,115,22,0.20)',
                  fontWeight: 600,
                  fontSize: '16px',
                  gap: '10px',
                  width: 'auto',
                  minWidth: 0,
                  whiteSpace: 'nowrap'
                }}
              >
                <i className="fas fa-briefcase"></i> Cari Lowongan Kerja
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-content">
                <div className="section-header">
                  <span className="section-line"></span>
                  <h2>Tentang Titik Visual Yogyakarta</h2>
                </div>
                <div className="square"></div>
                <p>Titik Visual adalah creative hub yang berlokasi di jantung kota Yogyakarta. Kami berfokus pada pengembangan talenta digital dan industri kreatif melalui program magang intensif dan kesempatan kerja bagi individu yang ingin tumbuh dan berkontribusi di dunia kreatif. Bergabunglah bersama kami untuk memulai perjalanan karirmu di industri digital!</p>
                <p>Dengan pengalaman lebih dari 5 tahun, Titik Visual telah membantu ratusan mahasiswa dan fresh graduate untuk memulai karier mereka melalui program magang yang terstruktur dan kesempatan kerja di industri kreatif digital.</p>
                <div className="features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="feature-text">
                      <h4>Tim Berpengalaman</h4>
                      <p>Mentor profesional</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="feature-text">
                      <h4>Kualitas Terjamin</h4>
                      <p>Program terstruktur</p>
                    </div>
                  </div>
                </div>
                <a href="../page-about/page-about.tsx" className="btn btn-learn-more">Pelajari Lebih Lanjut</a>
              </div>
              <div className="about-image">
                <div className="image-card">
                  <img src={logoImage} alt="Logo Titik Visual" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Choice Section - Updated Layout */}
        <section className="py-20 bg-white w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Pilihan Karir Untukmu
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Mulai perjalanan karirmu di industri kreatif digital bersama kami. Pilih jalur yang sesuai dengan passion dan tujuan karirmu.
              </p>
            </div>

            {/* Cards Layout */}
            <div className="grid grid-cols-2 gap-4 md:gap-12">
              {/* Card 1: Program Magang */}
              <div className="bg-white rounded-[2.5rem] border border-orange-200 p-8 md:p-10 flex flex-col items-center hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mb-8 text-orange-500 text-3xl shadow-sm">
                   <i className="fas fa-graduation-cap"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Program Magang</h3>
                <p className="text-gray-500 text-center mb-10 text-sm md:text-base px-4">
                  Dapatkan pengalaman praktis selama 3-6 bulan dengan bimbingan mentor berpengalaman. Tersedia 16 bidang keahlian dari design hingga programming.
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 w-full mb-10">
                  <div className="bg-orange-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#9A3412] font-bold mb-1 text-sm">Durasi</div>
                     <div className="text-[#EA580C] text-base md:text-lg">3–6 Bulan</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#9A3412] font-bold mb-1 text-sm">Posisi</div>
                     <div className="text-[#EA580C] text-base md:text-lg">16 Bidang</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#9A3412] font-bold mb-1 text-sm">Benefit</div>
                     <div className="text-[#EA580C] text-xs md:text-sm leading-tight">Sertifikat +<br/>Uang Saku</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#9A3412] font-bold mb-1 text-sm">Target</div>
                     <div className="text-[#EA580C] text-base md:text-lg">Mahasiswa</div>
                  </div>
                </div>

                {/* Button */}
                <a 
                  href="../halaman-program-magang/program-magang.tsx"
                  className="w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity mt-auto shadow-lg shadow-orange-200"
                  style={{ background: 'linear-gradient(90deg, #F97316 0%, #EF4444 100%)' }}
                >
                  Lihat Program Magang <i className="fas fa-arrow-right text-sm"></i>
                </a>
              </div>

              {/* Card 2: Lowongan Pekerjaan */}
              <div className="bg-white rounded-[2.5rem] border border-green-200 p-8 md:p-10 flex flex-col items-center hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mb-8 text-green-600 text-3xl shadow-sm">
                   <i className="fas fa-briefcase"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Lowongan Pekerjaan</h3>
                <p className="text-gray-500 text-center mb-10 text-sm md:text-base px-4">
                  Bergabunglah dengan tim profesional kami sebagai karyawan full-time atau kontrak. Kesempatan karir dengan gaji kompetitif dan benefit menarik.
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 w-full mb-10">
                   <div className="bg-green-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#166534] font-bold mb-1 text-sm">Tipe</div>
                     <div className="text-[#16A34A] text-xs md:text-sm leading-tight">Full-time &<br/>Kontrak</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#166534] font-bold mb-1 text-sm">Gaji</div>
                     <div className="text-[#16A34A] text-base md:text-lg">5–15 Juta</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#166534] font-bold mb-1 text-sm">Benefit</div>
                     <div className="text-[#16A34A] text-base md:text-lg leading-tight">BPJS +<br/>Bonus</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#166534] font-bold mb-1 text-sm">Target</div>
                     <div className="text-[#16A34A] text-xs md:text-sm">Fresh Graduate+</div>
                  </div>
                </div>

                {/* Button */}
                <a 
                  href="../halaman-lowongan-kerja/lowongan-kerja.tsx"
                  className="w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity mt-auto shadow-lg shadow-green-200"
                  style={{ background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)' }}
                >
                  Lihat Lowongan Kerja <i className="fas fa-arrow-right text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Alumni Magang</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Proyek Selesai</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Bidang Keahlian</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Tingkat Kepuasan</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Program Section */}
        <section className="our-program-section">
          <div className="container">
            <div className="section-header">
              <h2>Our Program</h2>
              <p>Magangjogja.com - Platform komprehensif untuk pengembangan karir dan pendidikan di Yogyakarta</p>
            </div>
            <div className="program-grid">
              <div className="program-item">
                <div className="program-number">1</div>
                <div className="program-content">
                  <h4>Dosen & Guru Tamu</h4>
                  <p>Program yang dimana perusahaan menerjunkan langsung praktisi mentor untuk memberikan pembelajaran ke siswa/mahasiswa.</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">2</div>
                <div className="program-content">
                  <h4>Seminar, Workshop, & Pelatihan</h4>
                  <p>Program yang dirancang memberikan pelatihan softskill dan hardskill secara online/offline ke siswa/mahasiswa/freshgraduate/umum.</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">3</div>
                <div className="program-content">
                  <h4>Pembekalan Magang & PKL</h4>
                  <p>Program yang dirancang memberikan pembekalan magang atau pkl ke siswa ataupun mahasiswa sebelum terjun ke perusahaan yang dituju.</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">4</div>
                <div className="program-content">
                  <h4>Penyelarasan Kurikulum</h4>
                  <p>Program yang dirancang sebagai upaya menyesuaikan kurikulum dengan kebutuhan dunia industri.</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">5</div>
                <div className="program-content">
                  <h4>Teaching Factory</h4>
                  <p>Program yang dirancang sebagai bentuk proses pembelajaran siswa dengan mengerjakan project langsung oleh perusahaan di ruang lingkup sekolah.</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">6</div>
                <div className="program-content">
                  <h4>Kelas Industri</h4>
                  <p>Program untuk meningkatkan hardskill siswa dengan pembelajaran langsung dari praktisi industri.</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">7</div>
                <div className="program-content">
                  <h4>Mentor Lomba LKS</h4>
                  <p>Program intens yang dirancang untuk menyiapkan siswa agar siap mengikuti perlombaan tingkat nasional.</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">8</div>
                <div className="program-content">
                  <h4>Juri Lomba LKS</h4>
                  <p>Program penyediaan juri profesional untuk kompetisi LKS tingkat regional dan nasional.</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">9</div>
                <div className="program-content">
                  <h4>Akreditas Kampus/Sekolah</h4>
                  <p>Kerjasama antara industry dan pihak Universitas untuk menunjang penilaian akreditasi sekolah/kampus.</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">10</div>
                <div className="program-content">
                  <h4>Jobfair Sekolah/Universitas</h4>
                  <p>Program kerjasama sebagai bentuk rekrutmen karyawan di sekolah/kampus untuk memenuhi kebutuhan SDM di perusahaan.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="section-header">
              <h2>Hubungi Kami</h2>
              <p>Ada pertanyaan tentang program magang atau lowongan kerja? Jangan ragu untuk menghubungi kami.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4>Alamat</h4>
                <p>Jl. Malioboro No. 123<br />Yogyakarta 55271<br />Indonesia</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h4>Telepon</h4>
                <p>+62 274 123 4567<br />+62 812 3456 7890</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h4>Email</h4>
                <p>info@titikvisual.com<br />career@titikvisual.com</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full bg-gradient-to-r from-emerald-600 to-orange-500 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Tertarik Bergabung Bersama Kami?
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto mb-8">
              Mari tumbuh dan berkarya bersama tim profesional Titik Visual dalam menciptakan solusi digital yang berdampak.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="../halaman-program-magang/program-magang.tsx"
                className="inline-flex items-center gap-2 rounded-md border border-white text-white px-6 py-3 bg-transparent hover:bg-white hover:text-gray-900 transition"
              >
                <i className="fas fa-external-link-alt"></i>
                Lihat Program Magang
              </a>
              <a
                href="../halaman-lowongan-kerja/lowongan-kerja.tsx"
                className="inline-flex items-center gap-2 rounded-md border border-white text-white px-6 py-3 bg-transparent hover:bg-white hover:text-gray-900 transition"
              >
                <i className="fas fa-external-link-alt"></i>
                Lihat Lowongan Kerja
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start">
            <div className="footer-about space-y-4">
              <img src="../img/img.png" alt="Titik Visual Logo" className="footer-logo" />
              <p className="text-gray-400 leading-relaxed max-w-sm">Digital creative studio yang mengutamakan kualitas dan inovasi dalam setiap karya.</p>
            </div>
            <div className="footer-links text-left">
              <h4 className="text-white text-base font-semibold mb-4">Company</h4>
              <ul className="space-y-2 leading-relaxed">
                <li><button 
                  onClick={() => window.location.href = '#about'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="About Us"
                  >
                    About Us
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#portfolio'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Portfolio"
                  >
                    Portfolio
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#services'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Services"
                  >
                    Services
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#careers'} 
                          className="footer-link-button active text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Careers"
                  >
                    Careers
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#blog'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Blog"
                  >
                    Blog
                  </button></li>
              </ul>
            </div>
            <div className="footer-links text-left">
              <h4 className="text-white text-base font-semibold mb-4">Careers</h4>
              <ul className="space-y-2 leading-relaxed">
                <li><button 
                  onClick={() => window.location.href = '#job-openings'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Lowongan Kerja"
                  >
                    Lowongan Kerja
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#internship'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Program magang"
                  >
                    Program magang
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#full-time-jobs'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Full Time Jobs"
                  >
                    Full Time Jobs
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#remote-work'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Remote Work"
                  >
                    Remote Work
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#contract-work'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Contract Work"
                  >
                    Contract Work
                  </button></li>
              </ul>
            </div>
            <div className="footer-links text-left">
              <h4 className="text-white text-base font-semibold mb-4">Contact</h4>
              <ul className="footer-contact space-y-2 leading-relaxed">
                <li className="flex items-center gap-2 text-gray-400"><i className="fas fa-phone-alt"></i><span>081804376001</span></li>
                <li className="flex items-center gap-2 text-gray-400"><i className="fas fa-envelope"></i><span>titikvisualjogja@gmail.com</span></li>
                <li className="flex items-center gap-2 text-gray-400"><i className="fas fa-map-marker-alt"></i><span>Yogyakarta, Indonesia</span></li>
              </ul>
            </div>
          </div>
          <hr className="footer-divider w-full border-t border-gray-700 mt-8" />
          <div className="footer-bottom text-gray-400 text-center">
            <p>&copy; 2024 Titik Visual. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareersPage;
