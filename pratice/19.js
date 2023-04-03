// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  if (num === 1) return 1
  let firstNumber = 0
  let secondNumber = 1
  let currentNumber = 0
  let sumResult = 1
  while ( currentNumber <= num ) {
    if ( currentNumber % 2 !== 0 && currentNumber <= num ) {
      sumResult += currentNumber
    } 
    currentNumber = firstNumber + secondNumber
    firstNumber = secondNumber
    secondNumber = currentNumber
  }
  return sumResult;
}
sumFibs(1000);
sumFibs(70524);