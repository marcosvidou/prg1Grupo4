let queryLc = location.search
console.log(location.search);
let queryStringObj = new URLSearchParams(queryLc)
let categoria = queryStringObj.get("categoria")
let categoriaaa = document.querySelector("#categoriajs")
console.log(categoria);
fetch('https://dummyjson.com/recipes/tags')
    .then(function (response) {
        return response.json()

    })
    .then(function (data) {

        let lista = data;
        let listaCategorias = document.querySelector("#listaCategorias");


        for (let i = 0; i < lista.length; i++) {
            listaCategorias.innerHTML +=
            `
                <ul>
                    <li> <a href="./category.html" style="color:black;"> ${lista[i]} </a></li>
                </ul>
            `;
        }

        console.log(data);

    })
    .catch(function (error) {
        console.log("Error: ", error);
    })