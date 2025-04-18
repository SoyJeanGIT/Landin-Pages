
const mobileMenu = document.getElementById('mobile-menu');
const menuHorizontal = document.querySelector('.menu-horizontal');


mobileMenu.addEventListener('click', () => {
    menuHorizontal.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const lazySections = document.querySelectorAll(".lazy-section");
    const lazyImages = document.querySelectorAll("img[loading='lazy']");

    function loadSections() {
        lazySections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.classList.add("visible"); // Muestra la sección
            }
        });
    }

    function loadImages() {
        lazyImages.forEach((img) => {
            const rect = img.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                img.src = img.dataset.src || img.src; // Carga la imagen real
                img.classList.add("loaded"); // Muestra la imagen con una transición
            }
        });
    }

    // Cargar secciones e imágenes visibles al cargar la página
    loadSections();
    loadImages();

    // Cargar secciones e imágenes al hacer scroll
    window.addEventListener("scroll", function () {
        loadSections();
        loadImages();
    });
});

ScrollReveal().reveal('header, h2, .card, .content-section, .card-2, .card-comentarios, footer', {
    delay: 200,
    duration: 800,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'botton',
    reset: true

});
