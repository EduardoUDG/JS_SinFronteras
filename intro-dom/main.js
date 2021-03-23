new Promise( (resolve, reject) => {
    setTimeout( () => resolve(2), 1000) 
    // setTimeout( () => reject(2), 1000) // si mi promesa falla en un futuro usamos
})
.then( x => console.log(x))
.catch( e => console.error(e))
