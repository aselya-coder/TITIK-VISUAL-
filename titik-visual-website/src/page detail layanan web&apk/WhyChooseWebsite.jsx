import React from 'react';
import { useContent } from '../content/ContentContext';

const FeatureCard = ({ iconClass, title, description }) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-center">
    <div className="mx-auto mb-6 w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
      <i className={`${iconClass} text-blue-600 text-xl`} />
    </div>
    <div className="text-lg font-semibold text-gray-900 mb-2">{title}</div>
    <p className="text-gray-500">{description}</p>
  </div>
);

const WhyChooseWebsite = () => {
  const content = useContent();
  const features = [
    {
      iconClass: 'fa-solid fa-display',
      title: content.get('page detail layanan web&apk', 'why_choose_1_title', 'Responsive Design'),
      description: content.get('page detail layanan web&apk', 'why_choose_1_desc', 'Website yang tampil sempurna di semua device'),
    },
    {
      iconClass: 'fa-solid fa-magnifying-glass',
      title: content.get('page detail layanan web&apk', 'why_choose_2_title', 'SEO Optimized'),
      description: content.get('page detail layanan web&apk', 'why_choose_2_desc', 'Optimasi SEO untuk ranking Google yang lebih baik'),
    },
    {
      iconClass: 'fa-solid fa-bolt',
      title: content.get('page detail layanan web&apk', 'why_choose_3_title', 'Fast Loading'),
      description: content.get('page detail layanan web&apk', 'why_choose_3_desc', 'Performa website yang cepat dan optimal'),
    },
    {
      iconClass: 'fa-solid fa-shield-halved',
      title: content.get('page detail layanan web&apk', 'why_choose_4_title', 'Secure & Reliable'),
      description: content.get('page detail layanan web&apk', 'why_choose_4_desc', 'Keamanan tingkat tinggi dengan SSL certificate'),
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600">{content.get('page detail layanan web&apk', 'why_choose_title', 'Mengapa Pilih Website Kami?')}</h2>
          <p className="mt-3 text-gray-500">{content.get('page detail layanan web&apk', 'why_choose_subtitle', 'Website yang kami buat tidak hanya cantik, tapi juga powerful dan result-oriented')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} iconClass={f.iconClass} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseWebsite;
