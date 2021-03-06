"use strict";
//On capture l'input ainsi que les paragraphe
let input = document.querySelector("#input1");
let p = document.querySelector("p");
let char = document.querySelector('#char');
let preview = document.querySelector('#preview');
let toggle = document.querySelector('#toggle');
//On déclare une valeur limite pour l'input
let limit = 100;
let model = new Model();
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

//La variable showPreview est un booléen qui déterminera si la section
//preview doit être affichée ou non
let showPreview = true;
toggle.addEventListener('click', function(){
    //Au click sur toggle, on change la valeur de showPreview pour lui
    //assigner l'inverse de sa valeur actuelle
    showPreview = !showPreview;
    //on relance le display
    display();
});

/**
 * La fonction display prend les données du tableau et les affiche
 * sous format HTML via une boucle et affichera ce qui
 * doit l'être
 */
function display(){
    //si showPreview est true, on affiche le section preview,
    //sinon, on le cache
    if(showPreview){
        preview.style.display = 'block';
    } else{
        preview.style.display = 'none';

    }
    let section = document.querySelector("#message");
    //Remise à zéro de la section pour pas que ça se répète
    section.innerHTML = '';
    //Pour chaque item du tableau du modèle, on crée un paragraphe qu'on ajoute
    //à la section.
    for (let item of model.myTable)
    {
      let p = document.createElement("p");
      p.textContent = item;

      //On crée un button pour chaque paragraphe
      let supp = document.createElement('button');
      supp.textContent = 'x';
      //On rajoute un event listener sur le button
      supp.addEventListener('click', function(){
        //On fait appel directement à la méthode
        //du model
        model.delete(item);
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
    model.add(input.value);
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