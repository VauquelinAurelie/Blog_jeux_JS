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
document.addEventListener('DOMContentLoaded', function() { //  ajoute un écouteur d'événements sur l'objet document, qui détecte quand le DOM est chargé
    // Récupérer les éléments du formulaire lors du clic sur le bouton de soumission
    document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
        event.preventDefault(); // Empêcher le rechargement de la page

        // Récupère les éléments HTML
        let baliseCategorie = document.querySelector('[name="categorie"]');
        let baliseName = document.querySelector('[name="name"]');
        let baliseImg = document.querySelector('[name="img"]');

        // récupère les valeurs du formulaire
        let categorie = baliseCategorie.value;
        let name = baliseName.value;
        let img = baliseImg.value;

        // Crée un nouvel élément div pour afficher les valeurs
        let div = document.createElement('div');
        let categoryText = document.createElement('p');
        let nameText = document.createElement('p');
        let imgElement = document.createElement('img');

        // Assigner les valeurs aux éléments créés
        categoryText.textContent = "Catégorie : " + categorie;
        nameText.textContent = "Nom : " + name;
        imgElement.src = img;

        // Ajouter les éléments dans la div
        div.appendChild(categoryText);
        div.appendChild(nameText);
        div.appendChild(imgElement);

        // Ajouter la div dans le document
        document.body.appendChild(div);
    });
});












