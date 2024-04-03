// fonction du menu déroulant
function menu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// ferme le dropdown lorqu'on clique n'importe où sur la page
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let nextTodoIndex = 0;
const maxPosts = 10;
const section = document.querySelector("section");
function api() {
    fetch("https://tyradex.tech/api/v1/pokemon") // récupére les informations de l'api
        .then(response => response.json())// transforme le résultat de l'API en JSON
        .then(pokemons => {
            // Effacer le contenu précédent de la section
            section.innerHTML = "";
            // définir le nombre d'article qui s'affiche
            for (let i = 0; i < maxPosts && i < pokemons.length; i++) {
                afficherData(pokemons[i+nextTodoIndex]);
            }
            nextTodoIndex += maxPosts;
        })
}

// affichage des datas de l'api dans le html(dom)
function afficherData(pokemon){

    // créer des éléments HTML pour chaque Pokemon
    let div = document.createElement("container");
    let category = document.createElement("p");
    let name = document.createElement("h3");
    let sprites = document.createElement("img");

    // Remplir les éléments avec les données du Pokemon
    category.innerText = "Category: " + pokemon.category;
    name.innerText = "Name: " + pokemon.name.fr;
    sprites.src = pokemon.sprites.regular;

    // Ajouter les éléments créés à la section
    div.appendChild(category);
    div.appendChild(name);
    div.appendChild(sprites);
    section.appendChild(div);

}

api() // appel de la fonction api

// bouton actualiser
let refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', api);









