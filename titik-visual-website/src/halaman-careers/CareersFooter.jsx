import React from 'react';

const images = require.context('../img', false, /\.(png|jpe?g|svg)$/);
const getImg = (name) => images(`./${name}`);

export default function CareersFooter() {
  return (
    <footer className="w-full bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 items-start">
          <div className="space-y-4">
            <img src={getImg('img.png')} alt="Titik Visual Logo" className="footer-logo" />
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Digital creative studio yang mengutamakan kualitas dan inovasi dalam setiap karya.
            </p>
          </div>
          <div className="text-left">
            <h4 className="text-white text-base font-semibold mb-4">Company</h4>
            <ul className="space-y-2 leading-relaxed">
              <li><span className="text-gray-400">About Us</span></li>
              <li><span className="text-gray-400">Portfolio</span></li>
              <li><span className="text-gray-400">Services</span></li>
              <li><span className="text-gray-400">Careers</span></li>
              <li><span className="text-gray-400">Blog</span></li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="text-white text-base font-semibold mb-4">Careers</h4>
            <ul className="space-y-2 leading-relaxed">
              <li><span className="text-gray-400">Lowongan Kerja</span></li>
              <li><span className="text-gray-400">Program Magang</span></li>
              <li><span className="text-gray-400">Full Time Jobs</span></li>
              <li><span className="text-gray-400">Remote Work</span></li>
              <li><span className="text-gray-400">Contract Work</span></li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="text-white text-base font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 leading-relaxed">
              <li className="flex items-center gap-2 text-gray-400"><i className="fas fa-phone-alt"></i><span>081804376001</span></li>
              <li className="flex items-center gap-2 text-gray-400"><i className="fas fa-envelope"></i><span>titikvisualjogja@gmail.com</span></li>
              <li className="flex items-center gap-2 text-gray-400"><i className="fas fa-map-marker-alt"></i><span>Yogyakarta, Indonesia</span></li>
            </ul>
          </div>
        </div>
        <hr className="w-full border-t border-gray-700 mt-8" />
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2024 Titik Visual. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
