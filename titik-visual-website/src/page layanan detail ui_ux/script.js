document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Pastikan elemennya ada sebelum menambahkan event listener
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Toggle class 'active' pada menu dan ikon
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
});