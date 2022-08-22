// Viết hàm mergeArray(a, b) nhận vào 2 mảng số nguyên dương và trả về mảng gộp của cả 2 mảng số và loại bỏ đi các số bị trùng nhau.
// Lưu ý:
// a, b có thể là bất cứ kiểu dữ liệu gì
// Khi a, b là mảng thì a, b sẽ là mảng các số nguyên dương
// Mỗi mảng a, b sẽ chứa những con số không trùng nhau

// Ví dụ:
// mergeArray(1, true) --> []
// mergeArray([], []) --> []
// mergeArray([], [1, 2, 3]) --> [1, 2, 3]
// mergeArray([1, 2, 3], [2, 3, 4]) --> [1, 2, 3, 4] vì 2, 3 trùng nhau nên khi gộp mảng chỉ giữ lại một số

function mergeArray(a, b) {
  // your code here
  if ( !Array.isArray(a) || !Array.isArray(b) ) return []
  const mergeArray = [...a, ...b]
  const newArray = []
  mergeArray.forEach( i => {
    if ( !newArray.includes(i) ) newArray.push(i)
  })
  return newArray
  console.log(newArray)
}


// Ví dụ:
mergeArray(1, true)
mergeArray([], [])
mergeArray([], [1, 2, 3])
mergeArray([1, 2, 3], [2, 3, 4])