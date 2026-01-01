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
          <p className="subtitle">Pilih layanan digital unggulan yang sesuai dengan kebutuhan bisnis Anda.</p>

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
            <h2>Digital Creative Services</h2>
            <p>Layanan digital unggulan yang siap membantu pertumbuhan bisnis Anda.</p>
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
                  <li><i className="fas fa-check-circle"></i> UI/UX Research</li>
                  <li><i className="fas fa-check-circle"></i> Wireframing</li>
                  <li><i className="fas fa-check-circle"></i> Prototyping</li>
                  <li><i className="fas fa-check-circle"></i> UI Design</li>
                  <li><i className="fas fa-check-circle"></i> UX Writing</li>
                  <li><i className="fas fa-check-circle"></i> Design System Catalog</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 1.500.000</span></div>
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
                  <li><i className="fas fa-check-circle"></i> Responsive Design</li>
                  <li><i className="fas fa-check-circle"></i> SEO Friendly</li>
                  <li><i className="fas fa-check-circle"></i> CMS Integration</li>
                  <li><i className="fas fa-check-circle"></i> Custom Features</li>
                  <li><i className="fas fa-check-circle"></i> Maintenance & Support</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 2.500.000</span></div>
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
                  <li><i className="fas fa-check-circle"></i> iOS/Android App</li>
                  <li><i className="fas fa-check-circle"></i> Cross-Platform</li>
                  <li><i className="fas fa-check-circle"></i> Custom Features</li>
                  <li><i className="fas fa-check-circle"></i> API Integration</li>
                  <li><i className="fas fa-check-circle"></i> Maintenance & Support</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 3.500.000</span></div>
                <a href="https://wa.me/6281804376001" className="btn-pesan btn-grad-green"><i className="fas fa-shopping-cart"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Logo Design */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src={getImg('Logo Design.png')} alt="Logo Design" /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>Logo Design</h3>
                <p className="description">Logo profesional yang mencerminkan identitas dan nilai brand Anda.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> Konsep Logo</li>
                  <li><i className="fas fa-check-circle"></i> Revisi Desain</li>
                  <li><i className="fas fa-check-circle"></i> File Master</li>
                  <li><i className="fas fa-check-circle"></i> Brand Guideline</li>
                  <li><i className="fas fa-check-circle"></i> Hak Cipta</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 500.000</span></div>
                <a href="https://wa.me/6281804376001" className="btn-pesan btn-grad-orange"><i className="fas fa-shopping-cart"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Jasa Desain & Merchandise */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src={getImg('custom mercandhise.png')} alt="Jasa Desain & Merchandise" /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>Jasa Desain & Merchandise</h3>
                <p className="description">Layanan desain grafis dan merchandise custom untuk kebutuhan branding Anda.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> Desain Grafis</li>
                  <li><i className="fas fa-check-circle"></i> Desain Produk</li>
                  <li><i className="fas fa-check-circle"></i> Desain Kemasan</li>
                  <li><i className="fas fa-check-circle"></i> Desain Promosi</li>
                  <li><i className="fas fa-check-circle"></i> Desain Ilustrasi</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 300.000</span></div>
                <a href="https://wa.me/6281804376001" className="btn-pesan btn-grad-purple"><i className="fas fa-shopping-cart"></i> Pesan Sekarang</a>
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
                  <li><i className="fas fa-check-circle"></i> Strategi Konten</li>
                  <li><i className="fas fa-check-circle"></i> Desain Konten</li>
                  <li><i className="fas fa-check-circle"></i> Jadwal Posting</li>
                  <li><i className="fas fa-check-circle"></i> Analisis Kinerja</li>
                  <li><i className="fas fa-check-circle"></i> Laporan Bulanan</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 1.000.000</span></div>
                <a href="https://wa.me/6281804376001" className="btn-pesan btn-grad-pink"><i className="fas fa-shopping-cart"></i> Pesan Sekarang</a>
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
                  <li><i className="fas fa-check-circle"></i> SEO & SEM</li>
                  <li><i className="fas fa-check-circle"></i> Email Marketing</li>
                  <li><i className="fas fa-check-circle"></i> Social Media Ads</li>
                  <li><i className="fas fa-check-circle"></i> Content Marketing</li>
                  <li><i className="fas fa-check-circle"></i> Analisis & Laporan</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 1.500.000</span></div>
                <a href="https://wa.me/6281804376001" className="btn-pesan btn-grad-purple"><i className="fas fa-shopping-cart"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Social Media Post Design */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src={getImg('Social Media Feed Design.png')} alt="Social Media Post Design" /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>Social Media Post Design</h3>
                <p className="description">Desain feed Instagram/TikTok yang konsisten dan menarik.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> Feed Design</li>
                  <li><i className="fas fa-check-circle"></i> Story Design</li>
                  <li><i className="fas fa-check-circle"></i> Carousel Design</li>
                  <li><i className="fas fa-check-circle"></i> Infographic Design</li>
                  <li><i className="fas fa-check-circle"></i> Motion Graphic</li>
                </ul>
                <div className="info-row"><span>Mulai dari</span><span className="price">Rp 150.000</span></div>
                <a href="https://wa.me/6281804376001" className="btn-pesan btn-grad-blue"><i className="fas fa-shopping-cart"></i> Pesan Sekarang</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Drinkware Collection */}
      <section className="products-section custom-drinkware">
        <div className="container">
          <div className="section-header-v2">
            <h2 className="section-title">Custom Drinkware Collection</h2>
            <p className="section-subtitle">Kami menyediakan drinkware custom dengan berbagai pilihan model dan warna.</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <img src={getImg('Botol Minum & Tumbler Custom.png')} alt="Botol Minum & Tumbler Custom" />
              </div>
              <div className="product-content">
                <h3>Botol Minum & Tumbler Custom</h3>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> Material Stainless Steel</li>
                  <li><i className="fas fa-check"></i> Kapasitas Beragam</li>
                  <li><i className="fas fa-check"></i> Pilihan Warna</li>
                  <li><i className="fas fa-check"></i> Desain Custom</li>
                  <li><i className="fas fa-check"></i> Tahan Panas/Dingin</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Mulai dari</span>
                    <span className="price">Rp 50.000</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #3B82F6, #06B6D4)' }}>
                  <i className="fas fa-shopping-cart"></i> Pesan Sekarang
                </a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={getImg('mug.png')} alt="Mug Custom" />
              </div>
              <div className="product-content">
                <h3>Mug Custom</h3>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> Material Keramik</li>
                  <li><i className="fas fa-check"></i> Kapasitas Standar</li>
                  <li><i className="fas fa-check"></i> Desain Full Color</li>
                  <li><i className="fas fa-check"></i> Tahan Microwave</li>
                  <li><i className="fas fa-check"></i> Cocok untuk Souvenir</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Mulai dari</span>
                    <span className="price">Rp 25.000</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #F97316, #EF4444)' }}>
                  <i className="fas fa-shopping-cart"></i> Pesan Sekarang
                </a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={getImg('gelas kaca.png')} alt="Gelas Kaca Premium" />
              </div>
              <div className="product-content">
                <h3>Gelas Kaca Premium</h3>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> Material Kaca Tebal</li>
                  <li><i className="fas fa-check"></i> Desain Elegan</li>
                  <li><i className="fas fa-check"></i> Kapasitas Beragam</li>
                  <li><i className="fas fa-check"></i> Cocok untuk Restoran</li>
                  <li><i className="fas fa-check"></i> Custom Logo/Tulisan</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Mulai dari</span>
                    <span className="price">Rp 30.000</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #A855F7, #EC4899)' }}>
                  <i className="fas fa-shopping-cart"></i> Pesan Sekarang
                </a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={getImg('drink jar.png')} alt="Dispenser & Galon Custom" />
              </div>
              <div className="product-content">
                <h3>Dispenser & Galon Custom</h3>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> Material Stainless Steel/Plastik</li>
                  <li><i className="fas fa-check"></i> Kapasitas Besar</li>
                  <li><i className="fas fa-check"></i> Desain Custom</li>
                  <li><i className="fas fa-check"></i> Cocok untuk Kantor</li>
                  <li><i className="fas fa-check"></i> Tahan Lama</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Mulai dari</span>
                    <span className="price">Rp 250.000</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #16A34A, #059669)' }}>
                  <i className="fas fa-shopping-cart"></i> Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Bags Collection */}
      <section className="products-section custom-bags-section">
        <div className="container">
          <div className="section-header-v2">
            <h2 className="section-title">Custom Bags Collection</h2>
            <p className="section-subtitle">Berbagai jenis tas custom yang dapat disesuaikan dengan kebutuhan branding Anda.</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <img src={getImg('tas canvas.png')} alt="Totebag Kanvas Custom" />
              </div>
              <div className="product-content">
                <h3>Totebag Kanvas Custom</h3>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> Material Kanvas Tebal</li>
                  <li><i className="fas fa-check"></i> Ukuran Standar</li>
                  <li><i className="fas fa-check"></i> Desain Full Color</li>
                  <li><i className="fas fa-check"></i> Cocok untuk Event</li>
                  <li><i className="fas fa-check"></i> Ramah Lingkungan</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Mulai dari</span>
                    <span className="price">Rp 35.000</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #DB2777, #E11D48)' }}>
                  <i className="fas fa-shopping-cart"></i> Pesan Sekarang
                </a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={getImg('Tas Furing Spunbond.png')} alt="Tas Spunbond Custom" />
              </div>
              <div className="product-content">
                <h3>Tas Spunbond Custom</h3>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> Material Spunbond</li>
                  <li><i className="fas fa-check"></i> Berbagai Ukuran</li>
                  <li><i className="fas fa-check"></i> Desain Custom</li>
                  <li><i className="fas fa-check"></i> Harga Ekonomis</li>
                  <li><i className="fas fa-check"></i> Cocok untuk Promosi</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Mulai dari</span>
                    <span className="price">Rp 15.000</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #3B82F6, #06B6D4)' }}>
                  <i className="fas fa-shopping-cart"></i> Pesan Sekarang
                </a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={getImg('Tas Kertas & Plastik Custom.png')} alt="Tas Belanja/Paper Bag Custom" />
              </div>
              <div className="product-content">
                <h3>Tas Belanja/Paper Bag Custom</h3>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> Material Kertas Tebal</li>
                  <li><i className="fas fa-check"></i> Desain Elegan</li>
                  <li><i className="fas fa-check"></i> Ukuran Beragam</li>
                  <li><i className="fas fa-check"></i> Cocok untuk Butik</li>
                  <li><i className="fas fa-check"></i> Custom Logo/Brand</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Mulai dari</span>
                    <span className="price">Rp 10.000</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #16A34A, #059669)' }}>
                  <i className="fas fa-shopping-cart"></i> Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Gifts & Tech */}
      <section className="products-section corporate-gifts">
        <div className="container">
          <div className="section-header-v2">
            <h2 className="section-title">Corporate Gifts & Tech</h2>
            <p className="section-subtitle">Pilihan hadiah korporat dan merchandise teknologi yang inovatif dan berkualitas.</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <img src={getImg('Powerbank Custom.png')} alt="Powerbank Custom" />
              </div>
              <div className="product-content">
                <h3>Powerbank Custom</h3>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> Kapasitas Beragam</li>
                  <li><i className="fas fa-check"></i> Desain Custom</li>
                  <li><i className="fas fa-check"></i> Material Premium</li>
                  <li><i className="fas fa-check"></i> Cocok untuk Hadiah</li>
                  <li><i className="fas fa-check"></i> Garansi Produk</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Mulai dari</span>
                    <span className="price">Rp 100.000</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #16A34A, #059669)' }}>
                  <i className="fas fa-shopping-cart"></i> Pesan Sekarang
                </a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={getImg('icon file.png')} alt="Flashdisk Custom" />
              </div>
              <div className="product-content">
                <h3>Flashdisk Custom</h3>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> Kapasitas Beragam</li>
                  <li><i className="fas fa-check"></i> Desain Custom</li>
                  <li><i className="fas fa-check"></i> Material Metal/Plastik</li>
                  <li><i className="fas fa-check"></i> Cocok untuk Souvenir</li>
                  <li><i className="fas fa-check"></i> Garansi Produk</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Mulai dari</span>
                    <span className="price">Rp 50.000</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #A855F7, #EC4899)' }}>
                  <i className="fas fa-shopping-cart"></i> Pesan Sekarang
                </a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={getImg('Paket Seminar Kit.png')} alt="Paket Seminar Kit" />
              </div>
              <div className="product-content">
                <h3>Paket Seminar Kit</h3>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> Isi Paket Lengkap</li>
                  <li><i className="fas fa-check"></i> Desain Custom</li>
                  <li><i className="fas fa-check"></i> Material Berkualitas</li>
                  <li><i className="fas fa-check"></i> Cocok untuk Event</li>
                  <li><i className="fas fa-check"></i> Harga Fleksibel</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Mulai dari</span>
                    <span className="price">Rp 75.000</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #A855F7, #EC4899)' }}>
                  <i className="fas fa-shopping-cart"></i> Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Merchandise */}
      <section className="products-section lifestyle-merch">
        <div className="container">
          <div className="section-header-v2">
            <h2 className="section-title">Lifestyle Merchandise</h2>
            <p className="section-subtitle">Merchandise gaya hidup yang unik dan personal untuk kebutuhan promosi atau pribadi.</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <img src={getImg('Payung Custom Premium.png')} alt="Payung Custom/Promosi" />
              </div>
              <div className="product-content">
                <h3>Payung Custom/Promosi</h3>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> Material Kuat</li>
                  <li><i className="fas fa-check"></i> Desain Custom</li>
                  <li><i className="fas fa-check"></i> Ukuran Standar</li>
                  <li><i className="fas fa-check"></i> Cocok untuk Promosi</li>
                  <li><i className="fas fa-check"></i> Tahan Angin</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Mulai dari</span>
                    <span className="price">Rp 40.000</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #3B82F6, #06B6D4)' }}>
                  <i className="fas fa-shopping-cart"></i> Pesan Sekarang
                </a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={getImg('Jam Dinding Custom.png')} alt="Jam Dinding Custom" />
              </div>
              <div className="product-content">
                <h3>Jam Dinding Custom</h3>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> Material Plastik/Kayu</li>
                  <li><i className="fas fa-check"></i> Desain Custom</li>
                  <li><i className="fas fa-check"></i> Ukuran Beragam</li>
                  <li><i className="fas fa-check"></i> Cocok untuk Kantor</li>
                  <li><i className="fas fa-check"></i> Mesin Quartz</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Mulai dari</span>
                    <span className="price">Rp 30.000</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #EA580C, #DC2626)' }}>
                  <i className="fas fa-shopping-cart"></i> Pesan Sekarang
                </a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={getImg('Pulpen & Pin Custom.png')} alt="Pulpen & Pen Custom" />
              </div>
              <div className="product-content">
                <h3>Pulpen & Pen Custom</h3>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> Material Plastik/Metal</li>
                  <li><i className="fas fa-check"></i> Desain Custom</li>
                  <li><i className="fas fa-check"></i> Tinta Berkualitas</li>
                  <li><i className="fas fa-check"></i> Cocok untuk Souvenir</li>
                  <li><i className="fas fa-check"></i> Harga Ekonomis</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Mulai dari</span>
                    <span className="price">Rp 5.000</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #DB2777, #E11D48)' }}>
                  <i className="fas fa-shopping-cart"></i> Pesan Sekarang
                </a>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image">
                <img src={getImg('Asbak & Aksesoris.png')} alt="Asbak & Aksesoris" />
              </div>
              <div className="product-content">
                <h3>Asbak & Aksesoris</h3>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> Material Keramik/Kaca</li>
                  <li><i className="fas fa-check"></i> Desain Custom</li>
                  <li><i className="fas fa-check"></i> Ukuran Beragam</li>
                  <li><i className="fas fa-check"></i> Cocok untuk Cafe</li>
                  <li><i className="fas fa-check"></i> Mudah Dibersihkan</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Mulai dari</span>
                    <span className="price">Rp 15.000</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #475569, #334155)' }}>
                  <i className="fas fa-shopping-cart"></i> Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="work-process-section">
        <div className="container">
          <div className="section-header-v2">
            <h2 className="section-title">Proses Kerja Kami</h2>
            <p className="section-subtitle">Langkah-langkah sederhana untuk memulai proyek Anda bersama kami.</p>
          </div>
          <div className="work-process-timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-comments"></i>
                <span className="step-number">1</span>
              </div>
              <h3 className="timeline-title">Konsultasi</h3>
              <p className="timeline-description">Diskusikan kebutuhan dan visi proyek Anda dengan tim kami</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-file-invoice-dollar"></i>
                <span className="step-number">2</span>
              </div>
              <h3 className="timeline-title">Penawaran</h3>
              <p className="timeline-description">Terima penawaran harga dan timeline yang sesuai kebutuhan</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-cogs"></i>
                <span className="step-number">3</span>
              </div>
              <h3 className="timeline-title">Proses</h3>
              <p className="timeline-description">Tim kami mulai mengerjakan proyek sesuai kesepakatan</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-edit"></i>
                <span className="step-number">4</span>
              </div>
              <h3 className="timeline-title">Revisi & Finalisasi</h3>
              <p className="timeline-description">Review hasil dan lakukan revisi hingga sesuai harapan</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-check-circle"></i>
                <span className="step-number">5</span>
              </div>
              <h3 className="timeline-title">Delivery</h3>
              <p className="timeline-description">Terima hasil akhir proyek yang telah diselesaikan</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header-v2 centered">
            <h2>Frequently Asked Questions</h2>
            <p>Temukan jawaban atas pertanyaan umum seputar layanan kami.</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                <h3>Bagaimana cara memesan layanan atau produk?</h3>
                <span className={`toggle-icon ${activeFaq === 1 ? 'active' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${activeFaq === 1 ? 'open' : ''}`}>
                <p>Anda dapat memesan layanan atau produk dengan menghubungi kami melalui WhatsApp, email, atau mengisi formulir kontak di website. Tim kami akan segera merespons dan membantu proses pemesanan Anda.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(2)}>
                <h3>Berapa lama proses pengerjaan?</h3>
                <span className={`toggle-icon ${activeFaq === 2 ? 'active' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${activeFaq === 2 ? 'open' : ''}`}>
                <p>Waktu pengerjaan bervariasi tergantung jenis layanan dan kompleksitas proyek. Untuk desain logo sekitar 1-2 minggu, website 2-4 minggu, aplikasi mobile 6-12 minggu, dan merchandise custom 1-2 minggu setelah konfirmasi desain.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(3)}>
                <h3>Apakah ada garansi untuk layanan yang diberikan?</h3>
                <span className={`toggle-icon ${activeFaq === 3 ? 'active' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${activeFaq === 3 ? 'open' : ''}`}>
                <p>Ya, kami memberikan garansi untuk layanan yang diberikan. Untuk website dan aplikasi, kami memberikan garansi maintenance gratis selama 1-3 bulan. Untuk produk merchandise, kami memberikan garansi kualitas produk sesuai dengan ketentuan yang berlaku.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(4)}>
                <h3>Bagaimana jika saya ingin revisi desain?</h3>
                <span className={`toggle-icon ${activeFaq === 4 ? 'active' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${activeFaq === 4 ? 'open' : ''}`}>
                <p>Kami menyediakan kesempatan revisi desain sesuai dengan paket yang Anda pilih. Umumnya, kami memberikan 2-3 kali revisi gratis. Revisi tambahan dapat dilakukan dengan biaya tambahan yang telah disepakati sebelumnya.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(5)}>
                <h3>Apakah ada diskon untuk pemesanan jumlah besar?</h3>
                <span className={`toggle-icon ${activeFaq === 5 ? 'active' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${activeFaq === 5 ? 'open' : ''}`}>
                <p>Ya, kami memberikan diskon khusus untuk pemesanan dalam jumlah besar. Besaran diskon akan disesuaikan dengan volume pemesanan. Silakan hubungi tim kami untuk mendapatkan penawaran harga terbaik.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-v2">
        <div className="container">
          <div className="cta-content-v2">
            <h2>Siap Memulai Proyek Anda?</h2>
            <p>Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau ingin memulai proyek baru.</p>
            <div className="cta-buttons-v2">
              <a href="/contact" className="btn-primary-v2">
                Hubungi Kami
              </a>
              <a href="https://wa.me/6281804376001" className="btn-secondary-v2">
                Mulai Proyek
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <img src={getImg('img.png')} alt="Digital Creative Services Logo" className="footer-logo" />
              <p>Partner digital kreatif terpercaya untuk pertumbuhan bisnis Anda. Melayani pembuatan website, aplikasi, desain grafis, hingga merchandise.</p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-list">
                <li><a href="/">Home</a></li>
                <li><a href="/services">Layanan</a></li>
                <li><a href="/portfolio">Portofolio</a></li>
                <li><a href="/about">Tentang Kami</a></li>
                <li><a href="/contact">Live Chat</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Layanan Kami</h4>
              <ul className="footer-list">
                <li><a href="/ui-ux">Desain Grafis</a></li>
                <li><a href="/web-apk">Website & Aplikasi</a></li>
                <li><a href="/social-media">Digital Marketing</a></li>
                <li><a href="/custom-merchandise">Merchandise Custom</a></li>
                <li><a href="/custom-merchandise">Corporate Gift</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Kontak Kami</h4>
              <ul className="footer-list contact-info">
                <li><i className="fas fa-map-marker-alt"></i> <span>Alamat</span></li>
                <li><i className="fas fa-envelope"></i> <span>Email</span></li>
                <li><i className="fas fa-phone"></i> <span>Telepon</span></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 Digital Creative Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ServicesPage;
