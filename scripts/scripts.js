const navOpenButton = document.querySelector('.mobile-nav-open-button');
const navCloseButton = document.querySelector('.mobile-nav-close-button');
const nav = document.querySelector('nav');
const navBackground = document.querySelector('.nav-background');


function openMobileNav() {
    nav.classList.add('nav-open');
    navBackground.classList.add('nav-open');
}


function closeMobileNav() {
    nav.classList.remove('nav-open');
    navBackground.classList.remove('nav-open');
}

navOpenButton.addEventListener('click', openMobileNav);
navCloseButton.addEventListener('click', closeMobileNav);
navBackground.addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
        closeMobileNav();
    }
});

function headerBuffer() {
    const headerBuffer = document.querySelector('.header-buffer');
    const header = document.querySelector('header');
    
    headerBuffer.style.height = `${header.clientHeight}px`;
};

headerBuffer();

const player = new Plyr('#player', {});
// Expose player so it can be used from the console
window.player = player;