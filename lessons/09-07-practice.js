// Kiểm tra mảng có chứa tất cả số hoàn hảo không?
// for...i: return false if found number is not perfect
export function isAllPerfectNumbersV1(numberList) {
  // your code here
 if ( !Array.isArray(numberList) || !numberList.length ) return false
  function isPerfectNumber(n) {
    // your code here
  if (n < 1 || n > 1000) return false
  const result = []
  for ( let i = 1; i <=n-1; i++ ) {
    if ( n % i === 0 ) result.push(i)
  }
  const sumOf = result.reduce((a,b)=> a+b, 0)
  
  return sumOf === n
  }
  for ( let i = 0; i < numberList.length; i++) {
    if ( isPerfectNumber(numberList[i]) == false ) return false
    else return true
  }
  return true
}

// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
export function isAllPerfectNumbersV2(numberList) {
  // your code here
 if ( !Array.isArray(numberList) || !numberList.length ) return false
  function isPerfectNumber(n) {
    // your code here
  if (n < 1 || n > 1000) return false
  const result = []
  for ( let i = 1; i <=n-1; i++ ) {
    if ( n % i === 0 ) result.push(i)
  }
  const sumOf = result.reduce((a,b)=> a+b, 0)
  
  return sumOf === n
  }

  let number = 0
  numberList.reduce( (_, currentValue) => {
    if ( isPerfectNumber(currentValue) === false ) return false
    else number++
   }, 0)
  return number === numberList.length
}

// every
export function isAllPerfectNumbersV3(numberList) {
  // your code here
 if ( !Array.isArray(numberList) || !numberList.length ) return false
  function isPerfectNumber(n) {
    // your code here
  if (n < 1 || n > 1000) return false
  const result = []
  for ( let i = 1; i <=n-1; i++ ) {
    if ( n % i === 0 ) result.push(i)
  }
  const sumOf = result.reduce((a,b)=> a+b, 0)
  
  return sumOf === n
  }
  return numberList.every(isPerfectNumber)
}