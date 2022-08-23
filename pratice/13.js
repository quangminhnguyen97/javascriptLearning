// Chia nhỏ mảng thành nhiều mảng con
// Viết hàm chunkArray(array, size) để chia nhỏ array thành nhiều mảng con có length là size.
// Ví dụ array có 5 phần tử và size = 2 --> tức là chia nhỏ ra thành nhiều mảng con, mỗi mảng có 2 phần tử
// Từ đó, suy ra kết quả sẽ được 3 chunks, chunk 1 và chunk 2 có 2 phần tử, và chunk số 3 có 1 phần tử.

// Lưu ý:
// Với array là mảng bất kỳ, size là kích thước của mảng con cần chia nhỏ.
// Trường hợp array không phải là mảng hoặc size không hợp lệ (nhỏ hơn hoặc bằng 0) thì trả về []
// Trường hợp array không chia đều được cho các mảng con, thì mảng có phần tử ít nhất nằm ở cuối mảng.
// Trường hợp số lượng chunks tạo ra nhiều hơn 20 thì throw new Error('Too many chunks');

// Ví dụ:
// chunkArray({}); // []
// chunkArray([]); // []
// chunkArray([1, 2, 3], -1); // []
// chunkArray([1, 2, 3], 0); // []
// chunkArray([1, 2, 3], 2)); // [[1, 2], [3]]
// chunkArray([1, 2, 3], 1)); // [[1], [2], [3]]
// chunkArray([1, 2, 3], 3)); // [[1, 2, 3]]

function chunkArray(array, size) {
  // your code here ...
  if ( !Array.isArray(array) || array.length === 0) return [];
  if ( !Number.isInteger(size) || size < 0 ) return [];
  let result = []
  while ( array.length > size ) {
    const childArray = array.slice(0, size)
    result = [...result, childArray]
    array.splice(0, size)
  }

  result = [...result, [...array]]

  if ( result.length > 20 ) throw new Error('Too many chunks')
  return result
}

// console.log(chunkArray({})); // []
// console.log(chunkArray([])); // []
// console.log(chunkArray([1, 2, 3], -1)); // []
// console.log(chunkArray([1, 2, 3], 0)); // []
console.log(chunkArray([1, 2, 3], 2)); // [[1, 2], [3]]
console.log(chunkArray([1, 2, 3], 1)); // [[1], [2], [3]]
console.log(chunkArray([1, 2, 3], 3)); // [[1, 2, 3]]
