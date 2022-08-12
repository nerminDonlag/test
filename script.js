let userInput = 30;

function fizzer(num) {
  if (num % 15 == 0) {
    return "FizzBuzz";
  }
  if (num % 5 == 0) {
    return "Buzz";
  }
  if (num % 3 == 0) {
    return "Fizz";
  }
  return num;
}

function fizzBuzz(num) {

  if (num < 1) {
    return "Invalid Number!";
  }

  let resultArray = [];

  for (let i = 1; i <= num; i++) {
    resultArray.push(fizzer(i));
  }

  return resultArray;
}

console.log(fizzBuzz(userInput));