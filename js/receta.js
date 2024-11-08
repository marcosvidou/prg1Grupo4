let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id"); 

fetch(`https://dummyjson.com/recipes/${id}`)
    .then(function(response){ 
        return response.json()
        
    })
    .then(function(data){

        let recetaData = data; /*dentro de data esta la propiedad reuslt con la info de todos los personajes*/
        let recetaDestacada = document.querySelector("#recetaDestacada");
        
        
        recetaDestacada.innerHTML = 
            `<h2 style="margin:10px;">${recetaData.name} </h2>
            <p style="margin:10px;">${"Instrucciones: "}${recetaData.instructions}</p>
            <p style="margin:10px;">${"Tiempo de cocción: "}${recetaData.cookTimeMinutes}</p> 
            <p style="margin:10px;">${"Categorias: "} <a href="./category.html" style="font-weight: bold; color: rgb(201, 104, 104);">${recetaData.tags}</a> </p>
            <img src=${recetaData.image} alt='' style="width: 400px; height: auto; margin:10px;">
            `; 

        console.log(data);
        
    })
    .catch(function(error){
        console.log("Error: ", error);
    })