// Viết hàm uniqueLetters(str) nhận vào là một chuỗi và trả về một chuỗi mới thoả điều kiện sau đây:
// Giữ lại những ký tự chỉ xuất hiện một lần
// Những ký tự xuất hiện từ 2 lần trở lên sẽ bị remove ra khỏi chuỗi

// Ví dụ:
// uniqueLetters('') --> ''
// uniqueLetters('abc') --> 'abc'
// uniqueLetters('easy frontend') --> 'asy frotd' (các ký tự e, n bị remove vì xuất hiện 2 lần)
// uniqueLetters('aabccddeff') --> 'be' (các ký tự a, c, d, f bị remove vì xuất hiện 2 lần)


function uniqueLetters(str) {
  // your code here
  if ( str === '' || typeof str !== 'string') return ''
  let result = ''
  const splitStr = str.split('')
  splitStr.forEach( i => {
    if ( !result.includes(i) ) { 
      result = result + i
      // console.log('1', result)
    } 
    else {
      console.log('2', result, typeof result)
      result = result.replace(i, '')
    }
    console.log('------')
  })
  return result
}
console.log(uniqueLetters('easy frontend'))
// console.log(uniqueLetters('aabccddeff'))

// console.log(uniqueLetters(1))
// uniqueLetters('')
// uniqueLetters('abc')

