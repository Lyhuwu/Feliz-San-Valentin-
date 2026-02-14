/* =========================================
   CEREBRO DEFINITIVO (AUDIO + MODALES)
   ========================================= */

// 1. AUDIO (RUTAS ABSOLUTAS)
const URL_CLICK = 'https://lyhuwu.github.io/Feliz-San-Valentin-/assets/click.mp3';
const URL_MUSICA = 'https://lyhuwu.github.io/Feliz-San-Valentin-/assets/musica.mp3';

const sonidoClick = new Audio(URL_CLICK);
const musicaFondo = new Audio(URL_MUSICA);

sonidoClick.volume = 1.0;
musicaFondo.volume = 0.5;
musicaFondo.loop = true;

function playClick() {
    const clone = sonidoClick.cloneNode();
    clone.volume = 1.0;
    clone.play().catch(e => console.log("Click silenciado"));
}

// 2. SISTEMA
function iniciarSistema() {
    playClick();
    musicaFondo.play().catch(e => console.log("Música pendiente de interacción"));
    
    const intro = document.getElementById('pantalla-inicio');
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.style.display = 'none';
        document.getElementById('escritorio').style.display = 'flex';
    }, 800);
}

// 3. VENTANAS
function abrirVentana(id) {
    playClick();
    document.querySelectorAll('.ventana-pixel').forEach(v => v.style.display = 'none');
    document.getElementById(id).style.display = 'flex'; // Flex para centrar contenido
}

function cerrarVentana(id) {
    playClick();
    document.getElementById(id).style.display = 'none';
}

// 4. MODO LECTURA (PAUSA MÚSICA)
function abrirModoLectura(idOverlay) {
    playClick();
    musicaFondo.pause(); // <--- SE PAUSA
    document.getElementById('escritorio').style.display = 'none';
    document.getElementById(idOverlay).style.display = 'flex';
}

function cerrarModoLectura(idOverlay) {
    playClick();
    musicaFondo.play(); // <--- SE REANUDA
    
    const video = document.querySelector('#overlay-carta video');
    if(video) video.pause();

    document.getElementById(idOverlay).style.display = 'none';
    document.getElementById('escritorio').style.display = 'flex';
    document.getElementById('win-corazon').style.display = 'flex'; 
}

// 5. NAVEGACIÓN
function navegar(url) {
    playClick();
    setTimeout(() => { window.location.href = url; }, 300);
}

// 6. LÓGICA DE SAN VALENTÍN (BOTÓN INTELIGENTE)
function mostrarModalPregunta() {
    playClick();
    document.getElementById('modal-backdrop').style.display = 'flex';
    document.getElementById('modal-pregunta').style.display = 'block';
    document.getElementById('modal-exito').style.display = 'none';
}

function aceptarValentin() {
    playClick();
    document.getElementById('modal-pregunta').style.display = 'none';
    document.getElementById('modal-exito').style.display = 'block';
}

function volverAlEscritorio() {
    playClick();
    document.getElementById('modal-backdrop').style.display = 'none';
    document.getElementById('overlay-carta').style.display = 'none';
    document.getElementById('escritorio').style.display = 'flex';
    musicaFondo.play();
}

function esquivar() {
    const btnNo = document.getElementById('btn-no');
    const btnSi = document.querySelector('.btn-si-quiero');
    
    // Dimensiones para calcular rebote
    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;
    const rectSi = btnSi.getBoundingClientRect(); 
    
    let nuevoX, nuevoY;
    let choca = true;
    
    // Intentamos 10 veces encontrar un lugar que NO tape al botón SÍ
    for(let i=0; i<10; i++) {
        nuevoX = Math.random() * (anchoVentana - 100);
        nuevoY = Math.random() * (altoVentana - 100);
        
        // Verificamos si choca (con margen de 20px)
        if (
            nuevoX < rectSi.right + 20 &&
            nuevoX + 80 > rectSi.left - 20 &&
            nuevoY < rectSi.bottom + 20 &&
            nuevoY + 50 > rectSi.top - 20
        ) {
            continue; // Choca, intenta de nuevo
        } else {
            choca = false;
            break; // Lugar seguro encontrado
        }
    }

    btnNo.style.position = 'fixed';
    btnNo.style.left = nuevoX + 'px';
    btnNo.style.top = nuevoY + 'px';
    btnNo.style.zIndex = '3000';
}
