// Viết hàm filterProducts(productList) nhận vào danh sách sản phẩm và trả về các sản phẩm có giá lớn hơn 100000.

// Ví dụ:
// filterProducts({}); // []
// filterProducts([]); // []
// // should return [] because there is no product having price > 100000
// filterProducts([
//     { id: 1, price: 10000 },
//     { id: 2, price: 50000 },
//     { id: 3, price: 70000 },
// ])
// filterProducts([
//     { id: 1, price: 100000 },
//     { id: 2, price: 150000 },
//     { id: 3, price: 270000 },
// ]);
// should return a list of products having price > 100000
// [
//     { id: 2, price: 150000 },
//     { id: 3, price: 270000 },
// ]

function filterProducts(productList) {
  // your code here
  const BASE_PRICE = 100000
  if (!Array.isArray(productList) || productList.length === 0) return [];
  return productList.reduce( (a,b)=> {
    if (b['price'] > BASE_PRICE) a.push(b)
    return a
  }, [])
}
