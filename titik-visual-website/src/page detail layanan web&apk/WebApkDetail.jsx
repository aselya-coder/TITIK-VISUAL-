import React from 'react';

const images = require.context('../img', false, /\.(png|jpe?g|svg)$/);
const getImg = (name) => images(`./${name}`);

const WebApkDetail = () => {
  return (
    <div className="bg-[#F0FDF9]">
      <section className="py-24">
        <div className="max-w-[1180px] mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left max-w-xl flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 px-4 py-1 mb-4 text-sm font-medium rounded-full bg-[#BFDBFE] text-[#1D4ED8]">
                <span
                  className="inline-block w-4 h-4 bg-[#1D4ED8]"
                  style={{
                    WebkitMaskImage: `url(${getImg('icon-website.png')})`,
                    maskImage: `url(${getImg('icon-website.png')})`,
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center'
                  }}
                />
                Website & Aplikasi Development
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                <span className="bg-gradient-to-r from-[#2563EB] to-[#0891B2] bg-clip-text text-transparent">Website & Aplikasi</span>
                <br />
                <span className="bg-gradient-to-r from-[#2563EB] to-[#0891B2] bg-clip-text text-transparent">Professional</span>
                <br />
                <span className="text-gray-900">yang Convert</span>
              </h1>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Bangun presence online yang kuat dengan website responsif, cepat, dan SEO-friendly. Dari landing page high-converting hingga e-commerce platform lengkap, kami ciptakan website yang mendorong pertumbuhan bisnis Anda. Selain itu, kami juga mengembangkan aplikasi mobile yang inovatif dan user-friendly.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://wa.me/6281804376001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold inline-flex items-center gap-2"
                >
                  <i className="far fa-comment" /> Konsultasi Gratis
                </a>
                <a
                  href="../page-portfolio/page-portfolio.tsx"
                  className="px-6 py-3 rounded-xl border border-blue-500 text-blue-600 font-semibold bg-transparent inline-flex items-center gap-2"
                >
                  <i className="far fa-eye" /> Lihat Portfolio
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative bg-white rounded-2xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.07)] border border-[#E5E7EB]">
                <img src={getImg('Website Development Mockup.png')} alt="Website Development Mockup" className="max-w-full h-auto rounded-xl object-contain" />
                <span className="absolute -top-3 -right-3 w-24 h-24 rounded-full bg-gradient-to-tr from-[#F472B6] to-[#FB923C] shadow-[0_12px_28px_rgba(244,114,182,0.35)]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebApkDetail;
