// using for...i
function createArrayInRangeV1(a, b) {
  // your code here
  let result = [];
  if ( a > b || a > 100 || a < -100 || b > 100 || b < -100) return undefined;
  for (let i = a; i <=b; i++) {
    result = [...result, i]
  }
  return result;
}

// using Array.from()
function createArrayInRangeV2(a, b) {
  if ( a > b || a > 100 || a < -100 || b > 100 || b < -100) return undefined;
  return Array.from({ length: (b - a) / 1 + 1}, (_, i) => a + i);
}

console.log(createArrayInRangeV2(1,5))