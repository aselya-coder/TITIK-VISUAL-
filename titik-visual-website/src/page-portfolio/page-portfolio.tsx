import React from 'react';
import './style.css';
import { useContent } from '../content/ContentContext';

const getImg = (name: string) => {
  try {
    return require(`../img/${name}`);
  } catch {
    return '';
  }
};


function App() {
  const content = useContent();


  return (
    <div className="App">




      <main>
        {/* Portfolio Hero Section */}
        <section className="portfolio-hero-section">
          <div className="container">
            <h1>{content.get('page-portfolio', 'hero.title', 'Portfolio Kami')}</h1>
            <p>{content.get('page-portfolio', 'hero.description', 'Jelajahi koleksi karya terbaik kami dalam UI/UX Design, Web Development, Mobile App, dan Digital Marketing yang telah membantu klien mencapai tujuan bisnis mereka.')}</p>
            <div className="hero-buttons">
              <a href={content.get('page-portfolio', 'hero.cta_primary.url', '#portfolio')} className="btn btn-primary">
                <i className="fas fa-eye"></i>
                {content.get('page-portfolio', 'hero.cta_primary.label', 'Lihat Semua Karya')}
              </a>
              <a href={content.get('page-portfolio', 'hero.cta_secondary.url', '/contact')} className="btn btn-secondary">
                <i className="fas fa-arrow-up-right-from-square"></i>
                {content.get('page-portfolio', 'hero.cta_secondary.label', 'Diskusi Proyek')}
              </a>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio-section">
          <div className="container">
            <h2 className="section-title">{content.get('page-portfolio', 'portfolio_title', 'Semua Karya Titik Visual')}</h2>
            <p className="section-subtitle">{content.get('page-portfolio', 'portfolio_subtitle', 'Kumpulan lengkap karya kami di berbagai kategori')}</p>

            <div className="portfolio-grid">
              {Array.from({ length: 50 }, (_, i) => i)
                .filter(i => content.get('page-portfolio', `items.${i}.title`, '').trim() !== '')
                .map((i) => {
                  const featured = Boolean(content.get('page-portfolio', `items.${i}.featured`, false));
                  const tagsRaw = content.get('page-portfolio', `items.${i}.tags`, []);
                  const tags = Array.isArray(tagsRaw) ? tagsRaw : [];
                  const tagLabels = tags
                    .map((t: any) => (typeof t === 'string' ? t : t?.label))
                    .filter((t: any) => typeof t === 'string' && t.trim() !== '');

                  return (
                    <div className="project-card" key={i}>
                    <div className="card-image">
                      <img
                        src={getImg(content.get('page-portfolio', `items.${i}.image`, 'portfolio.png'))}
                        alt={content.get('page-portfolio', `items.${i}.title`, 'Project')}
                      />
                      {featured && <span className="featured-badge">Featured</span>}
                    </div>
                    <div className="card-content">
                      <div className="content-header">
                        <span className="project-category">
                          {content.get('page-portfolio', `items.${i}.category`, 'Kategori')}
                        </span>
                        <span className="project-year">
                          {content.get('page-portfolio', `items.${i}.year`, '2024')}
                        </span>
                      </div>
                      <h3 className="project-title">
                        {content.get('page-portfolio', `items.${i}.title`, 'Judul Project')}
                      </h3>
                      <p className="project-description">
                        {content.get('page-portfolio', `items.${i}.description`, 'Deskripsi Project')}
                      </p>
                      <div className="project-tech">
                        {tagLabels.map((t: string, j2: number) => (
                          <span key={j2}>{t}</span>
                        ))}
                      </div>
                      <div className="project-footer">
                        <span className="client-name">
                          Client: {content.get('page-portfolio', `items.${i}.client`, 'Client')}
                        </span>
                        <a
                          href={content.get('page-portfolio', `items.${i}.link`, '/portfolio')}
                          className="project-link"
                        >
                          <i className="fas fa-arrow-up-right-from-square"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  );
                })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2>{content.get('page-portfolio', 'cta.title', 'Tertarik dengan Karya Kami?')}</h2>
            <p>{content.get('page-portfolio', 'cta.description', 'Mari diskusikan bagaimana kami bisa membantu mewujudkan visi digital Anda')}</p>
            <div className="cta-buttons">
              <a href={content.get('page-portfolio', 'cta.primary.url', '/contact')} className="btn btn-primary-cta">
                <i className="fas fa-arrow-up-right-from-square"></i> {content.get('page-portfolio', 'cta.primary.label', 'Diskusi Proyek')}
              </a>
              <a href={content.get('page-portfolio', 'cta.secondary.url', '#portfolio')} className="btn btn-secondary-cta">
                <i className="fas fa-eye"></i> {content.get('page-portfolio', 'cta.secondary.label', 'Lihat Semua Portfolio')}
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src={getImg('img.png')} alt="Titik Visual Logo" className="footer-logo" />
              <p>{content.get('page-portofolio', 'footer_brand_desc', 'Portfolio lengkap karya digital creative yang telah membantu berbagai klien mencapai kesuksesan.')}</p>
            </div>
            <div className="footer-links">
              <h4>Portfolio</h4>
              <ul>
                  <li><a href="/portfolio/ui-ux">UI/UX Design</a></li>
                  <li><a href="/portfolio/web-development">Web Development</a></li>
                  <li><a href="/portfolio/mobile-app">Mobile App</a></li>
                  <li><a href="/portfolio/branding">Branding</a></li>
                  <li><a href="/portfolio/social-media">Social Media</a></li>
                </ul>
              </div>
              <div className="footer-links">
                <h4>Kategori</h4>
                <ul>
                  <li><a href="/portfolio/featured">Featured Works</a></li>
                  <li><a href="/portfolio/case-studies">Case Studies</a></li>
                  <li><a href="/portfolio/client-stories">Client Stories</a></li>
                  <li><a href="/portfolio/awards">Awards</a></li>
                  <li><a href="/portfolio/recognition">Recognition</a></li>
                </ul>
              </div>
              <div className="footer-links">
                <h4>Kontak</h4>
                <ul>
                  <li>081804376001</li>
                  <li>titikvisualjogja@gmail.com</li>
                  <li>Yogyakarta, Indonesia</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>
                {content.get('page-portfolio', 'footer_line1_top', '© 2024 Titik Visual.')}<br />
                {content.get('page-portfolio', 'footer_line1_bottom', 'All rights reserved.')}
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
