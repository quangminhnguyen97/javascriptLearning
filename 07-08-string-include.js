// string exercise 
// Check if a string contains an email address with `@gmail.com` or not

function checkString(str) {
  return str.includes('@gmail.com')
}

console.log(checkString('uocmoxavoi@gmail.com'))
console.log(checkString('uocmoxavoi'))
console.log(checkString('uocmoxavoi1102@gmail'))

