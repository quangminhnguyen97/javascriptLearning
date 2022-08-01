// String excercise
// Write a JS function to parameterize a string
// Eg: paremeterize('Code JS Is Fun') => 'code-js-is-fun'

function parameterize(str) {
  return str.toLowerCase().replaceAll(' ', '-');
}

console.log(parameterize('Code JS Is Fun'));