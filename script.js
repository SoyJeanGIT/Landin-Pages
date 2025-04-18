document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuHorizontal = document.querySelector('.menu-horizontal');
    
    mobileMenu.addEventListener('click', () => {
        menuHorizontal.classList.toggle('active');
    });
    
    // Inicialización de ScrollReveal
    ScrollReveal().reveal('header, h2, .card, .content-section, .card-2, .card-comentarios, footer', {
        delay: 200,
        duration: 800,
        distance: '50px',
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: true
    });
});