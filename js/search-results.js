let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let resultadoBuscador = queryStringObj.get("query");
console.log(resultadoBuscador);
let recetasList = document.querySelector(".search-results");
recetasList.style.display = "flex";
recetasList.style.flexWrap = "wrap";
recetasList.style.justifyContent = "center";

let busqueda = document.querySelector(".resultadoBusqueda");
let texto = `Resultado de busqueda para: ${resultadoBuscador}`;
busqueda.innerHTML= texto;
busqueda.style.padding = "2%";

if(resultadoBuscador){
    fetch(`https://dummyjson.com/recipes/tag/${resultadoBuscador}`)

    .then(function (response){
        return response.json();
    })

    .then(function (data){
        let recetas = data.recipes;
        let buscadas = "";
        let recetasList = document.querySelector(".search-results");
        for (let i = 0; i < recetas.length; i++) {
            buscadas += `
                <article class="recetaSola">
                        <img src= ${recetas[i].image} alt=''>
                        <p style="padding: 3% 3% 3% 0;">Name: ${recetas[i].name} </p>
                        <p><a href="./receta.html?id=${recetas[i].id}" style="font-weight: bold; color: rgb(201, 104, 104);"> Detalle</a></p>
                </article>
            `;
        }
        recetasList.innerHTML = buscadas;

        if(buscadas == ""){
            recetasList.innerHTML = `No se encontro el resultado de busqueda para "<strong>${resultadoBuscador}</strong>".`;
            recetasList.style.fontSize = "25px";
        }
    })
    

    .catch(function (error) {
        console.log("error: ", error);
    })
}   