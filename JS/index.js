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

// Ajout d'un pokémon via formulaire
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        let baliseCategorie = document.querySelector('[name="categorie"]');
        let baliseName = document.querySelector('[name="name"]');
        let baliseImg = document.querySelector('[name="img"]');

        let categorie = baliseCategorie.value;
        let name = baliseName.value;
        let img = baliseImg.value;

        let div = document.createElement('div');
        let categoryText = document.createElement('p');
        let nameText = document.createElement('p');
        let imgElement = document.createElement('img');
        let deleteButton = document.createElement('button'); // Créer un bouton de suppression

        categoryText.textContent = "Catégorie : " + categorie;
        nameText.textContent = "Nom : " + name;
        imgElement.src = img;
        deleteButton.textContent = "X"; // Ajouter le texte au bouton de suppression
        deleteButton.addEventListener('click', function() {
            div.remove(); // Supprimer le div entier lorsqu'on clique sur le bouton de suppression
        });

        div.appendChild(categoryText);
        div.appendChild(nameText);
        div.appendChild(imgElement);
        div.appendChild(deleteButton); // Ajouter le bouton de suppression au div

        document.body.appendChild(div);
    });
});










