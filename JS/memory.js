// jeux memory
//liste d'images
let cards = ['images/pics/pok1.png','images/pics/pok2.png','images/pics/pok3.png','images/pics/pok4.png','images/pics/pok5.png','images/pics/pok6.png']

//double les valeurs de cards
cards = cards.concat(cards);

// mélange le tableau de manière aléatoire
cards.sort(() => Math.random() - 0.5);

let pics = document.getElementsByTagName('img');
let eltScore = document.getElementById('score');
let score = 0;
let step = 1;
let p1,p2;
let timer = null;

for (let i=0; i<pics.length; i++){
    pics[i].src2 = 'pics/pok' + cards[i] + '.png';
}

document.addEventListener('click', function (e){
    switch (step){
        case 1: //1er click
            if (e.target.tagName==='IMG'){
                e.target.src = e.target.src2;
                p1 = e.target;
                step = 2;
            }
            break;
        case 2: //2ème click
            if (e.target.tagName==='IMG'){
                e.target.src = e.target.src2;
                p2 = e.target;
                step = 3;
            }
            timer = setTimeout(check, 1700);
            break;
        case 3 :
            clearTimeout(timer);
            check();
            break;

    }
});

function check(){
    if (p1 === p2){
        p1.replaceWith(document.createElement('span'))
        p2.replaceWith(document.createElement('span'))
        score += 50;
    }else {
        p1.src = 'images/dos-carte-s10-hearthstone.jpg';
        score = Math.max(0,score-30);
    }
    step = 1;
    eltScore.textContent = score;
    // fin du jeu ?
    if (document.getElementsByTagName('img').length === 0){
        eltScore.textContent += ' Gagné !';
    }
}
