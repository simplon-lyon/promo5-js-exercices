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



