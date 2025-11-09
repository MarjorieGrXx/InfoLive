const grande = document.getElementById("grande")
const photo = document.getElementById ("picture") 
let tituloReceta = document.getElementById("tituloReceta")
let textoReceta = document.getElementById("texto-receta")
/* let detalles = document.getElementById("detalles-receta") */

//Esto es de los articulos
/* let tituloArticulo = document.getElementById("tituloArticulo")
let textoArticulo = document.getElementById("texto-articulo") */
//
let imagenes = [...document.querySelectorAll(".imagen")]
let ID = parseInt(photo.dataset.id)
let bReceta = document.getElementById("miBoton")

const equisCerrar = document.getElementById("equisCerrar")
equisCerrar.addEventListener("click", (e) => {
    grande.style.display = "none"
})

let recetas = []
fetch("../recetas.json")                       /*Buscamos el archivo json con el fetch el cual nos devuelve el contenido del archivo, el cual no es
                                            un objeto JS, por lo que hay q convertirlo*/
  .then(respuesta => respuesta.json())      /*Convierte el contenido en objeto JS, que es como si dijera "cuando llegue la respuestas, que se 
                                            convierta a Json", pero, este devuelve una promesa*/
  .then(data => {   
    recetas = data                        /*X lo que ocupamos otro then para recibir esos datos y poder usarlos*/
    console.log(recetas);
  
    let posicion = 0
    imagenes.forEach((elemento, i) => {
        elemento.addEventListener("click", (e) => {
            posicion = i;
            grande.style.display = "flex";
            photo.src = elemento.src ;

            ID = parseInt(elemento.dataset.id);
            let receta = recetas.find(r => r.ID === ID);
            console.log("Buscando ID:", ID);
            let prueba = recetas.find(r => r.ID == ID);
            console.log("Receta encontrada:", prueba);
            tituloReceta.innerHTML = receta.Nombre;
            textoReceta.innerHTML = "Detalles:<br>" + receta.Ingredientes.join("<br>");
            /* detalles.innerHTML = "Detalles:<br>" + receta.Detalles.join("<br>"); */
            
            //textoReceta = recetas[posicion]["Ingredientes"]
            /*let receta = recetas[posicion];
            let nombre = receta["Nombre"];
            let ingredientes = receta["Ingredientes"]
              .map(ingrediente => `<li>${ingrediente}</li>`)
              .join("");

            textoReceta.innerHTML = `<h2>${nombre}</h2><strong>Ingredientes:</strong><ul>${ingredientes}</ul>`;
            */
            //console.log(recetas[posicion]["Nombre"])
            console.log(tituloReceta)
            console.log(textoReceta)
            console.log(posicion)
        })

    })
});
/* 
bReceta.addEventListener("click", () => 
{
    window.location.href = receta.Link;
})
 */


//console.log(recetas[0]["Clasificaciones"]) 

/*fetch("./recetas.json")
    .then((response) => response.json())
    .then((data) => {
        recetas = data
        console.log(recetas)
        mostrarReceta()
    })*/

/*El fetch es una funcion que sirve para pedir datos a un archivo o servidor web
Si yo tengo mi archivo recetas.json, el fetch lo va a buscar y me devuelve su contenido 
El fetch(recetas.json) devuelve una promesa, q es un objeto especial que representa algo que aún no ha pasado, pero que va a pasar.
En este caso, nuestra promesa se cumple cuando el fetch va a buscar el archivo recetas.json y nos devuelve su contenido.
El then se emplea para encadenar acciones que se van a realizar después de que se cumpla la promesa, si no se cumple la promesa no se ejecutan
La promesa es la que va entre ("")*/

