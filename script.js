// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .subject-card').forEach(el => {
    observer.observe(el);
});

// Simple Log for Note Click (since they are placeholders)
document.querySelectorAll('.btn-card.notes').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.getAttribute('href') === '#') {
            e.preventDefault();
            alert('Note resources are being updated. Check back in a few hours!');
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 10%';
        nav.style.background = 'rgba(5, 5, 16, 0.95)';
    } else {
        nav.style.padding = '1.5rem 10%';
        nav.style.background = 'rgba(5, 5, 16, 0.8)';
    }
});
