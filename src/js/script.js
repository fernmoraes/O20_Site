// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu-link');

    function setActiveLink() {
        menuLinks.forEach(link => {
            link.classList.remove('active');
        });

        this.classList.add('active');
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', setActiveLink);
    });

    // Verifica a URL atual e define o link ativo
    const currentPath = window.location.pathname.split('/').pop();
    menuLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPath)) {
            link.classList.add('active');
        }
    });
});
