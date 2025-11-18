const grande = document.getElementById("grande")
const photo = document.getElementById ("picture") 

/*Para el cambio de idioma*/
let idiomaActual = "es";
const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");

/***************************/

/******Para el cambio de idioma*******/



langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        idiomaActual = button.dataset.language;
        cargarRecetas(idiomaActual);
        fetch(`../${button.dataset.language}.json`)
        .then(res => res.json())
        .then(data => {
            textsToChange.forEach((el) => {
                const section = el.dataset.section;
                const value = el.dataset.value;

                el.innerHTML = data[section][value];
            })
        })
    })
});
/***************************************/


let recetas = [];
function cargarRecetas(idioma) {
    fetch(`../${idioma}Recetas.json`)
        .then(r => r.json())
        .then(data => {
            recetas = data;
            iniciarEventosDeImagenes();
        });
}

// Cargar recetas al inicio con idioma por defecto
cargarRecetas(idiomaActual);

let tituloReceta = document.getElementById("tituloReceta")
let textoReceta = document.getElementById("texto-receta")

let imagenes = [...document.querySelectorAll(".imagen")]
let ID = parseInt(photo.dataset.id)
let bReceta = document.getElementById("miBoton")

const equisCerrar = document.getElementById("equisCerrar")
equisCerrar.addEventListener("click", (e) => {
    grande.style.display = "none"
})



function iniciarEventosDeImagenes() {
    let posicion = 0;

    imagenes.forEach((elemento, i) => {
        elemento.addEventListener("click", (e) => {
            posicion = i;
            grande.style.display = "flex";
            photo.src = elemento.src;

            ID = parseInt(elemento.dataset.id);
            let receta = recetas.find(r => r.ID === ID);

            tituloReceta.innerHTML = receta.Nombre;
            textoReceta.innerHTML = "Detalles:<br>" + receta.Ingredientes.join("<br>");
        });
    });
}


/*El fetch es una funcion que sirve para pedir datos a un archivo o servidor web
Si yo tengo mi archivo recetas.json, el fetch lo va a buscar y me devuelve su contenido 
El fetch(recetas.json) devuelve una promesa, q es un objeto especial que representa algo que aún no ha pasado, pero que va a pasar.
En este caso, nuestra promesa se cumple cuando el fetch va a buscar el archivo recetas.json y nos devuelve su contenido.
El then se emplea para encadenar acciones que se van a realizar después de que se cumpla la promesa, si no se cumple la promesa no se ejecutan
La promesa es la que va entre ("")*/



