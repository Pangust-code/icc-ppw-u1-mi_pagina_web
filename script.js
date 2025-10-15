function cambiarImagen() {
    const imagen = document.getElementById('img');
    const descripcion = document.getElementById('description');
    const boton = document.getElementById('btn');
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