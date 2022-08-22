// Viết hàm mostFrequent(numberList) nhận vào là một mảng số và trả về số có số lần xuất hiện nhiều nhất.

// Lưu ý:

// Tham số truyền vào có thể không phải là mảng, lúc đó trả về undefined

// Trường hợp mảng rỗng, trả về undefined

// Trường hợp có nhiều số có cùng số lần xuất hiện, trả về số đầu tiên

// Ví dụ:

// mostFrequent(true) --> undefined

// mostFrequent() --> undefined

// mostFrequent([]) --> undefined

// mostFrequent([1, 2, 3]) --> 1

// mostFrequent([2, 1, 3]) --> 2

// mostFrequent([2, 2, 3, 3, 2, 3, 3]) --> 3 vì 3 xuất hiện 4 lần, còn 2 xuất hiện 3 lần


function mostFrequent(numberList) {
  // your code here
  if ( !Array.isArray(numberList) || numberList.length === 0 ) return undefined;

  const tempObj = {}
  numberList.forEach( (number) => {
    number = 'e' + number
    if ( !tempObj[number] ) tempObj[number] = 1
    else tempObj[number]++
  })
  
  let maxValue = 0
  let result = null

  for (const key in tempObj) {
    const value = tempObj[key];
    if ( value > maxValue)  {
      maxValue = value;
      result = key
    } 
  }

  return +result.substring(1)
}

console.log(mostFrequent([2, 2, 1, 1, 3]))