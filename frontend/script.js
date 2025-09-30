// Animated particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 15; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.width = Math.random() * 100 + 50 + 'px';
  particle.style.height = particle.style.width;
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = Math.random() * 100 + '%';
  particle.style.animationDelay = Math.random() * 20 + 's';
  particle.style.animationDuration = Math.random() * 10 + 15 + 's';
  particlesContainer.appendChild(particle);
}

// Get started button with ripple effect
document.getElementById('get-started-btn').addEventListener('click', function(e) {
  const welcomeMessages = [
    "Welcome to ConnectMind! Let's unlock your potential together! 🚀",
    "Your learning journey begins now! Excited to have you aboard! 🎓",
    "Ready to transform your learning experience? Let's go! ✨"
  ];
  const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
  alert(randomMessage);
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});

// Add hover effect sound (optional - commented out)
// document.querySelectorAll('.feature-card').forEach(card => {
//   card.addEventListener('mouseenter', () => {
//     // Add sound effect here if desired
//   });
// });
