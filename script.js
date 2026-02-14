/* =========================================
   CEREBRO DEL SISTEMA (script.js)
   ========================================= */

// --- 1. CARGAR AUDIOS ---
// Usamos "new Audio" para no depender del HTML
// Asegúrate de que en tu carpeta assets los nombres sean MINÚSCULAS
const sonidoClick = new Audio('https://lyhuwu.github.io/Feliz-San-Valentin-/assets/click.mp3');
const musicaFondo = new Audio('assets/musica.mp3');

// Configuración inicial
musicaFondo.loop = true;  // Que se repita infinitamente
musicaFondo.volume = 0.5; // Volumen música (50%)
sonidoClick.volume = 1.0; // Volumen click (100%)

// Función para reproducir click (reiniciándolo para que suene rápido)
function playClick() {
    sonidoClick.currentTime = 0; 
    // El .catch evita que salga error si el navegador bloquea el sonido rápido
    sonidoClick.play().catch(e => console.log("Click pendiente de interacción..."));
}

// --- 0. PANTALLA DE INICIO ---
function iniciarSistema() {
    // 1. Sonar click
    playClick();

    // 2. Intentar arrancar música
    musicaFondo.play().then(() => {
        console.log("Música iniciada");
    }).catch(error => {
        console.log("Música bloqueada por el navegador hasta el próximo click");
    });

    // 3. Transición visual
    const pantallaInicio = document.getElementById('pantalla-inicio');
    const escritorio = document.getElementById('escritorio');
    
    pantallaInicio.style.opacity = '0';
    setTimeout(() => {
        pantallaInicio.style.display = 'none';
        escritorio.style.display = 'flex';
    }, 800);
}

// --- 1. ABRIR/CERRAR VENTANAS ---
function abrirVentana(id) {
    playClick();
    // Cierra otras ventanas para mantener orden
    document.querySelectorAll('.ventana-pixel').forEach(v => v.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function cerrarVentana(id) {
    playClick();
    document.getElementById(id).style.display = 'none';
}

// --- 2. MODOS DE LECTURA (CARTA/PLAYLIST) ---
function abrirModoLectura(idOverlay) {
    playClick();
    musicaFondo.pause(); // Pausar música de fondo para ver video/spotify
    document.getElementById('escritorio').style.display = 'none';
    document.getElementById(idOverlay).style.display = 'flex';
}

function cerrarModoLectura(idOverlay) {
    playClick();
    musicaFondo.play(); // Reanudar música
    
    // Si hay un video (en la carta), pausarlo
    const video = document.querySelector('#overlay-carta video');
    if(video) video.pause();

    document.getElementById(idOverlay).style.display = 'none';
    document.getElementById('escritorio').style.display = 'flex';
    document.getElementById('win-corazon').style.display = 'block';
}

// --- 3. NAVEGACIÓN A OTROS PROYECTOS ---
function navegar(url) {
    playClick();
    // Esperamos 300ms para que se escuche el click antes de cambiar de página
    setTimeout(() => { 
        window.location.href = url; 
    }, 300);
}

// --- 4. SAN VALENTÍN (PREGUNTA) ---
function mostrarModalPregunta() {
    playClick();
    document.getElementById('modal-backdrop').style.display = 'flex';
    document.getElementById('modal-pregunta').style.display = 'block';
}

function aceptarValentin() {
    playClick();
    document.getElementById('modal-pregunta').style.display = 'none';
    document.getElementById('modal-exito').style.display = 'block';
    musicaFondo.volume = 1.0; // Subir volumen para celebrar
}

function volverAlEscritorio() {
    playClick();
    document.getElementById('modal-backdrop').style.display = 'none';
    document.getElementById('modal-exito').style.display = 'none';
    document.getElementById('overlay-carta').style.display = 'none';
    document.getElementById('escritorio').style.display = 'flex';
    document.querySelectorAll('.ventana-pixel').forEach(v => v.style.display = 'none');
    
    musicaFondo.volume = 0.5;
    musicaFondo.play();
}

function esquivar() {
    const btn = document.getElementById('btn-no');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    btn.style.position = 'fixed'; 
    btn.style.left = x + 'px'; 
    btn.style.top = y + 'px';
}
