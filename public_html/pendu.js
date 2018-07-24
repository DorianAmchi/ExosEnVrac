//Variable utilisé pour compté les erreurs
//Init a -1 pour arrivé à 0 à la premiere incrémentation.
var compteurErreur = -1;

//Fonction qui initialise le jeu à la validation du mot à trouver.
function initGame() {
    //On efface les cases des lettres des anciens mots si ceux ci n'était pas 
    //bon , et le message d'erreur d'un ancien mot ligne 141
    removeOldTry();

    //Boucle qui cache le pendu à l'initialisation.
    for (var i = 0; i < 9; i++)
    {
        var temp = document.getElementById("erreur" + i);
        temp.style.display = "none";
    }
    // Récuparation du mot a trouver
    var mot = document.getElementById("motInput").value;
    // Vérification du mot avec la fonction VerifMot ligne 86
    if (!verifMot(mot))
    {
        // Si le mot n'est pas vérifié, on affiche un message d'erreur.
        var newDiv = document.createElement("div");
        newDiv.id = "erreurMot";
        newDiv.innerHTML = "Erreur dans la saisie du mot. Veuillez rééssayé.";
        document.getElementById("messageErreur").appendChild(newDiv);
    } else {
        //Si le mot est vérifié on affiche des carrés pour avoir une vision de 
        //la position et du nombre de lettres
        var nbLettres = mot.length;
        for (var i = 0; i < nbLettres; i++) {
            affichageBlock(i);
        }
    }
}

//Fonction qui permet de jouer a l'entré d'une lettre.
function game() {
    //On efface un plausible message d'erreur d'une précédente entrée.
    document.getElementById("messageErreur").innerHTML = "";
    //Recupération de la lettre et du mot.
    var lettre = document.getElementById("lettreInput").value;
    var mot = document.getElementById("motInput").value;
    //tableau de stockage de l'index de la lettre dans le mot
    var numLettre = new Array();
    //index a incrémenté pour ajouter un index de lettre si récurence.
    var iLettre = 0;
    //Vérification de la lettre grace a la fonction verifLettre ligne 106
    if (!verifLettre(lettre))
    {
        //si la lettre n'est pas vérifié on affiche un message d'erreur.
        document.getElementById("messageErreur").innerHTML = "Erreur dans la" +
                "saisie de la lettre. Veuillez rééssayé.";
    } else {
        //Si la lettre est vérifié on continu le jeu.
        //Boucle de parcours du mot
        for (var i = 0; i < mot.length; i++) {
            //Si la lettre est présente on stocke son index dans le tableau
            if (mot[i] === lettre) {
                numLettre[iLettre] = i;
                iLettre++;
            }
        }
        //Si le tableau contenant les indexs à du contenu on affiche la lettre 
        //dans la case correspondante avec la fonction affichageLettre ligne 118
        if (numLettre.length > 0) {
            affichageLettre(numLettre, lettre, mot);
        } else {
            // Si elle n'est pas présente on affiche une étape du pendu avec 
            // la fonction affichagePendu ligne 133
            //On compte le nombre d'erreur avec la fonction compteur ligne 118
            affichagePendu(compteur());
        }
    }
}

//fonction de vérification du mot.
function verifMot(mot) {
    //On part du principe que le mot est bon
    var bool = true;
    //Parcours du mot
    for (var i = 0; i < mot.length; i++) {
        //Si le mot contient un espace on renvoie faux
        if (mot[i] === ' ') {
            bool = false;
            break
        }
    }
    return bool;
}

//fonction de vérification de la lettre
function verifLettre(lettre) {
    //on part du principe que la lettre est bonne
    var bool = true;
    //Si la lettre contient plusieur char on renvoie faux
    if (lettre.length > 1) {
        bool = false;
    }
    return bool;
}

//Fonction qui compte le nombre d'erreur
function compteur() {
    compteurErreur++;
    return compteurErreur;
}

//Fonction qui affiche la lettre
function affichageLettre(numLettre, lettre, mot) {
    var temp;
    var compteurLettre = 0;
    for (var i = 0; i < numLettre.length; i++) {
        temp = numLettre[i];
        var id = "lettre" + temp;
        document.getElementById(id).innerHTML = '<p id="lettreValidee">' + lettre + '</p>';
        document.getElementById("lettreValidee").style.marginTop = "3px";
    }
    compteurLettre++;
    if (compteurLettre === mot[i]) {
        alert("Vous avez bien trouvé le mot, vous avez gagné.");
    }
}

//Fonction qui affiche une étape du pendu.
function affichagePendu(compteur) {
    document.getElementById("erreur" + compteur).style.display = "block";
    var element = document.getElementById("erreur8");
    if (element.style.display === "block") {
        alert("Vous n'avez pas trouvé le mot, vous avez perdu.");
    }
}


// Fonction  qui permet d'effacer les précédents essais faux.
function removeOldTry() {
    var element = document.getElementById("affichageResultat");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    var element = document.getElementById("messageErreur");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function affichageBlock(i) {
    var newDiv = document.createElement("div");
    newDiv.id = "lettre" + i;
    newDiv.style.marginLeft = 10;
    newDiv.style.marginRight = 10;
    newDiv.style.display = "inline-block";
    newDiv.style.backgroundColor = "grey";
    newDiv.style.height = 50;
    newDiv.style.width = 50;
    document.getElementById("affichageResultat").appendChild(newDiv);
}