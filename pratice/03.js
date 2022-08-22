const K500_QUANTITY = 2;
const K200_QUANTITY = 5;
const K100_QUANTITY = 10;
const K50_QUANTITY = 100;

const K500_VALUE = 500000;
const K200_VALUE = 200000;
const K100_VALUE = 100000;
const K50_VALUE = 50000;

const BASE_UNIT = 50000;

function withdraw(amount) {
  // your code here
  if( amount % BASE_UNIT !== 0) return 'Invalid balance'
  const totalAmount = K500_QUANTITY * K500_VALUE + K200_QUANTITY * K200_VALUE + K100_QUANTITY * K100_VALUE +  K50_QUANTITY * K50_VALUE
  if ( amount > totalAmount  ) return 'Insufficient balance from ATM'

  const a = Math.trunc(amount / K500_VALUE)
  amount = amount - a * K500_VALUE
  const b = Math.trunc(amount / K200_VALUE)
  amount = amount - b * K200_VALUE
  const c = Math.trunc(amount / K100_VALUE)
  amount = amount - c * K100_VALUE
  const d = Math.trunc(amount / K50_VALUE)

  return { 
    k500: a, 
    k200: b,
    k100: c,
    k50: d
  }
}

console.log(withdraw(7700000))  // --> { k500: 1, k200: 1, k100: 1, k50: 1 }
// console.log(withdraw(200000)) // --> { k500: 0, k200: 1, k100: 0, k50: 0}
// console.log(withdraw(125000)) // --> 'Invalid balance'
// console.log(withdraw(9000000)) // --> 'Insufficient balance from ATM'