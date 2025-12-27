import React from 'react';
import './PageDetailLayananWebApk.css';

const FeatureItem = ({ text }) => (
  <li className="feature-item">
    <i className="fa-regular fa-circle-check"></i>
    <span>{text}</span>
  </li>
);

const Card = ({ title, price, duration, badge, features, variant }) => (
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
          <span>Pilih Paket</span>
        </button>
      ) : (
        <button className="btn btn-outline">
          <i className="fa-solid fa-arrow-right"></i>
          <span>Pilih Paket</span>
        </button>
      )}
    </div>
  </div>
);

const PageDetailLayananWebApk = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Paket Website</h2>
          <p className="pricing-subtitle">Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
        </div>

        <div className="cards-wrapper">
          <Card
            title="Landing Page"
            price="Rp 3.500.000"
            duration="1–2 minggu"
            badge="Best for: Campaign Marketing"
            features={[
              'Single Page Design',
              'Responsive Layout',
              'Contact Form',
              'SEO Basic',
              'Google Analytics',
              '2x Revisions',
              '1 Bulan Support',
            ]}
            variant="default"
          />

          <Card
            title="Business Website"
            price="Rp 7.500.000"
            duration="3–4 minggu"
            badge="Best for: Corporate & SME"
            features={[
              'Multi-page Website (5–10 pages)',
              'CMS Integration',
              'Contact Forms',
              'Gallery & Portfolio',
              'SEO Optimization',
              'Google Analytics',
              '3x Revisions',
              '3 Bulan Support',
            ]}
            variant="featured"
          />

          <Card
            title="E-Commerce"
            price="Rp 15.000.000"
            duration="4–6 minggu"
            badge="Best for: Online Store"
            features={[
              'Full E-commerce Platform',
              'Product Management',
              'Shopping Cart & Checkout',
              'Payment Gateway Integration',
              'Admin Dashboard',
              'Inventory Management',
              'SEO & Analytics',
              'Unlimited Revisions',
              '6 Bulan Support',
            ]}
            variant="default"
          />
        </div>
      </div>
    </section>
  );
};

export default PageDetailLayananWebApk;
