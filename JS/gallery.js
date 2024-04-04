function api() {
    const galleryElement = document.getElementById("image-container"); // Sélectionne le conteneur d'images
    fetch("https://picsum.photos/v2/list?page=1&limit=10") // récupére les informations de l'api
        .then(response => response.json())// transforme le résultat de l'API en JSON
        .then(data => {
            data.forEach(image => {
                // crée un conteneur pour l'image
                const container = document.createElement("div");
                container.classList.add("gallery-item");

                //crée un élément image pour chaque image
                const imageElement = document.createElement("img");
                imageElement.src = image.download_url; // Utilisation de l'URL de téléchargement de l'image depuis l'API Picsum
                imageElement.alt = image.author; // Ajout d'une description alternative (alternative text)
                imageElement.classList.add("gallery-image");

                //ajout de l'élément image au conteneur
                container.appendChild(imageElement);

                //ajout du conteneur à la galerie
                galleryElement.appendChild(container);
            });
        })
        .catch(error => console.error("erreur de récupération"));
}

function toggleMosaic() {
    document.getElementById("image-container").classList.add("mosaic-mode");
    document.getElementById("image-container").classList.remove("column-mode");
}

function toggleColumn() {
    document.getElementById("image-container").classList.remove("mosaic-mode");
    document.getElementById("image-container").classList.add("column-mode");
}

api() // appel de la fonction api