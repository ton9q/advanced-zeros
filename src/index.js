module.exports = function getZerosCount(number, base) {
  var counter, 
      bufNumber;
  var numbers = getDividersAndTheirNumber(base);

  for (let divider in numbers) {
    bufNumber = number;
    counter = 0;

    while (bufNumber) {
      bufNumber = Math.floor(bufNumber / divider);
      counter += bufNumber;
    }
    // number of zeros of the factorial of the transmitted number with this divider
    numbers[divider] = Math.floor(counter / numbers[divider]); 
  }  

  return Object.values(numbers).sort((prev, next) => prev - next)[0]; // search min value
};

function getDividersAndTheirNumber(number) {
  var array = {};

  for (let i = 2; number > 1; i++) {
    if (number % i === 0) {
      if (isNaN(array[i])) array[i] = 0; // if field is empty
      
      array[i] += 1; 
      number /= i; 
      i--; // for checking this number again
    }
  }

  return array;
}