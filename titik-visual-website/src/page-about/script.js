// ===============================
// Navigation scroll effect
// ===============================
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===============================
// Mobile Menu Toggle
// ===============================
const mm = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav-right');

if (mm) {
    mm.addEventListener('click', () => {
        mm.classList.toggle('active');
        nav.classList.toggle('open');
    });
}

// ===============================
// Smooth scrolling for navigation links
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===============================
// Active navigation link on scroll
// ===============================
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 120)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===============================
// Contact Form Submission
// ===============================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        console.log('Form submitted:', data);

        alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');

        this.reset();
    });
}

// ===============================
// Cards Animation on Scroll
// ===============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .portfolio-card, .team-card, .testimonial-card, .value-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===============================
// Timeline Node Coloring
// ===============================
document.querySelectorAll('.entry').forEach(entry => {
    const year = entry.dataset.year;

    const colorMap = {
        "2019": "#8E24AA",
        "2020": "#5E35B1",
        "2021": "#3949AB",
        "2022": "#1E88E5",
        "2023": "#039BE5",
        "2024": "#00ACC1"
    };

    const color = colorMap[year];
    entry.style.setProperty('--node-color', color);

    const node = entry.querySelector('.node');
    if (node) node.style.borderColor = color;
});

// ===============================
// Timeline Entry Reveal Animation
// ===============================
const entryObserver = new IntersectionObserver((items) => {
    items.forEach(item => {
        if (item.isIntersecting) {
            item.target.classList.add('in-view');
            entryObserver.unobserve(item.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.entry').forEach(el => entryObserver.observe(el));

// ===============================
// Keyboard focus (Accessibility)
// ===============================
document.querySelectorAll('.node').forEach(node => {
    node.addEventListener('keydown', e => {
        if (e.key === "Enter" || e.key === " ") {
            node.classList.add("pulse");
            setTimeout(() => node.classList.remove("pulse"), 300);
        }
    });
});
