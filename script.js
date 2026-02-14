// Rutas Absolutas (Para evitar el 404 Not Found)
const URL_CLICK = 'https://lyhuwu.github.io/Feliz-San-Valentin-/assets/click.mp3';
const URL_MUSICA = 'https://lyhuwu.github.io/Feliz-San-Valentin-/assets/musica.mp3';

const sonidoClick = new Audio(URL_CLICK);
const musicaFondo = new Audio(URL_MUSICA);

sonidoClick.volume = 1.0;
musicaFondo.volume = 0.6;
musicaFondo.loop = true;

function playClick() {
    const claxon = sonidoClick.cloneNode();
    claxon.play().catch(e => console.log("Audio bloqueado"));
}

function iniciarSistema() {
    playClick();
    musicaFondo.play().catch(e => console.log("Revisa si el nombre musica.mp3 es correcto en assets"));
    
    document.getElementById('pantalla-inicio').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('pantalla-inicio').style.display = 'none';
        document.getElementById('escritorio').style.display = 'flex';
    }, 800);
}

function abrirVentana(id) {
    playClick();
    document.querySelectorAll('.ventana-pixel').forEach(v => v.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function cerrarVentana(id) {
    playClick();
    document.getElementById(id).style.display = 'none';
}

function abrirModoLectura(idOverlay) {
    playClick();
    musicaFondo.pause();
    document.getElementById('escritorio').style.display = 'none';
    document.getElementById(idOverlay).style.display = 'flex';
}

function cerrarModoLectura(idOverlay) {
    playClick();
    musicaFondo.play();
    const video = document.getElementById('video-carta');
    if(video) video.pause();
    document.getElementById(idOverlay).style.display = 'none';
    document.getElementById('escritorio').style.display = 'flex';
}

function navegar(url) {
    playClick();
    setTimeout(() => { window.location.href = url; }, 300);
}

function mostrarModalPregunta() {
    playClick();
    document.getElementById('modal-backdrop').style.display = 'flex';
}

function esquivar() {
    const btn = document.getElementById('btn-no');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}
