function api() {
    fetch("https://tyradex.tech/api/v1/pokemon") // récupére les informations de l'api
        .then(response => response.json())// transforme le résultat de l'API en JSON
        .then((reponse2) => {
            console.log(reponse2); // Affichage des données dans la console
            afficherData(reponse2); // Appel de la fonction afficherData avec les données
        })
}

// affichage des datas de l'api dans le html(dom)
function afficherData(reponse2){
    let section = document.querySelector("section");
    if (reponse2) {
        // Parcourir les données et créer des éléments HTML pour chaque Pokemon
        reponse2.forEach(pokemon => {
            let div = document.createElement("div");
            let category = document.createElement("p");
            let name = document.createElement("p");
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
        })
    }
    else {
        console.log("Aucune donnée à afficher");
    }
}

api() // appel de la fonction api











