let stringa = "Mario Rossi"
stringa.toLowerCase();
console.log(stringa.toLowerCase())
console.log(stringa.toUpperCase())
let strSplit = stringa.split("")[0]
let strSplit2 = stringa.split("")[6]
console.log(`sigla: ${strSplit}${strSplit2}`)

let p1 = "Filippo Cavalli"
let persone = ["Marco", "Elon", "Vir", "Matteo", "Bill", p1];
console.log(persone[2])
console.log(persone)
console.log(persone.length)
persone = ["Marco", "Elon", "Vir", "Matteo", "Bill", p1];



let numArr = [1, 2, 3, 4];

function sommaArr(){
    let num1 = numArr[Math.floor(Math.random()*4)];
    let num2 = numArr[Math.floor(Math.random()*4)];
    console.log(`Sto sommando ${num1} e ${num2}`);
    return num1 + num2;
}

console.log(sommaArr());



persone.pop();
console.log(persone)


persone.push("Mark");
console.log(persone)


persone = ["Marco", "Elon", "Vir", "Matteo", "Bill", p1];
persone.shift();
console.log(persone)

persone.unshift("Mark");
console.log(persone)

