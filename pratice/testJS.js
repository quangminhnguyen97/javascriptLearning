const promise = new Promise((resolve, reject ) => {
  setTimeout(() => resolve(1), 3000)
  reject(new Error('test err'))
})

promise
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
  .finally(() => console.log('123'))