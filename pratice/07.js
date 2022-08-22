// Viết hàm countWords(str) nhận vào là một chuỗi và trả về số từ có trong câu.
// Một từ được tính là nếu có ít nhất một ký tự (a-z, A-Z), còn nếu chỉ có toàn khoảng trắng thì không tính là một từ.

// Ví dụ:
// countWords('') --> 0
// countWords('easy') --> 1
// countWords('easy frontend') --> 2
// countWords('   easy     frontend     ') --> 2 (lưu ý câu này có nhiều khoảng trắng thừa)

function countWords(str) {
  // your code here
  if ( str === '') return 0
  const newStr = str.split(' ').filter(i => i.length > 0).length
  return newStr
}

countWords('')
countWords('easy')
countWords('easy frontend')
countWords('   easy  1   frontend     ')