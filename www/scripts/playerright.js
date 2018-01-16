'user strict';

class PlayerRight extends Person {
    constructor(nom, titre, poids, puissance){
        super(nom, titre, poids, puissance);
        this.position = 100;
        this.sprite = document.querySelector('#joueur2');
        this.sprite.style.right = '0px';
         
    }
    avancer(){
        this.sprite.style.right = parseInt(this.sprite.style.right) + 20 + 'px';
    }
    reculer(){
        this.sprite.style.right = parseInt(this.sprite.style.right) - 20 + 'px';        
    }
    
}
