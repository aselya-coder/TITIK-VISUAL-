import React from 'react';
import './style.css';

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

const AboutPage = () => {
  // Timeline data
  const timelineEntries: TimelineEntry[] = [
    {
      id: 1,
      year: '2019',
      badge: 'Company Founded',
      title: 'Founding',
      description: 'Titik Visual didirikan dengan visi menjadi digital creative studio terdepan di Indonesia',
      position: 'left'
    },
    {
      id: 2,
      year: '2020',
      badge: '50+ Projects',
      title: 'First Major Client',
      description: 'Berhasil menangani proyek besar pertama dan membangun reputasi di industri digital',
      position: 'right'
    },
    {
      id: 3,
      year: '2021',
      badge: 'Team Growth',
      title: 'Team Expansion',
      description: 'Memperluas tim dengan talent-talent terbaik di bidang UI/UX, Development, dan Marketing',
      position: 'left'
    },
    {
      id: 4,
      year: '2022',
      badge: '200+ Projects',
      title: 'Service Diversification',
      description: 'Menambah layanan Mobile App Development dan Social Media Management',
      position: 'right'
    },
    {
      id: 5,
      year: '2023',
      badge: 'Industry Awards',
      title: 'Recognition & Awards',
      description: 'Meraih berbagai penghargaan dan recognition dari industri creative digital',
      position: 'left'
    },
    {
      id: 6,
      year: '2024',
      badge: '500+ Projects',
      title: 'Innovation & Growth',
      description: 'Terus berinovasi dengan teknologi terdepan dan memperluas jangkauan layanan',
      position: 'right'
    }
  ];

  // Values data
  const values: Value[] = [
    {
      id: 1,
      title: 'Innovation',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <g transform="rotate(20 12 12)">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z"/>
          </g>
          <g>
            <path d="M19 4h1v3h-1z"/>
            <path d="M18 5h3v1h-3z"/>
          </g>
          <g>
            <path d="M5 18h1v3h-1z"/>
            <path d="M4 19h3v1h-3z"/>
          </g>
        </svg>
      ),
      description: 'Selalu menggunakan teknologi dan metodologi terdepan untuk hasil yang optimal'
    },
    {
      id: 2,
      title: 'Quality',
      icon: <i className="fa-solid fa-medal"></i>,
      description: 'Komitmen pada kualitas tinggi di setiap aspek pekerjaan yang kami lakukan'
    },
    {
      id: 3,
      title: 'Collaboration',
      icon: <i className="fa-solid fa-people-group"></i>,
      description: 'Bekerja sama dengan klien sebagai partner untuk mencapai tujuan bersama'
    },
    {
      id: 4,
      title: 'Integrity',
      icon: <i className="fa-regular fa-heart"></i>,
      description: 'Transparansi dan kejujuran dalam setiap komunikasi dan proses kerja'
    }
  ];

  // Team data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Ahmad Rizki',
      role: 'Founder & Creative Director',
      description: '10+ tahun pengalaman di industri creative digital dengan expertise di UI/UX Design dan Brand Strategy',
      image: '../img/team1.jpg',
      skills: ['UI/UX Design', 'Brand Strategy', 'Creative Direction']
    },
    {
      id: 2,
      name: 'Sarah Putri',
      role: 'Lead UI/UX Designer',
      description: 'Spesialis UI/UX dengan passion untuk menciptakan user experience yang memorable dan conversion-focused',
      image: '../img/team1.jpg',
      skills: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      id: 3,
      name: 'Budi Santoso',
      role: 'Lead Developer',
      description: 'Full-stack developer dengan expertise di React, Next.js, dan modern web technologies',
      image: '../img/team1.jpg',
      skills: ['React/Next.js', 'Node.js', 'Mobile Development']
    },
    {
      id: 4,
      name: 'Maya Sari',
      role: 'Digital Marketing Specialist',
      description: 'Expert dalam social media strategy, content marketing, dan digital campaign optimization',
      image: '../img/team1.jpg',
      skills: ['Social Media', 'Content Strategy', 'SEO/SEM']
    }
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: '"Titik Visual tidak hanya memberikan hasil yang luar biasa, tapi juga proses kerja yang sangat profesional. Tim mereka benar-benar memahami kebutuhan bisnis kami."',
      authorName: 'Dr. Siti Nurhaliza',
      authorPosition: 'CEO at HealthTech Indonesia',
      authorImage: '../img/img.png'
    },
    {
      id: 2,
      text: '"Dari UI/UX design hingga development, Titik Visual memberikan solusi end-to-end yang sangat memuaskan. Highly recommended untuk startup dan enterprise!"',
      authorName: 'Andi Wijaya',
      authorPosition: 'Founder at StartupHub Jakarta',
      authorImage: '../img/img.png'
    },
    {
      id: 3,
      text: '"Social media management dan digital marketing campaign dari Titik Visual berhasil meningkatkan engagement kami hingga 300%. Luar biasa!"',
      authorName: 'Lisa Chen',
      authorPosition: 'Marketing Director at E-Commerce Plus',
      authorImage: '../img/img.png'
    }
  ];

  return (
    <div className="about-page">
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="top-left">
          <div className="item">
            <i className="fa-solid fa-phone"></i>
            <span>081804376001</span>
          </div>
          <div className="item">
            <i className="fa-solid fa-envelope"></i>
            <span>titikvisualjogja@gmail.com</span>
          </div>
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

      {/* MAIN NAVBAR */}
      <nav className="main-nav">
        <div className="nav-left">
          <img src="../img/img.png" alt="Titik Visual Logo" className="logo" />
        </div>
        <ul className="nav-right">
          <li><a href="../beranda/beranda.tsx">Home</a></li>
          <li><a href="#profile"><strong>Profile</strong></a></li>
          <li><a href="../page-layanan/page-layanan.tsx">Layanan</a></li>
          <li><a href="../page-portfolio/page-portfolio.tsx">Portfolio</a></li>
          <li><a href="../page-contact/page-contact.tsx">Kontak</a></li>
        </ul>
        <div className="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          {/* KOLOM KIRI - TEKS */}
          <div className="hero-left">
            <div className="hero-tag">
              <i className="fa-solid fa-users"></i> About Titik Visual
            </div>
            
            <h1 className="hero-title">
              <span className="gradient-text">Digital Creative Studio</span><br />
              yang Mengutamakan <br /> Kualitas
            </h1>
            
            <p className="hero-desc">
              Sejak 2019, kami telah membantu 200+ klien mewujudkan visi digital mereka melalui
              UI/UX Design, Web Development, Mobile App, dan Digital Marketing yang inovatif
              dan result-oriented.
            </p>
            
            <div className="hero-buttons">
              <a href="../page-portfolio/page-portfolio.tsx" className="btn-primary">
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Lihat Portfolio
              </a>
              
              <a href="https://wa.me/6281804376001" className="btn-outline" target="_blank" rel="noopener noreferrer">
                <i className="fa-regular fa-comment"></i> Hubungi Kami
              </a>
            </div>
          </div>

          {/* KOLOM KANAN - CARD LOGO */}
          <div className="hero-right">
            <div className="hero-image-card">
              <div className="card-content">
                <img src="../img/img2.png" alt="Titik Visual Logo" />
              </div>
              {/* Badge Pengalaman */}
              <div className="experience-badge">
                <div className="experience-number">5+</div>
                <div className="experience-text">Years Experience</div>
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
            <h2>500+</h2>
            <p>Project Selesai</p>
          </div>

          <div className="stat-card">
            <div className="icon-box">
              <i className="fa-solid fa-users"></i>
            </div>
            <h2>200+</h2>
            <p>Klien Puas</p>
          </div>

          <div className="stat-card">
            <div className="icon-box">
              <i className="fa-solid fa-clock"></i>
            </div>
            <h2>5+</h2>
            <p>Tahun Pengalaman</p>
          </div>

          <div className="stat-card">
            <div className="icon-box">
              <i className="fa-solid fa-award"></i>
            </div>
            <h2>50+</h2>
            <p>Awards & Recognition</p>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="timeline-section">
        <div className="container">
          <h2>Perjalanan Kami</h2>
          <p className="subtitle">Milestone penting dalam perjalanan Titik Visual</p>

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
          <h2 id="valuesTitle"><span className="gradient-text">Nilai-Nilai Kami</span></h2>
          <p className="sub">Prinsip yang memandu setiap langkah perjalanan kami</p>
        
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
          <h2>Meet Our Team</h2>
          <p className="subtitle">Tim profesional yang berpengalaman dan passionate</p>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div className="team-card" key={member.id}>
                <img src={member.image} alt={member.name} />
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
          <h2>Apa Kata Klien Kami</h2>
          <p className="subtitle">Testimoni dari klien yang telah mempercayai kami</p>
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
                  <img src={testimonial.authorImage} alt={testimonial.authorName} />
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
      <section id="cta" className="cta">
        <div className="container">
          <h2>Siap Berkolaborasi dengan Kami?</h2>
          <p>Mari wujudkan visi digital Anda bersama tim profesional Titik Visual</p>
          <div className="cta-buttons">
            <a href="../page-contact/page-contact.tsx" className="btn btn-cta-primary">
              <i className="far fa-comment"></i> Mulai Diskusi
            </a>
            <a href="../page-portfolio/page-portfolio.tsx" className="btn btn-cta-outline-white">
              <i className="fas fa-arrow-up-right-from-square"></i> Lihat Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="../img/img.png" alt="Titik Visual Logo" className="footer-logo" />
              <p>Digital creative studio yang mengutamakan kualitas dan inovasi dalam setiap karya.</p>
            </div>
    
            <div className="footer-col">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-list">
                <li><button onClick={() => window.location.href = '#about'} className="link-button">About Us</button></li>
                <li><button onClick={() => window.location.href = '#portfolio'} className="link-button">Portfolio</button></li>
                <li><button onClick={() => window.location.href = '#services'} className="link-button">Services</button></li>
                <li><button onClick={() => window.location.href = '#careers'} className="link-button">Careers</button></li>
                <li><button onClick={() => window.location.href = '#blog'} className="link-button">Blog</button></li>
              </ul>
            </div>
    
            <div className="footer-col">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-list">
                <li><button onClick={() => window.location.href = '#ui-ux'} className="link-button">UI/UX Design</button></li>
                <li><button onClick={() => window.location.href = '#web-development'} className="link-button">Web Development</button></li>
                <li><button onClick={() => window.location.href = '#mobile-app'} className="link-button">Mobile App</button></li>
                <li><button onClick={() => window.location.href = '#branding'} className="link-button">Branding</button></li>
                <li><button onClick={() => window.location.href = '#digital-marketing'} className="link-button">Digital Marketing</button></li>
              </ul>
            </div>
    
            <div className="footer-col">
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-list">
                <li><i className="fas fa-phone"></i><span>081804376001</span></li>
                <li><i className="fas fa-envelope"></i><span>titikvisualjogja@gmail.com</span></li>
                <li><i className="fas fa-location-dot"></i><span>Yogyakarta, Indonesia</span></li>
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

export default AboutPage;