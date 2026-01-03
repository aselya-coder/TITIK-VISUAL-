import React, { useEffect } from 'react';
import './style.css';
import { useContent } from '../content/ContentContext';
import careersImg from '../img/carreers.png';
import logoImage from '../img/image.png';

const CareersPage: React.FC = () => {
  const content = useContent();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Add page-loaded class to body for fade-in effect
    document.body.classList.add("page-loaded");
    
    return () => {
      document.body.classList.remove("page-loaded");
    };
  }, []);

  return (
    <div className="careers-page">



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
              {content.get('halaman-careers', 'hero_title_1', 'Bergabunglah dengan Program')} <br />
              <span className="highlight text-orange-500">Titik Visual</span> {content.get('halaman-careers', 'hero_location', 'Yogyakarta')}
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-gray-700">
              {content.get('halaman-careers', 'hero_desc', 'Tempat berkarya dan berkembang di industri kreatif. Kami menawarkan program magang dan kesempatan karir untuk talenta muda yang passionate di bidang digital dan creative industry.')}
            </p>
            <div
              className="hero-buttons mt-8 flex flex-row gap-4 justify-center"
              style={{ flexWrap: 'nowrap' }}
            >
              <a
                href="/program-magang"
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
                <i className="fas fa-graduation-cap"></i> {content.get('halaman-careers', 'btn_internship', 'Lihat Program Magang')}
              </a>
              <a
                href="/lowongan-kerja"
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
                <i className="fas fa-briefcase"></i> {content.get('halaman-careers', 'btn_jobs', 'Cari Lowongan Kerja')}
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
                  <h2>{content.get('halaman-careers', 'about_title', 'Tentang Titik Visual Yogyakarta')}</h2>
                </div>
                <div className="square"></div>
                <p>{content.get('halaman-careers', 'about_desc_1', 'Titik Visual adalah creative hub yang berlokasi di jantung kota Yogyakarta. Kami berfokus pada pengembangan talenta digital dan industri kreatif melalui program magang intensif dan kesempatan kerja bagi individu yang ingin tumbuh dan berkontribusi di dunia kreatif. Bergabunglah bersama kami untuk memulai perjalanan karirmu di industri digital!')}</p>
                <p>{content.get('halaman-careers', 'about_desc_2', 'Dengan pengalaman lebih dari 5 tahun, Titik Visual telah membantu ratusan mahasiswa dan fresh graduate untuk memulai karier mereka melalui program magang yang terstruktur dan kesempatan kerja di industri kreatif digital.')}</p>
                <div className="features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="feature-text">
                      <h4>{content.get('halaman-careers', 'feature_team_title', 'Tim Berpengalaman')}</h4>
                      <p>{content.get('halaman-careers', 'feature_team_desc', 'Mentor profesional')}</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="feature-text">
                      <h4>{content.get('halaman-careers', 'feature_quality_title', 'Kualitas Terjamin')}</h4>
                      <p>{content.get('halaman-careers', 'feature_quality_desc', 'Program terstruktur')}</p>
                    </div>
                  </div>
                </div>
                <a href="/about" className="btn btn-learn-more">{content.get('halaman-careers', 'btn_learn_more', 'Pelajari Lebih Lanjut')}</a>
              </div>
              <div className="about-image">
                <div className="image-card">
                  <img src={logoImage} alt={content.get('halaman-careers', 'about_img_alt', 'Logo Titik Visual')} />
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
                {content.get('halaman-careers', 'choice_title', 'Pilihan Karir Untukmu')}
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                {content.get('halaman-careers', 'choice_subtitle', 'Mulai perjalanan karirmu di industri kreatif digital bersama kami. Pilih jalur yang sesuai dengan passion dan tujuan karirmu.')}
              </p>
            </div>

            {/* Cards Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
              {/* Card 1: Program Magang */}
              <div className="bg-white rounded-[2.5rem] border border-orange-200 p-8 md:p-10 flex flex-col items-center hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mb-8 text-orange-500 text-3xl shadow-sm">
                   <i className="fas fa-graduation-cap"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{content.get('halaman-careers', 'card_intern_title', 'Program Magang')}</h3>
                <p className="text-gray-500 text-center mb-10 text-sm md:text-base px-4">
                  {content.get('halaman-careers', 'card_intern_desc', 'Dapatkan pengalaman praktis selama 3-6 bulan dengan bimbingan mentor berpengalaman. Tersedia 16 bidang keahlian dari design hingga programming.')}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 w-full mb-10">
                  <div className="bg-orange-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#9A3412] font-bold mb-1 text-sm">{content.get('halaman-careers', 'info_duration_label', 'Durasi')}</div>
                     <div className="text-[#EA580C] text-base md:text-lg">{content.get('halaman-careers', 'info_duration_val_intern', '3–6 Bulan')}</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#9A3412] font-bold mb-1 text-sm">{content.get('halaman-careers', 'info_position_label', 'Posisi')}</div>
                     <div className="text-[#EA580C] text-base md:text-lg">{content.get('halaman-careers', 'info_position_val_intern', '16 Bidang')}</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#9A3412] font-bold mb-1 text-sm">{content.get('halaman-careers', 'info_benefit_label', 'Benefit')}</div>
                     <div className="text-[#EA580C] text-xs md:text-sm leading-tight">{content.get('halaman-careers', 'info_benefit_val_intern', 'Sertifikat +<br/>Uang Saku')}</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#9A3412] font-bold mb-1 text-sm">{content.get('halaman-careers', 'info_target_label', 'Target')}</div>
                     <div className="text-[#EA580C] text-base md:text-lg">{content.get('halaman-careers', 'info_target_val_intern', 'Mahasiswa')}</div>
                  </div>
                </div>

                {/* Button */}
                <a 
                  href="/program-magang"
                  className="w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity mt-auto shadow-lg shadow-orange-200"
                  style={{ background: 'linear-gradient(90deg, #F97316 0%, #EF4444 100%)' }}
                >
                  {content.get('halaman-careers', 'btn_internship', 'Lihat Program Magang')} <i className="fas fa-arrow-right text-sm"></i>
                </a>
              </div>

              {/* Card 2: Lowongan Pekerjaan */}
              <div className="bg-white rounded-[2.5rem] border border-green-200 p-8 md:p-10 flex flex-col items-center hover:shadow-xl transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mb-8 text-green-600 text-3xl shadow-sm">
                   <i className="fas fa-briefcase"></i>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{content.get('halaman-careers', 'card_job_title', 'Lowongan Pekerjaan')}</h3>
                <p className="text-gray-500 text-center mb-10 text-sm md:text-base px-4">
                  {content.get('halaman-careers', 'card_job_desc', 'Bergabunglah dengan tim profesional kami sebagai karyawan full-time atau kontrak. Kesempatan karir dengan gaji kompetitif dan benefit menarik.')}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 w-full mb-10">
                   <div className="bg-green-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#166534] font-bold mb-1 text-sm">{content.get('halaman-careers', 'info_type_label', 'Tipe')}</div>
                     <div className="text-[#16A34A] text-xs md:text-sm leading-tight">{content.get('halaman-careers', 'info_type_val_job', 'Full-time &<br/>Kontrak')}</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#166534] font-bold mb-1 text-sm">{content.get('halaman-careers', 'info_salary_label', 'Gaji')}</div>
                     <div className="text-[#16A34A] text-base md:text-lg">{content.get('halaman-careers', 'info_salary_val_job', '5–15 Juta')}</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#166534] font-bold mb-1 text-sm">{content.get('halaman-careers', 'info_benefit_label', 'Benefit')}</div>
                     <div className="text-[#16A34A] text-base md:text-lg leading-tight">{content.get('halaman-careers', 'info_benefit_val_job', 'BPJS +<br/>Bonus')}</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl flex flex-col items-center justify-center text-center h-24">
                     <div className="text-[#166534] font-bold mb-1 text-sm">{content.get('halaman-careers', 'info_target_label', 'Target')}</div>
                     <div className="text-[#16A34A] text-xs md:text-sm">{content.get('halaman-careers', 'info_target_val_job', 'Fresh Graduate+')}</div>
                  </div>
                </div>

                {/* Button */}
                <a 
                  href="/lowongan-kerja"
                  className="w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity mt-auto shadow-lg shadow-green-200"
                  style={{ background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)' }}
                >
                  {content.get('halaman-careers', 'btn_jobs', 'Lihat Lowongan Kerja')} <i className="fas fa-arrow-right text-sm"></i>
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
                <span className="stat-label">{content.get('halaman-careers', 'stat_alumni', 'Alumni Magang')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">{content.get('halaman-careers', 'stat_projects', 'Proyek Selesai')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">{content.get('halaman-careers', 'stat_fields', 'Bidang Keahlian')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">{content.get('halaman-careers', 'stat_satisfaction', 'Tingkat Kepuasan')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Program Section */}
        <section className="our-program-section">
          <div className="container">
            <div className="section-header">
              <h2>{content.get('halaman-careers', 'program_title', 'Our Program')}</h2>
              <p>{content.get('halaman-careers', 'program_subtitle', 'Magangjogja.com - Platform komprehensif untuk pengembangan karir dan pendidikan di Yogyakarta')}</p>
            </div>
            <div className="program-grid">
              <div className="program-item">
                <div className="program-number">1</div>
                <div className="program-content">
                  <h4>{content.get('halaman-careers', 'program_1_title', 'Dosen & Guru Tamu')}</h4>
                  <p>{content.get('halaman-careers', 'program_1_desc', 'Program yang dimana perusahaan menerjunkan langsung praktisi mentor untuk memberikan pembelajaran ke siswa/mahasiswa.')}</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">2</div>
                <div className="program-content">
                  <h4>{content.get('halaman-careers', 'program_2_title', 'Seminar, Workshop, & Pelatihan')}</h4>
                  <p>{content.get('halaman-careers', 'program_2_desc', 'Program yang dirancang memberikan pelatihan softskill dan hardskill secara online/offline ke siswa/mahasiswa/freshgraduate/umum.')}</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">3</div>
                <div className="program-content">
                  <h4>{content.get('halaman-careers', 'program_3_title', 'Pembekalan Magang & PKL')}</h4>
                  <p>{content.get('halaman-careers', 'program_3_desc', 'Program yang dirancang memberikan pembekalan magang atau pkl ke siswa ataupun mahasiswa sebelum terjun ke perusahaan yang dituju.')}</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">4</div>
                <div className="program-content">
                  <h4>{content.get('halaman-careers', 'program_4_title', 'Penyelarasan Kurikulum')}</h4>
                  <p>{content.get('halaman-careers', 'program_4_desc', 'Program yang dirancang sebagai upaya menyesuaikan kurikulum dengan kebutuhan dunia industri.')}</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">5</div>
                <div className="program-content">
                  <h4>{content.get('halaman-careers', 'program_5_title', 'Teaching Factory')}</h4>
                  <p>{content.get('halaman-careers', 'program_5_desc', 'Program yang dirancang sebagai bentuk proses pembelajaran siswa dengan mengerjakan project langsung oleh perusahaan di ruang lingkup sekolah.')}</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">6</div>
                <div className="program-content">
                  <h4>{content.get('halaman-careers', 'program_6_title', 'Kelas Industri')}</h4>
                  <p>{content.get('halaman-careers', 'program_6_desc', 'Program untuk meningkatkan hardskill siswa dengan pembelajaran langsung dari praktisi industri.')}</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">7</div>
                <div className="program-content">
                  <h4>{content.get('halaman-careers', 'program_7_title', 'Mentor Lomba LKS')}</h4>
                  <p>{content.get('halaman-careers', 'program_7_desc', 'Program intens yang dirancang untuk menyiapkan siswa agar siap mengikuti perlombaan tingkat nasional.')}</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">8</div>
                <div className="program-content">
                  <h4>{content.get('halaman-careers', 'program_8_title', 'Juri Lomba LKS')}</h4>
                  <p>{content.get('halaman-careers', 'program_8_desc', 'Program penyediaan juri profesional untuk kompetisi LKS tingkat regional dan nasional.')}</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">9</div>
                <div className="program-content">
                  <h4>{content.get('halaman-careers', 'program_9_title', 'Akreditas Kampus/Sekolah')}</h4>
                  <p>{content.get('halaman-careers', 'program_9_desc', 'Kerjasama antara industry dan pihak Universitas untuk menunjang penilaian akreditasi sekolah/kampus.')}</p>
                </div>
              </div>
              <div className="program-item">
                <div className="program-number">10</div>
                <div className="program-content">
                  <h4>{content.get('halaman-careers', 'program_10_title', 'Jobfair Sekolah/Universitas')}</h4>
                  <p>{content.get('halaman-careers', 'program_10_desc', 'Program kerjasama sebagai bentuk rekrutmen karyawan di sekolah/kampus untuk memenuhi kebutuhan SDM di perusahaan.')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="section-header">
              <h2>{content.get('halaman-careers', 'contact_title', 'Hubungi Kami')}</h2>
              <p>{content.get('halaman-careers', 'contact_subtitle', 'Ada pertanyaan tentang program magang atau lowongan kerja? Jangan ragu untuk menghubungi kami.')}</p>
            </div>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4>{content.get('halaman-careers', 'contact_address_label', 'Alamat')}</h4>
                <p>{content.get('halaman-careers', 'contact_address_val', 'Jl. Malioboro No. 123<br />Yogyakarta 55271<br />Indonesia')}</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h4>{content.get('halaman-careers', 'contact_phone_label', 'Telepon')}</h4>
                <p>{content.get('halaman-careers', 'contact_phone_val', '+62 274 123 4567<br />+62 812 3456 7890')}</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h4>{content.get('halaman-careers', 'contact_email_label', 'Email')}</h4>
                <p>{content.get('halaman-careers', 'contact_email_val', 'info@titikvisual.com<br />career@titikvisual.com')}</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full bg-gradient-to-r from-emerald-600 to-orange-500 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              {content.get('halaman-careers', 'cta_bottom_title', 'Tertarik Bergabung Bersama Kami?')}
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto mb-8">
              {content.get('halaman-careers', 'cta_bottom_desc', 'Mari tumbuh dan berkarya bersama tim profesional Titik Visual dalam menciptakan solusi digital yang berdampak.')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/program-magang"
                className="inline-flex items-center gap-2 rounded-md border border-white text-white px-6 py-3 bg-transparent hover:bg-white hover:text-gray-900 transition"
              >
                <i className="fas fa-external-link-alt"></i>
                {content.get('halaman-careers', 'btn_internship', 'Lihat Program Magang')}
              </a>
              <a
                href="/lowongan-kerja"
                className="inline-flex items-center gap-2 rounded-md border border-white text-white px-6 py-3 bg-transparent hover:bg-white hover:text-gray-900 transition"
              >
                <i className="fas fa-external-link-alt"></i>
                {content.get('halaman-careers', 'btn_jobs', 'Lihat Lowongan Kerja')}
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
              <p className="text-gray-400 leading-relaxed max-w-sm">{content.get('halaman-careers', 'footer_brand_desc', 'Digital creative studio yang mengutamakan kualitas dan inovasi dalam setiap karya.')}</p>
            </div>
            <div className="footer-links text-left">
              <h4 className="text-white text-base font-semibold mb-4">{content.get('halaman-careers', 'footer_col_1_title', 'Company')}</h4>
              <ul className="space-y-2 leading-relaxed">
                <li><button 
                  onClick={() => window.location.href = '#about'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="About Us"
                  >
                    {content.get('halaman-careers', 'footer_link_about', 'About Us')}
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#portfolio'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Portfolio"
                  >
                    {content.get('halaman-careers', 'footer_link_portfolio', 'Portfolio')}
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#services'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Services"
                  >
                    {content.get('halaman-careers', 'footer_link_services', 'Services')}
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#careers'} 
                          className="footer-link-button active text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Careers"
                  >
                    {content.get('halaman-careers', 'footer_link_careers', 'Careers')}
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#contact'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Contact"
                  >
                    {content.get('halaman-careers', 'footer_link_contact', 'Contact')}
                  </button></li>
              </ul>
            </div>
            <div className="footer-links text-left">
              <h4 className="text-white text-base font-semibold mb-4">{content.get('halaman-careers', 'footer_col_2_title', 'Careers')}</h4>
              <ul className="space-y-2 leading-relaxed">
                <li><button 
                  onClick={() => window.location.href = '#job-openings'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Lowongan Kerja"
                  >
                    {content.get('halaman-careers', 'footer_link_jobs', 'Lowongan Kerja')}
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#program-magang'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Program magang"
                  >
                    {content.get('halaman-careers', 'footer_link_internship', 'Program magang')}
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#full-time-jobs'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Full Time Jobs"
                  >
                    {content.get('halaman-careers', 'footer_link_fulltime', 'Full Time Jobs')}
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#remote-work'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Remote Work"
                  >
                    {content.get('halaman-careers', 'footer_link_remote', 'Remote Work')}
                  </button></li>
                <li><button 
                  onClick={() => window.location.href = '#contract-work'} 
                          className="footer-link-button text-gray-400 hover:text-gray-200 transition-colors"
                          aria-label="Contract Work"
                  >
                    {content.get('halaman-careers', 'footer_link_contract', 'Contract Work')}
                  </button></li>
              </ul>
            </div>
            <div className="footer-links text-left">
              <h4 className="text-white text-base font-semibold mb-4">{content.get('halaman-careers', 'footer_col_3_title', 'Contact')}</h4>
              <ul className="footer-contact space-y-2 leading-relaxed">
                <li className="flex items-center gap-2 text-gray-400"><i className="fas fa-phone-alt"></i><span>{content.get('halaman-careers', 'footer_contact_phone', '081804376001')}</span></li>
                <li className="flex items-center gap-2 text-gray-400"><i className="fas fa-envelope"></i><span>{content.get('halaman-careers', 'footer_contact_email', 'titikvisualjogja@gmail.com')}</span></li>
                <li className="flex items-center gap-2 text-gray-400"><i className="fas fa-map-marker-alt"></i><span>{content.get('halaman-careers', 'footer_contact_address', 'Yogyakarta, Indonesia')}</span></li>
              </ul>
            </div>
          </div>
          <hr className="footer-divider w-full border-t border-gray-700 mt-8" />
          <div className="footer-bottom text-gray-400 text-center">
            <p>{content.get('halaman-careers', 'footer_copyright', '© 2025 Titik Visual. All rights reserved.')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareersPage;
