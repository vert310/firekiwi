// Email form submission
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('.email-input').value;
    
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    
    // Show success message (you can customize this)
    const button = this.querySelector('.cta-button');
    const originalText = button.textContent;
    button.textContent = '✓ Notified!';
    button.style.background = '#4CAF50';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        this.querySelector('.email-input').value = '';
    }, 2000);
});

// Mascot blink animation
const mascot = document.getElementById('mascot');
if (mascot) {
    // Random blink every 6-10 seconds
    function randomBlink() {
        const delay = Math.random() * 4000 + 6000; // 6-10 seconds
        
        setTimeout(() => {
            mascot.style.opacity = '0.3';
            setTimeout(() => {
                mascot.style.opacity = '1';
                randomBlink();
            }, 150);
        }, delay);
    }
    
    // Start blinking after initial load
    setTimeout(randomBlink, 6000);
}

// Smooth scroll for anchor links
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

// Add subtle parallax effect to mascot on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const mascotContainer = document.querySelector('.mascot-container');
    
    if (mascotContainer && scrollY < window.innerHeight) {
        const parallax = scrollY * 0.3;
        mascotContainer.style.transform = `translateY(${parallax}px)`;
    }
    
    lastScroll = scrollY;
});

