document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll('.nav-link');

    // Abre/fecha o menu
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("open");
        document.body.classList.toggle("menu-open");
    });

    // Fecha ao clicar fora
    document.addEventListener("click", function (e) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove("open");
            document.body.classList.remove("menu-open");
        }
    });

    // Links ativos
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            navMenu.classList.remove("open");
            document.body.classList.remove("menu-open");
        });
    });
});
