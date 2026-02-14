/* =========================================
   CEREBRO DEFINITIVO (script.js)
   ========================================= */

// Usamos las rutas completas que ya probamos que sí funcionan
const sonidoClick = new Audio('https://lyhuwu.github.io/Feliz-San-Valentin-/assets/click.mp3');
const musicaFondo = new Audio('https://lyhuwu.github.io/Feliz-San-Valentin-/assets/musica.mp3');

// Configuración de volumen al máximo (1.0)
sonidoClick.volume = 1.0; 
musicaFondo.volume = 1.0; 
musicaFondo.loop = true;

function playClick() {
    sonidoClick.currentTime = 0; 
    sonidoClick.play().catch(e => console.log("Click bloqueado: " + e.message));
}

// --- 0. INICIO ---
function iniciarSistema() {
    playClick(); // Aquí debe sonar el primer click

    // La música solo sonará si ya subiste el archivo 'musica.mp3' a GitHub
    musicaFondo.play().catch(error => {
        console.log("Música no disponible o bloqueada: " + error.message);
    });

    const pantallaInicio = document.getElementById('pantalla-inicio');
    const escritorio = document.getElementById('escritorio');
    
    pantallaInicio.style.opacity = '0';
    setTimeout(() => {
        pantallaInicio.style.display = 'none';
        escritorio.style.display = 'flex';
    }, 800);
}

// --- 1. VENTANAS ---
function abrirVentana(id) {
    playClick();
    document.querySelectorAll('.ventana-pixel').forEach(v => v.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function cerrarVentana(id) {
    playClick();
    document.getElementById(id).style.display = 'none';
}

// --- 2. MODOS DE LECTURA ---
function abrirModoLectura(idOverlay) {
    playClick();
    musicaFondo.pause(); 
    document.getElementById('escritorio').style.display = 'none';
    document.getElementById(idOverlay).style.display = 'flex';
}

function cerrarModoLectura(idOverlay) {
    playClick();
    musicaFondo.play(); 
    const video = document.querySelector('#overlay-carta video');
    if(video) video.pause();
    document.getElementById(idOverlay).style.display = 'none';
    document.getElementById('escritorio').style.display = 'flex';
    document.getElementById('win-corazon').style.display = 'block';
}

// --- 3. NAVEGACIÓN ---
function navegar(url) {
    playClick();
    setTimeout(() => { window.location.href = url; }, 300);
}

// --- 4. PREGUNTA FINAL ---
function mostrarModalPregunta() {
    playClick();
    document.getElementById('modal-backdrop').style.display = 'flex';
}
// (Agrega aquí tus funciones de aceptarValentin y esquivar si las necesitas)
