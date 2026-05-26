const menuBtn = document.getElementById('menuBtn');
const navOverlay = document.getElementById('navOverlay');

let opened = false;

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    opened = navOverlay.classList.toggle('open');
    
    document.body.style.overflow = opened ? 'hidden' : 'auto';
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && opened) {
        menuBtn.classList.remove('active');
        navOverlay.classList.remove('open');
        document.body.style.overflow = 'auto';
        opened = false;
    }
});