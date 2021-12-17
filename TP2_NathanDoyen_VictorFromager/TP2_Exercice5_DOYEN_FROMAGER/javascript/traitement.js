/*
Réalisé par  
M. DOYEN Nathan et M. FROMAGER Victor
*/

function Generer() {
	
	/*Génération aléatoire de chiffres pour remplir le tableau qui peut être rempli manuellement*/
	for(var i = 1; i < 7; i++){
document.getElementById("n" + i).value = Math.floor(Math.random()*50);
}
	}
	
function Trier() {
	
	var tab = [];  
	/*Algoritme de tri  par sélection*/
	for(var i = 1; i < 7; i++){
		/*Récupération des valeures*/
tab[i-1] = Number(document.getElementById("n" + i).value) ;	
}

for(var i = 0; i < tab.length; i++){
    /*stockage de l'index de l'élément minimum*/
    var min = i; 
    for(var j = i+1; j < tab.length; j++){
      if(tab[j] < tab[min]){
       /* Mise à jour l'index de l'élément minimum*/
       min = j; 
      }
    }
    var tmp = tab[i];
    tab[i] = tab[min];
    tab[min] = tmp;
  }
for(var i = 1; i < 7; i++){
	/*Affichage du résultat*/
document.getElementById("n" + i).value = tab[i-1] ;	
}
}