// Generatore numero random
function randomNumberGen(min, max) {
  var randomNumberGenerated = Math.floor(Math.random() * (max + 1 - min) + min);
  return randomNumberGenerated;
}

// Comparazione numeri utente con numeri random
function winning(arr, number, arr2) {
  if (arr.indexOf(number) > -1) {
    alert('Ops! È esplosa una mina!');
    alert('Il tuo punteggio è di ' + (arr2.length - 1));
    loseResult.style.display = 'block';
    return false;
  }
  if (arr2.length === max - count) {
    winResult.style.display = 'block';
    alert('Il tuo punteggio è di ' + (arr2.length));
  }
    return true;
}

var randomNumbers = [];
var pickedNumbers = [];
var min, max, count, numberPick;
var loseResult = document.getElementById('lose-result');
var winResult = document.getElementById('win-result');


// Selettore difficoltà
var difficulty = parseInt(prompt('Seleziona un livello di difficoltà tra 0, 1 e 2'));
if (isNaN(difficulty)) {
  alert('Non hai inserito un numero');
  location.reload();
} else if (difficulty < 0 || difficulty > 2) {
  alert('Non hai inserito un livello valido');
  location.reload();
}
switch (difficulty) {
  case 0:
    min = 1;
    max = 100;
    count = 16;
  break;
  case 1:
    min = 1;
    max = 80;
    count = 16;
  break;
  case 2:
    min = 1;
    max = 50;
    count = 16;
  break;
  default:
  max = 60;
}

// Generatore numeri random univoci
while (randomNumbers.length < count) {
  var randomNumber = randomNumberGen(min, max);
  if (!randomNumbers.includes(randomNumber)) {
    randomNumbers.push(randomNumber);
  }
}

// Scelta numeri utente
while (winning(randomNumbers, numberPick, pickedNumbers) && pickedNumbers.length < max - count) {
   numberPick = parseInt(prompt('Scegli un numero compreso tra ' + min + ' e ' + max));
  if (numberPick < min || numberPick > max) {
    alert('Il numero inserito non è valido');
  } else if (isNaN(numberPick)) {
    alert('Non hai inserito un numero');
  } else if (pickedNumbers.includes(numberPick)) {
    alert('Hai già inserito questo numero!');
  } else {
    pickedNumbers.push(numberPick);
  }
}
