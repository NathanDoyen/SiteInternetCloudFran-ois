/*
Réalisé par  
M. DOYEN Nathan et M. FROMAGER Victor
*/

function Calculer_PrixTTC()
{
	/*Récupération des champs*/
var PU = Number(document.getElementById("PU").value) ;
var TVA = Number(document.getElementById("TVA").value) ;
var QT = Number(document.getElementById("QT").value) ;

/*Calcul du prix TTC*/
var Prix_TTC = (PU*QT)+(PU*QT*TVA/100);

/*Affichage du résultat*/
document.getElementById("PT").value = Prix_TTC ;
}

