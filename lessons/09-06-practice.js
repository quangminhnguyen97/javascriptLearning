//  for...i
function hasPrimeV1(numberList) {
  // your code here
  if( !Array.isArray(numberList) || numberList.length === 0 ) return false
  const isPrime = n => {
    let length = 0
    for ( let i = 1; i < n; i++ ) {
      if( n % i === 0) ++length
    }
    return length === 1
  }
  let result = false
 for ( let i = 0; i < numberList.length; i++) {
  if ( isPrime(numberList[i]) === true) result =  true
  if ( numberList[i] < 0) return false
 }
 return result
}

// v2: forEach
function hasPrimeV2(numberList) {
  if ( !Array.isArray(numberList) || !numberList.length ) return false;
  const isPrime = number => {
    let length = 0
    for ( let i = 0; i < number; i++ ) {
      if ( number % i === 0 ) ++length
    }
    return length === 1
  }
  let result = false
  numberList.forEach(i => {
    if ( i < 0 ) result = false
    if ( !!isPrime(i) ) result = true
  })
  return result
}

// v2: find
function hasPrimeV3(numberList) {
  if ( !Array.isArray(numberList) || !numberList.length ) return false;
  if ( !!numberList.find(i => i < 0) ) return false
  const isPrime = number => {
    let length = 0
    for ( let i = 0; i < number; i++ ) {
      if ( number % i === 0 ) ++length
    }
    return length === 1
  }
  if ( numberList.find(isPrime) ) return true
  else return false
}

// v4: findIndex
function hasPrimeV4(numberList) {
  if ( !Array.isArray(numberList) || !numberList.length ) return false;
  if ( numberList.some(i => i < 0)) return false
  let result = false
  const isPrime = number => {
    let length = 0
    for ( let i = 0; i < number; i++ ) {
      if ( number % i === 0 ) ++length
    }
    return length === 1
  }
  result = numberList.findIndex(isPrime)

  return result !== -1 
}

//  some
function hasPrimeV5(numberList) {
    // your code here
    if( !Array.isArray(numberList) || numberList.length === 0 ) return false
    if ( numberList.some(i => i < 0) ) return false
    const isPrime = n => {
      let length = 0
      for ( let i = 1; i < n; i++ ) {
        if( n % i === 0) ++length
      }
      return length === 1
    }
   return numberList.some(isPrime)
}