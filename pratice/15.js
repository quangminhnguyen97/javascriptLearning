// Tìm số bị trùng đầu tiên trong mảng
// Viết hàm findFirstDuplicate(numberList) nhận vào mảng số nguyên dương .
// Trả về phần tử đầu tiên bị lặp lại trong mảng, nếu không có phần tử nào bị lặp lại trả về -1.
// Ví dụ:
// findFirstDuplicate([]) -> -1
// findFirstDuplicate({}) -> -1
// findFirstDuplicate([1,2,3]) -> -1
// findFirstDuplicate([1,1,3]) -> 1
// findFirstDuplicate([1,2,2,1]) -> 2
// Yêu cầu: chỉ dùng duy nhất 1 vòng for

function findFirstDuplicate(numberList) {
  let result = -1
  if ( !Array.isArray(numberList) || numberList.length === 0) return result;
  if ( numberList.some(i => i < 0) ) return result
  let obj = {}
  for ( let i = 0; i < numberList.length; i++ ) {
    let checkVal = numberList[i]
    const secondIndex = numberList.findIndex( (number, index) => number === checkVal && index !== i)
    if ( secondIndex !== -1 )  obj[checkVal+'e'] = Math.abs(Number(secondIndex - i))
    console.log(obj);
  }

  // Object.keys(obj).

  return result
}

findFirstDuplicate([1,2,1,2,1,2])

// console.log(findFirstDuplicate([]))  //-> -1
// console.log(findFirstDuplicate({}) ) //-> -1
// console.log(findFirstDuplicate([4,2,3]))  //-> -1
// console.log(findFirstDuplicate([1,4,4])) // -> 4
// console.log(findFirstDuplicate([1,2,2,1])) // -> 2
// console.log(findFirstDuplicate([1,2,3,4,3,2,1])) // -> 3
