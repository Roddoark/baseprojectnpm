// alert(Math.sin(3.5));
var number = 1253;
console.log(number);

// Math() : permet de gérer certaines fonctions et constantes mathématiques plus avancées (cos, sin, tan, ...)
// parseInt(): permet de convertir une chaîne de caractères en un nombre entier
// parseInt("123", 10); 1er param est une châine de caractères. 2ème param est la base de conversion (obligé d'être fourni)
// parseFloat(); même principe mais utilisé pour les nbre à virgules
// NaN = "Not a number". Peut être détecté avec la fonction isNaN();
// Infinity: valeur spécial qui montre un résultat infini. Ex : 1/0. Peut être détecté avec la fonction isFinite();

// let permet de déclarer des variables qui pourront être utilisées dans un bloc.
// La variable déclarée avec let est uniquement disponible dans le bloc qui contient la décalaration.
// Exemple :
// ---------------------------------
    // variableLet non utilisable ici
    for ( let variableLet = 0; variableLet < 5; variableLet++ ) {
      // variableLet peut être utilisée ici
    }
    // variableLet n'est pas utilisable ici
// ---------------------------------

// Exemple d'un for...in :
// for (let propriété in objet) {
//   // utiliser des instructions
//   // pour la manipuler la propriété
// }

var a = {} // L'objet est vide
a.toString() // Pourtant il a une méthode toString()
console.log(a) // Si on regarde le prototype __proto__ on trouve bien la méthode toString()
