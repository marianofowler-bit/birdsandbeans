// DOMContentLoaded ensures the script runs after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navegador = document.querySelector('.navegador');

    if (menuToggle && navegador) {
        menuToggle.addEventListener('click', () => {
            // Toggle the 'active' class on the navigation menu
            navegador.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Close the mobile menu when a link is clicked
    document.querySelectorAll('.navegador a').forEach(link => {
        link.addEventListener('click', () => {
            if (navegador.classList.contains('active')) {
                navegador.classList.remove('active');
            }
        });
    });
});