import React from 'react';
import { useContent } from '../content/ContentContext';

const getImg = (name) => {
  try {
    return require(`../img/${name}`);
  } catch {
    return '';
  }
};

const PortfolioCard = ({ category, title, description, tags }) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
    <img
      src={getImg('portfolio website.png')}
      alt={title}
      className="w-full h-48 md:h-56 object-cover"
    />
    <div className="p-6">
      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600 mb-3">
        {category}
      </span>
      <div className="text-lg font-semibold text-gray-900">{title}</div>
      <p className="text-gray-500 mt-2">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <span key={i} className="px-3 py-1 text-xs rounded-full border border-gray-300 text-gray-700">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const PortfolioWebsiteSection = () => {
  const content = useContent();
  const items = [
    {
      category: content.get('page detail layanan web&apk', 'portfolio_item_1_category', 'Business Website'),
      title: content.get('page detail layanan web&apk', 'portfolio_item_1_title', 'Corporate Website'),
      description: content.get('page detail layanan web&apk', 'portfolio_item_1_desc', 'Website corporate modern dengan CMS integration dan multi-language support'),
      tags: [
        content.get('page detail layanan web&apk', 'portfolio_item_1_tag_1', 'Multi-page'),
        content.get('page detail layanan web&apk', 'portfolio_item_1_tag_2', 'CMS'),
        content.get('page detail layanan web&apk', 'portfolio_item_1_tag_3', 'Contact Forms'),
        content.get('page detail layanan web&apk', 'portfolio_item_1_tag_4', 'Gallery')
      ],
    },
    {
      category: content.get('page detail layanan web&apk', 'portfolio_item_2_category', 'Online Store'),
      title: content.get('page detail layanan web&apk', 'portfolio_item_2_title', 'E-Commerce Platform'),
      description: content.get('page detail layanan web&apk', 'portfolio_item_2_desc', 'Platform e-commerce lengkap dengan payment gateway dan inventory management'),
      tags: [
        content.get('page detail layanan web&apk', 'portfolio_item_2_tag_1', 'Shopping Cart'),
        content.get('page detail layanan web&apk', 'portfolio_item_2_tag_2', 'Payment Gateway'),
        content.get('page detail layanan web&apk', 'portfolio_item_2_tag_3', 'Admin Panel'),
        content.get('page detail layanan web&apk', 'portfolio_item_2_tag_4', 'Analytics')
      ],
    },
    {
      category: content.get('page detail layanan web&apk', 'portfolio_item_3_category', 'Marketing Landing'),
      title: content.get('page detail layanan web&apk', 'portfolio_item_3_title', 'Landing Page Campaign'),
      description: content.get('page detail layanan web&apk', 'portfolio_item_3_desc', 'Landing page high-converting untuk campaign marketing dan lead generation'),
      tags: [
        content.get('page detail layanan web&apk', 'portfolio_item_3_tag_1', 'Lead Forms'),
        content.get('page detail layanan web&apk', 'portfolio_item_3_tag_2', 'A/B Testing'),
        content.get('page detail layanan web&apk', 'portfolio_item_3_tag_3', 'Analytics'),
        content.get('page detail layanan web&apk', 'portfolio_item_3_tag_4', 'Mobile Optimized')
      ],
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600">
            {content.get('page detail layanan web&apk', 'portfolio_section_title', 'Portfolio Website')}
          </h2>
          <p className="mt-3 text-gray-500">
            {content.get('page detail layanan web&apk', 'portfolio_section_subtitle', 'Beberapa website terbaik yang telah kami kembangkan')}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <PortfolioCard
              key={idx}
              category={it.category}
              title={it.title}
              description={it.description}
              tags={it.tags}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-500 text-blue-600 hover:bg-blue-50"
          >
            <i className="far fa-eye" /> {content.get('page detail layanan web&apk', 'portfolio_button', 'Lihat Semua Portfolio')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioWebsiteSection;
