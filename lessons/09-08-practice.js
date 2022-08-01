// Trung bình cộng các số chẵn trong mảng

export function calcAvgOfAllEvenNumbers(numberList) {
  // your code here
  if ( !Array.isArray(numberList) || !numberList.length || numberList.every(i => i % 2 === 1)  ) return 0
  const result = numberList.filter(x => x % 2 === 0 && x > 0)
  return Math.round(result.reduce( (acc, cur) =>   acc + cur, 0 )/result.length)
}

// console.log(calcAvgOfAllEvenNumbers([1,2,4,8]))
// console.log(calcAvgOfAllEvenNumbers([1,3,5]))
// console.log(calcAvgOfAllEvenNumbers([2]))
// console.log(calcAvgOfAllEvenNumbers(1))
// console.log(calcAvgOfAllEvenNumbers([]))
// console.log(calcAvgOfAllEvenNumbers([1,2]))