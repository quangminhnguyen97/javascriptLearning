// Bài 1: Tính S(n) = 1 + 2 + 3 + 4 + 5 + ... + n

export function calcSum(n) {
  if ( n <= 0 ) return 0
  let sum = 0
  for (let index = 1; index <= n ; index++) {
    sum = sum + index
  }
  return sum
}