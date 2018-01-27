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

div.addEventListener('click', function(){
    div.style.display = "none";
})

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
    
    // if (joueur02.style.right >= "100px"){
    //     joueur02.style.right = "100px";
    // }else {
    
    // }
});

// je crée un evenement dont la fonction "click" permet à chaque joueur,
// de frapper avec une décrementation du mur par la puissance de chacun,
//dans le quel je fais appel à "fonction" frapper que j'ai déclaré dans la classe mère "person"

btnFrapperG.addEventListener('click', function () {
    playerLeft.frapper(mur);
    joueur01.setAttribute('id','joueur01');
    joueur01.addEventListener('animationend', function(){
    joueur01.setAttribute('id','joueur1');
    
    })
});

btnFrapperD.addEventListener("click", function () {
    playerRight.frapper(mur);
    joueur02.setAttribute('id','joueur02');
    joueur02.addEventListener('animationend', function(){
    joueur02.setAttribute('id','joueur2');
    
    })
});





















