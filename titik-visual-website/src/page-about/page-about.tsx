import React from 'react';
import './style.css';
import { useContent } from '../content/ContentContext';
const getImg = (name: string) => {
  try {
    return require(`../img/${name}`);
  } catch {
    return '';
  }
};

interface TimelineEntry {
  id: number;
  year: string;
  badge: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

interface Value {
  id: number;
  title: string;
  icon: string | React.ReactNode;
  description: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  skills: string[];
}

interface Testimonial {
  id: number;
  text: string;
  authorName: string;
  authorPosition: string;
  authorImage: string;
}

// CTASection removed (using CSS-based CTA for current project setup)

const AboutPage = () => {
  const content = useContent();
  // Timeline data
  const timelineEntries: TimelineEntry[] = [
    {
      id: 1,
      year: content.get('page-about', 'timeline_1_year', '2019'),
      badge: content.get('page-about', 'timeline_1_badge', 'Company Founded'),
      title: content.get('page-about', 'timeline_1_title', 'Founding'),
      description: content.get('page-about', 'timeline_1_desc', 'Titik Visual didirikan dengan visi menjadi digital creative studio terdepan di Indonesia'),
      position: 'left'
    },
    {
      id: 2,
      year: content.get('page-about', 'timeline_2_year', '2020'),
      badge: content.get('page-about', 'timeline_2_badge', '50+ Projects'),
      title: content.get('page-about', 'timeline_2_title', 'First Major Client'),
      description: content.get('page-about', 'timeline_2_desc', 'Berhasil menangani proyek besar pertama dan membangun reputasi di industri digital'),
      position: 'right'
    },
    {
      id: 3,
      year: content.get('page-about', 'timeline_3_year', '2021'),
      badge: content.get('page-about', 'timeline_3_badge', 'Team Growth'),
      title: content.get('page-about', 'timeline_3_title', 'Team Expansion'),
      description: content.get('page-about', 'timeline_3_desc', 'Memperluas tim dengan talent-talent terbaik di bidang UI/UX, Development, dan Marketing'),
      position: 'left'
    },
    {
      id: 4,
      year: content.get('page-about', 'timeline_4_year', '2022'),
      badge: content.get('page-about', 'timeline_4_badge', '200+ Projects'),
      title: content.get('page-about', 'timeline_4_title', 'Service Diversification'),
      description: content.get('page-about', 'timeline_4_desc', 'Menambah layanan Mobile App Development dan Social Media Management'),
      position: 'right'
    },
    {
      id: 5,
      year: content.get('page-about', 'timeline_5_year', '2023'),
      badge: content.get('page-about', 'timeline_5_badge', 'Industry Awards'),
      title: content.get('page-about', 'timeline_5_title', 'Recognition & Awards'),
      description: content.get('page-about', 'timeline_5_desc', 'Meraih berbagai penghargaan dan recognition dari industri creative digital'),
      position: 'left'
    },
    {
      id: 6,
      year: content.get('page-about', 'timeline_6_year', '2024'),
      badge: content.get('page-about', 'timeline_6_badge', '500+ Projects'),
      title: content.get('page-about', 'timeline_6_title', 'Innovation & Growth'),
      description: content.get('page-about', 'timeline_6_desc', 'Terus berinovasi dengan teknologi terdepan dan memperluas jangkauan layanan'),
      position: 'right'
    }
  ];

  // Values data
  const values: Value[] = [
    {
      id: 1,
      title: content.get('page-about', 'value_1_title', 'Innovation'),
      icon: <img src={getImg('icon-custom-merchandise.png')} alt="Innovation" />,
      description: content.get('page-about', 'value_1_desc', 'Selalu menggunakan teknologi dan metodologi terdepan untuk hasil yang optimal')
    },
    {
      id: 2,
      title: content.get('page-about', 'value_2_title', 'Quality'),
      icon: <img src={getImg('icon-corporate-gift.png')} alt="Quality" />,
      description: content.get('page-about', 'value_2_desc', 'Komitmen pada kualitas tinggi di setiap aspek pekerjaan yang kami lakukan')
    },
    {
      id: 3,
      title: content.get('page-about', 'value_3_title', 'Collaboration'),
      icon: <img src={getImg('icon-logo dan brand.png')} alt="Collaboration" />,
      description: content.get('page-about', 'value_3_desc', 'Bekerja sama dengan klien sebagai partner untuk mencapai tujuan bersama')
    },
    {
      id: 4,
      title: content.get('page-about', 'value_4_title', 'Integrity'),
      icon: <i className="fa-regular fa-heart" aria-hidden="true"></i>,
      description: content.get('page-about', 'value_4_desc', 'Transparansi dan kejujuran dalam setiap komunikasi dan proses kerja')
    }
  ];

  // Team data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: content.get('page-about', 'team_1_name', 'Ahmad Rizki'),
      role: content.get('page-about', 'team_1_role', 'Founder & Creative Director'),
      description: content.get('page-about', 'team_1_desc', '10+ tahun pengalaman di industri creative digital dengan expertise di UI/UX Design dan Brand Strategy'),
      image: 'team1.jpg',
      skills: ['UI/UX Design', 'Brand Strategy', 'Creative Direction']
    },
    {
      id: 2,
      name: content.get('page-about', 'team_2_name', 'Sarah Putri'),
      role: content.get('page-about', 'team_2_role', 'Lead UI/UX Designer'),
      description: content.get('page-about', 'team_2_desc', 'Spesialis UI/UX dengan passion untuk menciptakan user experience yang memorable dan conversion-focused'),
      image: 'team1.jpg',
      skills: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      id: 3,
      name: content.get('page-about', 'team_3_name', 'Budi Santoso'),
      role: content.get('page-about', 'team_3_role', 'Lead Developer'),
      description: content.get('page-about', 'team_3_desc', 'Full-stack developer dengan expertise di React, Next.js, dan modern web technologies'),
      image: 'team1.jpg',
      skills: ['React/Next.js', 'Node.js', 'Mobile Development']
    },
    {
      id: 4,
      name: content.get('page-about', 'team_4_name', 'Maya Sari'),
      role: content.get('page-about', 'team_4_role', 'Digital Marketing Specialist'),
      description: content.get('page-about', 'team_4_desc', 'Expert dalam social media strategy, content marketing, dan digital campaign optimization'),
      image: 'team1.jpg',
      skills: ['Social Media', 'Content Strategy', 'SEO/SEM']
    }
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: content.get('page-about', 'testimonial_1_text', '"Titik Visual tidak hanya memberikan hasil yang luar biasa, tapi juga proses kerja yang sangat profesional. Tim mereka benar-benar memahami kebutuhan bisnis kami."'),
      authorName: content.get('page-about', 'testimonial_1_authorName', 'Dr. Siti Nurhaliza'),
      authorPosition: content.get('page-about', 'testimonial_1_authorPosition', 'CEO at HealthTech Indonesia'),
      authorImage: 'img.png'
    },
    {
      id: 2,
      text: content.get('page-about', 'testimonial_2_text', '"Dari UI/UX design hingga development, Titik Visual memberikan solusi end-to-end yang sangat memuaskan. Highly recommended untuk startup dan enterprise!"'),
      authorName: content.get('page-about', 'testimonial_2_authorName', 'Andi Wijaya'),
      authorPosition: content.get('page-about', 'testimonial_2_authorPosition', 'Founder at StartupHub Jakarta'),
      authorImage: 'img.png'
    },
    {
      id: 3,
      text: content.get('page-about', 'testimonial_3_text', '"Social media management dan digital marketing campaign dari Titik Visual berhasil meningkatkan engagement kami hingga 300%. Luar biasa!"'),
      authorName: content.get('page-about', 'testimonial_3_authorName', 'Lisa Chen'),
      authorPosition: content.get('page-about', 'testimonial_3_authorPosition', 'Marketing Director at E-Commerce Plus'),
      authorImage: 'img.png'
    }
  ];

  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          {/* KOLOM KIRI - TEKS */}
          <div className="hero-left">
            <div className="hero-tag">
              <i className="fa-solid fa-users"></i> {content.get('page-about', 'hero_tag', 'About Titik Visual')}
            </div>
            
            <h1 className="hero-title">
              <span className="hero-title-line1">{content.get('page-about', 'hero_title_1', 'Digital Creative Studio')}</span>
              <span className="hero-title-line2">{content.get('page-about', 'hero_title_2', 'yang Mengutamakan Kualitas')}</span>
            </h1>
            
            <p className="hero-desc">
              {content.get('page-about', 'hero_desc', 'Sejak 2019, kami telah membantu 200+ klien mewujudkan visi digital mereka melalui UI/UX Design, Web Development, Mobile App, dan Digital Marketing yang inovatif dan result-oriented.')}
            </p>
            
            <div className="hero-buttons">
              <a href="#portfolio" className="btn-primary">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> {content.get('page-about', 'hero_btn_portfolio', 'Lihat Portfolio')}
              </a>

              <a href="https://wa.me/6281804376001" className="btn-outline" target="_blank" rel="noopener noreferrer">
                <i className="fa-regular fa-comment"></i> {content.get('page-about', 'hero_btn_contact', 'Hubungi Kami')}
              </a>
            </div>
          </div>

          {/* KOLOM KANAN - CARD LOGO */}
          <div className="hero-right">
            <div className="hero-image-card">
              <div className="card-content">
                <img src={getImg('img2.png')} alt="Titik Visual Logo" />
              </div>
              {/* Badge Pengalaman */}
              <div className="experience-badge">
                <div className="experience-number">{content.get('page-about', 'hero_exp_number', '5+')}</div>
                <div className="experience-text">{content.get('page-about', 'hero_exp_text', 'Years Experience')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="stats">
        <div className="container stats-grid">
          <div className="stat-card">
            <div className="icon-box">
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h2>{content.get('page-about', 'stats_1_number', '500+')}</h2>
            <p>{content.get('page-about', 'stats_1_label', 'Project Selesai')}</p>
          </div>

          <div className="stat-card">
            <div className="icon-box">
              <i className="fa-solid fa-users"></i>
            </div>
            <h2>{content.get('page-about', 'stats_2_number', '200+')}</h2>
            <p>{content.get('page-about', 'stats_2_label', 'Klien Puas')}</p>
          </div>

          <div className="stat-card">
            <div className="icon-box">
              <i className="fa-regular fa-clock"></i>
            </div>
            <h2>{content.get('page-about', 'stats_3_number', '5+')}</h2>
            <p>{content.get('page-about', 'stats_3_label', 'Tahun Pengalaman')}</p>
          </div>

          <div className="stat-card">
            <div className="icon-box">
              <img src={getImg('icon-corporate-gift.png')} alt="Awards" />
            </div>
            <h2>{content.get('page-about', 'stats_4_number', '50+')}</h2>
            <p>{content.get('page-about', 'stats_4_label', 'Awards & Recognition')}</p>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="timeline-section">
        <div className="container">
          <h2><span className="gradient-text">{content.get('page-about', 'timeline_title', 'Perjalanan Kami')}</span></h2>
          <p className="subtitle">{content.get('page-about', 'timeline_subtitle', 'Milestone penting dalam perjalanan Titik Visual')}</p>

          <div className="timeline">
            {timelineEntries.map(entry => (
              <div className={`timeline-entry ${entry.position}`} key={entry.id}>
                <div className="timeline-node">{entry.year}</div>
                <div className="timeline-card">
                  <span className="card-badge">{entry.badge}</span>
                  <h3>{entry.title}</h3>
                  <p>{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NILAI-NILAI KAMI */}
      <section className="values" aria-labelledby="valuesTitle">
        <div className="container">
          <h2 id="valuesTitle"><span className="gradient-text">{content.get('page-about', 'values_title', 'Nilai-Nilai Kami')}</span></h2>
          <p className="sub">{content.get('page-about', 'values_subtitle', 'Prinsip yang memandu setiap langkah perjalanan kami')}</p>
        
          <div className="values-grid">
            {values.map(value => (
              <article className="value-card" key={value.id}>
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    
      {/* TEAM */}
      <section id="team" className="team">
        <div className="container">
          <h2>{content.get('page-about', 'team_title', 'Meet Our Team')}</h2>
          <p className="subtitle">{content.get('page-about', 'team_subtitle', 'Tim profesional yang berpengalaman dan passionate')}</p>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div className="team-card" key={member.id}>
                <img src={getImg(member.image)} alt={member.name} />
                <div className="team-card-content">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="description">{member.description}</p>
                  <div className="skills">
                    {member.skills.map((skill, index) => (
                      <span key={index}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2><span className="gradient-text">{content.get('page-about', 'testimonials_title', 'Apa Kata Klien Kami')}</span></h2>
          <p className="subtitle">{content.get('page-about', 'testimonials_subtitle', 'Testimoni dari klien yang telah mempercayai kami')}</p>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id}>
                <i className="fas fa-quote-left quote-icon"></i>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img src={getImg(testimonial.authorImage)} alt={testimonial.authorName} />
                  <div className="author-info">
                    <h4>{testimonial.authorName}</h4>
                    <span>{testimonial.authorPosition}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="cta" style={{ background: "linear-gradient(135deg, #A855F7 0%, #06B6D4 100%)" }}>
        <div className="container">
          <h2>{content.get('page-about', 'cta_title', 'Siap Berkolaborasi dengan Kami?')}</h2>
          <p>{content.get('page-about', 'cta_subtitle', 'Mari wujudkan visi digital Anda bersama tim profesional Titik Visual')}</p>
          <div className="cta-buttons flex flex-row items-center gap-4">
            <a href="/contact" className="btn-cta-primary inline-flex w-fit whitespace-nowrap">
              <i className="far fa-comment"></i> {content.get('page-about', 'cta_btn_discuss', 'Mulai Diskusi')}
            </a>
            <a href="/portfolio" className="btn-cta-outline-white inline-flex w-fit px-4 whitespace-nowrap text-sm">
              <i className="fas fa-arrow-up-right-from-square"></i> {content.get('page-about', 'cta_btn_portfolio', 'Lihat Portfolio')}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container max-w-7xl mx-auto">
          <div className="footer-grid grid grid-cols-4 gap-8">
            <div className="footer-brand">
              <img src={getImg('img.png')} alt={content.get('page-about', 'footer_logo_alt', 'Titik Visual Logo')} className="footer-logo" />
              <p>{content.get('page-about', 'footer_brand_desc', 'Digital creative studio yang mengutamakan kualitas dan inovasi dalam setiap karya.')}</p>
            </div>
    
            <div className="footer-col">
              <h4 className="footer-title">{content.get('page-about', 'footer_company_title', 'Company')}</h4>
              <ul className="footer-list">
                <li><button onClick={() => window.location.href = '#about'} className="link-button">{content.get('page-about', 'footer_company_about', 'About Us')}</button></li>
                <li><button onClick={() => window.location.href = '#portfolio'} className="link-button">{content.get('page-about', 'footer_company_portfolio', 'Portfolio')}</button></li>
                <li><button onClick={() => window.location.href = '#services'} className="link-button">{content.get('page-about', 'footer_company_services', 'Services')}</button></li>
                <li><button onClick={() => window.location.href = '#careers'} className="link-button">{content.get('page-about', 'footer_company_careers', 'Careers')}</button></li>
                <li><button onClick={() => window.location.href = '#contact'} className="link-button">{content.get('page-about', 'footer_company_contact', 'Contact')}</button></li>
              </ul>
            </div>
    
            <div className="footer-col">
              <h4 className="footer-title">{content.get('page-about', 'footer_services_title', 'Services')}</h4>
              <ul className="footer-list">
                <li><button onClick={() => window.location.href = '#ui-ux'} className="link-button">{content.get('page-about', 'footer_services_uiux', 'UI/UX Design')}</button></li>
                <li><button onClick={() => window.location.href = '#web-development'} className="link-button">{content.get('page-about', 'footer_services_web', 'Web Development')}</button></li>
                <li><button onClick={() => window.location.href = '#mobile-app'} className="link-button">{content.get('page-about', 'footer_services_mobile', 'Mobile App')}</button></li>
                <li><button onClick={() => window.location.href = '#branding'} className="link-button">{content.get('page-about', 'footer_services_branding', 'Branding')}</button></li>
                <li><button onClick={() => window.location.href = '#digital-marketing'} className="link-button">{content.get('page-about', 'footer_services_marketing', 'Digital Marketing')}</button></li>
              </ul>
            </div>
    
            <div className="footer-col">
              <h4 className="footer-title">{content.get('page-about', 'footer_contact_title', 'Contact')}</h4>
              <ul className="footer-list">
                <li><i className="fas fa-phone"></i><span>{content.get('page-about', 'footer_contact_phone', '081804376001')}</span></li>
                <li><i className="fas fa-envelope"></i><span>{content.get('page-about', 'footer_contact_email', 'titikvisualjogja@gmail.com')}</span></li>
                <li><i className="fas fa-location-dot"></i><span>{content.get('page-about', 'footer_contact_address', 'Yogyakarta, Indonesia')}</span></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom flex justify-center" style={{ textAlign: 'right' }}>
            <p className="text-center whitespace-nowrap">
              {content.get('page-about', 'footer_line1_top', '© 2025 Titik Visual.')}<br />
              {content.get('page-about', 'footer_line1_bottom', 'All rights reserved.')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
