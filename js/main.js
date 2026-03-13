document.addEventListener("DOMContentLoaded", function() {
    // 1. Detección de ruta dinámica
    const isIndex = !window.location.pathname.includes('html/');
    const pathPrefix = isIndex ? 'html/' : '';
    const indexPrefix = isIndex ? '' : '../';

    // 2. Definición del HTML de la Navbar con submenús detallados
    const navbarHTML = `
    <nav class="navbar">
        <div class="container">
            <a href="${indexPrefix}index.html" class="logo">Francés <span>Desde Cero</span></a>
            
            <button class="menu-toggle" id="mobile-menu">☰</button>

            <ul class="nav-links" id="nav-list">
                <li><a href="${indexPrefix}index.html">Inicio</a></li>
                
                <li class="dropdown">
                    <a href="${pathPrefix}fundamentos.html" class="dropbtn">Fundamentos I ▾</a>
                    <ul class="dropdown-content">
                        <li><a href="${pathPrefix}fundamentos.html#cap1">Cap 1: Pronunciación</a></li>
                        <li><a href="${pathPrefix}fundamentos.html#cap2">Cap 2: Frases simples</a></li>
                        <li><a href="${pathPrefix}fundamentos.html#cap3">Cap 3: Être y Avoir</a></li>
                        <li><a href="${pathPrefix}fundamentos.html#cap4">Cap 4: Artículos y Género</a></li>
                        <li><a href="${pathPrefix}fundamentos.html#cap5">Cap 5: Presente (-ER)</a></li>
                        <li><a href="${pathPrefix}fundamentos.html#cap6">Cap 6: Negación y Preguntas</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="${pathPrefix}construccion.html" class="dropbtn">Construcción II ▾</a>
                    <ul class="dropdown-content">
                        <li><a href="${pathPrefix}construccion.html#cap7">Cap 7: Irregulares (Aller, Faire)</a></li>
                        <li><a href="${pathPrefix}construccion.html#cap8">Cap 8: Rutina Diaria</a></li>
                        <li><a href="${pathPrefix}construccion.html#cap9">Cap 9: Passé Composé</a></li>
                        <li><a href="${pathPrefix}construccion.html#cap10">Cap 10: Futuro Próximo</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="${pathPrefix}expansion.html" class="dropbtn">Expansión III ▾</a>
                    <ul class="dropdown-content">
                        <li><a href="${pathPrefix}expansion.html#cap11">Cap 11: Vocabulario Avanzado</a></li>
                        <li><a href="${pathPrefix}expansion.html#cap12">Cap 12: Conversación Cotidiana</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    `;

    // 3. Inyectar Navbar
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // 4. Lógica de interactividad para el menú móvil
    const menuBtn = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (menuBtn && navList) {
        menuBtn.addEventListener('click', function() {
            navList.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace (importante para anclajes ID)
        const links = navList.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }
});