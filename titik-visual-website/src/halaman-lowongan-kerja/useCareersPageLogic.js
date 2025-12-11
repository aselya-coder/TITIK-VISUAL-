import { useState, useEffect } from 'react';

// Custom Hook untuk menampung semua logika halaman Careers
const useCareersPageLogic = () => {
  // State untuk menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fungsi untuk toggle menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fungsi untuk scroll ke section tertentu
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Efek samping untuk menambahkan class saat halaman dimuat
  useEffect(() => {
    document.body.classList.add("page-loaded");
    
    // Fungsi cleanup untuk menghapus class saat komponen tidak lagi digunakan
    return () => {
      document.body.classList.remove("page-loaded");
    };
  }, []); // Array kosong berarti efek ini hanya berjalan sekali saat mount

  // Kembalikan semua state dan fungsi yang akan digunakan di komponen
  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    scrollToSection,
  };
};

export default useCareersPageLogic;