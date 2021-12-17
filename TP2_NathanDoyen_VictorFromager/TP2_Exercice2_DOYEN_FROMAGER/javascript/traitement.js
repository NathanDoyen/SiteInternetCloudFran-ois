/*
Réalisé par  
M. DOYEN Nathan et M. FROMAGER Victor
*/

function produit() {
	
	/*Déclaration des variables que l'on va utiliser*/
	var nb1, nb2, prod;
	
	/*Récupération des cases à remplir*/
	nb1 = Number(document.getElementById("NB1").value);
	nb2 = Number(document.getElementById("NB2").value);
	
	/*Clacul du produit*/
	prod = nb1 * nb2;
	
	/*Affichage du résultat*/
	document.getElementById("PROD").value = prod;
}