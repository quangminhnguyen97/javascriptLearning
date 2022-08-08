// Ex1: Kiem tra co phai la so tang dan hay khong

export function isIncreasingNumber(n) {
  if ( n < 10 ) return false;
  const nString = n.toString().split('')
  let result = true
  for ( let i = 0; i < nString.length; i++ ) {
    if ( nString[i] >= nString[i + 1] ) result = false
  }
  return result
}