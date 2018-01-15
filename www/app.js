"use strict";
//On capture l'input ainsi que les paragraphe
let input = document.querySelector("#input1");
let p = document.querySelector("p");
let char = document.querySelector('#char');
//On déclare une valeur limite pour l'input
let limit = 100;
//On ajoute un event à l'événement input, qui se déclenche dès qu'il y a
//une modification dans la valeur de l'input
input.addEventListener("input", function (event){
    //si la longueur de la valeur actuelle de l'input est supérieure à la limite définie au dessus...
    if (this.value.length > limit) {
        //...on modifie la valeur de l'input pour lui mettre uniquement les 10 premiers caractères qu'il contient
        //La fonction substr existe sur les String et permet de tronquer une chaîne de caractère d'un point de départ pour un nombre de caractère donné
       this.value = this.value.substr(0, limit);
    } 

    //On remplace le textContent du paragraphe par la value actuelle de l'input
    p.textContent = this.value;
    //On affiche dans le paragraphe length le nombre de caractère actuel ainsi que le nombre de caractère max
    char.textContent = `${this.value.length}/${limit}`;

});


//on crée un tableau qui contiendra nos messages
let tab = [];
/**
 * La fonction display prend les données du tableau et les affiche
 * sous format HTML via une boucle
 */
function display(){
    let section = document.querySelector("#message");
    //Remise à zéro de la section pour pas que ça se répète
    section.innerHTML = '';
    //Pour chaque item du tableau, on crée un paragraphe qu'on ajoute
    //à la section.
    for (let item of tab)
    {
      let p = document.createElement("p");
      p.textContent = item;

      //On crée un button pour chaque paragraphe
      let supp = document.createElement('button');
      supp.textContent = 'x';
      //On rajoute un event listener sur le button
      supp.addEventListener('click', function(){
        //Le tab.filter permet de filtrer les éléments d'un tableau
        //selon un booléen renvoyé par la function
        tab = tab.filter(function(el){
            //Ici, on dit que si l'élément ne correspond pas à l'item
            //en cours sur la boucle, on le garde, sinon on le dégage
            //(en gros, si el vaut item, on le filtre)
            return el !== item;
            
        });
        //On relance la fonction display
        display();
      });
      p.appendChild(supp);

      section.appendChild(p);
    }
}

let button = document.querySelector('#go');
//Le button se contente d'ajouter un nouvel élément au tableau
//et de relancer la fonction display
button.addEventListener('click', function(){
    tab.push(input.value);
    display();
});

/*
Méthode non MVC avec les données stockées directement dans le HTML
Ca fonctionne, mais si on veut exploiter les données, par exemple en
les exportant sous format textuel, ou en les supprimant ou autre, on
est obligé·e·s d'aller fouiller dans le HTML et on est très dépendant·e·s
de la structure du HTML (cad que si on modifie le HTML, il faudra très
probablement modifiées également les fonctions en question)
button.addEventListener('click', function(){
    let section = document.querySelector("#message");
    let p = document.createElement("p");
    p.textContent = input.value;
    section.appendChild(p);
});

*/