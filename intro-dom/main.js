
const a = { b:1 }
console.log(a);


const b = a
console.log(b);


b.c = 2
console.log(b);
console.log(a);
console.log(b === a);

//* Esta sintaxis dice, crea un objeto
//* y todas las propiedades de a
//* y asignalas a este objeto     
const c = { ...a }
c.d = 12
console.log(c);
console.log(a);
console.log(a === c);
