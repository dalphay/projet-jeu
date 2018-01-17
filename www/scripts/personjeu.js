"user strict";


class Person {
    constructor(nom, titre, poids, puissance) {
        this.nom = nom
        this.titre = titre;
        this.poids = poids;
        this.puissance = puissance;
    }

    frapper(mur) {
        mur.destroy(this.puissance);
    }

};
















