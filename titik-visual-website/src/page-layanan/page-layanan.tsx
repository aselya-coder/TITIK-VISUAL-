import React, { useState } from 'react';
import './style.css';
import { useContent } from '../content/ContentContext';
import { PenTool, Globe, Sparkles, TrendingUp, Gift } from 'lucide-react';

const getImg = (name: string) => {
  if (!name) return undefined as any;
  if (name.startsWith('http')) return name;
  try {
    return require(`../img/${name}`);
  } catch {
    return undefined as any;
  }
};

function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const content = useContent();

  const DEFAULT_MAIN_SERVICES = [
    { title: "UI/UX Design", desc: "Desain interface yang user-friendly dan menarik untuk website dan aplikasi mobile", icon: "PenTool", color: "purple", cta_label: "Lihat Detail", cta_href: "/ui-ux" },
    { title: "Website & Aplikasi", desc: "Website responsif dan aplikasi mobile dengan teknologi terdepan", icon: "Globe", color: "blue", cta_label: "Lihat Detail", cta_href: "/web-apk" },
    { title: "Logo Design", desc: "Logo profesional yang mencerminkan identitas dan nilai brand Anda", icon: "Sparkles", color: "orange", cta_label: "Lihat Detail", cta_href: "/logo-design" },
    { title: "Social Media Management", desc: "Kelola dan kembangkan media sosial bisnis dengan strategi yang tepat", icon: "TrendingUp", color: "pink", cta_label: "Lihat Detail", cta_href: "/social-media" },
    { title: "Custom Merchandise", desc: "Merchandise berkualitas tinggi untuk promosi dan corporate branding", icon: "Gift", color: "green", cta_label: "Lihat Detail", cta_href: "/custom-merchandise" }
  ];

  const iconMap: any = {
    "PenTool": PenTool,
    "Globe": Globe,
    "Sparkles": Sparkles,
    "TrendingUp": TrendingUp,
    "Gift": Gift,
    // Fallback mapping for old keys
    "ui-ux desain.png": PenTool,
    "icon-website.png": Globe,
    "icon-logo dan brand.png": Sparkles,
    "icon-sosial-media.png": TrendingUp,
    "icon-custom-merchandise.png": Gift
  };

  const colorMap: any = {
    purple: '#8a2be2',
    blue: '#2b7bff',
    orange: '#ff7c4c',
    pink: '#e91e63',
    green: '#28a745',
    teal: '#0ea5e9'
  };

  const DEFAULT_DETAIL_SERVICES = [
    { title: "UI/UX Design", desc: "Desain interface yang user-friendly dan menarik untuk website dan aplikasi mobile", image: "ui-ux.png", accent: "purple", features: ["User Research & Analysis", "Wireframing & Prototyping", "Visual Design System", "Usability Testing", "Responsive Design"], price: "Mulai dari Rp 2.500.000", duration: "2-4 minggu", btn_order: "Pesan Sekarang", wa_link: "https://wa.me/6281804376001" },
    { title: "Website Development", desc: "Website responsif dan modern dengan teknologi terdepan untuk bisnis Anda", image: "web.png", accent: "blue", features: ["Responsive Web Design", "CMS Integration", "E-commerce Solutions", "SEO Optimization", "Performance Optimization"], price: "Mulai dari Rp 3.500.000", duration: "3-6 minggu", btn_order: "Pesan Sekarang", wa_link: "https://wa.me/6281804376001" },
    { title: "Mobile App Development", desc: "Aplikasi mobile iOS dan Android dengan performa optimal dan user experience terbaik", image: "Mobile.png", accent: "green", features: ["Native iOS & Android", "Cross-platform Development", "API Integration", "Push Notifications", "App Store Deployment"], price: "Mulai dari Rp 15.000.000", duration: "6-12 minggu", btn_order: "Pesan Sekarang", wa_link: "https://wa.me/6281804376001" },
    { title: "Logo Design", desc: "Logo profesional yang mencerminkan identitas dan nilai brand brand Anda", image: "Logo Design.png", accent: "orange", features: ["Konsep Logo Unik", "Multiple Variations", "Brand Guidelines", "File Format Lengkap", "Unlimited Revisions"], price: "Mulai dari Rp 500.000", duration: "1-2 minggu", btn_order: "Pesan Sekarang", wa_link: "https://wa.me/6281804376001" },
    { title: "Brand Identity", desc: "Paket lengkap identitas visual untuk membangun brand yang kuat dan memorable", image: "brand identity.png", accent: "purple", features: ["Logo Design", "Color Palette", "Typography System", "Business Card Design", "Letterhead & Stationery"], price: "Mulai dari Rp 2.000.000", duration: "2-3 minggu", btn_order: "Pesan Sekarang", wa_link: "https://wa.me/6281804376001" },
    { title: "Social Media Management", desc: "Kelola dan kembangkan media sosial bisnis Anda dengan strategi yang tepat", image: "Social Media Management.png", accent: "pink", features: ["Content Planning & Strategy", "Daily Posting Schedule", "Community Management", "Analytics & Reporting", "Paid Ads Management"], price: "Mulai dari Rp 1.500.000/bulan", duration: "Ongoing", btn_order: "Pesan Sekarang", wa_link: "https://wa.me/6281804376001" },
    { title: "Digital Marketing", desc: "Strategi pemasaran digital yang komprehensif untuk meningkatkan brand awareness", image: "digital marketing.png", accent: "orange", features: ["SEO & SEM Strategy", "Social Media Advertising", "Email Marketing", "Content Marketing", "Analytics & Optimization"], price: "Mulai dari Rp 2.000.000/bulan", duration: "Ongoing", btn_order: "Pesan Sekarang", wa_link: "https://wa.me/6281804376001" },
    { title: "Social Media Feed Design", desc: "Desain konten visual yang menarik dan konsisten untuk feed media sosial", image: "Social Media Feed Design.png", accent: "blue", features: ["Feed Template Design", "Story Templates", "Highlight Covers", "Post Carousel Design", "Brand Consistency"], price: "Mulai dari Rp 800.000/bulan", duration: "Ongoing", btn_order: "Pesan Sekarang", wa_link: "https://wa.me/6281804376001" }
  ];

  const DEFAULT_DRINKWARE = [
    { 
      title: "Botol Minum & Tumbler Custom", 
      desc: "Botol minum dan tumbler berkualitas tinggi dengan custom design sesuai brand Anda",
      image: "Botol Minum & Tumbler Custom.png", 
      accent: "blue", 
      features: ["Material Stainless Steel/Plastic", "Berbagai Ukuran (350ml-1000ml)", "Custom Logo & Design", "Packaging Eksklusif", "Minimum Order 50 pcs"], 
      price: "Mulai dari Rp 25.000/pcs", 
      duration: "7-14 hari" 
    },
    { 
      title: "Mug Custom", 
      desc: "Mug ceramic dan stainless berkualitas premium dengan printing yang tahan lama",
      image: "mug.png", 
      accent: "orange", 
      features: ["Ceramic & Stainless Options", "Full Color Printing", "Heat-resistant Design", "Custom Packaging", "Minimum Order 24 pcs"], 
      price: "Mulai dari Rp 20.000/pcs", 
      duration: "7-10 hari" 
    },
    { 
      title: "Gelas Kaca Premium", 
      desc: "Gelas kaca berkualitas tinggi untuk kebutuhan corporate dan event special",
      image: "gelas kaca.png", 
      accent: "blue", 
      features: ["Material Kaca Berkualitas", "Berbagai Model & Ukuran", "Etching & Printing Options", "Elegant Packaging", "Minimum Order 50 pcs"], 
      price: "Mulai dari Rp 15.000/pcs", 
      duration: "10-14 hari" 
    },
    { 
      title: "Drink Jar & Gelas Cup", 
      desc: "Drink jar unik dan gelas cup branded untuk promosi yang memorable",
      image: "drink jar.png", 
      accent: "green", 
      features: ["Mason Jar Style", "Custom Cup Design", "Food Grade Material", "Creative Packaging", "Minimum Order 50 pcs"], 
      price: "Mulai dari Rp 18.000/pcs", 
      duration: "7-12 hari" 
    }
  ];

  const DEFAULT_BAGS = [
    { 
      title: "Totebag Canvas Premium", 
      desc: "Totebag canvas berkualitas tinggi dengan custom design yang tahan lama",
      image: "tas canvas.png", 
      accent: "pink", 
      features: ["Canvas Material Premium", "Custom Size & Design", "Sablon/Bordir Options", "Eco-friendly Material", "Minimum Order 50 pcs"], 
      price: "Mulai dari Rp 15.000/pcs", 
      duration: "7-14 hari" 
    },
    { 
      title: "Tas Furing Spunbond", 
      desc: "Tas furing spunbond yang praktis dan ekonomis untuk promosi brand",
      image: "Tas Furing Spunbond.png", 
      accent: "green", 
      features: ["Material Spunbond Berkualitas", "Berbagai Warna Tersedia", "Custom Print 1-4 Warna", "Lightweight & Durable", "Minimum Order 100 pcs"], 
      price: "Mulai dari Rp 8.000/pcs", 
      duration: "5-10 hari" 
    },
    { 
      title: "Tas Kertas & Plastik Custom", 
      desc: "Tas kertas dan plastik branded untuk packaging dan promosi yang efektif",
      image: "Tas Kertas & Plastik Custom.png", 
      accent: "blue", 
      features: ["Paper & Plastic Options", "Custom Size & Handle", "Full Color Printing", "Lamination Available", "Minimum Order 500 pcs"], 
      price: "Mulai dari Rp 3.000/pcs", 
      duration: "7-14 hari" 
    }
  ];

  const DEFAULT_CORPORATE = [
    { 
      title: "Powerbank Custom", 
      desc: "Powerbank berkualitas tinggi dengan custom design untuk corporate gifts",
      image: "Powerbank Custom.png", 
      accent: "green", 
      features: ["Kapasitas 5000-20000 mAh", "Fast Charging Support", "Custom Logo Engraving", "Premium Packaging", "Minimum Order 25 pcs"], 
      price: "Mulai dari Rp 75.000/pcs", 
      duration: "10-21 hari" 
    },
    { 
      title: "Flashdisk Custom", 
      desc: "Flashdisk branded dengan berbagai kapasitas dan model unik",
      image: "placeholder.png", 
      accent: "purple", 
      features: ["Kapasitas 4GB-128GB", "Custom Shape & Design", "Logo Engraving/Printing", "Data Preload Available", "Minimum Order 25 pcs"], 
      price: "Mulai dari Rp 35.000/pcs", 
      duration: "7-14 hari" 
    },
    { 
      title: "Paket Seminar Kit", 
      desc: "Paket lengkap seminar kit dengan custom branding untuk event corporate",
      image: "Tumbler Sport.png", 
      accent: "blue", 
      features: ["Tas Seminar + Isi Lengkap", "Notebook & Pulpen Custom", "ID Card Holder", "Custom Packaging", "Minimum Order 50 set"], 
      price: "Mulai dari Rp 45.000/set", 
      duration: "10-21 hari" 
    }
  ];

  const DEFAULT_LIFESTYLE = [
    { 
      title: "Payung Custom Premium", 
      desc: "Payung berkualitas tinggi dengan custom design untuk promosi yang efektif",
      image: "Payung Custom Premium.png", 
      accent: "blue", 
      features: ["Material Berkualitas Tinggi", "Tahan Angin & Air", "Custom Print Full Color", "Berbagai Ukuran", "Minimum Order 50 pcs"], 
      price: "Mulai dari Rp 35.000/pcs", 
      duration: "10-21 hari" 
    },
    { 
      title: "Jam Dinding Custom", 
      desc: "Jam dinding custom dengan design unik untuk dekorasi dan promosi",
      image: "Jam Dinding Custom.png", 
      accent: "orange", 
      features: ["Berbagai Bentuk & Ukuran", "Mesin Jam Berkualitas", "Custom Design & Logo", "Silent Movement", "Minimum Order 25 pcs"], 
      price: "Mulai dari Rp 45.000/pcs", 
      duration: "14-21 hari" 
    },
    { 
      title: "Pulpen & Pin Custom", 
      desc: "Pulpen dan pin branded untuk promosi sehari-hari yang efektif",
      image: "Pulpen & Pin Custom.png", 
      accent: "pink", 
      features: ["Berbagai Model Pulpen", "Pin Enamel/Metal", "Custom Logo & Warna", "Packaging Menarik", "Minimum Order 100 pcs"], 
      price: "Mulai dari Rp 5.000/pcs", 
      duration: "7-14 hari" 
    },
    { 
      title: "Asbak & Aksesoris", 
      desc: "Asbak custom dan berbagai aksesoris branded lainnya",
      image: "Asbak & Aksesoris.png", 
      accent: "slate", 
      features: ["Material Berkualitas", "Custom Shape & Design", "Logo Engraving", "Packaging Eksklusif", "Minimum Order 50 pcs"], 
      price: "Mulai dari Rp 25.000/pcs", 
      duration: "10-14 hari" 
    }
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

  const handleFooterLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo(0, 0);
  };

  return (
    <div className="services-page">




      {/* Hero Section - Kategori Layanan */}
      <main className="hero-section" style={{ backgroundColor: '#FFFFFF', backgroundImage: 'none' }}>
        <div className="container">
          <h1>{content.get('page-layanan', 'hero_title', 'Kategori Layanan Utama')}</h1>
          <p className="subtitle">{content.get('page-layanan', 'hero_subtitle', 'Pilih layanan digital unggulan yang sesuai dengan kebutuhan bisnis Anda.')}</p>

          <div className="category-grid-main">
            {(content.get('page-layanan', 'main_services', DEFAULT_MAIN_SERVICES) || []).map((item: any, index: number) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div className="category-card" key={index}>
                  <div className={`card-icon ${item.color || 'purple'}`}>
                    {IconComponent ? (
                      <IconComponent size={32} color={colorMap['purple']} />
                    ) : (
                      <img
                        src={getImg(item.icon)}
                        alt={item.icon_alt || item.title}
                        style={{ width: '64%', height: '64%', objectFit: 'contain', display: 'block', opacity: 1 }}
                      />
                    )}
                  </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a
                  href={item.cta_href || '#'}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.cta_href) {
                      window.history.pushState(null, '', item.cta_href);
                      window.dispatchEvent(new PopStateEvent('popstate'));
                      window.scrollTo(0, 0);
                    }
                  }}
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
            ); })}
          </div>
        </div>
      </main>

      {/* Services List Section (Detail) */}
      <section className="services-list-section" id="detail-services">
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
                    onClick={(e) => {
                      const link = service.wa_link || 'https://wa.me/6281804376001';
                      if (link.startsWith('/')) {
                        e.preventDefault();
                        window.history.pushState(null, '', link);
                        window.dispatchEvent(new PopStateEvent('popstate'));
                        window.scrollTo(0, 0);
                      }
                    }}
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
      <section className="products-section custom-drinkware" id="products">
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
                  {product.desc && <p className="product-description" style={{ textAlign: 'left' }}>{product.desc}</p>}
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
                    onClick={(e) => {
                      const link = product.link || 'https://wa.me/6281804376001';
                      if (link.startsWith('/')) {
                        e.preventDefault();
                        window.history.pushState(null, '', link);
                        window.dispatchEvent(new PopStateEvent('popstate'));
                        window.scrollTo(0, 0);
                      }
                    }}
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
            {(content.get('page-layanan', 'bags_products', DEFAULT_BAGS) || []).map((product: any, index: number) => (
              <div className={`product-card accent-${product.accent || 'pink'}`} key={index}>
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
                    onClick={(e) => {
                      const link = product.link || 'https://wa.me/6281804376001';
                      if (link.startsWith('/')) {
                        e.preventDefault();
                        window.history.pushState(null, '', link);
                        window.dispatchEvent(new PopStateEvent('popstate'));
                        window.scrollTo(0, 0);
                      }
                    }}
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
            {(content.get('page-layanan', 'corporate_products', DEFAULT_CORPORATE) || []).map((product: any, index: number) => (
              <div className={`product-card accent-${product.accent || 'green'}`} key={index}>
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
                    onClick={(e) => {
                      const link = product.link || 'https://wa.me/6281804376001';
                      if (link.startsWith('/')) {
                        e.preventDefault();
                        window.history.pushState(null, '', link);
                        window.dispatchEvent(new PopStateEvent('popstate'));
                        window.scrollTo(0, 0);
                      }
                    }}
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
      <section className="products-section lifestyle-merch" id="lifestyle">
        <div className="container">
          <div className="section-header-v2">
            <h2 className="section-title">{content.get('page-layanan', 'sect_lifestyle_title', 'Lifestyle Merchandise')}</h2>
            <p className="section-subtitle">{content.get('page-layanan', 'sect_lifestyle_subtitle', 'Merchandise gaya hidup yang unik dan personal untuk kebutuhan promosi atau pribadi.')}</p>
          </div>
          <div className="products-grid">
            {(content.get('page-layanan', 'lifestyle_products', DEFAULT_LIFESTYLE) || []).map((product: any, index: number) => (
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
      <section className="faq-section" id="faq">
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
              <a
                href={content.get('page-layanan', 'cta_whatsapp_href', 'https://wa.me/6281804376001')}
                className="btn-primary-v2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i> {content.get('page-layanan', 'btn_whatsapp', 'WhatsApp Sekarang')}
              </a>
              <a href={content.get('page-layanan', 'cta_phone_href', 'tel:081804376001')} className="btn-secondary-v2">
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
                <li><a href="/" onClick={(e) => handleFooterLink(e, '/')} >{content.get('page-layanan', 'footer_link_home', 'Home')}</a></li>
                <li><a href="/services" onClick={(e) => handleFooterLink(e, '/services')} >{content.get('page-layanan', 'footer_link_services', 'Layanan')}</a></li>
                <li><a href="/portfolio" onClick={(e) => handleFooterLink(e, '/portfolio')} >{content.get('page-layanan', 'footer_link_portfolio', 'Portofolio')}</a></li>
                <li><a href="/about" onClick={(e) => handleFooterLink(e, '/about')} >{content.get('page-layanan', 'footer_link_about', 'Tentang Kami')}</a></li>
                <li><a href="/contact" onClick={(e) => handleFooterLink(e, '/contact')} >{content.get('page-layanan', 'footer_link_contact', 'Live Chat')}</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>{content.get('page-layanan', 'footer_col_2_title', 'Layanan Kami')}</h4>
              <ul className="footer-list">
                <li><a href="/ui-ux" onClick={(e) => handleFooterLink(e, '/ui-ux')} >{content.get('page-layanan', 'footer_link_uiux', 'Desain Grafis')}</a></li>
                <li><a href="/web-apk" onClick={(e) => handleFooterLink(e, '/web-apk')} >{content.get('page-layanan', 'footer_link_webapk', 'Website & Aplikasi')}</a></li>
                <li><a href="/social-media" onClick={(e) => handleFooterLink(e, '/social-media')} >{content.get('page-layanan', 'footer_link_digital_marketing', 'Digital Marketing')}</a></li>
                <li><a href="/custom-merchandise" onClick={(e) => handleFooterLink(e, '/custom-merchandise')} >{content.get('page-layanan', 'footer_link_merch', 'Merchandise Custom')}</a></li>
                <li><a href="/services#corporate" onClick={(e) => handleFooterLink(e, '/services#corporate')} >{content.get('page-layanan', 'footer_link_gift', 'Corporate Gift')}</a></li>
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
