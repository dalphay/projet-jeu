"user strict";

let playerLeft = new PlayerLeft('joueur01', 'championDuMonde', 95, 25, 0);
let playerRight = new PlayerRight('joueur02', 'championDeurope', 90, 30, 100);
let mur = new Mur(100);


let img = document.querySelector("#img");
let blocMur = document.querySelector("#mur");

let btnAvancerG = document.querySelector("#btn1");
let btnFrapperG = document.querySelector("#btn2");
let btnReculerG = document.querySelector("#btn3");
let btnAvancerD = document.querySelector("#btn4");
let btnFrapperD = document.querySelector("#btn5");
let btnReculerD = document.querySelector("#btn6");

btnAvancerG.addEventListener("click", function () {
    playerLeft.avancer();
});

btnAvancerD.addEventListener("click", function () {
    playerRight.avancer();
});

btnReculerG.addEventListener("click", function () {
    playerLeft.reculer();
});

btnReculerD.addEventListener("click", function () {
    playerRight.reculer();
});

btnFrapperG.addEventListener('click', function () {
    playerLeft.frapper(mur);
});

btnFrapperD.addEventListener("click", function () {
    playerRight.frapper(mur);
});




















