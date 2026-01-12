import React, { useState, ChangeEvent } from 'react';
import './style.css';
import logoImg from '../img/img.png';
import { useContent } from '../content/ContentContext';

// Definisi tipe untuk posisi lowongan kerja
interface JobPosition {
  id: number;
  title: string;
  category: string; // Design, Engineering, Marketing, Creative, Management, Analytics
  type: string; // Full-time, Contract
  postedAt: string; // e.g., '2 hari lalu'
  salary: string; // e.g., '8-12 juta'
  location: string;
  experience: string; // e.g., '3+ tahun'
  description: string;
  responsibilities?: string[]; // Optional
  requirements: string[];
  benefits: string[];
  applyLink: string;
}

const LowonganKerjaPage = () => {
  const content = useContent();
  const [activeFilter, setActiveFilter] = useState<string>('Semua');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const jobPositions: JobPosition[] = [
    {
      id: 1,
      title: content.get('halaman-lowongan-kerja', 'job_1_title', 'Senior UI/UX Designer'),
      category: 'Design',
      type: 'Full-time',
      postedAt: content.get('halaman-lowongan-kerja', 'job_1_posted', '< 2 hari lalu'),
      salary: content.get('halaman-lowongan-kerja', 'job_1_salary', '8-12 juta'),
      location: 'Yogyakarta',
      experience: content.get('halaman-lowongan-kerja', 'job_1_exp', '3+ tahun'),
      description: content.get('halaman-lowongan-kerja', 'job_1_desc', 'Membuat high-fidelity design dan mengimplementasikan design system untuk produk digital perusahaan.'),
      responsibilities: [
        content.get('halaman-lowongan-kerja', 'job_1_resp_1', 'Lead design team'),
        content.get('halaman-lowongan-kerja', 'job_1_resp_2', 'Create design system'),
        content.get('halaman-lowongan-kerja', 'job_1_resp_3', 'User research'),
        content.get('halaman-lowongan-kerja', 'job_1_resp_4', 'Prototype development')
      ],
      requirements: [
        content.get('halaman-lowongan-kerja', 'job_1_req_1', 'S1 Desain/Terkait'),
        content.get('halaman-lowongan-kerja', 'job_1_req_2', '3+ tahun experience'),
        content.get('halaman-lowongan-kerja', 'job_1_req_3', 'Leadership skills'),
        content.get('halaman-lowongan-kerja', 'job_1_req_4', 'Portfolio strong'),
        content.get('halaman-lowongan-kerja', 'job_1_req_5', 'Figma/Adobe XD expert')
      ],
      benefits: [
        content.get('halaman-lowongan-kerja', 'benefit_bpjs', 'BPJS Kesehatan'),
        content.get('halaman-lowongan-kerja', 'benefit_bonus', 'Bonus tahunan'),
        content.get('halaman-lowongan-kerja', 'benefit_flexible', 'Flexible working'),
        content.get('halaman-lowongan-kerja', 'benefit_training', 'Training budget')
      ],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 2,
      title: content.get('halaman-lowongan-kerja', 'job_2_title', 'Full Stack Developer'),
      category: 'Engineering',
      type: 'Full-time',
      postedAt: content.get('halaman-lowongan-kerja', 'job_2_posted', '1 minggu lalu'),
      salary: content.get('halaman-lowongan-kerja', 'job_2_salary', '10-15 juta'),
      location: 'Yogyakarta',
      experience: content.get('halaman-lowongan-kerja', 'job_2_exp', '3+ tahun'),
      description: content.get('halaman-lowongan-kerja', 'job_2_desc', 'Mengembangkan aplikasi web end-to-end dengan teknologi modern dan best practices.'),
      responsibilities: [
        content.get('halaman-lowongan-kerja', 'job_2_resp_1', 'Full stack development'),
        content.get('halaman-lowongan-kerja', 'job_2_resp_2', 'Code review'),
        content.get('halaman-lowongan-kerja', 'job_2_resp_3', 'System architecture'),
        content.get('halaman-lowongan-kerja', 'job_2_resp_4', 'Performance optimization')
      ],
      requirements: [
        content.get('halaman-lowongan-kerja', 'job_2_req_1', 'S1 Informatika'),
        content.get('halaman-lowongan-kerja', 'job_2_req_2', 'React/Vue + Node.js'),
        content.get('halaman-lowongan-kerja', 'job_2_req_3', 'Database design'),
        content.get('halaman-lowongan-kerja', 'job_2_req_4', 'API development'),
        content.get('halaman-lowongan-kerja', 'job_2_req_5', 'Git workflow')
      ],
      benefits: [
        content.get('halaman-lowongan-kerja', 'benefit_bpjs', 'BPJS Kesehatan'),
        content.get('halaman-lowongan-kerja', 'benefit_laptop', 'Laptop provided'),
        content.get('halaman-lowongan-kerja', 'benefit_remote', 'Remote work option'),
        content.get('halaman-lowongan-kerja', 'benefit_career', 'Career development')
      ],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 3,
      title: content.get('halaman-lowongan-kerja', 'job_3_title', 'Digital Marketing Manager'),
      category: 'Marketing',
      type: 'Full-time',
      postedAt: content.get('halaman-lowongan-kerja', 'job_3_posted', '3 hari lalu'),
      salary: content.get('halaman-lowongan-kerja', 'job_3_salary', '7-10 juta'),
      location: 'Yogyakarta',
      experience: content.get('halaman-lowongan-kerja', 'job_3_exp', '2+ tahun'),
      description: content.get('halaman-lowongan-kerja', 'job_3_desc', 'Mengelola strategi digital marketing dan memimpin tim marketing digital untuk mencapai target bisnis.'),
      responsibilities: [
        content.get('halaman-lowongan-kerja', 'job_3_resp_1', 'Marketing strategy'),
        content.get('halaman-lowongan-kerja', 'job_3_resp_2', 'Team leadership'),
        content.get('halaman-lowongan-kerja', 'job_3_resp_3', 'Campaign management'),
        content.get('halaman-lowongan-kerja', 'job_3_resp_4', 'ROI analysis')
      ],
      requirements: [
        content.get('halaman-lowongan-kerja', 'job_3_req_1', 'S1 Marketing/Komunikasi'),
        content.get('halaman-lowongan-kerja', 'job_3_req_2', 'Google Ads certified'),
        content.get('halaman-lowongan-kerja', 'job_3_req_3', 'Team management'),
        content.get('halaman-lowongan-kerja', 'job_3_req_4', 'Data analysis'),
        content.get('halaman-lowongan-kerja', 'job_3_req_5', 'Social media expertise')
      ],
      benefits: [
        content.get('halaman-lowongan-kerja', 'benefit_bpjs', 'BPJS Kesehatan'),
        content.get('halaman-lowongan-kerja', 'benefit_marketing_budget', 'Marketing budget'),
        content.get('halaman-lowongan-kerja', 'benefit_conference', 'Conference attendance'),
        content.get('halaman-lowongan-kerja', 'benefit_performance', 'Performance bonus')
      ],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 4,
      title: content.get('halaman-lowongan-kerja', 'job_4_title', 'Content Creator'),
      category: 'Creative',
      type: 'Contract',
      postedAt: content.get('halaman-lowongan-kerja', 'job_4_posted', '5 hari lalu'),
      salary: content.get('halaman-lowongan-kerja', 'job_4_salary', '5-8 juta'),
      location: 'Yogyakarta',
      experience: content.get('halaman-lowongan-kerja', 'job_4_exp', '1+ tahun'),
      description: content.get('halaman-lowongan-kerja', 'job_4_desc', 'Membuat konten kreatif untuk berbagai platform digital dan sosial media dengan konsistensi brand.'),
      responsibilities: [
        content.get('halaman-lowongan-kerja', 'job_4_resp_1', 'Content creation'),
        content.get('halaman-lowongan-kerja', 'job_4_resp_2', 'Social media management'),
        content.get('halaman-lowongan-kerja', 'job_4_resp_3', 'Brand storytelling'),
        content.get('halaman-lowongan-kerja', 'job_4_resp_4', 'Trend analysis')
      ],
      requirements: [
        content.get('halaman-lowongan-kerja', 'job_4_req_1', 'Portfolio konten'),
        content.get('halaman-lowongan-kerja', 'job_4_req_2', 'Video editing'),
        content.get('halaman-lowongan-kerja', 'job_4_req_3', 'Photography'),
        content.get('halaman-lowongan-kerja', 'job_4_req_4', 'Social media savvy'),
        content.get('halaman-lowongan-kerja', 'job_4_req_5', 'Creative thinking')
      ],
      benefits: [
        content.get('halaman-lowongan-kerja', 'benefit_equipment', 'Equipment provided'),
        content.get('halaman-lowongan-kerja', 'benefit_creative_freedom', 'Creative freedom'),
        content.get('halaman-lowongan-kerja', 'benefit_flexible_schedule', 'Flexible schedule'),
        content.get('halaman-lowongan-kerja', 'benefit_portfolio_building', 'Portfolio building')
      ],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 5,
      title: content.get('halaman-lowongan-kerja', 'job_5_title', 'Project Manager'),
      category: 'Management',
      type: 'Full-time',
      postedAt: content.get('halaman-lowongan-kerja', 'job_5_posted', '1 hari lalu'),
      salary: content.get('halaman-lowongan-kerja', 'job_5_salary', '9-13 juta'),
      location: 'Yogyakarta',
      experience: content.get('halaman-lowongan-kerja', 'job_5_exp', '2+ tahun'),
      description: content.get('halaman-lowongan-kerja', 'job_5_desc', 'Mengelola proyek digital dari inisiasi hingga delivery dengan metodologi agile dan waterfall.'),
      responsibilities: [
        content.get('halaman-lowongan-kerja', 'job_5_resp_1', 'Project planning'),
        content.get('halaman-lowongan-kerja', 'job_5_resp_2', 'Team coordination'),
        content.get('halaman-lowongan-kerja', 'job_5_resp_3', 'Risk management'),
        content.get('halaman-lowongan-kerja', 'job_5_resp_4', 'Stakeholder communication')
      ],
      requirements: [
        content.get('halaman-lowongan-kerja', 'job_5_req_1', 'S1 Semua Jurusan'),
        content.get('halaman-lowongan-kerja', 'job_5_req_2', 'PMP/Scrum certified'),
        content.get('halaman-lowongan-kerja', 'job_5_req_3', 'Project management tools'),
        content.get('halaman-lowongan-kerja', 'job_5_req_4', 'Leadership'),
        content.get('halaman-lowongan-kerja', 'job_5_req_5', 'Communication skills')
      ],
      benefits: [
        content.get('halaman-lowongan-kerja', 'benefit_bpjs', 'BPJS Kesehatan'),
        content.get('halaman-lowongan-kerja', 'benefit_certification', 'Certification support'),
        content.get('halaman-lowongan-kerja', 'benefit_leadership_training', 'Leadership training'),
        content.get('halaman-lowongan-kerja', 'benefit_bonus', 'Annual bonus')
      ],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 6,
      title: content.get('halaman-lowongan-kerja', 'job_6_title', 'Data Analyst'),
      category: 'Analytics',
      type: 'Full-time',
      postedAt: content.get('halaman-lowongan-kerja', 'job_6_posted', '4 hari lalu'),
      salary: content.get('halaman-lowongan-kerja', 'job_6_salary', '6-9 juta'),
      location: 'Yogyakarta',
      experience: content.get('halaman-lowongan-kerja', 'job_6_exp', '1+ tahun'),
      description: content.get('halaman-lowongan-kerja', 'job_6_desc', 'Menganalisis data bisnis dan memberikan insights untuk mendukung pengambilan keputusan strategis.'),
      responsibilities: [
        content.get('halaman-lowongan-kerja', 'job_6_resp_1', 'Data analysis'),
        content.get('halaman-lowongan-kerja', 'job_6_resp_2', 'Report creation'),
        content.get('halaman-lowongan-kerja', 'job_6_resp_3', 'Dashboard development'),
        content.get('halaman-lowongan-kerja', 'job_6_resp_4', 'Business insights')
      ],
      requirements: [
        content.get('halaman-lowongan-kerja', 'job_6_req_1', 'S1 Statistik/Matematika'),
        content.get('halaman-lowongan-kerja', 'job_6_req_2', 'SQL, Python/R'),
        content.get('halaman-lowongan-kerja', 'job_6_req_3', 'Data visualization'),
        content.get('halaman-lowongan-kerja', 'job_6_req_4', 'Statistical analysis'),
        content.get('halaman-lowongan-kerja', 'job_6_req_5', 'Business acumen')
      ],
      benefits: [
        content.get('halaman-lowongan-kerja', 'benefit_bpjs', 'BPJS Kesehatan'),
        content.get('halaman-lowongan-kerja', 'benefit_learning', 'Learning budget'),
        content.get('halaman-lowongan-kerja', 'benefit_data_tools', 'Data tools access'),
        content.get('halaman-lowongan-kerja', 'benefit_flexible_hours', 'Flexible hours')
      ],
      applyLink: 'https://wa.me/6281804376001'
    }
  ];

  const filteredPositions = jobPositions.filter(position => {
    const matchesFilter = activeFilter === 'Semua' || position.category === activeFilter;
    const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          position.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Design': return 'tag-design';
      case 'Engineering': return 'tag-programming'; // Reusing existing class or new one
      case 'Marketing': return 'tag-marketing';
      case 'Creative': return 'tag-creative';
      case 'Management': return 'tag-management';
      case 'Analytics': return 'tag-analytics';
      default: return 'tag-default';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'Full-time' ? 'tag-full-time' : 'tag-contract';
  };

  return (
    <div className="lowongan-kerja-page">
      

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1><i className="fas fa-briefcase"></i> {content.get('halaman-lowongan-kerja', 'hero_title', 'Lowongan Kerja')} <strong>Titik Visual</strong></h1>
          <p>{content.get('halaman-lowongan-kerja', 'hero_desc', 'Bergabunglah dengan tim profesional kami dan kembangkan karier di industri kreatif digital. Kami menawarkan lingkungan kerja yang supportif dengan benefit menarik.')}</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' })}>{content.get('halaman-lowongan-kerja', 'btn_apply', 'Lamar Sekarang')}</button>
            <a 
              href="/careers" 
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState(null, '', '/careers');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo(0, 0);
              }}
            >
              <i className="fas fa-arrow-left"></i> {content.get('halaman-lowongan-kerja', 'btn_back', 'Kembali ke Beranda')}
            </a>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="filter-search-section">
        <div className="container">
          <div className="filter-controls">
            <span>{content.get('halaman-lowongan-kerja', 'filter_label', 'Filter Posisi:')}</span>
            <button className={`filter-btn ${activeFilter === 'Semua' ? 'active' : ''}`} onClick={() => handleFilterClick('Semua')}>{content.get('halaman-lowongan-kerja', 'filter_all', 'Semua')}</button>
            <button className={`filter-btn ${activeFilter === 'Design' ? 'active' : ''}`} onClick={() => handleFilterClick('Design')}>Design</button>
            <button className={`filter-btn ${activeFilter === 'Engineering' ? 'active' : ''}`} onClick={() => handleFilterClick('Engineering')}>Engineering</button>
            <button className={`filter-btn ${activeFilter === 'Marketing' ? 'active' : ''}`} onClick={() => handleFilterClick('Marketing')}>Marketing</button>
            <button className={`filter-btn ${activeFilter === 'Creative' ? 'active' : ''}`} onClick={() => handleFilterClick('Creative')}>Creative</button>
            <button className={`filter-btn ${activeFilter === 'Management' ? 'active' : ''}`} onClick={() => handleFilterClick('Management')}>Management</button>
          </div>
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input 
              type="text" 
              placeholder={content.get('halaman-lowongan-kerja', 'search_placeholder', 'Cari lowongan kerja...')}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="job-listings-section" id="job-listings">
        <div className="container">
          <div className="section-header">
            <h2>{filteredPositions.length} {content.get('halaman-lowongan-kerja', 'listing_title', 'Lowongan Tersedia')}</h2>
            <p>{content.get('halaman-lowongan-kerja', 'listing_subtitle', 'Temukan posisi yang sesuai dengan keahlian dan pengalaman kerjamu.')}</p>
          </div>
          
          <div className="job-listings-container">
            {filteredPositions.map(position => (
              <div className="job-card" key={position.id}>
                {/* Header: Tags & Salary info */}
                <div className="job-card-top">
                  <div className="job-tags">
                    <span className={`tag ${getCategoryColor(position.category)}`}>{position.category}</span>
                    <span className={`tag ${getTypeColor(position.type)}`}>{position.type}</span>
                    <span className="tag-time">• {position.postedAt}</span>
                  </div>
                  <div className="job-salary-info">
                    <div className="salary">Rp {position.salary}</div>
                    <div className="salary-period">{content.get('halaman-lowongan-kerja', 'per_month', 'per bulan')}</div>
                    <div className="job-meta-right">
                       <span><i className="fas fa-map-marker-alt"></i> {position.location}</span>
                       <span><i className="fas fa-briefcase"></i> {position.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="job-main-info">
                  <h3>{position.title}</h3>
                  <p className="job-description">{position.description}</p>
                </div>

                {/* Details Columns */}
                <div className="job-details-grid">
                  <div className="job-details-left job-details-column">
                    <h4>{content.get('halaman-lowongan-kerja', 'requirements_label', 'Persyaratan:')}</h4>
                    <ul>
                      {position.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>

                    {position.responsibilities && (
                      <>
                        <h4>{content.get('halaman-lowongan-kerja', 'responsibilities_label', 'Tanggung Jawab:')}</h4>
                        <ul className="responsibilities-list">
                          {position.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <div className="job-details-right job-details-column">
                    <h4>{content.get('halaman-lowongan-kerja', 'benefits_label', 'Benefit & Fasilitas:')}</h4>
                    <ul className="benefit-list">
                      {position.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                    <div className="job-card-actions in-right">
                      <a href={position.applyLink} className="btn btn-primary btn-apply" target="_blank" rel="noopener noreferrer">{content.get('halaman-lowongan-kerja', 'btn_apply_card', 'Lamar Sekarang')}</a>
                      <button className="btn btn-outline btn-detail">{content.get('halaman-lowongan-kerja', 'btn_detail', 'Detail Lengkap')}</button>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>{content.get('halaman-lowongan-kerja', 'cta_title', 'Bersiap untuk Tantangan Baru?')}</h2>
          <p>{content.get('halaman-lowongan-kerja', 'cta_desc', 'Mari bergabung dengan tim Titik Visual dan wujudkan karya digital yang berdampak bersama para profesional terbaik.')}</p>
          <div className="cta-buttons">
            <button className="btn btn-cta-primary" onClick={() => document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' })}>
               <i className="far fa-comment"></i> {content.get('halaman-lowongan-kerja', 'btn_view_jobs', 'Lihat Lowongan')}
            </button>
            <a href="mailto:titikvisualjogja@gmail.com" className="btn btn-cta-secondary">
               <i className="fas fa-arrow-up-right-from-square"></i> {content.get('halaman-lowongan-kerja', 'btn_send_cv', 'Kirim Lamaran')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-widgets">
            <div className="footer-widget footer-about">
              <img src={logoImg} alt={content.get('halaman-lowongan-kerja', 'footer_logo_alt', 'Titik Visual Logo')} className="footer-logo" />
              <p>{content.get('halaman-lowongan-kerja', 'footer_desc', 'Digital creative studio yang mengutamakan kualitas dan inovasi dalam setiap karya.')}</p>
            </div>
            <div className="footer-widget footer-links">
              <h4>{content.get('halaman-lowongan-kerja', 'footer_col_1', 'Company')}</h4>
              <ul>
                <li><a href="/about">{content.get('halaman-lowongan-kerja', 'footer_link_about', 'About Us')}</a></li>
                <li><a href="/portfolio">{content.get('halaman-lowongan-kerja', 'footer_link_portfolio', 'Portfolio')}</a></li>
                <li><a href="/services">{content.get('halaman-lowongan-kerja', 'footer_link_services', 'Services')}</a></li>
                <li><a href="/careers">{content.get('halaman-lowongan-kerja', 'footer_link_careers', 'Careers')}</a></li>
                <li><a href="/services#faq">{content.get('halaman-lowongan-kerja', 'footer_link_faq', 'FAQ')}</a></li>
              </ul>
            </div>
            <div className="footer-widget footer-links">
              <h4>{content.get('halaman-lowongan-kerja', 'footer_col_2', 'Lowongan Kerja')}</h4>
              <ul>
                <li><a href="#job-listings">{content.get('halaman-lowongan-kerja', 'footer_link_design', 'Design & Creative')}</a></li>
                <li><a href="#job-listings">{content.get('halaman-lowongan-kerja', 'footer_link_engineering', 'Engineering')}</a></li>
                <li><a href="#job-listings">{content.get('halaman-lowongan-kerja', 'footer_link_marketing', 'Marketing & Sales')}</a></li>
                <li><a href="#job-listings">{content.get('halaman-lowongan-kerja', 'footer_link_management', 'Management')}</a></li>
              </ul>
            </div>
            <div className="footer-widget footer-contact">
              <h4>{content.get('halaman-lowongan-kerja', 'footer_col_3', 'Contact')}</h4>
              <ul>
                <li><i className="fas fa-phone"></i> {content.get('halaman-lowongan-kerja', 'footer_phone', '081804376001')}</li>
                <li><i className="fas fa-envelope"></i> {content.get('halaman-lowongan-kerja', 'footer_email', 'titikvisualjogja@gmail.com')}</li>
                <li><i className="fas fa-map-marker-alt"></i> {content.get('halaman-lowongan-kerja', 'footer_address', 'Yogyakarta, Indonesia')}</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <hr />
            <p>{content.get('halaman-lowongan-kerja', 'footer_copyright', '© 2025 Titik Visual. All rights reserved.')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LowonganKerjaPage;
