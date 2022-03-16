// function getTicketPrice(age) {
//   // your code here
//   if (age < 0 || age > 125) return -1
  
//   if (age < 6 || age > 70) return 0
//   if (age > 12 ) return 50000
//   return 20000
// }

// console.log(getTicketPrice(80));
// console.log(getTicketPrice(18));
// console.log(getTicketPrice(8));


function sayHello(languageCode) {
  // your code here ...
  const lanMap = {
      en: 'Hello',
      vi: 'Xin chào',
      fr: 'Bonjour',
      cn: 'Nǐn hǎo',
      ja: 'Konnichiwa',
      ko: 'Anyoung haseyo'
  }

  return lanMap[languageCode] || 'Hello';
}

