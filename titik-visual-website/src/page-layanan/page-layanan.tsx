import React, { useState } from 'react';
import './style.css';
import { useContent } from '../content/ContentContext';
const getImg = (name: string) => {
  if (!name) return '';
  if (name.startsWith('http')) return name;
  try {
    return require(`../img/${name}`);
  } catch {
    return '';
  }
};

function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const content = useContent();

  const DEFAULT_MAIN_SERVICES = [
    { title: "UI/UX Design", desc: "Desain interface yang user-friendly dan menarik", icon: "ui-ux desain.png", color: "purple", cta_label: "Lihat Detail", cta_href: "#detail-services" },
    { title: "Website Development", desc: "Website responsif dan performa tinggi", icon: "web.png", color: "blue", cta_label: "Lihat Detail", cta_href: "#detail-services" },
    { title: "Logo Design", desc: "Logo profesional untuk identitas brand", icon: "logo desain.png", color: "orange", cta_label: "Lihat Detail", cta_href: "#detail-services" },
    { title: "Social Media", desc: "Pengelolaan konten dan engagement", icon: "sosial managemen.png", color: "pink", cta_label: "Lihat Detail", cta_href: "#detail-services" },
    { title: "Custom Merchandise", desc: "Merchandise unik untuk promosi", icon: "custom mercandhise.png", color: "green", cta_label: "Lihat Detail", cta_href: "#products" }
  ];

  const DEFAULT_DETAIL_SERVICES = [
    { title: "UI/UX Design", desc: "Desain antarmuka aplikasi mobile dan website yang modern, intuitif, dan user-friendly.", image: "portfolio_UI_UX.png", accent: "purple", features: ["User Research", "Wireframing", "Prototyping", "High Fidelity Design"], price: "Mulai Rp 2.500.000", duration: "3-5 Hari" },
    { title: "Website Development", desc: "Jasa pembuatan website company profile, toko online, hingga sistem informasi custom.", image: "website.png", accent: "blue", features: ["Responsive Design", "SEO Friendly", "CMS Integration", "Fast Loading"], price: "Mulai Rp 3.500.000", duration: "7-14 Hari" },
    { title: "Mobile App Development", desc: "Pengembangan aplikasi Android dan iOS dengan performa tinggi dan fitur lengkap.", image: "Mobile.png", accent: "green", features: ["Android & iOS", "API Integration", "Push Notification", "Play Store/App Store"], price: "Mulai Rp 15.000.000", duration: "1-2 Bulan" },
    { title: "Logo Design", desc: "Desain logo profesional yang merepresentasikan visi dan misi bisnis Anda secara visual.", image: "Logo Design.png", accent: "orange", features: ["3 Konsep Logo", "Revisi Unlimited", "Master File (AI/EPS)", "Filosofi Logo"], price: "Mulai Rp 250.000", duration: "2-3 Hari" },
    { title: "Branding & Identity", desc: "Membangun identitas visual brand yang kuat dan konsisten di semua platform.", image: "brand identity.png", accent: "purple", features: ["Logo Usage", "Color Palette", "Typography", "Brand Guidelines"], price: "Mulai Rp 1.500.000", duration: "3-5 Hari" },
    { title: "Social Media Management", desc: "Pengelolaan akun media sosial untuk meningkatkan awareness dan engagement audiens.", image: "Social Media Management.png", accent: "pink", features: ["Content Planning", "Copywriting", "Design Feed/Story", "Monthly Report"], price: "Mulai Rp 500.000/bln", duration: "Monthly" },
    { title: "Digital Marketing", desc: "Strategi pemasaran digital terpadu untuk menjangkau target pasar yang lebih luas.", image: "digital marketing.png", accent: "orange", features: ["FB/IG Ads", "Google Ads", "SEO Optimization", "Analytics"], price: "Hubungi Kami", duration: "Ongoing" },
    { title: "Social Media Feed Design", desc: "Jasa desain konten feed dan story media sosial yang estetik dan menarik perhatian.", image: "Social Media Feed Design.png", accent: "blue", features: ["Custom Design", "Source File", "Revisi Minor", "Fast Delivery"], price: "Mulai Rp 50.000/post", duration: "Ongoing" }
  ];

  const DEFAULT_DRINKWARE = [
    { title: "Botol Minum & Tumbler Custom", image: "Botol Minum & Tumbler Custom.png", accent: "blue", features: ["Bahan Stainless/Plastik", "Cetak UV/Sablon/Laser", "Tahan Panas/Dingin", "Banyak Pilihan Warna"], price: "Mulai Rp 35.000", duration: "3-7 Hari" },
    { title: "Mug Custom", image: "mug.png", accent: "orange", features: ["Bahan Keramik Premium", "Cetak Full Color", "Tahan Lama", "Box Packaging"], price: "Mulai Rp 25.000", duration: "2-5 Hari" },
    { title: "Gelas Kaca Premium", image: "gelas kaca.png", accent: "blue", features: ["Kaca Tebal", "Sablon Decal", "Desain Elegan", "Cocok untuk Cafe"], price: "Mulai Rp 15.000", duration: "3-7 Hari" },
    { title: "Drink Jar & Gelas Cup", image: "drink jar.png", accent: "green", features: ["Unik & Kekinian", "Termasuk Sedotan", "Sticker/Sablon", "Volume Besar"], price: "Mulai Rp 18.000", duration: "3-7 Hari" }
  ];

  const DEFAULT_BAGS = [
    { title: "Tas Furing Spunbond", image: "Tas Furing Spunbond.png", accent: "pink", features: ["Ramah Lingkungan", "Kuat & Tahan Lama", "Sablon 1-3 Warna", "Harga Ekonomis"], price: "Mulai Rp 3.500", duration: "3-7 Hari" },
    { title: "Tas Belanja / Shopping Bag", image: "Tas Kertas & Plastik Custom.png", accent: "blue", features: ["Bahan Kanvas/Blacu", "Full Print/Sablon", "Jahitan Rapi", "Ukuran Custom"], price: "Mulai Rp 15.000", duration: "5-10 Hari" },
    { title: "Tas Seminar / Goodie Bag", image: "tas canvas.png", accent: "green", features: ["Bahan D300/D600", "Ada Slot Laptop", "Bordir/Sablon", "Model Eksklusif"], price: "Mulai Rp 45.000", duration: "7-14 Hari" }
  ];

  const DEFAULT_CORPORATE = [
    { title: "Powerbank Custom", image: "Powerbank Custom.png", accent: "green", features: ["Kapasitas Real", "Cetak UV/Laser", "Garansi Resmi", "Desain Slim"], price: "Mulai Rp 85.000", duration: "5-7 Hari" },
    { title: "Flashdisk Custom", image: "placeholder.png", accent: "blue", features: ["Kapasitas 8-64GB", "Model Kartu/Kunci", "Cetak Full Color", "Chip Berkualitas"], price: "Mulai Rp 45.000", duration: "3-5 Hari" },
    { title: "Tumbler Digital LED", image: "Tumbler Sport.png", accent: "purple", features: ["Indikator Suhu", "Stainless SUS304", "Laser Engraving", "Tahan 12 Jam"], price: "Mulai Rp 55.000", duration: "3-7 Hari" }
  ];

  const DEFAULT_LIFESTYLE = [
    { title: "Payung Custom Premium", image: "Payung Custom Premium.png", accent: "blue", features: ["Rangka Kuat", "Sablon Logo", "Pilihan Warna", "Anti UV"], price: "Mulai Rp 45.000", duration: "7-10 Hari" },
    { title: "Jam Dinding Custom", image: "Jam Dinding Custom.png", accent: "orange", features: ["Mesin Quartz", "Diameter 30cm", "Cetak Muka Jam", "Frame Minimalis"], price: "Mulai Rp 65.000", duration: "3-5 Hari" },
    { title: "Pulpen & Pin Custom", image: "Pulpen & Pin Custom.png", accent: "pink", features: ["Pulpen Metal/Plastik", "Pin Peniti/Gantungan", "Cetak Logo", "Souvenir Murah"], price: "Mulai Rp 2.500", duration: "3-5 Hari" },
    { title: "Asbak & Aksesoris", image: "Asbak & Aksesoris.png", accent: "slate", features: ["Bahan Keramik/Kaca", "Cetak Decal", "Tahan Panas", "Desain Custom"], price: "Mulai Rp 20.000", duration: "5-7 Hari" }
  ];

  const DEFAULT_PROCESS = [
    { title: "Konsultasi", desc: "Diskusikan kebutuhan dan ide Anda dengan tim kami.", icon: "fa-comments" },
    { title: "Penawaran", desc: "Kami berikan penawaran harga dan spesifikasi terbaik.", icon: "fa-file-invoice-dollar" },
    { title: "Produksi", desc: "Proses pengerjaan desain atau produksi merchandise.", icon: "fa-cogs" },
    { title: "Review & Revisi", desc: "Review hasil kerja dan revisi jika diperlukan.", icon: "fa-clipboard-check" },
    { title: "Delivery", desc: "Pengiriman hasil akhir atau produk ke alamat Anda.", icon: "fa-shipping-fast" }
  ];

  const DEFAULT_FAQ = [
    { question: "Berapa lama estimasi pengerjaan website?", answer: "Estimasi pengerjaan website bervariasi tergantung kompleksitas, rata-rata 7-14 hari kerja untuk company profile standar." },
    { question: "Apakah ada minimum order untuk merchandise?", answer: "Ya, setiap produk memiliki minimum order yang berbeda. Silakan hubungi admin untuk info detail per produk." },
    { question: "Apakah file desain mentahan akan diberikan?", answer: "Ya, untuk layanan desain logo dan branding, kami akan memberikan file master (AI/EPS/PDF) setelah pelunasan." },
    { question: "Bagaimana sistem pembayarannya?", answer: "Sistem pembayaran adalah DP 50% di awal dan pelunasan 50% setelah pekerjaan selesai atau sebelum pengiriman barang." },
    { question: "Apakah bisa kirim ke luar kota?", answer: "Tentu! Kami melayani pengiriman ke seluruh Indonesia menggunakan ekspedisi terpercaya (JNE, J&T, Cargo, dll)." }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="services-page">




      {/* Hero Section - Kategori Layanan */}
      <main className="hero-section" style={{ backgroundColor: '#FFFFFF', backgroundImage: 'none' }}>
        <div className="container">
          <h1>{content.get('page-layanan', 'hero_title', 'Kategori Layanan Utama')}</h1>
          <p className="subtitle">{content.get('page-layanan', 'hero_subtitle', 'Pilih layanan digital unggulan yang sesuai dengan kebutuhan bisnis Anda.')}</p>

          <div className="category-grid-main">
            {(content.get('page-layanan', 'main_services', DEFAULT_MAIN_SERVICES) || []).map((item: any, index: number) => (
              <div className="category-card" key={index}>
                <div className={`card-icon ${item.color || 'purple'}`}>
                  <img
                    src={getImg(item.icon)}
                    alt={item.icon_alt || item.title}
                    style={{ width: '64%', height: '64%', objectFit: 'contain', display: 'block', opacity: 1 }}
                  />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a
                  href={item.cta_href || '#'}
                  className={`btn-detail btn-${item.color || 'purple'}`}
                  style={{
                    background: item.color === 'purple' ? 'linear-gradient(90deg, #A855F7, #EC4899)' :
                               item.color === 'blue' ? 'linear-gradient(90deg, #3B82F6, #06B6D4)' :
                               item.color === 'orange' ? 'linear-gradient(90deg, #F97316, #EF4444)' :
                               item.color === 'pink' ? 'linear-gradient(90deg, #EC4899, #F43F5E)' :
                               item.color === 'teal' ? 'linear-gradient(90deg, #14B8A6, #0EA5E9)' :
                               'linear-gradient(90deg, #A855F7, #EC4899)',
                    color: '#FFFFFF',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}
                  aria-label={item.aria_label || `Lihat detail ${item.title}`}
                  tabIndex={0}
                >
                  <i className="fas fa-arrow-right" style={{ marginRight: 8 }}></i>
                  <span>{item.cta_label || 'Lihat Detail'}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Services List Section (Detail) */}
      <section className="services-list-section">
        <div className="container">
          <div className="section-header-v2">
            <h2>{content.get('page-layanan', 'detail_title', 'Digital Creative Services')}</h2>
            <p>{content.get('page-layanan', 'detail_subtitle', 'Layanan digital lengkap untuk mengembangkan presence online bisnis Anda')}</p>
          </div>

          <div className="services-grid-v2">
            {(content.get('page-layanan', 'detail_services', DEFAULT_DETAIL_SERVICES) || []).map((service: any, index: number) => (
              <div className={`service-card-v2 accent-${service.accent || 'purple'}`} key={index}>
                <div className="card-image-container">
                  <img src={getImg(service.image)} alt={service.img_alt || service.title} />
                </div>
                <div className="card-content-v2" style={{ textAlign: 'left' }}>
                  <h3>{service.title}</h3>
                  <p className="description">{service.desc}</p>
                  <h4>{service.feature_title || 'Fitur Utama:'}</h4>
                  <ul className="features-list">
                    {(service.features || []).map((feature: string, fIndex: number) => (
                      <li key={fIndex}><i className="fas fa-check-circle"></i> {feature}</li>
                    ))}
                  </ul>
                  <div className="info-row">
                    <span>{service.label_price || 'Harga:'}</span>
                    <span className="price">{service.price}</span>
                  </div>
                  <div className="info-row">
                    <span>{service.label_duration || 'Durasi:'}</span>
                    <span>{service.duration}</span>
                  </div>
                  <a
                    href={service.wa_link || 'https://wa.me/6281804376001'}
                    className={`btn-pesan btn-grad-${service.accent || 'purple'}`}
                  >
                    <i className="fas fa-shopping-cart"></i> {service.btn_order || 'Pesan Sekarang'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Drinkware Collection */}
      <section className="products-section custom-drinkware">
        <div className="container">
          <div className="section-header-v2">
            <h2 className="section-title">{content.get('page-layanan', 'sect_drinkware_title', 'Custom Drinkware Collection')}</h2>
            <p className="section-subtitle">{content.get('page-layanan', 'sect_drinkware_subtitle', 'Kami menyediakan drinkware custom dengan berbagai pilihan model dan warna.')}</p>
          </div>
          <div className="products-grid">
            {(content.get('page-layanan', 'drinkware_products', DEFAULT_DRINKWARE) || []).map((product: any, index: number) => (
              <div className={`product-card accent-${product.accent || 'blue'}`} key={index}>
                <div className="product-image">
                  <img src={getImg(product.image)} alt={product.img_alt || product.title} />
                </div>
                <div className="product-content">
                  <h3>{product.title}</h3>
                  <h4>{product.label_spec || 'Spesifikasi:'}</h4>
                  <ul className="product-features">
                    {(product.features || []).map((feature: string, fIndex: number) => (
                      <li key={fIndex}><i className="fas fa-check"></i> {feature}</li>
                    ))}
                  </ul>
                  <div className="product-info-grid">
                    <div className="info-item">
                      <span>{product.label_price || 'Harga:'}</span>
                      <span className="price">{product.price}</span>
                    </div>
                    <div className="info-item">
                      <span>{product.label_production || 'Produksi:'}</span>
                      <span className="duration">{product.duration}</span>
                    </div>
                  </div>
                  <a
                    href={product.link || 'https://wa.me/6281804376001'}
                    className="btn-product"
                    style={{
                      background: product.accent === 'blue' ? 'linear-gradient(90deg, #3B82F6, #06B6D4)' :
                                 product.accent === 'orange' ? 'linear-gradient(90deg, #F97316, #EF4444)' :
                                 product.accent === 'pink' ? 'linear-gradient(90deg, #A855F7, #EC4899)' :
                                 product.accent === 'green' ? 'linear-gradient(90deg, #16A34A, #059669)' :
                                 'linear-gradient(90deg, #3B82F6, #06B6D4)'
                    }}
                  >
                    <i className="fas fa-shopping-cart"></i> {product.btn_order || 'Pesan Sekarang'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Bags Collection */}
      <section className="products-section custom-bags-section">
        <div className="container">
          <div className="section-header-v2">
            <h2 className="section-title">{content.get('page-layanan', 'sect_bags_title', 'Custom Bags Collection')}</h2>
            <p className="section-subtitle">{content.get('page-layanan', 'sect_bags_subtitle', 'Berbagai jenis tas custom yang dapat disesuaikan dengan kebutuhan branding Anda.')}</p>
          </div>
          <div className="products-grid">
            {(content.get('page-layanan', 'bags_products') || []).map((product: any, index: number) => (
              <div className={`product-card accent-${product.accent || 'pink'}`} key={index}>
                <div className="product-image">
                  <img src={getImg(product.image)} alt={product.img_alt || product.title} />
                </div>
                <div className="product-content">
                  <h3>{product.title}</h3>
                  <h4>{product.label_spec || 'Spesifikasi:'}</h4>
                  <ul className="product-features">
                    {(product.features || []).map((feature: string, fIndex: number) => (
                      <li key={fIndex}><i className="fas fa-check"></i> {feature}</li>
                    ))}
                  </ul>
                  <div className="product-info-grid">
                    <div className="info-item">
                      <span>{product.label_price || 'Harga:'}</span>
                      <span className="price">{product.price}</span>
                    </div>
                    <div className="info-item">
                      <span>{product.label_production || 'Produksi:'}</span>
                      <span className="duration">{product.duration}</span>
                    </div>
                  </div>
                  <a
                    href={product.link || 'https://wa.me/6281804376001'}
                    className="btn-product"
                    style={{
                      background: product.accent === 'blue' ? 'linear-gradient(90deg, #3B82F6, #06B6D4)' :
                                 product.accent === 'orange' ? 'linear-gradient(90deg, #F97316, #EF4444)' :
                                 product.accent === 'pink' ? 'linear-gradient(90deg, #DB2777, #E11D48)' :
                                 product.accent === 'green' ? 'linear-gradient(90deg, #16A34A, #059669)' :
                                 'linear-gradient(90deg, #DB2777, #E11D48)'
                    }}
                  >
                    <i className="fas fa-shopping-cart"></i> {product.btn_order || 'Pesan Sekarang'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Gifts & Tech */}
      <section className="products-section corporate-gifts">
        <div className="container">
          <div className="section-header-v2">
            <h2 className="section-title">{content.get('page-layanan', 'sect_corporate_title', 'Corporate Gifts & Tech')}</h2>
            <p className="section-subtitle">{content.get('page-layanan', 'sect_corporate_subtitle', 'Pilihan hadiah korporat dan merchandise teknologi yang inovatif dan berkualitas.')}</p>
          </div>
          <div className="products-grid">
            {(content.get('page-layanan', 'corporate_products') || []).map((product: any, index: number) => (
              <div className={`product-card accent-${product.accent || 'green'}`} key={index}>
                <div className="product-image">
                  <img src={getImg(product.image)} alt={product.img_alt || product.title} />
                </div>
                <div className="product-content">
                  <h3>{product.title}</h3>
                  <h4>{product.label_spec || 'Spesifikasi:'}</h4>
                  <ul className="product-features">
                    {(product.features || []).map((feature: string, fIndex: number) => (
                      <li key={fIndex}><i className="fas fa-check"></i> {feature}</li>
                    ))}
                  </ul>
                  <div className="product-info-grid">
                    <div className="info-item">
                      <span>{product.label_price || 'Harga:'}</span>
                      <span className="price">{product.price}</span>
                    </div>
                    <div className="info-item">
                      <span>{product.label_production || 'Produksi:'}</span>
                      <span className="duration">{product.duration}</span>
                    </div>
                  </div>
                  <a
                    href={product.link || 'https://wa.me/6281804376001'}
                    className="btn-product"
                    style={{
                      background: product.accent === 'blue' ? 'linear-gradient(90deg, #3B82F6, #06B6D4)' :
                                 product.accent === 'orange' ? 'linear-gradient(90deg, #F97316, #EF4444)' :
                                 product.accent === 'pink' ? 'linear-gradient(90deg, #A855F7, #EC4899)' :
                                 product.accent === 'green' ? 'linear-gradient(90deg, #16A34A, #059669)' :
                                 product.accent === 'purple' ? 'linear-gradient(90deg, #A855F7, #EC4899)' :
                                 'linear-gradient(90deg, #16A34A, #059669)'
                    }}
                  >
                    <i className="fas fa-shopping-cart"></i> {product.btn_order || 'Pesan Sekarang'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Merchandise */}
      <section className="products-section lifestyle-merch">
        <div className="container">
          <div className="section-header-v2">
            <h2 className="section-title">{content.get('page-layanan', 'sect_lifestyle_title', 'Lifestyle Merchandise')}</h2>
            <p className="section-subtitle">{content.get('page-layanan', 'sect_lifestyle_subtitle', 'Merchandise gaya hidup yang unik dan personal untuk kebutuhan promosi atau pribadi.')}</p>
          </div>
          <div className="products-grid">
            {(content.get('page-layanan', 'lifestyle_products') || []).map((product: any, index: number) => (
              <div className={`product-card accent-${product.accent || 'blue'}`} key={index}>
                <div className="product-image">
                  <img src={getImg(product.image)} alt={product.img_alt || product.title} />
                </div>
                <div className="product-content">
                  <h3>{product.title}</h3>
                  {product.desc && <p className="product-description">{product.desc}</p>}
                  <h4>{product.label_spec || 'Spesifikasi:'}</h4>
                  <ul className="product-features">
                    {(product.features || []).map((feature: string, fIndex: number) => (
                      <li key={fIndex}><i className="fas fa-check"></i> {feature}</li>
                    ))}
                  </ul>
                  <div className="product-info-grid">
                    <div className="info-item">
                      <span>{product.label_price || 'Harga:'}</span>
                      <span className="price">{product.price}</span>
                    </div>
                    <div className="info-item">
                      <span>{product.label_production || 'Produksi:'}</span>
                      <span className="duration">{product.duration}</span>
                    </div>
                  </div>
                  <a
                    href={product.link || 'https://wa.me/6281804376001'}
                    className="btn-product"
                    style={{
                      background: product.accent === 'blue' ? 'linear-gradient(90deg, #3B82F6, #06B6D4)' :
                                 product.accent === 'orange' ? 'linear-gradient(90deg, #F97316, #EF4444)' :
                                 product.accent === 'pink' ? 'linear-gradient(90deg, #DB2777, #E11D48)' :
                                 product.accent === 'green' ? 'linear-gradient(90deg, #16A34A, #059669)' :
                                 product.accent === 'slate' ? 'linear-gradient(90deg, #475569, #334155)' :
                                 'linear-gradient(90deg, #3B82F6, #06B6D4)'
                    }}
                  >
                    <i className="fas fa-shopping-cart"></i> {product.btn_order || 'Pesan Sekarang'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="work-process-section">
        <div className="container">
          <div className="section-header-v2">
            <h2 className="section-title">{content.get('page-layanan', 'sect_process_title', 'Proses Kerja Kami')}</h2>
            <p className="section-subtitle">{content.get('page-layanan', 'sect_process_subtitle', 'Langkah-langkah sederhana untuk memulai proyek Anda bersama kami.')}</p>
          </div>
          <div className="work-process-timeline">
            {(content.get('page-layanan', 'work_process_steps', DEFAULT_PROCESS) || []).map((step: any, index: number) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-icon">
                  <i className={`fas ${step.icon || 'fa-circle'}`}></i>
                  <span className="step-number">{index + 1}</span>
                </div>
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-description">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header-v2 centered">
            <h2>{content.get('page-layanan', 'sect_faq_title', 'Frequently Asked Questions')}</h2>
            <p>{content.get('page-layanan', 'sect_faq_subtitle', 'Temukan jawaban atas pertanyaan umum seputar layanan kami.')}</p>
          </div>

          <div className="faq-grid">
            {(content.get('page-layanan', 'faq_list', DEFAULT_FAQ) || []).map((faq: any, index: number) => (
              <div className="faq-item" key={index}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h3>{faq.question}</h3>
                  <span className={`toggle-icon ${activeFaq === index ? 'active' : ''}`}>+</span>
                </div>
                <div className={`faq-answer ${activeFaq === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-v2">
        <div className="container">
          <div className="cta-content-v2">
            <h2>{content.get('page-layanan', 'sect_cta_title', 'Siap Memulai Proyek Anda?')}</h2>
            <p>{content.get('page-layanan', 'sect_cta_desc', 'Konsultasikan kebutuhan digital creative dan custom merchandise Anda dengan tim ahli kami secara gratis')}</p>
            <div className="cta-buttons-v2">
              <a href="https://wa.me/6281804376001" className="btn-primary-v2" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> {content.get('page-layanan', 'btn_whatsapp', 'WhatsApp Sekarang')}
              </a>
              <a href="tel:081804376001" className="btn-secondary-v2">
                <i className="fa-solid fa-phone"></i> {content.get('page-layanan', 'btn_phone', 'Telepon Langsung')}
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
              <img src={getImg('img.png')} alt={content.get('page-layanan', 'footer_logo_alt', 'Digital Creative Services Logo')} className="footer-logo" />
              <p>{content.get('page-layanan', 'footer_desc', 'Partner digital kreatif terpercaya untuk pertumbuhan bisnis Anda. Melayani pembuatan website, aplikasi, desain grafis, hingga merchandise.')}</p>
              <div className="social-links">
                <a href={content.get('page-layanan', 'social_fb', 'https://facebook.com')} target="_blank" rel="noopener noreferrer" aria-label={content.get('page-layanan', 'social_fb_label', 'Facebook')}><i className="fab fa-facebook-f"></i></a>
                <a href={content.get('page-layanan', 'social_ig', 'https://instagram.com')} target="_blank" rel="noopener noreferrer" aria-label={content.get('page-layanan', 'social_ig_label', 'Instagram')}><i className="fab fa-instagram"></i></a>
                <a href={content.get('page-layanan', 'social_twitter', 'https://twitter.com')} target="_blank" rel="noopener noreferrer" aria-label={content.get('page-layanan', 'social_twitter_label', 'Twitter')}><i className="fab fa-twitter"></i></a>
                <a href={content.get('page-layanan', 'social_linkedin', 'https://linkedin.com')} target="_blank" rel="noopener noreferrer" aria-label={content.get('page-layanan', 'social_linkedin_label', 'LinkedIn')}><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>{content.get('page-layanan', 'footer_col_1_title', 'Quick Links')}</h4>
              <ul className="footer-list">
                <li><a href="/">{content.get('page-layanan', 'footer_link_home', 'Home')}</a></li>
                <li><a href="/services">{content.get('page-layanan', 'footer_link_services', 'Layanan')}</a></li>
                <li><a href="/portfolio">{content.get('page-layanan', 'footer_link_portfolio', 'Portofolio')}</a></li>
                <li><a href="/about">{content.get('page-layanan', 'footer_link_about', 'Tentang Kami')}</a></li>
                <li><a href="/contact">{content.get('page-layanan', 'footer_link_contact', 'Live Chat')}</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>{content.get('page-layanan', 'footer_col_2_title', 'Layanan Kami')}</h4>
              <ul className="footer-list">
                <li><a href="/ui-ux">{content.get('page-layanan', 'footer_link_uiux', 'Desain Grafis')}</a></li>
                <li><a href="/web-apk">{content.get('page-layanan', 'footer_link_webapk', 'Website & Aplikasi')}</a></li>
                <li><a href="/social-media">{content.get('page-layanan', 'footer_link_digital_marketing', 'Digital Marketing')}</a></li>
                <li><a href="/custom-merchandise">{content.get('page-layanan', 'footer_link_merch', 'Merchandise Custom')}</a></li>
                <li><a href="/custom-merchandise">{content.get('page-layanan', 'footer_link_gift', 'Corporate Gift')}</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>{content.get('page-layanan', 'footer_col_3_title', 'Kontak Kami')}</h4>
              <ul className="footer-list contact-info">
                <li><i className="fas fa-map-marker-alt"></i> <span>{content.get('page-layanan', 'footer_label_address', 'Alamat')}</span></li>
                <li><i className="fas fa-envelope"></i> <span>{content.get('page-layanan', 'footer_label_email', 'Email')}</span></li>
                <li><i className="fas fa-phone"></i> <span>{content.get('page-layanan', 'footer_label_phone', 'Telepon')}</span></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{content.get('page-layanan', 'footer_copyright', '© 2023 Digital Creative Services. All rights reserved.')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ServicesPage;
