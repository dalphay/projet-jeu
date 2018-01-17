"use strict";

// la classe "mur" n'hérite d'aucune classe 
class Mur {
    constructor(vie){
        this.vie = vie;
        this.element = document.querySelector("#mur");
    }
    destroy(puissance){
        this.vie -= puissance;
        if (this.vie <= 0) {
            this.element.style.display = "none";
        }
    }
}