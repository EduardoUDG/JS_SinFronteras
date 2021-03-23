// Promise.resolve(2) 

Promise.resolve(2)
.then(valor => Promise.reject(1))
.then(valor => valor + 2)
.catch(e => console.error(e))


