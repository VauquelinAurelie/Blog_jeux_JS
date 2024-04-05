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

// fonction d'affichage en mosaïque de la galerie
function toggleMosaic() {
    document.getElementById("image-container").classList.add("mosaic-mode"); // récupère l'élément avec l'ID "image-container" + ajoute la classe CSS "mosaic-mode"
    document.getElementById("image-container").classList.remove("column-mode"); // récupère l'élément avec l'ID "image-container" + supprime la classe CSS "column-mode"
}

// fonction d'affichage en colonne de la galerie
function toggleColumn() {
    document.getElementById("image-container").classList.remove("mosaic-mode");
    document.getElementById("image-container").classList.add("column-mode");
}

api() // appel de la fonction api


// ajouter une image à la galerie
document.addEventListener("DOMContentLoaded", function() { //ajoute un écouteur d'événement à l'objet document
    const addImageButton = document.getElementById("add-image-btn"); //récupére l'élément avec l'id "add-image-btn" (bouton 'ajouter une image')
    const imageInput = document.getElementById("image-input"); // récupére l'élément avec l'id "image-input", pour la selection de fichier (html)
    const galleryContainer = document.getElementById("image-container"); // récupère l'élément avec l'ID "image-container", conteneur d'images de la galerie

    addImageButton.addEventListener("click", function() { // écouteur d'événements au bouton "Ajouter une image"
        imageInput.click();
    });

    // Gestionnaire d'événements pour détecter la sélection de fichier
    imageInput.addEventListener("change", function(event) { // écouteur de selection de  fichier + lire le contenu du fichier + afficher dans la galerie.
        const file = event.target.files[0]; // récupère le fichier sélectionné
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result; // récupère l'URL de données de l'image

                // Création de l'élément img
                const imageElement = document.createElement("img");
                imageElement.src = imageUrl; // définit l'attribut src de l'élément <img> sur l'URL
                imageElement.classList.add("gallery-image"); // ajoute la classe CSS "gallery-image" à l'élément <img>

                // Ajout de l'élément img à la galerie
                galleryContainer.appendChild(imageElement);
            };
            reader.readAsDataURL(file); // lit le contenu du fichier en tant qu'URL
        }
    });
});


