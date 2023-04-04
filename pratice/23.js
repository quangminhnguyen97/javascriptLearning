// Flatten a nested array. You must account for varying levels of nesting

function steamrollArray(arr) {
  return arr.reduce( (array, flatten) => {
    return array.concat( !Array.isArray(flatten) ? flatten : steamrollArray(flatten) )
  }, [])
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))
console.log(steamrollArray([1, {}, [3, [[4]]]]))
console.log(steamrollArray([[["a"]], [["b"]]]))
