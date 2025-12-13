import React, { useState, useEffect } from 'react';
import './style.css';

// --- PERBAIKAN: Import gambar secara statis untuk keandalan yang lebih baik ---
// Pastikan jalur ini benar sesuai struktur folder Anda.
import logoImage from '../img/img.png';
import aboutImage from '../img/image.png';

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
    
    return () => {
      document.body.classList.remove("page-loaded");
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
          {/* --- PERBAIKAN: Gunakan variabel gambar yang sudah diimpor --- */}
          <img src={logoImage} alt="Titik Visual Logo" className="logo" />
        </div>
        <ul className="nav-right">
          <li><a href="../beranda/beranda.tsx" className="nav-link">Home</a></li>
          <li><a href="../page-about/page-about.tsx" className="nav-link">About</a></li>
          <li><a href="../page-layanan/page-layanan.tsx" className="nav-link">Services</a></li>
          <li><a href="../page-portfolio/page-portfolio.tsx" className="nav-link">Portfolio</a></li>
          <li><a href="#careers" className="nav-link active" onClick={() => scrollToSection('careers')}>Careers</a></li>
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
          <a href="../page-portfolio/page-porftolio.tsx" className="mobile-nav-link">Portfolio</a>
          <a href="#careers" className="mobile-nav-link active" onClick={() => scrollToSection('careers')}>Careers</a>
          <a href="../page-contact/page-contact.tsx" className="mobile-nav-link">Contact</a>
        </nav>
      </div>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>Bergabunglah dengan Program <br /><span className="highlight">Titik Visual</span> Yogyakarta</h1>
            <p>Tempat berkarya dan berkembang di industri kreatif. Kami menawarkan program magang dan kesempatan karir untuk talenta muda yang passionate di bidang digital dan creative industry.</p>
            <div className="hero-buttons">
              <a href="../halaman-program-magang/program-magang.tsx" className="btn btn-primary">
                <i className="fas fa-graduation-cap"></i> Lihat Program Magang
              </a>
              <a href="https://wa.me/6281804376001" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
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
                <p>Titik Visual adalah creative hub yang berlokasi di jantung kota Yogyakarta. Kami berfokus pada pengembangan talenta digital dan industri kreatif melalui program magang intensif dan kesempatan karir bagi individu yang ingin tumbuh dan berkontribusi di dunia kreatif. Bergabunglah bersama kami untuk memulai perjalanan karirmu di industri digital!</p>
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
                  {/* --- PERBAIKAN: Gunakan variabel gambar yang sudah diimpor --- */}
                  <img src={aboutImage} alt="Tim Titik Visual" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Choice Section */}
        <section className="career-choice-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Pilihan Karir Untukmu</h2>
              <p className="section-subtitle">
                Mulai perjalanan karirmu di industri kreatif digital bersama kami. Pilih jalur yang sesuai dengan passion dan tujuan karirmu.
              </p>
            </div>
    
            <div className="career-grid">
              {/* Internship Card */}
              <div className="career-card internship">
                <div className="card-icon">
                  <img src="https://api.iconify.design/ph:student.svg?color=%23f97316" alt="Icon Magang" />
                </div>
                <h3>Program Magang</h3>
                <p>Dapatkan pengalaman praktis selama 3-6 bulan dengan bimbingan mentor berpengalaman. Tersedia 16 bidang keahlian dari design hingga programming.</p>
                <div className="info-grid">
                  <div className="info-item">
                    <span>Durasi</span>
                    <strong>3-6 Bulan</strong>
                  </div>
                  <div className="info-item">
                    <span>Posisi</span>
                    <strong>16 Bidang</strong>
                  </div>
                  <div className="info-item">
                    <span>Benefit</span>
                    <strong>Sertifikat + Uang Saku</strong>
                  </div>
                  <div className="info-item">
                    <span>Target</span>
                    <strong>Mahasiswa</strong>
                  </div>
                </div>
                <a href="../halaman-program-magang/program-magang.tsx" className="btn btn-magang">Lihat Program Magang &rarr;</a>
              </div>
    
              {/* Job Vacancy Card */}
              <div className="career-card job">
                <div className="card-icon">
                  <img src="https://api.iconify.design/ph:briefcase.svg?color=%2322c55e" alt="Icon Lowongan" />
                </div>
                <h3>Lowongan Pekerjaan</h3>
                <p>Bergabunglah dengan tim profesional kami sebagai karyawan full-time atau kontrak. Kesempatan karir dengan gaji kompetitif dan benefit menarik.</p>
                <div className="info-grid">
                  <div className="info-item">
                    <span>Tipe</span>
                    <strong>Full-time & Kontrak</strong>
                  </div>
                  <div className="info-item">
                    <span>Gaji</span>
                    <strong>5-15 Juta</strong>
                  </div>
                  <div className="info-item">
                    <span>Benefit</span>
                    <strong>BPJS + Bonus</strong>
                  </div>
                  <div className="info-item">
                    <span>Target</span>
                    <strong>Fresh Graduate+</strong>
                  </div>
                </div>
                <a href="../halaman-lowongan-kerja/lowongan-kerja.tsx" className="btn btn-lowongan">Lihat Lowongan Kerja &rarr;</a>
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
                  <p>Program yang dimana perusahaan menunjuk langsung praktisi mentor untuk memberikan pembelajaran ke siswa/mahasiswa.</p>
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
                  <h4>Penyusunan Kurikulum</h4>
                  <p>Program yang dirancang sebagai upaya menyusun kurikulum dengan kebutuhan dunia industri.</p>
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
                  <p>Program intensif yang dirancang untuk menyiapkan siswa agar siap mengikuti perlombaan tingkat nasional.</p>
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
                  <h4>Akreditasi Kampus/Sekolah</h4>
                  <p>Kerjasama antara industri dan pihak Universitas untuk menunjang penilaian akreditasi sekolah/kampus.</p>
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
        
        {/* CTA Section */}
        <section className="cta-section">
        <div className="container">
            <h2>Tertarik Bergabung Bersama Kami?</h2>
            <p>Mari tumbuh dan berkarya bersama tim profesional Titik Visual dalam menciptakan solusi digital yang berdampak.</p>
            <div className="cta-buttons">
              <a href="../halaman-program-magang/program-magang.tsx" className="btn btn-outline">
                <i className="fas fa-external-link-alt"></i> Lihat Program Magang
              </a>
              <a href="../halaman-lowongan-kerja/lowongan-kerja.tsx" className="btn btn-outline">
                <i className="fas fa-external-link-alt"></i> Lihat Lowongan Kerja
              </a>
            </div>
        </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-about">
              {/* --- PERBAIKAN: Gunakan variabel gambar yang sudah diimpor --- */}
              <img src={logoImage} alt="Titik Visual Logo" className="footer-logo" />
              <p>Digital creative studio yang mengutamakan kualitas dan inovasi dalam setiap karya.</p>
            </div>
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                {/* --- PERBAIKAN: Ubah <a href="#"> menjadi <button> untuk aksesibilitas --- */}
                <li><button type="button" className="footer-link-button">About Us</button></li>
                <li><button type="button" className="footer-link-button">Portfolio</button></li>
                <li><button type="button" className="footer-link-button">Services</button></li>
                <li><button type="button" className="footer-link-button">Careers</button></li>
                <li><button type="button" className="footer-link-button">Blog</button></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Careers</h4>
              <ul>
                {/* --- PERBAIKAN: Ubah <a href="#"> menjadi <button> untuk aksesibilitas --- */}
                <li><button type="button" className="footer-link-button">Lowongan Kerja</button></li>
                <li><button type="button" className="footer-link-button">Program magang</button></li>
                <li><button type="button" className="footer-link-button">Full Time Jobs</button></li>
                <li><button type="button" className="footer-link-button">Remote Work</button></li>
                <li><button type="button" className="footer-link-button">Contract Work</button></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Contact</h4>
              <ul className="footer-contact">
                <li><i className="fas fa-phone-alt"></i> 081804376001</li>
                <li><i className="fas fa-envelope"></i> titikvisualjogja@gmail.com</li>
                <li><i className="fas fa-map-marker-alt"></i> Yogyakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="footer-bottom">
            <p>&copy; 2024 Titik Visual. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareersPage;