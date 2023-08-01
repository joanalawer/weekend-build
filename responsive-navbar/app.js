const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.menu-links');
const menuLinkItems = Array.from(menuLinks.querySelectorAll('a'));

hamburger.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
});

menuLinkItems.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        menuLinkItems.forEach((item) => {
            item.classList.remove('active');
        });
        link.classList.add('active');
    });
});