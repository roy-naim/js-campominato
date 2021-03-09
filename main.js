// Il computer deve generare (contare) 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati. --> verificare che non ce'
// nell'array doppio numero

// contare da 1 a 100 - 16 (=84)
//   verifico che 1<=numero <= 1-- && !isNaN
//   verifico che non bomba..se bomba --> finito
//
// stampo punteggio


var bombsArray = [];
var safesArray = []; //contiene tutti i numeri possibili (non vogliamo che l'utente utilizzi lo stesso numero)
var maxNumber = 100;

bombsArray = createBombs(bombsArray, maxNumber);

var punteggio = game(bombsArray, safesArray, maxNumber);

console.log("Game Over!");
console.log("Il tuo punteggio e':" + punteggio);

// contare da 1 a 100 - 16 (=84)
while (true) {

}

//funzioni

  //creo bombe numeri
  //(e' stato creato una funzione che genera
  // 16 numeri casuali differenti tra loro salvando in un array)
function createBombs(array, max) {
  while (array.length <=16 -1) {
    var number = randomNumberInRange(1, max)

    if (!array.includes(number) == true) {
      array.push(number);
    }
  }
  return array;
}

function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}


function game(bombsArray, safesArray, maxNumber) {
  while (safesArray.length < maxNumber - 16) {
    var numberUser = parseInt(prompt("Inserisci un numero e prova a non morire:"));

    if (!isNaN(numberUser) && 1 <= numberUser && numberUser <=100 && !safesArray.includes(numberUser)) {
      if (!bombsArray.includes(numberUser)) {
        safesArray.push(numberUser);
      } else {
        return safesArray.length;
      }
    }
  }
}
