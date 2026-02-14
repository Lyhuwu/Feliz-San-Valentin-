// Rutas confirmadas de tus archivos
const URL_CLICK = 'https://lyhuwu.github.io/Feliz-San-Valentin-/assets/click.mp3';
const URL_MUSICA = 'https://lyhuwu.github.io/Feliz-San-Valentin-/assets/musica.mp3';

// Creación de objetos de audio
const sonidoClick = new Audio(URL_CLICK);
const musicaFondo = new Audio(URL_MUSICA);

// Configuración de audio
sonidoClick.volume = 1.0; 
musicaFondo.volume = 0.7; 
musicaFondo.loop = true;

// Función para el sonido de click general
function playClick() {
    const claxon = sonidoClick.cloneNode();
    claxon.play().catch(e => console.warn("Click bloqueado por el navegador"));
}

// Inicia el sistema, desbloquea audio y oculta intro
function iniciarSistema() {
    playClick();
    musicaFondo.play().catch(error => {
        console.error("Error al cargar la música. Revisa si musica.mp3 existe en assets.");
    });

    document.getElementById('pantalla-inicio').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('pantalla-inicio').style.display = 'none';
        document.getElementById('escritorio').style.display = 'flex';
    }, 800);
}

// Gestión de carpetas/apps
function abrirVentana(id) {
    playClick();
    document.querySelectorAll('.ventana-pixel').forEach(v => v.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function cerrarVentana(id) {
    playClick();
    document.getElementById(id).style.display = 'none';
}

// Control inteligente de música para Carta y Playlist
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

// Navegación con delay para que suene el click antes de salir
function navegar(url) {
    playClick();
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// Modales finales
function mostrarModalPregunta() {
    playClick();
    document.getElementById('modal-backdrop').style.display = 'flex';
}

function volverAlEscritorio() {
    playClick();
    document.getElementById('modal-backdrop').style.display = 'none';
    document.getElementById('overlay-carta').style.display = 'none';
    document.getElementById('escritorio').style.display = 'flex';
}
