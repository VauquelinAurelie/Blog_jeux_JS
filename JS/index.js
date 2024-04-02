function api() {
    fetch("https://tyradex.tech/api/v1/pokemon") // récupére les informations de l'api
.then(response => response.json())// transforme le résultat de l'API en JSON
 .then(response2 => console.log(response2)) // affiche le résultat JSON dans la console
}

api()

