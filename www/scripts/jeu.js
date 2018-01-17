"use strict";

// j'extencie les trois classes (PlayerLeft, playerLeft, mur)//
let playerLeft = new PlayerLeft('joueur01', 'championDuMonde', 95, 25, 0);
let playerRight = new PlayerRight('joueur02', 'championDeurope', 90, 30, 100);
let mur = new Mur(100);

//je capture les elements dans le html avec le queryselector...//
let img = document.querySelector("#img");
let blocMur = document.querySelector("#mur");

let btnAvancerG = document.querySelector("#btn1");
let btnFrapperG = document.querySelector("#btn2");
let btnReculerG = document.querySelector("#btn3");
let btnAvancerD = document.querySelector("#btn4");
let btnFrapperD = document.querySelector("#btn5");
let btnReculerD = document.querySelector("#btn6");

// je créer un evenement dont la fonction "click" permet de faire avancer mon joueur,
//dans le quel je fais appel à "fonction" reculer que j'ai déclaré dans les classes players

btnAvancerG.addEventListener("click", function () {
    playerLeft.avancer();
});

btnAvancerD.addEventListener("click", function () {
    playerRight.avancer();
});

// je créer un evenement dont la fonction "click" permet de faire reculer mon joueur,
//dans le quel je fais appel à "fonction" reculer que j'ai déclaré dans les classes players

btnReculerG.addEventListener("click", function () {
    playerLeft.reculer();
});

btnReculerD.addEventListener("click", function () {
    playerRight.reculer();
});

// je créer un evenement dont la fonction "click" permet à chaque joueur,
// de frapper avec une décrementation du mur par la puissance de chacun,
//dans le quel je fais appel à "fonction" frapper que j'ai déclaré dans la classe mère "person"

btnFrapperG.addEventListener('click', function () {
    playerLeft.frapper(mur);
});

btnFrapperD.addEventListener("click", function () {
    playerRight.frapper(mur);
});




















