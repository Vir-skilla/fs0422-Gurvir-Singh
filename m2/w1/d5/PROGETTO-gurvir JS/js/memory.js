let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];
//libreria per icone
//https://html-css-js.com/html/character-codes/


var arrayComparison = [];

document.body.onload = startGame();

var interval;
var iconsFind = document.querySelectorAll("find");
var modal = document.getElementById('modal');
var timer = document.querySelector(".timer");


function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}

function playAgain() {
    modal.classList.remove("active");
    startGame();
}

function startGame() {
    clearInterval(interval);
    arrayComparison = [];

    var arrayShuffle = shuffle(arrayAnimali);

    var lista = document.getElementById('griglia');

    lista.innerHTML = '';

    console.log(arrayAnimali.length)

    for (var i = 0; i < arrayAnimali.length; i++) {
        var box = document.createElement('div');
        var element = document.createElement('div');
        element.classList.add('icon');

        lista.append(box)
        box.append(element);

        element.innerHTML = arrayShuffle[i];
        element.addEventListener("click", displayIcon);

    }

    startTimer();
    
}


function displayIcon() {

    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];

    this.classList.toggle("show");
    arrayComparison.push(this);

    var len = arrayComparison.length;
    if (len === 2) {
        if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
            arrayComparison[0].classList.add("find", "disabled");
            arrayComparison[1].classList.add("find", "disabled");
            arrayComparison = [];
            openModal()
        } else {
            icons.forEach(function (item) {
                item.classList.add('disabled');
            });
            setTimeout(function () {
                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                icons.forEach(function (item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < iconsFind.length; i++) {
                        iconsFind[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 900);
        }
    }
}


function openModal() {

    iconsFind = document.querySelectorAll('.find')

    if (iconsFind.length==arrayAnimali.length) {
        clearInterval(interval);
        modal.classList.add("active");
        document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;
        closeModal();
    }

}

function closeModal() {
        modal.classList.remove("active");
        startGame();
}


function startTimer() {

    var s = 0; var m = 0; var h = 0;

    interval = setInterval(function () {
        timer.innerHTML = 'Tempo: ' + m + " min " + s + " sec";
        s++;
        if (s == 60) {
            m++;
            s = 0;
        }
        if (m == 60) {
            h++;
            m = 0;
        }
    }, 1000);
}

