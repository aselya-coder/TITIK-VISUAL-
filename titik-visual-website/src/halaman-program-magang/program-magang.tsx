import React, { useState, ChangeEvent } from 'react';
import './style.css';
import logoImg from '../img/img.png';

// Definisi tipe untuk posisi magang
interface InternshipPosition {
  id: number;
  title: string;
  category: string;
  level: string;
  duration: string;
  description: string;
  requirements: string[];
  benefits: string[];
  applyLink: string;
}

const InternshipPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Semua');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const internshipPositions: InternshipPosition[] = [
    {
      id: 1,
      title: 'UI/UX Designer',
      category: 'Design',
      level: 'Beginner',
      duration: '3-6 bulan',
      description: 'Merancang antarmuka pengguna yang intuitif dan pengalaman pengguna yang optimal untuk berbagai platform digital.',
      requirements: ['Mahasiswa Desain/Informatika', 'Menguasai Figma/Adobe XD'],
      benefits: ['Sertifikat', 'Uang saku', 'Mentoring'],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      category: 'Programming',
      level: 'Intermediate',
      duration: '3-6 bulan',
      description: 'Mengembangkan tampilan website dan aplikasi menggunakan teknologi modern seperti React, Vue, atau Angular.',
      requirements: ['Mahasiswa Informatika/Teknik', 'HTML, CSS, JavaScript'],
      benefits: ['Sertifikat', 'Uang saku', 'Project portfolio'],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 3,
      title: 'Backend Developer',
      category: 'Programming',
      level: 'Intermediate',
      duration: '3-6 bulan',
      description: 'Membangun sistem backend, API, dan database untuk mendukung aplikasi web dan mobile.',
      requirements: ['Mahasiswa Informatika', 'PHP/Python/Node.js'],
      benefits: ['Sertifikat', 'Uang saku', 'Technical mentoring'],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 4,
      title: 'Human Resource',
      category: 'Management',
      level: 'Beginner',
      duration: '3-4 bulan',
      description: 'Mengelola rekrutmen, administrasi karyawan, dan pengembangan sumber daya manusia.',
      requirements: ['Mahasiswa Psikologi/Manajemen', 'Komunikasi baik'],
      benefits: ['Sertifikat', 'Networking', 'HR experience'],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 5,
      title: 'Administrasi',
      category: 'Management',
      level: 'Beginner',
      duration: '3-4 bulan',
      description: 'Mengelola dokumen, data entry, dan mendukung operasional kantor sehari-hari.',
      requirements: ['Mahasiswa semua jurusan', 'MS Office'],
      benefits: ['Sertifikat', 'Uang saku', 'Office skills'],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 6,
      title: 'Social Media Specialist',
      category: 'Marketing',
      level: 'Beginner',
      duration: '3-6 bulan',
      description: 'Mengelola konten media sosial, engagement, dan strategi digital marketing di berbagai platform.',
      requirements: ['Mahasiswa Komunikasi/Marketing', 'Kreatif'],
      benefits: ['Sertifikat', 'Portfolio', 'Digital marketing skills'],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 7,
      title: 'Photographer/Videographer',
      category: 'Creative',
      level: 'Intermediate',
      duration: '3-6 bulan',
      description: 'Mengambil foto dan video untuk kebutuhan konten, dokumentasi, dan promosi perusahaan.',
      requirements: ['Portfolio foto/video', 'Kamera DSLR/Mirrorless'],
      benefits: ['Sertifikat', 'Equipment access', 'Creative portfolio'],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 8,
      title: 'Content Writer',
      category: 'Creative',
      level: 'Beginner',
      duration: '3-6 bulan',
      description: 'Menulis artikel, blog, caption, dan berbagai konten kreatif untuk website dan media sosial.',
      requirements: ['Mahasiswa Sastra/Komunikasi', 'Writing skills'],
      benefits: ['Sertifikat', 'Writing portfolio', 'SEO training'],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 9,
      title: 'Graphic Designer',
      category: 'Design',
      level: 'Intermediate',
      duration: '3-6 bulan',
      description: 'Membuat desain grafis untuk keperluan branding, promosi, dan komunikasi visual.',
      requirements: ['Portfolio desain', 'Adobe Creative Suite'],
      benefits: ['Sertifikat', 'Design portfolio', 'Creative mentoring'],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 10,
      title: 'Digital Marketing',
      category: 'Marketing',
      level: 'Intermediate',
      duration: '3-6 bulan',
      description: 'Mengelola kampanye digital, SEO, SEM, dan analisis performa marketing online.',
      requirements: ['Mahasiswa Marketing/Komunikasi', 'Google Ads/Analytics'],
      benefits: ['Sertifikat', 'Google certification', 'Marketing experience'],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 11,
      title: 'Marcomm/Public Relations',
      category: 'Communication',
      level: 'Intermediate',
      duration: '3-6 bulan',
      description: 'Mengelola komunikasi eksternal, press release, dan membangun hubungan dengan media.',
      requirements: ['Mahasiswa Komunikasi/PR', 'Writing skills'],
      benefits: ['Sertifikat', 'Media relations', 'Communication skills'],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 12,
      title: 'Host/Presenter',
      category: 'Communication',
      level: 'Beginner',
      duration: '3-6 bulan',
      description: 'Menjadi pembawa acara untuk event, webinar, dan konten video perusahaan.',
      requirements: ['Public speaking', 'Confident'],
      benefits: ['Sertifikat', 'Speaking experience', 'Personal branding'],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 13,
      title: 'TikTok Creator',
      category: 'Creative',
      level: 'Beginner',
      duration: '3-6 bulan',
      description: 'Membuat konten kreatif dan viral untuk platform TikTok sesuai dengan brand guidelines.',
      requirements: ['Kreatif', 'Familiar dengan TikTok'],
      benefits: ['Sertifikat', 'Content portfolio', 'Social media growth'],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 14,
      title: 'Content Planner',
      category: 'Marketing',
      level: 'Intermediate',
      duration: '3-6 bulan',
      description: 'Merencanakan strategi konten, editorial calendar, dan koordinasi tim kreatif.',
      requirements: ['Strategic thinking', 'Project management'],
      benefits: ['Sertifikat', 'Planning skills', 'Strategy experience'],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 15,
      title: 'Project Manager',
      category: 'Management',
      level: 'Advanced',
      duration: '4-6 bulan',
      description: 'Mengelola proyek dari perencanaan hingga eksekusi, koordinasi tim, dan monitoring progress.',
      requirements: ['Leadership skills', 'Project management tools'],
      benefits: ['Sertifikat', 'PM certification', 'Leadership experience'],
      applyLink: 'https://wa.me/6281804376001'
    },
    {
      id: 16,
      title: 'Animator',
      category: 'Creative',
      level: 'Advanced',
      duration: '3-6 bulan',
      description: 'Membuat animasi 2D/3D untuk keperluan promosi, explainer video, dan konten digital.',
      requirements: ['Portfolio animasi', 'After Effects/Blender'],
      benefits: ['Sertifikat', 'Animation portfolio', 'Technical skills'],
      applyLink: 'https://wa.me/6281804376001'
    }
  ];

  const filteredPositions = internshipPositions.filter(position => {
    const matchesFilter = activeFilter === 'Semua' || position.category === activeFilter;
    const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          position.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Design': return 'tag-design';
      case 'Programming': return 'tag-programming';
      case 'Marketing': return 'tag-marketing';
      case 'Creative': return 'tag-creative';
      case 'Management': return 'tag-management';
      case 'Communication': return 'tag-communication';
      default: return '';
    }
  };

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Beginner': return 'tag-level-beginner';
      case 'Intermediate': return 'tag-level-intermediate';
      case 'Advanced': return 'tag-level-advanced';
      default: return '';
    }
  };
 
   const getBenefitClass = (benefit: string) => {
     const b = benefit.toLowerCase();
     if (b.includes('sertifikat')) return 'benefit-yellow';
     if (b.includes('uang saku')) return 'benefit-orange';
     if (b.includes('mentoring')) return 'benefit-purple';
     if (b.includes('portfolio')) return 'benefit-blue';
     if (b.includes('network')) return 'benefit-green';
     if (b.includes('hr')) return 'benefit-teal';
     if (b.includes('office')) return 'benefit-slate';
     if (b.includes('digital marketing')) return 'benefit-pink';
     if (b.includes('equipment')) return 'benefit-rose';
     if (b.includes('seo')) return 'benefit-lime';
     if (b.includes('certification')) return 'benefit-yellow';
     if (b.includes('experience')) return 'benefit-teal';
     if (b.includes('skills')) return 'benefit-slate';
     if (b.includes('planning')) return 'benefit-blue';
     if (b.includes('strategy')) return 'benefit-blue';
     if (b.includes('leadership')) return 'benefit-teal';
     if (b.includes('communication')) return 'benefit-pink';
     if (b.includes('speaking')) return 'benefit-pink';
     if (b.includes('branding')) return 'benefit-pink';
     return '';
   };

  React.useEffect(() => {
    const nav = document.querySelector('.main-nav') as HTMLElement | null;
    if (!nav) return;
    nav.style.background = '';
    nav.classList.remove('layanan-nav');
    const links = Array.from(nav.querySelectorAll('.nav-right a')) as HTMLAnchorElement[];
    links.forEach(a => a.style.color = '');
    const icons = Array.from(nav.querySelectorAll('.nav-right i')) as HTMLElement[];
    icons.forEach(i => i.style.color = '');
    const logo = nav.querySelector('img.logo') as HTMLImageElement | null;
    if (logo) {
      logo.style.height = '50px';
      logo.style.opacity = '1';
    }
  }, []);
  return (
    <div className="internship-page">
      

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1><i className="fas fa-graduation-cap hero-icon"></i> <span className="title-main">Program Magang</span> <strong>Titik Visual</strong></h1>
          <p>Mulai perjalanan kariermu di industri kreatif digital. Dapatkan pengalaman praktis, mentoring dari profesional, dan sertifikat yang diakui industri.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('internship-grid')?.scrollIntoView({ behavior: 'smooth' })}>Daftar Sekarang</button>
            <a href="/careers" className="btn btn-secondary"><i className="fas fa-arrow-left"></i> Kembali ke Beranda</a>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="filter-search-section">
        <div className="container">
          <div className="filter-controls">
            <span>Filter Posisi:</span>
            <button 
              className={`filter-btn ${activeFilter === 'Semua' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('Semua')}
            >
              Semua
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Design' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('Design')}
            >
              Design
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Programming' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('Programming')}
            >
              Programming
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Marketing' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('Marketing')}
            >
              Marketing
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Creative' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('Creative')}
            >
              Creative
            </button>
          </div>
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input 
              type="text" 
              placeholder="Cari posisi magang..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </section>

      {/* Internship Grid Section */}
      <section className="internship-grid">
        <div className="container">
          <h2>{filteredPositions.length} Posisi Magang Tersedia</h2>
          <p className="section-subtitle">Pilih bidang yang sesuai dengan passion dan minat kariermu</p>
          <div className="grid-container">
            {filteredPositions.map(position => (
              <div className="internship-card" key={position.id}>
                <div className="card-header">
                  <div className="card-tags">
                    <span className={`tag ${getCategoryColor(position.category)}`}>{position.category}</span>
                    <span className={`tag ${getLevelColor(position.level)}`}>{position.level}</span>
                  </div>
                  <div className="card-duration"><i className="far fa-clock"></i> {position.duration}</div>
                </div>
                <div className="card-body">
                  <h3>{position.title}</h3>
                  <p>{position.description}</p>
                  <h4>Persyaratan:</h4>
                  <ul>
                    {position.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                  <h4>Benefit:</h4>
                  <div className="benefit-tags">
                    {position.benefits.map((benefit, index) => (
                      <span className={`benefit-tag ${getBenefitClass(benefit)}`} key={index}>{benefit}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer">
                  <a href={position.applyLink} className="btn" target="_blank" rel="noopener noreferrer">Daftar Sekarang <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Siap Memulai Karier dari Sini?</h2>
          <p>Gabung dalam program magang di Titik Visual dan dapatkan pengalaman nyata bersama tim kreatif dan profesional kami.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-cta-primary"><i className="fa-regular fa-comment"></i> Konsultasi Sekarang</a>
            <a href="https://wa.me/6281804376001" className="btn btn-cta-secondary" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> Daftar Magang</a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-widgets">
            <div className="footer-widget about-widget">
              <img src={logoImg} alt="Titik Visual Logo" className="footer-logo" />
              <p>Digital creative studio yang mengutamakan kualitas dan inovasi dalam setiap karya.</p>
            </div>
            <div className="footer-widget links-widget">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
            <div className="footer-widget links-widget">
              <h4>Program Magang</h4>
              <ul>
                <li><a href="#careers">UI/UX Design</a></li>
                <li><a href="#careers">FrontEnd Developer</a></li>
                <li><a href="#careers">BackEnd Developer</a></li>
                <li><a href="#careers">Human Resource</a></li>
                <li><a href="#careers">Graphic Designer</a></li>
              </ul>
            </div>
            <div className="footer-widget contact-widget">
              <h4>Contact</h4>
              <ul>
                <li><i className="fas fa-phone"></i> 081804376001</li>
                <li><i className="fas fa-envelope"></i> titikvisualjogja@gmail.com</li>
                <li><i className="fas fa-map-marker-alt"></i> Yogyakarta, Indonesia</li>
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

export default InternshipPage;
