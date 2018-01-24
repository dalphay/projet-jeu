'use strict';

// je créer une classe enfant ("playerRight") qui hérite de la classe mère ("person") à laquelle,
// je fais appel en utilsant ("super") pour hériter de ses propriétés (nom, titre, poids, puissance),
// et je rajoute des "propriétés" propre à l'enfant...
class PlayerRight extends Person {
    constructor(nom, titre, poids, puissance) {
        super(nom, titre, poids, puissance);
        // this.position = 100;
        this.sprite = document.querySelector('#joueur2');
        this.sprite.style.right = '213px';

    }
    avancer() {
        this.sprite.style.right = parseInt(this.sprite.style.right) + 20 + 'px';
    }
    reculer() {
        this.sprite.style.right = parseInt(this.sprite.style.right) - 20 + 'px';
    }

}
