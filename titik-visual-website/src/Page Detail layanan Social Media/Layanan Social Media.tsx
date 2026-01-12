import React, { useState, useEffect } from 'react';
import './style.css';
import { useContent } from '../content/ContentContext';
import socialHeroImg from '../img/Social Media Management Dashboard.png';
import logoImg from '../img/img.png';
import successStoriesImg from '../img/succes stories.png';

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
  const content = useContent();
  const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    // Scroll Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    // Back to Top Scroll Listener
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Smooth Scrolling for Anchor Links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      sections.forEach(section => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFooterLink = (path: string) => {
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

  const handleConsultation = (e: React.MouseEvent, message: string) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281804376001?text=${encodedMessage}`, '_blank');
  };

  // Platform data
  const platforms: Platform[] = [
    {
      id: 1,
      name: content.get('Page Detail layanan Social Media', 'platform_1_name', 'Instagram'),
      icon: 'fab fa-instagram',
      targetAudience: content.get('Page Detail layanan Social Media', 'platform_1_audience', '18-34 tahun, Visual-focused'),
      services: [
        content.get('Page Detail layanan Social Media', 'platform_1_service_1', 'Feed Posts'),
        content.get('Page Detail layanan Social Media', 'platform_1_service_2', 'Stories'),
        content.get('Page Detail layanan Social Media', 'platform_1_service_3', 'Reels'),
        content.get('Page Detail layanan Social Media', 'platform_1_service_4', 'IGTV'),
        content.get('Page Detail layanan Social Media', 'platform_1_service_5', 'Shopping Tags')
      ]
    },
    {
      id: 2,
      name: content.get('Page Detail layanan Social Media', 'platform_2_name', 'Facebook'),
      icon: 'fab fa-facebook-f',
      targetAudience: content.get('Page Detail layanan Social Media', 'platform_2_audience', '25-54 tahun, Community-focused'),
      services: [
        content.get('Page Detail layanan Social Media', 'platform_2_service_1', 'Posts'),
        content.get('Page Detail layanan Social Media', 'platform_2_service_2', 'Stories'),
        content.get('Page Detail layanan Social Media', 'platform_2_service_3', 'Events'),
        content.get('Page Detail layanan Social Media', 'platform_2_service_4', 'Groups'),
        content.get('Page Detail layanan Social Media', 'platform_2_service_5', 'Facebook Ads')
      ]
    },
    {
      id: 3,
      name: content.get('Page Detail layanan Social Media', 'platform_3_name', 'TikTok'),
      icon: 'fab fa-tiktok',
      targetAudience: content.get('Page Detail layanan Social Media', 'platform_3_audience', '16-24 tahun, Entertainment-focused'),
      services: [
        content.get('Page Detail layanan Social Media', 'platform_3_service_1', 'Short Videos'),
        content.get('Page Detail layanan Social Media', 'platform_3_service_2', 'Trending Sounds'),
        content.get('Page Detail layanan Social Media', 'platform_3_service_3', 'Hashtag Challenges'),
        content.get('Page Detail layanan Social Media', 'platform_3_service_4', 'Live Streaming')
      ]
    },
    {
      id: 4,
      name: content.get('Page Detail layanan Social Media', 'platform_4_name', 'LinkedIn'),
      icon: 'fas fa-users',
      targetAudience: content.get('Page Detail layanan Social Media', 'platform_4_audience', '25-54 tahun, Professional-focused'),
      services: [
        content.get('Page Detail layanan Social Media', 'platform_4_service_1', 'Professional Posts'),
        content.get('Page Detail layanan Social Media', 'platform_4_service_2', 'Articles'),
        content.get('Page Detail layanan Social Media', 'platform_4_service_3', 'Company Updates'),
        content.get('Page Detail layanan Social Media', 'platform_4_service_4', 'LinkedIn Ads')
      ]
    }
  ];

  // Pricing plans data
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: content.get('Page Detail layanan Social Media', 'pricing_1_name', 'Social Media Management'),
      description: content.get('Page Detail layanan Social Media', 'pricing_1_desc', 'Pengelolaan lengkap akun media sosial bisnis Anda'),
      icon: 'fas fa-chart-line',
      features: [
        content.get('Page Detail layanan Social Media', 'pricing_1_feature_1', 'Content Planning & Strategy'),
        content.get('Page Detail layanan Social Media', 'pricing_1_feature_2', 'Daily Posting (5-7 posts/week)'),
        content.get('Page Detail layanan Social Media', 'pricing_1_feature_3', 'Community Management'),
        content.get('Page Detail layanan Social Media', 'pricing_1_feature_4', 'Hashtag Research'),
        content.get('Page Detail layanan Social Media', 'pricing_1_feature_5', 'Monthly Analytics Report'),
        content.get('Page Detail layanan Social Media', 'pricing_1_feature_6', 'Competitor Analysis')
      ],
      price: content.get('Page Detail layanan Social Media', 'pricing_1_price', 'Rp 1.500.000/bulan'),
      duration: content.get('Page Detail layanan Social Media', 'pricing_1_duration', 'Minimum 3 bulan'),
      bestFor: content.get('Page Detail layanan Social Media', 'pricing_1_best_for', 'Best for: Small Business'),
      buttonClass: 'btn-pink'
    },
    {
      id: 2,
      name: content.get('Page Detail layanan Social Media', 'pricing_2_name', 'Content Creation'),
      description: content.get('Page Detail layanan Social Media', 'pricing_2_desc', 'Pembuatan konten visual yang menarik dan engaging'),
      icon: 'fas fa-camera',
      features: [
        content.get('Page Detail layanan Social Media', 'pricing_2_feature_1', 'Feed Design Templates'),
        content.get('Page Detail layanan Social Media', 'pricing_2_feature_2', 'Story Templates'),
        content.get('Page Detail layanan Social Media', 'pricing_2_feature_3', 'Highlight Covers'),
        content.get('Page Detail layanan Social Media', 'pricing_2_feature_4', 'Carousel Posts'),
        content.get('Page Detail layanan Social Media', 'pricing_2_feature_5', 'Video Content'),
        content.get('Page Detail layanan Social Media', 'pricing_2_feature_6', 'Brand Consistency')
      ],
      price: content.get('Page Detail layanan Social Media', 'pricing_2_price', 'Rp 800.000/bulan'),
      duration: content.get('Page Detail layanan Social Media', 'pricing_2_duration', 'Ongoing'),
      bestFor: content.get('Page Detail layanan Social Media', 'pricing_2_best_for', 'Best for: Visual Content'),
      buttonClass: 'btn-blue'
    },
    {
      id: 3,
      name: content.get('Page Detail layanan Social Media', 'pricing_3_name', 'Paid Ads Campaign'),
      description: content.get('Page Detail layanan Social Media', 'pricing_3_desc', 'Kampanye iklan berbayar untuk reach dan conversion maksimal'),
      icon: 'fas fa-bullseye',
      features: [
        content.get('Page Detail layanan Social Media', 'pricing_3_feature_1', 'Campaign Strategy'),
        content.get('Page Detail layanan Social Media', 'pricing_3_feature_2', 'Ad Creative Design'),
        content.get('Page Detail layanan Social Media', 'pricing_3_feature_3', 'Audience Targeting'),
        content.get('Page Detail layanan Social Media', 'pricing_3_feature_4', 'Budget Optimization'),
        content.get('Page Detail layanan Social Media', 'pricing_3_feature_5', 'Performance Tracking'),
        content.get('Page Detail layanan Social Media', 'pricing_3_feature_6', 'A/B Testing')
      ],
      price: content.get('Page Detail layanan Social Media', 'pricing_3_price', 'Rp 2.000.000/bulan'),
      duration: content.get('Page Detail layanan Social Media', 'pricing_3_duration', 'Minimum 3 bulan'),
      bestFor: content.get('Page Detail layanan Social Media', 'pricing_3_best_for', 'Best for: Conversions'),
      buttonClass: 'btn-green'
    }
  ];

  // Workflow steps data
  const workflowSteps: WorkflowStep[] = [
    {
      id: 1,
      stepNumber: '01',
      title: content.get('Page Detail layanan Social Media', 'workflow_1_title', 'Brand Analysis'),
      description: content.get('Page Detail layanan Social Media', 'workflow_1_desc', 'Analisis brand, kompetitor, dan target audience'),
      duration: content.get('Page Detail layanan Social Media', 'workflow_1_duration', '1-2 hari')
    },
    {
      id: 2,
      stepNumber: '02',
      title: content.get('Page Detail layanan Social Media', 'workflow_2_title', 'Strategy Development'),
      description: content.get('Page Detail layanan Social Media', 'workflow_2_desc', 'Pembuatan strategi konten dan posting schedule'),
      duration: content.get('Page Detail layanan Social Media', 'workflow_2_duration', '2-3 hari')
    },
    {
      id: 3,
      stepNumber: '03',
      title: content.get('Page Detail layanan Social Media', 'workflow_3_title', 'Content Creation'),
      description: content.get('Page Detail layanan Social Media', 'workflow_3_desc', 'Produksi konten visual dan copywriting'),
      duration: content.get('Page Detail layanan Social Media', 'workflow_3_duration', 'Ongoing')
    },
    {
      id: 4,
      stepNumber: '04',
      title: content.get('Page Detail layanan Social Media', 'workflow_4_title', 'Publishing & Management'),
      description: content.get('Page Detail layanan Social Media', 'workflow_4_desc', 'Posting konten dan community management'),
      duration: content.get('Page Detail layanan Social Media', 'workflow_4_duration', 'Daily')
    },
    {
      id: 5,
      stepNumber: '05',
      title: content.get('Page Detail layanan Social Media', 'workflow_5_title', 'Analytics & Optimization'),
      description: content.get('Page Detail layanan Social Media', 'workflow_5_desc', 'Monitoring performa dan optimasi strategi'),
      duration: content.get('Page Detail layanan Social Media', 'workflow_5_duration', 'Weekly/Monthly')
    }
  ];

  // Success stories data
  const successStories: SuccessStory[] = [
    {
      id: 1,
      category: content.get('Page Detail layanan Social Media', 'success_1_category', 'Fashion & Lifestyle'),
      title: content.get('Page Detail layanan Social Media', 'success_1_title', 'Fashion Brand Campaign'),
      description: content.get('Page Detail layanan Social Media', 'success_1_desc', 'Kampanye social media untuk fashion brand dengan engagement rate 8.5%'),
      image: successStoriesImg,
      metrics: {
        followers: content.get('Page Detail layanan Social Media', 'success_1_metric_followers', '+150%'),
        engagement: content.get('Page Detail layanan Social Media', 'success_1_metric_engagement', '8.5%'),
        reach: content.get('Page Detail layanan Social Media', 'success_1_metric_reach', '2.5M')
      }
    },
    {
      id: 2,
      category: content.get('Page Detail layanan Social Media', 'success_2_category', 'Food & Beverage'),
      title: content.get('Page Detail layanan Social Media', 'success_2_title', 'Restaurant Social Media'),
      description: content.get('Page Detail layanan Social Media', 'success_2_desc', 'Pengelolaan social media restaurant dengan fokus visual appetizing'),
      image: successStoriesImg,
      metrics: {
        followers: content.get('Page Detail layanan Social Media', 'success_2_metric_followers', '+200%'),
        engagement: content.get('Page Detail layanan Social Media', 'success_2_metric_engagement', '12.3%'),
        reach: content.get('Page Detail layanan Social Media', 'success_2_metric_reach', '1.8M')
      }
    },
    {
      id: 3,
      category: content.get('Page Detail layanan Social Media', 'success_3_category', 'Technology'),
      title: content.get('Page Detail layanan Social Media', 'success_3_title', 'Tech Startup Growth'),
      description: content.get('Page Detail layanan Social Media', 'success_3_desc', 'Growth hacking social media untuk startup teknologi B2B'),
      image: successStoriesImg,
      metrics: {
        followers: content.get('Page Detail layanan Social Media', 'success_3_metric_followers', '+300%'),
        engagement: content.get('Page Detail layanan Social Media', 'success_3_metric_engagement', '6.8%'),
        reach: content.get('Page Detail layanan Social Media', 'success_3_metric_reach', '3.2M')
      }
    }
  ];

  // Package plans data
  const packagePlans: PackagePlan[] = [
    {
      id: 1,
      name: content.get('Page Detail layanan Social Media', 'package_1_name', 'Starter Package'),
      price: content.get('Page Detail layanan Social Media', 'package_1_price', 'Rp 1.500.000/bulan'),
      duration: content.get('Page Detail layanan Social Media', 'package_1_duration', 'Minimum 3 bulan'),
      bestFor: content.get('Page Detail layanan Social Media', 'package_1_best_for', 'Best for: Small Business'),
      features: [
        content.get('Page Detail layanan Social Media', 'package_1_feature_1', '1 Platform (Instagram/Facebook)'),
        content.get('Page Detail layanan Social Media', 'package_1_feature_2', '15 Posts per bulan'),
        content.get('Page Detail layanan Social Media', 'package_1_feature_3', 'Basic Analytics'),
        content.get('Page Detail layanan Social Media', 'package_1_feature_4', 'Community Management'),
        content.get('Page Detail layanan Social Media', 'package_1_feature_5', 'Hashtag Research'),
        content.get('Page Detail layanan Social Media', 'package_1_feature_6', 'Monthly Report')
      ]
    },
    {
      id: 2,
      name: content.get('Page Detail layanan Social Media', 'package_2_name', 'Professional Package'),
      price: content.get('Page Detail layanan Social Media', 'package_2_price', 'Rp 2.800.000/bulan'),
      duration: content.get('Page Detail layanan Social Media', 'package_2_duration', 'Minimum 3 bulan'),
      bestFor: content.get('Page Detail layanan Social Media', 'package_2_best_for', 'Best for: Growing Business'),
      features: [
        content.get('Page Detail layanan Social Media', 'package_2_feature_1', '2 Platform (Instagram + Facebook)'),
        content.get('Page Detail layanan Social Media', 'package_2_feature_2', '25 Posts per bulan'),
        content.get('Page Detail layanan Social Media', 'package_2_feature_3', 'Advanced Analytics'),
        content.get('Page Detail layanan Social Media', 'package_2_feature_4', 'Community Management'),
        content.get('Page Detail layanan Social Media', 'package_2_feature_5', 'Content Strategy'),
        content.get('Page Detail layanan Social Media', 'package_2_feature_6', 'Paid Ads Management'),
        content.get('Page Detail layanan Social Media', 'package_2_feature_7', 'Bi-weekly Report'),
        content.get('Page Detail layanan Social Media', 'package_2_feature_8', 'Competitor Analysis')
      ],
      recommended: true
    },
    {
      id: 3,
      name: content.get('Page Detail layanan Social Media', 'package_3_name', 'Enterprise Package'),
      price: content.get('Page Detail layanan Social Media', 'package_3_price', 'Rp 4.500.000/bulan'),
      duration: content.get('Page Detail layanan Social Media', 'package_3_duration', 'Minimum 6 bulan'),
      bestFor: content.get('Page Detail layanan Social Media', 'package_3_best_for', 'Best for: Enterprise'),
      features: [
        content.get('Page Detail layanan Social Media', 'package_3_feature_1', 'Multi-Platform Management'),
        content.get('Page Detail layanan Social Media', 'package_3_feature_2', '40+ Posts per bulan'),
        content.get('Page Detail layanan Social Media', 'package_3_feature_3', 'Premium Analytics'),
        content.get('Page Detail layanan Social Media', 'package_3_feature_4', '24/7 Community Management'),
        content.get('Page Detail layanan Social Media', 'package_3_feature_5', 'Advanced Content Strategy'),
        content.get('Page Detail layanan Social Media', 'package_3_feature_6', 'Full Paid Ads Campaign'),
        content.get('Page Detail layanan Social Media', 'package_3_feature_7', 'Weekly Report'),
        content.get('Page Detail layanan Social Media', 'package_3_feature_8', 'Influencer Collaboration'),
        content.get('Page Detail layanan Social Media', 'package_3_feature_9', 'Crisis Management')
      ]
    }
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: content.get('Page Detail layanan Social Media', 'testimonial_1_text', '"Social media management dari Titik Visual luar biasa! Engagement kami meningkat 300% dan penjualan online naik drastis."'),
      clientName: content.get('Page Detail layanan Social Media', 'testimonial_1_client', 'Lisa Chen'),
      clientPosition: content.get('Page Detail layanan Social Media', 'testimonial_1_position', 'Marketing Manager at Boutique Fashion'),
      clientImage: socialHeroImg
    },
    {
      id: 2,
      text: content.get('Page Detail layanan Social Media', 'testimonial_2_text', '"Tim sangat kreatif dalam membuat konten. Followers kami bertambah pesat dan customer baru terus berdatangan!"'),
      clientName: content.get('Page Detail layanan Social Media', 'testimonial_2_client', 'Andi Wijaya'),
      clientPosition: content.get('Page Detail layanan Social Media', 'testimonial_2_position', 'Owner at Cafe Nusantara'),
      clientImage: socialHeroImg
    }
  ];

  return (
    <div className="social-media-page">
      

      {/* BREADCRUMB */}
      <section className="breadcrumb">
        <div className="container">
          <a href="/" onClick={(e) => { e.preventDefault(); handleFooterLink('/'); }}>{content.get('Page Detail layanan Social Media', 'breadcrumb_home', 'Home')}</a> / <a href="/services" onClick={(e) => { e.preventDefault(); handleFooterLink('/services'); }}>{content.get('Page Detail layanan Social Media', 'breadcrumb_services', 'Services')}</a> / <span>{content.get('Page Detail layanan Social Media', 'breadcrumb_current', 'Social Media Management')}</span>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="subtitle"><i className="fas fa-chart-line"></i>{content.get('Page Detail layanan Social Media', 'hero_badge', 'Social Media Management')}</span>
            <h1>
              <span className="gradient-text">{content.get('Page Detail layanan Social Media', 'hero_title_line1', 'Grow Your Brand')}</span>
              <span className="subtitle-text">{content.get('Page Detail layanan Social Media', 'hero_title_line2', 'di Social Media')}</span>
            </h1>
            <p>
              {content.get('Page Detail layanan Social Media', 'hero_desc_line1', 'Bangun komunitas yang engaged')}<br />
              {content.get('Page Detail layanan Social Media', 'hero_desc_line2', 'dan tingkatkan brand awareness')}<br />
              {content.get('Page Detail layanan Social Media', 'hero_desc_line3', 'dengan strategi social media yang tepat.')}<br />
              {content.get('Page Detail layanan Social Media', 'hero_desc_line4', 'Dari content creation hingga paid ads, kami kelola semua aspek social media bisnis Anda.')}
            </p>
            <div className="hero-buttons">
              <a 
                href={content.get('Page Detail layanan Social Media', 'hero_btn_consult_href', 'https://wa.me/6281804376001')} 
                className="btn btn-gradient" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => handleConsultation(e, 'Halo, saya ingin konsultasi gratis tentang social media management')}
              >
                <i className="fa-regular fa-comment"></i> {content.get('Page Detail layanan Social Media', 'hero_btn_consult_label', 'Konsultasi Gratis')}
              </a>
              <a 
                href={content.get('Page Detail layanan Social Media', 'hero_btn_portfolio_href', '/portfolio')} 
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  handleFooterLink('/portfolio');
                }}
              >
                <i className="far fa-eye"></i> {content.get('Page Detail layanan Social Media', 'hero_btn_portfolio_label', 'Lihat Portfolio')}
              </a>
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
            <h2>{content.get('Page Detail layanan Social Media', 'why_choose_title', 'Mengapa Pilih Social Media Management Kami?')}</h2>
            <p>{content.get('Page Detail layanan Social Media', 'why_choose_subtitle', 'Strategi yang data-driven dan content yang engaging untuk hasil yang terukur')}</p>
          </div>
          <div className="features-grid" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-item">
              <div className="icon"><i className="fas fa-bullseye"></i></div>
              <h3>{content.get('Page Detail layanan Social Media', 'feature_1_title', 'Content Strategy')}</h3>
              <p>{content.get('Page Detail layanan Social Media', 'feature_1_desc', 'Strategi konten yang engaging dan sesuai target audience')}</p>
            </div>
            <div className="feature-item">
              <div className="icon"><i className="far fa-calendar-alt"></i></div>
              <h3>{content.get('Page Detail layanan Social Media', 'feature_2_title', 'Daily Management')}</h3>
              <p>{content.get('Page Detail layanan Social Media', 'feature_2_desc', 'Pengelolaan harian posting dan community management')}</p>
            </div>
            <div className="feature-item">
              <div className="icon"><i className="fas fa-chart-bar"></i></div>
              <h3>{content.get('Page Detail layanan Social Media', 'feature_3_title', 'Analytics & Reporting')}</h3>
              <p>{content.get('Page Detail layanan Social Media', 'feature_3_desc', 'Laporan performa dan insights untuk optimasi')}</p>
            </div>
            <div className="feature-item">
              <div className="icon"><i className="fas fa-bolt"></i></div>
              <h3>{content.get('Page Detail layanan Social Media', 'feature_4_title', 'Paid Ads Management')}</h3>
              <p>{content.get('Page Detail layanan Social Media', 'feature_4_desc', 'Kelola iklan berbayar untuk reach dan conversion optimal.')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS SECTION */}
      <section id="platforms" className="platforms">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>{content.get('Page Detail layanan Social Media', 'platforms_title', 'Platform yang Kami Kelola')}</h2>
            <p>{content.get('Page Detail layanan Social Media', 'platforms_subtitle', 'Expertise di berbagai platform social media utama')}</p>
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
                  <span>{content.get('Page Detail layanan Social Media', 'platform_services_label', 'Services:')}</span>
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
            <h2>{content.get('Page Detail layanan Social Media', 'pricing_title', 'Layanan Social Media Kami')}</h2>
            <p>{content.get('Page Detail layanan Social Media', 'pricing_subtitle', 'Paket lengkap untuk semua kebutuhan social media bisnis Anda')}</p>
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
                  <h4>{content.get('Page Detail layanan Social Media', 'pricing_features_label', 'Yang Anda Dapatkan:')}</h4>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}><i className="far fa-check-circle"></i> {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-footer">
                  <div className="price-row">
                    <span>{content.get('Page Detail layanan Social Media', 'pricing_price_label', 'Harga:')}</span>
                    <span className="price-value">{plan.price}</span>
                  </div>
                  <div className="price-row">
                    <span>{content.get('Page Detail layanan Social Media', 'pricing_duration_label', 'Durasi:')}</span>
                    <span className="duration-value">{plan.duration}</span>
                  </div>
                  <a href={content.get('Page Detail layanan Social Media', 'pricing_btn_href', '/contact')} onClick={(e) => { e.preventDefault(); handleFooterLink('/contact'); }} className={`btn-pricing ${plan.buttonClass}`}>
                    <i className="fas fa-arrow-right"></i> {content.get('Page Detail layanan Social Media', 'pricing_btn_label', 'Mulai Sekarang')}
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
            <h2>{content.get('Page Detail layanan Social Media', 'workflow_title', 'Proses Kerja Kami')}</h2>
            <p>{content.get('Page Detail layanan Social Media', 'workflow_subtitle', 'Metodologi yang terbukti untuk social media yang sukses')}</p>
          </div>
          <div className="workflow-grid">
            {workflowSteps.map(step => (
              <div className="workflow-step-card" key={step.id}>
                <div className="step-number-circle">
                  <span>{step.stepNumber}</span>
                </div>
                <div className="step-content-wrapper">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <div className="step-time-badge">
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
            <h2>{content.get('Page Detail layanan Social Media', 'success_stories_title', 'Success Stories')}</h2>
            <p>{content.get('Page Detail layanan Social Media', 'success_stories_subtitle', 'Hasil nyata dari kampanye social media yang kami kelola')}</p>
          </div>
          <div className="stories-grid">
            {successStories.map(story => (
              <div className="story-card" key={story.id}>
                <div className="story-image-collage">
                  <img src={story.image} alt={story.title} />
                  <img src={story.image} alt={story.title} />
                  <img src={story.image} alt={story.title} />
                </div>
                <div className="story-content">
                  <span className="story-tag">{story.category}</span>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                  <div className="story-metrics">
                    <div className="metric-item">
                      <span className="metric-value">{story.metrics.followers}</span>
                      <span className="metric-label">{content.get('Page Detail layanan Social Media', 'metric_followers_label', 'Followers')}</span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-value">{story.metrics.engagement}</span>
                      <span className="metric-label">{content.get('Page Detail layanan Social Media', 'metric_engagement_label', 'Engagement')}</span>
                    </div>
                    <div className="metric-item">
                      <span className="metric-value">{story.metrics.reach}</span>
                      <span className="metric-label">{content.get('Page Detail layanan Social Media', 'metric_reach_label', 'Reach')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-stories">
            <a href="/portfolio" onClick={(e) => { e.preventDefault(); handleFooterLink('/portfolio'); }} className="btn-outline-stories"><i className="far fa-eye"></i> {content.get('Page Detail layanan Social Media', 'view_all_stories_label', 'Lihat Semua Case Studies')}</a>
          </div>
        </div>
      </section>

      {/* PACKAGE PRICING SECTION */}
      <section className="package-pricing">
        <div className="container">
          <div className="section-title">
            <h2>{content.get('Page Detail layanan Social Media', 'package_title', 'Paket Social Media Management')}</h2>
            <p>{content.get('Page Detail layanan Social Media', 'package_subtitle', 'Pilih paket yang sesuai dengan kebutuhan bisnis Anda')}</p>
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
                  <a href={content.get('Page Detail layanan Social Media', 'package_btn_href', '/contact')} onClick={(e) => { e.preventDefault(); handleFooterLink('/contact'); }} className={`btn-package ${plan.recommended ? 'btn-gradient' : ''}`}>
                    <i className="fas fa-arrow-right"></i> {content.get('Page Detail layanan Social Media', 'package_btn_label', 'Pilih Paket')}
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
            <h2>{content.get('Page Detail layanan Social Media', 'testimonials_title', 'Apa Kata Klien Kami')}</h2>
            <p>{content.get('Page Detail layanan Social Media', 'testimonials_subtitle', 'Testimoni dari klien yang puas dengan social media management kami')}</p>
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
          <h2>{content.get('Page Detail layanan Social Media', 'cta_bottom_title', 'Siap Grow Your Social Media?')}</h2>
          <p>{content.get('Page Detail layanan Social Media', 'cta_bottom_desc', 'Konsultasikan strategi social media Anda dengan tim expert kami secara gratis')}</p>
          <div className="cta-buttons">
            <a 
              href={content.get('Page Detail layanan Social Media', 'cta_whatsapp_href', 'https://wa.me/6281804376001')} 
              className="btn btn-light" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => handleConsultation(e, 'Halo, saya ingin konsultasi tentang website & aplikasi')}
            >
              <i className="far fa-comment"></i> {content.get('Page Detail layanan Social Media', 'cta_whatsapp_label', 'WhatsApp Sekarang')}
            </a>
            <a 
              href={content.get('Page Detail layanan Social Media', 'cta_portfolio_href', '/portfolio')} 
              className="btn btn-outline-light"
              onClick={(e) => {
                e.preventDefault();
                handleFooterLink('/portfolio');
              }}
            >
              <i className="fas fa-download"></i> {content.get('Page Detail layanan Social Media', 'cta_portfolio_label', 'Download Portfolio')}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <img src={logoImg} alt={content.get('Page Detail layanan Social Media', 'footer_logo_alt', 'Titik Visual Logo')} className="footer-logo" />
              <p>{content.get('Page Detail layanan Social Media', 'footer_desc', 'Spesialis social media management yang berfokus pada engagement dan growth yang terukur.')}</p>
            </div>
            <div className="footer-col">
              <h4>{content.get('Page Detail layanan Social Media', 'footer_services_title', 'Social Media Services')}</h4>
              <ul className="footer-links">
                <li><button onClick={() => handleFooterLink('#content-strategy')} className="link-button">{content.get('Page Detail layanan Social Media', 'footer_service_1', 'Content Strategy')}</button></li>
                <li><button onClick={() => handleFooterLink('#community-management')} className="link-button">{content.get('Page Detail layanan Social Media', 'footer_service_2', 'Community Management')}</button></li>
                <li><button onClick={() => handleFooterLink('#paid-ads')} className="link-button">{content.get('Page Detail layanan Social Media', 'footer_service_3', 'Paid Ads Campaign')}</button></li>
                <li><button onClick={() => handleFooterLink('#analytics')} className="link-button">{content.get('Page Detail layanan Social Media', 'footer_service_4', 'Analytics & Reporting')}</button></li>
                <li><button onClick={() => handleFooterLink('#influencer')} className="link-button">{content.get('Page Detail layanan Social Media', 'footer_service_5', 'Influencer Marketing')}</button></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{content.get('Page Detail layanan Social Media', 'footer_platforms_title', 'Platforms')}</h4>
              <ul className="footer-links">
                <li><button onClick={() => handleFooterLink('#instagram')} className="link-button">Instagram</button></li>
                <li><button onClick={() => handleFooterLink('#facebook')} className="link-button">Facebook</button></li>
                <li><button onClick={() => handleFooterLink('#tiktok')} className="link-button">TikTok</button></li>
                <li><button onClick={() => handleFooterLink('#linkedin')} className="link-button">LinkedIn</button></li>
                <li><button onClick={() => handleFooterLink('#youtube')} className="link-button">YouTube</button></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{content.get('Page Detail layanan Social Media', 'footer_contact_title', 'Kontak')}</h4>
              <ul className="footer-contact">
                <li>{content.get('Page Detail layanan Social Media', 'footer_contact_phone', '081804376001')}</li>
                <li>{content.get('Page Detail layanan Social Media', 'footer_contact_email', 'titikvisualjogja@gmail.com')}</li>
                <li>{content.get('Page Detail layanan Social Media', 'footer_contact_address', 'Yogyakarta, Indonesia')}</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {content.get('Page Detail layanan Social Media', 'footer_copyright', '2024 Titik Visual. All rights reserved.')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SocialMediaPage;
