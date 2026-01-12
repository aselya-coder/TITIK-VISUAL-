import React, { useState, ChangeEvent, FormEvent } from 'react';
import './style.css';
import { useContent } from '../content/ContentContext';
const getImg = (name: string) => {
  try {
    return require(`../img/${name}`);
  } catch {
    return undefined as any;
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
      setFormAlert(content.get('page-contact', 'form_alert_error', 'Mohon lengkapi semua field yang ditandai dengan *'));
      return;
    }
    
    // Format pesan WhatsApp
    const message = `Halo, saya ingin konsultasi tentang proyek dengan detail berikut:\n    \nNama: ${formData.nama}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nPerusahaan: ${formData.perusahaan || content.get('page-contact', 'form_company_empty', 'Tidak diisi')}\nLayanan: ${formData.layanan}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}\nDetail: ${formData.detail}`;

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
    setFormAlert(content.get('page-contact', 'form_alert_success', 'Terima kasih! Pesan Anda telah dikirim melalui WhatsApp. Kami akan segera menghubungi Anda.'));
    
    // Hapus pesan setelah 5 detik
    setTimeout(() => setFormAlert(''), 5000);
  };

  const handleFooterLink = (path: string) => {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo(0, 0);
  };

  // Contact info data
  const contactInfo: ContactInfo[] = [
    {
      id: 1,
      icon: 'far fa-comment',
      title: content.get('page-contact', 'contact_info_1_title', 'WhatsApp'),
      detail: '081804376001',
      description: content.get('page-contact', 'contact_info_1_desc', 'Chat langsung untuk konsultasi cepat')
    },
    {
      id: 2,
      icon: 'far fa-envelope',
      title: content.get('page-contact', 'contact_info_2_title', 'Email'),
      detail: 'titikvisualjogja@gmail.com',
      description: content.get('page-contact', 'contact_info_2_desc', 'Untuk inquiry detail dan proposal')
    },
    {
      id: 3,
      icon: 'fas fa-phone-alt',
      title: content.get('page-contact', 'contact_info_3_title', 'Telepon'),
      detail: '081804376001',
      description: content.get('page-contact', 'contact_info_3_desc', 'Hubungi langsung untuk diskusi')
    },
    {
      id: 4,
      icon: 'fas fa-map-marker-alt',
      title: content.get('page-contact', 'contact_info_4_title', 'Lokasi'),
      detail: 'Yogyakarta, Indonesia',
      description: content.get('page-contact', 'contact_info_4_desc', 'Bisa meeting langsung by appointment')
    }
  ];

  // FAQ data
  const faqs: FAQ[] = [
    {
      id: 1,
      question: content.get('page-contact', 'faq_1_question', 'Apakah konsultasi gratis?'),
      answer: content.get('page-contact', 'faq_1_answer', 'Ya, konsultasi awal dan diskusi kebutuhan proyek gratis.')
    },
    {
      id: 2,
      question: content.get('page-contact', 'faq_2_question', 'Berapa lama proses quotation?'),
      answer: content.get('page-contact', 'faq_2_answer', 'Biasanya 1-3 hari kerja setelah brief lengkap diterima.')
    },
    {
      id: 3,
      question: content.get('page-contact', 'faq_3_question', 'Apakah bisa meeting online?'),
      answer: content.get('page-contact', 'faq_3_answer', 'Tentu! Kami support meeting via Zoom, Google Meet, atau platform lainnya.')
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
            <i className="far fa-comment" style={{ fontSize: 14 }}></i> {content.get('page-contact', 'hero_badge', 'Get In Touch')}
          </span>
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, lineHeight: 1.1 as any, margin: '0 0 20px', color: '#111827', letterSpacing: '-0.02em' }}>
            <div style={{ background: 'linear-gradient(90deg, #9333EA, #0891B2)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', display: 'block', whiteSpace: 'nowrap' }}>
              {content.get('page-contact', 'hero_title_1', 'Mari Diskusi')}
            </div>
            <div style={{ display: 'block', whiteSpace: 'nowrap', marginTop: 6, color: '#000000', WebkitTextFillColor: '#000000', background: 'none' }}>
              {content.get('page-contact', 'hero_title_2', 'Proyek Anda')}
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
            {content.get('page-contact', 'hero_desc', 'Siap mewujudkan visi kreatif Anda? Tim ahli kami siap membantu dari konsultasi digital hingga produksi merchandise custom. Hubungi kami sekarang untuk konsultasi gratis!')}
          </p>
        </div>
      </section>

      {/* CONTACT INFO SECTION */}
      <section className="contact-info-section">
        <div className="container">
          <h2 className="section-title">{content.get('page-contact', 'contact_section_title', 'Hubungi Kami')}</h2>
          <p className="section-subtitle">{content.get('page-contact', 'contact_section_subtitle', 'Pilih cara yang paling nyaman untuk Anda')}</p>
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
              <i className="fab fa-whatsapp"></i> {content.get('page-contact', 'contact_btn_whatsapp', 'WhatsApp Sekarang')}
            </a>
            <a href="mailto:titikvisualjogja@gmail.com" className="btn btn-email-outline" target="_blank" rel="noopener noreferrer">
              <i className="far fa-envelope"></i> {content.get('page-contact', 'contact_btn_email', 'Kirim Email')}
            </a>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM SECTION */}
      <section className="inquiry-section">
        <div className="container inquiry-container">
          <div className="inquiry-form-wrapper">
            <h2 className="section-title">{content.get('page-contact', 'inquiry_title', 'Project Inquiry Form')}</h2>
            <p>{content.get('page-contact', 'inquiry_desc', 'Konsultasikan kebutuhan digital creative dan custom merchandise Anda dengan tim ahli kami. Dapatkan penawaran terbaik untuk proyek atau produk impian Anda!')}</p>
            
            {formAlert && (
              <div id="formAlert" className="form-alert">
                {formAlert}
              </div>
            )}
            
            <form className="inquiry-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nama">
                    <i className="far fa-user"></i> {content.get('page-contact', 'form_label_name', 'Nama Lengkap *')}
                  </label>
                  <input 
                    type="text" 
                    id="nama" 
                    name="nama"
                    placeholder={content.get('page-contact', 'form_placeholder_name', 'Masukkan nama lengkap')} 
                    value={formData.nama}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="far fa-envelope"></i> {content.get('page-contact', 'form_label_email', 'Email *')}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder={content.get('page-contact', 'form_placeholder_email', 'nama@email.com')} 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="whatsapp">
                    <i className="fas fa-phone-alt"></i> {content.get('page-contact', 'form_label_whatsapp', 'No. WhatsApp *')}
                  </label>
                  <input 
                    type="text" 
                    id="whatsapp" 
                    name="whatsapp"
                    placeholder={content.get('page-contact', 'form_placeholder_whatsapp', '08xxxxxxxxxx')} 
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="perusahaan">
                    <i className="far fa-building"></i> {content.get('page-contact', 'form_label_company', 'Nama Perusahaan')}
                  </label>
                  <input 
                    type="text" 
                    id="perusahaan" 
                    name="perusahaan"
                    placeholder={content.get('page-contact', 'form_placeholder_company', 'PT. Nama Perusahaan')} 
                    value={formData.perusahaan}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="layanan">
                    <i className="fas fa-wand-magic-sparkles"></i> {content.get('page-contact', 'form_label_service', 'Layanan yang Dibutuhkan *')}
                  </label>
                  <select 
                    id="layanan" 
                    name="layanan"
                    value={formData.layanan}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>{content.get('page-contact', 'form_select_service_placeholder', 'Pilih layanan')}</option>
                    <option value="UI/UX Design">{content.get('page-contact', 'form_option_uiux', 'UI/UX Design')}</option>
                    <option value="Web Development">{content.get('page-contact', 'form_option_web', 'Web Development')}</option>
                    <option value="Mobile App">{content.get('page-contact', 'form_option_mobile', 'Mobile App Development')}</option>
                    <option value="Custom Merchandise">{content.get('page-contact', 'form_option_merch', 'Custom Merchandise')}</option>
                    <option value="Digital Marketing">{content.get('page-contact', 'form_option_digital', 'Digital Marketing')}</option>
                    <option value="Branding">{content.get('page-contact', 'form_option_branding', 'Branding')}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="timeline">
                    <i className="far fa-calendar"></i> {content.get('page-contact', 'form_label_timeline', 'Timeline Proyek')}
                  </label>
                  <select 
                    id="timeline" 
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>{content.get('page-contact', 'form_select_timeline_placeholder', 'Pilih timeline')}</option>
                    <option value="Urgent (< 1 bulan)">{content.get('page-contact', 'form_select_timeline_urgent', 'Urgent (< 1 bulan)')}</option>
                    <option value="Normal (1-3 bulan)">{content.get('page-contact', 'form_select_timeline_normal', 'Normal (1-3 bulan)')}</option>
                    <option value="Flexible (> 3 bulan)">{content.get('page-contact', 'form_select_timeline_flexible', 'Flexible (> 3 bulan)')}</option>
                  </select>
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="budget">
                  <i className="far fa-file-alt"></i> {content.get('page-contact', 'form_label_budget', 'Budget Range')}
                </label>
                <select 
                  id="budget" 
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>{content.get('page-contact', 'form_select_budget_placeholder', 'Pilih budget range')}</option>
                  <option value="< Rp 5 juta">&lt; Rp 5 juta</option>
                  <option value="Rp 5-10 juta">Rp 5-10 juta</option>
                  <option value="Rp 10-25 juta">Rp 10-25 juta</option>
                  <option value="> Rp 25 juta">&gt; Rp 25 juta</option>
                </select>
              </div>
              <div className="form-group full-width">
                <label htmlFor="detail">
                  <i className="far fa-file-alt"></i> {content.get('page-contact', 'form_label_detail', 'Detail Proyek *')}
                </label>
                <textarea 
                  id="detail" 
                  name="detail"
                  rows={5} 
                  placeholder={content.get('page-contact', 'form_placeholder_detail', 'Ceritakan detail proyek/kebutuhan merchandise Anda, tujuan bisnis, target audience, spesifikasi produk, quantity, referensi design, dll.')} 
                  value={formData.detail}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                <i className="far fa-paper-plane"></i> {content.get('page-contact', 'form_btn_submit', 'Kirim Inquiry')}
              </button>
            </form>
          </div>
          <aside className="inquiry-sidebar">
            <div className="sidebar-widget">
              <h3>
                <i className="fas fa-clock"></i> {content.get('page-contact', 'sidebar_hours_title', 'Jam Operasional')}
              </h3>
              <ul>
                <li>
                  <span>{content.get('page-contact', 'sidebar_hours_mon_fri', 'Senin - Jumat')}</span> 
                  <span>09:00 - 18:00 WIB</span>
                </li>
                <li>
                  <span>{content.get('page-contact', 'sidebar_hours_sat', 'Sabtu')}</span> 
                  <span>09:00 - 15:00 WIB</span>
                </li>
                <li>
                  <span>{content.get('page-contact', 'sidebar_hours_sun', 'Minggu')}</span> 
                  <span>{content.get('page-contact', 'sidebar_hours_closed', 'Closed')}</span>
                </li>
              </ul>
            </div>
            <div className="sidebar-widget">
              <h3>
                <i className="far fa-comment"></i> {content.get('page-contact', 'sidebar_response_title', 'Response Time')}
              </h3>
              <ul className="response-list">
                <li>
                  <div className="response-label">
                    <span className="dot whatsapp"></span>
                    <strong>WhatsApp</strong>
                  </div>
                  <span className="response-value">{content.get('page-contact', 'sidebar_response_whatsapp', 'Kurang dari 1 jam (jam kerja)')}</span>
                </li>
                <li>
                  <div className="response-label">
                    <span className="dot email"></span>
                    <strong>Email</strong>
                  </div>
                  <span className="response-value">{content.get('page-contact', 'sidebar_response_email', 'Kurang dari 24 jam')}</span>
                </li>
                <li>
                  <div className="response-label">
                    <span className="dot form"></span>
                    <strong>Form Inquiry</strong>
                  </div>
                  <span className="response-value">{content.get('page-contact', 'sidebar_response_form', 'Kurang dari 24 jam')}</span>
                </li>
              </ul>
            </div>
            <div className="sidebar-widget faq-widget">
              <h3>{content.get('page-contact', 'sidebar_faq_title', 'Frequently Asked')}</h3>
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
          <h2>{content.get('page-contact', 'cta_title', 'Butuh Respon Cepat?')}</h2>
          <p>{content.get('page-contact', 'cta_desc', 'Untuk diskusi urgent tentang proyek digital atau order merchandise, langsung chat WhatsApp kami')}</p>
          <div className="cta-buttons">
            <a href="https://wa.me/6281804376001" className="btn btn-cta" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> {content.get('page-contact', 'cta_btn_whatsapp', 'Chat WhatsApp Sekarang')}
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
              <p>{content.get('page-contact', 'footer_about_desc', 'Spesialis digital creative dan custom merchandise yang berfokus pada kualitas dan kepuasan klien.')}</p>
            </div>
            <div className="footer-col">
              <h4 className="footer-title">{content.get('page-contact', 'footer_quick_links_title', 'Quick Links')}</h4>
              <ul className="footer-list">
                <li><a href="/about" onClick={(e) => { e.preventDefault(); handleFooterLink('/about'); }} className="link-button">{content.get('page-contact', 'footer_link_about', 'About Us')}</a></li>
                <li><a href="/portfolio" onClick={(e) => { e.preventDefault(); handleFooterLink('/portfolio'); }} className="link-button">{content.get('page-contact', 'footer_link_portfolio', 'Portfolio')}</a></li>
                <li><a href="/services" onClick={(e) => { e.preventDefault(); handleFooterLink('/services'); }} className="link-button">{content.get('page-contact', 'footer_link_services', 'Services')}</a></li>
                <li><a href="/careers" onClick={(e) => { e.preventDefault(); handleFooterLink('/careers'); }} className="link-button">{content.get('page-contact', 'footer_link_careers', 'Careers')}</a></li>
                <li><a href="/contact" onClick={(e) => { e.preventDefault(); handleFooterLink('/contact'); }} className="link-button">{content.get('page-contact', 'footer_link_contact', 'Contact')}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-title">{content.get('page-contact', 'footer_services_title', 'Services')}</h4>
              <ul className="footer-list">
                <li><a href="/ui-ux" onClick={(e) => { e.preventDefault(); handleFooterLink('/ui-ux'); }} className="link-button">{content.get('page-contact', 'footer_service_uiux', 'UI/UX Design')}</a></li>
                <li><a href="/web-apk" onClick={(e) => { e.preventDefault(); handleFooterLink('/web-apk'); }} className="link-button">{content.get('page-contact', 'footer_service_web', 'Web Development')}</a></li>
                <li><a href="/web-apk" onClick={(e) => { e.preventDefault(); handleFooterLink('/web-apk'); }} className="link-button">{content.get('page-contact', 'footer_service_app', 'Mobile App')}</a></li>
                <li><a href="/custom-merchandise" onClick={(e) => { e.preventDefault(); handleFooterLink('/custom-merchandise'); }} className="link-button">{content.get('page-contact', 'footer_service_merch', 'Custom Merchandise')}</a></li>
                <li><a href="/social-media" onClick={(e) => { e.preventDefault(); handleFooterLink('/social-media'); }} className="link-button">{content.get('page-contact', 'footer_service_digital_marketing', 'Digital Marketing')}</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-title">{content.get('page-contact', 'footer_contact_title', 'Contact Info')}</h4>
              <ul className="footer-list">
                <li><i className="fas fa-phone-alt"></i><span>{content.get('page-contact', 'footer_contact_phone', '081804376001')}</span></li>
                <li><i className="far fa-envelope"></i><span>{content.get('page-contact', 'footer_contact_email', 'titikvisualjogja@gmail.com')}</span></li>
                <li><i className="fas fa-map-marker-alt"></i><span>{content.get('page-contact', 'footer_contact_location', 'Yogyakarta, Indonesia')}</span></li>
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
