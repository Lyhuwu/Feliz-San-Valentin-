/* ===========================================================
   CEREBRO DEL SISTEMA (SanValentin Base)
   =========================================================== */

// 1. CONFIGURACIÓN DE AUDIO (Rutas Absolutas para evitar errores)
const URL_CLICK = 'https://lyhuwu.github.io/Feliz-San-Valentin-/assets/click.mp3';
const URL_MUSICA = 'https://lyhuwu.github.io/Feliz-San-Valentin-/assets/musica.mp3';

const sonidoClick = new Audio(URL_CLICK);
const musicaFondo = new Audio(URL_MUSICA);

// Ajustes de volumen
sonidoClick.volume = 1.0; 
musicaFondo.volume = 0.5; 
musicaFondo.loop = true;

// Función para asegurar que el click suene rápido
function playClick() {
    const clone = sonidoClick.cloneNode();
    clone.volume = 1.0;
    clone.play().catch(e => console.log("Click silenciado por el navegador"));
}

/* ===========================================================
   FUNCIONES DE INTERACCIÓN
   =========================================================== */

// 1. INICIAR EL SISTEMA (Pantalla de intro)
function iniciarSistema() {
    playClick(); // Suena el primer click
    
    // Intentamos arrancar la música
    musicaFondo.play().catch(error => {
        console.log("Música bloqueada. Revisa si el archivo 'musica.mp3' está en la carpeta assets.");
    });

    // Transición suave
    const pantallaInicio = document.getElementById('pantalla-inicio');
    const escritorio = document.getElementById('escritorio');
    
    pantallaInicio.style.opacity = '0';
    setTimeout(() => {
        pantallaInicio.style.display = 'none';
        escritorio.style.display = 'flex';
    }, 800);
}

// 2. ABRIR VENTANAS (.exe)
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

// 3. ABRIR MODOS DE LECTURA (Aquí está la lógica de la música)
function abrirModoLectura(idOverlay) {
    playClick();
    musicaFondo.pause(); // <--- LA MÚSICA SE CALLA AQUÍ
    
    document.getElementById('escritorio').style.display = 'none';
    document.getElementById(idOverlay).style.display = 'flex';
}

function cerrarModoLectura(idOverlay) {
    playClick();
    musicaFondo.play(); // <--- LA MÚSICA VUELVE AQUÍ
    
    // Si el video estaba sonando, lo pausamos también
    const video = document.querySelector('#overlay-carta video');
    if(video) video.pause();

    document.getElementById(idOverlay).style.display = 'none';
    document.getElementById('escritorio').style.display = 'flex';
    
    // Reabrimos la ventana de corazón para que no se pierda
    document.getElementById('win-corazon').style.display = 'block';
}

// 4. NAVEGACIÓN (Enlaces externos)
function navegar(url) {
    playClick();
    setTimeout(() => { window.location.href = url; }, 300);
}

// 5. SAN VALENTÍN (Pregunta final)
function mostrarModalPregunta() {
    playClick();
    document.getElementById('modal-backdrop').style.display = 'flex';
}

function aceptarValentin() {
    playClick();
    alert("¡SABÍA QUE DIRÍAS QUE SÍ! 💖"); 
    // Si tienes un modal de éxito, cambia el alert por: 
    // document.getElementById('modal-exito').style.display = 'block';
}

function esquivar() {
    const btn = document.getElementById('btn-no');
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}
