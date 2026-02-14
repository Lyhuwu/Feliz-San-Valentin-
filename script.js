/* =========================================
   CEREBRO CON DIAGNÓSTICO (script.js)
   ========================================= */

// Pruebas iniciales
console.log("El script se cargó correctamente");

// 1. CARGA DE AUDIO
const clickSound = new Audio('assets/click.mp3');
const bgm = new Audio('assets/musica.mp3');

// Configuración
bgm.loop = true;
bgm.volume = 0.5;

function playClick() {
    clickSound.currentTime = 0;
    // Intentamos reproducir y si falla, mostramos por qué
    clickSound.play().catch(error => {
        console.log("Error click: " + error.message);
    });
}

// --- 0. INICIO DEL SISTEMA ---
function iniciarSistema() {
    // PRUEBA 1: ¿Entra a la función?
    alert("1. Botón presionado. Intentando sonido...");

    playClick();

    // PRUEBA 2: Intentar música
    bgm.play()
        .then(() => {
            alert("2. ¡Música iniciada con éxito! 🎵");
        })
        .catch(error => {
            // AQUÍ SALDRÁ EL ERROR REAL
            alert("3. ERROR DE AUDIO: " + error.message);
        });

    // Ocultar pantalla (después de aceptar la alerta)
    const pantallaInicio = document.getElementById('pantalla-inicio');
    const escritorio = document.getElementById('escritorio');
    
    pantallaInicio.style.opacity = '0';
    setTimeout(() => {
        pantallaInicio.style.display = 'none';
        escritorio.style.display = 'flex';
    }, 800);
}

// --- GESTIÓN DE VENTANAS (Simple) ---
function abrirVentana(id) {
    playClick();
    document.querySelectorAll('.ventana-pixel').forEach(v => v.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function cerrarVentana(id) {
    playClick();
    document.getElementById(id).style.display = 'none';
}

// --- MODOS DE LECTURA ---
function abrirModoLectura(idOverlay) {
    playClick();
    bgm.pause(); // Pausa música
    document.getElementById('escritorio').style.display = 'none';
    document.getElementById(idOverlay).style.display = 'flex';
}

function cerrarModoLectura(idOverlay) {
    playClick();
    bgm.play(); // Reanuda música
    
    // Pausar video carta si existe
    const video = document.querySelector('#overlay-carta video');
    if(video) video.pause();

    document.getElementById(idOverlay).style.display = 'none';
    document.getElementById('escritorio').style.display = 'flex';
    document.getElementById('win-corazon').style.display = 'block';
}

// --- NAVEGACIÓN ---
function navegar(url) {
    playClick();
    setTimeout(() => { window.location.href = url; }, 300);
}

// --- SAN VALENTIN ---
function mostrarModalPregunta() {
    playClick();
    document.getElementById('modal-backdrop').style.display = 'flex';
    document.getElementById('modal-pregunta').style.display = 'block';
}

function aceptarValentin() {
    playClick();
    document.getElementById('modal-pregunta').style.display = 'none';
    document.getElementById('modal-exito').style.display = 'block';
    bgm.volume = 1.0; 
}

function volverAlEscritorio() {
    playClick();
    document.getElementById('modal-backdrop').style.display = 'none';
    document.getElementById('modal-exito').style.display = 'none';
    document.getElementById('overlay-carta').style.display = 'none';
    document.getElementById('escritorio').style.display = 'flex';
    document.querySelectorAll('.ventana-pixel').forEach(v => v.style.display = 'none');
    bgm.volume = 0.5;
    bgm.play();
}

function esquivar() {
    const btn = document.getElementById('btn-no');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    btn.style.position = 'fixed'; btn.style.left = x + 'px'; btn.style.top = y + 'px';
}
