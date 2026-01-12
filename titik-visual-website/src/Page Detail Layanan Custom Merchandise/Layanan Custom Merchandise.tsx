import React, { useEffect, useState } from 'react';
import './style.css';
import { useContent } from '../content/ContentContext';
import merchandiseImg from '../img/merchandise custom.png';
import logoImg from '../img/img.png';
import vacuumFlaskOffice from '../img/vacuum flask office.png';
import vacuumFlaskSport from '../img/Vacuum Flask Sport.png';
import bottleAluminum from '../img/Bottle Sport Aluminum.png';
import bottleAce from '../img/Bottle Sport Ace.png';

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
  const content = useContent();
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleFooterLink = (path: string) => {
    if (path.startsWith('#')) {
      const id = path.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.history.pushState(null, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo(0, 0);
    }
  };

  // Thermos & Vacuum Flask Collection
  const thermosProducts: Product[] = [
    {
      id: 1,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_1_name', 'Vacuum Flask Office Series'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_1_desc', 'Thermos office premium dengan double wall 304# stainless steel'),
      image: vacuumFlaskOffice,
      size: '15cm x 9.5cm',
      volume: '500ml',
      material: 'Double Wall 304# SUS',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_1_feat_1', 'Vacuum Insulation Technology'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_1_feat_2', 'Custom Logo & Design Available')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_1_price', 'Rp 85.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_1_time', '10-14 hari'),
      highlighted: true
    },
    {
      id: 2,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_2_name', 'Vacuum Flask Coffee II + LED'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_2_desc', 'Thermos coffee dengan LED indicator dan teknologi vacuum'),
      image: merchandiseImg,
      size: '15cm x 7.2cm',
      volume: '500ml',
      material: 'Double Wall 304# SUS',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_2_feat_1', 'LED Temperature Indicator'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_2_feat_2', 'Custom Branding Available')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_2_price', 'Rp 125.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_2_time', '14-21 hari')
    },
    {
      id: 3,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_3_name', 'Vacuum Flask Gifts 3 in 1'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_3_desc', 'Paket gift set thermos dengan 3 fungsi dalam 1 produk'),
      image: merchandiseImg,
      size: '24cm x 7.3cm',
      volume: '500ml',
      material: 'Double Wall 304# SUS',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_3_feat_1', 'Multi-function Design'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_3_feat_2', 'Premium Gift Packaging')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_3_price', 'Rp 150.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_3_time', '14-21 hari')
    },
    {
      id: 4,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_4_name', 'Vacuum Flask Sport'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_4_desc', 'Thermos sport dengan design ergonomis untuk aktivitas outdoor'),
      image: vacuumFlaskSport,
      size: '25cm x 7cm',
      volume: '500ml',
      material: 'Double Wall 304# SUS',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_4_feat_1', 'Sport Design & Grip'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_4_feat_2', 'Leak-proof Technology')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_4_price', 'Rp 95.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_4_time', '10-14 hari'),
      highlighted: true
    },
    {
      id: 5,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_5_name', 'Bottle Sport Ace'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_5_desc', 'Botol minum olahraga dengan material Tritan yang aman'),
      image: merchandiseImg,
      size: '23cm x 6.5cm',
      volume: '750ml',
      material: 'Tritan BPA-Free',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_5_feat_1', 'Ergonomic & Lightweight'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_5_feat_2', 'Custom Logo Printing')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_5_price', 'Rp 65.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_5_time', '7-10 hari')
    },
    {
      id: 6,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_6_name', 'Tumbler Sport'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_6_desc', 'Design sporty dengan kapasitas 600ml untuk aktivitas harian'),
      image: merchandiseImg,
      size: '20.5cm x 8cm',
      volume: '600ml',
      material: 'Stainless Steel',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_6_feat_1', 'Sporty Design'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_6_feat_2', 'Easy to Carry')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_6_price', 'Rp 75.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_thermos_6_time', '7-14 hari')
    }
  ];

  // Aluminum Bottles Collection
  const aluminumProducts: Product[] = [
    {
      id: 7,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_1_name', 'Bottle Sport Aluminum'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_1_desc', 'Botol aluminum sport dengan design yang ringan dan tahan lama'),
      image: bottleAluminum,
      size: '20.5cm x 6.5cm',
      volume: '500ml',
      material: 'Premium Aluminum',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_alum_1_feat_1', 'Lightweight Design'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_alum_1_feat_2', 'Custom Color Available')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_1_price', 'Rp 45.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_1_time', '7-10 hari'),
      highlighted: true
    },
    {
      id: 8,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_2_name', 'Bottle Sport Large'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_2_desc', 'Botol aluminum berkapasitas besar untuk kebutuhan outdoor'),
      image: bottleAce,
      size: '24.5cm x 7.2cm',
      volume: '750ml',
      material: 'Premium Aluminum',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_alum_2_feat_1', 'Large Capacity'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_alum_2_feat_2', 'Durable Construction')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_2_price', 'Rp 55.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_2_time', '7-10 hari')
    },
    {
      id: 9,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_3_name', 'Bottle Sport Ace'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_3_desc', 'Design sporty dengan kapasitas 630ml untuk aktivitas harian'),
      image: merchandiseImg,
      size: '21cm x 7.2cm',
      volume: '630ml',
      material: 'Premium Aluminum',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_alum_3_feat_1', 'Sporty Design'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_alum_3_feat_2', 'Easy Grip Handle')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_3_price', 'Rp 50.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_3_time', '7-10 hari')
    },
    {
      id: 10,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_4_name', 'Bottle Sport King'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_4_desc', 'Premium aluminum bottle dengan design yang elegan'),
      image: bottleAluminum,
      size: '22cm x 7.5cm',
      volume: '600ml',
      material: 'Premium Aluminum',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_alum_4_feat_1', 'Premium Finish'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_alum_4_feat_2', 'Custom Engraving Available')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_4_price', 'Rp 60.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_alum_4_time', '10-14 hari'),
      highlighted: true
    }
  ];

  // Tumbler Stainless Collection
  const tumblerProducts: Product[] = [
    {
      id: 11,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_1_name', 'Office Cup Premium'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_1_desc', 'Tumbler office premium dengan material 304# stainless steel'),
      image: bottleAce,
      size: '12cm x 8cm',
      volume: '500ml',
      material: '304# SUS',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_1_feat_1', 'Profesional Design'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_1_feat_2', 'Heat Retention Technology')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_1_price', 'Rp 65.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_1_time', '7-14 hari'),
      highlighted: true
    },
    {
      id: 12,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_2_name', 'Office Cup Standard'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_2_desc', 'Tumbler office dengan kombinasi stainless steel dan PP'),
      image: bottleAce,
      size: '13cm x 7.5cm',
      volume: '350ml',
      material: '304# SUS / PP',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_2_feat_1', 'Ergonomic Design'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_2_feat_2', 'Easy to Clean')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_2_price', 'Rp 55.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_2_time', '7-14 hari')
    },
    {
      id: 13,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_3_name', 'Tumbler Livina'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_3_desc', 'Tumbler compact dengan design modern'),
      image: bottleAce,
      size: '19.5cm x 6.5cm',
      volume: '300ml',
      material: '304# SUS',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_3_feat_1', 'Compact Design'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_3_feat_2', 'Perfect Travel Size')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_3_price', 'Rp 40.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_3_time', '7-10 hari')
    },
    {
      id: 14,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_4_name', 'Tumbler Sport'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_4_desc', 'Tumbler sport dengan material premium 304# stainless steel'),
      image: merchandiseImg,
      size: '22.5cm x 6cm',
      volume: '500ml',
      material: '304# SUS',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_4_feat_1', 'Sport Design'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_4_feat_2', 'Anti-slip Base')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_4_price', 'Rp 70.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_tumbler_4_time', '7-14 hari'),
      highlighted: true
    }
  ];

  // Water Bottles Collection
  const waterBottleProducts: Product[] = [
    {
      id: 15,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_water_1_name', 'Tumbler Insert Paper AS'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_water_1_desc', 'Water bottle dengan material AS dan insert paper'),
      image: merchandiseImg,
      size: '20cm x 6cm',
      volume: '500ml',
      material: 'AS (Acrylonitrile Styrene)',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_water_1_feat_1', 'Clear Design'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_water_1_feat_2', 'Insert Paper Compatible')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_water_1_price', 'Rp 25.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_water_1_time', '5-7 hari'),
      highlighted: true
    },
    {
      id: 16,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_water_2_name', 'Water Bottle Cruise'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_water_2_desc', 'Water bottle berkapasitas besar untuk traveling'),
      image: merchandiseImg,
      size: '24.3cm x 7cm',
      volume: '750ml',
      material: 'AS',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_water_2_feat_1', 'Large Capacity'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_water_2_feat_2', 'Travel Friendly')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_water_2_price', 'Rp 30.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_water_2_time', '5-7 hari'),
      highlighted: false
    },
    {
      id: 17,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_water_3_name', 'Tumbler Straw Summer'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_water_3_desc', 'Tumbler dengan straw untuk musim panas'),
      image: merchandiseImg,
      size: '22cm x 7.2cm',
      volume: '500ml',
      material: 'AS',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_water_3_feat_1', 'Include Straw'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_water_3_feat_2', 'Summer Design')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_water_3_price', 'Rp 28.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_water_3_time', '5-7 hari'),
      highlighted: true
    }
  ];

  // Stationery Collection
  const stationeryProducts: Product[] = [
    {
      id: 18,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_1_name', 'Notebook Colorful + Post It'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_1_desc', 'Notebook warna-warni dengan post it terintegrasi'),
      image: merchandiseImg,
      size: '14cm x 17.2cm',
      volume: '',
      material: '',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_1_feat_1', 'Include Post It Notes'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_1_feat_2', 'Colorful Design'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_1_feat_3', 'Multi-purpose Use'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_1_feat_4', 'Custom Cover Available')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_1_price', 'Rp 15.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_1_time', '5-7 hari'),
      highlighted: true
    },
    {
      id: 19,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_2_name', 'Notebook Superior + Post It'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_2_desc', 'Notebook premium dengan post it dan design superior'),
      image: merchandiseImg,
      size: '15cm x 18cm',
      volume: '',
      material: '',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_2_feat_1', 'Superior Quality Paper'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_2_feat_2', 'Include Post It'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_2_feat_3', 'Professional Design'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_2_feat_4', 'Custom Logo Available')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_2_price', 'Rp 18.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_2_time', '5-7 hari')
    },
    {
      id: 20,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_3_name', 'Notebook Recycle + Post It'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_3_desc', 'Notebook ramah lingkungan dari material recycle'),
      image: merchandiseImg,
      size: '14cm x 18cm',
      volume: '',
      material: '',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_3_feat_1', 'Eco-friendly Material'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_3_feat_2', 'Recycle Paper'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_3_feat_3', 'Include Post It'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_3_feat_4', 'Sustainable Choice')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_3_price', 'Rp 16.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_3_time', '5-7 hari'),
      highlighted: true
    },
    {
      id: 21,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_4_name', 'Notebook Formal'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_4_desc', 'Notebook formal untuk kebutuhan bisnis'),
      image: merchandiseImg,
      size: '14cm x 18cm',
      volume: '',
      material: '',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_4_feat_1', 'Formal Business Design'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_4_feat_2', 'Premium Paper Quality'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_4_feat_3', 'Professional Look'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_4_feat_4', 'Custom Branding')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_4_price', 'Rp 20.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_4_time', '7-10 hari')
    },
    {
      id: 22,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_5_name', 'Memo Leather + Post It + Pen'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_5_desc', 'Memo lengkap dengan bahan kulit & pena'),
      image: merchandiseImg,
      size: '13.5cm x 10.5cm',
      volume: '',
      material: '',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_5_feat_1', 'Leather Cover'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_5_feat_2', 'Include Post It & Pen'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_5_feat_3', 'Compact Design'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_5_feat_4', 'Executive Style')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_5_price', 'Rp 35.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_5_time', '7-10 hari'),
      highlighted: true
    },
    {
      id: 23,
      name: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_6_name', 'Umbrella Sakura Premium'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_6_desc', 'Payung premium dengan desain sakura'),
      image: merchandiseImg,
      size: '21 inch',
      volume: '',
      material: 'Silver Plasters',
      features: [
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_6_feat_1', 'Premium Quality Frame'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_6_feat_2', 'Weather Resistant'),
        content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_6_feat_3', 'Custom Print Available')
      ],
      price: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_6_price', 'Rp 45.000/pcs'),
      productionTime: content.get('Page Detail Layanan Custom Merchandise', 'product_stationery_6_time', '7-10 hari'),
      highlighted: true
    }
  ];

  // Testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: content.get('Page Detail Layanan Custom Merchandise', 'testimonial_1_text', '"Kualitas thermos dan tumbler dari Titik Visual sangat memuaskan! Produk TT-01 Office Series menjadi favorit karyawan dan klien."'),
      clientName: content.get('Page Detail Layanan Custom Merchandise', 'testimonial_1_name', 'Rina Sari'),
      clientPosition: content.get('Page Detail Layanan Custom Merchandise', 'testimonial_1_pos', 'Procurement Manager at PT. Global Marketing'),
      clientInitial: 'R'
    },
    {
      id: 2,
      text: content.get('Page Detail Layanan Custom Merchandise', 'testimonial_2_text', '"Notebook dan merchandise set yang dibuat sangat profesional. Peserta event kami sangat appreciate dengan kualitas produk Titik Visual!"'),
      clientName: content.get('Page Detail Layanan Custom Merchandise', 'testimonial_2_name', 'Budi Hartono'),
      clientPosition: content.get('Page Detail Layanan Custom Merchandise', 'testimonial_2_pos', 'CEO at Startup Tech Indonesia'),
      clientInitial: 'B'
    }
  ];

  // Production Process Steps
  const processSteps = [
    {
      step: '01',
      title: content.get('Page Detail Layanan Custom Merchandise', 'process_1_title', 'Konsultasi & Brief'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'process_1_desc', 'Diskusi kebutuhan, design, dan spesifikasi produk'),
      duration: content.get('Page Detail Layanan Custom Merchandise', 'process_1_time', '1 Hari')
    },
    {
      step: '02',
      title: content.get('Page Detail Layanan Custom Merchandise', 'process_2_title', 'Design & Mockup'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'process_2_desc', 'Pembuatan design dan mockup produk untuk approval'),
      duration: content.get('Page Detail Layanan Custom Merchandise', 'process_2_time', '2-3 Hari')
    },
    {
      step: '03',
      title: content.get('Page Detail Layanan Custom Merchandise', 'process_3_title', 'Sample Production'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'process_3_desc', 'Produksi sample untuk quality check (opsional)'),
      duration: content.get('Page Detail Layanan Custom Merchandise', 'process_3_time', '3-6 Hari')
    },
    {
      step: '04',
      title: content.get('Page Detail Layanan Custom Merchandise', 'process_4_title', 'Mass Production'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'process_4_desc', 'Produksi massal setelah approval design dan sample'),
      duration: content.get('Page Detail Layanan Custom Merchandise', 'process_4_time', '7-21 Hari')
    },
    {
      step: '05',
      title: content.get('Page Detail Layanan Custom Merchandise', 'process_5_title', 'Quality Control & Delivery'),
      description: content.get('Page Detail Layanan Custom Merchandise', 'process_5_desc', 'Quality control dan pemgiriman produk jadi'),
      duration: content.get('Page Detail Layanan Custom Merchandise', 'process_5_time', '1-2 Hari')
    }
  ];

  // Product Card Component
  const ProductCard = ({ product }: { product: Product }) => {
    return (
      <div className={`product-card ${product.highlighted ? 'highlighted' : ''}`}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-content">
          <h4 className="product-name">{product.name}</h4>
          <p className="product-description">{product.description}</p>
          <h5>{content.get('Page Detail Layanan Custom Merchandise', 'card_specs_title', 'Spesifikasi:')}</h5>
          <ul className="product-specs">
            <li><i className="far fa-check-circle"></i> {content.get('Page Detail Layanan Custom Merchandise', 'card_specs_size', 'Product Size:')} {product.size}</li>
            {product.volume && <li><i className="far fa-check-circle"></i> {content.get('Page Detail Layanan Custom Merchandise', 'card_specs_volume', 'Volume:')} {product.volume}</li>}
            {product.material && <li><i className="far fa-check-circle"></i> {content.get('Page Detail Layanan Custom Merchandise', 'card_specs_material', 'Material:')} {product.material}</li>}
            {product.features.map((feature, index) => (
              <li key={index}><i className="far fa-check-circle"></i> {feature}</li>
            ))}
          </ul>
        </div>
        <div className="product-footer">
          <div className="price-info">
            <span className="label">{content.get('Page Detail Layanan Custom Merchandise', 'card_price_label', 'Harga:')}</span>
            <span className="price">{content.get('Page Detail Layanan Custom Merchandise', 'card_price_start', 'Mulai dari')} {product.price}</span>
          </div>
          <div className="production-info">
            <span className="label">{content.get('Page Detail Layanan Custom Merchandise', 'card_production_label', 'Produksi:')}</span>
            <span className="time">{product.productionTime}</span>
          </div>
          <a href="/contact" onClick={(e) => { e.preventDefault(); handleFooterLink('/contact'); }} className="btn-order">
            <i className="fas fa-arrow-right"></i> {content.get('Page Detail Layanan Custom Merchandise', 'card_order_btn', 'Order Sekarang')}
          </a>
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
            <li><i className="far fa-check-circle"></i> {content.get('Page Detail Layanan Custom Merchandise', 'card_specs_size', 'Product Size:')} {product.size}</li>
            {product.features.map((feature, index) => (
              <li key={index}><i className="far fa-check-circle"></i> {feature}</li>
            ))}
          </ul>
          <div className="product-footer">
            <div className="footer-row">
              <span className="label">{content.get('Page Detail Layanan Custom Merchandise', 'card_price_label', 'Harga:')}</span>
              <span className="price">{content.get('Page Detail Layanan Custom Merchandise', 'card_price_start', 'Mulai dari')} {product.price}</span>
            </div>
            <div className="footer-row">
              <span className="label">{content.get('Page Detail Layanan Custom Merchandise', 'card_production_label', 'Produksi:')}</span>
              <span className="time">{product.productionTime}</span>
            </div>
            <a href="/contact" onClick={(e) => { e.preventDefault(); window.history.pushState(null, '', '/contact'); window.dispatchEvent(new PopStateEvent('popstate')); window.scrollTo(0, 0); }} className="btn-order">
              <i className="fas fa-arrow-right"></i> {content.get('Page Detail Layanan Custom Merchandise', 'card_order_btn', 'Order Sekarang')}
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="custom-merchandise-page">
      

      {/* BREADCRUMB */}
      <section className="breadcrumb">
        <div className="container">
          <a href="/" onClick={(e) => { e.preventDefault(); handleFooterLink('/'); }}>{content.get('Page Detail Layanan Custom Merchandise', 'breadcrumb_home', 'Home')}</a> / <a href="/services" onClick={(e) => { e.preventDefault(); handleFooterLink('/services'); }}>{content.get('Page Detail Layanan Custom Merchandise', 'breadcrumb_services', 'Services')}</a> / <span>{content.get('Page Detail Layanan Custom Merchandise', 'breadcrumb_current', 'Custom Merchandise')}</span>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="subtitle"><i className="fas fa-gift"></i>{content.get('Page Detail Layanan Custom Merchandise', 'hero_badge', 'Custom Merchandise Premium Titik Visual')}</span>
            <h1>
              <span className="gradient-text-green">{content.get('Page Detail Layanan Custom Merchandise', 'hero_title_line1', 'Merchandise Custom')}</span>
              <span className="subtitle-text">{content.get('Page Detail Layanan Custom Merchandise', 'hero_title_line2', 'Berkualitas Premium')}</span>
            </h1>
            <p>
              {content.get('Page Detail Layanan Custom Merchandise', 'hero_desc', 'Titik Visual menyediakan berbagai pilihan merchandise custom berkualitas tinggi. Dari thermos premium, tumbler stainless, aluminum bottles, hingga notebook dan payung custom. Semua produk dapat disesuaikan dengan brand identity Anda.')}
            </p>
            <div className="hero-buttons">
              <a href={content.get('Page Detail Layanan Custom Merchandise', 'hero_btn_consult_href', 'https://wa.me/6281804376001')} className="btn btn-green" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-comment"></i> {content.get('Page Detail Layanan Custom Merchandise', 'hero_btn_consult_label', 'Konsultasi Gratis')}</a>
              <a href="/portfolio" onClick={(e) => { e.preventDefault(); handleFooterLink('/portfolio'); }} className="btn btn-outline-green"><i className="far fa-eye"></i> {content.get('Page Detail Layanan Custom Merchandise', 'hero_btn_catalog_label', 'Lihat Katalog Lengkap')}</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={merchandiseImg} alt="Merchandise Custom" />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="section-title text-center">
            <h2>{content.get('Page Detail Layanan Custom Merchandise', 'why_us_title', 'Mengapa Pilih Merchandise Titik Visual?')}</h2>
            <p>{content.get('Page Detail Layanan Custom Merchandise', 'why_us_subtitle', 'Komitmen Titik Visual pada kualitas dan kepuasan pelanggan dalam setiap produk yang kami hasilkan')}</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-award"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{content.get('Page Detail Layanan Custom Merchandise', 'why_us_1_title', 'Premium Quality')}</h5>
                  <p className="card-text">{content.get('Page Detail Layanan Custom Merchandise', 'why_us_1_desc', 'Material berkualitas tinggi dengan standar internasional')}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-palette"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{content.get('Page Detail Layanan Custom Merchandise', 'why_us_2_title', 'Custom Design')}</h5>
                  <p className="card-text">{content.get('Page Detail Layanan Custom Merchandise', 'why_us_2_desc', 'Design sepenuhnya custom sesuai brand identity Anda')}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{content.get('Page Detail Layanan Custom Merchandise', 'why_us_3_title', 'Fast Production')}</h5>
                  <p className="card-text">{content.get('Page Detail Layanan Custom Merchandise', 'why_us_3_desc', 'Proses produksi cepat dengan quality control ketat')}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{content.get('Page Detail Layanan Custom Merchandise', 'why_us_4_title', 'Competitive Price')}</h5>
                  <p className="card-text">{content.get('Page Detail Layanan Custom Merchandise', 'why_us_4_desc', 'Harga kompetitif dengan kualitas yang tidak dikompromikan')}</p>
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
            <h2>{content.get('Page Detail Layanan Custom Merchandise', 'catalog_title', 'Katalog Produk Titik Visual')}</h2>
            <p>{content.get('Page Detail Layanan Custom Merchandise', 'catalog_subtitle', 'Berbagai pilihan merchandise premium untuk kebutuhan brand Anda')}</p>
          </div>

          {/* Thermos & Vacuum Flask Collection */}
          <div className="product-collection theme-blue">
            <div className="collection-header collection-header-blue">
              <h3>{content.get('Page Detail Layanan Custom Merchandise', 'collection_thermos_title', 'Thermos & Vacuum Flask Collection')}</h3>
              <p>{content.get('Page Detail Layanan Custom Merchandise', 'collection_thermos_subtitle', 'Koleksi thermos premium dengan teknologi vacuum dan material 304# stainless steel')}</p>
            </div>

            <div className="product-grid">
              {thermosProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Aluminum Bottles Collection */}
          <div className="product-collection theme-orange">
            <div className="collection-header">
              <h3>{content.get('Page Detail Layanan Custom Merchandise', 'collection_aluminum_title', 'Aluminum Bottles Collection')}</h3>
              <p>{content.get('Page Detail Layanan Custom Merchandise', 'collection_aluminum_subtitle', 'Botol aluminum premium yang ringan dan tahan lama untuk aktivitas outdoor')}</p>
            </div>
            <div className="product-grid">
              {aluminumProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Tumbler Stainless Collection */}
          <div className="product-collection theme-purple">
            <div className="collection-header">
              <h3>{content.get('Page Detail Layanan Custom Merchandise', 'collection_tumbler_title', 'Tumbler Stainless Collection')}</h3>
              <p>{content.get('Page Detail Layanan Custom Merchandise', 'collection_tumbler_subtitle', 'Tumbler stainless steel berkualitas tinggi untuk kebutuhan harian dan office')}</p>
            </div>
            <div className="product-grid">
              {tumblerProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Water Bottles Collection */}
          <div className="product-collection theme-bluewave">
            <div className="collection-header">
              <h3>{content.get('Page Detail Layanan Custom Merchandise', 'collection_water_title', 'Water Bottles Collection')}</h3>
              <p>{content.get('Page Detail Layanan Custom Merchandise', 'collection_water_subtitle', 'Water bottles dengan material AS berkualitas tinggi dan design yang menarik')}</p>
            </div>
            <div className="product-grid">
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
          <h2 className="stationery-title">{content.get('Page Detail Layanan Custom Merchandise', 'stationery_title', 'Notebooks & Stationery Collection')}</h2>
          <p className="stationery-subtitle">
            {content.get('Page Detail Layanan Custom Merchandise', 'stationery_subtitle', 'Koleksi notebook, memo, dan payung premium untuk kebutuhan corporate dan promosi')}
          </p>

          <div className="stationery-grid">
            {stationeryProducts.map((product, index) => (
              <StationeryCard 
                key={product.id} 
                product={product} 
                hasLine={index % 2 === 0 || index === 5}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Proses Produksi Titik Visual */}
      <section className="process-section">
        <div className="process-container">
          <h2 className="process-title">{content.get('Page Detail Layanan Custom Merchandise', 'process_title', 'Proses Produksi Titik Visual')}</h2>
          <p className="process-subtitle">{content.get('Page Detail Layanan Custom Merchandise', 'process_subtitle', 'Metodologi yang terbukti untuk merchandise berkualitas tinggi')}</p>
          
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div className="process-card" key={index}>
                <div className="step-number">{step.step}</div>
                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="duration">
                    <i className="fa-regular fa-clock"></i> {step.duration}
                  </div>
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
            <h2 className="gradient-green">{content.get('Page Detail Layanan Custom Merchandise', 'testimonials_title', 'Testimoni Klien Titik Visual')}</h2>
            <p>{content.get('Page Detail Layanan Custom Merchandise', 'testimonials_subtitle', 'Testimoni dari klien yang puas dengan merchandise Titik Visual')}</p>
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
      <section className="cta gradient-cta">
        <div className="container">
          <div data-aos="fade-up">
            <h2>{content.get('Page Detail Layanan Custom Merchandise', 'cta_bottom_title', 'Siap Order Merchandise Custom dari Titik Visual?')}</h2>
            <p>{content.get('Page Detail Layanan Custom Merchandise', 'cta_bottom_desc', 'Konsultasikan kebutuhan merchandise custom Anda dengan tim ahli Titik Visual secara gratis')}</p>
            <div className="cta-buttons">
              <a href={content.get('Page Detail Layanan Custom Merchandise', 'cta_whatsapp_href', 'https://wa.me/6281804376001')} className="btn btn-light" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-comment"></i> {content.get('Page Detail Layanan Custom Merchandise', 'cta_bottom_wa_label', 'WhatsApp Titik Visual')}</a>
              <button onClick={() => window.scrollTo({ top: document.getElementById('product-catalog')?.offsetTop || 0, behavior: 'smooth' })} className="btn btn-outline-light">
                <i className="fas fa-download"></i> {content.get('Page Detail Layanan Custom Merchandise', 'cta_bottom_dl_label', 'Download Katalog Lengkap')}
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
              <img src={logoImg} alt="Titik Visual Logo" className="footer-logo" />
              <p>{content.get('Page Detail Layanan Custom Merchandise', 'footer_desc', 'Spesialis custom merchandise berkualitas premium untuk kebutuhan promosi dan corporate branding.')}</p>
            </div>
            <div className="footer-col">
              <h4>{content.get('Page Detail Layanan Custom Merchandise', 'footer_col1_title', 'Thermos & Drinkware')}</h4>
              <ul className="footer-links">
                <li><button onClick={() => handleFooterLink('#thermos')} className="link-button">{content.get('Page Detail Layanan Custom Merchandise', 'footer_col1_link1', 'Vacuum Flask Office Series')}</button></li>
                <li><button onClick={() => handleFooterLink('#thermos')} className="link-button">{content.get('Page Detail Layanan Custom Merchandise', 'footer_col1_link2', 'Smart Temperature Display')}</button></li>
                <li><button onClick={() => handleFooterLink('#thermos')} className="link-button">{content.get('Page Detail Layanan Custom Merchandise', 'footer_col1_link3', 'Tumbler Stainless Premium')}</button></li>
                <li><button onClick={() => handleFooterLink('#aluminum')} className="link-button">{content.get('Page Detail Layanan Custom Merchandise', 'footer_col1_link4', 'Aluminum Sport Bottles')}</button></li>
                <li><button onClick={() => handleFooterLink('#water')} className="link-button">{content.get('Page Detail Layanan Custom Merchandise', 'footer_col1_link5', 'Water Bottles Collection')}</button></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{content.get('Page Detail Layanan Custom Merchandise', 'footer_col2_title', 'Stationery & Accessories')}</h4>
              <ul className="footer-links">
                <li><button onClick={() => handleFooterLink('#stationery')} className="link-button">{content.get('Page Detail Layanan Custom Merchandise', 'footer_col2_link1', 'Notebook + Post It')}</button></li>
                <li><button onClick={() => handleFooterLink('#stationery')} className="link-button">{content.get('Page Detail Layanan Custom Merchandise', 'footer_col2_link2', 'Memo Leather Set')}</button></li>
                <li><button onClick={() => handleFooterLink('#stationery')} className="link-button">{content.get('Page Detail Layanan Custom Merchandise', 'footer_col2_link3', 'Umbrella Premium')}</button></li>
                <li><button onClick={() => handleFooterLink('#water')} className="link-button">{content.get('Page Detail Layanan Custom Merchandise', 'footer_col2_link4', 'Insert Paper Tumbler')}</button></li>
                <li><button onClick={() => handleFooterLink('#stationery')} className="link-button">{content.get('Page Detail Layanan Custom Merchandise', 'footer_col2_link5', 'Corporate Gift Sets')}</button></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{content.get('Page Detail Layanan Custom Merchandise', 'footer_contact_title', 'Kontak Titik Visual')}</h4>
              <ul className="footer-contact">
                <li>{content.get('Page Detail Layanan Custom Merchandise', 'footer_contact_phone', '081804376001')}</li>
                <li>{content.get('Page Detail Layanan Custom Merchandise', 'footer_contact_email', 'titikvisualjogja@gmail.com')}</li>
                <li>{content.get('Page Detail Layanan Custom Merchandise', 'footer_contact_address', 'Yogyakarta, Indonesia')}</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            {content.get('Page Detail Layanan Custom Merchandise', 'footer_copyright', '© 2025 Titik Visual. All rights reserved.')}
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={handleScrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'linear-gradient(90deg, #10B981, #059669)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          opacity: showBackToTop ? 1 : 0,
          visibility: showBackToTop ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default CustomMerchandisePage;
