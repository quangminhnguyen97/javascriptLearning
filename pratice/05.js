// Viết hàm isStrongPassword(password) nhận vào là một chuỗi password, trả về true nếu là mật khẩu mạnh, ngược lại trả về false.
// Một mật khẩu mạnh là cần thoả các điều kiện sau:
// Ít nhất 8 ký tự
// Có ít nhất một ký tự hoa
// Có ít nhất một ký tự thường
// Có ít nhất một chữ số
// Có ít nhất một trong các ký tự đặc biệt này: !@#$%^&*()

// Ví dụ:
// isStrongPassword('') --> false
// isStrongPassword('super strong') --> false
// isStrongPassword('Sup3rC0o!') --> true

// Lưu ý: không sử dụng regular expression vì chưa học phần này, để dành sau này hehe

const specialCharacter = '!@#$%^&*()'
const numberCharacter = '1234567890'

function isStrongPassword(password) {
    // your code here  
  if ( password.length < 8 ) return false
  const splitCharacter = password.split('')
  if ( !splitCharacter.some( i => i === i.toUpperCase()) )  return false
  if ( !splitCharacter.some( i => i === i.toLowerCase())) return false 
  if ( !splitCharacter.some( i => numberCharacter.includes(i) )) return false
  if ( !splitCharacter.some( i => specialCharacter.includes(i))) return false
  return true
}