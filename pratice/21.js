// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
// Tìm bội chung nhỏ nhất trong khoảng đã cho
function smallestCommons(arr) {

  function findUCLN(a,b) {
    let temp = null;
    while (b != 0) {
      temp = a % b;
      a = b;
      b = temp;
    }
    return a
  }

  let [firstNumb, lastNumb ] = arr
  if (firstNumb > lastNumb)  [firstNumb, lastNumb ] = [lastNumb, firstNumb]
  const transformArr = []
  for (let i = firstNumb; i <= lastNumb; i++) {
    transformArr.push(i)
  }

  let tempUCLN = 0
  for (let i = 0; i < transformArr.length; i++) {
    if ( i < 2) tempUCLN = ((transformArr[0] * transformArr[1]) / findUCLN(transformArr[0], transformArr[1]))
    else tempUCLN = ((tempUCLN * transformArr[i]) / findUCLN(tempUCLN, transformArr[i]))
  }

  return tempUCLN;
}

smallestCommons([5,1]);