/* =========================================
   CEREBRO DEL SISTEMA (script.js) - VERSIÓN INFALIBLE
   ========================================= */

// --- 1. CARGA DE AUDIO DIRECTA ---
// Usamos "new Audio" para forzar la carga del archivo que YA VIMOS QUE EXISTE.
// Ruta relativa: busca en la carpeta assets que está junto a mí.
const sonidoClick = new Audio('assets/click.mp3');
const musicaFondo = new Audio('assets/musica.mp3');

// Configuración
sonidoClick.volume = 1.0; // Volumen máximo para que lo escuches sí o sí
musicaFondo.volume = 0.5; 
musicaFondo.loop = true;  // Que se repita la música

// Función para hacer sonar el click
function playClick() {
    // Esto reinicia el audio para que puedas dar click rápido muchas veces
    sonidoClick.currentTime = 0; 
    
    // Intentar reproducir y avisar si hay error
    var promesa = sonidoClick.play();
    
    if (promesa !== undefined) {
        promesa.catch(error => {
            // Si entra aquí, es porque el navegador bloqueó el sonido
            console.log("El navegador no dejó sonar el click todavía: " + error);
        });
    }
}

// --- 0. INICIO DEL SISTEMA ---
function iniciarSistema() {
    playClick(); // ¡DEBERÍA SONAR AQUÍ!

    // Intentar arrancar la música
    musicaFondo.play().catch(e => console.log("Música pendiente de interacción"));

    const pantallaInicio = document.getElementById('pantalla-inicio');
    const escritorio = document.getElementById('escritorio');
    
    // Animación de salida
    pantallaInicio.style.opacity = '0';
    setTimeout(() => {
        pantallaInicio.style.display = 'none';
        escritorio.style.display = 'flex';
    }, 800);
}

// --- 1. GESTIÓN DE VENTANAS ---
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
    musicaFondo.pause(); // Pausar música
    document.getElementById('escritorio').style.display = 'none';
    document.getElementById(idOverlay).style.display = 'flex';
}

function cerrarModoLectura(idOverlay) {
    playClick();
    musicaFondo.play(); // Reanudar música
    
    // Pausar video si estaba sonando
    const video = document.querySelector('#overlay-carta video');
    if(video) video.pause();

    document.getElementById(idOverlay).style.display = 'none';
    document.getElementById('escritorio').style.display = 'flex';
    document.getElementById('win-corazon').style.display = 'block';
}

// --- 3. NAVEGACIÓN EXTERNA ---
function navegar(url) {
    playClick();
    setTimeout(() => { window.location.href = url; }, 300);
}

// --- 4. SAN VALENTÍN ---
function mostrarModalPregunta() {
    playClick();
    document.getElementById('modal-backdrop').style.display = 'flex';
    document.getElementById('modal-pregunta').style.display = 'block';
}

function aceptarValentin() {
    playClick();
    document.getElementById('modal-pregunta').style.display = 'none';
    document.getElementById('modal-exito').style.display = 'block';
    musicaFondo.volume = 1.0; // Subir volumen de celebración
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
    btn.style.position = 'fixed'; btn.style.left = x + 'px'; btn.style.top = y + 'px';
}
