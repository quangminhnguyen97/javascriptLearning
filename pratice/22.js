// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
function dropElements(arr, func) {
  const result = arr.findIndex((number) => func(number))
  if (result === -1) return []
  return arr.slice(result)
}

dropElements([0, 1, 0, 1], function(n) {return n === 2;})