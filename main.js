// Il computer deve generare (contare) 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati. --> verificare che non ce'
// nell'array doppio numero

// contare da 1 a 100 - 16 (=84)
//   verifico che 1<=numero <= 1-- && !isNaN
//   verifico che non bomba..se bomba --> finito
//
// stampo punteggio


var bombsArray = [];

console.log(createBombs(bombsArray, 100));
//funzioni

  //creo bombe numeri
  //(e' stato creato una funzione che genera
  // 16 numeri casuali differenti tra loro salvando in un array)
function createBombs(array, max) {
  while (array.length <=16) {
    var number = randomNumberInRange(1, max)

    if (!array.includes(number) == true) {
      array.push(number);
    }
  }
  return array;
}

function randomNumberInRange(min, max) {
  if (isNaN(min)) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
