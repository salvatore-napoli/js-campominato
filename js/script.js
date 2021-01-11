function uniqueNumbersGen(arr, count, min, max) {
  while(arr.length < count) {
    var randomNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  }
}

var randomNumbers = [];
uniqueNumbersGen(randomNumbers, 16, 1, 100)

console.log(randomNumbers);
