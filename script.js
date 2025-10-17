function cambiarImagen() {
    const imagen = document.getElementById('img');
    const descripcion = document.getElementById('description');
    const boton = document.getElementById('btn2');
    if (imagen.src.includes('pokemon.jpg')) {
        imagen.src = 'Zelda.gif'; 
        imagen.alt = 'Zelda';
        descripcion.textContent = 'Un gif pixel art de un paisaje de Zelda: Ocarina of Time';
        boton.style.backgroundColor = '#add8e6';
    } else {
        imagen.src = 'pokemon.jpg'; 
        imagen.alt = 'Pokemon';
        descripcion.textContent = 'Un pixel art de un paisaje de Pokemon Esmeralda';
        boton.style.backgroundColor = '#add8e6';
    }
    setTimeout(() => {
        boton.style.backgroundColor = '#008b8b';
    }, 100);
}

function cambiarEtiqueta() {
    const contenedor = document.getElementById('contenedor');
    const nomEtiqueta = document.getElementById('nomEtiqueta');
    const descEtiqueta = document.getElementById('descEtiqueta');
    const boton = document.getElementById('btn1');
    const navegador = document.getElementById('navegador');

    if (nomEtiqueta.textContent === '<nav>') {
        nomEtiqueta.textContent = '<div>';
        descEtiqueta.textContent = 'Sirve para agrupar contenido en bloques, puedes darle estilos y posicionarlo en la pagina.';
        navegador.innerHTML = "";
        contenedor.innerHTML = `<h2>Mis pasatiempos</h2>
                                <p>Mi juego sandbox favorito es Terraria, me gusta explorar y derrotar a los variados jefes que tiene el juego.</p>
                                <ul>
                                    <li><a href="https://store.steampowered.com/app/105600/Terraria/?l=spanish" target="_blank">Terraria</a></li>
                                </ul>
                                <p>Mi musica favorita es el rock, una de mis bandas favoritas es Mago de Oz.</p>
                                <ul>
                                    <li><a href="https://www.youtube.com/channel/UC6nMOIbArzvza6npl0irIWw" target="_blank">Mago de Oz</a></li>
                                    <li><a href="https://www.youtube.com/watch?v=5BiwcWDlW7k&list=RD5BiwcWDlW7k&start_radio=1" target="_blank">Mi cancion favorita de la banda</a></li>
                                </ul>`;
        contenedor.style.padding = "10px";
        contenedor.style.border = "1px solid black";
        contenedor.style.backgroundColor = "#ffffe0";
        contenedor.style.borderRadius = "8px";
    }else {
         nomEtiqueta.textContent = '<nav>';
         descEtiqueta.textContent = 'Sirve para crear menús de navegación, son enlaces que llevan a otras partes de tu pagina o sitio web.';
         contenedor.innerHTML = "";
         navegador.innerHTML = `<a href="https://github.com/Pangust-code" target="_blank">Mi GitHub</a>
                                <a href="https://www.youtube.com" target="_blank">Youtube</a>
                                <a href="https://www.twitch.tv" target="_blank">Twitch</a>`;
        contenedor.style.padding = "0"; 
        contenedor.style.border = "none";
        contenedor.style.backgroundColor = "transparent";
        contenedor.style.borderRadius = "0";
    }

    setTimeout(() => {
        boton.style.backgroundColor = '#008b8b';
    }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
    // Efecto al pasar el mouse por el título
    const titulo = document.getElementById("titulo");
    if (titulo) {
        const originalColor = window.getComputedStyle(titulo).color;
        titulo.addEventListener("mouseover", () => {
            titulo.style.color = "rgb(119, 237, 16)";
        });
        titulo.addEventListener("mouseout", () => {
            titulo.style.color = originalColor || "";
        });
    }
});