"user strict";

class PlayerLeft extends Person {
    constructor(nom, titre, poids, puissance){
        super(nom, titre, poids, puissance);
        this.position = 0;
        this.sprite = document.querySelector('#joueur1');
        this.sprite.style.left = '0px';
    }
    avancer(){
        this.sprite.style.left = parseInt(this.sprite.style.left) + 30 + 'px';  
    }
    reculer(){
        this.sprite.style.left = parseInt(this.sprite.style.left) - 30 + 'px';      
    }
    
}

