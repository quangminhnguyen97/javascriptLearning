// A list of error codes from server
// E01: Invalid username or password
// E02: Too many attempts
// E03: Missing data
// Other code: Something went wrong
// Write a function that take errorCode and return the according message

function getErrorMessage(errorCode) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts',
    E03: 'Missing data',
  };

 return errorMap[errorCode] || 'Invalid error code' 
}

console.log(getErrorMessage('E01'));


const errorMap = {
  E01: 'Invalid username or password',
  E02: 'Too many attempts',
  E03: 'Missing data',
}

console.log(errorMap['E02'])
console.log(errorMap.E03)
 