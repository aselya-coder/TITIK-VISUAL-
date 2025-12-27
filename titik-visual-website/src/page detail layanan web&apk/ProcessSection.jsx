import React from 'react';

const steps = [
  { number: '01', title: 'Discovery & Planning', description: 'Analisis kebutuhan, target audience, dan goals bisnis', duration: '1–2 hari' },
  { number: '02', title: 'Design & Wireframe', description: 'Pembuatan wireframe dan design mockup', duration: '3–5 hari' },
  { number: '03', title: 'Development', description: 'Coding dan development website dengan teknologi modern', duration: '2–4 minggu' },
  { number: '04', title: 'Testing & QA', description: 'Testing functionality, responsiveness, dan performance', duration: '2–3 hari' },
  { number: '05', title: 'Launch & Support', description: 'Deploy website dan training penggunaan CMS', duration: '1–2 hari' },
];

const ProcessCard = ({ number, title, description, duration }) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">
    <div className="flex items-center gap-4 mb-3">
      <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">{number}</div>
      <div className="text-lg font-semibold text-gray-900">{title}</div>
    </div>
    <p className="text-gray-500 mb-4">{description}</p>
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
      <i className="fa-regular fa-clock" /> {duration}
    </span>
  </div>
);

const ProcessSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600">Proses Development</h2>
          <p className="mt-3 text-gray-500">Metodologi yang terbukti untuk website berkualitas tinggi</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <ProcessCard
              key={s.number}
              number={s.number}
              title={s.title}
              description={s.description}
              duration={s.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
