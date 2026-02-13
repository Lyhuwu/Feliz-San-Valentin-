<script>
        // Variables de audio
        const bgm = document.getElementById('bgm');
        const clickSound = document.getElementById('sfx-click');

        // Ajustar volumen (opcional: 0.5 es 50%)
        bgm.volume = 0.4; 
        clickSound.volume = 0.6;

        function reproducirClick() {
            // Reinicia el audio para poder tocarlo rapido varias veces
            clickSound.currentTime = 0; 
            clickSound.play().catch(e => console.log("Audio bloqueado hasta interactuar"));
        }

        // --- 0. INICIO ---
        function iniciarSistema() {
            reproducirClick(); // Suena click
            
            // INICIA LA MÚSICA DE FONDO
            bgm.play().then(() => {
                console.log("Música iniciada");
            }).catch(error => {
                console.log("El navegador bloqueó el autoplay, intenta interactuar más.");
            });

            const pantallaInicio = document.getElementById('pantalla-inicio');
            const escritorio = document.getElementById('escritorio');
            
            pantallaInicio.style.opacity = '0';
            setTimeout(() => {
                pantallaInicio.style.display = 'none';
                escritorio.style.display = 'flex';
            }, 800);
        }

        // --- 1. VENTANAS (Carpetas) ---
        function abrirVentana(id) {
            reproducirClick(); // Suena click
            document.querySelectorAll('.ventana-pixel').forEach(v => v.style.display = 'none');
            document.getElementById(id).style.display = 'block';
        }
        
        function cerrarVentana(id) {
            reproducirClick(); // Suena click
            document.getElementById(id).style.display = 'none';
        }

        // --- 2. MODOS DE LECTURA (Carta/Playlist) ---
        function abrirModoLectura(idOverlay) {
            reproducirClick(); // Suena click
            
            // PAUSAR MÚSICA DE FONDO (Para escuchar el video o spotify)
            bgm.pause();

            document.getElementById('escritorio').style.display = 'none';
            document.getElementById(idOverlay).style.display = 'flex';
        }
        
        function cerrarModoLectura(idOverlay) {
            reproducirClick(); // Suena click
            
            // REANUDAR MÚSICA DE FONDO
            bgm.play();

            document.getElementById(idOverlay).style.display = 'none';
            document.getElementById('escritorio').style.display = 'flex';
            document.getElementById('win-corazon').style.display = 'block';
        }

        // --- 3. SAN VALENTIN ---
        function mostrarModalPregunta() {
            reproducirClick();
            document.getElementById('modal-backdrop').style.display = 'flex';
            document.getElementById('modal-pregunta').style.display = 'block';
        }
        
        function aceptarValentin() {
            reproducirClick();
            document.getElementById('modal-pregunta').style.display = 'none';
            document.getElementById('modal-exito').style.display = 'block';
            
            // Opcional: Subir volumen para celebrar
            bgm.volume = 1.0; 
        }
        
        function volverAlEscritorio() {
            reproducirClick();
            // Si el video de la carta seguía sonando, esto lo detiene:
            const videos = document.querySelectorAll('video');
            videos.forEach(video => video.pause());

            document.getElementById('modal-backdrop').style.display = 'none';
            document.getElementById('modal-exito').style.display = 'none';
            document.getElementById('overlay-carta').style.display = 'none';
            document.getElementById('escritorio').style.display = 'flex';
            document.querySelectorAll('.ventana-pixel').forEach(v => v.style.display = 'none');
            
            // Asegurar que la música de fondo suene de nuevo
            bgm.play();
        }

        function esquivar() {
            const btn = document.getElementById('btn-no');
            // Sonido opcional al esquivar (puedes quitarlo si molesta)
            // reproducirClick(); 
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 100);
            btn.style.position = 'fixed'; btn.style.left = x + 'px'; btn.style.top = y + 'px';
            btn.style.zIndex = 1000;
        }
    </script>
