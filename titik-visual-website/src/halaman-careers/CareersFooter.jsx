import React from 'react';
import { useContent } from '../content/ContentContext';

const getImg = (name) => {
  try {
    return require(`../img/${name}`);
  } catch {
    return '';
  }
};

export default function CareersFooter() {
  const content = useContent();
  return (
    <footer className="w-full bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 items-start">
          <div className="space-y-4">
            <img src={getImg('img.png')} alt="Titik Visual Logo" className="footer-logo" />
            <p className="text-gray-400 leading-relaxed max-w-sm">
              {content.get('halaman-careers', 'footer_desc', 'Digital creative studio yang mengutamakan kualitas dan inovasi dalam setiap karya.')}
            </p>
          </div>
          <div className="text-left">
            <h4 className="text-white text-base font-semibold mb-4">{content.get('halaman-careers', 'footer_col_company', 'Company')}</h4>
            <ul className="space-y-2 leading-relaxed">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">{content.get('halaman-careers', 'footer_link_about', 'About Us')}</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-white transition-colors">{content.get('halaman-careers', 'footer_link_portfolio', 'Portfolio')}</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">{content.get('halaman-careers', 'footer_link_services', 'Services')}</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors">{content.get('halaman-careers', 'footer_link_careers', 'Careers')}</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">{content.get('halaman-careers', 'footer_link_contact', 'Contact')}</a></li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="text-white text-base font-semibold mb-4">{content.get('halaman-careers', 'footer_col_careers', 'Careers')}</h4>
            <ul className="space-y-2 leading-relaxed">
              <li><a href="/lowongan-kerja" className="text-gray-400 hover:text-white transition-colors">{content.get('halaman-careers', 'footer_link_jobs', 'Lowongan Kerja')}</a></li>
              <li><a href="/program-magang" className="text-gray-400 hover:text-white transition-colors">{content.get('halaman-careers', 'footer_link_intern', 'Program Magang')}</a></li>
              <li><a href="/lowongan-kerja" className="text-gray-400 hover:text-white transition-colors">{content.get('halaman-careers', 'footer_link_fulltime', 'Full Time Jobs')}</a></li>
              <li><a href="/lowongan-kerja" className="text-gray-400 hover:text-white transition-colors">{content.get('halaman-careers', 'footer_link_remote', 'Remote Work')}</a></li>
              <li><a href="/lowongan-kerja" className="text-gray-400 hover:text-white transition-colors">{content.get('halaman-careers', 'footer_link_contract', 'Contract Work')}</a></li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="text-white text-base font-semibold mb-4">{content.get('halaman-careers', 'footer_col_contact', 'Contact')}</h4>
            <ul className="space-y-2 leading-relaxed">
              <li className="flex items-center gap-2 text-gray-400"><i className="fas fa-phone-alt"></i><span>{content.get('global', 'phone', '081804376001')}</span></li>
              <li className="flex items-center gap-2 text-gray-400"><i className="fas fa-envelope"></i><span>{content.get('global', 'email', 'titikvisualjogja@gmail.com')}</span></li>
              <li className="flex items-center gap-2 text-gray-400"><i className="fas fa-map-marker-alt"></i><span>{content.get('global', 'address', 'Yogyakarta, Indonesia')}</span></li>
            </ul>
          </div>
        </div>
        <hr className="w-full border-t border-gray-700 mt-8" />
        <div className="text-center text-gray-400 text-sm">
          <p>{content.get('global', 'copyright', '© 2024 Titik Visual. All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  );
}
