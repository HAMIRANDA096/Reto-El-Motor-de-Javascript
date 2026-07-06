document.addEventListener("DOMContentLoaded", () => {

    // Botones
    const btnColor = document.getElementById("cambiarColor");
    const btnImagen = document.getElementById("cambiarImagen");

    // Elementos de la página
    const imagen = document.getElementById("auto");
    const nombre = document.getElementById("nombreAuto");
    const descripcion = document.getElementById("descripcionAuto");

    // Variables
    let indice = 0;
    let fondoOscuro = true;

    // Información de los autos
    const autos = [

        {
            imagen: "./IMG/triomlm.png",
            nombre: "Trío de Superdeportivos",
            descripcion: "Una colección de automóviles deportivos de lujo que incluye Aston Martin, Lamborghini, Maserati y McLaren. Cada uno representa un estilo diferente de ingeniería y alto rendimiento."
        },

        {
            imagen: "./IMG/astonma.png",
            nombre: "Aston Martin",
            descripcion: "Aston Martin es una marca británica fundada en 1913. Sus vehículos destacan por combinar lujo, elegancia y un excelente desempeño. Es mundialmente conocida por ser el automóvil de James Bond."
        },

        {
            imagen: "./IMG/lamb.png",
            nombre: "Lamborghini",
            descripcion: "Lamborghini es una empresa italiana especializada en superdeportivos. Sus modelos son famosos por su diseño agresivo, motores V10 y V12, y una velocidad impresionante."
        },

        {
            imagen: "./IMG/masserati.png",
            nombre: "Maserati",
            descripcion: "Maserati es una marca italiana de vehículos deportivos de lujo. Sus automóviles ofrecen un equilibrio entre confort, elegancia y altas prestaciones."
        },

        {
            imagen: "./IMG/mclaren.png",
            nombre: "McLaren",
            descripcion: "McLaren Automotive fabrica superdeportivos inspirados en la Fórmula 1. Sus vehículos utilizan fibra de carbono, motores biturbo y tecnología de competición."
        }

    ];

    // Cambiar imagen y descripción

    btnImagen.addEventListener("click", () => {

        indice++;

        if (indice >= autos.length) {
            indice = 0;
        }

        imagen.src = autos[indice].imagen;
        nombre.textContent = autos[indice].nombre;
        descripcion.textContent = autos[indice].descripcion;

    });

    // Cambiar color del fondo a color vino

    btnColor.addEventListener("click", () => {

        if (fondoOscuro) {

            document.body.style.backgroundColor = "#5a1f1f";

        } else {

            document.body.style.backgroundColor = "rgb(22,15,15)";

        }

        fondoOscuro = !fondoOscuro;

    });

    // Modal para zoom de la imagen

    imagen.addEventListener("click", () => {

        const modal = document.createElement("div");
        modal.classList.add("modal");

        const imgGrande = document.createElement("img");
        imgGrande.src = imagen.src;

        modal.appendChild(imgGrande);

        document.body.appendChild(modal);

        modal.addEventListener("click", () => {
            modal.remove();
        });

    });

});