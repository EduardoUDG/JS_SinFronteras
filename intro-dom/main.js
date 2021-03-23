// Promise.resolve(2) 

Promise.reject(2)
.then(valor => valor + 1)
.then(valor => console.log(valor))
.catch(e => console.error(e))


const promesa2 = () => {
    Promise.reject(2)
    .then(valor => valor + 1)
    .then(valor => console.log(valor))
}
promesa2()