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