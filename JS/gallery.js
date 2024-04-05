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
document.addEventListener("DOMContentLoaded", function() {
    const addImageButton = document.getElementById("add-image-btn");
    const imageInput = document.getElementById("image-input");
    const galleryContainer = document.getElementById("image-container");

    addImageButton.addEventListener("click", function() {
        imageInput.click();
    });

    // Gestionnaire d'événements pour détecter la sélection de fichier
    imageInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;

                // Création de l'élément img
                const imageElement = document.createElement("img");
                imageElement.src = imageUrl;
                imageElement.classList.add("gallery-image");

                // Ajout du bouton de suppression
                const deleteButton = document.createElement("button"); // création du bouton
                deleteButton.textContent = "X"; // définition du texte du bouton
                deleteButton.classList.add("delete-image-btn"); // ajoute la classe CSS "delete-image-btn" au bouton

                // Création du conteneur pour l'image et le bouton de suppression
                const imageContainer = document.createElement("div"); // créé le conteneur pour l'image ajoutée et le bouton de suppression associé.
                imageContainer.classList.add("gallery-item"); // ajoute la classe CSS "gallery-item" au conteneur
                imageContainer.appendChild(imageElement); // ajoute l'élément d'image (imageElement) en tant qu'enfant du conteneur d'image
                imageContainer.appendChild(deleteButton); // ajoute le bouton de suppression (deleteButton) en tant qu'enfant du conteneur d'image

                // Ajout du conteneur à la galerie
                galleryContainer.appendChild(imageContainer);
            };
            reader.readAsDataURL(file);
        }
    });

    // Gestionnaire d'événements pour les boutons de suppression
    galleryContainer.addEventListener("click", function(event) { // ajoute un écouteur au clique du conteneur de la galerie
        if (event.target.classList.contains("delete-image-btn")) { // condition qui vérifie si l'élément cliqué contient la classe CSS "delete-image-btn"
            const imageContainer = event.target.parentNode; // si le bouton suppression est cliqué récupèration du conteneur de l'image
            galleryContainer.removeChild(imageContainer); // Supprime le conteneur de l'image
        }
    });
});

