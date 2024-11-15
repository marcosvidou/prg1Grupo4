/*let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoriaSeleccionada = queryStringObj.get("categoria");

let categoriaDestacadaSection = document.querySelector("#categoriaDestacada"); */

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let category = queryStringObj.get("category");

fetch(`https://dummyjson.com/recipes/tag/${category}`)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        let recetasData = data.recipes;
        let recetasHTML = "";
        let categoriaDestacada = document.querySelector("#categoriaDestacada");

        for (let i = 0; i < recetasData.length; i++) {
            recetasHTML += `
                    <article>
                        <h3>${recetasData[i].name}</h3>
                        <img src="${recetasData[i].image}" alt="Imagen de ${recetasData[i].name}">
                        <p>Dificultad: ${recetasData[i].difficulty}</p>
                        <a href="./receta.html?id=${recetasData[i].id}" style="margin-bottom:10px;"> Ver Detalle </a> 
                    </article>`;
        }
        categoriaDestacada.innerHTML = recetasHTML;
        categoriaDestacada.style.display = "flex";
        categoriaDestacada.style.flexWrap = "wrap";
        categoriaDestacada.style.justifyContent = "space-evenly";
    })

    .catch(function (error) {
        console.log("Error: ", error);
    });
