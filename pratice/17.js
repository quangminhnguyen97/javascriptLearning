function uniteUnique(...arr) {
  const uniqueArr = []
  const transformedArr = arr.flat()
  transformedArr.map((n) => {
    if ( uniqueArr.indexOf(n) === -1 ) uniqueArr.push(n)
  })
  console.log(arr);
  return uniqueArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1])