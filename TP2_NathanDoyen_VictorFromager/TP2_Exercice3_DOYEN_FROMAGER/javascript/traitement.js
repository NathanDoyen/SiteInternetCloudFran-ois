/*
Réalisé par  
M. DOYEN Nathan et M. FROMAGER Victor
*/

function Calculer_prix() {
	
	/*Déclaration de la variable*/
	var total = 0;
	
	/*Différents switchs pour afficher les prix selon le choix*/
	switch (document.getElementById("entree").value) {
		case "1":
			document.getElementById("txtent").value = "4.00 $";
			total += 4;
			break;
		case "2":
			document.getElementById("txtent").value = "3.00 $";
			total += 3;
			break;
		case "3":
			document.getElementById("txtent").value = "4.50 $";
			total += 4.5;
			break;
	}

	switch (document.getElementById("plat").value) {
		case "1":
			document.getElementById("txtpla").value = "13.00 $";
			total += 13;
			break;
		case "2":
			document.getElementById("txtpla").value = "12.00 $";
			total += 12;
			break;
		case "3":
			document.getElementById("txtpla").value = "11.50 $";
			total += 11.5;
			break;
	}

	switch (document.getElementById("dessert").value) {
		case "1":
			document.getElementById("txtdes").value = "5.00 $";
			total += 5;
			break;
		case "2":
			document.getElementById("txtdes").value = "5.50 $";
			total += 5.5;
			break;
		case "3":
			document.getElementById("txtdes").value = "4.50 $";
			total += 4.5;
			break;
	}

    /*Affichage du total*/
	document.getElementById("txttot").value = total + "$";
}