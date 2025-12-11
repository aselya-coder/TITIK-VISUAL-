import React from 'react';
import './style.css';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  size: string;
  volume: string;
  material: string;
  features: string[];
  price: string;
  productionTime: string;
  highlighted?: boolean;
}

interface Testimonial {
  id: number;
  text: string;
  clientName: string;
  clientPosition: string;
  clientInitial: string;
}

const CustomMerchandisePage = () => {
  // Thermos & Vacuum Flask Collection
  const thermosProducts: Product[] = [
    {
      id: 1,
      name: 'Vacuum Flask Office Series',
      description: 'Thermos office premium dengan double wall 304# stainless steel',
      image: '../img/vacuum flask office.png',
      size: '15cm x 9.5cm',
      volume: '500ml',
      material: 'Double Wall 304# SUS',
      features: ['Vacuum Insulation Technology', 'Custom Logo & Design Available'],
      price: 'Rp 85.000/pcs',
      productionTime: '10-14 hari',
      highlighted: true
    },
    {
      id: 2,
      name: 'Vacuum Flask Coffee II + LED',
      description: 'Thermos coffee dengan LED indicator dan teknologi vacuum',
      image: '../img/merchandise custom.png',
      size: '15cm x 7.2cm',
      volume: '500ml',
      material: 'Double Wall 304# SUS',
      features: ['LED Temperature Indicator', 'Custom Branding Available'],
      price: 'Rp 125.000/pcs',
      productionTime: '14-21 hari'
    },
    {
      id: 3,
      name: 'Vacuum Flask Gifts 3 in 1',
      description: 'Paket gift set thermos dengan 3 fungsi dalam 1 produk',
      image: '../img/merchandise custom.png',
      size: '24cm x 7.3cm',
      volume: '500ml',
      material: 'Double Wall 304# SUS',
      features: ['Multi-function Design', 'Premium Gift Packaging'],
      price: 'Rp 150.000/pcs',
      productionTime: '14-21 hari'
    },
    {
      id: 4,
      name: 'Vacuum Flask Sport',
      description: 'Thermos sport dengan design ergonomis untuk aktivitas outdoor',
      image: '../img/Vacuum Flask Sport.png',
      size: '25cm x 7cm',
      volume: '500ml',
      material: 'Double Wall 304# SUS',
      features: ['Sport Design & Grip', 'Leak-proof Technology'],
      price: 'Rp 95.000/pcs',
      productionTime: '10-14 hari',
      highlighted: true
    },
    {
      id: 5,
      name: 'Bottle Sport Ace',
      description: 'Botol minum olahraga dengan material Tritan yang aman',
      image: '../img/merchandise custom.png',
      size: '23cm x 6.5cm',
      volume: '750ml',
      material: 'Tritan BPA-Free',
      features: ['Ergonomic & Lightweight', 'Custom Logo Printing'],
      price: 'Rp 65.000/pcs',
      productionTime: '7-10 hari'
    },
    {
      id: 6,
      name: 'Tumbler Sport',
      description: 'Design sporty dengan kapasitas 600ml untuk aktivitas harian',
      image: '../img/merchandise custom.png',
      size: '20.5cm x 8cm',
      volume: '600ml',
      material: 'Stainless Steel',
      features: ['Sporty Design', 'Easy to Carry'],
      price: 'Rp 75.000/pcs',
      productionTime: '7-14 hari'
    }
  ];

  // Aluminum Bottles Collection
  const aluminumProducts: Product[] = [
    {
      id: 7,
      name: 'Bottle Sport Aluminum',
      description: 'Botol aluminum sport dengan design yang ringan dan tahan lama',
      image: '../img/Bottle Sport Aluminum.png',
      size: '20.5cm x 6.5cm',
      volume: '500ml',
      material: 'Premium Aluminum',
      features: ['Lightweight Design', 'Custom Color Available'],
      price: 'Rp 45.000/pcs',
      productionTime: '7-10 hari',
      highlighted: true
    },
    {
      id: 8,
      name: 'Bottle Sport Large',
      description: 'Botol aluminum berkapasitas besar untuk kebutuhan outdoor',
      image: '../img/Bottle Sport Ace.png',
      size: '24.5cm x 7.2cm',
      volume: '750ml',
      material: 'Premium Aluminum',
      features: ['Large Capacity', 'Durable Construction'],
      price: 'Rp 55.000/pcs',
      productionTime: '7-10 hari'
    },
    {
      id: 9,
      name: 'Bottle Sport Ace',
      description: 'Design sporty dengan kapasitas 630ml untuk aktivitas harian',
      image: '../img/Bottle Sport Ace.png',
      size: '21cm x 7.2cm',
      volume: '630ml',
      material: 'Premium Aluminum',
      features: ['Sporty Design', 'Easy Grip Handle'],
      price: 'Rp 50.000/pcs',
      productionTime: '7-10 hari'
    },
    {
      id: 10,
      name: 'Bottle Sport King',
      description: 'Premium aluminum bottle dengan design yang elegan',
      image: '../img/Bottle Sport Aluminum.png',
      size: '22cm x 7.5cm',
      volume: '600ml',
      material: 'Premium Aluminum',
      features: ['Premium Finish', 'Custom Engraving Available'],
      price: 'Rp 60.000/pcs',
      productionTime: '10-14 hari',
      highlighted: true
    }
  ];

  // Tumbler Stainless Collection
  const tumblerProducts: Product[] = [
    {
      id: 11,
      name: 'Office Cup Premium',
      description: 'Tumbler office premium dengan material 304# stainless steel',
      image: '../img/Bottle Sport Ace.png',
      size: '12cm x 8cm',
      volume: '500ml',
      material: '304# SUS',
      features: ['Profesional Design', 'Heat Retention Technology'],
      price: 'Rp 65.000/pcs',
      productionTime: '7-14 hari',
      highlighted: true
    },
    {
      id: 12,
      name: 'Office Cup Standard',
      description: 'Tumbler office dengan kombinasi stainless steel dan PP',
      image: '../img/Bottle Sport Ace.png',
      size: '13cm x 7.5cm',
      volume: '350ml',
      material: '304# SUS / PP',
      features: ['Ergonomic Design', 'Easy to Clean'],
      price: 'Rp 55.000/pcs',
      productionTime: '7-14 hari'
    },
    {
      id: 13,
      name: 'Tumbler Livina',
      description: 'Tumbler compact dengan design modern',
      image: '../img/Bottle Sport Ace.png',
      size: '19.5cm x 6.5cm',
      volume: '300ml',
      material: '304# SUS',
      features: ['Compact Design', 'Perfect Travel Size'],
      price: 'Rp 40.000/pcs',
      productionTime: '7-10 hari'
    },
    {
      id: 14,
      name: 'Tumbler Sport',
      description: 'Tumbler sport dengan material premium 304# stainless steel',
      image: '../img/Vacuum Flask Sport.png',
      size: '22.5cm x 6cm',
      volume: '500ml',
      material: '304# SUS',
      features: ['Sport Design', 'Anti-slip Base'],
      price: 'Rp 70.000/pcs',
      productionTime: '7-14 hari',
      highlighted: true
    }
  ];

  // Water Bottles Collection
  const waterBottleProducts: Product[] = [
    {
      id: 15,
      name: 'Tumbler Insert Paper AS',
      description: 'Water bottle dengan material AS dan insert paper',
      image: '../img/merchandise custom.png',
      size: '20cm x 6cm',
      volume: '500ml',
      material: 'AS (Acrylonitrile Styrene)',
      features: ['Clear Design', 'Insert Paper Compatible'],
      price: 'Rp 25.000/pcs',
      productionTime: '5-7 hari',
      highlighted: true
    },
    {
      id: 16,
      name: 'Water Bottle Cruise',
      description: 'Water bottle berkapasitas besar untuk traveling',
      image: '../img/merchandise custom.png',
      size: '24.3cm x 7cm',
      volume: '750ml',
      material: 'AS',
      features: ['Large Capacity', 'Travel Friendly'],
      price: 'Rp 30.000/pcs',
      productionTime: '5-7 hari'
    },
    {
      id: 17,
      name: 'Tumbler Straw Summer',
      description: 'Tumbler dengan straw untuk musim panas',
      image: '../img/merchandise custom.png',
      size: '22cm x 7.2cm',
      volume: '500ml',
      material: 'AS',
      features: ['Include Straw', 'Summer Design'],
      price: 'Rp 28.000/pcs',
      productionTime: '5-7 hari',
      highlighted: true
    }
  ];

  // Stationery Collection
  const stationeryProducts: Product[] = [
    {
      id: 18,
      name: 'Notebook Colorful + Post It',
      description: 'Notebook warna-warni dengan post it terintegrasi',
      image: '../img/merchandise custom.png',
      size: '14cm x 17.2cm',
      volume: '',
      material: '',
      features: ['Include Post It Notes', 'Colorful Design', 'Multi-purpose Use', 'Custom Cover Available'],
      price: 'Rp 15.000/pcs',
      productionTime: '5-7 hari',
      highlighted: true
    },
    {
      id: 19,
      name: 'Notebook Superior + Post It',
      description: 'Notebook premium dengan post it dan design superior',
      image: '../img/merchandise custom.png',
      size: '15cm x 18cm',
      volume: '',
      material: '',
      features: ['Superior Quality Paper', 'Include Post It', 'Professional Design', 'Custom Logo Available'],
      price: 'Rp 18.000/pcs',
      productionTime: '5-7 hari'
    },
    {
      id: 20,
      name: 'Notebook Recycle + Post It',
      description: 'Notebook ramah lingkungan dari material recycle',
      image: '../img/merchandise custom.png',
      size: '14cm x 18cm',
      volume: '',
      material: '',
      features: ['Eco-friendly Material', 'Recycle Paper', 'Include Post It', 'Sustainable Choice'],
      price: 'Rp 16.000/pcs',
      productionTime: '5-7 hari',
      highlighted: true
    },
    {
      id: 21,
      name: 'Notebook Formal',
      description: 'Notebook formal untuk kebutuhan bisnis',
      image: '../img/merchandise custom.png',
      size: '14cm x 18cm',
      volume: '',
      material: '',
      features: ['Formal Business Design', 'Premium Paper Quality', 'Professional Look', 'Custom Branding'],
      price: 'Rp 20.000/pcs',
      productionTime: '7-10 hari'
    },
    {
      id: 22,
      name: 'Memo Leather + Post It + Pen',
      description: 'Memo lengkap dengan bahan kulit & pena',
      image: '../img/merchandise custom.png',
      size: '13.5cm x 10.5cm',
      volume: '',
      material: '',
      features: ['Leather Cover', 'Include Post It & Pen', 'Compact Design', 'Executive Style'],
      price: 'Rp 35.000/pcs',
      productionTime: '7-10 hari',
      highlighted: true
    },
    {
      id: 23,
      name: 'Umbrella Sakura Premium',
      description: 'Payung premium dengan desain sakura',
      image: '../img/merchandise custom.png',
      size: '21 inch',
      volume: '',
      material: 'Silver Plasters',
      features: ['Premium Quality Frame', 'Weather Resistant', 'Custom Print Available'],
      price: 'Rp 45.000/pcs',
      productionTime: '7-10 hari',
      highlighted: true
    }
  ];

  // Testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: '"Kualitas thermos dan tumbler dari Titik Visual sangat memuaskan! Produk TT-01 Office Series menjadi favorit karyawan dan klien."',
      clientName: 'Rina Sari',
      clientPosition: 'Procurement Manager at PT. Global Marketing',
      clientInitial: 'R'
    },
    {
      id: 2,
      text: '"Notebook dan merchandise set yang dibuat sangat profesional. Peserta event kami sangat appreciate dengan kualitas produk Titik Visual!"',
      clientName: 'Budi Hartono',
      clientPosition: 'CEO at Startup Tech Indonesia',
      clientInitial: 'B'
    }
  ];

  // Production Process Steps
  const processSteps = [
    {
      step: '01',
      title: 'Konsultasi & Brief',
      description: 'Diskusi kebutuhan, design, dan spesifikasi produk',
      duration: '1 Hari'
    },
    {
      step: '02',
      title: 'Design & Mockup',
      description: 'Pembuatan design dan mockup produk untuk approval',
      duration: '2-3 Hari'
    },
    {
      step: '03',
      title: 'Sample Production',
      description: 'Produksi sample untuk quality check (opsional)',
      duration: '3-6 Hari'
    },
    {
      step: '04',
      title: 'Mass Production',
      description: 'Produksi massal setelah approval design dan sample',
      duration: '7-21 Hari'
    },
    {
      step: '05',
      title: 'Quality Control & Delivery',
      description: 'Quality control dan pemgiriman produk jadi',
      duration: '1-2 Hari'
    }
  ];

  // Product Card Component
  const ProductCard = ({ product }: { product: Product }) => {
    return (
      <div className={`col-lg-4 col-md-6 d-flex align-items-stretch ${product.highlighted ? 'highlighted' : ''}`}>
        <div className={`product-card ${product.highlighted ? 'highlighted' : ''}`}>
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-content">
            <h4 className="product-name">{product.name}</h4>
            <p className="product-description">{product.description}</p>
            <h5>Spesifikasi:</h5>
            <ul className="product-specs">
              <li><i className="far fa-check-circle"></i> Product Size: {product.size}</li>
              {product.volume && <li><i className="far fa-check-circle"></i> Volume: {product.volume}</li>}
              {product.material && <li><i className="far fa-check-circle"></i> Material: {product.material}</li>}
              {product.features.map((feature, index) => (
                <li key={index}><i className="far fa-check-circle"></i> {feature}</li>
              ))}
            </ul>
          </div>
          <div className="product-footer">
            <div className="price-info">
              <span className="label">Harga:</span>
              <span className="price">Mulai dari {product.price}</span>
            </div>
            <div className="production-info">
              <span className="label">Produksi:</span>
              <span className="time">{product.productionTime}</span>
            </div>
            <a href="../page-contact/index.html" className="btn-order">
              <i className="fas fa-arrow-right"></i> Order Sekarang
            </a>
          </div>
        </div>
      </div>
    );
  };

  // Stationery Card Component
  const StationeryCard = ({ product, hasLine }: { product: Product, hasLine: boolean }) => {
    return (
      <div className={`stationery-card ${hasLine ? 'has-line' : ''}`}>
        <div className="img-box">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="card-body">
          <h4>{product.name}</h4>
          <p className="desc">{product.description}</p>
          <ul>
            <li><i className="far fa-check-circle"></i> Product Size: {product.size}</li>
            {product.features.map((feature, index) => (
              <li key={index}><i className="far fa-check-circle"></i> {feature}</li>
            ))}
          </ul>
          <div className="product-footer">
            <div className="footer-row">
              <span className="label">Harga:</span>
              <span className="price">Mulai dari {product.price}</span>
            </div>
            <div className="footer-row">
              <span className="label">Produksi:</span>
              <span className="time">{product.productionTime}</span>
            </div>
            <a href="../page-contact/index.html" className="btn-order">
              <i className="fas fa-arrow-right"></i> Order Sekarang
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="custom-merchandise-page">
      {/* TOP BAR & NAVBAR */}
      <div className="top-bar">
        <div className="top-left">
          <div className="item"><i className="fa-solid fa-phone"></i><span>081804376001</span></div>
          <div className="item"><i className="fa-solid fa-envelope"></i><span>titikvisualjogja@gmail.com</span></div>
        </div>
        <div className="top-right">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
      <nav className="main-nav">
        <div className="nav-left"><img src="../img/img.png" alt="Titik Visual Logo" className="logo" /></div>
        <ul className="nav-right">
          <li><a href="../beranda/index.html">Home</a></li>
          <li><a href="../page-about/index.html">Profile</a></li>
          <li className="active"><a href="../page-layanan/index.html">Layanan</a></li>
          <li><a href="../page-portfolio/index.html">Portfolio</a></li>
          <li><a href="../page-contact/index.html">Kontak</a></li>
        </ul>
        <div className="mobile-menu-toggle"><span></span><span></span><span></span></div>
      </nav>

      {/* BREADCRUMB */}
      <section className="breadcrumb">
        <div className="container">
          <a href="../beranda/index.html">Home</a> / <a href="../page-layanan/index.html">Services</a> / <span>Custom Merchandise</span>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="subtitle"><i className="fas fa-gift"></i>Custom Merchandise Premium Titik Visual</span>
            <h1>
              <span className="gradient-text">Merchandise Custom</span>
              <span className="subtitle-text">Berkualitas Premium</span>
            </h1>
            <p>Titik Visual menyediakan berbagai pilihan merchandise custom
              berkualitas tinggi. Dari thermos premium, tumbler stainless, aluminum
              bottles, hingga notebook dan payung custom. Semua produk dapat
              disesuaikan dengan brand identity Anda.</p>
            <div className="hero-buttons">
              <a href="../page-contact/index.html" className="btn btn-gradient"><i className="fa-regular fa-comment"></i> Konsultasi Gratis</a>
              <a href="../page-portfolio/index.html" className="btn btn-outline"><i className="far fa-eye"></i> Lihat Portfolio</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image">
              <img src="../img/merchandise custom.png" alt="UI/UX Design Illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="section-title text-center">
            <h2>Mengapa Pilih Merchandise Titik Visual?</h2>
            <p>Komitmen Titik Visual pada kualitas dan kepuasan pelanggan dalam setiap produk yang kami hasilkan</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-award"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Premium Quality</h5>
                  <p className="card-text">Material berkualitas tinggi dengan standar internasional.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-palette"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Custom Design</h5>
                  <p className="card-text">Design sepenuhnya custom sesuai brand identity Anda.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Fast Production</h5>
                  <p className="card-text">Proses produksi cepat dengan quality control ketat.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Competitive Price</h5>
                  <p className="card-text">Harga kompetitif dengan kualitas yang tidak dikompromikan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section id="product-catalog" className="product-catalog">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Katalog Produk Titik Visual</h2>
            <p>Berbagai pilihan merchandise premium untuk kebutuhan brand Anda</p>
          </div>

          {/* Thermos & Vacuum Flask Collection */}
          <div className="product-collection theme-blue">
            <div className="collection-header collection-header-blue">
              <h3>Thermos & Vacuum Flask Collection</h3>
              <p>Koleksi thermos premium dengan teknologi vacuum dan material 304# stainless steel</p>
            </div>

            <div className="row product-grid">
              {thermosProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Aluminum Bottles Collection */}
          <div className="product-collection theme-orange">
            <div className="collection-header">
              <h3>Aluminum Bottles Collection</h3>
              <p>Botol aluminum premium yang ringan dan tahan lama untuk aktivitas outdoor</p>
            </div>
            <div className="row product-grid">
              {aluminumProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Tumbler Stainless Collection */}
          <div className="product-collection theme-purple">
            <div className="collection-header">
              <h3>Tumbler Stainless Collection</h3>
              <p>Tumbler stainless steel berkualitas tinggi untuk kebutuhan harian dan office</p>
            </div>
            <div className="row product-grid">
              {tumblerProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Water Bottles Collection */}
          <div className="product-collection theme-bluewave">
            <div className="collection-header">
              <h3>Water Bottles Collection</h3>
              <p>Water bottles dengan material AS berkualitas tinggi dan design yang menarik</p>
            </div>
            <div className="row product-grid">
              {waterBottleProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notebooks & Stationery Collection */}
      <section className="stationery">
        <div className="container">
          <h2 className="stationery-title">Notebooks & Stationery Collection</h2>
          <p className="stationery-subtitle">
            Koleksi notebook, memo, dan payung premium untuk kebutuhan corporate dan promosi
          </p>

          <div className="stationery-grid">
            {stationeryProducts.map((product, index) => (
              <StationeryCard 
                key={product.id} 
                product={product} 
                hasLine={index % 2 === 0} // Alternating hasLine property
              />
            ))}
          </div>
        </div>
      </section>

      {/* Proses Produksi Titik Visual */}
      <section className="process-section">
        <div className="process-container">
          <h2 className="process-title">Proses Produksi Titik Visual</h2>
          <p className="process-subtitle">Metodologi yang terbukti untuk merchandise berkualitas tinggi</p>
          
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div className="process-card" key={index}>
                <div className="step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="duration">
                  <i className="fa-regular fa-clock"></i> {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Testimoni Klien Titik Visual</h2>
            <p>Testimoni dari klien yang puas dengan merchandise Titik Visual</p>
          </div>
          <div className="testimonial-grid" data-aos="fade-up" data-aos-delay="200">
            {testimonials.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-client">
                  <div className="client-avatar">{testimonial.clientInitial}</div>
                  <div className="client-info">
                    <h4>{testimonial.clientName}</h4>
                    <span>{testimonial.clientPosition}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div data-aos="fade-up">
            <h2>Siap Order Merchandise Custom dari Titik Visual?</h2>
            <p>Konsultasikan kebutuhan merchandise custom Anda dengan tim ahli Titik Visual secara gratis</p>
            <div className="cta-buttons">
              <a href="https://wa.me/6281804376001" className="btn btn-light" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-comment"></i> WhatsApp Titik Visual</a>
              <button onClick={() => window.scrollTo({ top: document.getElementById('product-catalog')?.offsetTop || 0, behavior: 'smooth' })} className="btn btn-outline-light">
                <i className="fas fa-download"></i> Download Katalog Lengkap
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <img src="../img/img.png" alt="Titik Visual Logo" className="footer-logo" />
              <p>Spesialis custom merchandise berkualitas premium untuk kebutuhan promosi dan corporate branding.</p>
            </div>
            <div className="footer-col">
              <h4>Thermos & Drinkware</h4>
              <ul className="footer-links">
                <li><button onClick={() => window.location.href = '#thermos'} className="link-button">Vacuum Flask Office Series</button></li>
                <li><button onClick={() => window.location.href = '#thermos'} className="link-button">Smart Temperature Display</button></li>
                <li><button onClick={() => window.location.href = '#thermos'} className="link-button">Tumbler Stainless Premium</button></li>
                <li><button onClick={() => window.location.href = '#aluminum'} className="link-button">Aluminum Sport Bottles</button></li>
                <li><button onClick={() => window.location.href = '#water'} className="link-button">Water Bottles Collection</button></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Stationery & Accessories</h4>
              <ul className="footer-links">
                <li><button onClick={() => window.location.href = '#stationery'} className="link-button">Notebook + Post It</button></li>
                <li><button onClick={() => window.location.href = '#stationery'} className="link-button">Memo Leather Set</button></li>
                <li><button onClick={() => window.location.href = '#stationery'} className="link-button">Umbrella Premium</button></li>
                <li><button onClick={() => window.location.href = '#water'} className="link-button">Insert Paper Tumbler</button></li>
                <li><button onClick={() => window.location.href = '#stationery'} className="link-button">Corporate Gift Sets</button></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Kontak Titik Visual</h4>
              <ul className="footer-contact">
                <li>081804376001</li>
                <li>titikvisualjogja@gmail.com</li>
                <li>Yogyakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © 2024 Titik Visual. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomMerchandisePage;