document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navRight = document.querySelector('.nav-right');

    if (mobileMenuToggle && navRight) {
        mobileMenuToggle.addEventListener('click', function () {
            navRight.classList.toggle('show');
        });
    }
});

// Fungsi untuk Accordion FAQ
const faqItems = document.querySelectorAll('.faq-item');

// Tambahkan animasi muncul saat load
faqItems.forEach((item, index) => {
    setTimeout(() => {
        item.classList.add('visible');
    }, index * 100); // Delay bertahap untuk setiap item
});

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Cek apakah sudah ada item yang aktif
        const currentlyActiveItem = document.querySelector('.faq-item.active');

        // Tutup item lain yang sedang aktif dan bukan item yang baru diklik
        if (currentlyActiveItem && currentlyActiveItem !== item) {
            currentlyActiveItem.classList.remove('active');
        }

        // Buka atau tutup item yang diklik
        item.classList.toggle('active');
    });
});

// Fungsi untuk menandai link navigasi yang aktif
const navLinks = document.querySelectorAll('.nav-link');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});