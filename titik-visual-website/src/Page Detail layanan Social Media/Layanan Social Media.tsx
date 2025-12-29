import React from 'react';
import './style.css';
import socialHeroImg from '../img/Social Media Management Dashboard.png';
import logoImg from '../img/img.png';

interface Platform {
  id: number;
  name: string;
  icon: string;
  targetAudience: string;
  services: string[];
}

interface PricingPlan {
  id: number;
  name: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  duration: string;
  bestFor: string;
  buttonClass?: string;
}

interface WorkflowStep {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  duration: string;
}

interface SuccessStory {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  metrics: {
    followers: string;
    engagement: string;
    reach: string;
  };
}

interface Testimonial {
  id: number;
  text: string;
  clientName: string;
  clientPosition: string;
  clientImage: string;
}

interface PackagePlan {
  id: number;
  name: string;
  price: string;
  duration: string;
  bestFor: string;
  features: string[];
  recommended?: boolean;
}

const SocialMediaPage = () => {
  // Platform data
  const platforms: Platform[] = [
    {
      id: 1,
      name: 'Instagram',
      icon: 'fab fa-instagram',
      targetAudience: '18-34 tahun, Visual-focused',
      services: ['Feed Posts', 'Stories', 'Reels', 'IGTV', 'Shopping Tags']
    },
    {
      id: 2,
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      targetAudience: '25-54 tahun, Community-focused',
      services: ['Posts', 'Stories', 'Events', 'Groups', 'Facebook Ads']
    },
    {
      id: 3,
      name: 'TikTok',
      icon: 'fab fa-tiktok',
      targetAudience: '16-24 tahun, Entertainment-focused',
      services: ['Short Videos', 'Trending Sounds', 'Hashtag Challenges', 'Live Streaming']
    },
    {
      id: 4,
      name: 'LinkedIn',
      icon: 'fas fa-users',
      targetAudience: '25-54 tahun, Professional-focused',
      services: ['Professional Posts', 'Articles', 'Company Updates', 'LinkedIn Ads']
    }
  ];

  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: 'Social Media Management',
      description: 'Pengelolaan lengkap akun media sosial bisnis Anda',
      icon: 'fas fa-chart-line',
      features: [
        'Content Planning & Strategy',
        'Daily Posting (5-7 posts/week)',
        'Community Management',
        'Hashtag Research',
        'Monthly Analytics Report',
        'Competitor Analysis'
      ],
      price: 'Rp 1.500.000/bulan',
      duration: 'Minimum 3 bulan',
      bestFor: 'Best for: Small Business',
      buttonClass: 'btn-pink'
    },
    {
      id: 2,
      name: 'Content Creation',
      description: 'Pembuatan konten visual yang menarik dan engaging',
      icon: 'fas fa-camera',
      features: [
        'Feed Design Templates',
        'Story Templates',
        'Highlight Covers',
        'Carousel Posts',
        'Video Content',
        'Brand Consistency'
      ],
      price: 'Rp 800.000/bulan',
      duration: 'Ongoing',
      bestFor: 'Best for: Visual Content',
      buttonClass: 'btn-blue'
    },
    {
      id: 3,
      name: 'Paid Ads Campaign',
      description: 'Kampanye iklan berbayar untuk reach dan conversion maksimal',
      icon: 'fas fa-bullseye',
      features: [
        'Campaign Strategy',
        'Ad Creative Design',
        'Audience Targeting',
        'Budget Optimization',
        'Performance Tracking',
        'A/B Testing'
      ],
      price: 'Rp 2.000.000/bulan',
      duration: 'Minimum 3 bulan',
      bestFor: 'Best for: Conversions',
      buttonClass: 'btn-green'
    }
  ];

  // Workflow steps data
  const workflowSteps: WorkflowStep[] = [
    {
      id: 1,
      stepNumber: '01',
      title: 'Brand Analysis',
      description: 'Analisis brand, kompetitor, dan target audience',
      duration: '1-2 hari'
    },
    {
      id: 2,
      stepNumber: '02',
      title: 'Strategy Development',
      description: 'Pembuatan strategi konten dan posting schedule',
      duration: '2-3 hari'
    },
    {
      id: 3,
      stepNumber: '03',
      title: 'Content Creation',
      description: 'Produksi konten visual dan copywriting',
      duration: 'Ongoing'
    },
    {
      id: 4,
      stepNumber: '04',
      title: 'Publishing & Management',
      description: 'Posting konten dan community management',
      duration: 'Daily'
    },
    {
      id: 5,
      stepNumber: '05',
      title: 'Analytics & Optimization',
      description: 'Monitoring performa dan optimasi strategi',
      duration: 'Weekly/Monthly'
    }
  ];

  // Success stories data
  const successStories: SuccessStory[] = [
    {
      id: 1,
      category: 'Fashion & Lifestyle',
      title: 'Fashion Brand Campaign',
      description: 'Kampanye social media untuk fashion brand dengan engagement rate 8.5%',
      image: '../img/succes stories.png',
      metrics: {
        followers: '+150%',
        engagement: '8.5%',
        reach: '2.5M'
      }
    },
    {
      id: 2,
      category: 'Food & Beverage',
      title: 'Restaurant Social Media',
      description: 'Pengelolaan social media restaurant dengan fokus visual appetizing',
      image: '../img/succes stories.png',
      metrics: {
        followers: '+200%',
        engagement: '12.3%',
        reach: '1.8M'
      }
    },
    {
      id: 3,
      category: 'Technology',
      title: 'Tech Startup Growth',
      description: 'Growth hacking social media untuk startup teknologi B2B',
      image: '../img/succes stories.png',
      metrics: {
        followers: '+300%',
        engagement: '6.8%',
        reach: '3.2M'
      }
    }
  ];

  // Package plans data
  const packagePlans: PackagePlan[] = [
    {
      id: 1,
      name: 'Starter Package',
      price: 'Rp 1.500.000/bulan',
      duration: 'Minimum 3 bulan',
      bestFor: 'Best for: Small Business',
      features: [
        '1 Platform (Instagram/Facebook)',
        '15 Posts per bulan',
        'Basic Analytics',
        'Community Management',
        'Hashtag Research',
        'Monthly Report'
      ]
    },
    {
      id: 2,
      name: 'Professional Package',
      price: 'Rp 2.800.000/bulan',
      duration: 'Minimum 3 bulan',
      bestFor: 'Best for: Growing Business',
      features: [
        '2 Platform (Instagram + Facebook)',
        '25 Posts per bulan',
        'Advanced Analytics',
        'Community Management',
        'Content Strategy',
        'Paid Ads Management',
        'Bi-weekly Report',
        'Competitor Analysis'
      ],
      recommended: true
    },
    {
      id: 3,
      name: 'Enterprise Package',
      price: 'Rp 4.500.000/bulan',
      duration: 'Minimum 6 bulan',
      bestFor: 'Best for: Enterprise',
      features: [
        'Multi-Platform Management',
        '40+ Posts per bulan',
        'Premium Analytics',
        '24/7 Community Management',
        'Advanced Content Strategy',
        'Full Paid Ads Campaign',
        'Weekly Report',
        'Influencer Collaboration',
        'Crisis Management'
      ]
    }
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: '"Social media management dari Titik Visual luar biasa! Engagement kami meningkat 300% dan penjualan online naik drastis."',
      clientName: 'Lisa Chen',
      clientPosition: 'Marketing Manager at Boutique Fashion',
      clientImage: '../img/Social Media Management Dashboard.png'
    },
    {
      id: 2,
      text: '"Tim sangat kreatif dalam membuat konten. Followers kami bertambah pesat dan customer baru terus berdatangan!"',
      clientName: 'Andi Wijaya',
      clientPosition: 'Owner at Cafe Nusantara',
      clientImage: '../img/Social Media Management Dashboard.png'
    }
  ];

  return (
    <div className="social-media-page">
      {/* TOP BAR & NAVBAR */}
      <div className="top-bar">
        <div className="top-left">
          <div className="item"><i className="fa-solid fa-phone"></i><span>081804376001</span></div>
          <div className="item"><i className="fa-solid fa-envelope"></i><span>titikvisualjogja@gmail.com</span></div>
        </div>
        <div className="top-right">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
      <nav className="main-nav">
        <div className="nav-left"><img src={logoImg} alt="Titik Visual Logo" className="logo" /></div>
        <ul className="nav-right">
          <li><a href="../beranda/beranda.tsx">Home</a></li>
          <li><a href="../page-about/page-about.tsx">Profile</a></li>
          <li className="active"><a href="../page-layanan/page-layanan.tsx">Layanan</a></li>
          <li><a href="../page-portfolio/page-portfolio.tsx">Portfolio</a></li>
          <li><a href="../page-contact/page-contact.tsx">Kontak</a></li>
        </ul>
        <div className="mobile-menu-toggle"><span></span><span></span><span></span></div>
      </nav>

      {/* BREADCRUMB */}
      <section className="breadcrumb">
        <div className="container">
          <a href="../beranda/beranda.tsx">Home</a> / <a href="../page-layanan/page-layanan.tsx">Services</a> / <span>Social Media Management</span>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="subtitle"><i className="fas fa-chart-line"></i>Social Media Management</span>
            <h1>
              <span className="gradient-text">Grow Your Brand</span>
              <span className="subtitle-text">di Social Media</span>
            </h1>
            <p>
              Bangun komunitas yang engaged dan tingkatkan brand awareness<br/>
              dengan strategi social media yang tepat. Dari content creation hingga<br/>
              paid ads, kami kelola semua aspek social media bisnis Anda.
            </p>
            <div className="hero-buttons">
              <a href="https://wa.me/6281804376001" className="btn btn-gradient" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-comment"></i> Konsultasi Gratis</a>
              <a href="../page-portfolio/page-portfolio.tsx" className="btn btn-outline"><i className="far fa-eye"></i> Lihat Portfolio</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image">
              <img src={socialHeroImg} alt="Social Media Management Dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="features">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Mengapa Pilih Social Media Management Kami?</h2>
            <p>Strategi yang data-driven dan content yang engaging untuk hasil yang terukur</p>
          </div>
          <div className="features-grid" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-item">
              <div className="icon"><i className="fas fa-bullseye"></i></div>
              <h3>Content Strategy</h3>
              <p>Strategi konten yang engaging dan sesuai target audience</p>
            </div>
            <div className="feature-item">
              <div className="icon"><i className="far fa-calendar-alt"></i></div>
              <h3>Daily Management</h3>
              <p>Pengelolaan harian posting dan community management</p>
            </div>
            <div className="feature-item">
              <div className="icon"><i className="fas fa-chart-bar"></i></div>
              <h3>Analytics & Reporting</h3>
              <p>Laporan performa dan insights untuk optimasi</p>
            </div>
            <div className="feature-item">
              <div className="icon"><i className="fas fa-bolt"></i></div>
              <h3>Paid Ads Management</h3>
              <p>Kelola iklan berbayar untuk reach dan conversion optimal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS SECTION */}
      <section id="platforms" className="platforms">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Platform yang Kami Kelola</h2>
            <p>Expertise di berbagai platform social media utama</p>
          </div>

          <div className="platforms-grid">
            {platforms.map(platform => (
              <div className="platform-card" key={platform.id}>
                <div className="platform-header">
                  <div className="platform-icon">
                    <i className={platform.icon}></i>
                  </div>
                  <div className="platform-info">
                    <h3>{platform.name}</h3>
                    <p>{platform.targetAudience}</p>
                  </div>
                </div>
                <div className="platform-services">
                  <span>Services:</span>
                  <div className="service-tags">
                    {platform.services.map((service, index) => (
                      <div className="service-tag" key={index}>{service}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="pricing">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Layanan Social Media Kami</h2>
            <p>Paket lengkap untuk semua kebutuhan social media bisnis Anda</p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map(plan => (
              <div className="pricing-card" key={plan.id}>
                <div className="pricing-header">
                  <div className="pricing-icon">
                    <i className={plan.icon}></i>
                  </div>
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                </div>
                <div className="pricing-features">
                  <h4>Yang Anda Dapatkan:</h4>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}><i className="far fa-check-circle"></i> {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-footer">
                  <div className="price-row">
                    <span>Harga:</span>
                    <span className="price-value">{plan.price}</span>
                  </div>
                  <div className="price-row">
                    <span>Durasi:</span>
                    <span className="duration-value">{plan.duration}</span>
                  </div>
                  <a href="../page-contact/page-contact.tsx" className={`btn-pricing ${plan.buttonClass}`}>
                    <i className="fas fa-arrow-right"></i> Mulai Sekarang
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="workflow">
        <div className="container">
          <div className="section-title">
            <h2>Proses Kerja Kami</h2>
            <p>Metodologi yang terbukti untuk social media yang sukses</p>
          </div>
          <div className="workflow-grid">
            {workflowSteps.map(step => (
              <div className="workflow-step" key={step.id}>
                <div className="step-number">{step.stepNumber}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="step-duration">
                    <i className="far fa-clock"></i>
                    <span>{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES SECTION */}
      <section className="success-stories">
        <div className="container">
          <div className="section-title">
            <h2>Success Stories</h2>
            <p>Hasil nyata dari kampanye social media yang kami kelola</p>
          </div>
          <div className="stories-grid">
            {successStories.map(story => (
              <div className="story-card" key={story.id}>
                <div className="story-image">
                  <img src={story.image} alt={story.title} />
                </div>
                <div className="story-content">
                  <span className="story-tag">{story.category}</span>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                  <div className="story-metrics">
                    <div className="metric-item">
                      <span className="metric-value">{story.metrics.followers}</span>
                      <span className="metric-label">Followers</span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-value">{story.metrics.engagement}</span>
                      <span className="metric-label">Engagement</span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-value">{story.metrics.reach}</span>
                      <span className="metric-label">Reach</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-stories">
            <a href="../page-about/page-about.tsx" className="btn-outline-stories"><i className="far fa-eye"></i> Lihat Semua Case Studies</a>
          </div>
        </div>
      </section>

      {/* PACKAGE PRICING SECTION */}
      <section className="package-pricing">
        <div className="container">
          <div className="section-title">
            <h2>Paket Social Media Management</h2>
            <p>Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
          </div>
          <div className="package-grid">
            {packagePlans.map(plan => (
              <div className={`package-card ${plan.recommended ? 'recommended' : ''}`} key={plan.id}>
                <div className="package-header">
                  <h3>{plan.name}</h3>
                  <p className="package-price">{plan.price}</p>
                  <p className="package-duration">{plan.duration}</p>
                  <div className="best-for">{plan.bestFor}</div>
                </div>
                <ul className="package-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}><i className="far fa-check-circle"></i> {feature}</li>
                  ))}
                </ul>
                <div className="package-footer">
                  <a href="../page-contact/page-contact.tsx" className={`btn-package ${plan.recommended ? 'btn-gradient' : ''}`}>
                    <i className="fas fa-arrow-right"></i> Pilih Paket
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Apa Kata Klien Kami</h2>
            <p>Testimoni dari klien yang puas dengan social media management kami</p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-client">
                  <img src={testimonial.clientImage} alt={testimonial.clientName} />
                  <div className="client-info">
                    <h4>{testimonial.clientName}</h4>
                    <span>{testimonial.clientPosition}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <div className="container">
          <h2>Siap Grow Your Social Media?</h2>
          <p>Konsultasikan strategi social media Anda dengan tim expert kami secara gratis</p>
          <div className="cta-buttons">
            <a href="https://wa.me/6281804376001" className="btn btn-light" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-comment"></i> WhatsApp Sekarang</a>
            <a href="../page-about/page-about.tsx" className="btn btn-outline-light"><i className="fas fa-download"></i> Download Case Study</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <img src="../img/img.png" alt="Titik Visual Logo" className="footer-logo" />
              <p>Spesialis social media management yang berfokus pada engagement dan growth yang terukur.</p>
            </div>
            <div className="footer-col">
              <h4>Social Media Services</h4>
              <ul className="footer-links">
                <li><button onClick={() => window.location.href = '#content-strategy'} className="link-button">Content Strategy</button></li>
                <li><button onClick={() => window.location.href = '#community-management'} className="link-button">Community Management</button></li>
                <li><button onClick={() => window.location.href = '#paid-ads'} className="link-button">Paid Ads Campaign</button></li>
                <li><button onClick={() => window.location.href = '#analytics'} className="link-button">Analytics & Reporting</button></li>
                <li><button onClick={() => window.location.href = '#influencer'} className="link-button">Influencer Marketing</button></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Platforms</h4>
              <ul className="footer-links">
                <li><button onClick={() => window.location.href = '#instagram'} className="link-button">Instagram</button></li>
                <li><button onClick={() => window.location.href = '#facebook'} className="link-button">Facebook</button></li>
                <li><button onClick={() => window.location.href = '#tiktok'} className="link-button">TikTok</button></li>
                <li><button onClick={() => window.location.href = '#linkedin'} className="link-button">LinkedIn</button></li>
                <li><button onClick={() => window.location.href = '#youtube'} className="link-button">YouTube</button></li>
              </ul>
            </div>
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

export default SocialMediaPage;
