// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileOverlay = document.getElementById('mobileNavOverlay');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileOverlay.classList.toggle('open');
    document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
});

// Close mobile menu on link click
mobileOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileOverlay.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ===== FAQ Accordion =====
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isActive = item.classList.contains('active');

        // Close all
        document.querySelectorAll('.faq-item').forEach(el => {
            el.classList.remove('active');
            el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        // Open clicked (if it wasn't already open)
        if (!isActive) {
            item.classList.add('active');
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});

// ===== Scroll Fade-in Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply fade-in to sections
document.querySelectorAll(
    '.feature-card, .pricing-card, .step-card, .faq-item, .contact-card, .process-note, .section-header'
).forEach(el => {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
});

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
