import React, { useState, ChangeEvent, FormEvent } from 'react';
import './style.css';
import { useContent } from '../content/ContentContext';
const getImg = (name: string) => {
  try {
    return require(`../img/${name}`);
  } catch {
    return `/${name}`;
  }
};

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
  const content = useContent();
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
    const message = `Halo, saya ingin konsultasi tentang proyek dengan detail berikut:\n    \nNama: ${formData.nama}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nPerusahaan: ${formData.perusahaan || 'Tidak diisi'}\nLayanan: ${formData.layanan}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}\nDetail: ${formData.detail}`;

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




      <section
        className="hero-section"
        style={{
          width: '100%',
          padding: '110px 0 80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background:
            'radial-gradient(800px circle at 80% 20%, rgba(238,242,255,1) 0, rgba(238,242,255,0) 60%), ' +
            'radial-gradient(600px circle at 20% 30%, rgba(252,231,243,1) 0, rgba(252,231,243,0) 50%), ' +
            'linear-gradient(to bottom, #ffffff, #f0faff)'
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: 860,
            margin: '0 auto',
            padding: '0 24px'
          }}
        >
          <span className="get-in-touch" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 18, backgroundColor: '#E9D5FF', color: '#7E22CE', fontSize: 14, fontWeight: 500, marginBottom: 22 }}>
            <i className="far fa-comment" style={{ fontSize: 14 }}></i> Get In Touch
          </span>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.1 as any, margin: '0 0 20px', color: '#111827', letterSpacing: '-0.02em' }}>
            <div style={{ background: 'linear-gradient(90deg, #9333EA, #0891B2)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', display: 'block', whiteSpace: 'nowrap' }}>
              Mari Diskusi
            </div>
            <div style={{ display: 'block', whiteSpace: 'nowrap', marginTop: 6, color: '#000000', WebkitTextFillColor: '#000000', background: 'none' }}>
              Proyek Anda
            </div>
          </h1>
          <p
            style={{
              maxWidth: 760,
              margin: '0 auto',
              fontSize: 18,
              color: '#6B7280',
              lineHeight: 1.65
            }}
          >
            Siap mewujudkan visi kreatif Anda? Tim ahli kami siap membantu dari konsultasi digital hingga
            produksi merchandise custom. Hubungi kami sekarang untuk konsultasi gratis!
          </p>
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
                    name="nama"
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
                    name="email"
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
                    name="whatsapp"
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
                    name="perusahaan"
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
                    name="layanan"
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
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>Pilih timeline</option>
                    <option value="Urgent (< 1 bulan)">Urgent (&lt; 1 bulan)</option>
                    <option value="Normal (1-3 bulan)">Normal (1-3 bulan)</option>
                    <option value="Flexible (> 3 bulan)">Flexible (&gt; 3 bulan)</option>
                  </select>
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="budget">
                  <i className="far fa-file-alt"></i> Budget Range
                </label>
                <select 
                  id="budget" 
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Pilih budget range</option>
                  <option value="< Rp 5 juta">&lt; Rp 5 juta</option>
                  <option value="Rp 5-10 juta">Rp 5-10 juta</option>
                  <option value="Rp 10-25 juta">Rp 10-25 juta</option>
                  <option value="> Rp 25 juta">&gt; Rp 25 juta</option>
                </select>
              </div>
              <div className="form-group full-width">
                <label htmlFor="detail">
                  <i className="far fa-file-alt"></i> Detail Proyek *
                </label>
                <textarea 
                  id="detail" 
                  name="detail"
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
        <div className="container max-w-7xl mx-auto">
          <div className="footer-grid">
            <div className="footer-col footer-about">
              <img src={getImg('img.png')} alt="Titik Visual Logo" className="footer-logo" />
              <p>Spesialis digital creative dan custom merchandise yang berfokus pada kualitas dan kepuasan klien.</p>
            </div>
            <div className="footer-col">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-list">
                <li><a href="/about" className="link-button">About Us</a></li>
                <li><a href="/portfolio" className="link-button">Portfolio</a></li>
                <li><a href="/services" className="link-button">Services</a></li>
                <li><a href="/careers" className="link-button">Careers</a></li>
                <li><a href="/contact" className="link-button">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-list">
                <li><a href="/ui-ux" className="link-button">UI/UX Design</a></li>
                <li><a href="/web-apk" className="link-button">Web Development</a></li>
                <li><a href="/web-apk" className="link-button">Mobile App</a></li>
                <li><a href="/custom-merchandise" className="link-button">Custom Merchandise</a></li>
                <li><a href="/social-media" className="link-button">Digital Marketing</a></li>
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
        <div className="footer-bottom w-full text-center border-t">
          <p>
            {content.get('page-contact', 'footer_line1_top', '© 2024 Titik Visual.')}<br />
            {content.get('page-contact', 'footer_line1_bottom', 'All rights reserved.')}
          </p>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
