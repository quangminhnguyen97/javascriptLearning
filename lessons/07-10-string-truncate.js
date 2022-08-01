function truncateString(str, maxLength) {
  threeLetters = str.slice(0, maxLength) 
  if (str.length > maxLength) {
    return `${threeLetters}\u2026`
  }

  return str
}

console.log(truncateString('hello Viet Nam', 5))