document.addEventListener('DOMContentLoaded', () => {
    const BDD = 'https://source.unsplash.com/random/800x600';
    const boton = document.getElementById('btnBuscar');
    const contenedor = document.getElementById('contenedor');
    let imagen = null; // Guarda una referencia a la imagen actual

    boton.addEventListener("click", () => {
        if (imagen) {
            contenedor.removeChild(imagen); // Elimina la imagen anterior
        }
        imagen = document.createElement("div"); // Crea un nuevo div para la imagen
        imagen.classList.add("tarjeta");
        imagen.innerHTML = `<img src=${BDD}>`;

        contenedor.appendChild(imagen); // Agrega la nueva imagen al contenedor
    })
});