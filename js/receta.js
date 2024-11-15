let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id"); 

fetch(`https://dummyjson.com/recipes/${id}`)
    .then(function(response){ 
        return response.json()
        
    })
    .then(function(data){

        let recetaData = data; 
        let recetaDestacada = document.querySelector("#recetaDestacada");
        
        let categoriasHTML = ''; 

        for (let i = 0; i < recetaData.tags.length; i++) {
            categoriasHTML += `<a href="./category.html?category=${recetaData.tags[i]}" style="font-weight: bold; color: rgb(201, 104, 104);">${recetaData.tags[i]}</a>`;
            // Agrego una coma entre categorias, pero no pongo una dsps del ultimo
            if (i < recetaData.tags.length - 1) {
                categoriasHTML += ', ';
            }
        }
        
        recetaDestacada.innerHTML = 
            `<h2 style="margin:10px;">${recetaData.name} </h2>
            <p style="margin:10px;"> Instrucciones: ${recetaData.instructions}</p>
            <p style="margin:10px;"> Tiempo de cocción: ${recetaData.cookTimeMinutes} minutos.</p> 
            <p style="margin:10px;"> Categorias: ${categoriasHTML}</p>
            <img src=${recetaData.image} alt='' style="width: 400px; height: auto; margin:10px;">
            `;  

        console.log(data);
        
    })
    .catch(function(error){
        console.log("Error: ", error);
    })