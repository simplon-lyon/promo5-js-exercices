/**
 * La classe Model va contenir toutes les informations
 * propre au modèle de données. Ici, tout ce qui touche
 * au tableau de message et le CRUD sur ce tableau
 */
class Model {
    //Le constructor attend comme argument un tableau
    //et mettra par défaut un tableau vide, c'est là
    //dedans que sera stocké les messages
    constructor(myTable = []) {
        this.myTable = myTable;
    }
    /** 
     * La méthode add sert à ajouter des éléments au
     * tableau du modèle
     * @param {string} item le nouvel item à ajouter au tableau
     */
    add(item) {
        this.myTable.push(item);
    }
    /**
     * La méthode delete sert à supprimer un élément du
     * tableau
     * @param {string} item l'élément à supprimer du tableau
     */
    delete(item) {
        //Le tab.filter permet de filtrer les éléments d'un tableau
        //selon un booléen renvoyé par la function
        this.myTable = this.myTable.filter(function(el){
            //Ici, on dit que si l'élément ne correspond pas à l'item
            //en cours sur la boucle, on le garde, sinon on le dégage
            //(en gros, si el vaut item, on le filtre)
            return el !== item;
            
        });
    }
}