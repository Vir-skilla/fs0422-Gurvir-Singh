const G1 = document.querySelector('#g1') as HTMLElement;
const G2 = document.querySelector('#g2') as HTMLElement;
const RAND = document.querySelector('#rand') as HTMLElement;
const WINNER = document.querySelector('#winner') as HTMLElement;

function genNum(): number { return Math.floor(Math.random() * 100 + 1); }

let random: number = genNum();
RAND.innerHTML += random;

let giocatore1: number = genNum();
G1.innerHTML += giocatore1;

let giocatore2: number = genNum();
G2.innerHTML += giocatore2;

var bye1: number = Math.abs(random - giocatore1);
var bye2: number = Math.abs(random - giocatore2);

if (giocatore1 == random) {
    WINNER.innerHTML=("giocatore1 ha vinto!");
}

if (giocatore2 == random) {
    WINNER.innerHTML=("giocatore2 ha vinto!");
}

if(bye1 < bye2){
    WINNER.innerHTML=("nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più.");
}else if(bye1 > bye2){
    WINNER.innerHTML=("nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più.");
}else{
    WINNER.innerHTML=('parità')
}