"use strict";
class FirstUser {
    constructor(carica, numeroChiamate, durataChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.durataChiamate = durataChiamate;
    }
    ricarica() {
        let agg = Number(input.value);
        saldoOne.innerHTML = Math.ceil(Number(saldoOne.innerHTML) + agg);
    }
    chiamata() {
        this.numeroChiamate = this.numeroChiamate + 1;
        chiamate.innerHTML = this.numeroChiamate;
        let costo = this.durataChiamate * 0.2;
        saldoOne.innerHTML = Math.ceil(saldoOne.innerHTML - costo);
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        chiamate.innerHTML = 0;
    }
}
class SecondUser {
    constructor(carica, numeroChiamate, durataChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.durataChiamate = durataChiamate;
    }
    ricarica() {
        let agg = Number(input.value);
        saldoTwo.innerHTML = Math.ceil(Number(saldoTwo.innerHTML) + agg);
    }
    chiamata() {
        this.numeroChiamate = this.numeroChiamate + 1;
        chiamateTwo.innerHTML = this.numeroChiamate;
        let costo = this.durataChiamate * 0.2;
        saldoTwo.innerHTML = Math.ceil(saldoTwo.innerHTML - costo);
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        chiamateTwo.innerHTML = 0;
    }
}
class ThirdUser {
    constructor(carica, numeroChiamate, durataChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.durataChiamate = durataChiamate;
    }
    ricarica() {
        let agg = Number(input.value);
        saldoThree.innerHTML = Math.ceil(Number(saldoThree.innerHTML) + agg);
    }
    chiamata() {
        this.numeroChiamate = this.numeroChiamate + 1;
        chiamateThree.innerHTML = this.numeroChiamate;
        let costo = this.durataChiamate * 0.2;
        saldoThree.innerHTML = Math.ceil(saldoThree.innerHTML - costo);
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        chiamateThree.innerHTML = 0;
    }
}
var userOne = new FirstUser(10, 5, 60);
var userTwo = new SecondUser(50, 0, 25);
var userThree = new ThirdUser(45, 3, 12);
var input = document.querySelector('#input');
var invia = document.querySelector('#invia');
var call = document.querySelector('#chiama');
var azzera = document.querySelector('#azzera');
var chiamate = document.querySelector('#chiamateOne');
var chiamateTwo = document.querySelector('#chiamateTwo');
var chiamateThree = document.querySelector('#chiamateThree');
var saldoOne = document.querySelector('#saldoCorrenteOne');
var saldoTwo = document.querySelector('#saldoCorrenteTwo');
var saldoThree = document.querySelector('#saldoCorrenteThree');
saldoOne.innerHTML = userOne.carica;
chiamate.innerHTML = userOne.numeroChiamate;
saldoTwo.innerHTML = userTwo.carica;
chiamateTwo.innerHTML = userTwo.numeroChiamate;
saldoThree.innerHTML = userThree.carica;
chiamateThree.innerHTML = userThree.numeroChiamate;
invia.addEventListener('click', function () {
    userOne.ricarica();
    userTwo.ricarica();
    userThree.ricarica();
});
call.addEventListener('click', function () {
    userOne.chiamata();
    userTwo.chiamata();
    userThree.chiamata();
});
azzera.addEventListener('click', function () {
    userOne.azzeraChiamate();
    userTwo.azzeraChiamate();
    userThree.azzeraChiamate();
});
