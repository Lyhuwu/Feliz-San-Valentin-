/* =========================================
   CEREBRO DEL SISTEMA (script.js)
   ========================================= */

// --- 1. CONFIGURACIÓN DE AUDIO ---
const bgm = document.getElementById('bgm');         // Música de fondo
const clickSound = document.getElementById('sfx-click'); // Efecto click

// Ajustar volúmenes (0.0 a 1.0)
if (bgm) bgm.volume = 0.4;       // Música al 40% (suave)
if (clickSound) clickSound.volume = 0.6; // Click al 60%

// Función para reproducir el sonido "Click" instantáneamente
function playClick() {
    if (clickSound) {
        clickSound.currentTime = 0; // Reinicia el audio para clicks rápidos
        clickSound.play().catch(e => console.log("Audio bloqueado por navegador"));
    }
}

// --- 0. INICIO DEL SISTEMA ---
function iniciarSistema() {
    playClick(); // Suena el primer click
    
    // Intentar reproducir música de fondo
    if (bgm) {
        bgm.play().then(() => {
            console.log("Música de fondo iniciada");
        }).catch(e => {
            console.log("Autoplay bloqueado, el usuario debe interactuar más");
        });
    }

    const pantallaInicio = document.getElementById('pantalla-inicio');
    const escritorio = document.getElementById('escritorio');
    
    // Efecto visual de desaparición
    pantallaInicio.style.opacity = '0';
    setTimeout(() => {
        pantallaInicio.style.display = 'none';
        escritorio.style.display = 'flex';
    }, 800);
}

// --- 1. GESTIÓN DE VENTANAS (CARPETAS) ---
function abrirVentana(id) {
    playClick();
    // Cierra todas las ventanas antes de abrir la nueva para que no se amontonen
    document.querySelectorAll('.ventana-pixel').forEach(v => v.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function cerrarVentana(id) {
    playClick();
    document.getElementById(id).style.display = 'none';
}

// --- 2. MODOS DE LECTURA (CARTA/PLAYLIST) ---
// Aquí ocurre la magia de pausar la música
function abrirModoLectura(idOverlay) {
    playClick();
    
    // PAUSAR MÚSICA DE FONDO (Para escuchar el video o Spotify tranquilamente)
    if (bgm) bgm.pause();

    // Ocultar escritorio y mostrar el contenido
    document.getElementById('escritorio').style.display = 'none';
    document.getElementById(idOverlay).style.display = 'flex';
}

function cerrarModoLectura(idOverlay) {
    playClick();
    
    // REANUDAR MÚSICA DE FONDO
    if (bgm) bgm.play();

    // Si cerramos la carta, pausar el video por si se quedó sonando
    const videoCarta = document.querySelector('#overlay-carta video');
    if(videoCarta) videoCarta.pause();

    // Ocultar overlay y restaurar escritorio
    document.getElementById(idOverlay).style.display = 'none';
    document.getElementById('escritorio').style.display = 'flex';
    
    // Volver a abrir la carpeta corazón automáticamente
    document.getElementById('win-corazon').style.display = 'block';
}

// --- 3. NAVEGACIÓN EXTERNA CON SONIDO ---
// Usa esta función para ir a Universo, Suerte y Monitos
function navegar(url) {
    playClick();
    
    // Esperamos 300ms (0.3 segundos) para que se escuche el click 
    // antes de que el navegador cambie de página
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// --- 4. LÓGICA DE SAN VALENTÍN (PREGUNTA) ---
function mostrarModalPregunta() {
    playClick();
    document.getElementById('modal-backdrop').style.display = 'flex';
    document.getElementById('modal-pregunta').style.display = 'block';
}

function aceptarValentin() {
    playClick();
    document.getElementById('modal-pregunta').style.display = 'none';
    document.getElementById('modal-exito').style.display = 'block';
    
    // Opcional: Subir volumen para celebrar
    if (bgm) bgm.volume = 1.0; 
}

function volverAlEscritorio() {
    playClick();
    
    // Resetear todo a como estaba al principio
    document.getElementById('modal-backdrop').style.display = 'none';
    document.getElementById('modal-exito').style.display = 'none';
    document.getElementById('overlay-carta').style.display = 'none';
    
    document.getElementById('escritorio').style.display = 'flex';
    
    // Cerrar todas las ventanas
    document.querySelectorAll('.ventana-pixel').forEach(v => v.style.display = 'none');
    
    // Asegurar que música suene a volumen normal
    if (bgm) {
        bgm.volume = 0.4;
        bgm.play();
    }
}

// Botón "No" que se escapa
function esquivar() {
    const btn = document.getElementById('btn-no');
    // Generar posición aleatoria en la pantalla
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    
    btn.style.position = 'fixed'; 
    btn.style.left = x + 'px'; 
    btn.style.top = y + 'px';
    btn.style.zIndex = 1000;
}
