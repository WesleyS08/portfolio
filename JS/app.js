let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let top = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        }
    });
});

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);


menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.Habilidades-container, .Projetos-conteiner ,.footer, .Sobre-content', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .Sobre-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .social-media', { origin: 'right' });


// Typed
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.multiple-text', {
        strings: ['Estudante de desenvolvimento de software multiplataforma'],
        typeSpeed: 150,
        backSpeed: 100,
        backDelay: 50,
        loop: true
    });
});