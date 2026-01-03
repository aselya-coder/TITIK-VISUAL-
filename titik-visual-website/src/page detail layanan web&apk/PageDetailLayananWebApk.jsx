import React from 'react';
import './PageDetailLayananWebApk.css';
import { useContent } from '../content/ContentContext';

const FeatureItem = ({ text }) => (
  <li className="feature-item">
    <i className="fa-regular fa-circle-check"></i>
    <span>{text}</span>
  </li>
);

const Card = ({ title, price, duration, badge, features, variant, btnText }) => (
  <div className={`pricing-card ${variant === 'featured' ? 'featured' : ''}`}>
    <div className="card-header">
      <h3 className="card-title">{title}</h3>
      <div className="card-price">{price}</div>
      <div className="card-duration">{duration}</div>
      <div className="card-badge">{badge}</div>
    </div>
    <ul className="features-list">
      {features.map((f, i) => <FeatureItem key={i} text={f} />)}
    </ul>
    <div className="card-actions">
      {variant === 'featured' ? (
        <button className="btn btn-primary">
          <span>{btnText}</span>
        </button>
      ) : (
        <button className="btn btn-outline">
          <i className="fa-solid fa-arrow-right"></i>
          <span>{btnText}</span>
        </button>
      )}
    </div>
  </div>
);

const PageDetailLayananWebApk = () => {
  const content = useContent();
  const pageKey = 'page detail layanan web&apk';

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">{content.get(pageKey, 'pricing_title', 'Paket Website')}</h2>
          <p className="pricing-subtitle">{content.get(pageKey, 'pricing_subtitle', 'Pilih paket yang sesuai dengan kebutuhan bisnis Anda')}</p>
        </div>

        <div className="cards-wrapper">
          <Card
            title={content.get(pageKey, 'pricing_landing_title', 'Landing Page')}
            price={content.get(pageKey, 'pricing_landing_price', 'Rp 3.500.000')}
            duration={content.get(pageKey, 'pricing_landing_duration', '1–2 minggu')}
            badge={content.get(pageKey, 'pricing_landing_badge', 'Best for: Campaign Marketing')}
            features={[
              content.get(pageKey, 'pricing_landing_feature_1', 'Single Page Design'),
              content.get(pageKey, 'pricing_landing_feature_2', 'Responsive Layout'),
              content.get(pageKey, 'pricing_landing_feature_3', 'Contact Form'),
              content.get(pageKey, 'pricing_landing_feature_4', 'SEO Basic'),
              content.get(pageKey, 'pricing_landing_feature_5', 'Google Analytics'),
              content.get(pageKey, 'pricing_landing_feature_6', '2x Revisions'),
              content.get(pageKey, 'pricing_landing_feature_7', '1 Bulan Support'),
            ]}
            variant="default"
            btnText={content.get(pageKey, 'pricing_btn_select', 'Pilih Paket')}
          />

          <Card
            title={content.get(pageKey, 'pricing_business_title', 'Business Website')}
            price={content.get(pageKey, 'pricing_business_price', 'Rp 7.500.000')}
            duration={content.get(pageKey, 'pricing_business_duration', '3–4 minggu')}
            badge={content.get(pageKey, 'pricing_business_badge', 'Best for: Corporate & SME')}
            features={[
              content.get(pageKey, 'pricing_business_feature_1', 'Multi-page Website (5–10 pages)'),
              content.get(pageKey, 'pricing_business_feature_2', 'CMS Integration'),
              content.get(pageKey, 'pricing_business_feature_3', 'Contact Forms'),
              content.get(pageKey, 'pricing_business_feature_4', 'Gallery & Portfolio'),
              content.get(pageKey, 'pricing_business_feature_5', 'SEO Optimization'),
              content.get(pageKey, 'pricing_business_feature_6', 'Google Analytics'),
              content.get(pageKey, 'pricing_business_feature_7', '3x Revisions'),
              content.get(pageKey, 'pricing_business_feature_8', '3 Bulan Support'),
            ]}
            variant="featured"
            btnText={content.get(pageKey, 'pricing_btn_select', 'Pilih Paket')}
          />

          <Card
            title={content.get(pageKey, 'pricing_ecommerce_title', 'E-Commerce')}
            price={content.get(pageKey, 'pricing_ecommerce_price', 'Rp 15.000.000')}
            duration={content.get(pageKey, 'pricing_ecommerce_duration', '4–6 minggu')}
            badge={content.get(pageKey, 'pricing_ecommerce_badge', 'Best for: Online Store')}
            features={[
              content.get(pageKey, 'pricing_ecommerce_feature_1', 'Full E-commerce Platform'),
              content.get(pageKey, 'pricing_ecommerce_feature_2', 'Product Management'),
              content.get(pageKey, 'pricing_ecommerce_feature_3', 'Shopping Cart & Checkout'),
              content.get(pageKey, 'pricing_ecommerce_feature_4', 'Payment Gateway Integration'),
              content.get(pageKey, 'pricing_ecommerce_feature_5', 'Admin Dashboard'),
              content.get(pageKey, 'pricing_ecommerce_feature_6', 'Inventory Management'),
              content.get(pageKey, 'pricing_ecommerce_feature_7', 'SEO & Analytics'),
              content.get(pageKey, 'pricing_ecommerce_feature_8', 'Unlimited Revisions'),
              content.get(pageKey, 'pricing_ecommerce_feature_9', '6 Bulan Support'),
            ]}
            variant="default"
            btnText={content.get(pageKey, 'pricing_btn_select', 'Pilih Paket')}
          />
        </div>
      </div>
    </section>
  );
};

export default PageDetailLayananWebApk;
