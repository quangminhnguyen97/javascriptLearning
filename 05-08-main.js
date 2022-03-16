// Write a function to check if a number is positive even number
// If yes, return true. Otherwise, return false

// v1
function isPositiveEvenNumber(number) {
  let flag;
  if (number >= 0 && number % 2 === 0) {
    flag = true;
  } else {
    flag = false;
  }

  return flag;
}

// v2

function isPositiveEvenNumber(number) {
  let flag = false;
  if (number >= 0 && number % 2 === 0) {
    flag = true;
  }

  return flag;
}

// v3

function isPositiveEvenNumber(number) {
  if (number >= 0 && number % 2 === 0) {
    return true;
  } 

  return false;
}

// v4

function isPositiveEvenNumber(number) {
  return number >= 0 && number % 2 === 0;
}