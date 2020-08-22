const slideNav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navContainer = document.querySelector('.nav-container');

    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle NavBar
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-links-active');
        navContainer.classList.toggle('nav-container-active');

        // Animation for nav items #mobile
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `nav-link-fade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        })
    });
}

slideNav();