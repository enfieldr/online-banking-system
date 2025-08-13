// =============================
// main.js - BankX Interactivity
// =============================

// ======= Mobile Menu Toggle =======
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.createElement('button');
menuToggle.textContent = "☰";
menuToggle.classList.add('menu-toggle');
document.querySelector('.navbar .container').prepend(menuToggle);

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
});

// ======= Smooth Scroll =======
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// ======= Hero "Get Started" Button =======
document.getElementById('getStartedBtn')?.addEventListener('click', () => {
    // Change this to your registration page or login
    window.location.href = "/register";
});

// ======= Scroll Animation for Feature Cards =======
const featureCards = document.querySelectorAll('.feature-card');
const services = document.querySelectorAll('.services-grid article');

function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    [...featureCards, ...services].forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.classList.add('show');
        } else {
            card.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// ======= AI Chatbot Placeholder =======
function openChatbot() {
    alert("AI Chatbot feature coming soon!");
}
// Example trigger: document.querySelector('#chatbotBtn').addEventListener('click', openChatbot);

// ======= Dynamic Year in Footer =======
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} BankX. All rights reserved.`;
