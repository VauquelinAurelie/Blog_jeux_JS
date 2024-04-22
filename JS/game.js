// jeux Pierre feuille ciseaux
let resetBtn = document.getElementById("reset");
let scoreJoueur = document.getElementById("score-joueur");
let scoreOrdinateur = document.getElementById("score-ordinateur");
let btnJoueur = [...document.getElementsByClassName("btn-joueur")];
let pierreBtn = document.getElementById("pierre");
let feuilleBtn = document.getElementById("feuille");
let ciseauxBtn = document.getElementById("ciseaux");
let message = document.getElementById("message");
let nextBtn = document.getElementById("next");

const jouerManche = (e) => {
    let choix = e.target.closest(".btn-joueur");

    btnJoueur.forEach((btn) => {
        btn.classList.add("desactivated");
        btn.removeEventListener("click", jouerManche);
    });

    choix.classList.remove("desactivated");
    choix.classList.add("active");

    let choixJoueur = choix.id;

    let choixOrdi = faireChoixOridnateur();

    verifierGagnant(choixJoueur, choixOrdi);

    nextBtn.style.visibility = "visible";
};

const PIERRE = "pierre";
const FEUILLE = "feuille";
const CISEAUX = "ciseaux";

const faireChoixOridnateur = () => {
    // 0 = pierre
    // 1 = feuille
    // 2 = ciseaux

    let nbAleatoire = Math.floor(Math.random() * 3);

    switch (nbAleatoire) {
        case 0:
            pierreBtn.classList.add("active");
            return PIERRE;
        case 1:
            feuilleBtn.classList.add("active");
            return FEUILLE;
        default:
            ciseauxBtn.classList.add("active");
            return CISEAUX;
    }
};

const verifierGagnant = (choixJoueur, choixOrdi) => {
    if (choixJoueur === choixOrdi) {
        message.textContent = "Egalité !";
        return;
    }

    if (choixJoueur === PIERRE) {
        if (choixOrdi === FEUILLE) {
            return victoireOrdinateur();
        } else if (choixOrdi === CISEAUX) {
            return victoireJoueur();
        }
    }

    if (choixJoueur === FEUILLE) {
        if (choixOrdi === CISEAUX) {
            return victoireOrdinateur();
        } else if (choixOrdi === PIERRE) {
            return victoireJoueur();
        }
    }

    if (choixJoueur === CISEAUX) {
        if (choixOrdi === PIERRE) {
            return victoireOrdinateur();
        } else if (choixOrdi === FEUILLE) {
            return victoireJoueur();
        }
    }
};

const victoireOrdinateur = () => {
    message.textContent = "L'ordinateur gagne...";
    scoreOrdinateur.textContent++;
};

const victoireJoueur = () => {
    message.textContent = "Vous avez gagné ! :)";
    scoreJoueur.textContent++;
};

const preparerNouvelleManche = () => {
    btnJoueur.forEach((btn) => {
        btn.classList.remove("desactivated");
        btn.classList.remove("active");

        btn.addEventListener("click", jouerManche);
    });

    nextBtn.style.visibility = "hidden";

    pierreBtn.classList.remove("active");
    feuilleBtn.classList.remove("active");
    ciseauxBtn.classList.remove("active");

    message.textContent = "A vous de jouer !";
};

nextBtn.addEventListener("click", preparerNouvelleManche);

btnJoueur.forEach((btn) => btn.addEventListener("click", jouerManche));

resetBtn.addEventListener("click", () => {
    scoreJoueur.textContent = 0;
    scoreOrdinateur.textContent = 0;

    preparerNouvelleManche();
});


