# promo5-js-exercices
A javascript project with some exercices

I. Manipulation JS
1) Dans un fichier HTML créer un input type text et un paragraphe
2) Dans un fichier Javascript, capturer l'input et le paragraphe puis faire qu'à chaque fois qu'on tape quelque chose dans l'input, la valeur de celui ci soit mise dans le paragraphe (événement keyboard)

3) Rajouter dans le HTML un autre paragraphe #chars
4) Faire que le javascript affiche dans ce nouveau paragraphe le nombre de caractères dans l'input

5) Créer dans le javascript une variable "limit" qui contiendra le nombre maximum de caractère dans l'input
Afficher le nombre de caractère maximum dans le paragraphe #chars (en plus du nombre de caractères actuel genre "10/124")
6) Faire que lorsque l'input atteint le nombre de caractère maximum, on puisse plus rien rentrer dans l'input (plusieurs façon possible, une serait de juste tronquer la value de l'input au nombre de caractères max à chaque fois)

7) Ajouter un bouton "submit" dans le html
8) Dans le JS faire en sorte que lorsqu'on clique sur le bouton submit, la value de l'input soit ajouter à un tableau puis qu'elle soit remise à zéro
9) Faire en sorte d'afficher tous les éléments du tableau sous forme de paragraphes successifs via une boucle sur le tableau

10) Rajouter dans la fonction display un button suppr dans le paragraphe
11) Ajouter un event listener sur ce button qui viendra supprimera l'item actuel du tableau et relancera la fonction display (pour supprimer un élément d'un tableau en js, on utilise soit .splice() soit .filter())


12) Rajouter dans le js une variable booléenne showPreview que vous initialiserez à true ou false
13) Dans la fonction display, rajouter au début ou à la fin un petit if-else qui, si la variable showPreview vaut true, affichera le paragraphe sous l'input et le nombre de caractères, et si showPreview vaut false, cachera le paragraphe sous l'input et le nombre de caractères
14) Rajouter dans le HTML un button ou une coche ou ce que vous voulez, puis rajouter dans le js un event listener sur cet élément qui fera qu'au click, la valeur de showPreview passe de true à false ou de false à true, puis relancer la fonction display

15) Créer un nouveau fichier avec dedans une classe Model qui contiendra toutes les informations liées au modèle de données pour notre exercice. Dans le cas présent : une propriété tableau, une méthode add(item) et une méthode delete(item)
16) Dans app.js, utiliser une instance de cette classe à tous les endroits où on faisait appel au tableau ou à l'ajout ou suppression dans le tableau (genre au lieu de faire un tab.push, on fera un model.add)