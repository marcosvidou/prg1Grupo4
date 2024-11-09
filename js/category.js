let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoriaSeleccionada = queryStringObj.get("categoria");

let categoriaDestacadaSection = document.querySelector("#categoriaDestacada");

fetch("https://dummyjson.com/recipes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let recetasData = data.recipes;
        let recetasHTML = '';

        for (let i = 0; i < recetasData.length; i++) {
            if (recetasData[i].tags.includes(categoriaSeleccionada)) {
                recetasHTML += `
                    <article>
                        <h3>${recetasData[i].name}</h3>
                        <img src="${recetasData[i].image}" alt="Imagen de ${recetasData[i].name}">
                        <p>Dificultad: ${recetasData[i].difficulty}</p>
                        <a href="./receta.html?id=${recetasData[i].id}" > Ver Detalle</a>
                    </article>`;
            }
        }
        if (recetasHTML !== '') {
            categoriaDestacadaSection.innerHTML = recetasHTML;
        } else {
            categoriaDestacadaSection.innerHTML = "<p>No se encontraron recetas para esta categoría.</p>";
        }

        console.log(data);
    })
    .catch(function(error) {
        console.log("Error: ", error);
    });
