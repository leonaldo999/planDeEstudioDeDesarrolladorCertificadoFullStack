// Hamburguesa JS mejorado
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', function () {
  navUl.classList.toggle('active');
  const expanded = hamburger.getAttribute('aria-expanded') === 'false';
  hamburger.setAttribute('aria-expanded', expanded);

  // Animación del icono hamburguesa
  hamburger.style.transform = expanded ? 'rotate(180deg)' : 'rotate(0deg)';
});

// Cerrar menú hamburguesa al hacer clic en un enlace
function closeNavMobile() {
  navUl.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.style.transform = 'rotate(0deg)';
}

// Smooth scroll mejorado
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

// Efecto parallax sutil
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const header = document.querySelector('.header');
  header.style.transform = `translateY(${scrolled * 0.1}px)`;
});

// Mostrar/ocultar botón to-top
const toTopBtn = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    toTopBtn.style.opacity = '1';
    toTopBtn.style.transform = 'scale(1)';
  } else {
    toTopBtn.style.opacity = '0';
    toTopBtn.style.transform = 'scale(0.8)';
  }
});