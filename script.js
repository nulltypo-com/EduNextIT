document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const contactForm = document.getElementById('contactForm');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    function reveal() {
        const reveals = document.querySelectorAll('.why-card, .community-card, .course-card, .success-card, .about-content, .careers-content, .journey-step, .enrollment-card, .contact-content');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', reveal);
    reveal();

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    const whyCards = document.querySelectorAll('.why-card');
    whyCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    const communityCards = document.querySelectorAll('.community-card');
    communityCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    const journeySteps = document.querySelectorAll('.journey-step');
    journeySteps.forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.2}s`;
    });

    const timelineDots = document.querySelectorAll('.timeline-dot');
    let currentDot = 0;
    
    setInterval(() => {
        timelineDots.forEach((dot, index) => {
            if (index === currentDot) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        currentDot = (currentDot + 1) % timelineDots.length;
    }, 2000);
});
