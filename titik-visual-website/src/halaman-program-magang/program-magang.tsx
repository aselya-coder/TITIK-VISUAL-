import React, { useState, ChangeEvent } from 'react';
import './style.css';
import logoImg from '../img/img.png';
import { useContent } from '../content/ContentContext';

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
  const content = useContent();
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
      title: content.get('halaman-program-magang', 'position_1_title', 'UI/UX Designer'),
      category: 'Design',
      level: 'Beginner',
      duration: content.get('halaman-program-magang', 'duration_3_6_months', '3-6 bulan'),
      description: content.get('halaman-program-magang', 'position_1_desc', 'Merancang antarmuka pengguna yang intuitif dan pengalaman pengguna yang optimal untuk berbagai platform digital.'),
      requirements: [
        content.get('halaman-program-magang', 'position_1_req_1', 'Mahasiswa Desain/Informatika'),
        content.get('halaman-program-magang', 'position_1_req_2', 'Menguasai Figma/Adobe XD')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_allowance', 'Uang saku'),
        content.get('halaman-program-magang', 'benefit_mentoring', 'Mentoring')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
    },
    {
      id: 2,
      title: content.get('halaman-program-magang', 'position_2_title', 'Frontend Developer'),
      category: 'Programming',
      level: 'Intermediate',
      duration: content.get('halaman-program-magang', 'duration_3_6_months', '3-6 bulan'),
      description: content.get('halaman-program-magang', 'position_2_desc', 'Mengembangkan tampilan website dan aplikasi menggunakan teknologi modern seperti React, Vue, atau Angular.'),
      requirements: [
        content.get('halaman-program-magang', 'position_2_req_1', 'Mahasiswa Informatika/Teknik'),
        content.get('halaman-program-magang', 'position_2_req_2', 'HTML, CSS, JavaScript')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_allowance', 'Uang saku'),
        content.get('halaman-program-magang', 'benefit_project_portfolio', 'Project portfolio')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
    },
    {
      id: 3,
      title: content.get('halaman-program-magang', 'position_3_title', 'Backend Developer'),
      category: 'Programming',
      level: 'Intermediate',
      duration: content.get('halaman-program-magang', 'duration_3_6_months', '3-6 bulan'),
      description: content.get('halaman-program-magang', 'position_3_desc', 'Membangun sistem backend, API, dan database untuk mendukung aplikasi web dan mobile.'),
      requirements: [
        content.get('halaman-program-magang', 'position_3_req_1', 'Mahasiswa Informatika'),
        content.get('halaman-program-magang', 'position_3_req_2', 'PHP/Python/Node.js')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_allowance', 'Uang saku'),
        content.get('halaman-program-magang', 'benefit_technical_mentoring', 'Technical mentoring')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
    },
    {
      id: 4,
      title: content.get('halaman-program-magang', 'position_4_title', 'Human Resource'),
      category: 'Management',
      level: 'Beginner',
      duration: content.get('halaman-program-magang', 'duration_3_4_months', '3-4 bulan'),
      description: content.get('halaman-program-magang', 'position_4_desc', 'Mengelola rekrutmen, administrasi karyawan, dan pengembangan sumber daya manusia.'),
      requirements: [
        content.get('halaman-program-magang', 'position_4_req_1', 'Mahasiswa Psikologi/Manajemen'),
        content.get('halaman-program-magang', 'position_4_req_2', 'Komunikasi baik')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_networking', 'Networking'),
        content.get('halaman-program-magang', 'benefit_hr_experience', 'HR experience')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
    },
    {
      id: 5,
      title: content.get('halaman-program-magang', 'position_5_title', 'Administrasi'),
      category: 'Management',
      level: 'Beginner',
      duration: content.get('halaman-program-magang', 'duration_3_4_months', '3-4 bulan'),
      description: content.get('halaman-program-magang', 'position_5_desc', 'Mengelola dokumen, data entry, dan mendukung operasional kantor sehari-hari.'),
      requirements: [
        content.get('halaman-program-magang', 'position_5_req_1', 'Mahasiswa semua jurusan'),
        content.get('halaman-program-magang', 'position_5_req_2', 'MS Office')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_allowance', 'Uang saku'),
        content.get('halaman-program-magang', 'benefit_office_skills', 'Office skills')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
    },
    {
      id: 6,
      title: content.get('halaman-program-magang', 'position_6_title', 'Social Media Specialist'),
      category: 'Marketing',
      level: 'Beginner',
      duration: content.get('halaman-program-magang', 'duration_3_6_months', '3-6 bulan'),
      description: content.get('halaman-program-magang', 'position_6_desc', 'Mengelola konten media sosial, engagement, dan strategi digital marketing di berbagai platform.'),
      requirements: [
        content.get('halaman-program-magang', 'position_6_req_1', 'Mahasiswa Komunikasi/Marketing'),
        content.get('halaman-program-magang', 'position_6_req_2', 'Kreatif')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_portfolio', 'Portfolio'),
        content.get('halaman-program-magang', 'benefit_digital_marketing_skills', 'Digital marketing skills')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
    },
    {
      id: 7,
      title: content.get('halaman-program-magang', 'position_7_title', 'Photographer/Videographer'),
      category: 'Creative',
      level: 'Intermediate',
      duration: content.get('halaman-program-magang', 'duration_3_6_months', '3-6 bulan'),
      description: content.get('halaman-program-magang', 'position_7_desc', 'Mengambil foto dan video untuk kebutuhan konten, dokumentasi, dan promosi perusahaan.'),
      requirements: [
        content.get('halaman-program-magang', 'position_7_req_1', 'Portfolio foto/video'),
        content.get('halaman-program-magang', 'position_7_req_2', 'Kamera DSLR/Mirrorless')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_equipment_access', 'Equipment access'),
        content.get('halaman-program-magang', 'benefit_creative_portfolio', 'Creative portfolio')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
    },
    {
      id: 8,
      title: content.get('halaman-program-magang', 'position_8_title', 'Content Writer'),
      category: 'Creative',
      level: 'Beginner',
      duration: content.get('halaman-program-magang', 'duration_3_6_months', '3-6 bulan'),
      description: content.get('halaman-program-magang', 'position_8_desc', 'Menulis artikel, blog, caption, dan berbagai konten kreatif untuk website dan media sosial.'),
      requirements: [
        content.get('halaman-program-magang', 'position_8_req_1', 'Mahasiswa Sastra/Komunikasi'),
        content.get('halaman-program-magang', 'position_8_req_2', 'Writing skills')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_writing_portfolio', 'Writing portfolio'),
        content.get('halaman-program-magang', 'benefit_seo_training', 'SEO training')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
    },
    {
      id: 9,
      title: content.get('halaman-program-magang', 'position_9_title', 'Graphic Designer'),
      category: 'Design',
      level: 'Intermediate',
      duration: content.get('halaman-program-magang', 'duration_3_6_months', '3-6 bulan'),
      description: content.get('halaman-program-magang', 'position_9_desc', 'Membuat desain grafis untuk keperluan branding, promosi, dan komunikasi visual.'),
      requirements: [
        content.get('halaman-program-magang', 'position_9_req_1', 'Portfolio desain'),
        content.get('halaman-program-magang', 'position_9_req_2', 'Adobe Creative Suite')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_design_portfolio', 'Design portfolio'),
        content.get('halaman-program-magang', 'benefit_creative_mentoring', 'Creative mentoring')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
    },
    {
      id: 10,
      title: content.get('halaman-program-magang', 'position_10_title', 'Digital Marketing'),
      category: 'Marketing',
      level: 'Intermediate',
      duration: content.get('halaman-program-magang', 'duration_3_6_months', '3-6 bulan'),
      description: content.get('halaman-program-magang', 'position_10_desc', 'Mengelola kampanye digital, SEO, SEM, dan analisis performa marketing online.'),
      requirements: [
        content.get('halaman-program-magang', 'position_10_req_1', 'Mahasiswa Marketing/Komunikasi'),
        content.get('halaman-program-magang', 'position_10_req_2', 'Google Ads/Analytics')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_google_certification', 'Google certification'),
        content.get('halaman-program-magang', 'benefit_marketing_experience', 'Marketing experience')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
    },
    {
      id: 11,
      title: content.get('halaman-program-magang', 'position_11_title', 'Marcomm/Public Relations'),
      category: 'Communication',
      level: 'Intermediate',
      duration: content.get('halaman-program-magang', 'duration_3_6_months', '3-6 bulan'),
      description: content.get('halaman-program-magang', 'position_11_desc', 'Mengelola komunikasi eksternal, press release, dan membangun hubungan dengan media.'),
      requirements: [
        content.get('halaman-program-magang', 'position_11_req_1', 'Mahasiswa Komunikasi/PR'),
        content.get('halaman-program-magang', 'position_11_req_2', 'Writing skills')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_media_relations', 'Media relations'),
        content.get('halaman-program-magang', 'benefit_communication_skills', 'Communication skills')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
    },
    {
      id: 12,
      title: content.get('halaman-program-magang', 'position_12_title', 'Host/Presenter'),
      category: 'Communication',
      level: 'Beginner',
      duration: content.get('halaman-program-magang', 'duration_3_6_months', '3-6 bulan'),
      description: content.get('halaman-program-magang', 'position_12_desc', 'Menjadi pembawa acara untuk event, webinar, dan konten video perusahaan.'),
      requirements: [
        content.get('halaman-program-magang', 'position_12_req_1', 'Public speaking'),
        content.get('halaman-program-magang', 'position_12_req_2', 'Confident')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_speaking_experience', 'Speaking experience'),
        content.get('halaman-program-magang', 'benefit_personal_branding', 'Personal branding')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
    },
    {
      id: 13,
      title: content.get('halaman-program-magang', 'position_13_title', 'TikTok Creator'),
      category: 'Creative',
      level: 'Beginner',
      duration: content.get('halaman-program-magang', 'duration_3_6_months', '3-6 bulan'),
      description: content.get('halaman-program-magang', 'position_13_desc', 'Membuat konten kreatif dan viral untuk platform TikTok sesuai dengan brand guidelines.'),
      requirements: [
        content.get('halaman-program-magang', 'position_13_req_1', 'Kreatif'),
        content.get('halaman-program-magang', 'position_13_req_2', 'Familiar dengan TikTok')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_content_portfolio', 'Content portfolio'),
        content.get('halaman-program-magang', 'benefit_social_media_growth', 'Social media growth')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
    },
    {
      id: 14,
      title: content.get('halaman-program-magang', 'position_14_title', 'Content Planner'),
      category: 'Marketing',
      level: 'Intermediate',
      duration: content.get('halaman-program-magang', 'duration_3_6_months', '3-6 bulan'),
      description: content.get('halaman-program-magang', 'position_14_desc', 'Merencanakan strategi konten, editorial calendar, dan koordinasi tim kreatif.'),
      requirements: [
        content.get('halaman-program-magang', 'position_14_req_1', 'Strategic thinking'),
        content.get('halaman-program-magang', 'position_14_req_2', 'Project management')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_planning_skills', 'Planning skills'),
        content.get('halaman-program-magang', 'benefit_strategy_experience', 'Strategy experience')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
    },
    {
      id: 15,
      title: content.get('halaman-program-magang', 'position_15_title', 'Project Manager'),
      category: 'Management',
      level: 'Advanced',
      duration: content.get('halaman-program-magang', 'duration_4_6_months', '4-6 bulan'),
      description: content.get('halaman-program-magang', 'position_15_desc', 'Mengelola proyek dari perencanaan hingga eksekusi, koordinasi tim, dan monitoring progress.'),
      requirements: [
        content.get('halaman-program-magang', 'position_15_req_1', 'Leadership skills'),
        content.get('halaman-program-magang', 'position_15_req_2', 'Project management tools')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_pm_certification', 'PM certification'),
        content.get('halaman-program-magang', 'benefit_leadership_experience', 'Leadership experience')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
    },
    {
      id: 16,
      title: content.get('halaman-program-magang', 'position_16_title', 'Animator'),
      category: 'Creative',
      level: 'Advanced',
      duration: content.get('halaman-program-magang', 'duration_3_6_months', '3-6 bulan'),
      description: content.get('halaman-program-magang', 'position_16_desc', 'Membuat animasi 2D/3D untuk keperluan promosi, explainer video, dan konten digital.'),
      requirements: [
        content.get('halaman-program-magang', 'position_16_req_1', 'Portfolio animasi'),
        content.get('halaman-program-magang', 'position_16_req_2', 'After Effects/Blender')
      ],
      benefits: [
        content.get('halaman-program-magang', 'benefit_certificate', 'Sertifikat'),
        content.get('halaman-program-magang', 'benefit_animation_portfolio', 'Animation portfolio'),
        content.get('halaman-program-magang', 'benefit_technical_skills', 'Technical skills')
      ],
      applyLink: content.get('halaman-program-magang', 'apply_link_whatsapp', 'https://wa.me/6281804376001')
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

  const handleLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo(0, 0);
  };

  return (
    <div className="internship-page">
      

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1><i className="fas fa-graduation-cap hero-icon"></i> <span className="title-main">{content.get('halaman-program-magang', 'hero_title', 'Program Magang')}</span> <strong>Titik Visual</strong></h1>
          <p>{content.get('halaman-program-magang', 'hero_subtitle', 'Mulai perjalanan kariermu di industri kreatif digital. Dapatkan pengalaman praktis, mentoring dari profesional, dan sertifikat yang diakui industri.')}</p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              style={{
                background: 'linear-gradient(90deg, #F97316 0%, #DC2626 100%)',
                color: '#FFFFFF',
                border: 'none'
              }}
              onClick={() => document.getElementById('internship-grid')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {content.get('halaman-program-magang', 'hero_cta_register', 'Daftar Sekarang')}
            </button>
            <a
              href="/careers"
              className="btn btn-secondary"
              style={{
                background: 'transparent',
                color: '#F97316',
                border: '2px solid #F97316'
              }}
            >
              <i className="fas fa-arrow-left"></i> {content.get('halaman-program-magang', 'hero_cta_back', 'Kembali ke Beranda')}
            </a>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="filter-search-section">
        <div className="container">
          <div className="filter-controls">
            <span>{content.get('halaman-program-magang', 'filter_label', 'Filter Posisi:')}</span>
            <button 
              className={`filter-btn ${activeFilter === 'Semua' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('Semua')}
            >
              {content.get('halaman-program-magang', 'filter_all', 'Semua')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Design' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('Design')}
            >
              {content.get('halaman-program-magang', 'filter_design', 'Design')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Programming' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('Programming')}
            >
              {content.get('halaman-program-magang', 'filter_programming', 'Programming')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Marketing' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('Marketing')}
            >
              {content.get('halaman-program-magang', 'filter_marketing', 'Marketing')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Creative' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('Creative')}
            >
              {content.get('halaman-program-magang', 'filter_creative', 'Creative')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Management' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('Management')}
            >
              {content.get('halaman-program-magang', 'filter_management', 'Management')}
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Communication' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('Communication')}
            >
              {content.get('halaman-program-magang', 'filter_communication', 'Communication')}
            </button>
          </div>
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input 
              type="text" 
              placeholder={content.get('halaman-program-magang', 'search_placeholder', 'Cari posisi magang...')}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </section>

      {/* Internship Grid Section */}
      <section className="internship-grid" id="internship-grid">
        <div className="container">
          <h2>{filteredPositions.length} {content.get('halaman-program-magang', 'positions_available', 'Posisi Magang Tersedia')}</h2>
          <p className="section-subtitle">{content.get('halaman-program-magang', 'positions_subtitle', 'Pilih bidang yang sesuai dengan passion dan minat kariermu')}</p>
          <div className="grid-container">
            {filteredPositions.map(position => (
              <div className="internship-card" key={position.id}>
                <div className="card-header">
                  <div className="card-tags">
                    <span className={`tag ${getCategoryColor(position.category)}`}>{content.get('halaman-program-magang', `category_${position.category.toLowerCase()}`, position.category)}</span>
                    <span className={`tag ${getLevelColor(position.level)}`}>{content.get('halaman-program-magang', `level_${position.level.toLowerCase()}`, position.level)}</span>
                  </div>
                  <div className="card-duration"><i className="far fa-clock"></i> {position.duration}</div>
                </div>
                <div className="card-body">
                  <h3>{position.title}</h3>
                  <p>{position.description}</p>
                  <h4>{content.get('halaman-program-magang', 'label_requirements', 'Persyaratan:')}</h4>
                  <ul>
                    {position.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                  <h4>{content.get('halaman-program-magang', 'label_benefits', 'Benefit:')}</h4>
                  <div className="benefit-tags">
                    {position.benefits.map((benefit, index) => (
                      <span className={`benefit-tag ${getBenefitClass(benefit)}`} key={index}>{benefit}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer">
                  <a href={position.applyLink} className="btn" target="_blank" rel="noopener noreferrer">{content.get('halaman-program-magang', 'card_cta_apply', 'Daftar Sekarang')} <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>{content.get('halaman-program-magang', 'cta_title', 'Siap Memulai Karier dari Sini?')}</h2>
          <p>{content.get('halaman-program-magang', 'cta_desc', 'Gabung dalam program magang di Titik Visual dan dapatkan pengalaman nyata bersama tim kreatif dan profesional kami.')}</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-cta-primary"><i className="fa-regular fa-comment"></i> {content.get('halaman-program-magang', 'cta_consult', 'Konsultasi Sekarang')}</a>
            <a href="https://wa.me/6281804376001" className="btn btn-cta-secondary" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i> {content.get('halaman-program-magang', 'cta_register', 'Daftar Magang')}</a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-widgets">
            <div className="footer-widget about-widget">
              <img src={logoImg} alt="Titik Visual Logo" className="footer-logo" />
              <p>{content.get('halaman-program-magang', 'footer_desc', 'Digital creative studio yang mengutamakan kualitas dan inovasi dalam setiap karya.')}</p>
            </div>
            <div className="footer-widget links-widget">
              <h4>{content.get('halaman-program-magang', 'footer_col_1', 'Company')}</h4>
              <ul>
                <li><a href="/about" onClick={(e) => handleLink(e, '/about')}>{content.get('halaman-program-magang', 'footer_link_about', 'About Us')}</a></li>
                <li><a href="/portfolio" onClick={(e) => handleLink(e, '/portfolio')}>{content.get('halaman-program-magang', 'footer_link_portfolio', 'Portfolio')}</a></li>
                <li><a href="/services" onClick={(e) => handleLink(e, '/services')}>{content.get('halaman-program-magang', 'footer_link_services', 'Services')}</a></li>
                <li><a href="/careers" onClick={(e) => handleLink(e, '/careers')}>{content.get('halaman-program-magang', 'footer_link_careers', 'Careers')}</a></li>
                <li><a href="/portfolio" onClick={(e) => handleLink(e, '/portfolio')}>{content.get('halaman-program-magang', 'footer_link_blog', 'Blog')}</a></li>
              </ul>
            </div>
            <div className="footer-widget links-widget">
              <h4>{content.get('halaman-program-magang', 'footer_col_2', 'Program Magang')}</h4>
              <ul>
                <li><a href="#internship-grid">{content.get('halaman-program-magang', 'footer_link_uiux', 'UI/UX Design')}</a></li>
                <li><a href="#internship-grid">{content.get('halaman-program-magang', 'footer_link_frontend', 'FrontEnd Developer')}</a></li>
                <li><a href="#internship-grid">{content.get('halaman-program-magang', 'footer_link_backend', 'BackEnd Developer')}</a></li>
                <li><a href="#internship-grid">{content.get('halaman-program-magang', 'footer_link_hr', 'Human Resource')}</a></li>
                <li><a href="#internship-grid">{content.get('halaman-program-magang', 'footer_link_graphic', 'Graphic Designer')}</a></li>
              </ul>
            </div>
            <div className="footer-widget contact-widget">
              <h4>{content.get('halaman-program-magang', 'footer_col_3', 'Contact')}</h4>
              <ul>
                <li><i className="fas fa-phone"></i> {content.get('halaman-program-magang', 'footer_phone', '081804376001')}</li>
                <li><i className="fas fa-envelope"></i> {content.get('halaman-program-magang', 'footer_email', 'titikvisualjogja@gmail.com')}</li>
                <li><i className="fas fa-map-marker-alt"></i> {content.get('halaman-program-magang', 'footer_address', 'Yogyakarta, Indonesia')}</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{content.get('halaman-program-magang', 'footer_copyright', '© 2025 Titik Visual. All rights reserved.')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InternshipPage;
