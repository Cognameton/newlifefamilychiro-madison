/* =========================================================
   New Life Family Chiropractic – Madison, AL
   Interactive Script
   ========================================================= */

(function () {
    'use strict';

    // ============ Mobile Nav Toggle ============
    const mobileToggle = document.getElementById('mobileToggle');
    const mainNav = document.getElementById('mainNav');
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('open');
            mainNav.classList.toggle('open');
        });
        // Close on link click
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('open');
                mainNav.classList.remove('open');
            });
        });
    }

    // ============ Sticky Header Effect ============
    const header = document.getElementById('mainHeader');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        });
    }

    // ============ Hero Slider ============
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('#sliderDots .dot');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    let currentSlide = 0;
    let sliderTimer;

    function showSlide(index) {
        slides.forEach((s, i) => s.classList.toggle('active', i === index));
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        currentSlide = index;
    }
    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }
    function prevSlide() {
        showSlide((currentSlide - 1 + slides.length) % slides.length);
    }
    function startAuto() {
        sliderTimer = setInterval(nextSlide, 6000);
    }
    function resetAuto() {
        clearInterval(sliderTimer);
        startAuto();
    }

    if (slides.length > 1) {
        if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAuto(); });
        if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAuto(); });
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                showSlide(parseInt(dot.dataset.slide, 10));
                resetAuto();
            });
        });
        startAuto();
    }

    // ============ Active Nav Link on Scroll ============
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    function setActiveLink() {
        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }
    window.addEventListener('scroll', setActiveLink);

    // ============ Smooth Scroll for Anchor Links ============
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }
        });
    });

    // ============ Accessibility Toolbar ============
    const body = document.body;
    let baseFontSize = 16;

    const incText = document.getElementById('incText');
    const decText = document.getElementById('decText');
    if (incText) incText.addEventListener('click', () => {
        baseFontSize = Math.min(baseFontSize + 1, 22);
        document.documentElement.style.fontSize = baseFontSize + 'px';
    });
    if (decText) decText.addEventListener('click', () => {
        baseFontSize = Math.max(baseFontSize - 1, 12);
        document.documentElement.style.fontSize = baseFontSize + 'px';
    });

    const toggleClass = (cls) => body.classList.toggle(cls);
    const setup = (id, cls) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', () => toggleClass(cls));
    };
    setup('grayscaleBtn', 'grayscale');
    setup('invertBtn', 'invert');
    setup('underlineBtn', 'links-underline');
    setup('highlightBtn', 'highlight-links');
    setup('readableBtn', 'readable-font');

    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) resetBtn.addEventListener('click', () => {
        baseFontSize = 16;
        document.documentElement.style.fontSize = '16px';
        body.classList.remove('grayscale', 'invert', 'links-underline', 'highlight-links', 'readable-font');
    });

    // ============ Contact Form Submission ============
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const captcha = document.getElementById('captcha');
            if (captcha && parseInt(captcha.value, 10) !== 7) {
                captcha.style.borderColor = '#d44';
                captcha.focus();
                return;
            }
            if (captcha) captcha.style.borderColor = '';

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }

            try {
                const data = new FormData(contactForm);
                data.append('_subject', 'New Message – New Life Family Chiropractic Madison');
                data.append('_captcha', 'false');
                const res = await fetch('https://formsubmit.co/ajax/madisonnewlife02@gmail.com', {
                    method: 'POST',
                    headers: { 'Accept': 'application/json' },
                    body: data
                });
                if (res.ok) {
                    contactForm.reset();
                    if (formSuccess) {
                        formSuccess.classList.add('show');
                        setTimeout(() => formSuccess.classList.remove('show'), 6000);
                    }
                } else {
                    alert('There was a problem sending your message. Please call us at (256) 301-0110.');
                }
            } catch {
                alert('There was a problem sending your message. Please call us at (256) 301-0110.');
            } finally {
                if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send Message'; }
            }
        });
    }

    // ============ Intersection Observer for Reveal Animations ============
    if ('IntersectionObserver' in window) {
        const reveal = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    reveal.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('.service-card, .testimonial-card, .quick-link-card, .info-block').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity .6s ease, transform .6s ease';
            reveal.observe(el);
        });
    }

    // ============ Year auto-update in footer (if added later) ============
    // (kept for future use)

})();
