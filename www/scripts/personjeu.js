"use strict";

//je crée une classe parent qui a une methode commune aux deux classe enfants "PLAYERS" qui est ("frapper")

class Person {
    constructor(nom, titre, poids, puissance) {
        this.nom = nom;
        this.titre = titre;
        this.poids = poids;
        this.puissance = puissance;
    }

    frapper(mur) {
        mur.destroy(this.puissance);

    }
};
















