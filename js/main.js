const menuBtn = document.getElementById('menuBtn');
const navOverlay = document.getElementById('navOverlay');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navOverlay.classList.toggle('open');
    
    if (navOverlay.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});