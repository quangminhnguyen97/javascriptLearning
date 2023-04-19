// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether(...rest) {
  if ( rest.some(i => typeof i !== 'number') ) return undefined;
  const [a,,] = rest
  if ( rest.length === 1 ) {
    return function inside(value) {
      if (  typeof value !== 'number') return undefined;
      return a + value;
    }
  }
  return rest.reduce((a,b) => a + b)
}

console.log(addTogether(2,3))
console.log(addTogether(2,3))
console.log(addTogether(7)(3))