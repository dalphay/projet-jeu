"use strict";

// j'extencie les trois classes (PlayerLeft, playerLeft, mur)//
let playerLeft = new PlayerLeft('joueur01', 'championDuMonde', 95, 20, 0);
let playerRight = new PlayerRight('joueur02', 'championDeurope', 90, 15, 100);
let mur = new Mur(100);


//je capture les elements dans le html avec le queryselector...//
let img = document.querySelector("#zone");
let blocMur = document.querySelector("#mur");
let progress = document.querySelector("progress");


let div = document.querySelector("div");
let joueur01 = document.querySelector("#zone #joueur1");
let joueur02 = document.querySelector("#zone #joueur2");

let btnAvancerG = document.querySelector("#btn1");
let btnFrapperG = document.querySelector("#btn2");
let btnReculerG = document.querySelector("#btn3");
let btnAvancerD = document.querySelector("#btn4");
let btnFrapperD = document.querySelector("#btn5");
let btnReculerD = document.querySelector("#btn6");

let frapG = false;
let frapD = false;

//j'ai fais des prompts pour entrer le nom de chaque players.

div.addEventListener('click', function () {
    let j1 = document.querySelector("#j1");
    let j2 = document.querySelector("#j2");

    let Nameplayerleft = prompt("Entrez un Nom !");
    let Nameplayerright = prompt("Entrez un Nom !");
    j1.textContent = Nameplayerleft;
    j2.textContent = Nameplayerright;

});


div.addEventListener('click', function () {
    div.style.display = "none";

});

// je crée un evenement dont la fonction "click" permet de faire avancer mon joueur,
//dans le quel je fais appel à "fonction" reculer que j'ai déclaré dans les classes players


btnAvancerG.addEventListener("click", function () {
    frapG = true;
    playerLeft.avancer();
    // btnAvancerG.removeAttribute('disabled');

});

btnAvancerD.addEventListener("click", function () {
    frapD = true;
    playerRight.avancer();

    // btnAvancerD.removeAttribute("#btn2");

});

// je crée un evenement dont la fonction "click" permet de faire reculer mon joueur,
//dans le quel je fais appel à "fonction" reculer que j'ai déclaré dans les classes players

btnReculerG.addEventListener("click", function () {
    playerLeft.reculer();

});

btnReculerD.addEventListener("click", function () {
    playerRight.reculer();

});

// je crée un evenement dont la fonction "click" permet à chaque joueur,
// de frapper avec une décrementation du mur par la puissance de chacun,
//dans le quel je fais appel à "fonction" frapper que j'ai déclaré dans la classe mère "person"

let compteur = 1;


btnFrapperG.addEventListener('click', function () {

    if (frapG) {
        playerLeft.frapper(mur);
        joueur01.style.animationName = '';
        joueur01.style.left = '380px';

        joueur01.setAttribute('id', 'joueur01');

        switch (compteur) {
            case 1:
                progress.setAttribute("value", "200");
                compteur++;
                break;
            case 2:
                progress.setAttribute("value", "150");
                compteur++;
                break;
            case 3:
                progress.setAttribute("value", "100");
                compteur++;

                break;
            case 4:
                progress.setAttribute("value", "0");
                compteur++;
            default:
                break;

        }

        joueur01.addEventListener('animationend', function () {
            joueur01.setAttribute('id', 'joueur1');

        })

    }

});

btnFrapperD.addEventListener("click", function () {
    if (frapD) {
        playerRight.frapper(mur);
        joueur02.style.right = '310px';
        joueur02.style.animationName = '';
        joueur02.setAttribute('id', 'joueur02');

        switch (compteur) {
            case 1:
                progress.setAttribute("value", "300");
                compteur++;
                break;
            case 2:
                progress.setAttribute("value", "250");
                compteur++;
                break;
            case 3:
                progress.setAttribute("value", "200");
                compteur++;

                break;
            case 4:
                progress.setAttribute("value", "150");
                compteur++;
                break;
            case 5:
                progress.setAttribute("value", "100");
                compteur++;
                break;
            case 6:
                progress.setAttribute("value", "50");
                compteur++;
                break;
            case 7:
                progress.setAttribute("value", "0");
                compteur++;
            default:
                break;

        }
        joueur02.addEventListener('animationend', function () {
            joueur02.setAttribute('id', 'joueur2');

        });
    }
});





















