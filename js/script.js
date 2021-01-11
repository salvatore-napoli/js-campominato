function uniqueNumbersGen(arr, count, min, max, arr2) {
  while(arr.length < count) {
    var randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  }
}

function userNumbers(arr, count, min, max) {
  while(arr.length < max - count) {
    var numberPick = parseInt(prompt('Scegli un numero compreso tra ' + min + ' e ' + max));
    if (numberPick < 1 || numberPick > 100) {
      alert('Il numero inserito non è valido');
    } else if (isNaN(numberPick)) {
      alert('Non hai inserito un numero');
    } else if (arr.includes(numberPick)) {
      alert('Hai già inserito questo numero!');
    } else {
      arr.push(numberPick);
    }
  }
}

var randomNumbers = [];
var pickedNumbers = [];
uniqueNumbersGen(randomNumbers, 16, 1, 100);
userNumbers(pickedNumbers, 16, 1, 100);
console.log(randomNumbers);
