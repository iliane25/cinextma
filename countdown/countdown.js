// Configuration de la date cible pour le countdown (31 décembre 2028)
var countDownDate = new Date("Dec 31, 2028 23:59:59").getTime();

// Mise à jour du compteur toutes les secondes
var x = setInterval(function() {
  // Récupération de la date et heure actuelles
  var now = new Date().getTime();

  // Calcul de la distance temporelle restante
  var distance = countDownDate - now;

  // Calculs temporels pour jours, heures, minutes et secondes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Affichage des résultats dans les éléments correspondants
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  // Actions à effectuer quand le countdown est terminé
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown-timer").innerHTML = "SITE DISPONIBLE !";
  }
}, 1000);
