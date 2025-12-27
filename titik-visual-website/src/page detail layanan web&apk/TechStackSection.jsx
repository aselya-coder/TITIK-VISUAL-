import React from 'react';

const TechCard = ({ iconClass, title, iconColor, iconBg }) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-center">
    <div className="mx-auto mb-6 w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: iconBg }}>
      <i className={`${iconClass} text-xl`} style={{ color: iconColor }} />
    </div>
    <div className="text-lg font-semibold text-gray-900">{title}</div>
  </div>
);

const TechStackSection = () => {
  const techs = [
    { iconClass: 'fa-solid fa-code', title: 'React / Next.js', iconColor: '#2563EB', iconBg: '#DBEAFE' },
    { iconClass: 'fa-solid fa-code', title: 'Vue.js / Nuxt.js', iconColor: '#22C55E', iconBg: '#DCFCE7' },
    { iconClass: 'fa-solid fa-code', title: 'Angular', iconColor: '#EF4444', iconBg: '#FEE2E2' },
    { iconClass: 'fa-solid fa-globe', title: 'WordPress', iconColor: '#1E40AF', iconBg: '#DBEAFE' },
    { iconClass: 'fa-solid fa-code', title: 'Laravel / PHP', iconColor: '#EF4444', iconBg: '#FEE2E2' },
    { iconClass: 'fa-solid fa-code', title: 'Node.js', iconColor: '#22C55E', iconBg: '#DCFCE7' },
    { iconClass: 'fa-solid fa-code', title: 'Python / Django', iconColor: '#2563EB', iconBg: '#DBEAFE' },
    { iconClass: 'fa-solid fa-mobile-screen-button', title: 'Shopify', iconColor: '#16A34A', iconBg: '#DCFCE7' },
    { iconClass: 'fa-solid fa-mobile-screen-button', title: 'Flutter', iconColor: '#3B82F6', iconBg: '#DBEAFE' },
    { iconClass: 'fa-solid fa-mobile-screen-button', title: 'React Native', iconColor: '#7C3AED', iconBg: '#F3E8FF' },
    { iconClass: 'fa-solid fa-code', title: 'MySQL / PostgreSQL', iconColor: '#F59E0B', iconBg: '#FFEDD5' },
    { iconClass: 'fa-solid fa-code', title: 'MongoDB', iconColor: '#16A34A', iconBg: '#DCFCE7' },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600">
            Teknologi yang Kami Gunakan untuk Website & Aplikasi
          </h2>
          <p className="mt-3 text-gray-500">
            Platform dan teknologi terdepan untuk hasil yang optimal
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((t, i) => (
            <TechCard key={i} iconClass={t.iconClass} title={t.title} iconColor={t.iconColor} iconBg={t.iconBg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
