// si quiero que cada vez que se aprete "cargar mas" aparezcan 10 recetas mas, tengo que hacer una funcion con dos indices: uno que marque cuantas recetas tengo hasta el momento (osea la posicion de la ultima receta que cargue) y otro que tenga el valor 10 (para que cada vez q se aprete cargar mas se sumen 10).

let posicion = 0; //cuando entro a la pagina no hay recetas cargadas (x eso dsps llamo a la funcion, para que se ejecute una vez que se carga la pagina)
const diez = 10;

function cargarMas(){
    fetch('https://dummyjson.com/recipes')
        .then(function(response){ // primer promesa es que vuelva, y que lo convierta en json y ese json lo convierte en objeto literal
            return response.json()
            
        })
        .then(function(data){

            let recetasData = data.recipes.slice(0, posicion + diez); // slice: Limita la cantidad de recetas que se muestran
            let recetarioHTML = ''; // donde guardo el html 
            let recetario = document.querySelector("#recetas");
            // darle estilo aca en vez de hacerlo en el styles.css 
            recetario.style.display = "flex";
            recetario.style.flexWrap = "wrap";
            recetario.style.justifyContent = "space-evenly";

            for(let i = 0; i < recetasData.length; i++){
                recetarioHTML += `
                    <article>
                        <img src= ${recetasData[i].image} alt='' style="width: 300px; height: auto;">
                        <h3>${recetasData[i].name} </h3>
                        <p>Dificultad: ${recetasData[i].difficulty} </p>
                    </article>
                `;
            }
            console.log(data);

            recetario.innerHTML = recetarioHTML;

            //actualizo mi indice para que cuando se aprete cargar mas se sumen las 10 recetas siguientes
            posicion = posicion + diez;
        })
        .catch(function(error){
            console.log("Error: ", error);
        })
}
cargarMas(); //siempre que se abra la pgina se ejecuta 1 vez para q aparezcan las primeras 10.
document.querySelector("#cargarMas").addEventListener("click", cargarMas);