import React, { useState, useEffect } from 'react';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import './style.css';
import { useContent } from '../content/ContentContext';

const PhoneIcon = FaPhone as unknown as React.ComponentType;
const EmailIcon = MdEmail as unknown as React.ComponentType;

const getImg = (name: string) => {
  try {
    return require(`../img/${name}`);
  } catch {
    return '';
  }
};

// Definisikan tipe untuk parameter fungsi
type Direction = 'prev' | 'next';

const navigateToPage = (path: string) => {
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    window.location.href = path;
  } else {
    window.history.pushState(null, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo(0, 0);
  }
};

const ContactList: React.FC = () => {
  const content = useContent();
  const contacts = [
    { type: 'whatsapp', title: content.get('beranda', 'contact_whatsapp_title', 'WhatsApp Titik Visual'), value: '081804376001' },
    { type: 'phone', title: content.get('beranda', 'contact_phone_title', 'Telepon Titik Visual'), value: '081804376001' },
    { type: 'email', title: content.get('beranda', 'contact_email_title', 'Email Titik Visual'), value: 'titikvisualjogja@gmail.com' }
  ] as const;

  return (
    <div className="contact-list">
      <h3 className="contact-list-title">{content.get('beranda', 'contact_list_title', 'Hubungi Titik Visual')}</h3>
      <div className="contact-list-cards">
        {contacts.map((item, idx) => (
          <div className="contact-list-card" key={idx}>
            <div className="contact-list-header">
              <div className={`contact-list-icon ${item.type === 'email' ? 'icon-gray' : 'icon-green'}`}>
                {item.type === 'email' ? <EmailIcon /> : <PhoneIcon />}
              </div>
              <div className="contact-list-text">
                <h4>{item.title}</h4>
                <p>{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RightCTACard: React.FC = () => {
  const content = useContent();
  return (
    <div className="cta-card">
      <div>
        <h3 className="cta-title">{content.get('beranda', 'cta_card_title', 'Siap Memulai Proyek?')}</h3>
        <p className="cta-desc">
          {content.get('beranda', 'cta_card_desc', 'Konsultasikan kebutuhan UI/UX, web development, digital marketing, dan custom merchandise Anda dengan tim ahli Titik Visual. Dapatkan penawaran terbaik untuk proyek impian Anda!')}
        </p>
      </div>
      <div className="cta-actions">
        <a
          href="https://wa.me/6281804376001"
          className="btn-cta-primary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 20px',
            borderRadius: 12,
            textDecoration: 'none',
            background: 'linear-gradient(90deg, #16A34A, #22C55E)',
            color: '#ffffff',
            fontWeight: 600,
            border: '1px solid transparent',
            width: '100%',
            boxShadow: '0 10px 22px rgba(34, 197, 94, 0.25)'
          }}
        >
          <i className="fa-brands fa-whatsapp" style={{ color: '#ffffff' }}></i> {content.get('beranda', 'cta_whatsapp_btn', 'WhatsApp Titik Visual')}
        </a>
        <a
          href="/contact"
          className="btn-cta-secondary"
          onClick={(e) => { e.preventDefault(); navigateToPage('/contact'); }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 20px',
            borderRadius: 12,
            textDecoration: 'none',
            background: '#ffffff',
            color: '#111827',
            fontWeight: 600,
            border: '1.5px solid #e5e7eb',
            width: '100%',
            boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
            cursor: 'pointer'
          }}
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i> {content.get('beranda', 'cta_contact_btn', 'Halaman Kontak Lengkap')}
        </a>
      </div>
    </div>
  );
};

const ContactCTASection: React.FC = () => {
  const content = useContent();
  return (
    <section className="contact-cta-section" id="contact-cta">
      <div className="container">
        <div className="contact-cta-header">
          <h2 className="section-title-main">{content.get('beranda', 'contact_cta_title', 'Mari Berkreasi Bersama Titik Visual')}</h2>
          <p className="section-subtitle">{content.get('beranda', 'contact_cta_subtitle', 'Jelajahi layanan kami dan mulai konsultasi proyek Anda sekarang')}</p>
        </div>
        <div className="contact-cta-grid">
          <div className="contact-cta-left"><ContactList /></div>
          <RightCTACard />
        </div>
      </div>
    </section>
  );
};


const TitikVisualWebsite: React.FC = () => {
  const content = useContent();
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);
  const [activePortfolioIndex, setActivePortfolioIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const items = content.get('beranda', 'portfolio_preview.items');
    if (Array.isArray(items) && items.length > 0) {
      setPortfolioItems(items);
    } else {
      // Fallback to default items if CMS data is not available
      setPortfolioItems([
        { year: '2023', category: 'UI/UX Design', title: 'Desain Aplikasi Mobile Banking', description: 'Desain ulang aplikasi mobile banking dengan fokus pada kemudahan penggunaan dan tampilan modern.', client: 'Bank XYZ', url: '/portfolio/detail/1', image: 'portfolio-1.png' },
        { year: '2022', category: 'Web Development', title: 'Website E-commerce Fesyen', description: 'Pengembangan website e-commerce dengan fitur lengkap, mulai dari katalog produk hingga pembayaran online.', client: 'Brand Fesyen ABC', url: '/portfolio/detail/2', image: 'portfolio-2.png' },
        { year: '2023', category: 'Custom Merchandise', title: 'Paket Merchandise Eksklusif', description: 'Produksi paket merchandise eksklusif untuk acara tahunan perusahaan, terdiri dari tumbler, kaos, dan totebag.', client: 'Perusahaan Teknologi DEF', url: '/portfolio/detail/3', image: 'portfolio-3.png' }
      ]);
    }
  }, [content]);

  const handlePortfolioNavigation = (direction: Direction) => {
    const totalItems = portfolioItems.length;
    if (direction === 'prev') {
      setActivePortfolioIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalItems - 1));
    } else {
      setActivePortfolioIndex((prevIndex) => (prevIndex < totalItems - 1 ? prevIndex + 1 : 0));
    }
  };

  useEffect(() => {
    document.body.classList.add('page-loaded');
    return () => {
      document.body.classList.remove('page-loaded');
    };
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  /* dynamic content for hero disabled to ensure design consistency */
  return (
    <div className={`titik-visual-website ${loaded ? 'page-loaded' : ''}`}>


      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="container hero-inner">
            <div
              className="tv-badge pill-shape"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                background: 'linear-gradient(90deg, #FCE7F3, #E4E4E7)',
                color: '#7E22CE',
                fontSize: 12,
                fontWeight: 700,
                padding: '6px 12px',
                borderRadius: 9999,
                border: '1px solid #E9D5FF',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.6), 0 6px 16px rgba(126,34,206,0.12)',
                backdropFilter: 'blur(5px)'
              }}
            >
              <img
                src={getImg(content.get('beranda', 'hero_badge_icon', 'icon-custom-merchandise.png'))}
                alt="Icon"
                style={{ width: 14, height: 14, objectFit: 'contain' }}
              />
              <span className="badge-text" style={{ letterSpacing: 0.2 }}>
                {content.get('beranda', 'hero_badge_text', 'Titik Visual • Digital Creative Studio Yogyakarta')}
              </span>
            </div>
            <h1 className="hero-title gradient-text">
              <span
                className="line-1"
                style={{
                  background: 'linear-gradient(90deg, #1F2937, #9333EA, #0891B2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800
                }}
              >
                {content.get('beranda', 'hero_title_line1', 'Titik Visual')}
              </span>
              <span
                className="line-2"
                style={{
                  background: 'linear-gradient(90deg, #A855F7, #EC4899, #06B6D4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800
                }}
              >
                {content.get('beranda', 'hero_title_line2', 'Creative Studio')}
              </span>
            </h1>
            <p
              className="hero-lead"
              style={{ lineHeight: 1.5, whiteSpace: 'normal', overflowWrap: 'anywhere', wordBreak: 'break-word', hyphens: 'auto' }}
            >
              {content.get('beranda', 'hero_lead_prefix', 'Dari Ide Menjadi Kenyataan dengan')}{' '}
              <span
                className="highlight"
                style={{
                  background: 'linear-gradient(90deg, #F97316, #EC4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700
                }}
              >
                {content.get('beranda', 'hero_lead_highlight', 'Sentuhan Kreativitas')}
              </span>
            </p>
            <p className="hero-sub description">
              {content.get('beranda', 'hero_description', 'Titik Visual adalah Digital Creative Studio yang berpengalaman dalam UI/UX Design, Web Development, Mobile App, Social Media Management, dan Custom Merchandise Premium. Kami menghadirkan solusi kreatif lengkap untuk mengembangkan bisnis Anda di Yogyakarta dan seluruh Indonesia.')}
            </p>
            <div
              className="cta-buttons"
              style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center', flexWrap: 'nowrap' }}
            >
              <a
                href="/portfolio"
                onClick={(e) => { e.preventDefault(); navigateToPage('/portfolio'); }}
                className="btn btn-primary gradient-purple-blue"
                style={{ padding: '8px 16px', fontSize: 14, borderRadius: 8, minWidth: 'auto' }}
              >
                <img
                  src={getImg('icon-custom-merchandise.png')}
                  alt="Icon"
                  style={{ width: 14, height: 14, objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                />
                <span>{content.get('beranda', 'cta_portfolio_label', 'Lihat Portofolio')}</span>
              </a>
              <a
                href="https://wa.me/6281804376001"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary white-bg thin-border"
                style={{ padding: '8px 16px', fontSize: 14, borderRadius: 8, minWidth: 'auto' }}
              >
                <i className="chat fa-solid fa-comments" style={{ fontSize: 14 }}></i>
                <span>{content.get('beranda', 'cta_consult_label', 'Konsultasi Gratis')}</span>
              </a>
            </div>
          </div>
        </section>
        

        {/* Featured Services */}
        <section className="featured-services" id="featured-services">
          <div className="container">
            <h2 className="featured-title">{content.get('beranda', 'featured_title', 'Layanan Unggulan Titik Visual')}</h2>
            <p className="featured-subtitle">
              {content.get('beranda', 'featured_subtitle', 'Solusi kreatif terlengkap dari Titik Visual untuk mengembangkan bisnis digital Anda')}
            </p>

            <div className="featured-grid">
              <div className="featured-card" onClick={() => navigateToPage('/ui-ux')} style={{ cursor: 'pointer' }}>
              <div className="icon-box">
                  <img src={getImg(content.get('beranda', 'img_uiux_icon', 'ui-ux desain.png'))} alt="UI/UX Design Icon" className="icon" />
                </div>
                <h4>{content.get('beranda', 'service_uiux_title', 'UI/UX Design')}</h4>
                <p>{content.get('beranda', 'service_uiux_desc', 'Desain interface yang user-friendly dan menarik untuk aplikasi dan website')}</p>
              </div>

              <div className="featured-card" onClick={() => navigateToPage('/web-apk')} style={{ cursor: 'pointer' }}>
              <div className="icon-box">
                  <img src={getImg(content.get('beranda', 'img_website_icon', 'icon-website.png'))} alt="Website Development Icon" className="icon" />
                </div>
                <h4>{content.get('beranda', 'service_web_title', 'Website Development')}</h4>
                <p>{content.get('beranda', 'service_web_desc', 'Website responsif dan modern untuk bisnis Anda')}</p>
              </div>

              <div className="featured-card" onClick={() => navigateToPage('/custom-merchandise')} style={{ cursor: 'pointer' }}>
              <div className="icon-box">
                  <img src={getImg(content.get('beranda', 'img_merch_icon', 'icon-custom-merchandise.png'))} alt="Custom Merchandise Icon" className="icon" />
                </div>
                <h4>{content.get('beranda', 'service_merch_title', 'Custom Merchandise')}</h4>
                <p>{content.get('beranda', 'service_merch_desc', 'Payung, tumbler, totebag, dan merchandise custom berkualitas')}</p>
              </div>

              <div className="featured-card" onClick={() => navigateToPage('/custom-merchandise')} style={{ cursor: 'pointer' }}>
              <div className="icon-box">
                  <img src={getImg(content.get('beranda', 'img_gift_icon', 'icon-corporate-gift.png'))} alt="Corporate Gifts Icon" className="icon" />
                </div>
                <h4>{content.get('beranda', 'service_gift_title', 'Corporate Gifts')}</h4>
                <p>{content.get('beranda', 'service_gift_desc', 'Paket seminar kit, powerbank, flashdisk untuk kebutuhan corporate')}</p>
              </div>

              <div className="featured-card" onClick={() => navigateToPage('/custom-merchandise')} style={{ cursor: 'pointer' }}>
              <div className="icon-box">
                  <img src={getImg(content.get('beranda', 'img_drink_icon', 'icon-drinkware.png'))} alt="Drinkware Collection Icon" className="icon" />
                </div>
                <h4>{content.get('beranda', 'service_drink_title', 'Drinkware Collection')}</h4>
                <p>{content.get('beranda', 'service_drink_desc', 'Botol minum, tumbler, mug, gelas kaca, dan drink jar custom')}</p>
              </div>

              <div className="featured-card" onClick={() => navigateToPage('/logo-design')} style={{ cursor: 'pointer' }}>
              <div className="icon-box">
                  <img src={getImg(content.get('beranda', 'img_logo_icon', 'icon-logo dan brand.png'))} alt="Logo & Brand Identity Icon" className="icon" />
                </div>
                <h4>{content.get('beranda', 'service_logo_title', 'Logo & Brand Identity')}</h4>
                <p>{content.get('beranda', 'service_logo_desc', 'Logo design dan brand identity package lengkap')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services" id="services">
          <div className="container">
            <h2 className="services-title">{content.get('beranda', 'all_services_title', 'Semua Layanan Titik Visual')}</h2>
            <p className="services-subtitle">
              {content.get('beranda', 'all_services_subtitle', 'Solusi kreatif lengkap dari Titik Visual untuk kebutuhan digital dan merchandise Anda')}
            </p>

            <div className="services-header">
              <h3>{content.get('beranda', 'digital_services_header', 'Digital Creative Services')}</h3>
              <span className="badge">
                <img src={getImg('icon-custom-merchandise.png')} alt="Custom Merchandise Icon" className="badge-icon" /> 
                {content.get('beranda', 'tv_expertise_badge', 'Titik Visual Expertise')}
              </span>
            </div>

            <div className="services-grid">
              <div className="service-card" onClick={() => navigateToPage('/ui-ux')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('ui-ux desain.png')} alt="UI/UX Design Icon" className="icon" />
                  </div>
                  <h4>{content.get('beranda', 'service_uiux_title', 'UI/UX Design')}</h4>
                </div>
                <span className="tag">{content.get('beranda', 'tag_popular', 'Populer')}</span>
                <p>{content.get('beranda', 'service_uiux_short_desc', 'Desain interface yang user-friendly dan menarik')}</p>
                <span className="price">{content.get('beranda', 'price_uiux', 'Mulai Rp 2.5jt')}</span>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/web-apk')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('icon-website.png')} alt="Website Development Icon" className="icon" />
                  </div>
                  <h4>{content.get('beranda', 'service_web_title', 'Website Development')}</h4>
                </div>
                <span className="tag">{content.get('beranda', 'tag_popular', 'Populer')}</span>
                <p>{content.get('beranda', 'service_web_short_desc', 'Website responsif dan modern untuk bisnis')}</p>
                <span className="price"><span className="price-label">{content.get('beranda', 'price_label_start', 'Mulai')}</span> <span className="price-amount">{content.get('beranda', 'price_web', 'Rp 3.5jt')}</span></span>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/web-apk')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('icon-mobile-app.png')} alt="Mobile App Development Icon" className="icon" />
                  </div>
                  <h4>{content.get('beranda', 'service_mobile_title', 'Mobile App Development')}</h4>
                </div>
                <span className="tag">{content.get('beranda', 'tag_popular', 'Populer')}</span>
                <p>{content.get('beranda', 'service_mobile_desc', 'Aplikasi mobile iOS dan Android')}</p>
                <a className="price" href="/services" onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigateToPage('/services'); }}><span className="price-label">{content.get('beranda', 'price_label_start', 'Mulai')}</span> <span className="price-amount">{content.get('beranda', 'price_mobile', 'Rp 15jt')}</span></a>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/logo-design')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('icon-custom-merchandise.png')} alt="Logo Design Icon" className="icon" />
                  </div>
                  <h4>{content.get('beranda', 'service_logo_title', 'Logo Design')}</h4>
                </div>
                <span className="tag">{content.get('beranda', 'tag_popular', 'Populer')}</span>
                <p>{content.get('beranda', 'service_logo_short_desc', 'Logo dan brand identity package')}</p>
                <span className="price">{content.get('beranda', 'price_logo', 'Mulai Rp 1.5jt')}</span>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/social-media')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('icon-social-media.png')} alt="Social Media Management Icon" className="icon" />
                  </div>
                  <h4>{content.get('beranda', 'service_smm_title', 'Social Media Management')}</h4>
                </div>
                <span className="tag">{content.get('beranda', 'tag_popular', 'Populer')}</span>
                <p>{content.get('beranda', 'service_smm_desc', 'Kelola dan optimalkan akun sosial media Anda')}</p>
                <span className="price">{content.get('beranda', 'price_smm', 'Mulai Rp 2jt')}</span>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/content-creation')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('icon-content-creation.png')} alt="Content Creation Icon" className="icon" />
                  </div>
                  <h4>{content.get('beranda', 'service_content_title', 'Content Creation')}</h4>
                </div>
                <span className="tag">{content.get('beranda', 'tag_new', 'Baru')}</span>
                <p>{content.get('beranda', 'service_content_desc', 'Produksi konten berkualitas untuk sosial media')}</p>
                <span className="price">{content.get('beranda', 'price_content', 'Mulai Rp 1.5jt')}</span>
              </div>
            </div>

            <div className="services-header">
              <h3>{content.get('beranda', 'merch_services_header', 'Custom Merchandise & Corporate Gifts')}</h3>
              <span className="badge">
                <img src={getImg('icon-custom-merchandise.png')} alt="Custom Merchandise Icon" className="badge-icon" /> 
                {content.get('beranda', 'tv_premium_badge', 'Titik Visual Premium')}
              </span>
            </div>

            <div className="services-grid">
              <div className="service-card" onClick={() => navigateToPage('/custom-merchandise')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('icon-corporate-gift.png')} alt="Corporate Gifts Icon" className="icon" />
                  </div>
                  <h4>{content.get('beranda', 'service_gift_title', 'Corporate Gifts')}</h4>
                </div>
                <span className="tag">{content.get('beranda', 'tag_best_seller', 'Best Seller')}</span>
                <p>{content.get('beranda', 'service_gift_short_desc', 'Paket seminar kit, powerbank, flashdisk, dll.')}</p>
                <span className="price">{content.get('beranda', 'price_gift', 'Mulai Rp 50rb')}</span>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/custom-merchandise')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('icon-drinkware.png')} alt="Drinkware Collection Icon" className="icon" />
                  </div>
                  <h4>{content.get('beranda', 'service_drink_title', 'Drinkware Collection')}</h4>
                </div>
                <span className="tag">{content.get('beranda', 'tag_best_seller', 'Best Seller')}</span>
                <p>{content.get('beranda', 'service_drink_short_desc', 'Botol minum, tumbler, mug, gelas kaca, dan drink jar')}</p>
                <span className="price">{content.get('beranda', 'price_drink', 'Mulai Rp 35rb')}</span>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/custom-merchandise')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('icon-apparel.png')} alt="Apparel & Garment Icon" className="icon" />
                  </div>
                  <h4>{content.get('beranda', 'service_apparel_title', 'Apparel & Garment')}</h4>
                </div>
                <span className="tag">{content.get('beranda', 'tag_new', 'Baru')}</span>
                <p>{content.get('beranda', 'service_apparel_desc', 'Kaos, polo shirt, kemeja, jaket, dan topi custom')}</p>
                <span className="price">{content.get('beranda', 'price_apparel', 'Mulai Rp 75rb')}</span>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/custom-merchandise')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div className="icon-box">
                    <img src={getImg('icon-stationery.png')} alt="Stationery & Office Supplies Icon" className="icon" />
                  </div>
                  <h4>{content.get('beranda', 'service_stationery_title', 'Stationery & Office')}</h4>
                </div>
                <span className="tag">{content.get('beranda', 'tag_new', 'Baru')}</span>
                <p>{content.get('beranda', 'service_stationery_desc', 'Buku catatan, pulpen, kalender, dan id card')}</p>
                <span className="price">{content.get('beranda', 'price_stationery', 'Mulai Rp 15rb')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio" id="portfolio">
          <div className="container">
            <h2 className="portfolio-title">{content.get('beranda', 'portfolio_title', 'Portofolio Terbaru Titik Visual')}</h2>
            <p className="portfolio-subtitle">
              {content.get('beranda', 'portfolio_subtitle', 'Beberapa proyek pilihan yang telah kami kerjakan dengan sentuhan kreativitas dan keahlian.')}
            </p>

            <div className="portfolio-carousel">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className={`portfolio-card ${index === activePortfolioIndex ? 'active' : ''}`}
                  onClick={() => navigateToPage(item.url || '/portfolio')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-header">
                    <span className="year">{item.year}</span>
                    <span className="category">{item.category}</span>
                  </div>
                  <img src={getImg(item.image || 'portfolio-placeholder.png')} alt={item.title} className="card-image" />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="client-info">
                    <i className="fa-solid fa-user-tie"></i>
                    <span>{item.client}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="portfolio-navigation">
              <button className="nav-arrow prev" onClick={() => handlePortfolioNavigation('prev')}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <div className="portfolio-dots">
                {portfolioItems.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${index === activePortfolioIndex ? 'active' : ''}`}
                    onClick={() => setActivePortfolioIndex(index)}
                  ></span>
                ))}
              </div>
              <button className="nav-arrow next" onClick={() => handlePortfolioNavigation('next')}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </section>

        <ContactCTASection />
      </main>
    </div>
  );
};

export default TitikVisualWebsite;
