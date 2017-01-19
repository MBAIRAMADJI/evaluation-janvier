var tab = ['bateau', 'avion', 'voiture'];

// Malgré recherche, aucune idée pour la première question

//Deuxième question
var tab = ['bateau', 'avion', 'voiture'];
var ext = ".jpg";

tab2 = tab.map(function(el, i) {
  
    return  el + ext;
});

//Troisieme question
tab2.shift();
var aDesRoues = tab2;

//Troisieme question

var screamName = aDesRoues.map(function(el) {
  return  el.toUpperCase();
});

