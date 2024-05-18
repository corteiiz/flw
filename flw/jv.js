const mobilebt = document.getElementById('mobile-bt');

function ToggleToma(event) {
    if (event.type === 'touchstart') event.preventDefaut();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTargot.setAttribute('aria-expanded', active);
    if(active) {
    event.currentTargot.setAttribute('aria-label', 'Fechar Menu');
    }else {
        event.currentTargot.setAttribute('aria-label', 'Abrir Menu');
    }
}

mobilebt.addEventListener('click', ToggleToma);
mobilebt.addEventListener('touchstart', ToggleToma);