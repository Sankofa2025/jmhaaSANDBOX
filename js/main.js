document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            // Toggle a class to show/hide the menu
            mainNav.classList.toggle('is-active');
            
            // Change the icon from hamburger to X
            if (mainNav.classList.contains('is-active')) {
                menuToggle.textContent = '✕';
                menuToggle.setAttribute('aria-expanded', 'true');
            } else {
                menuToggle.textContent = '☰';
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});
