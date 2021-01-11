// Generatore numeri random univoci
function uniqueNumbersGen (arr, count, min, max) {
  while (arr.length < count) {
    var randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  }
}

// Scelta numeri utente
function userNumbersAndResult (arr, count, min, max, arr2) {
  while (arr.length < max - count) {
    var numberPick = parseInt(prompt('Scegli un numero compreso tra ' + min + ' e ' + max));
    if (numberPick < min || numberPick > max) {
      alert('Il numero inserito non è valido');
    } else if (isNaN(numberPick)) {
      alert('Non hai inserito un numero');
    } else if (arr.includes(numberPick)) {
      alert('Hai già inserito questo numero!');
    } else {
      arr.push(numberPick);
    }
    // Comparazione numeri utente con numeri random
    if (arr2.indexOf(numberPick) > -1) {
      alert('Ops! È esplosa una mina!');
      loseResult.style.display = 'block';
      break;
    } else if (arr.length === max - count) {
      winResult.style.display = 'block';
    }
  }
  alert('Il tuo punteggio è di ' + arr.length);
}


var randomNumbers = [];
var pickedNumbers = [];
var loseResult = document.getElementById('lose-result');
var winResult = document.getElementById('win-result');


// Selettore difficoltà
var difficulty = parseInt(prompt('Seleziona un livello di difficoltà tra 0, 1 e 2'));
switch (difficulty) {
  case 0:
    uniqueNumbersGen (randomNumbers, 16, 1, 100);
    userNumbersAndResult (pickedNumbers, 16, 1, 100, randomNumbers);
  break;
  case 1:
    uniqueNumbersGen (randomNumbers, 16, 1, 80);
    userNumbersAndResult (pickedNumbers, 16, 1, 80, randomNumbers);
  break;
  case 2:
    uniqueNumbersGen (randomNumbers, 16, 1, 50);
    userNumbersAndResult (pickedNumbers, 16, 1, 50, randomNumbers);
  break;
}
