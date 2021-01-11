function uniqueNumbersGen (arr, count, min, max) {
  while (arr.length < count) {
    var randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  }
}

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
uniqueNumbersGen (randomNumbers, 16, 1, 100);
userNumbersAndResult (pickedNumbers, 16, 1, 100, randomNumbers);
