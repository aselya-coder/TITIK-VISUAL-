import React, { useState, useEffect } from 'react';
import CareersFooter from '../halaman-careers/CareersFooter';
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
  const handleConsultation = (e: React.MouseEvent, message: string) => {
    e.preventDefault();
    const base = content.get('page detail layanan web&apk', 'cta_whatsapp_href', 'https://wa.me/6281804376001');
    window.open(`${base}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleFooterLink = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (path.startsWith('#')) {
      const id = path.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.history.pushState(null, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo(0, 0);
    }
  };

  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: content.get('page detail layanan web&apk', 'pricing_plan_1_name', 'Landing Page'),
      price: content.get('page detail layanan web&apk', 'pricing_plan_1_price', 'Rp 3.500.000'),
      duration: content.get('page detail layanan web&apk', 'pricing_plan_1_duration', '1-2 minggu'),
      bestFor: content.get('page detail layanan web&apk', 'pricing_plan_1_bestFor', 'Best for: Campaign Marketing'),
      features: [
        content.get('page detail layanan web&apk', 'pricing_plan_1_feature_1', 'Single Page Design'),
        content.get('page detail layanan web&apk', 'pricing_plan_1_feature_2', 'Responsive Layout'),
        content.get('page detail layanan web&apk', 'pricing_plan_1_feature_3', 'Contact Form'),
        content.get('page detail layanan web&apk', 'pricing_plan_1_feature_4', 'SEO Basic'),
        content.get('page detail layanan web&apk', 'pricing_plan_1_feature_5', 'Google Analytics'),
        content.get('page detail layanan web&apk', 'pricing_plan_1_feature_6', '2x Revisions'),
        content.get('page detail layanan web&apk', 'pricing_plan_1_feature_7', '1 Bulan Support')
      ]
    },
    {
      id: 2,
      name: content.get('page detail layanan web&apk', 'pricing_plan_2_name', 'Business Website'),
      price: content.get('page detail layanan web&apk', 'pricing_plan_2_price', 'Rp 7.500.000'),
      duration: content.get('page detail layanan web&apk', 'pricing_plan_2_duration', '3-4 minggu'),
      bestFor: content.get('page detail layanan web&apk', 'pricing_plan_2_bestFor', 'Best for: Corporate & SME'),
      features: [
        content.get('page detail layanan web&apk', 'pricing_plan_2_feature_1', 'Multi-page Website (5-10 pages)'),
        content.get('page detail layanan web&apk', 'pricing_plan_2_feature_2', 'CMS Integration'),
        content.get('page detail layanan web&apk', 'pricing_plan_2_feature_3', 'Contact Forms'),
        content.get('page detail layanan web&apk', 'pricing_plan_2_feature_4', 'Gallery & Portfolio'),
        content.get('page detail layanan web&apk', 'pricing_plan_2_feature_5', 'SEO Optimization'),
        content.get('page detail layanan web&apk', 'pricing_plan_2_feature_6', 'Google Analytics'),
        content.get('page detail layanan web&apk', 'pricing_plan_2_feature_7', '3x Revisions'),
        content.get('page detail layanan web&apk', 'pricing_plan_2_feature_8', '3 Bulan Support')
      ],
      featured: true
    },
    {
      id: 3,
      name: content.get('page detail layanan web&apk', 'pricing_plan_3_name', 'E-Commerce'),
      price: content.get('page detail layanan web&apk', 'pricing_plan_3_price', 'Rp 15.000.000'),
      duration: content.get('page detail layanan web&apk', 'pricing_plan_3_duration', '4-6 minggu'),
      bestFor: content.get('page detail layanan web&apk', 'pricing_plan_3_bestFor', 'Best for: Online Store'),
      features: [
        content.get('page detail layanan web&apk', 'pricing_plan_3_feature_1', 'Full E-commerce Platform'),
        content.get('page detail layanan web&apk', 'pricing_plan_3_feature_2', 'Product Management'),
        content.get('page detail layanan web&apk', 'pricing_plan_3_feature_3', 'Shopping Cart & Checkout'),
        content.get('page detail layanan web&apk', 'pricing_plan_3_feature_4', 'Payment Gateway Integration'),
        content.get('page detail layanan web&apk', 'pricing_plan_3_feature_5', 'Admin Dashboard'),
        content.get('page detail layanan web&apk', 'pricing_plan_3_feature_6', 'Inventory Management'),
        content.get('page detail layanan web&apk', 'pricing_plan_3_feature_7', 'SEO & Analytics'),
        content.get('page detail layanan web&apk', 'pricing_plan_3_feature_8', 'Unlimited Revisions'),
        content.get('page detail layanan web&apk', 'pricing_plan_3_feature_9', '6 Bulan Support')
      ]
    }
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: content.get('page detail layanan web&apk', 'testimonial_1_text', '"Website yang dibuat Titik Visual sangat profesional dan user-friendly. Traffic website kami meningkat 200% setelah redesign!"'),
      clientName: content.get('page detail layanan web&apk', 'testimonial_1_clientName', 'Budi Santoso'),
      clientPosition: content.get('page detail layanan web&apk', 'testimonial_1_clientPosition', 'Marketing Director at PT. Maju Bersama'),
      clientImage: clientAvatar
    },
    {
      id: 2,
      text: content.get('page detail layanan web&apk', 'testimonial_2_text', '"E-commerce platform yang dibuat sangat membantu bisnis online kami. Penjualan meningkat drastis!"'),
      clientName: content.get('page detail layanan web&apk', 'testimonial_2_clientName', 'Sari Dewi'),
      clientPosition: content.get('page detail layanan web&apk', 'testimonial_2_clientPosition', 'Owner at Toko Online Fashionista'),
      clientImage: clientAvatar
    }
  ];

  return (
    <div className="website-app-page">
      

      {/* BREADCRUMB */}
      <section className="breadcrumb">
        <div className="container">
          <a href="/" onClick={(e) => { e.preventDefault(); window.history.pushState(null, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); window.scrollTo(0, 0); }}>{content.get('page detail layanan web&apk', 'breadcrumb_home', 'Home')}</a> / <a href="/services" onClick={(e) => { e.preventDefault(); window.history.pushState(null, '', '/services'); window.dispatchEvent(new PopStateEvent('popstate')); window.scrollTo(0, 0); }}>{content.get('page detail layanan web&apk', 'breadcrumb_services', 'Services')}</a> / <span>{content.get('page detail layanan web&apk', 'breadcrumb_current', 'Website & Aplikasi')}</span>
        </div>
      </section>

      <WebApkDetail />

      <WhyChooseWebsite />

      <TechStackSection />
      <ProcessSection />
      <div id="portfolio">
        <PortfolioWebsiteSection />
      </div>

      {/* Duplicated process and portfolio sections removed; using dedicated components above */}

      {/* PRICING SECTION */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-title">
            <h2>{content.get('page detail layanan web&apk', 'pricing_title', 'Paket Website')}</h2>
            <p>{content.get('page detail layanan web&apk', 'pricing_subtitle', 'Pilih paket yang sesuai dengan kebutuhan bisnis Anda')}</p>
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
                <a href="/contact" onClick={(e) => handleFooterLink(e, '/contact')} className={`btn ${plan.featured ? 'btn-gradient' : 'btn-light'}`}>
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
            <h2>{content.get('page detail layanan web&apk', 'testimonials_title', 'Apa Kata Klien Kami')}</h2>
            <p>{content.get('page detail layanan web&apk', 'testimonials_subtitle', 'Testimoni dari klien yang puas dengan website kami')}</p>
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
            <a 
              href={content.get('page detail layanan web&apk', 'cta_whatsapp_href', 'https://wa.me/6281804376001')} 
              className="btn btn-light" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => handleConsultation(e, 'Halo, saya ingin konsultasi tentang website & aplikasi')}
            >
              <i className="fa-regular fa-comment"></i> {content.get('page detail layanan web&apk', 'cta_whatsapp_label', 'WhatsApp Sekarang')}
            </a>
            <a 
              href={content.get('page detail layanan web&apk', 'cta_portfolio_href', '/portfolio')} 
              className="btn btn-outline-light"
              onClick={(e) => {
                e.preventDefault();
                alert('Portfolio download akan segera tersedia. Silakan hubungi kami untuk informasi lebih lanjut.');
              }}
            >
              <i className="fa-solid fa-download"></i> {content.get('page detail layanan web&apk', 'cta_portfolio_label', 'Download Portfolio')}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <CareersFooter />
    </div>
  );
};

export default WebsiteAppPage;
