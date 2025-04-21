// Fade in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    entry.target.style.transitionDelay = `${index * 100}ms`;
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.2
});

faders.forEach(el => {
  appearOnScroll.observe(el);
});
