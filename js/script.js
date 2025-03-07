// Animation au scroll

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navItems = document.getElementById('nav-items');
    const navLinks = document.querySelectorAll('.nav-items li a'); // Sélectionne tous les liens de la barre de navigation
    const sections = document.querySelectorAll('section'); // Sélectionne toutes les section

    // Afficher/masquer la barre de navigation lors du clic sur le bouton hamburger
    mobileMenu.addEventListener('click', function () {
        navItems.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Masquer la barre de navigation après avoir cliqué sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) { // Vérifie si l'écran est un téléphone
                navItems.classList.remove('active'); // Masque la barre de navigation
                mobileMenu.classList.remove('active'); // Retire la classe active
            }
        });
    });

    // Détecter la section active
    window.addEventListener('scroll', function () {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        // Ajouter la classe active au lien correspondant
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });
});