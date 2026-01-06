import React, { useState } from 'react';
import './style.css';
import { useContent } from '../content/ContentContext';
const getImg = (name: string) => {
  try {
    return require(`../img/${name}`);
  } catch {
    return '';
  }
};

function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const content = useContent();



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
            {/* Card 1: UI/UX Design */}
            <div className="category-card">
              <div className="card-icon purple">
                <img
                  src={getImg('ui-ux desain.png')}
                  alt={content.get('page-layanan', 'cat_uiux_icon_alt', 'UI/UX Design Icon')}
                  style={{ width: '64%', height: '64%', objectFit: 'contain', display: 'block', opacity: 1 }}
                />
              </div>
              <h3>{content.get('page-layanan', 'cat_uiux_title', 'UI/UX Design')}</h3>
              <p>{content.get('page-layanan', 'cat_uiux_desc', 'Desain interface yang user-friendly dan menarik untuk website dan aplikasi mobile')}</p>
              <a
                href={content.get('page-layanan', 'cta_uiux_href', '/ui-ux')}
                className="btn-detail btn-purple"
                style={{
                  background: 'linear-gradient(90deg, #A855F7, #EC4899)',
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
                aria-label={content.get('page-layanan', 'cat_uiux_aria_label', 'Lihat detail UI/UX Design')}
                tabIndex={0}
              >
                <i className="fas fa-arrow-right" style={{ marginRight: 8 }}></i>
                <span>{content.get('page-layanan', 'cta_uiux_label', 'Lihat Detail')}</span>
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
              <h3>{content.get('page-layanan', 'cat_webapk_title', 'Website & Aplikasi')}</h3>
              <p>{content.get('page-layanan', 'cat_webapk_desc', 'Website responsif dan aplikasi mobile dengan teknologi terdepan')}</p>
              <a
                href={content.get('page-layanan', 'cta_webapk_href', '/web-apk')}
                className="btn-detail btn-blue"
                style={{
                  background: 'linear-gradient(90deg, #3B82F6, #06B6D4)',
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
                aria-label="Lihat detail Website & Aplikasi"
                tabIndex={0}
              >
                <i className="fas fa-arrow-right" style={{ marginRight: 8 }}></i>
                <span>{content.get('page-layanan', 'cta_webapk_label', 'Lihat Detail')}</span>
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
              <h3>{content.get('page-layanan', 'cat_logo_title', 'Logo Design')}</h3>
              <p>{content.get('page-layanan', 'cat_logo_desc', 'Logo profesional yang mencerminkan identitas dan nilai brand Anda')}</p>
              <a
                href="/logo-design"
                className="btn-detail btn-orange"
                style={{
                  background: 'linear-gradient(90deg, #F97316, #EF4444)',
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
                aria-label="Lihat detail Logo Design"
                tabIndex={0}
              >
                <i className="fas fa-arrow-right" style={{ marginRight: 8 }}></i>
                <span>{content.get('page-layanan', 'cta_logo_label', 'Lihat Detail')}</span>
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
              <h3>{content.get('page-layanan', 'cat_social_title', 'Social Media Management')}</h3>
              <p>{content.get('page-layanan', 'cat_social_desc', 'Strategi konten dan manajemen media sosial untuk meningkatkan engagement')}</p>
              <a
                href={content.get('page-layanan', 'cta_social_href', '/social-media')}
                className="btn-detail btn-pink"
                style={{
                  background: 'linear-gradient(90deg, #EC4899, #F43F5E)',
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
                aria-label="Lihat detail Social Media Management"
                tabIndex={0}
              >
                <i className="fas fa-arrow-right" style={{ marginRight: 8 }}></i>
                <span>{content.get('page-layanan', 'cta_social_label', 'Lihat Detail')}</span>
              </a>
            </div>

            {/* Card 5: Custom Merchandise */}
            <div className="category-card">
              <div className="card-icon teal">
                <i
                  className="fas fa-gift"
                  aria-label={content.get('page-layanan', 'cat_merch_icon_label', 'Custom Merchandise icon')}
                  style={{ fontSize: 36, color: '#8B5CF6' }}
                ></i>
              </div>
              <h3>{content.get('page-layanan', 'cat_merch_title', 'Custom Merchandise')}</h3>
              <p>{content.get('page-layanan', 'cat_merch_desc', 'Berbagai pilihan merchandise custom berkualitas untuk kebutuhan branding')}</p>
              <a
                href={content.get('page-layanan', 'cta_merch_href', '/custom-merchandise')}
                className="btn-detail btn-teal"
                style={{
                  background: 'linear-gradient(90deg, #14B8A6, #0EA5E9)',
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
                aria-label={content.get('page-layanan', 'cat_merch_aria_label', 'Lihat detail Custom Merchandise')}
                tabIndex={0}
              >
                <i className="fas fa-arrow-right" style={{ marginRight: 8 }}></i>
                <span>{content.get('page-layanan', 'cta_merch_label', 'Lihat Detail')}</span>
              </a>
            </div>
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
            {/* UI/UX */}
            <div className="service-card-v2 accent-purple">
              <div className="card-image-container"><img src={getImg('ui_ux.png')} alt={content.get('page-layanan', 'svc_uiux_img_alt', 'UI/UX Design')} /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>{content.get('page-layanan', 'services.items.0.title', 'UI/UX Design')}</h3>
                <p className="description">{content.get('page-layanan', 'services.items.0.desc', 'Desain antarmuka yang intuitif dan pengalaman pengguna yang optimal.')}</p>
                <h4>{content.get('page-layanan', 'feature_title', 'Fitur Utama:')}</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_uiux_feat_1', 'UI/UX Research')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_uiux_feat_2', 'Wireframing')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_uiux_feat_3', 'Prototyping')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_uiux_feat_4', 'UI Design')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_uiux_feat_5', 'UX Writing')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_uiux_feat_6', 'Design System Catalog')}</li>
                </ul>
                <div className="info-row"><span>{content.get('page-layanan', 'label_price', 'Harga:')}</span><span className="price">{content.get('page-layanan', 'svc_uiux_price', 'Mulai dari Rp 1.500.000')}</span></div>
                <div className="info-row"><span>{content.get('page-layanan', 'label_duration', 'Durasi:')}</span><span>{content.get('page-layanan', 'svc_uiux_duration', '2-4 minggu')}</span></div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-pesan btn-grad-purple"><i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}</a>
              </div>
            </div>

            {/* Web Dev */}
            <div className="service-card-v2 accent-blue">
              <div className="card-image-container"><img src={getImg(content.get('page-layanan', 'services.items.1.icon', 'web.png'))} alt={content.get('page-layanan', 'svc_web_img_alt', 'Web Development')} /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>{content.get('page-layanan', 'services.items.1.title', 'Website Development')}</h3>
                <p className="description">{content.get('page-layanan', 'services.items.1.desc', 'Website profesional yang cepat, aman, dan responsif untuk bisnis Anda.')}</p>
                <h4>{content.get('page-layanan', 'feature_title', 'Fitur Utama:')}</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_web_feat_1', 'Responsive Design')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_web_feat_2', 'SEO Friendly')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_web_feat_3', 'CMS Integration')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_web_feat_4', 'Custom Features')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_web_feat_5', 'Maintenance & Support')}</li>
                </ul>
                <div className="info-row"><span>{content.get('page-layanan', 'label_price', 'Harga:')}</span><span className="price">{content.get('page-layanan', 'svc_web_price', 'Mulai dari Rp 2.500.000')}</span></div>
                <div className="info-row"><span>{content.get('page-layanan', 'label_duration', 'Durasi:')}</span><span>{content.get('page-layanan', 'svc_web_duration', '3-6 minggu')}</span></div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-pesan btn-grad-blue"><i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}</a>
              </div>
            </div>

            {/* Mobile App */}
            <div className="service-card-v2 accent-green">
              <div className="card-image-container"><img src={getImg('Mobile.png')} alt={content.get('page-layanan', 'svc_app_img_alt', 'Mobile App Development')} /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>{content.get('page-layanan', 'svc_app_title', 'Mobile App Development')}</h3>
                <p className="description">{content.get('page-layanan', 'svc_app_desc', 'Aplikasi mobile iOS dan Android yang powerful dengan teknologi terbaru.')}</p>
                <h4>{content.get('page-layanan', 'feature_title', 'Fitur Utama:')}</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_app_feat_1', 'iOS/Android App')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_app_feat_2', 'Cross-Platform')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_app_feat_3', 'Custom Features')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_app_feat_4', 'API Integration')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_app_feat_5', 'Maintenance & Support')}</li>
                </ul>
                <div className="info-row"><span>{content.get('page-layanan', 'label_price', 'Harga:')}</span><span className="price">{content.get('page-layanan', 'svc_app_price', 'Mulai dari Rp 3.500.000')}</span></div>
                <div className="info-row"><span>{content.get('page-layanan', 'label_duration', 'Durasi:')}</span><span>{content.get('page-layanan', 'svc_app_duration', '6-12 minggu')}</span></div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-pesan btn-grad-green"><i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}</a>
              </div>
            </div>

            {/* Logo Design */}
            <div className="service-card-v2 accent-orange">
              <div className="card-image-container"><img src={getImg('Logo Design.png')} alt={content.get('page-layanan', 'svc_logo_img_alt', 'Logo Design')} /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>{content.get('page-layanan', 'svc_logo_title', 'Logo Design')}</h3>
                <p className="description">{content.get('page-layanan', 'svc_logo_desc', 'Logo profesional yang mencerminkan identitas dan nilai brand Anda.')}</p>
                <h4>{content.get('page-layanan', 'feature_title', 'Fitur Utama:')}</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_logo_feat_1', 'Konsep Logo')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_logo_feat_2', 'Revisi Desain')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_logo_feat_3', 'File Master')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_logo_feat_4', 'Brand Guideline')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_logo_feat_5', 'Hak Cipta')}</li>
                </ul>
                <div className="info-row"><span>{content.get('page-layanan', 'label_price', 'Harga:')}</span><span className="price">{content.get('page-layanan', 'svc_logo_price', 'Mulai dari Rp 500.000')}</span></div>
                <div className="info-row"><span>{content.get('page-layanan', 'label_duration', 'Durasi:')}</span><span>{content.get('page-layanan', 'svc_logo_duration', '1-2 minggu')}</span></div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-pesan btn-grad-orange"><i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}</a>
              </div>
            </div>

            {/* Jasa Desain & Merchandise */}
            <div className="service-card-v2 accent-purple">
              <div className="card-image-container"><img src={getImg('img2.png')} alt={content.get('page-layanan', 'svc_brand_img_alt', 'Jasa Desain & Merchandise')} /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>{content.get('page-layanan', 'svc_brand_title', 'Brand Identity')}</h3>
                <p className="description">{content.get('page-layanan', 'svc_brand_desc', 'Paket lengkap identitas visual untuk membangun brand yang kuat dan memorable')}</p>
                <h4>{content.get('page-layanan', 'feature_title', 'Fitur Utama:')}</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_brand_feat_1', 'Logo Design')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_brand_feat_2', 'Color Palette')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_brand_feat_3', 'Typography System')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_brand_feat_4', 'Business Card Design')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_brand_feat_5', 'Letterhead & Stationery')}</li>
                </ul>
                <div className="info-row"><span>{content.get('page-layanan', 'label_price', 'Harga:')}</span><span className="price">{content.get('page-layanan', 'svc_brand_price', 'Mulai dari Rp 2.000.000')}</span></div>
                <div className="info-row"><span>{content.get('page-layanan', 'label_duration', 'Durasi:')}</span><span>{content.get('page-layanan', 'svc_brand_duration', '2-3 minggu')}</span></div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-pesan" style={{ background: 'linear-gradient(90deg, #A855F7, #06B6D4)' }}><i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}</a>
              </div>
            </div>

            {/* Social Media Management */}
            <div className="service-card-v2 accent-pink">
              <div className="card-image-container"><img src={getImg(content.get('page-layanan', 'services.items.2.icon', 'Social Media Management.png'))} alt={content.get('page-layanan', 'svc_social_img_alt', 'Social Media Management')} /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>{content.get('page-layanan', 'services.items.2.title', 'Social Media Management')}</h3>
                <p className="description">{content.get('page-layanan', 'services.items.2.desc', 'Pengelolaan konten, kalender, dan engagement untuk channel sosial Anda.')}</p>
                <h4>{content.get('page-layanan', 'feature_title', 'Fitur Utama:')}</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_social_feat_1', 'Strategi Konten')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_social_feat_2', 'Desain Konten')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_social_feat_3', 'Jadwal Posting')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_social_feat_4', 'Analisis Kinerja')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_social_feat_5', 'Laporan Bulanan')}</li>
                </ul>
                <div className="info-row"><span>{content.get('page-layanan', 'label_price', 'Harga:')}</span><span className="price">{content.get('page-layanan', 'svc_social_price', 'Mulai dari Rp 1.000.000')}</span></div>
                <div className="info-row"><span>{content.get('page-layanan', 'label_duration', 'Durasi:')}</span><span>{content.get('page-layanan', 'svc_social_duration', '1 bulan')}</span></div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-pesan btn-grad-pink"><i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}</a>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="service-card-v2 accent-purple">
              <div className="card-image-container"><img src={getImg('digital marketing.png')} alt={content.get('page-layanan', 'svc_digital_img_alt', 'Digital Marketing')} /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>{content.get('page-layanan', 'svc_digital_title', 'Digital Marketing')}</h3>
                <p className="description">{content.get('page-layanan', 'svc_digital_desc', 'Strategi pemasaran digital terukur untuk meningkatkan ROI bisnis Anda.')}</p>
                <h4>{content.get('page-layanan', 'feature_title', 'Fitur Utama:')}</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_digital_feat_1', 'SEO & SEM')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_digital_feat_2', 'Email Marketing')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_digital_feat_3', 'Social Media Ads')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_digital_feat_4', 'Content Marketing')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_digital_feat_5', 'Analisis & Laporan')}</li>
                </ul>
                <div className="info-row"><span>{content.get('page-layanan', 'label_price', 'Harga:')}</span><span className="price">{content.get('page-layanan', 'svc_digital_price', 'Mulai dari Rp 1.500.000')}</span></div>
                <div className="info-row"><span>{content.get('page-layanan', 'label_duration', 'Durasi:')}</span><span>{content.get('page-layanan', 'svc_digital_duration', '1 bulan')}</span></div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-pesan btn-grad-purple"><i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}</a>
              </div>
            </div>

            {/* Social Media Post Design */}
            <div className="service-card-v2 accent-blue">
              <div className="card-image-container"><img src={getImg('Social Media Feed Design.png')} alt={content.get('page-layanan', 'svc_feed_img_alt', 'Social Media Post Design')} /></div>
              <div className="card-content-v2" style={{ textAlign: 'left' }}>
                <h3>{content.get('page-layanan', 'svc_feed_title', 'Social Media Post Design')}</h3>
                <p className="description">{content.get('page-layanan', 'svc_feed_desc', 'Desain feed Instagram/TikTok yang konsisten dan menarik.')}</p>
                <h4>{content.get('page-layanan', 'feature_title', 'Fitur Utama:')}</h4>
                <ul className="features-list">
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_feed_feat_1', 'Feed Design')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_feed_feat_2', 'Story Design')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_feed_feat_3', 'Carousel Design')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_feed_feat_4', 'Infographic Design')}</li>
                  <li><i className="fas fa-check-circle"></i> {content.get('page-layanan', 'svc_feed_feat_5', 'Motion Graphic')}</li>
                </ul>
                <div className="info-row"><span>{content.get('page-layanan', 'label_price', 'Harga:')}</span><span className="price">{content.get('page-layanan', 'svc_feed_price', 'Mulai dari Rp 150.000')}</span></div>
                <div className="info-row"><span>{content.get('page-layanan', 'label_duration', 'Durasi:')}</span><span>{content.get('page-layanan', 'svc_feed_duration', '1 minggu')}</span></div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-pesan btn-grad-blue"><i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}</a>
              </div>
            </div>
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
            <div className="product-card accent-blue">
              <div className="product-image">
                <img src={getImg('Botol Minum & Tumbler Custom.png')} alt={content.get('page-layanan', 'prod_tumbler_img_alt', 'Botol Minum & Tumbler Custom')} />
              </div>
              <div className="product-content">
                <h3>{content.get('page-layanan', 'prod_tumbler_title', 'Botol Minum & Tumbler Custom')}</h3>
                <h4>{content.get('page-layanan', 'label_spec', 'Spesifikasi:')}</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_tumbler_feat_1', 'Material Stainless Steel/Plastik')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_tumbler_feat_2', 'Berbagai ukuran (350ml–1000ml)')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_tumbler_feat_3', 'Custom Logo & Design')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_tumbler_feat_4', 'Packaging Eksklusif')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_tumbler_feat_5', 'Minimum Order 50 pcs')}</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_price', 'Harga:')}</span>
                    <span className="price">{content.get('page-layanan', 'prod_tumbler_price', 'Mulai dari Rp 25.000/pcs')}</span>
                  </div>
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_production', 'Produksi:')}</span>
                    <span className="duration">{content.get('page-layanan', 'prod_tumbler_duration', '7-14 hari')}</span>
                  </div>
                </div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-product" style={{ background: 'linear-gradient(90deg, #3B82F6, #06B6D4)' }}>
                  <i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}
                </a>
              </div>
            </div>

            <div className="product-card accent-orange">
              <div className="product-image">
                <img src={getImg('mug.png')} alt={content.get('page-layanan', 'prod_mug_img_alt', 'Mug Custom')} />
              </div>
              <div className="product-content">
                <h3>{content.get('page-layanan', 'prod_mug_title', 'Mug Custom')}</h3>
                <h4>{content.get('page-layanan', 'label_spec', 'Spesifikasi:')}</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_mug_feat_1', 'Ceramic & Stainless Options')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_mug_feat_2', 'Full Color Printing')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_mug_feat_3', 'Heat-resistant Design')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_mug_feat_4', 'Custom Packaging')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_mug_feat_5', 'Minimum Order 24 pcs')}</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_price', 'Harga:')}</span>
                    <span className="price">{content.get('page-layanan', 'prod_mug_price', 'Mulai dari Rp 20.000/pcs')}</span>
                  </div>
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_production', 'Produksi:')}</span>
                    <span className="duration">{content.get('page-layanan', 'prod_mug_duration', '7-10 hari')}</span>
                  </div>
                </div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-product" style={{ background: 'linear-gradient(90deg, #F97316, #EF4444)' }}>
                  <i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}
                </a>
              </div>
            </div>

            <div className="product-card accent-pink">
              <div className="product-image">
                <img src={getImg('gelas kaca.png')} alt={content.get('page-layanan', 'prod_glass_img_alt', 'Gelas Kaca Premium')} />
              </div>
              <div className="product-content">
                <h3>{content.get('page-layanan', 'prod_glass_title', 'Gelas Kaca Premium')}</h3>
                <h4>{content.get('page-layanan', 'label_spec', 'Spesifikasi:')}</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_glass_feat_1', 'Material Kaca Berkualitas')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_glass_feat_2', 'Berbagai Model & Ukuran')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_glass_feat_3', 'Etching & Printing Options')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_glass_feat_4', 'Elegant Packaging')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_glass_feat_5', 'Minimum Order 50 pcs')}</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_price', 'Harga:')}</span>
                    <span className="price">{content.get('page-layanan', 'prod_glass_price', 'Mulai dari Rp 15.000/pcs')}</span>
                  </div>
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_production', 'Produksi:')}</span>
                    <span className="duration">{content.get('page-layanan', 'prod_glass_duration', '10-14 hari')}</span>
                  </div>
                </div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-product" style={{ background: 'linear-gradient(90deg, #A855F7, #EC4899)' }}>
                  <i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}
                </a>
              </div>
            </div>

            <div className="product-card accent-green">
              <div className="product-image">
                <img src={getImg('drink jar.png')} alt={content.get('page-layanan', 'prod_jar_img_alt', 'Drink Jar & Gelas Cup')} />
              </div>
              <div className="product-content">
                <h3>{content.get('page-layanan', 'prod_jar_title', 'Drink Jar & Gelas Cup')}</h3>
                <h4>{content.get('page-layanan', 'label_spec', 'Spesifikasi:')}</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_jar_feat_1', 'Mason Jar Style')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_jar_feat_2', 'Custom Cup Design')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_jar_feat_3', 'Food Grade Material')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_jar_feat_4', 'Creative Packaging')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_jar_feat_5', 'Minimum Order 50 pcs')}</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_price', 'Harga:')}</span>
                    <span className="price">{content.get('page-layanan', 'prod_jar_price', 'Mulai dari Rp 18.000/pcs')}</span>
                  </div>
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_production', 'Produksi:')}</span>
                    <span className="duration">{content.get('page-layanan', 'prod_jar_duration', '7-12 hari')}</span>
                  </div>
                </div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-product" style={{ background: 'linear-gradient(90deg, #16A34A, #059669)' }}>
                  <i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}
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
            <h2 className="section-title">{content.get('page-layanan', 'sect_bags_title', 'Custom Bags Collection')}</h2>
            <p className="section-subtitle">{content.get('page-layanan', 'sect_bags_subtitle', 'Berbagai jenis tas custom yang dapat disesuaikan dengan kebutuhan branding Anda.')}</p>
          </div>
          <div className="products-grid">
            <div className="product-card accent-pink">
              <div className="product-image">
                <img src={getImg('tas canvas.png')} alt={content.get('page-layanan', 'prod_totebag_img_alt', 'Totebag Kanvas Custom')} />
              </div>
              <div className="product-content">
                <h3>{content.get('page-layanan', 'prod_totebag_title', 'Totebag Kanvas Custom')}</h3>
                <h4>{content.get('page-layanan', 'label_spec', 'Spesifikasi:')}</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_totebag_feat_1', 'Material Kanvas Tebal')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_totebag_feat_2', 'Ukuran Standar')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_totebag_feat_3', 'Desain Full Color')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_totebag_feat_4', 'Cocok untuk Event')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_totebag_feat_5', 'Ramah Lingkungan')}</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_price', 'Harga:')}</span>
                    <span className="price">{content.get('page-layanan', 'prod_totebag_price', 'Mulai dari Rp 35.000/pcs')}</span>
                  </div>
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_production', 'Produksi:')}</span>
                    <span className="duration">{content.get('page-layanan', 'prod_totebag_duration', '7-14 hari')}</span>
                  </div>
                </div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-product" style={{ background: 'linear-gradient(90deg, #DB2777, #E11D48)' }}>
                  <i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}
                </a>
              </div>
            </div>

            <div className="product-card accent-blue">
              <div className="product-image">
                <img src={getImg('Tas Furing Spunbond.png')} alt={content.get('page-layanan', 'prod_spunbond_img_alt', 'Tas Spunbond Custom')} />
              </div>
              <div className="product-content">
                <h3>{content.get('page-layanan', 'prod_spunbond_title', 'Tas Spunbond Custom')}</h3>
                <h4>{content.get('page-layanan', 'label_spec', 'Spesifikasi:')}</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_spunbond_feat_1', 'Material Spunbond')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_spunbond_feat_2', 'Berbagai Ukuran')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_spunbond_feat_3', 'Desain Custom')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_spunbond_feat_4', 'Harga Ekonomis')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_spunbond_feat_5', 'Cocok untuk Promosi')}</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_price', 'Harga:')}</span>
                    <span className="price">{content.get('page-layanan', 'prod_spunbond_price', 'Mulai dari Rp 15.000/pcs')}</span>
                  </div>
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_production', 'Produksi:')}</span>
                    <span className="duration">{content.get('page-layanan', 'prod_spunbond_duration', '5-10 hari')}</span>
                  </div>
                </div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-product" style={{ background: 'linear-gradient(90deg, #3B82F6, #06B6D4)' }}>
                  <i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}
                </a>
              </div>
            </div>

            <div className="product-card accent-green">
              <div className="product-image">
                <img src={getImg('Tas Kertas & Plastik Custom.png')} alt={content.get('page-layanan', 'prod_paperbag_img_alt', 'Tas Belanja/Paper Bag Custom')} />
              </div>
              <div className="product-content">
                <h3>{content.get('page-layanan', 'prod_paperbag_title', 'Tas Belanja/Paper Bag Custom')}</h3>
                <h4>{content.get('page-layanan', 'label_spec', 'Spesifikasi:')}</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_paperbag_feat_1', 'Material Kertas Tebal')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_paperbag_feat_2', 'Desain Elegan')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_paperbag_feat_3', 'Ukuran Beragam')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_paperbag_feat_4', 'Cocok untuk Butik')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_paperbag_feat_5', 'Custom Logo/Brand')}</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_price', 'Harga:')}</span>
                    <span className="price">{content.get('page-layanan', 'prod_paperbag_price', 'Mulai dari Rp 10.000/pcs')}</span>
                  </div>
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_production', 'Produksi:')}</span>
                    <span className="duration">{content.get('page-layanan', 'prod_paperbag_duration', '7-14 hari')}</span>
                  </div>
                </div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-product" style={{ background: 'linear-gradient(90deg, #16A34A, #059669)' }}>
                  <i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}
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
            <h2 className="section-title">{content.get('page-layanan', 'sect_corporate_title', 'Corporate Gifts & Tech')}</h2>
            <p className="section-subtitle">{content.get('page-layanan', 'sect_corporate_subtitle', 'Pilihan hadiah korporat dan merchandise teknologi yang inovatif dan berkualitas.')}</p>
          </div>
          <div className="products-grid">
            <div className="product-card accent-green">
              <div className="product-image">
                <img src={getImg('Powerbank Custom.png')} alt={content.get('page-layanan', 'prod_powerbank_img_alt', 'Powerbank Custom')} />
              </div>
              <div className="product-content">
                <h3>{content.get('page-layanan', 'prod_powerbank_title', 'Powerbank Custom')}</h3>
                <h4>{content.get('page-layanan', 'label_spec', 'Spesifikasi:')}</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_powerbank_feat_1', 'Kapasitas 5000–20000 mAh')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_powerbank_feat_2', 'Fast Charging Support')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_powerbank_feat_3', 'Custom Logo Engraving')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_powerbank_feat_4', 'Premium Packaging')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_powerbank_feat_5', 'Minimum Order 25 pcs')}</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_price', 'Harga:')}</span>
                    <span className="price">{content.get('page-layanan', 'prod_powerbank_price', 'Mulai dari Rp 75.000/pcs')}</span>
                  </div>
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_production', 'Produksi:')}</span>
                    <span className="duration">{content.get('page-layanan', 'prod_powerbank_duration', '10-21 hari')}</span>
                  </div>
                </div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-product" style={{ background: 'linear-gradient(90deg, #16A34A, #059669)' }}>
                  <i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}
                </a>
              </div>
            </div>

            <div className="product-card accent-purple">
              <div className="product-image">
                <img src={getImg('placeholder.png')} alt={content.get('page-layanan', 'prod_flashdisk_img_alt', 'Flashdisk Custom')} />
              </div>
              <div className="product-content">
                <h3>{content.get('page-layanan', 'prod_flashdisk_title', 'Flashdisk Custom')}</h3>
                <h4>{content.get('page-layanan', 'label_spec', 'Spesifikasi:')}</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_flashdisk_feat_1', 'Kapasitas 4GB–128GB')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_flashdisk_feat_2', 'Custom Shape & Design')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_flashdisk_feat_3', 'Logo Engraving/Printing')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_flashdisk_feat_4', 'Data Preload Available')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_flashdisk_feat_5', 'Minimum Order 50 pcs')}</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_price', 'Harga:')}</span>
                    <span className="price">{content.get('page-layanan', 'prod_flashdisk_price', 'Mulai dari Rp 35.000/pcs')}</span>
                  </div>
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_production', 'Produksi:')}</span>
                    <span className="duration">{content.get('page-layanan', 'prod_flashdisk_duration', '7-14 hari')}</span>
                  </div>
                </div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-product" style={{ background: 'linear-gradient(90deg, #A855F7, #EC4899)' }}>
                  <i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}
                </a>
              </div>
            </div>

            <div className="product-card accent-green">
              <div className="product-image">
                <img src={getImg('Paket Seminar Kit.png')} alt="Paket Seminar Kit" />
              </div>
              <div className="product-content">
                <h3>{content.get('page-layanan', 'prod_seminar_title', 'Paket Seminar Kit')}</h3>
                <h4>{content.get('page-layanan', 'label_spec', 'Spesifikasi:')}</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_seminar_feat_1', 'Tas Seminar + Isi Lengkap')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_seminar_feat_2', 'Notebook & Pulpen Custom')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_seminar_feat_3', 'ID Card Holder')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_seminar_feat_4', 'Custom Packaging')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_seminar_feat_5', 'Minimum Order 25 set')}</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_price', 'Harga:')}</span>
                    <span className="price">{content.get('page-layanan', 'prod_seminar_price', 'Mulai dari Rp 45.000/set')}</span>
                  </div>
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_production', 'Produksi:')}</span>
                    <span className="duration">{content.get('page-layanan', 'prod_seminar_duration', '10-21 hari')}</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #A855F7, #EC4899)' }}>
                  <i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}
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
            <h2 className="section-title">{content.get('page-layanan', 'sect_lifestyle_title', 'Lifestyle Merchandise')}</h2>
            <p className="section-subtitle">{content.get('page-layanan', 'sect_lifestyle_subtitle', 'Merchandise gaya hidup yang unik dan personal untuk kebutuhan promosi atau pribadi.')}</p>
          </div>
          <div className="products-grid">
            <div className="product-card accent-blue">
              <div className="product-image">
                <img src={getImg('Payung Custom Premium.png')} alt={content.get('page-layanan', 'prod_umbrella_img_alt', 'Payung Custom/Promosi')} />
              </div>
              <div className="product-content">
                <h3>{content.get('page-layanan', 'prod_umbrella_title', 'Payung Custom Premium')}</h3>
                <p className="product-description">{content.get('page-layanan', 'prod_umbrella_desc', 'Payung berkualitas tinggi dengan custom design untuk promosi yang efektif')}</p>
                <h4>{content.get('page-layanan', 'label_spec', 'Spesifikasi:')}</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_umbrella_feat_1', 'Material Berkualitas Tinggi')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_umbrella_feat_2', 'Tahan Angin & Air')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_umbrella_feat_3', 'Custom Print Full Color')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_umbrella_feat_4', 'Berbagai Ukuran')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_umbrella_feat_5', 'Minimum Order 50 pcs')}</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_price', 'Harga:')}</span>
                    <span className="price">{content.get('page-layanan', 'prod_umbrella_price', 'Mulai dari Rp 35.000/pcs')}</span>
                  </div>
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_production', 'Produksi:')}</span>
                    <span className="duration">{content.get('page-layanan', 'prod_umbrella_duration', '10-21 hari')}</span>
                  </div>
                </div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-product" style={{ background: 'linear-gradient(90deg, #3B82F6, #06B6D4)' }}>
                  <i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}
                </a>
              </div>
            </div>

            <div className="product-card accent-orange">
              <div className="product-image">
                <img src={getImg('Jam Dinding Custom.png')} alt="Jam Dinding Custom" />
              </div>
              <div className="product-content">
                <h3>{content.get('page-layanan', 'prod_clock_title', 'Jam Dinding Custom')}</h3>
                <p className="product-description">{content.get('page-layanan', 'prod_clock_desc', 'Jam dinding custom dengan design unik untuk dekorasi dan promosi')}</p>
                <h4>{content.get('page-layanan', 'label_spec', 'Spesifikasi:')}</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_clock_feat_1', 'Berbagai Bentuk & Ukuran')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_clock_feat_2', 'Mesin Jam Berkualitas')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_clock_feat_3', 'Custom Design & Logo')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_clock_feat_4', 'Silent Movement')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_clock_feat_5', 'Minimum Order 25 pcs')}</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_price', 'Harga:')}</span>
                    <span className="price">{content.get('page-layanan', 'prod_clock_price', 'Mulai dari Rp 45.000/pcs')}</span>
                  </div>
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_production', 'Produksi:')}</span>
                    <span className="duration">{content.get('page-layanan', 'prod_clock_duration', '14-21 hari')}</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #EA580C, #DC2626)' }}>
                  <i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}
                </a>
              </div>
            </div>

            <div className="product-card accent-pink">
              <div className="product-image">
                <img src={getImg('Pulpen & Pin Custom.png')} alt={content.get('page-layanan', 'prod_pen_img_alt', 'Pulpen & Pen Custom')} />
              </div>
              <div className="product-content">
                <h3>{content.get('page-layanan', 'prod_pen_title', 'Pulpen & Pin Custom')}</h3>
                <p className="product-description">{content.get('page-layanan', 'prod_pen_desc', 'Pulpen dan pin branded untuk promosi sehari-hari yang efektif')}</p>
                <h4>{content.get('page-layanan', 'label_spec', 'Spesifikasi:')}</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_pen_feat_1', 'Berbagai Model Pulpen')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_pen_feat_2', 'Pin Enamel/Metal')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_pen_feat_3', 'Custom Logo & Warna')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_pen_feat_4', 'Packaging Menarik')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_pen_feat_5', 'Minimum Order 100 pcs')}</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_price', 'Harga:')}</span>
                    <span className="price">{content.get('page-layanan', 'prod_pen_price', 'Mulai dari Rp 5.000/pcs')}</span>
                  </div>
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_production', 'Produksi:')}</span>
                    <span className="duration">{content.get('page-layanan', 'prod_pen_duration', '7-14 hari')}</span>
                  </div>
                </div>
                <a href="https://wa.me/6281804376001" className="btn-product" style={{ background: 'linear-gradient(90deg, #DB2777, #E11D48)' }}>
                  <i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}
                </a>
              </div>
            </div>

            <div className="product-card accent-slate">
              <div className="product-image">
                <img src={getImg('Asbak & Aksesoris.png')} alt="Asbak & Aksesoris" />
              </div>
              <div className="product-content">
                <h3>{content.get('page-layanan', 'prod_ashtray_title', 'Asbak & Aksesoris')}</h3>
                <p className="product-description">{content.get('page-layanan', 'prod_ashtray_desc', 'Asbak custom dan berbagai aksesoris branded lainnya')}</p>
                <h4>{content.get('page-layanan', 'label_spec', 'Spesifikasi:')}</h4>
                <ul className="product-features">
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_ashtray_feat_1', 'Material Berkualitas')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_ashtray_feat_2', 'Custom Shape & Design')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_ashtray_feat_3', 'Logo Engraving')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_ashtray_feat_4', 'Packaging Eksklusif')}</li>
                  <li><i className="fas fa-check"></i> {content.get('page-layanan', 'prod_ashtray_feat_5', 'Minimum Order 50 pcs')}</li>
                </ul>
                <div className="product-info-grid">
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_price', 'Harga:')}</span>
                    <span className="price">{content.get('page-layanan', 'prod_ashtray_price', 'Mulai dari Rp 25.000/pcs')}</span>
                  </div>
                  <div className="info-item">
                    <span>{content.get('page-layanan', 'label_production', 'Produksi:')}</span>
                    <span className="duration">{content.get('page-layanan', 'prod_ashtray_duration', '10-14 hari')}</span>
                  </div>
                </div>
                <a href={content.get('page-layanan', 'wa_link', 'https://wa.me/6281804376001')} className="btn-product" style={{ background: 'linear-gradient(90deg, #475569, #334155)' }}>
                  <i className="fas fa-shopping-cart"></i> {content.get('page-layanan', 'btn_order', 'Pesan Sekarang')}
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
            <h2 className="section-title">{content.get('page-layanan', 'sect_process_title', 'Proses Kerja Kami')}</h2>
            <p className="section-subtitle">{content.get('page-layanan', 'sect_process_subtitle', 'Langkah-langkah sederhana untuk memulai proyek Anda bersama kami.')}</p>
          </div>
          <div className="work-process-timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-comments"></i>
                <span className="step-number">1</span>
              </div>
              <h3 className="timeline-title">{content.get('page-layanan', 'step_consult_title', 'Konsultasi')}</h3>
              <p className="timeline-description">{content.get('page-layanan', 'step_consult_desc', 'Diskusikan kebutuhan dan visi proyek Anda dengan tim kami')}</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-file-invoice-dollar"></i>
                <span className="step-number">2</span>
              </div>
              <h3 className="timeline-title">{content.get('page-layanan', 'step_offer_title', 'Penawaran')}</h3>
              <p className="timeline-description">{content.get('page-layanan', 'step_offer_desc', 'Terima penawaran harga dan timeline yang sesuai kebutuhan')}</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-cogs"></i>
                <span className="step-number">3</span>
              </div>
              <h3 className="timeline-title">{content.get('page-layanan', 'step_process_title', 'Proses')}</h3>
              <p className="timeline-description">{content.get('page-layanan', 'step_process_desc', 'Tim kami mulai mengerjakan proyek sesuai kesepakatan')}</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-edit"></i>
                <span className="step-number">4</span>
              </div>
              <h3 className="timeline-title">{content.get('page-layanan', 'step_revision_title', 'Revisi & Finalisasi')}</h3>
              <p className="timeline-description">{content.get('page-layanan', 'step_revision_desc', 'Review hasil dan lakukan revisi hingga sesuai harapan')}</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-check-circle"></i>
                <span className="step-number">5</span>
              </div>
              <h3 className="timeline-title">{content.get('page-layanan', 'step_delivery_title', 'Delivery')}</h3>
              <p className="timeline-description">{content.get('page-layanan', 'step_delivery_desc', 'Terima hasil akhir proyek yang telah diselesaikan')}</p>
            </div>
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
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                <h3>{content.get('page-layanan', 'faq_1_q', 'Bagaimana cara memesan layanan atau produk?')}</h3>
                <span className={`toggle-icon ${activeFaq === 1 ? 'active' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${activeFaq === 1 ? 'open' : ''}`}>
                <p>{content.get('page-layanan', 'faq_1_a', 'Anda dapat memesan layanan atau produk dengan menghubungi kami melalui WhatsApp, email, atau mengisi formulir kontak di website. Tim kami akan segera merespons dan membantu proses pemesanan Anda.')}</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(2)}>
                <h3>{content.get('page-layanan', 'faq_2_q', 'Berapa lama proses pengerjaan?')}</h3>
                <span className={`toggle-icon ${activeFaq === 2 ? 'active' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${activeFaq === 2 ? 'open' : ''}`}>
                <p>{content.get('page-layanan', 'faq_2_a', 'Waktu pengerjaan bervariasi tergantung jenis layanan dan kompleksitas proyek. Untuk desain logo sekitar 1-2 minggu, website 2-4 minggu, aplikasi mobile 6-12 minggu, dan merchandise custom 1-2 minggu setelah konfirmasi desain.')}</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(3)}>
                <h3>{content.get('page-layanan', 'faq_3_q', 'Apakah ada garansi untuk layanan yang diberikan?')}</h3>
                <span className={`toggle-icon ${activeFaq === 3 ? 'active' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${activeFaq === 3 ? 'open' : ''}`}>
                <p>{content.get('page-layanan', 'faq_3_a', 'Ya, kami memberikan garansi untuk layanan yang diberikan. Untuk website dan aplikasi, kami memberikan garansi maintenance gratis selama 1-3 bulan. Untuk produk merchandise, kami memberikan garansi kualitas produk sesuai dengan ketentuan yang berlaku.')}</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(4)}>
                <h3>{content.get('page-layanan', 'faq_4_q', 'Bagaimana jika saya ingin revisi desain?')}</h3>
                <span className={`toggle-icon ${activeFaq === 4 ? 'active' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${activeFaq === 4 ? 'open' : ''}`}>
                <p>{content.get('page-layanan', 'faq_4_a', 'Kami menyediakan kesempatan revisi desain sesuai dengan paket yang Anda pilih. Umumnya, kami memberikan 2-3 kali revisi gratis. Revisi tambahan dapat dilakukan dengan biaya tambahan yang telah disepakati sebelumnya.')}</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(5)}>
                <h3>{content.get('page-layanan', 'faq_5_q', 'Apakah ada diskon untuk pemesanan jumlah besar?')}</h3>
                <span className={`toggle-icon ${activeFaq === 5 ? 'active' : ''}`}>+</span>
              </div>
              <div className={`faq-answer ${activeFaq === 5 ? 'open' : ''}`}>
                <p>{content.get('page-layanan', 'faq_5_a', 'Ya, kami memberikan diskon khusus untuk pemesanan dalam jumlah besar. Besaran diskon akan disesuaikan dengan volume pemesanan. Silakan hubungi tim kami untuk mendapatkan penawaran harga terbaik.')}</p>
              </div>
            </div>
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
