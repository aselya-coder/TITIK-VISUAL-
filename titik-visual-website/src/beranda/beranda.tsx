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
    return undefined as any;
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
  const getTitle = () => {
    const v = content.get('beranda', 'cta_card_title', '');
    if (typeof v === 'string' && v.trim() === '') {
      return content.get('beranda', 'contact_cta_title', 'Mari Berkreasi Bersama Titik Visual');
    }
    return v || content.get('beranda', 'contact_cta_title', 'Mari Berkreasi Bersama Titik Visual');
  };
  const getDesc = () => {
    const v = content.get('beranda', 'cta_card_desc', '');
    if (typeof v === 'string' && v.trim() === '') {
      return 'Konsultasikan kebutuhan UI/UX, web development, digital marketing, dan custom merchandise Anda dengan tim ahli Titik Visual. Dapatkan penawaran terbaik untuk proyek impian Anda!';
    }
    return v || 'Konsultasikan kebutuhan UI/UX, web development, digital marketing, dan custom merchandise Anda dengan tim ahli Titik Visual. Dapatkan penawaran terbaik untuk proyek impian Anda!';
  };
  return (
    <div className="cta-card">
      <div>
        <h3
          className="cta-title"
          style={{
            color: '#111827',
            background: 'none',
            WebkitBackgroundClip: 'initial',
            WebkitTextFillColor: 'initial'
          }}
        >
          {getTitle()}
        </h3>
        <p className="cta-desc">{getDesc()}</p>
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
              style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center' }}
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
              <h3
                style={{
                  margin: 0,
                  fontSize: 24,
                  fontWeight: 800,
                  background: 'linear-gradient(90deg, #3B82F6, #9333EA)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {content.get('beranda', 'digital_services_header', 'Digital Creative Services')}
              </h3>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '6px 10px',
                  borderRadius: 9999,
                  background: '#F3E8FF',
                  color: '#9333EA',
                  fontSize: 12,
                  fontWeight: 700,
                  border: '1px solid #E9D5FF'
                }}
              >
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                {content.get('beranda', 'tv_expertise_badge', 'Titik Visual Expertise')}
              </span>
            </div>

            <div className="services-grid">
              <div className="service-card" onClick={() => navigateToPage('/ui-ux')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'linear-gradient(180deg, #ECFDF5 0%, #F0F9FF 100%)',
                      display: 'grid',
                      placeItems: 'center',
                      boxShadow: 'inset 0 0 0 1px #E5E7EB'
                    }}
                  >
                    <i className="fa-solid fa-palette" style={{ color: '#9333EA', fontSize: 20 }}></i>
                  </div>
                  <h4>{content.get('beranda', 'service_uiux_title', 'UI/UX Design')}</h4>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '4px 10px',
                    borderRadius: 9999,
                    fontSize: 12,
                    fontWeight: 700,
                    background: '#F59E0B',
                    color: '#ffffff'
                  }}
                >
                  {content.get('beranda', 'tag_popular', 'Populer')}
                </span>
                <p>{content.get('beranda', 'service_uiux_short_desc', 'Desain interface yang user-friendly dan menarik')}</p>
                <span style={{ color: '#9333EA', fontWeight: 700 }}>{content.get('beranda', 'price_uiux', 'Mulai Rp 2.5jt')}</span>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/web-apk')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'linear-gradient(180deg, #ECFDF5 0%, #F0F9FF 100%)',
                      display: 'grid',
                      placeItems: 'center',
                      boxShadow: 'inset 0 0 0 1px #E5E7EB'
                    }}
                  >
                    <i className="fa-regular fa-window-maximize" style={{ color: '#9333EA', fontSize: 20 }}></i>
                  </div>
                  <h4>{content.get('beranda', 'service_web_title', 'Website Development')}</h4>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '4px 10px',
                    borderRadius: 9999,
                    fontSize: 12,
                    fontWeight: 700,
                    background: '#F59E0B',
                    color: '#ffffff'
                  }}
                >
                  {content.get('beranda', 'tag_popular', 'Populer')}
                </span>
                <p>{content.get('beranda', 'service_web_short_desc', 'Website responsif dan modern untuk bisnis')}</p>
                <span style={{ color: '#9333EA', fontWeight: 700 }}>{content.get('beranda', 'price_web', 'Mulai Rp 3.5jt')}</span>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/web-apk')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'linear-gradient(180deg, #ECFDF5 0%, #F0F9FF 100%)',
                      display: 'grid',
                      placeItems: 'center',
                      boxShadow: 'inset 0 0 0 1px #E5E7EB'
                    }}
                  >
                    <i className="fa-solid fa-mobile-screen-button" style={{ color: '#9333EA', fontSize: 20 }}></i>
                  </div>
                  <h4>{content.get('beranda', 'service_mobile_title', 'Mobile App Development')}</h4>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '4px 10px',
                    borderRadius: 9999,
                    fontSize: 12,
                    fontWeight: 700,
                    background: '#F59E0B',
                    color: '#ffffff'
                  }}
                >
                  {content.get('beranda', 'tag_popular', 'Populer')}
                </span>
                <p>{content.get('beranda', 'service_mobile_desc', 'Aplikasi mobile iOS dan Android')}</p>
                <span style={{ color: '#9333EA', fontWeight: 700 }}>{content.get('beranda', 'price_mobile', 'Mulai Rp 15jt')}</span>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/logo-design')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'linear-gradient(180deg, #ECFDF5 0%, #F0F9FF 100%)',
                      display: 'grid',
                      placeItems: 'center',
                      boxShadow: 'inset 0 0 0 1px #E5E7EB'
                    }}
                  >
                    <i className="fa-solid fa-pen-nib" style={{ color: '#9333EA', fontSize: 20 }}></i>
                  </div>
                  <h4>{content.get('beranda', 'service_logo_title', 'Logo Design')}</h4>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '4px 10px',
                    borderRadius: 9999,
                    fontSize: 12,
                    fontWeight: 700,
                    background: '#F59E0B',
                    color: '#ffffff'
                  }}
                >
                  {content.get('beranda', 'tag_popular', 'Populer')}
                </span>
                <p>{content.get('beranda', 'service_logo_short_desc', 'Logo dan brand identity package')}</p>
                <span style={{ color: '#9333EA', fontWeight: 700 }}>{content.get('beranda', 'price_logo', 'Mulai Rp 1.5jt')}</span>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/social-media')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'linear-gradient(180deg, #ECFDF5 0%, #F0F9FF 100%)',
                      display: 'grid',
                      placeItems: 'center',
                      boxShadow: 'inset 0 0 0 1px #E5E7EB'
                    }}
                  >
                    <i className="fa-solid fa-share-nodes" style={{ color: '#9333EA', fontSize: 20 }}></i>
                  </div>
                  <h4>{content.get('beranda', 'service_smm_title', 'Social Media Management')}</h4>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '4px 10px',
                    borderRadius: 9999,
                    fontSize: 12,
                    fontWeight: 700,
                    background: '#F59E0B',
                    color: '#ffffff'
                  }}
                >
                  {content.get('beranda', 'tag_popular', 'Populer')}
                </span>
                <p>{content.get('beranda', 'service_smm_desc', 'Kelola dan optimalkan akun sosial media Anda')}</p>
                <span style={{ color: '#9333EA', fontWeight: 700 }}>{content.get('beranda', 'price_smm', 'Mulai Rp 2jt')}</span>
              </div>

              <div className="service-card" onClick={() => navigateToPage('/social-media')} style={{ cursor: 'pointer' }}>
                <div className="service-card-header">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'linear-gradient(180deg, #ECFDF5 0%, #F0F9FF 100%)',
                      display: 'grid',
                      placeItems: 'center',
                      boxShadow: 'inset 0 0 0 1px #E5E7EB'
                    }}
                  >
                    <i className="fa-solid fa-bullhorn" style={{ color: '#9333EA', fontSize: 20 }}></i>
                  </div>
                  <h4>{content.get('beranda', 'service_marketing_title', 'Digital Marketing')}</h4>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '4px 10px',
                    borderRadius: 9999,
                    fontSize: 12,
                    fontWeight: 700,
                    background: '#F59E0B',
                    color: '#ffffff'
                  }}
                >
                  {content.get('beranda', 'tag_popular', 'Populer')}
                </span>
                <p>{content.get('beranda', 'service_marketing_desc', 'Strategi pemasaran digital yang efektif')}</p>
                <span style={{ color: '#9333EA', fontWeight: 700 }}>{content.get('beranda', 'price_marketing', 'Mulai Rp 2jt/bulan')}</span>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#FCE7F3',
                  color: '#EC4899',
                  fontSize: 12,
                  fontWeight: 700,
                  padding: '8px 12px',
                  borderRadius: 9999,
                  border: '1px solid #FBCFE8',
                  boxShadow: '0 4px 10px rgba(236, 72, 153, 0.15)'
                }}
              >
                <i className="fa-solid fa-gift"></i>
                {content.get('beranda', 'merch_premium_badge', 'Kualitas Premium')}
              </span>
              <h2
                style={{
                  marginTop: 24,
                  marginBottom: 20,
                  fontSize: 28,
                  fontWeight: 800,
                  background: 'linear-gradient(90deg, #F97316, #EC4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {content.get('beranda', 'merch_highlight_title', 'Custom Merchandise Titik Visual')}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 16 }}>
                {(content.get('beranda', 'merch_highlight.items', [
                  { icon: 'icon-drinkware.png', title: 'Custom Drinkware', badge: 'Terbaik', desc: 'Botol minum, tumbler, mug, gelas kaca custom', price: 'Mulai Rp 25rb/pcs' },
                  { icon: 'icon-custom-bag.png', title: 'Custom Bags', badge: 'Terbaik', desc: 'Totebag canvas, tas furing, tas kertas branded', price: 'Mulai Rp 15rb/pcs' },
                  { icon: 'icon-corporate-gift.png', title: 'Corporate Gifts', badge: 'Terbaik', desc: 'Powerbank, flashdisk, paket seminar kit', price: 'Mulai Rp 50rb/pcs' },
                  { icon: 'icon-lifestyle.png', title: 'Lifestyle Products', badge: 'Terbaik', desc: 'Payung custom, jam dinding, pulpen branded', price: 'Mulai Rp 30rb/pcs' },
                ]) || []).map((item: any, idx: number) => (
                  <a
                    key={idx}
                    href="/custom-merchandise"
                    onClick={(e) => { e.preventDefault(); navigateToPage('/custom-merchandise'); }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 12,
                      padding: 20,
                      borderRadius: 16,
                      background: '#ffffff',
                      border: '1px solid #E5E7EB',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
                      textDecoration: 'none',
                      color: '#111827'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div
                         style={{
                           width: 48,
                           height: 48,
                           borderRadius: 14,
                           background: 'rgba(16,185,129,0.12)',
                           display: 'grid',
                           placeItems: 'center'
                         }}
                       >
                         {(() => {
                           const t = (item.title || '').toLowerCase();
                           const iconClass =
                             t.includes('drink') ? 'fa-solid fa-mug-hot' :
                             t.includes('bag') ? 'fa-solid fa-bag-shopping' :
                             t.includes('lifestyle') ? 'fa-solid fa-umbrella' :
                             'fa-solid fa-gift';
                           return <i className={iconClass} style={{ color: '#F97316', fontSize: 20 }}></i>;
                         })()}
                       </div>
                       <i className="fa-regular fa-circle-right" style={{ color: '#9CA3AF' }}></i>
                     </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <h4 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{item.title}</h4>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '4px 10px',
                          borderRadius: 9999,
                          fontSize: 12,
                          fontWeight: 700,
                          background: item.badge === 'Terbaik' ? '#10B981' : '#F59E0B',
                          color: '#ffffff'
                        }}
                      >
                        {item.badge || 'Terbaik'}
                      </span>
                    </div>
                    <p style={{ margin: 0, color: '#6B7280' }}>{item.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ color: '#F97316', fontWeight: 700 }}>{item.price}</span>
                      <i className="fa-solid fa-arrow-right" style={{ color: '#F97316' }}></i>
                    </div>
                  </a>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
                <a
                  href="/services"
                  onClick={(e) => { e.preventDefault(); navigateToPage('/services'); }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '10px 16px',
                    borderRadius: 12,
                    textDecoration: 'none',
                    border: '1.5px solid #A78BFA',
                    color: '#9333EA',
                    fontWeight: 700,
                    background: '#ffffff'
                  }}
                >
                  <i className="far fa-eye"></i>
                  {content.get('beranda', 'merch_highlight_cta', 'Lihat Semua Layanan Titik Visual')}
                </a>
              </div>
              <div style={{ marginTop: 24 }}>
                <div className="ds-carousel">
                  <button aria-label="Prev" className="ds-prev">
                    <i className="fa-solid fa-chevron-left" style={{ color: '#6B7280' }}></i>
                  </button>
                  <button aria-label="Next" className="ds-next">
                    <i className="fa-solid fa-chevron-right" style={{ color: '#6B7280' }}></i>
                  </button>
                  <div className="ds-row">
                    <div style={{ flex: 1 }}>
                      <h3 style={{ color: '#ffffff', fontSize: 22, fontWeight: 800 }}>
                        {content.get('beranda', 'ds_carousel_title', 'Digital Creative Services')}
                      </h3>
                      <p style={{ color: '#F4F4F5', marginTop: 4 }}>
                        {content.get('beranda', 'ds_carousel_subtitle', 'Logo Design, Social Media Management, Brand Identity')}
                      </p>
                    </div>
                    <div className="ds-artwork">
                      <div
                        style={{
                          position: 'absolute',
                          right: 0,
                          top: 0,
                          width: 120,
                          height: 120,
                          borderRadius: 9999,
                          background: 'rgba(255,255,255,0.25)'
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          right: 30,
                          top: 30,
                          width: 60,
                          height: 60,
                          borderRadius: 9999,
                          background: 'rgba(255,255,255,0.35)',
                          display: 'grid',
                          placeItems: 'center'
                        }}
                      >
                        <i className="fa-regular fa-image" style={{ color: '#7C3AED', fontSize: 20 }}></i>
                      </div>
                    </div>
                    <a
                      href={content.get('beranda', 'ds_carousel_cta_href', 'https://wa.me/6281804376001')}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '10px 16px',
                        borderRadius: 12,
                        textDecoration: 'none',
                        background: 'linear-gradient(90deg, #F97316, #DC2626)',
                        color: '#ffffff',
                        fontWeight: 700,
                        boxShadow: '0 10px 22px rgba(249, 115, 22, 0.25)'
                        }}
                      >
                        <i className="fa-solid fa-phone"></i>
                        {content.get('beranda', 'ds_carousel_cta_label', 'Hubungi Titik Visual')}
                      </a>
                  </div>
                  <div className="ds-dots">
                    <span className="ds-dot active"></span>
                    <span className="ds-dot"></span>
                    <span className="ds-dot"></span>
                  </div>
                </div>
              </div>
              <section style={{ marginTop: 24, background: '#F8FAFC' }}>
                <div className="container" style={{ paddingTop: 28, paddingBottom: 28 }}>
                  <h2 style={{ textAlign: 'center', fontSize: 26, fontWeight: 800, color: '#111827' }}>
                    {content.get('beranda', 'achievements_title', 'Pencapaian Titik Visual')}
                  </h2>
                  <p style={{ textAlign: 'center', color: '#6B7280', marginTop: 6 }}>
                    {content.get('beranda', 'achievements_subtitle', 'Kepercayaan klien adalah prioritas utama kami')}
                  </p>
                  <div
                    className="achievements-grid"
                    style={{ display: 'grid', gap: 16, marginTop: 20 }}
                  >
                    {(content.get('beranda', 'achievements.items', [
                      { icon: 'fa-solid fa-bullseye', value: '500+', label: 'Proyek Selesai' },
                      { icon: 'fa-solid fa-award', value: '200+', label: 'Klien Puas' },
                      { icon: 'fa-regular fa-star', value: '5+', label: 'Tahun Pengalaman' },
                      { icon: 'fa-solid fa-bolt', value: '24/7', label: 'Support Titik Visual' }
                    ]) || []).map((item: any, idx: number) => (
                      <div
                        key={idx}
                        style={{
                          background: '#ffffff',
                          borderRadius: 16,
                          border: '1px solid #E5E7EB',
                          boxShadow: '0 6px 16px rgba(0,0,0,0.04)',
                          padding: 20,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 14
                        }}
                      >
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            background: 'linear-gradient(180deg, #F5F3FF 0%, #FAFAFF 100%)',
                            display: 'grid',
                            placeItems: 'center',
                            boxShadow: 'inset 0 0 0 1px #EDE9FE'
                          }}
                        >
                          <i className={item.icon || 'fa-regular fa-star'} style={{ color: '#9333EA', fontSize: 20 }}></i>
                        </div>
                        <div>
                          <div style={{ fontSize: 24, fontWeight: 800, color: '#111827', lineHeight: 1 }}>{item.value}</div>
                          <div style={{ fontSize: 12, color: '#6B7280' }}>{item.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
            <section style={{ marginTop: 24 }}>
              <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: 30, fontWeight: 800, color: '#1F2937' }}>
                  {content.get('beranda', 'portfolio_showcase_title', 'Portfolio Karya Titik Visual')}
                </h2>
                <p style={{ textAlign: 'center', color: '#6B7280', marginTop: 6 }}>
                  {content.get('beranda', 'portfolio_showcase_subtitle', 'Karya terbaik yang telah kami ciptakan untuk klien')}
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                    gap: 16,
                    marginTop: 20,
                    position: 'relative'
                  }}
                >
                  {(content.get('beranda', 'portfolio_showcase.items', [
                    { year: '2024', label: 'Merchandise by Titik Visual', title: 'Custom Merchandise Package', desc: 'Paket merchandise lengkap termasuk tumbler, totebag, dan corporate gifts untuk event perusahaan.', client: 'PT. Teknologi Maju', gradient: 'linear-gradient(180deg, #10B981 0%, #34D399 100%)', link: '/portfolio' },
                    { year: '2024', label: 'Digital Marketing by Titik Visual', title: 'Social Media Management', desc: 'Pengelolaan social media lengkap dengan content creation, posting schedule, dan analytics reporting.', client: 'Fashion Brand Indonesia', gradient: 'linear-gradient(180deg, #6366F1 0%, #A78BFA 100%)', link: '/portfolio' },
                    { year: '2023', label: 'UI/UX Design by Titik Visual', title: 'E-Learning Platform UI/UX', desc: 'Design interface untuk platform e-learning dengan fokus pada user experience dan engagement siswa.', client: 'EduTech Indonesia', gradient: 'linear-gradient(180deg, #EC4899 0%, #F472B6 100%)', link: '/portfolio' }
                  ]) || []).map((item: any, idx: number) => (
                    <div
                      key={idx}
                      style={{
                        background: '#ffffff',
                        borderRadius: 12,
                        border: '1px solid #E5E7EB',
                        boxShadow: '0 10px 24px rgba(0,0,0,0.06)',
                        overflow: 'hidden'
                      }}
                    >
                      <div style={{ position: 'relative', height: 140, background: item.gradient }}>
                        <span
                          style={{
                            position: 'absolute',
                            right: 12,
                            top: 12,
                            fontSize: 12,
                            fontWeight: 700,
                            padding: '4px 8px',
                            borderRadius: 9999,
                            background: 'rgba(255,255,255,0.85)',
                            color: '#374151',
                            border: '1px solid #E5E7EB'
                          }}
                        >
                          {item.year}
                        </span>
                        <div
                          style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 64,
                            height: 64,
                            borderRadius: 9999,
                            background: 'rgba(255,255,255,0.35)',
                            display: 'grid',
                            placeItems: 'center'
                          }}
                        >
                          <i className="fa-regular fa-circle-play" style={{ color: '#ffffff', fontSize: 24 }}></i>
                        </div>
                      </div>
                      <div style={{ padding: 16 }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '4px 10px',
                            borderRadius: 9999,
                            fontSize: 12,
                            fontWeight: 700,
                            background: '#F3F4F6',
                            color: '#374151',
                            border: '1px solid #E5E7EB',
                            marginBottom: 8
                          }}
                        >
                          {item.label}
                        </span>
                        <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827' }}>{item.title}</h4>
                        <p style={{ marginTop: 8, color: '#6B7280' }}>{item.desc}</p>
                        <p style={{ marginTop: 12, color: '#6B7280' }}>
                          <span style={{ fontWeight: 600 }}>Client:</span> {item.client}
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <a
                            href={item.link || '/portfolio'}
                            onClick={(e) => { e.preventDefault(); navigateToPage(item.link || '/portfolio'); }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 28,
                              height: 28,
                              borderRadius: 8,
                              border: '1px solid #E5E7EB',
                              color: '#9333EA'
                            }}
                          >
                            <i className="fa-regular fa-square-arrow-up-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    aria-label="Prev"
                    style={{
                      position: 'absolute',
                      left: -8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 36,
                      height: 36,
                      borderRadius: 9999,
                      border: '1px solid #E5E7EB',
                      background: '#ffffff',
                      display: 'grid',
                      placeItems: 'center',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.06)',
                      cursor: 'pointer'
                    }}
                  >
                    <i className="fa-solid fa-chevron-left" style={{ color: '#6B7280' }}></i>
                  </button>
                  <button
                    aria-label="Next"
                    style={{
                      position: 'absolute',
                      right: -8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 36,
                      height: 36,
                      borderRadius: 9999,
                      border: '1px solid #E5E7EB',
                      background: '#ffffff',
                      display: 'grid',
                      placeItems: 'center',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.06)',
                      cursor: 'pointer'
                    }}
                  >
                    <i className="fa-solid fa-chevron-right" style={{ color: '#6B7280' }}></i>
                  </button>
                </div>
                <div style={{ display: 'grid', placeItems: 'center', marginTop: 16, gap: 10 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 9999, background: '#9333EA' }}></span>
                    <span style={{ width: 8, height: 8, borderRadius: 9999, background: '#E5E7EB' }}></span>
                    <span style={{ width: 8, height: 8, borderRadius: 9999, background: '#E5E7EB' }}></span>
                  </div>
                  <a
                    href="/portfolio"
                    onClick={(e) => { e.preventDefault(); navigateToPage('/portfolio'); }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '10px 16px',
                      borderRadius: 12,
                      textDecoration: 'none',
                      border: '1.5px solid #A78BFA',
                      color: '#9333EA',
                      fontWeight: 700,
                      background: '#ffffff'
                    }}
                  >
                    <i className="far fa-eye"></i>
                    {content.get('beranda', 'portfolio_showcase_cta', 'Lihat Semua Portfolio Titik Visual')}
                  </a>
                </div>
              </div>
            </section>
          </div>
          <section style={{ marginTop: 24 }}>
            <div className="container">
              <h2 style={{ textAlign: 'center', fontSize: 30, fontWeight: 800, color: '#1F2937' }}>
                {content.get('beranda', 'careers_title', 'Bergabung dengan Tim Titik Visual')}
              </h2>
              <p style={{ textAlign: 'center', color: '#6B7280', marginTop: 6 }}>
                {content.get('beranda', 'careers_subtitle', 'Kembangkan karir kreatif Anda bersama Titik Visual')}
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: 16,
                  marginTop: 20
                }}
              >
                {(content.get('beranda', 'careers.items', [
                  {
                    icon: 'fa-solid fa-palette',
                    title: 'UI/UX Designer',
                    subtitle: 'Bergabung dengan tim Titik Visual sebagai UI/UX Designer',
                    points: ['Mahasiswa DKV, Multimedia, atau relevan', 'Menguasai Figma, Adobe XD, Sketch', 'Memahami prinsip UI/UX design'],
                    gradient: 'linear-gradient(90deg, #9333EA, #EC4899)',
                    applyLabel: 'Lamar Sekarang',
                    href: '/program-magang'
                  },
                  {
                    icon: 'fa-solid fa-code',
                    title: 'Web Developer',
                    subtitle: 'Bangun website dan aplikasi web bersama tim Titik Visual',
                    points: ['Mahasiswa Informatika, Sistem Informasi', 'Menguasai HTML, CSS, JavaScript', 'Familiar dengan React, Next.js'],
                    gradient: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
                    applyLabel: 'Lamar Sekarang',
                    href: '/program-magang'
                  },
                  {
                    icon: 'fa-solid fa-bullhorn',
                    title: 'Digital Marketing Specialist',
                    subtitle: 'Kembangkan strategi digital marketing di Titik Visual',
                    points: ['Mahasiswa aktif (minimal semester 4)', 'Jurusan pemasaran, komunikasi, bisnis', 'Memahami SEO, Social Media, Email Marketing'],
                    gradient: 'linear-gradient(90deg, #06B6D4, #3B82F6)',
                    applyLabel: 'Lamar Sekarang',
                    href: '/program-magang'
                  },
                  {
                    icon: 'fa-solid fa-share-nodes',
                    title: 'Social Media Specialist',
                    subtitle: 'Kelola dan kembangkan media sosial klien Titik Visual',
                    points: ['Mahasiswa aktif (minimal semester 4)', 'Memahami platform media sosial', 'Kreatif dalam content creation'],
                    gradient: 'linear-gradient(90deg, #EC4899, #F97316)',
                    applyLabel: 'Lamar Sekarang',
                    href: '/program-magang'
                  }
                ]) || []).map((item: any, idx: number) => (
                  <div
                    key={idx}
                    style={{
                      background: '#ffffff',
                      borderRadius: 16,
                      border: '1px solid #E5E7EB',
                      boxShadow: '0 10px 24px rgba(0,0,0,0.06)',
                      padding: 20
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            background: 'linear-gradient(180deg, #F5F3FF 0%, #FAFAFF 100%)',
                            display: 'grid',
                            placeItems: 'center',
                            boxShadow: 'inset 0 0 0 1px #EDE9FE'
                          }}
                        >
                          <i className={item.icon || 'fa-solid fa-palette'} style={{ color: '#9333EA', fontSize: 20 }}></i>
                        </div>
                        <div>
                          <h4 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#111827' }}>{item.title}</h4>
                          <p style={{ margin: 0, color: '#6B7280' }}>{item.subtitle}</p>
                        </div>
                      </div>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '6px 10px',
                          borderRadius: 9999,
                          fontSize: 12,
                          fontWeight: 700,
                          background: '#F3E8FF',
                          color: '#9333EA',
                          border: '1px solid #E9D5FF'
                        }}
                      >
                        Magang
                      </span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: 14, display: 'grid', gap: 8 }}>
                      {(item.points || []).map((point: string, i: number) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#374151' }}>
                          <i className="fa-solid fa-check" style={{ color: '#10B981' }}></i>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={item.href || '/program-magang'}
                      onClick={(e) => { e.preventDefault(); navigateToPage(item.href || '/program-magang'); }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 10,
                        marginTop: 14,
                        width: '100%',
                        padding: '10px 16px',
                        borderRadius: 12,
                        textDecoration: 'none',
                        background: item.gradient,
                        color: '#ffffff',
                        fontWeight: 700,
                        boxShadow: '0 10px 22px rgba(0,0,0,0.08)'
                      }}
                    >
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                        <i className="fa-solid fa-arrow-right"></i>
                        {item.applyLabel || 'Lamar Sekarang'}
                      </span>
                      <span></span>
                    </a>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <a
                  href="/lowongan-kerja"
                  onClick={(e) => { e.preventDefault(); navigateToPage('/lowongan-kerja'); }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '10px 16px',
                    borderRadius: 12,
                    textDecoration: 'none',
                    border: '1.5px solid #A78BFA',
                    color: '#9333EA',
                    fontWeight: 700,
                    background: '#ffffff'
                  }}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                  {content.get('beranda', 'careers_cta', 'Lihat Semua Posisi')}
                </a>
              </div>
            </div>
          </section>
        </section>

        

        <ContactCTASection />
        <footer style={{ background: '#ffffff', padding: '24px 0' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {(() => {
                const src = getImg('img.png');
                return src ? <img src={src} alt="Titik Visual" style={{ height: 28, objectFit: 'contain' }} /> : <span style={{ fontWeight: 800, color: '#111827' }}>Titik Visual</span>;
              })()}
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, color: '#6B7280' }}>© {new Date().getFullYear()} Titik Visual. All rights reserved.</p>
              <p style={{ margin: 0, color: '#6B7280' }}>Digital Creative Studio Yogyakarta - Dari Ide Menjadi Kenyataan</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default TitikVisualWebsite;
