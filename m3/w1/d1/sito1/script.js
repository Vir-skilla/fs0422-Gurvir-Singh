var G1 = document.querySelector('#g1');
var G2 = document.querySelector('#g2');
var RAND = document.querySelector('#rand');
var WINNER = document.querySelector('#winner');
function genNum() { return Math.floor(Math.random() * 100 + 1); }
var random = genNum();
RAND.innerHTML += random;
var giocatore1 = genNum();
G1.innerHTML += giocatore1;
var giocatore2 = genNum();
G2.innerHTML += giocatore2;
var bye1 = Math.abs(random - giocatore1);
var bye2 = Math.abs(random - giocatore2);
if (giocatore1 == random) {
    WINNER.innerHTML = ("giocatore1 ha vinto!");
}
if (giocatore2 == random) {
    WINNER.innerHTML = ("giocatore2 ha vinto!");
}
if (bye1 < bye2) {
    WINNER.innerHTML = ("nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più.");
}
else if (bye1 > bye2) {
    WINNER.innerHTML = ("nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più.");
}
else {
    WINNER.innerHTML = ('parità');
}
