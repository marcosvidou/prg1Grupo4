let posicion = 0; 
const diez = 10;

function cargarMas(){
    fetch(`https://dummyjson.com/recipes?limit=${diez}&skip=${posicion}&select=name,image,difficulty,id`)
        .then(function(response){ 
            return response.json()
            
        })
        .then(function(data){
            let recetasData = data.recipes;
            let recetarioHTML = ''; // donde guardo el html 
            let recetario = document.querySelector("#recetas");
            // darle estilo aca en vez de hacerlo en el styles.css 
            recetario.style.display = "flex";
            recetario.style.flexWrap = "wrap";
            recetario.style.justifyContent = "space-evenly";
            
            for(let i = 0; i < recetasData.length; i++){
                recetarioHTML += `
                    <article>
                        <img src= ${recetasData[i].image} alt='' style="width: 400px; height: auto;">
                        <h3>${recetasData[i].name} </h3>
                        <p>Dificultad: ${recetasData[i].difficulty} </p>
                        <a href="./receta.html?id=${recetasData[i].id}" style="font-weight: bold; color: rgb(201, 104, 104);"> Detalle</a> 
                    </article>
                `;
            }

            recetario.innerHTML += recetarioHTML;

            //actualizo mi indice para que cuando se aprete cargar mas se sumen las 10 recetas siguientes
            posicion = posicion + diez;
        })
        .catch(function(error){
            console.log("Error: ", error);
        })
}
cargarMas(); //siempre que se abra la pgina se ejecuta 1 vez para q aparezcan las primeras 10.
document.querySelector("#cargarMas").addEventListener("click", cargarMas);