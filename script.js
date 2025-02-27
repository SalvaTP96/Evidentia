// Selecciona el botón de toggle y el menú
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');
const navbar = document.querySelector('.pre-header');

// Añade un evento de clic al botón de toggle
mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navbarMenu.contains(event.target);
    const isClickOnToggle = mobileMenu.contains(event.target);

    // Si el clic no fue dentro del menú ni en el botón de toggle, cierra el menú
    if (!isClickInsideMenu && !isClickOnToggle) {
        navbarMenu.classList.remove('active');
    }
});
