// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navRight = document.querySelector('.nav-right');

    if (mobileMenuToggle && navRight) {
        mobileMenuToggle.addEventListener('click', function() {
            navRight.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = navRight.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navRight.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80; // Adjust for fixed header
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe sections for animation
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

// ===== PORTFOLIO HOVER EFFECTS =====
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== PRICING CARD INTERACTIONS =====
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('click', function() {
        // Remove active class from all cards
        pricingCards.forEach(c => c.classList.remove('selected'));
        // Add active class to clicked card
        this.classList.add('selected');
    });
});

// ===== TESTIMONIAL SLIDER (if needed for mobile) =====
function initTestimonialSlider() {
    const testimonialGrid = document.querySelector('.testimonial-grid');
    const testimonials = document.querySelectorAll('.testimonial-card');

    if (window.innerWidth <= 768 && testimonials.length > 1) {
        let currentIndex = 0;

        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.style.display = i === index ? 'block' : 'none';
            });
        }

        // Add navigation dots
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'testimonial-dots';
        testimonialGrid.parentNode.insertBefore(dotsContainer, testimonialGrid.nextSibling);

        testimonials.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                currentIndex = index;
                showTestimonial(currentIndex);
                updateDots();
            });
            dotsContainer.appendChild(dot);
        });

        function updateDots() {
            const dots = document.querySelectorAll('.testimonial-dots .dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        // Auto slide
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
            updateDots();
        }, 5000);

        showTestimonial(currentIndex);
    }
}

// ===== BACK TO TOP BUTTON =====
function createBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(90deg, #2563EB, #0891B2);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    document.body.appendChild(backToTopBtn);

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
}

// ===== CTA BUTTON ACTIONS =====
const ctaButtons = document.querySelectorAll('.cta-section .btn');
ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const buttonText = this.textContent.trim();

        if (buttonText.includes('WhatsApp')) {
            // Replace with actual WhatsApp number
            window.open('https://wa.me/6281804376001?text=Halo, saya ingin konsultasi tentang website & aplikasi', '_blank');
        } else if (buttonText.includes('Download Portfolio')) {
            // Replace with actual portfolio download link
            alert('Portfolio download akan segera tersedia. Silakan hubungi kami untuk informasi lebih lanjut.');
        }
    });
});

// ===== HERO BUTTON ACTIONS =====
const heroButtons = document.querySelectorAll('.hero-buttons .btn');
heroButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const buttonText = this.textContent.trim();

        if (buttonText.includes('Konsultasi Gratis')) {
            window.open('https://wa.me/6281804376001?text=Halo, saya ingin konsultasi gratis tentang website & aplikasi', '_blank');
        } else if (buttonText.includes('Lihat Portfolio')) {
            const portfolioSection = document.getElementById('portfolio');
            if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ===== PRICING BUTTON ACTIONS =====
const pricingButtons = document.querySelectorAll('.pricing-card .btn');
pricingButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const planName = this.closest('.pricing-card').querySelector('.plan-name').textContent;
        window.open(`https://wa.me/6281804376001?text=Halo, saya tertarik dengan paket ${planName}. Bisa konsultasi dulu?`, '_blank');
    });
});

// ===== PORTFOLIO CTA BUTTON =====
const portfolioCtaBtn = document.querySelector('.portfolio-cta .btn-secondary');
if (portfolioCtaBtn) {
    portfolioCtaBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open('https://wa.me/6281804376001?text=Halo, saya ingin melihat semua portfolio website & aplikasi Anda', '_blank');
    });
}

// ===== TECH GRID ANIMATION =====
const techItems = document.querySelectorAll('.tech-item');
techItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.classList.add('tech-item-animation');
});

// ===== PROCESS ITEMS ANIMATION =====
const processItems = document.querySelectorAll('.process-item');
processItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// ===== RESPONSIVE ADJUSTMENTS =====
function handleResponsive() {
    const navRight = document.querySelector('.nav-right');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');

    if (window.innerWidth > 768) {
        // Desktop: ensure mobile menu is hidden
        if (navRight) navRight.classList.remove('active');
        if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
    }
}

window.addEventListener('resize', handleResponsive);

// ===== INITIALIZE EVERYTHING =====
document.addEventListener('DOMContentLoaded', function() {
    createBackToTopButton();
    initTestimonialSlider();
    handleResponsive();

    // Add loading class removal for smooth transitions
    document.body.classList.add('loaded');
});

// ===== LOADING ANIMATION =====
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// ===== CSS FOR ANIMATIONS (to be added to style.css if not present) =====
/*
.loaded .section-title h2 {
    animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-in {
    animation: fadeInUp 0.8s ease-out;
}

.tech-item-animation {
    animation: fadeInUp 0.8s ease-out;
    animation-fill-mode: both;
}

.nav-right.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(90deg, #A855F7, #06B6D4);
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.nav-right li {
    margin: 10px 0;
}

.pricing-card.selected {
    border-color: #2563EB;
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.3);
    transform: scale(1.02);
}

.testimonial-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

.testimonial-dots .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #e5e7eb;
    cursor: pointer;
    transition: background 0.3s ease;
}

.testimonial-dots .dot.active {
    background: #2563EB;
}

@media (max-width: 768px) {
    .testimonial-card {
        display: none;
    }
    .testimonial-card:first-child {
        display: block;
    }
}
*/
