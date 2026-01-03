import React from 'react';
import './style.css';
import clientAvatar from '../img/Website Development Mockup.png';
import logoImg from '../img/img.png';
import WebApkDetail from './WebApkDetail';
import WhyChooseWebsite from './WhyChooseWebsite';
import TechStackSection from './TechStackSection';
import ProcessSection from './ProcessSection';
import PortfolioWebsiteSection from './PortfolioWebsiteSection';
import { useContent } from '../content/ContentContext';

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  duration: string;
  bestFor: string;
  features: string[];
  featured?: boolean;
}

interface Testimonial {
  id: number;
  text: string;
  clientName: string;
  clientPosition: string;
  clientImage: string;
}

const WebsiteAppPage = () => {
  const content = useContent();
  // Process steps and portfolio data moved to dedicated components; removed local duplicates.

  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: 'Landing Page',
      price: 'Rp 3.500.000',
      duration: '1-2 minggu',
      bestFor: 'Best for: Campaign Marketing',
      features: [
        'Single Page Design',
        'Responsive Layout',
        'Contact Form',
        'SEO Basic',
        'Google Analytics',
        '2x Revisions',
        '1 Bulan Support'
      ]
    },
    {
      id: 2,
      name: 'Business Website',
      price: 'Rp 7.500.000',
      duration: '3-4 minggu',
      bestFor: 'Best for: Corporate & SME',
      features: [
        'Multi-page Website (5-10 pages)',
        'CMS Integration',
        'Contact Forms',
        'Gallery & Portfolio',
        'SEO Optimization',
        'Google Analytics',
        '3x Revisions',
        '3 Bulan Support'
      ],
      featured: true
    },
    {
      id: 3,
      name: 'E-Commerce',
      price: 'Rp 15.000.000',
      duration: '4-6 minggu',
      bestFor: 'Best for: Online Store',
      features: [
        'Full E-commerce Platform',
        'Product Management',
        'Shopping Cart & Checkout',
        'Payment Gateway Integration',
        'Admin Dashboard',
        'Inventory Management',
        'SEO & Analytics',
        'Unlimited Revisions',
        '6 Bulan Support'
      ]
    }
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: '"Website yang dibuat Titik Visual sangat profesional dan user-friendly. Traffic website kami meningkat 200% setelah redesign!"',
      clientName: 'Budi Santoso',
      clientPosition: 'Marketing Director at PT. Maju Bersama',
      clientImage: clientAvatar
    },
    {
      id: 2,
      text: '"E-commerce platform yang dibuat sangat membantu bisnis online kami. Penjualan meningkat drastis!"',
      clientName: 'Sari Dewi',
      clientPosition: 'Owner at Toko Online Fashionista',
      clientImage: clientAvatar
    }
  ];

  return (
    <div className="website-app-page">
      

      {/* BREADCRUMB */}
      <section className="breadcrumb">
        <div className="container">
          <a href="/">Home</a> / <a href="/services">Services</a> / <span>Website & Aplikasi</span>
        </div>
      </section>

      <WebApkDetail />

      <WhyChooseWebsite />

      <TechStackSection />
      <ProcessSection />
      <PortfolioWebsiteSection />

      {/* Duplicated process and portfolio sections removed; using dedicated components above */}

      {/* PRICING SECTION */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-title">
            <h2>Paket Website</h2>
            <p>Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map(plan => (
              <div className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={plan.id}>
                <h3 className="plan-name">{plan.name}</h3>
                <div className="price">{plan.price}</div>
                <div className="duration">{plan.duration}</div>
                <div className="best-for">{plan.bestFor}</div>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index}><i className="far fa-check-circle"></i> {feature}</li>
                  ))}
                </ul>
                <a href="/contact" className={`btn ${plan.featured ? 'btn-gradient' : 'btn-light'}`}>
                  <i className="fa-solid fa-arrow-right"></i> Pilih Paket
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          {/* Header Testimoni */}
          <div className="section-title">
            <h2>Apa Kata Klien Kami</h2>
            <p>Testimoni dari klien yang puas dengan website kami</p>
          </div>

          {/* Container Card */}
          <div className="testimonial-grid">
            {testimonials.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id}>
                {/* Rating (5 star) */}
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                {/* Text Testimoni */}
                <p className="text">{testimonial.text}</p>

                {/* Info Klien */}
                <div className="author">
                  <img src={testimonial.clientImage} alt={testimonial.clientName} />
                  <div className="info">
                    <h4>{testimonial.clientName}</h4>
                    <p>{testimonial.clientPosition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta" className="cta-section">
        <div className="container">
          <h2>{content.get('page detail layanan web&apk', 'cta_title', 'Siap Membuat Website & Aplikasi Impian Anda?')}</h2>
          <p>{content.get('page detail layanan web&apk', 'cta_subtitle', 'Konsultasikan kebutuhan website dan aplikasi Anda dengan tim developer ahli kami secara gratis')}</p>
          <div className="actions">
            <a href={content.get('page detail layanan web&apk', 'cta_whatsapp_href', 'https://wa.me/6281804376001')} className="btn btn-light" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-comment"></i> {content.get('page detail layanan web&apk', 'cta_whatsapp_label', 'WhatsApp Sekarang')}</a>
            <a href={content.get('page detail layanan web&apk', 'cta_portfolio_href', '/portfolio')} className="btn btn-outline-light"><i className="fa-solid fa-download"></i> {content.get('page detail layanan web&apk', 'cta_portfolio_label', 'Download Portfolio')}</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Footer Column 1: About */}
            <div className="footer-col">
              <img src={logoImg} alt="Titik Visual Logo" className="footer-logo" />
              <p>Spesialis website development yang berfokus pada performa, SEO, dan user experience.</p>
            </div>

            {/* Footer Column 2: Services */}
            <div className="footer-col">
              <h4>Website & App Services</h4>
              <ul className="footer-links">
                <li><button onClick={() => window.location.href = '#landing-page'} className="link-button">Landing Page</button></li>
                <li><button onClick={() => window.location.href = '#business-website'} className="link-button">Business Website</button></li>
                <li><button onClick={() => window.location.href = '#ecommerce'} className="link-button">E-Commerce</button></li>
                <li><button onClick={() => window.location.href = '#web-application'} className="link-button">Web Application</button></li>
                <li><button onClick={() => window.location.href = '#mobile-applications'} className="link-button">Mobile Applications</button></li>
                <li><button onClick={() => window.location.href = '#progressive-web-apps'} className="link-button">Progressive Web Apps</button></li>
                <li><button onClick={() => window.location.href = '#cms-integration'} className="link-button">CMS Integration</button></li>
              </ul>
            </div>

            {/* Footer Column 3: Technologies */}
            <div className="footer-col">
              <h4>Technologies</h4>
              <ul className="footer-links">
                <li><button onClick={() => window.location.href = '#react-nextjs'} className="link-button">React/Next.js</button></li>
                <li><button onClick={() => window.location.href = '#wordpress'} className="link-button">WordPress</button></li>
                <li><button onClick={() => window.location.href = '#shopify'} className="link-button">Shopify</button></li>
                <li><button onClick={() => window.location.href = '#custom-php'} className="link-button">Custom PHP</button></li>
                <li><button onClick={() => window.location.href = '#seo-optimization'} className="link-button">SEO Optimization</button></li>
              </ul>
            </div>

            {/* Footer Column 4: Contact */}
            <div className="footer-col">
              <h4>Kontak</h4>
              <ul className="footer-contact">
                <li>081804376001</li>
                <li>titikvisualjogja@gmail.com</li>
                <li>Yogyakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Titik Visual. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebsiteAppPage;
