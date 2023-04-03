function fearNotLetter(str) {
  const firstLetterCodeAt = str.charCodeAt(0)
  const lastLetterCodeAt = str.charCodeAt(str.length - 1)
  const originalSum = (lastLetterCodeAt - firstLetterCodeAt + 1)*((lastLetterCodeAt + firstLetterCodeAt) / 2)
  let realitySum = 0
  str.split("").map((_, i) => {
    realitySum += str.charCodeAt(i)
  })
  const result = originalSum === realitySum ? undefined : String.fromCharCode(originalSum - realitySum )
  return result
}

fearNotLetter("abcde");