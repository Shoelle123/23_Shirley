document.addEventListener('DOMContentLoaded', function () {
    // Burger Menu
    const burgerMenu = document.getElementById('burgerMenu');
    const menuContainer = document.getElementById('menuContainer');
    const closeBtn = document.getElementById('closeBtn');

    if (burgerMenu && menuContainer && closeBtn) {
        burgerMenu.addEventListener('click', function () {
            menuContainer.classList.add('show');
        });

        closeBtn.addEventListener('click', function () {
            menuContainer.classList.remove('show');
        });
    }

    // Contact Form Popup
    const openContactFormBtn = document.getElementById('openContactForm');
    const closeContactFormBtn = document.getElementById('closeContactForm');
    const contactFormPopup = document.getElementById('contact-form-popup');

    if (openContactFormBtn && closeContactFormBtn && contactFormPopup) {
        openContactFormBtn.addEventListener('click', function () {
            contactFormPopup.style.display = 'block';
        });

        closeContactFormBtn.addEventListener('click', function () {
            contactFormPopup.style.display = 'none';
        });
    }
});
