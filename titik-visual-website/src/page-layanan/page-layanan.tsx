import React, { useState } from 'react';
import './style.css';
const getImg = (name: string) => {
  try {
    return require(`../img/${name}`);
  } catch {
    return '';
  }
};

function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);



  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="services-page">




      {/* Hero Section - Kategori Layanan */}
      <main className="hero-section" style={{ backgroundColor: '#FFFFFF', backgroundImage: 'none' }}>
        <div className="container">
          <h1>Kategori Layanan Utama</h1>
          <p className="subtitle">Pilih kategori layanan yang sesuai dengan kebutuhan bisnis Anda</p>

          <div className="category-grid-main">
            {/* Card 1: UI/UX Design */}
            <div className="category-card">
              <div className="card-icon purple">
                <img
                  src={getImg('ui-ux desain.png')}
                  alt="UI/UX Design Icon"
                  style={{ width: '64%', height: '64%', objectFit: 'contain', display: 'block', opacity: 1 }}
                />
              </div>
              <h3>UI/UX Design</h3>
              <p>Desain interface yang user-friendly dan menarik untuk website dan aplikasi mobile</p>
              <a
                href="/ui-ux"
                className="btn-detail btn-purple"
                style={{
                  background: 'linear-gradient(90deg, #A855F7, #EC4899)',
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                <i className="fas fa-arrow-right" style={{ marginRight: 8 }}></i>
                <span>Lihat Detail</span>
              </a>
            </div>

            {/* Card 2: Website & Aplikasi */}
            <div className="category-card">
              <div className="card-icon blue">
                <img
                  src={getImg('website.png')}
                  alt="Website icon"
                  style={{ width: '64%', height: '64%', objectFit: 'contain', display: 'block', opacity: 1 }}
                />
              </div>
              <h3>Website & Aplikasi</h3>
              <p>Website responsif dan aplikasi mobile dengan teknologi terdepan</p>
              <a
                href="/web-apk"
                className="btn-detail btn-blue"
                style={{
                  background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                <i className="fas fa-arrow-right" style={{ marginRight: 8 }}></i>
                <span>Lihat Detail</span>
              </a>
            </div>

            {/* Card 3: Logo Design */}
            <div className="category-card">
              <div className="card-icon orange">
                <img
                  src={getImg('logo desain.png')}
                  alt="Logo Desain icon"
                  style={{ width: '64%', height: '64%', objectFit: 'contain', display: 'block', opacity: 1 }}
                />
              </div>
              <h3>Logo Design</h3>
              <p>Logo profesional yang mencerminkan identitas dan nilai brand Anda</p>
              <a
                href="/logo-design"
                className="btn-detail btn-orange"
                style={{
                  background: 'linear-gradient(90deg, #F97316, #EF4444)',
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                <i className="fas fa-arrow-right" style={{ marginRight: 8 }}></i>
                <span>Lihat Detail</span>
              </a>
            </div>

            {/* Card 4: Social Media Management */}
            <div className="category-card">
              <div className="card-icon pink">
                <img
                  src={getImg('sosial managemen.png')}
                  alt="Social Media Management icon"
                  style={{ width: '64%', height: '64%', objectFit: 'contain', display: 'block', opacity: 1 }}
                />
              </div>
              <h3>Social Media Management</h3>
              <p>Strategi konten dan manajemen media sosial untuk meningkatkan engagement</p>
              <a
                href="/social-media"
                className="btn-detail btn-pink"
                style={{
                  background: 'linear-gradient(90deg, #EC4899, #F43F5E)',
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                <i className="fas fa-arrow-right" style={{ marginRight: 8 }}></i>
                <span>Lihat Detail</span>
              </a>
            </div>

            {/* Card 5: Custom Merchandise */}
            <div className="category-card">
              <div className="card-icon teal">
                <i
                  className="fas fa-gift"
                  aria-label="Custom Merchandise icon"
                  style={{ fontSize: 36, color: '#8B5CF6' }}
                ></i>
              </div>
              <h3>Custom Merchandise</h3>
              <p>Berbagai pilihan merchandise custom berkualitas untuk kebutuhan branding</p>
              <a
                href="/custom-merchandise"
                className="btn-detail btn-teal"
                style={{
                  background: 'linear-gradient(90deg, #14B8A6, #0EA5E9)',
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                <i className="fas fa-arrow-right" style={{ marginRight: 8 }}></i>
                <span>Lihat Detail</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Services List Section (Detail) */}
      <section className="services-list-section">
        <div className="container">
          <div className="section-header-v2">
            <h2>Layanan Lengkap Kami</h2>
            <p>Solusi digital komprehensif untuk setiap tahap pertumbuhan bisnis Anda</p>
          </div>

          <div className="services-grid-v2">
            {/* UI/UX */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src={getImg('ui_ux.png')} alt="UI/UX Design" /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>UI/UX Design</h3>
                <p className="description">Desain antarmuka yang intuitif dan pengalaman pengguna yang optimal.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> User Research & Analysis</li>
                  <li><i className="fas fa-check-circle"></i> Wireframing & Prototyping</li>
                  <li><i className="fas fa-check-circle"></i> Mobile & Web App Design</li>
                  <li><i className="fas fa-check-circle"></i> Design System Creation</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 3.500.000</span></div>
                <div className="info-row"><span>Durasi</span><span>2–4 minggu</span></div>
                <a href="https://wa.me/6281804376001" className="btn-pesan btn-grad-purple"><i className="fas fa-shopping-cart"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Web Dev */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src={getImg('web.png')} alt="Web Development" /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>Website Development</h3>
                <p className="description">Website profesional yang cepat, aman, dan responsif untuk bisnis Anda.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> Responsive Web Design</li>
                  <li><i className="fas fa-check-circle"></i> SEO Optimization</li>
                  <li><i className="fas fa-check-circle"></i> Content Management System</li>
                  <li><i className="fas fa-check-circle"></i> E-commerce Integration</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 8.500.000</span></div>
                <div className="info-row"><span>Durasi</span><span>3–6 minggu</span></div>
                <a href="https://wa.me/6281804376001" className="btn-pesan btn-grad-blue"><i className="fas fa-shopping-cart"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Mobile App */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src={getImg('Mobile.png')} alt="Mobile App Development" /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>Mobile App Development</h3>
                <p className="description">Aplikasi mobile iOS dan Android yang powerful dengan teknologi terbaru.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> iOS & Android Apps</li>
                  <li><i className="fas fa-check-circle"></i> Cross-Platform Development</li>
                  <li><i className="fas fa-check-circle"></i> App Store Optimization</li>
                  <li><i className="fas fa-check-circle"></i> Maintenance & Support</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 15.000.000</span></div>
                <div className="info-row"><span>Durasi</span><span>6–12 minggu</span></div>
                <a href="https://wa.me/6281804376001" className="btn-pesan btn-grad-green"><i className="fas fa-shopping-cart"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src={getImg('digital marketing.png')} alt="Digital Marketing" /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>Digital Marketing</h3>
                <p className="description">Strategi pemasaran digital terukur untuk meningkatkan ROI bisnis Anda.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> Social Media Management</li>
                  <li><i className="fas fa-check-circle"></i> Content Marketing</li>
                  <li><i className="fas fa-check-circle"></i> Paid Advertising (Ads)</li>
                  <li><i className="fas fa-check-circle"></i> Email Marketing</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 2.000.000/bulan</span></div>
                <div className="info-row"><span>Status</span><span>Ongoing</span></div>
                <a href="https://wa.me/6281804376001" className="btn-pesan btn-grad-pink"><i className="fas fa-shopping-cart"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Logo & Branding */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src={getImg('logo desain.png')} alt="Branding Identity" /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>Logo & Brand Identity</h3>
                <p className="description">Membangun identitas visual yang kuat dan memorable untuk brand Anda.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> Logo Design</li>
                  <li><i className="fas fa-check-circle"></i> Brand Guidelines</li>
                  <li><i className="fas fa-check-circle"></i> Visual Identity System</li>
                  <li><i className="fas fa-check-circle"></i> Marketing Collaterals</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 6.500.000</span></div>
                <div className="info-row"><span>Durasi</span><span>3–6 minggu</span></div>
                <a href="https://wa.me/6281804376001" className="btn-pesan btn-grad-orange"><i className="fas fa-shopping-cart"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Custom Merchandise */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src={getImg('merchandise custom.png')} alt="Custom Merchandise" /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>Custom Merchandise</h3>
                <p className="description">Solusi merchandise custom berkualitas untuk branding dan corporate gifts.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> Corporate Gifts</li>
                  <li><i className="fas fa-check-circle"></i> Custom Apparel</li>
                  <li><i className="fas fa-check-circle"></i> Promotional Items</li>
                  <li><i className="fas fa-check-circle"></i> Event Souvenirs</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 2.000.000</span></div>
                <div className="info-row"><span>Durasi</span><span>On demand</span></div>
                <a href="https://wa.me/6281804376001" className="btn-pesan btn-grad-slate"><i className="fas fa-shopping-cart"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Social Media Management */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src={getImg('sosial managemen.png')} alt="Social Media Management" /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>Social Media Management</h3>
                <p className="description">Pengelolaan konten, kalender, dan engagement untuk channel sosial Anda.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> Content Planning</li>
                  <li><i className="fas fa-check-circle"></i> Copywriting & Design</li>
                  <li><i className="fas fa-check-circle"></i> Posting & Scheduling</li>
                  <li><i className="fas fa-check-circle"></i> Report & Optimization</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 1.500.000/bulan</span></div>
                <div className="info-row"><span>Status</span><span>Ongoing</span></div>
                <a href="https://wa.me/6281804376001" className="btn-pesan btn-grad-pink"><i className="fas fa-shopping-cart"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Social Media Feed Design */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src={getImg('feed design.png')} alt="Social Media Feed Design" /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>Social Media Feed Design</h3>
                <p className="description">Desain feed Instagram/TikTok yang konsisten dan menarik.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> Template Grid</li>
                  <li><i className="fas fa-check-circle"></i> Visual Identity</li>
                  <li><i className="fas fa-check-circle"></i> Caption Guide</li>
                  <li><i className="fas fa-check-circle"></i> Export Assets</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 800.000/bulan</span></div>
                <div className="info-row"><span>Status</span><span>Ongoing</span></div>
                <a href="https://wa.me/6281804376001" className="btn-pesan btn-grad-blue"><i className="fas fa-shopping-cart"></i> Pesan Sekarang</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header-v2 centered">
            <h2>Frequently Asked Questions</h2>
            <p>Pertanyaan umum seputar layanan kami</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                <h3>Berapa lama proses pengerjaan website?</h3>
                <span className={`toggle-icon ${activeFaq === 1 ? 'active' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${activeFaq === 1 ? 'open' : ''}`}>
                <p>Waktu pengerjaan website bervariasi tergantung kompleksitas. Untuk landing page sekitar 3-5 hari, company profile 1-2 minggu, dan toko online 2-4 minggu.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(2)}>
                <h3>Apakah ada garansi maintenance?</h3>
                <span className={`toggle-icon ${activeFaq === 2 ? 'active' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${activeFaq === 2 ? 'open' : ''}`}>
                <p>Ya, kami memberikan garansi maintenance gratis selama 1-3 bulan (tergantung paket) untuk memastikan website berjalan lancar.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(3)}>
                <h3>Bagaimana sistem pembayarannya?</h3>
                <span className={`toggle-icon ${activeFaq === 3 ? 'active' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${activeFaq === 3 ? 'open' : ''}`}>
                <p>Pembayaran dilakukan dengan sistem DP (Down Payment) 50% di awal, dan pelunasan 50% setelah project selesai dan disetujui.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(4)}>
                <h3>Apakah file desain master diberikan?</h3>
                <span className={`toggle-icon ${activeFaq === 4 ? 'active' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${activeFaq === 4 ? 'open' : ''}`}>
                <p>Ya, untuk layanan desain grafis (logo, UI/UX), kami akan memberikan file master (source file) setelah pelunasan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-v2">
        <div className="container">
          <div className="cta-content-v2">
            <h2>Siap Mengembangkan Bisnis Anda?</h2>
            <p>Konsultasikan kebutuhan digital Anda dengan tim ahli kami sekarang juga.</p>
            <div className="cta-buttons-v2">
              <a href="https://wa.me/6281804376001" className="btn-primary-v2">
                <i className="fab fa-whatsapp"></i> Chat WhatsApp
              </a>
              <a href="/contact" className="btn-secondary-v2">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-grid">
        <div className="footer-col">
          <img src={getImg('img.png')} alt="Titik Visual Logo" className="footer-logo" />
          <p>Partner digital kreatif terpercaya untuk pertumbuhan bisnis Anda. Melayani pembuatan website, aplikasi, desain grafis, hingga merchandise.</p>
          <div className="social-links">
            <a href="https://instagram.com/titikvisual" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com/company/titikvisual" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://dribbble.com/titikvisual" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Layanan</h4>
          <ul>
            <li><a href="/ui-ux">UI/UX Design</a></li>
            <li><a href="/web-apk">Website Development</a></li>
            <li><a href="/web-apk">Mobile Apps</a></li>
            <li><a href="/social-media">Social Media Management</a></li>
            <li><a href="/logo-design">Logo & Branding</a></li>
            <li><a href="/custom-merchandise">Custom Merchandise</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Perusahaan</h4>
          <ul>
            <li><a href="/about">Tentang Kami</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/careers">Karir</a></li>
            <li><a href="/program-magang">Program Magang</a></li>
            <li><a href="/contact">Hubungi Kami</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Kontak</h4>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> Yogyakarta, Indonesia</li>
            <li><i className="fas fa-envelope"></i> titikvisualjogja@gmail.com</li>
            <li><i className="fab fa-whatsapp"></i> +62 818-0437-6001</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
