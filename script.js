// Smooth scrolling for in-page navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        document.querySelectorAll('.nav-link').forEach((link) => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        hamburger.classList.toggle('active');
    });
}

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Lightweight demo handling for local forms
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks! You can also subscribe directly on the HimaRaj Vlogs YouTube channel.');
        newsletterForm.reset();
    });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks for reaching out! Add your preferred contact method here if you want messages to go somewhere specific.');
        contactForm.reset();
    });
}

// In-page channel highlights player
const channelPlayer = document.querySelector('#channel-player');
const playerTitle = document.querySelector('#player-title');
const playerDescription = document.querySelector('#player-description');
const videoTabs = document.querySelectorAll('.video-tab');

if (channelPlayer && videoTabs.length) {
    videoTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const videoId = tab.dataset.videoId;
            const title = tab.dataset.title;
            const description = tab.dataset.description;

            if (videoId) {
                channelPlayer.src = `https://www.youtube.com/embed/${videoId}`;
            }

            if (playerTitle && title) {
                playerTitle.textContent = title;
            }

            if (playerDescription && description) {
                playerDescription.textContent = description;
            }

            videoTabs.forEach((item) => item.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}

// Add scroll-in animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.video-card, .category-card, .about-content, .contact-content, .embed-card, .library-copy, .video-player-shell, .video-tabs-panel').forEach((item) => {
    observer.observe(item);
});

const style = document.createElement('style');
style.textContent = `
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
`;
document.head.appendChild(style);

console.log('HimaRaj Vlogs site loaded successfully.');
