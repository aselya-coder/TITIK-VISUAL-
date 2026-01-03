import React, { useEffect, useState } from 'react';
import './style.css';
import UiUxSection from './UiUxSection';
import { useContent } from '../content/ContentContext';
const getImg = (name: string) => {
  try {
    return require(`../img/${name}`);
  } catch {
    return '';
  }
};

interface Offering {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface ProcessStep {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  duration: string;
}

interface PortfolioItem {
  id: number;
  image: string;
  tag: string;
  title: string;
  description: string;
}

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  duration: string;
  features: string[];
  featured?: boolean;
}

interface Testimonial {
  id: number;
  text: string;
  authorName: string;
  authorPosition: string;
  authorImage: string;
}

const UIUXPage = () => {
  const content = useContent();
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  // Offerings data
  const offerings: Offering[] = [
    {
      id: 1,
      icon: 'fas fa-users',
      title: content.get('page layanan detail ui_ux', 'offering_1_title', 'User Research & Analysis'),
      description: content.get('page layanan detail ui_ux', 'offering_1_desc', 'Riset mendalam tentang target user dan behavior analysis')
    },
    {
      id: 2,
      icon: 'fas fa-desktop',
      title: content.get('page layanan detail ui_ux', 'offering_2_title', 'Wireframing & Prototyping'),
      description: content.get('page layanan detail ui_ux', 'offering_2_desc', 'Pembuatan wireframe dan prototype interaktif')
    },
    {
      id: 3,
      icon: 'fas fa-palette',
      title: content.get('page layanan detail ui_ux', 'offering_3_title', 'Visual Design System'),
      description: content.get('page layanan detail ui_ux', 'offering_3_desc', 'Design system yang konsisten dan scalable')
    },
    {
      id: 4,
      icon: 'far fa-eye',
      title: content.get('page layanan detail ui_ux', 'offering_4_title', 'Usability Testing'),
      description: content.get('page layanan detail ui_ux', 'offering_4_desc', 'Testing dengan real users untuk optimal experience')
    }
  ];

  // Process steps data
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      stepNumber: '01',
      title: content.get('page layanan detail ui_ux', 'process_1_title', 'Discovery & Research'),
      description: content.get('page layanan detail ui_ux', 'process_1_desc', 'Memahami business goals, target users, dan market research'),
      duration: content.get('page layanan detail ui_ux', 'process_1_duration', '1-2 hari')
    },
    {
      id: 2,
      stepNumber: '02',
      title: content.get('page layanan detail ui_ux', 'process_2_title', 'Information Architecture'),
      description: content.get('page layanan detail ui_ux', 'process_2_desc', 'Membuat struktur informasi dan user flow yang optimal'),
      duration: content.get('page layanan detail ui_ux', 'process_2_duration', '2-3 hari')
    },
    {
      id: 3,
      stepNumber: '03',
      title: content.get('page layanan detail ui_ux', 'process_3_title', 'Wireframing'),
      description: content.get('page layanan detail ui_ux', 'process_3_desc', 'Pembuatan wireframe low-fidelity dan high-fidelity'),
      duration: content.get('page layanan detail ui_ux', 'process_3_duration', '3-5 hari')
    },
    {
      id: 4,
      stepNumber: '04',
      title: content.get('page layanan detail ui_ux', 'process_4_title', 'Visual Design'),
      description: content.get('page layanan detail ui_ux', 'process_4_desc', 'Aplikasi visual design dan pembuatan design system'),
      duration: content.get('page layanan detail ui_ux', 'process_4_duration', '5-7 hari')
    },
    {
      id: 5,
      stepNumber: '05',
      title: content.get('page layanan detail ui_ux', 'process_5_title', 'Prototyping'),
      description: content.get('page layanan detail ui_ux', 'process_5_desc', 'Pembuatan prototype interaktif untuk testing'),
      duration: content.get('page layanan detail ui_ux', 'process_5_duration', '2-3 hari')
    },
    {
      id: 6,
      stepNumber: '06',
      title: content.get('page layanan detail ui_ux', 'process_6_title', 'Testing & Iteration'),
      description: content.get('page layanan detail ui_ux', 'process_6_desc', 'User testing dan refinement berdasarkan feedback'),
      duration: content.get('page layanan detail ui_ux', 'process_6_duration', '2-3 hari')
    }
  ];

  // Portfolio data
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      image: getImg('portfolio_UI_UX.png'),
      tag: content.get('page layanan detail ui_ux', 'portfolio_1_tag', 'Mobile App UI/UX'),
      title: content.get('page layanan detail ui_ux', 'portfolio_1_title', 'E-Commerce Mobile App'),
      description: content.get('page layanan detail ui_ux', 'portfolio_1_desc', 'Complete mobile app design untuk platform e-commerce dengan user experience yang optimal.')
    },
    {
      id: 2,
      image: getImg('portfolio_UI_UX.png'),
      tag: content.get('page layanan detail ui_ux', 'portfolio_2_tag', 'Web App UI/UX'),
      title: content.get('page layanan detail ui_ux', 'portfolio_2_title', 'SaaS Dashboard'),
      description: content.get('page layanan detail ui_ux', 'portfolio_2_desc', 'Dashboard design untuk SaaS platform dengan data visualization yang clear.')
    },
    {
      id: 3,
      image: getImg('portfolio_UI_UX.png'),
      tag: content.get('page layanan detail ui_ux', 'portfolio_3_tag', 'Mobile App UI/UX'),
      title: content.get('page layanan detail ui_ux', 'portfolio_3_title', 'Banking Mobile App'),
      description: content.get('page layanan detail ui_ux', 'portfolio_3_desc', 'Secure dan user-friendly banking app dengan modern interface.')
    }
  ];

  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: content.get('page layanan detail ui_ux', 'pricing_plan_1_name', 'Basic UI/UX'),
      price: content.get('page layanan detail ui_ux', 'pricing_plan_1_price', 'Rp 2.500.000'),
      duration: content.get('page layanan detail ui_ux', 'pricing_plan_1_duration', '2-3 minggu'),
      features: [
        content.get('page layanan detail ui_ux', 'pricing_plan_1_feature_1', 'User Research'),
        content.get('page layanan detail ui_ux', 'pricing_plan_1_feature_2', 'Wireframing (5 screens)'),
        content.get('page layanan detail ui_ux', 'pricing_plan_1_feature_3', 'Visual Design'),
        content.get('page layanan detail ui_ux', 'pricing_plan_1_feature_4', 'Basic Prototype'),
        content.get('page layanan detail ui_ux', 'pricing_plan_1_feature_5', '2x Revisions')
      ]
    },
    {
      id: 2,
      name: content.get('page layanan detail ui_ux', 'pricing_plan_2_name', 'Professional UI/UX'),
      price: content.get('page layanan detail ui_ux', 'pricing_plan_2_price', 'Rp 4.500.000'),
      duration: content.get('page layanan detail ui_ux', 'pricing_plan_2_duration', '3-4 minggu'),
      features: [
        content.get('page layanan detail ui_ux', 'pricing_plan_2_feature_1', 'Comprehensive User Research'),
        content.get('page layanan detail ui_ux', 'pricing_plan_2_feature_2', 'Wireframing (10 screens)'),
        content.get('page layanan detail ui_ux', 'pricing_plan_2_feature_3', 'Complete Visual Design'),
        content.get('page layanan detail ui_ux', 'pricing_plan_2_feature_4', 'Interactive Prototype'),
        content.get('page layanan detail ui_ux', 'pricing_plan_2_feature_5', 'Design System'),
        content.get('page layanan detail ui_ux', 'pricing_plan_2_feature_6', 'Usability Testing'),
        content.get('page layanan detail ui_ux', 'pricing_plan_2_feature_7', '3x Revisions')
      ],
      featured: true
    },
    {
      id: 3,
      name: content.get('page layanan detail ui_ux', 'pricing_plan_3_name', 'Enterprise UI/UX'),
      price: content.get('page layanan detail ui_ux', 'pricing_plan_3_price', 'Rp 8.000.000'),
      duration: content.get('page layanan detail ui_ux', 'pricing_plan_3_duration', '4-6 minggu'),
      features: [
        content.get('page layanan detail ui_ux', 'pricing_plan_3_feature_1', 'Full UX Research & Strategy'),
        content.get('page layanan detail ui_ux', 'pricing_plan_3_feature_2', 'Unlimited Screens'),
        content.get('page layanan detail ui_ux', 'pricing_plan_3_feature_3', 'Complete Design System'),
        content.get('page layanan detail ui_ux', 'pricing_plan_3_feature_4', 'Advanced Prototyping'),
        content.get('page layanan detail ui_ux', 'pricing_plan_3_feature_5', 'Multiple User Testing'),
        content.get('page layanan detail ui_ux', 'pricing_plan_3_feature_6', 'Developer Handoff'),
        content.get('page layanan detail ui_ux', 'pricing_plan_3_feature_7', 'Unlimited Revisions'),
        content.get('page layanan detail ui_ux', 'pricing_plan_3_feature_8', '3 Months Support')
      ]
    }
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: content.get('page layanan detail ui_ux', 'testimonial_1_text', '"Tim Titik Visual berhasil menciptakan UI/UX yang luar biasa untuk aplikasi kami. User engagement meningkat 40% setelah redesign!"'),
      authorName: content.get('page layanan detail ui_ux', 'testimonial_1_authorName', 'Sarah Johnson'),
      authorPosition: content.get('page layanan detail ui_ux', 'testimonial_1_authorPosition', 'Product Manager at TechStart Indonesia'),
      authorImage: getImg('ui_ux.png')
    },
    {
      id: 2,
      text: content.get('page layanan detail ui_ux', 'testimonial_2_text', '"Proses kerja yang sangat profesional dan hasil yang melampaui ekspektasi. Highly recommended!"'),
      authorName: content.get('page layanan detail ui_ux', 'testimonial_2_authorName', 'Ahmad Rizki'),
      authorPosition: content.get('page layanan detail ui_ux', 'testimonial_2_authorPosition', 'CEO at Digital Commerce'),
      authorImage: getImg('ui_ux.png')
    }
  ];

  return (
    <div className="uiux-page">
      

      {/* BREADCRUMB */}
      <section className="breadcrumb">
        <div className="container">
          <a href="/">{content.get('page layanan detail ui_ux', 'breadcrumb_home', 'Home')}</a> / <a href="/services">{content.get('page layanan detail ui_ux', 'breadcrumb_services', 'Services')}</a> / <span>{content.get('page layanan detail ui_ux', 'breadcrumb_current', 'UI/UX Design')}</span>
        </div>
      </section>

      <UiUxSection iconSrc={getImg('ui-ux desain.png')} imageSrc={getImg('ui_ux.png')} />

      {/* OFFERINGS SECTION */}
      <section className="offerings">
        <div className="container">
          <h2 className="section-title">{content.get('page layanan detail ui_ux', 'offerings_title', 'Apa yang Kami Tawarkan')}</h2>
          <p className="section-subtitle">{content.get('page layanan detail ui_ux', 'offerings_subtitle', 'Layanan UI/UX Design Komprehensif yang mencakup seluruh proses dari riset hingga implementasi')}</p>
          <div className="offerings-grid">
            {offerings.map(offering => (
              <div className="offering-card" key={offering.id}>
                <div className="icon-wrapper">
                  <i className={offering.icon}></i>
                </div>
                <h3>{offering.title}</h3>
                <p>{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process">
        <div className="container">
          <h2 className="section-title">{content.get('page layanan detail ui_ux', 'process_title', 'Proses Kerja Kami')}</h2>
          <p className="section-subtitle">{content.get('page layanan detail ui_ux', 'process_subtitle', 'Metodologi yang terbukti untuk hasil UI/UX yang optimal')}</p>
          <div className="process-grid">
            {processSteps.map(step => (
              <div className="process-card" key={step.id}>
                <div className="process-header">
                  <div className="process-number">{step.stepNumber}</div>
                  <h4>{step.title}</h4>
                </div>
                <p>{step.description}</p>
                <div className="process-duration">
                  <i className="far fa-clock"></i> {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="portfolio">
        <div className="container">
          <h2 className="section-title">{content.get('page layanan detail ui_ux', 'portfolio_title', 'Portfolio UI/UX Design')}</h2>
          <p className="section-subtitle">{content.get('page layanan detail ui_ux', 'portfolio_subtitle', 'Beberapa karya UI/UX Design terbaik kami')}</p>
          <div className="portfolio-grid">
            {portfolioItems.map(item => (
              <div className="portfolio-card" key={item.id}>
                <img src={item.image} alt={item.title} className="portfolio-image" />
                <div className="portfolio-content">
                  <span className="portfolio-tag">{item.tag}</span>
                  <h3 className="portfolio-title">{item.title}</h3>
                  <p className="portfolio-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="portfolio-cta">
            <a href="../page-portfolio/page-portfolio.tsx" className="btn btn-outline-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              {content.get('page layanan detail ui_ux', 'portfolio_button', 'Lihat Semua Portfolio')}
            </a>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">{content.get('page layanan detail ui_ux', 'pricing_title', 'Paket UI/UX Design')}</h2>
          <p className="section-subtitle">{content.get('page layanan detail ui_ux', 'pricing_subtitle', 'Pilih paket yang sesuai dengan kebutuhan proyek Anda')}</p>
          <div className="pricing-grid">
            {pricingPlans.map(plan => (
              <div className={`pricing-card ${plan.featured ? 'featured' : ''} ${plan.id === 1 ? 'basic' : ''} ${plan.id === 2 ? 'professional' : ''} ${plan.id === 3 ? 'enterprise' : ''}`} key={plan.id}>
                <h3>{plan.name}</h3>
                {(plan.id === 1 || plan.id === 2 || plan.id === 3) && <div className="price">{plan.price}</div>}
                <div className="duration">{plan.duration}</div>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}><i className="far fa-check-circle"></i> {feature}</li>
                  ))}
                </ul>
                <a href="../page-contact/page-contact.tsx" className={`btn ${plan.featured ? 'btn-gradient-blue' : 'btn-light'}`}>
                  <i className="fas fa-arrow-right"></i> {content.get('page layanan detail ui_ux', 'pricing_button_select', 'Pilih Paket')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">{content.get('page layanan detail ui_ux', 'testimonials_title', 'Apa Kata Klien Kami')}</h2>
          <p className="section-subtitle">{content.get('page layanan detail ui_ux', 'testimonials_subtitle', 'Testimoni dari klien yang puas dengan layanan UI/UX Design kami')}</p>
          <div className="testimonial-grid">
            {testimonials.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>{testimonial.text}</p>
                <div className="author">
                  <img src={testimonial.authorImage} alt={testimonial.authorName} />
                  <div>
                    <h4>{testimonial.authorName}</h4>
                    <span>{testimonial.authorPosition}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <h2>{content.get('page layanan detail ui_ux', 'cta_title', 'Siap Membuat UI/UX yang Luar Biasa?')}</h2>
          <p>{content.get('page layanan detail ui_ux', 'cta_subtitle', 'Konsultasikan kebutuhan UI/UX Design Anda dengan tim ahli kami secara gratis')}</p>
          <div className="cta-buttons">
            <a href={content.get('page layanan detail ui_ux', 'cta_whatsapp_href', 'https://wa.me/6281804376001')} className="btn btn-light" target="_blank" rel="noopener noreferrer">
              <i className="far fa-comment"></i> {content.get('page layanan detail ui_ux', 'cta_whatsapp_label', 'WhatsApp Sekarang')}
            </a>
            <a href={content.get('page layanan detail ui_ux', 'cta_portfolio_href', '/portfolio')} className="btn btn-outline-light">
              <i className="fas fa-download"></i> {content.get('page layanan detail ui_ux', 'cta_portfolio_label', 'Download Portfolio')}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column about">
              <img src={getImg('img.png')} alt={content.get('page layanan detail ui_ux', 'footer_logo_alt', 'Titik Visual Logo')} className="footer-logo" />
              <p>{content.get('page layanan detail ui_ux', 'footer_about', 'Spesialis UI/UX Design yang berfokus pada user experience dan business goals.')}</p>
            </div>
            <div className="footer-column">
              <h4>{content.get('page layanan detail ui_ux', 'footer_services_title', 'UI/UX Services')}</h4>
              <ul>
                <li><button onClick={() => window.location.href = '#user-research'} className="link-button">{content.get('page layanan detail ui_ux', 'footer_service_1', 'User Research')}</button></li>
                <li><button onClick={() => window.location.href = '#wireframing'} className="link-button">{content.get('page layanan detail ui_ux', 'footer_service_2', 'Wireframing')}</button></li>
                <li><button onClick={() => window.location.href = '#visual-design'} className="link-button">{content.get('page layanan detail ui_ux', 'footer_service_3', 'Visual Design')}</button></li>
                <li><button onClick={() => window.location.href = '#prototyping'} className="link-button">{content.get('page layanan detail ui_ux', 'footer_service_4', 'Prototyping')}</button></li>
                <li><button onClick={() => window.location.href = '#usability-testing'} className="link-button">{content.get('page layanan detail ui_ux', 'footer_service_5', 'Usability Testing')}</button></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{content.get('page layanan detail ui_ux', 'footer_resources_title', 'Resources')}</h4>
              <ul>
                <li><button onClick={() => window.location.href = '#design-process'} className="link-button">{content.get('page layanan detail ui_ux', 'footer_resource_1', 'Design Process')}</button></li>
                <li><button onClick={() => window.location.href = '#case-studies'} className="link-button">{content.get('page layanan detail ui_ux', 'footer_resource_2', 'Case Studies')}</button></li>
                <li><button onClick={() => window.location.href = '#design-system'} className="link-button">{content.get('page layanan detail ui_ux', 'footer_resource_3', 'Design System')}</button></li>
                <li><button onClick={() => window.location.href = '#ui-kit'} className="link-button">{content.get('page layanan detail ui_ux', 'footer_resource_4', 'UI Kit')}</button></li>
                <li><button onClick={() => window.location.href = '#blog'} className="link-button">{content.get('page layanan detail ui_ux', 'footer_resource_5', 'Blog')}</button></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{content.get('page layanan detail ui_ux', 'footer_contact_title', 'Kontak')}</h4>
              <p>{content.get('page layanan detail ui_ux', 'footer_contact_phone', '081804376001')}</p>
              <p>{content.get('page layanan detail ui_ux', 'footer_contact_email', 'titikvisualjogja@gmail.com')}</p>
              <p>{content.get('page layanan detail ui_ux', 'footer_contact_location', 'Yogyakarta, Indonesia')}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} {content.get('page layanan detail ui_ux', 'footer_copyright', 'Titik Visual. All rights reserved.')}</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={handleScrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'linear-gradient(90deg, #6366F1, #8B5CF6)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          opacity: showBackToTop ? 1 : 0,
          visibility: showBackToTop ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default UIUXPage;
