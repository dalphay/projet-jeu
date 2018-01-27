"use strict";

class PlayerLeft extends Person {
    constructor(nom, titre, poids, puissance) {
        super(nom, titre, poids, puissance);
        this.sprite = document.querySelector('#joueur1');
        this.sprite.style.left = '0px';
        
    }
    avancer() {
        this.sprite.style.left = '0px';
        this.sprite.style.animationName = 'avancer';
    }
    reculer() {
        this.sprite.style.left = '380px';        
        this.sprite.style.animationName = 'reculer';
        
    }

}

