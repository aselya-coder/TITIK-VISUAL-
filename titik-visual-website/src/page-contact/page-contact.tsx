import React, { useState, ChangeEvent, FormEvent } from 'react';
import './style.css';

interface ContactInfo {
  id: number;
  icon: string;
  title: string;
  detail: string;
  description: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FormData {
  nama: string;
  email: string;
  whatsapp: string;
  perusahaan: string;
  layanan: string;
  timeline: string;
  budget: string;
  detail: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    nama: '',
    email: '',
    whatsapp: '',
    perusahaan: '',
    layanan: '',
    timeline: '',
    budget: '',
    detail: ''
  });

  const [formAlert, setFormAlert] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validasi form
    if (!formData.nama || !formData.email || !formData.whatsapp || !formData.layanan || !formData.detail) {
      setFormAlert('Mohon lengkapi semua field yang ditandai dengan *');
      return;
    }
    
    // Format pesan WhatsApp
    const message = `Halo, saya ingin konsultasi tentang proyek dengan detail berikut:
    
Nama: ${formData.nama}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Perusahaan: ${formData.perusahaan || 'Tidak diisi'}
Layanan: ${formData.layanan}
Timeline: ${formData.timeline}
Budget: ${formData.budget}
Detail: ${formData.detail}`;

    // Buka WhatsApp dengan pesan yang sudah diformat
    window.open(`https://wa.me/6281804376001?text=${encodeURIComponent(message)}`, '_blank');
    
    // Reset form setelah submit
    setFormData({
      nama: '',
      email: '',
      whatsapp: '',
      perusahaan: '',
      layanan: '',
      timeline: '',
      budget: '',
      detail: ''
    });
    
    // Tampilkan pesan sukses
    setFormAlert('Terima kasih! Pesan Anda telah dikirim melalui WhatsApp. Kami akan segera menghubungi Anda.');
    
    // Hapus pesan setelah 5 detik
    setTimeout(() => setFormAlert(''), 5000);
  };

  // Fungsi untuk navigasi ke halaman lain
  const navigateToPage = (page: string) => {
    window.location.href = page;
  };

  // Contact info data
  const contactInfo: ContactInfo[] = [
    {
      id: 1,
      icon: 'far fa-comment',
      title: 'WhatsApp',
      detail: '081804376001',
      description: 'Chat langsung untuk konsultasi cepat'
    },
    {
      id: 2,
      icon: 'far fa-envelope',
      title: 'Email',
      detail: 'titikvisualjogja@gmail.com',
      description: 'Untuk inquiry detail dan proposal'
    },
    {
      id: 3,
      icon: 'fas fa-phone-alt',
      title: 'Telepon',
      detail: '081804376001',
      description: 'Hubungi langsung untuk diskusi'
    },
    {
      id: 4,
      icon: 'fas fa-map-marker-alt',
      title: 'Lokasi',
      detail: 'Yogyakarta, Indonesia',
      description: 'Bisa meeting langsung by appointment'
    }
  ];

  // FAQ data
  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'Apakah konsultasi gratis?',
      answer: 'Ya, konsultasi awal dan diskusi kebutuhan proyek gratis.'
    },
    {
      id: 2,
      question: 'Berapa lama proses quotation?',
      answer: 'Biasanya 1-3 hari kerja setelah brief lengkap diterima.'
    },
    {
      id: 3,
      question: 'Apakah bisa meeting online?',
      answer: 'Tentu! Kami support meeting via Zoom, Google Meet, atau platform lainnya.'
    }
  ];

  return (
    <div className="contact-page">
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
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
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
          <li><a href="../page-about/page-about.tsx">Profile</a></li>
          <li><a href="../page-layanan/page-layanan.tsx">Layanan</a></li>
          <li><a href="../page-portfolio/page-portfolio.tsx">Portfolio</a></li>
          <li className="active"><a href="#contact">Kontak</a></li>
        </ul>
        <div className="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <span className="get-in-touch">
            <i className="far fa-comment"></i> Get In Touch
          </span>
          <h1>
            <span className="highlight">Mari Diskusi</span><br />
            Proyek Anda
          </h1>
          <p>Siap mewujudkan visi kreatif Anda? Tim ahli kami siap membantu dari konsultasi digital hingga produksi merchandise custom. Hubungi kami sekarang untuk konsultasi gratis!</p>
        </div>
      </section>

      {/* CONTACT INFO SECTION */}
      <section className="contact-info-section">
        <div className="container">
          <h2 className="section-title">Hubungi Kami</h2>
          <p className="section-subtitle">Pilih cara yang paling nyaman untuk Anda</p>
          <div className="contact-cards">
            {contactInfo.map(info => (
              <div className="contact-card" key={info.id}>
                <div className="card-icon-bg">
                  <i className={info.icon}></i>
                </div>
                <h3>{info.title}</h3>
                <p className="contact-detail">{info.detail}</p>
                <p className="contact-description">{info.description}</p>
              </div>
            ))}
          </div>
          <div className="contact-buttons">
            <a href="https://wa.me/6281804376001" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> WhatsApp Sekarang
            </a>
            <a href="mailto:titikvisualjogja@gmail.com" className="btn btn-email-outline" target="_blank" rel="noopener noreferrer">
              <i className="far fa-envelope"></i> Kirim Email
            </a>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM SECTION */}
      <section className="inquiry-section">
        <div className="container inquiry-container">
          <div className="inquiry-form-wrapper">
            <h2 className="section-title">Project Inquiry Form</h2>
            <p>Konsultasikan kebutuhan digital creative dan custom merchandise Anda dengan tim ahli kami. Dapatkan penawaran terbaik untuk proyek atau produk impian Anda!</p>
            
            {formAlert && (
              <div id="formAlert" className="form-alert">
                {formAlert}
              </div>
            )}
            
            <form className="inquiry-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nama">
                    <i className="far fa-user"></i> Nama Lengkap *
                  </label>
                  <input 
                    type="text" 
                    id="nama" 
                    placeholder="Masukkan nama lengkap" 
                    value={formData.nama}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="far fa-envelope"></i> Email *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="nama@email.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="whatsapp">
                    <i className="fas fa-phone-alt"></i> No. WhatsApp *
                  </label>
                  <input 
                    type="text" 
                    id="whatsapp" 
                    placeholder="08xxxxxxxxxx" 
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="perusahaan">
                    <i className="far fa-building"></i> Nama Perusahaan
                  </label>
                  <input 
                    type="text" 
                    id="perusahaan" 
                    placeholder="PT. Nama Perusahaan" 
                    value={formData.perusahaan}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="layanan">
                    <i className="fas fa-wand-magic-sparkles"></i> Layanan yang Dibutuhkan *
                  </label>
                  <select 
                    id="layanan" 
                    value={formData.layanan}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Pilih layanan</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App Development</option>
                    <option value="Custom Merchandise">Custom Merchandise</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Branding">Branding</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="timeline">
                    <i className="far fa-calendar"></i> Timeline Proyek
                  </label>
                  <select 
                    id="timeline" 
                    value={formData.timeline}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>Pilih timeline</option>
                    <option value="Urgent (&lt; 1 bulan)">Urgent (&lt; 1 bulan)</option>
                    <option value="Normal (1-3 bulan)">Normal (1-3 bulan)</option>
                    <option value="Flexible (&gt; 3 bulan)">Flexible (&gt; 3 bulan)</option>
                  </select>
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="budget">
                  <i className="far fa-file-alt"></i> Budget Range
                </label>
                <select 
                  id="budget" 
                  value={formData.budget}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Pilih budget range</option>
                  <option value="&lt; Rp 5 juta">&lt; Rp 5 juta</option>
                  <option value="Rp 5-10 juta">Rp 5-10 juta</option>
                  <option value="Rp 10-25 juta">Rp 10-25 juta</option>
                  <option value="&gt; Rp 25 juta">&gt; Rp 25 juta</option>
                </select>
              </div>
              <div className="form-group full-width">
                <label htmlFor="detail">
                  <i className="far fa-file-alt"></i> Detail Proyek *
                </label>
                <textarea 
                  id="detail" 
                  rows={5} 
                  placeholder="Ceritakan detail proyek/kebutuhan merchandise Anda, tujuan bisnis, target audience, spesifikasi produk, quantity, referensi design, dll." 
                  value={formData.detail}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                <i className="far fa-paper-plane"></i> Kirim Inquiry
              </button>
            </form>
          </div>
          <aside className="inquiry-sidebar">
            <div className="sidebar-widget">
              <h3>
                <i className="fas fa-clock"></i> Jam Operasional
              </h3>
              <ul>
                <li>
                  <span>Senin - Jumat</span> 
                  <span>09:00 - 18:00 WIB</span>
                </li>
                <li>
                  <span>Sabtu</span> 
                  <span>09:00 - 15:00 WIB</span>
                </li>
                <li>
                  <span>Minggu</span> 
                  <span>Closed</span>
                </li>
              </ul>
            </div>
            <div className="sidebar-widget">
              <h3>
                <i className="far fa-comment"></i> Response Time
              </h3>
              <ul className="response-list">
                <li>
                  <div className="response-label">
                    <span className="dot whatsapp"></span>
                    <strong>WhatsApp</strong>
                  </div>
                  <span className="response-value">Kurang dari 1 jam (jam kerja)</span>
                </li>
                <li>
                  <div className="response-label">
                    <span className="dot email"></span>
                    <strong>Email</strong>
                  </div>
                  <span className="response-value">Kurang dari 24 jam</span>
                </li>
                <li>
                  <div className="response-label">
                    <span className="dot form"></span>
                    <strong>Form Inquiry</strong>
                  </div>
                  <span className="response-value">Kurang dari 24 jam</span>
                </li>
              </ul>
            </div>
            <div className="sidebar-widget faq-widget">
              <h3>Frequently Asked</h3>
              {faqs.map(faq => (
                <div className="faq-item" key={faq.id}>
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta" className="cta-section">
        <div className="container">
          <h2>Butuh Respon Cepat?</h2>
          <p>Untuk diskusi urgent tentang proyek digital atau order merchandise, langsung chat WhatsApp kami</p>
          <div className="cta-buttons">
            <a href="https://wa.me/6281804376001" className="btn btn-cta" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> Chat WhatsApp Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-grid">
            <div className="footer-col footer-about">
              <img src="../img/img.png" alt="Titik Visual Logo" className="footer-logo" />
              <p>Spesialis digital creative dan custom merchandise yang berfokus pada kualitas dan kepuasan klien.</p>
            </div>
            <div className="footer-col">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-list">
                <li>
                  <button 
                    onClick={() => navigateToPage('../page-about/page-about.tsx')} 
                    className="link-button"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage('../page-portfolio/page-portfolio.tsx')} 
                    className="link-button"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage('../page-layanan/page-layanan.tsx')} 
                    className="link-button"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage('#careers')} 
                    className="link-button"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage('#blog')} 
                    className="link-button"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-list">
                <li>
                  <button 
                    onClick={() => navigateToPage('#ui-ux')} 
                    className="link-button"
                  >
                    UI/UX Design
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage('#web-development')} 
                    className="link-button"
                  >
                    Web Development
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage('#mobile-app')} 
                    className="link-button"
                  >
                    Mobile App
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage('#custom-merchandise')} 
                    className="link-button"
                  >
                    Custom Merchandise
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage('#digital-marketing')} 
                    className="link-button"
                  >
                    Digital Marketing
                  </button>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-title">Contact Info</h4>
              <ul className="footer-list">
                <li><i className="fas fa-phone-alt"></i><span>081804376001</span></li>
                <li><i className="far fa-envelope"></i><span>titikvisualjogja@gmail.com</span></li>
                <li><i className="fas fa-map-marker-alt"></i><span>Yogyakarta, Indonesia</span></li>
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

export default ContactPage;