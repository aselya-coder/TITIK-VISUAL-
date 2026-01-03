import React from 'react';
import { useContent } from '../content/ContentContext';

const UiUxSection = ({ iconSrc, imageSrc }) => {
  const content = useContent();

  return (
    <section className="bg-gradient-to-r from-[#F9FAFB] to-[#ECFDF5] py-24">
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left max-w-xl flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 text-purple-700 bg-purple-100 font-semibold px-3 py-1 rounded-full text-sm mb-4">
              <img src={iconSrc} alt="UI/UX Icon" className="w-5 h-5" />
              {content.get('page layanan detail ui_ux', 'hero_badge', 'UI/UX Design Service')}
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-[#9333EA] to-[#0891B2] bg-clip-text text-transparent">{content.get('page layanan detail ui_ux', 'hero_title_highlight', 'UI/UX Design')}</span>
              <br />
              <span className="text-[#111827]">{content.get('page layanan detail ui_ux', 'hero_title_suffix', 'yang User-Centered')}</span>
            </h1>
            <p className="text-[#6B7280] mb-8 max-w-xl">
              {content.get('page layanan detail ui_ux', 'hero_description', 'Ciptakan pengalaman digital yang luar biasa dengan desain interface yang intuitif, menarik, dan berfokus pada kebutuhan pengguna. Dari riset hingga prototype, kami pastikan setiap elemen mendukung tujuan bisnis Anda.')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/6281804376001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]"
              >
                <i className="far fa-comment" /> {content.get('page layanan detail ui_ux', 'hero_button_consult', 'Konsultasi Gratis')}
              </a>
              <a
                href="../page-portfolio/page-portfolio.tsx"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#A855F7] text-[#7C3AED] bg-white"
              >
                <i className="far fa-eye" /> {content.get('page layanan detail ui_ux', 'hero_button_portfolio', 'Lihat Portfolio')}
              </a>
            </div>
          </div>

            <div className="flex justify-center">
              <div className="relative bg-white rounded-2xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.07)] border border-[#E5E7EB]">
                <img src={imageSrc} alt="UI/UX Design Illustration" className="max-w-full h-auto rounded-xl object-contain" />
              <span className="absolute -top-3 -right-3 w-24 h-24 rounded-full bg-gradient-to-tr from-[#FB923C] to-[#F472B6] shadow-[0_12px_28px_rgba(244,114,182,0.35)]" />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default UiUxSection;
