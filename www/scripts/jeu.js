"use strict";

// j'extencie les trois classes (PlayerLeft, playerLeft, mur)//
let playerLeft = new PlayerLeft('joueur01', 'championDuMonde', 95, 20, 0);
let playerRight = new PlayerRight('joueur02', 'championDeurope', 90, 15, 100);
let mur = new Mur(100);

//je capture les elements dans le html avec le queryselector...//
let img = document.querySelector("#zone");
let blocMur = document.querySelector("#mur");

let div = document.querySelector("div");
let joueur01 = document.querySelector("#zone #joueur1");
let joueur02 = document.querySelector("#zone #joueur2");
let btnAvancerG = document.querySelector("#btn1");
let btnFrapperG = document.querySelector("#btn2");
let btnReculerG = document.querySelector("#btn3");
let btnAvancerD = document.querySelector("#btn4");
let btnFrapperD = document.querySelector("#btn5");
let btnReculerD = document.querySelector("#btn6");

// je crée un evenement dont la fonction "click" permet de faire avancer mon joueur,
//dans le quel je fais appel à "fonction" reculer que j'ai déclaré dans les classes players



welcome.addEventListener('click', function () {
    let welcome = document.querySelector("#welcome");
    let j1 = document.querySelector("#j1");
    let j2 = document.querySelector("#j2");
    
    
    // let welcom = prompt("WELCOME TO THE GAME !");
    let Nameplayerleft = prompt("Entrez un Nom !");
    let Nameplayerright = prompt("Entrez un Nom !"); 
    j1.textContent = Nameplayerleft;
    j2.textContent = Nameplayerright;    
});


div.addEventListener('click', function () {
    div.style.display = "none";
});

btnAvancerG.addEventListener("click", function () {
    playerLeft.avancer();
        
});

btnAvancerD.addEventListener("click", function () {
    playerRight.avancer();

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

btnFrapperG.addEventListener('click', function () {

    playerLeft.frapper(mur);
    console.log(mur.vie);
    joueur01.style.animationName = '';
    joueur01.style.left = '380px';

    joueur01.setAttribute('id', 'joueur01');

    joueur01.addEventListener('animationend', function () {
        joueur01.setAttribute('id', 'joueur1');

    })
});

btnFrapperD.addEventListener("click", function () {

    playerRight.frapper(mur);
    joueur02.style.right = '310px';
    joueur02.style.animationName = '';
    joueur02.setAttribute('id', 'joueur02');


    joueur02.addEventListener('animationend', function () {
        joueur02.setAttribute('id', 'joueur2');

    })
});





















