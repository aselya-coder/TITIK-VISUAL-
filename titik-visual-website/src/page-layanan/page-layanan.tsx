import React, { useState } from 'react';
import './style.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="App">
      {/* Top Bar */}
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

      {/* Main Navbar */}
      <nav className="main-nav">
        <div className="nav-left">
          <img src="../img/img.png" alt="Titik Visual Logo" className="logo" />
        </div>

        <ul className={`nav-right ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="../beranda/beranda.tsx">Home</a></li>
          <li><a href="../page-about/page-about.tsx">Profile</a></li>
          <li className="active"><a href="#layanan">Layanan</a></li>
          <li><a href="../page-portfolio/page-portfolio.tsx">Portfolio</a> <i className="fas fa-chevron-down"></i></li>
          <li><a href="../page-contact/page-contact.tsx">Kontak</a></li>
        </ul>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Hero Section - Kategori Layanan */}
      <main className="hero-section">
        <div className="container">
          <h1>Kategori Layanan Utama</h1>
          <p className="subtitle">Pilih kategori layanan yang sesuai dengan kebutuhan bisnis Anda</p>

          <div className="category-grid-main">
            {/* Card 1: UI/UX Design */}
            <div className="category-card">
              <div className="card-icon purple">
                <img src="../img/ui-ux desain.png" alt="UI/UX Design Icon" />
              </div>
              <h3>UI/UX Design</h3>
              <p>Desain interface yang user-friendly dan menarik</p>
              <a href="../page layanan detail ui_ux/layanan detail ui_ux.tsx" className="btn-detail btn-purple">
                <span>Lihat Detail</span> <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            {/* Card 2: Website & Aplikasi */}
            <div className="category-card">
              <div className="card-icon blue">
                <img src="../img/website.png" alt="Website icon" />
              </div>
              <h3>Website & Aplikasi</h3>
              <p>Website responsif dan aplikasi mobile modern</p>
              <a href="../page detail layanan web&apk/layanan detail web&apk.tsx" className="btn-detail btn-blue">
                <span>Lihat Detail</span> <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            {/* Card 3: Logo Design */}
            <div className="category-card">
              <div className="card-icon orange">
                <img src="../img/logo desain.png" alt="Logo Desain icon" />
              </div>
              <h3>Logo Design</h3>
              <p>Logo profesional untuk identitas brand Anda</p>
              <a href="../Page Detail Layanan Logo Design/Layanan Logo Design.tsx" className="btn-detail btn-orange">
                <span>Lihat Detail</span> <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            {/* Card 4: Social Media */}
            <div className="category-card">
              <div className="card-icon pink">
                <img src="../img/sosial managemen.png" alt="Sosial managemen icon" />
              </div>
              <h3>Social Media</h3>
              <p>Kelola media sosial dengan strategi tepat</p>
              <a href="../Page Detail layanan Social Media/Layanan Social Media.tsx" className="btn-detail btn-pink">
                <span>Lihat Detail</span> <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            {/* Card 5: Custom Merchandise */}
            <div className="category-card">
              <div className="card-icon green">
                <img src="../img/custom mercandhise.png" alt="Custom Mercandhise icon" />
              </div>
              <h3>Merchandise</h3>
              <p>Merchandise berkualitas untuk promosi brand</p>
              <a href="../Page Detail Layanan Custom Merchandise/Layanan Custom Merchandise.tsx" className="btn-detail btn-green">
                <span>Lihat Detail</span> <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Digital Creative Services */}
      <section className="digital-creative bg-light services-section">
        <div className="container">
          <h2>Digital Creative Services</h2>
          <p className="subtitle">Layanan digital lengkap untuk mengembangkan presence online bisnis Anda</p>
          <div className="service-grid">
            {/* UI/UX Design */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src="../img/ui-ux.png" alt="UI/UX Design" /></div>
              <div className="card-content-v2">
                <h3>UI/UX Design</h3>
                <p className="description">Desain interface yang user-friendly dan menarik untuk website dan aplikasi mobile.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> User Research & Analysis</li>
                  <li><i className="fas fa-check-circle"></i> Wireframing & Prototyping</li>
                  <li><i className="fas fa-check-circle"></i> Visual Design System</li>
                  <li><i className="fas fa-check-circle"></i> Usability Testing</li>
                  <li><i className="fas fa-check-circle"></i> Responsive Design</li>
                </ul>
                <div className="info-row">
                  <span>Harga:</span>
                  <span className="price">Mulai dari Rp 2.500.000</span>
                </div>
                <div className="info-row">
                  <span>Durasi:</span>
                  <span>2-4 minggu</span>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-pesan btn-grad-purple"><i className="fas fa-arrow-right"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Website Development */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src="../img/web.png" alt="Website Development" /></div>
              <div className="card-content-v2">
                <h3>Website Development</h3>
                <p className="description">Website responsif dan modern dengan teknologi terdepan untuk bisnis Anda.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> Responsive Web Design</li>
                  <li><i className="fas fa-check-circle"></i> CMS Integration</li>
                  <li><i className="fas fa-check-circle"></i> E-commerce Solutions</li>
                  <li><i className="fas fa-check-circle"></i> SEO Optimization</li>
                  <li><i className="fas fa-check-circle"></i> Performance Optimization</li>
                </ul>
                <div className="info-row">
                  <span>Harga:</span>
                  <span className="price">Mulai dari Rp 3.500.000</span>
                </div>
                <div className="info-row">
                  <span>Durasi:</span>
                  <span>3-6 minggu</span>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-pesan btn-grad-blue"><i className="fas fa-arrow-right"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Mobile App Development */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src="../img/Mobile.png" alt="Mobile App Development" /></div>
              <div className="card-content-v2">
                <h3>Mobile App Development</h3>
                <p className="description">Aplikasi mobile iOS dan Android dengan performa terbaik dan desain yang menarik.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> Native iOS & Android</li>
                  <li><i className="fas fa-check-circle"></i> Cross-platform Development</li>
                  <li><i className="fas fa-check-circle"></i> API Integration</li>
                  <li><i className="fas fa-check-circle"></i> Push Notifications</li>
                  <li><i className="fas fa-check-circle"></i> App Store Deployment</li>
                </ul>
                <div className="info-row">
                  <span>Harga:</span>
                  <span className="price">Mulai dari Rp 15.000.000</span>
                </div>
                <div className="info-row">
                  <span>Durasi:</span>
                  <span>6-12 minggu</span>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-pesan btn-grad-green"><i className="fas fa-arrow-right"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Logo Design */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src="../img/Logo Design.png" alt="Logo Design" /></div>
              <div className="card-content-v2">
                <h3>Logo Design</h3>
                <p className="description">Logo profesional yang mencerminkan identitas dan nilai brand Anda.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> Konsep Logo Unik</li>
                  <li><i className="fas fa-check-circle"></i> Multiple Variaties</li>
                  <li><i className="fas fa-check-circle"></i> Brand Guidelines</li>
                  <li><i className="fas fa-check-circle"></i> File Format Lengkap</li>
                  <li><i className="fas fa-check-circle"></i> Unlimited Revisions</li>
                </ul>
                <div className="info-row">
                  <span>Harga:</span>
                  <span className="price">Mulai dari Rp 500.000</span>
                </div>
                <div className="info-row">
                  <span>Durasi:</span>
                  <span>1-2 minggu</span>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-pesan btn-grad-orange"><i className="fas fa-arrow-right"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Brand Identity */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src="../img/brand identity.png" alt="Brand Identity" /></div>
              <div className="card-content-v2">
                <h3>Brand Identity</h3>
                <p className="description">Paket lengkap identitas visual untuk membangun brand yang kuat dan memorable.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> Logo Design</li>
                  <li><i className="fas fa-check-circle"></i> Color Palette</li>
                  <li><i className="fas fa-check-circle"></i> Typography System</li>
                  <li><i className="fas fa-check-circle"></i> Business Card Design</li>
                  <li><i className="fas fa-check-circle"></i> Letterhead & Stationery</li>
                </ul>
                <div className="info-row">
                  <span>Harga:</span>
                  <span className="price">Mulai dari Rp 2.000.000</span>
                </div>
                <div className="info-row">
                  <span>Durasi:</span>
                  <span>2-3 minggu</span>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-pesan btn-grad-purple"><i className="fas fa-arrow-right"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Social Media Management */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src="../img/Social Media Management.png" alt="Social Media Management" /></div>
              <div className="card-content-v2">
                <h3>Social Media Management</h3>
                <p className="description">Kelola dan kembangkan media sosial bisnis Anda dengan strategi yang tepat.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> Content Planning & Strategy</li>
                  <li><i className="fas fa-check-circle"></i> Daily Posting Schedule</li>
                  <li><i className="fas fa-check-circle"></i> Community Management</li>
                  <li><i className="fas fa-check-circle"></i> Analytics & Reporting</li>
                  <li><i className="fas fa-check-circle"></i> Paid Ads Management</li>
                </ul>
                <div className="info-row">
                  <span>Harga:</span>
                  <span className="price">Mulai dari Rp 1.500.000/bulan</span>
                </div>
                <div className="info-row">
                  <span>Durasi:</span>
                  <span>Ongoing</span>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-pesan btn-grad-pink"><i className="fas fa-arrow-right"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src="../img/digital marketing.png" alt="Digital Marketing" /></div>
              <div className="card-content-v2">
                <h3>Digital Marketing</h3>
                <p className="description">Strategi pemasaran digital yang komprehensif untuk meningkatkan brand awareness.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> SEO & SEM Strategy</li>
                  <li><i className="fas fa-check-circle"></i> Social Media Advertising</li>
                  <li><i className="fas fa-check-circle"></i> Email Marketing</li>
                  <li><i className="fas fa-check-circle"></i> Content Marketing</li>
                  <li><i className="fas fa-check-circle"></i> Analytics & Optimization</li>
                </ul>
                <div className="info-row">
                  <span>Harga:</span>
                  <span className="price">Mulai dari Rp 2.000.000/bulan</span>
                </div>
                <div className="info-row">
                  <span>Durasi:</span>
                  <span>Ongoing</span>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-pesan btn-grad-purple"><i className="fas fa-arrow-right"></i> Pesan Sekarang</a>
              </div>
            </div>

            {/* Social Media Feed Design */}
            <div className="service-card-v2">
              <div className="card-image-container"><img src="../img/Social Media Feed Design.png" alt="Social Media Feed Design" /></div>
              <div className="card-content-v2">
                <h3>Social Media Feed Design</h3>
                <p className="description">Desain konten visual yang menarik dan konsisten untuk feed media sosial.</p>
                <h4>Fitur Utama:</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> Feed Template Design</li>
                  <li><i className="fas fa-check-circle"></i> Story Templates</li>
                  <li><i className="fas fa-check-circle"></i> Highlight Covers</li>
                  <li><i className="fas fa-check-circle"></i> Post Carousel Design</li>
                  <li><i className="fas fa-check-circle"></i> Brand Consistency</li>
                </ul>
                <div className="info-row">
                  <span>Harga:</span>
                  <span className="price">Mulai dari Rp 800.000/bulan</span>
                </div>
                <div className="info-row">
                  <span>Durasi:</span>
                  <span>Ongoing</span>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-pesan btn-grad-blue"><i className="fas fa-arrow-right"></i> Pesan Sekarang</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Drinkware Collection */}
      <section className="products-section bg-light custom-drinkware">
        <div className="container">
          <h2 className="section-title">Custom Drinkware Collection</h2>
          <p className="section-subtitle">Koleksi lengkap drinkware custom berkualitas tinggi untuk promosi brand Anda</p>
          <div className="products-grid">
            {/* Product Card 1: Botol Minum */}
            <div className="product-card">
              <div className="product-image">
                <img src="../img/Botol Minum & Tumbler Custom.png" alt="Botol Minum & Tumbler Custom" />
              </div>
              <div className="product-content">
                <h3>Botol Minum & Tumbler Custom</h3>
                <p className="product-description">Botol minum dan tumbler berkualitas tinggi dengan custom design sesuai brand Anda.</p>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check-circle"></i> Material Stainless Steel/Plastic</li>
                  <li><i className="fas fa-check-circle"></i> Berbagai Ukuran (350ml-1000ml)</li>
                  <li><i className="fas fa-check-circle"></i> Custom Logo & Design</li>
                  <li><i className="fas fa-check-circle"></i> Packaging Eksklusif</li>
                  <li><i className="fas fa-check-circle"></i> Minimum Order 50 pcs</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Harga:</span>
                    <span className="price">Mulai dari Rp 25.000/pcs</span>
                  </div>
                  <div className="info-item">
                    <span>Produksi:</span>
                    <span>7-14 hari</span>
                  </div>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-product btn-grad-blue">
                  <i className="fas fa-arrow-right"></i> Order Sekarang
                </a>
              </div>
            </div>

            {/* Product Card 2: Mug Custom */}
            <div className="product-card">
              <div className="product-image">
                <img src="../img/mug.png" alt="Mug Custom" />
              </div>
              <div className="product-content">
                <h3>Mug Custom</h3>
                <p className="product-description">Mug ceramic dan stainless berkualitas premium dengan printing yang tahan lama.</p>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check-circle"></i> Ceramic & Stainless Options</li>
                  <li><i className="fas fa-check-circle"></i> Full Color Printing</li>
                  <li><i className="fas fa-check-circle"></i> Heat-resistant Design</li>
                  <li><i className="fas fa-check-circle"></i> Custom Packaging</li>
                  <li><i className="fas fa-check-circle"></i> Minimum Order 24 pcs</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Harga:</span>
                    <span className="price">Mulai dari Rp 20.000/pcs</span>
                  </div>
                  <div className="info-item">
                    <span>Produksi:</span>
                    <span>7-10 hari</span>
                  </div>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-product btn-grad-orange">
                  <i className="fas fa-arrow-right"></i> Order Sekarang
                </a>
              </div>
            </div>

            {/* Product Card 3: Gelas Kaca */}
            <div className="product-card">
              <div className="product-image">
                <img src="../img/gelas kaca.png" alt="Gelas Kaca Premium" />
              </div>
              <div className="product-content">
                <h3>Gelas Kaca Premium</h3>
                <p className="product-description">Gelas kaca berkualitas tinggi untuk kebutuhan corporate dan event special.</p>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check-circle"></i> Material Kaca Berkualitas</li>
                  <li><i className="fas fa-check-circle"></i> Berbagai Model & Ukuran</li>
                  <li><i className="fas fa-check-circle"></i> Etching & Printing Options</li>
                  <li><i className="fas fa-check-circle"></i> Elegant Packaging</li>
                  <li><i className="fas fa-check-circle"></i> Minimum Order 50 pcs</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Harga:</span>
                    <span className="price">Mulai dari Rp 15.000/pcs</span>
                  </div>
                  <div className="info-item">
                    <span>Produksi:</span>
                    <span>10-14 hari</span>
                  </div>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-product btn-grad-purple">
                  <i className="fas fa-arrow-right"></i> Order Sekarang
                </a>
              </div>
            </div>

            {/* Product Card 4: Drink Jar */}
            <div className="product-card">
              <div className="product-image">
                <img src="../img/drink jar.png" alt="Drink Jar & Gelas Cup" />
              </div>
              <div className="product-content">
                <h3>Drink Jar & Gelas Cup</h3>
                <p className="product-description">Drink jar unik dan gelas cup branded untuk promosi yang memorable.</p>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check-circle"></i> Mason Jar Style</li>
                  <li><i className="fas fa-check-circle"></i> Custom Cup Design</li>
                  <li><i className="fas fa-check-circle"></i> Food Grade Material</li>
                  <li><i className="fas fa-check-circle"></i> Creative Packaging</li>
                  <li><i className="fas fa-check-circle"></i> Minimum Order 50 pcs</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Harga:</span>
                    <span className="price">Mulai dari Rp 18.000/pcs</span>
                  </div>
                  <div className="info-item">
                    <span>Produksi:</span>
                    <span>7-12 hari</span>
                  </div>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-product btn-grad-green">
                  <i className="fas fa-arrow-right"></i> Order Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Bags Collection */}
      <section className="custom-bags bg-light services-section custom-bags-section">
        <div className="container">
          <h2 className="section-title">Custom Bags Collection</h2>
          <p className="section-subtitle">Berbagai jenis tas custom untuk kebutuhan promosi dan corporate branding</p>
          <div className="products-grid">
            {/* Product Card 1: Totebag */}
            <div className="product-card">
              <div className="product-image">
                <img src="../img/tas canvas.png" alt="Totebag Canvas Premium" />
              </div>
              <div className="product-content">
                <h3>Totebag Canvas Premium</h3>
                <p className="product-description">Totebag canvas berkualitas tinggi dengan custom design yang tahan lama.</p>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check-circle"></i> Canvas Material Premium</li>
                  <li><i className="fas fa-check-circle"></i> Custom Size & Design</li>
                  <li><i className="fas fa-check-circle"></i> Sablon/Bordir Options</li>
                  <li><i className="fas fa-check-circle"></i> Eco-friendly Material</li>
                  <li><i className="fas fa-check-circle"></i> Minimum Order 50 pcs</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Harga:</span>
                    <span className="price">Mulai dari Rp 15.000/pcs</span>
                  </div>
                  <div className="info-item">
                    <span>Produksi:</span>
                    <span>7-14 hari</span>
                  </div>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-product btn-grad-pink">
                  <i className="fas fa-arrow-right"></i> Order Sekarang
                </a>
              </div>
            </div>

            {/* Product Card 2: Spunbond Bag */}
            <div className="product-card">
              <div className="product-image">
                <img src="../img/Tas Furing Spunbond.png" alt="Tas Furing Spunbond" />
              </div>
              <div className="product-content">
                <h3>Tas Furing Spunbond</h3>
                <p className="product-description">Tas furing spunbond yang praktis dan ekonomis untuk promosi brand.</p>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check-circle"></i> Material Spunbond Berkualitas</li>
                  <li><i className="fas fa-check-circle"></i> Berbagai Warna Tersedia</li>
                  <li><i className="fas fa-check-circle"></i> Custom Print 1-4 Warna</li>
                  <li><i className="fas fa-check-circle"></i> Lightweight & Durable</li>
                  <li><i className="fas fa-check-circle"></i> Minimum Order 100 pcs</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Harga:</span>
                    <span className="price">Mulai dari Rp 8.000/pcs</span>
                  </div>
                  <div className="info-item">
                    <span>Produksi:</span>
                    <span>5-10 hari</span>
                  </div>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-product btn-grad-blue">
                  <i className="fas fa-arrow-right"></i> Order Sekarang
                </a>
              </div>
            </div>

            {/* Product Card 3: Paper & Plastic Bag */}
            <div className="product-card">
              <div className="product-image">
                <img src="../img/Tas Kertas & Plastik Custom.png" alt="Tas Kertas & Plastik Custom" />
              </div>
              <div className="product-content">
                <h3>Tas Kertas & Plastik Custom</h3>
                <p className="product-description">Tas kertas dan plastik branded untuk packaging dan promosi yang efektif.</p>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check-circle"></i> Paper & Plastic Options</li>
                  <li><i className="fas fa-check-circle"></i> Custom Size & Handle</li>
                  <li><i className="fas fa-check-circle"></i> Full Color Printing</li>
                  <li><i className="fas fa-check-circle"></i> Lamination Available</li>
                  <li><i className="fas fa-check-circle"></i> Minimum Order 500 pcs</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Harga:</span>
                    <span className="price">Mulai dari Rp 3.000/pcs</span>
                  </div>
                  <div className="info-item">
                    <span>Produksi:</span>
                    <span>7-14 hari</span>
                  </div>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-product btn-grad-green">
                  <i className="fas fa-arrow-right"></i> Order Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Gifts & Tech */}
      <section className="products-section bg-light corporate-gifts">
        <div className="container">
          <h2 className="section-title">Corporate Gifts & Tech</h2>
          <p className="section-subtitle">Merchandise teknologi dan corporate gifts premium untuk kebutuhan bisnis</p>
          <div className="products-grid">
            {/* Product Card 1: Powerbank */}
            <div className="product-card">
              <div className="product-image">
                <img src="../img/Powerbank Custom.png" alt="Powerbank Custom" />
              </div>
              <div className="product-content">
                <h3>Powerbank Custom</h3>
                <p className="product-description">Powerbank berkualitas tinggi dengan custom design untuk corporate gifts.</p>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check-circle"></i> Kapasitas 5000-20000 mAh</li>
                  <li><i className="fas fa-check-circle"></i> Fast Charging Support</li>
                  <li><i className="fas fa-check-circle"></i> Custom Logo Engraving</li>
                  <li><i className="fas fa-check-circle"></i> Premium Packaging</li>
                  <li><i className="fas fa-check-circle"></i> Minimum Order 25 pcs</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Harga:</span>
                    <span className="price">Mulai dari Rp 75.000/pcs</span>
                  </div>
                  <div className="info-item">
                    <span>Produksi:</span>
                    <span>10-21 hari</span>
                  </div>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-product btn-grad-green">
                  <i className="fas fa-arrow-right"></i> Order Sekarang
                </a>
              </div>
            </div>

            {/* Product Card 2: Flashdisk */}
            <div className="product-card">
              <div className="product-image">
                <img src="../img/placeholder.png" alt="Flashdisk Custom" />
              </div>
              <div className="product-content">
                <h3>Flashdisk Custom</h3>
                <p className="product-description">Flashdisk branded dengan berbagai kapasitas dan model unik.</p>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check-circle"></i> Kapasitas 4GB-128GB</li>
                  <li><i className="fas fa-check-circle"></i> Custom Shape & Design</li>
                  <li><i className="fas fa-check-circle"></i> Logo Engraving/Printing</li>
                  <li><i className="fas fa-check-circle"></i> Data Preload Available</li>
                  <li><i className="fas fa-check-circle"></i> Minimum Order 25 pcs</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Harga:</span>
                    <span className="price">Mulai dari Rp 35.000/pcs</span>
                  </div>
                  <div className="info-item">
                    <span>Produksi:</span>
                    <span>7-14 hari</span>
                  </div>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-product btn-grad-pink">
                  <i className="fas fa-arrow-right"></i> Order Sekarang
                </a>
              </div>
            </div>

            {/* Product Card 3: Seminar Kit */}
            <div className="product-card">
              <div className="product-image">
                <img src="../img/Paket Seminar Kit.png" alt="Paket Seminar Kit" />
              </div>
              <div className="product-content">
                <h3>Paket Seminar Kit</h3>
                <p className="product-description">Paket lengkap seminar kit dengan custom branding untuk event corporate.</p>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check-circle"></i> Tas Seminar + Isi Lengkap</li>
                  <li><i className="fas fa-check-circle"></i> Notebook & Pulpen Custom</li>
                  <li><i className="fas fa-check-circle"></i> ID Card Holder</li>
                  <li><i className="fas fa-check-circle"></i> Custom Packaging</li>
                  <li><i className="fas fa-check-circle"></i> Minimum Order 50 set</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Harga:</span>
                    <span className="price">Mulai dari Rp 45.000/set</span>
                  </div>
                  <div className="info-item">
                    <span>Produksi:</span>
                    <span>10-21 hari</span>
                  </div>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-product btn-grad-blue">
                  <i className="fas fa-arrow-right"></i> Order Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Merchandise */}
      <section className="products-section bg-light">
        <div className="container">
          <h2 className="section-title">Lifestyle Merchandise</h2>
          <p className="section-subtitle">Merchandise lifestyle untuk branding dan promosi yang efektif sehari-hari</p>
          <div className="products-grid">
            {/* Product Card 1: Payung */}
            <div className="product-card">
              <div className="product-image">
                <img src="../img/Payung Custom Premium.png" alt="Payung Custom Premium" />
              </div>
              <div className="product-content">
                <h3>Payung Custom Premium</h3>
                <p className="product-description">Payung berkualitas tinggi dengan custom design untuk promosi yang efektif.</p>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check-circle"></i> Material Berkualitas Tinggi</li>
                  <li><i className="fas fa-check-circle"></i> Tahan Angin & Air</li>
                  <li><i className="fas fa-check-circle"></i> Custom Print Full Color</li>
                  <li><i className="fas fa-check-circle"></i> Berbagai Ukuran</li>
                  <li><i className="fas fa-check-circle"></i> Minimum Order 50 pcs</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Harga:</span>
                    <span className="price">Mulai dari Rp 35.000/pcs</span>
                  </div>
                  <div className="info-item">
                    <span>Produksi:</span>
                    <span>10-21 hari</span>
                  </div>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-product btn-grad-blue">
                  <i className="fas fa-arrow-right"></i> Order Sekarang
                </a>
              </div>
            </div>

            {/* Product Card 2: Jam Dinding */}
            <div className="product-card">
              <div className="product-image">
                <img src="../img/Jam Dinding Custom.png" alt="Jam Dinding Custom" />
              </div>
              <div className="product-content">
                <h3>Jam Dinding Custom</h3>
                <p className="product-description">Jam dinding custom dengan design unik untuk dekorasi dan promosi.</p>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check-circle"></i> Berbagai Bentuk & Ukuran</li>
                  <li><i className="fas fa-check-circle"></i> Mesin Jam Berkualitas</li>
                  <li><i className="fas fa-check-circle"></i> Custom Design & Logo</li>
                  <li><i className="fas fa-check-circle"></i> Silent Movement</li>
                  <li><i className="fas fa-check-circle"></i> Minimum Order 25 pcs</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Harga:</span>
                    <span className="price">Mulai dari Rp 45.000/pcs</span>
                  </div>
                  <div className="info-item">
                    <span>Produksi:</span>
                    <span>14-21 hari</span>
                  </div>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-product btn-grad-orange">
                  <i className="fas fa-arrow-right"></i> Order Sekarang
                </a>
              </div>
            </div>

            {/* Product Card 3: Pulpen & Pin */}
            <div className="product-card">
              <div className="product-image">
                <img src="../img/Pulpen & Pin Custom.png" alt="Pulpen & Pin Custom" />
              </div>
              <div className="product-content">
                <h3>Pulpen & Pin Custom</h3>
                <p className="product-description">Pulpen dan pin branded untuk promosi sehari-hari yang efektif.</p>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check-circle"></i> Berbagai Model Pulpen</li>
                  <li><i className="fas fa-check-circle"></i> Pin Enamel/Metal</li>
                  <li><i className="fas fa-check-circle"></i> Custom Logo & Warna</li>
                  <li><i className="fas fa-check-circle"></i> Packaging Menarik</li>
                  <li><i className="fas fa-check-circle"></i> Minimum Order 100 pcs</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Harga:</span>
                    <span className="price">Mulai dari Rp 5.000/pcs</span>
                  </div>
                  <div className="info-item">
                    <span>Produksi:</span>
                    <span>7-14 hari</span>
                  </div>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-product btn-grad-pink">
                  <i className="fas fa-arrow-right"></i> Order Sekarang
                </a>
              </div>
            </div>

            {/* Product Card 4: Asbak & Aksesoris */}
            <div className="product-card">
              <div className="product-image">
                <img src="../img/Asbak & Aksesoris.png" alt="Asbak & Aksesoris" />
              </div>
              <div className="product-content">
                <h3>Asbak & Aksesoris</h3>
                <p className="product-description">Asbak custom dan berbagai aksesoris branded lainnya.</p>
                <h4>Spesifikasi:</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check-circle"></i> Material Berkualitas</li>
                  <li><i className="fas fa-check-circle"></i> Custom Shape & Design</li>
                  <li><i className="fas fa-check-circle"></i> Logo Engraving</li>
                  <li><i className="fas fa-check-circle"></i> Packaging Eksklusif</li>
                  <li><i className="fas fa-check-circle"></i> Minimum Order 50 pcs</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>Harga:</span>
                    <span className="price">Mulai dari Rp 25.000/pcs</span>
                  </div>
                  <div className="info-item">
                    <span>Produksi:</span>
                    <span>10-14 hari</span>
                  </div>
                </div>
                <a href="../page-contact/page-contact.tsx" className="btn-product btn-grad-slate">
                  <i className="fas fa-arrow-right"></i> Order Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proses Kerja Kami */}
      <section className="work-process-section">
        <div className="container">
          <h2 className="section-title">Proses Kerja Kami</h2>
          <p className="section-subtitle">Metodologi yang terbukti untuk hasil yang optimal</p>
          <div className="work-process-timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-comments"></i>
                <span className="step-number">01</span>
              </div>
              <h3 className="timeline-title">Konsultasi</h3>
              <p className="timeline-description">Diskusi kebutuhan dan tujuan proyek Anda</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-clock"></i>
                <span className="step-number">02</span>
              </div>
              <h3 className="timeline-title">Perencanaan</h3>
              <p className="timeline-description">Membuat strategi dan timeline yang detail</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-code"></i>
                <span className="step-number">03</span>
              </div>
              <h3 className="timeline-title">Eksekusi</h3>
              <p className="timeline-description">Mengerjakan proyek sesuai dengan rencana</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-check-circle"></i>
                <span className="step-number">04</span>
              </div>
              <h3 className="timeline-title">Review & Revisi</h3>
              <p className="timeline-description">Review hasil dan melakukan penyesuaian</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-award"></i>
                <span className="step-number">05</span>
              </div>
              <h3 className="timeline-title">Delivery</h3>
              <p className="timeline-description">Serah terima hasil final dan dokumentasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Pertanyaan yang sering diajukan tentang layanan kami</p>
          <div className="faq-container">
            {[
              {
                question: "Berapa minimum order untuk merchandise?",
                answer: "Minimum order bervariasi per produk: Totebag 50pcs, Mug 24pcs, Powerbank 25pcs, Pulpen 100pcs. Untuk digital services tidak ada minimum order."
              },
              {
                question: "Berapa lama waktu produksi merchandise?",
                answer: "Waktu produksi merchandise 7-21 hari tergantung jenis produk dan quantity. Digital services 1-12 minggu tergantung kompleksitas."
              },
              {
                question: "Apakah ada garansi untuk layanan yang diberikan?",
                answer: "Ya, kami memberikan garansi 30 hari untuk bug fixing digital services dan garansi kualitas produk merchandise."
              },
              {
                question: "Bagaimana sistem pembayaran yang tersedia?",
                answer: "Pembayaran bertahap: 50% DP, 50% pelunasan. Untuk merchandise bisa full payment. Pembayaran via transfer bank atau e-wallet."
              },
              {
                question: "Apakah bisa custom design sepenuhnya?",
                answer: "Tentu! Kami menyediakan custom design sepenuhnya baik untuk digital services maupun merchandise sesuai kebutuhan brand Anda."
              }
            ].map((faq, index) => (
              <div className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={index}>
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  <i className="fas fa-chevron-down"></i>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Siap Memulai Project Anda?</h2>
          <p>Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik</p>
          <div className="cta-buttons">
            <a href="https://wa.me/6281804376001" className="btn-cta primary" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> Chat WhatsApp
            </a>
            <a href="mailto:titikvisualjogja@gmail.com" className="btn-cta secondary">
              <i className="far fa-envelope"></i> Kirim Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img className="footer-logo" src="../img/img.png" alt="Titik Visual" />
              <p>Digital creative studio yang mengutamakan kualitas dan inovasi dalam setiap karya.</p>
            </div>

            <div className="footer-col">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-list">
                <li><a href="/about">About Us</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/layanan">Services</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-list">
                <li><a href="/layanan/ui-ux">UI/UX Design</a></li>
                <li><a href="/layanan/web-development">Web Development</a></li>
                <li><a href="/layanan/mobile-app">Mobile App</a></li>
                <li><a href="/layanan/branding">Branding</a></li>
                <li><a href="/layanan/digital-marketing">Digital Marketing</a></li>
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
            <p>© 2024 Titik Visual. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
