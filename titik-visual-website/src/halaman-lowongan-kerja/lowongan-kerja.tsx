import React, { useState, ChangeEvent } from 'react';
import './style.css';
import logoImg from '../img/img.png';

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
      title: 'Senior UI/UX Designer',
      category: 'Design',
      type: 'Full-time',
      postedAt: '< 2 hari lalu',
      salary: '8-12 juta',
      location: 'Yogyakarta',
      experience: '3+ tahun',
      description: 'Membuat high-fidelity design dan mengimplementasikan design system untuk produk digital perusahaan.',
      responsibilities: [
        'Lead design team',
        'Create design system',
        'User research',
        'Prototype development'
      ],
      requirements: [
        'S1 Desain/Terkait',
        '3+ tahun experience',
        'Leadership skills',
        'Portfolio strong',
        'Figma/Adobe XD expert'
      ],
      benefits: [
        'BPJS Kesehatan',
        'Bonus tahunan',
        'Flexible working',
        'Training budget'
      ],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      category: 'Engineering',
      type: 'Full-time',
      postedAt: '1 minggu lalu',
      salary: '10-15 juta',
      location: 'Yogyakarta',
      experience: '3+ tahun',
      description: 'Mengembangkan aplikasi web end-to-end dengan teknologi modern dan best practices.',
      responsibilities: [
        'Full stack development',
        'Code review',
        'System architecture',
        'Performance optimization'
      ],
      requirements: [
        'S1 Informatika',
        'React/Vue + Node.js',
        'Database design',
        'API development',
        'Git workflow'
      ],
      benefits: [
        'BPJS Kesehatan',
        'Laptop provided',
        'Remote work option',
        'Career development'
      ],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 3,
      title: 'Digital Marketing Manager',
      category: 'Marketing',
      type: 'Full-time',
      postedAt: '3 hari lalu',
      salary: '7-10 juta',
      location: 'Yogyakarta',
      experience: '2+ tahun',
      description: 'Mengelola strategi digital marketing dan memimpin tim marketing digital untuk mencapai target bisnis.',
      responsibilities: [
        'Marketing strategy',
        'Team leadership',
        'Campaign management',
        'ROI analysis'
      ],
      requirements: [
        'S1 Marketing/Komunikasi',
        'Google Ads certified',
        'Team management',
        'Data analysis',
        'Social media expertise'
      ],
      benefits: [
        'BPJS Kesehatan',
        'Marketing budget',
        'Conference attendance',
        'Performance bonus'
      ],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 4,
      title: 'Content Creator',
      category: 'Creative',
      type: 'Contract',
      postedAt: '5 hari lalu',
      salary: '5-8 juta',
      location: 'Yogyakarta',
      experience: '1+ tahun',
      description: 'Membuat konten kreatif untuk berbagai platform digital dan sosial media dengan konsistensi brand.',
      responsibilities: [
        'Content creation',
        'Social media management',
        'Brand storytelling',
        'Trend analysis'
      ],
      requirements: [
        'Portfolio konten',
        'Video editing',
        'Photography',
        'Social media savvy',
        'Creative thinking'
      ],
      benefits: [
        'Equipment provided',
        'Creative freedom',
        'Flexible schedule',
        'Portfolio building'
      ],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 5,
      title: 'Project Manager',
      category: 'Management',
      type: 'Full-time',
      postedAt: '1 hari lalu',
      salary: '9-13 juta',
      location: 'Yogyakarta',
      experience: '2+ tahun',
      description: 'Mengelola proyek digital dari inisiasi hingga delivery dengan metodologi agile dan waterfall.',
      responsibilities: [
        'Project planning',
        'Team coordination',
        'Risk management',
        'Stakeholder communication'
      ],
      requirements: [
        'S1 Semua Jurusan',
        'PMP/Scrum certified',
        'Project management tools',
        'Leadership',
        'Communication skills'
      ],
      benefits: [
        'BPJS Kesehatan',
        'Certification support',
        'Leadership training',
        'Annual bonus'
      ],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 6,
      title: 'Data Analyst',
      category: 'Analytics',
      type: 'Full-time',
      postedAt: '4 hari lalu',
      salary: '6-9 juta',
      location: 'Yogyakarta',
      experience: '1+ tahun',
      description: 'Menganalisis data bisnis dan memberikan insights untuk mendukung pengambilan keputusan strategis.',
      responsibilities: [
        'Data analysis',
        'Report creation',
        'Dashboard development',
        'Business insights'
      ],
      requirements: [
        'S1 Statistik/Matematika',
        'SQL, Python/R',
        'Data visualization',
        'Statistical analysis',
        'Business acumen'
      ],
      benefits: [
        'BPJS Kesehatan',
        'Learning budget',
        'Data tools access',
        'Flexible hours'
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
        <div className="nav-left"><img src={logoImg} alt="Titik Visual Logo" className="logo" /></div>
        <ul className="nav-right">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="mobile-menu-toggle"><span></span><span></span><span></span></div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1><i className="fas fa-briefcase"></i> Lowongan Kerja <strong>Titik Visual</strong></h1>
          <p>Bergabunglah dengan tim profesional kami dan kembangkan karier di industri kreatif digital. Kami menawarkan lingkungan kerja yang supportif dengan benefit menarik.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' })}>Lamar Sekarang</button>
            <a href="/careers" className="btn btn-secondary"><i className="fas fa-arrow-left"></i> Kembali ke Beranda</a>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="filter-search-section">
        <div className="container">
          <div className="filter-controls">
            <span>Filter Posisi:</span>
            <button className={`filter-btn ${activeFilter === 'Semua' ? 'active' : ''}`} onClick={() => handleFilterClick('Semua')}>Semua</button>
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
              placeholder="Cari lowongan kerja..." 
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
            <h2>{filteredPositions.length} Lowongan Tersedia</h2>
            <p>Temukan posisi yang sesuai dengan keahlian dan pengalaman kerjamu.</p>
          </div>
          
          <div className="job-listings-container">
            {filteredPositions.map(position => (
              <div className="job-card" key={position.id}>
                {/* Header: Tags & Salary info */}
                <div className="job-card-top">
                  <div className="job-tags">
                    <span className={`tag ${getCategoryColor(position.category)}`}>{position.category}</span>
                    <span className={`tag ${getTypeColor(position.type)}`}>{position.type}</span>
                    <span className="tag tag-time"><i className="far fa-clock"></i> {position.postedAt}</span>
                  </div>
                  <div className="job-salary-info">
                    <div className="salary">Rp {position.salary}</div>
                    <div className="salary-period">per bulan</div>
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
                  <div className="job-details-column">
                    <h4>Persyaratan:</h4>
                    <ul>
                      {position.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  {position.responsibilities && (
                    <div className="job-details-column">
                      <h4>Tanggung Jawab:</h4>
                      <ul>
                        {position.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="job-details-column">
                    <h4>Benefit & Fasilitas:</h4>
                    <ul className="benefit-list">
                      {position.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="job-card-actions">
                  <a href={position.applyLink} className="btn btn-primary btn-block" target="_blank" rel="noopener noreferrer">Lamar Sekarang</a>
                  <button className="btn btn-outline btn-block">Detail Lengkap</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Bersiap untuk Tantangan Baru?</h2>
          <p>Mari bergabung dengan tim Titik Visual dan wujudkan karya digital yang berdampak bersama para profesional terbaik.</p>
          <div className="cta-buttons">
            <button className="btn btn-cta-primary" onClick={() => window.location.reload()}>
               <i className="fas fa-search"></i> Lihat Lowongan
            </button>
            <a href="mailto:titikvisualjogja@gmail.com" className="btn btn-cta-secondary">
               <i className="fas fa-paper-plane"></i> Kirim Lamaran
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-widgets">
            <div className="footer-widget footer-about">
              <img src={logoImg} alt="Titik Visual Logo" className="footer-logo" />
              <p>Digital creative studio yang mengutamakan kualitas dan inovasi dalam setiap karya.</p>
            </div>
            <div className="footer-widget footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-widget footer-links">
              <h4>Lowongan Kerja</h4>
              <ul>
                <li><a href="#careers">Design & Creative</a></li>
                <li><a href="#careers">Engineering</a></li>
                <li><a href="#careers">Marketing & Sales</a></li>
                <li><a href="#careers">Management</a></li>
              </ul>
            </div>
            <div className="footer-widget footer-contact">
              <h4>Contact</h4>
              <ul>
                <li><i className="fas fa-phone"></i> 081804376001</li>
                <li><i className="fas fa-envelope"></i> titikvisualjogja@gmail.com</li>
                <li><i className="fas fa-map-marker-alt"></i> Yogyakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <hr />
            <p>&copy; 2024 Titik Visual. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LowonganKerjaPage;
