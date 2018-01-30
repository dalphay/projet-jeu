"use strict";

// la classe "mur" n'hérite d'aucune classe.
class Mur {
    constructor(vie) {
        this.vie = vie;
        this.element = document.querySelector("#mur");
    }
    destroy(puissance) {
        this.vie -= puissance;
        if (this.vie <= 75) {
            this.element.style.backgroundImage = "url('img/Mur2.png')";
        }
        if (this.vie <= 45) {
            this.element.style.backgroundImage = "url('img/Mur3.png')";
        }
        if (this.vie <= 20) {
            this.element.style.backgroundImage = "url('img/Mur4.png')";
        }
        if (this.vie <= 0) {
            this.element.style.display = "none";
        }
    }
}