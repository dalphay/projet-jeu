"user strict";


class Person {
    constructor(nom,titre, poids, puissance) {
        this.nom = nom
        this.titre = titre;
        this.poids = poids;
        this.mur = 100;
        this.puissance = puissance;
    }
    
    frapper(Lautreperson, puissance){
        this.mur = Lautreperson.mur - puissance;
        //this.puissance += puissance;
        alert(this.mur);
    }

};















