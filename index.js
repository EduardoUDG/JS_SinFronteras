
/* console.log('Hola mundo'); */


// Tipos de datos en JavaScript
// String
// Boolean
// Number
// Null
// Undefined
// Object


/* 
let miPrimeraVariable = 'Esta es mi primera variable';
console.log(miPrimeraVariable);

miPrimeraVariable = 'Esto a cambiado';
console.log(miPrimeraVariable);
*/

/* 
let texto = 'Este es un texto';
let numero = 18;
let booleano = true;

console.log(texto, numero, booleano);
 */

/* 
let undef;
console.log(undef);
 */

/* 
let sinDato = null;
console.log(sinDato);
*/


// objeto vacio
/* const miPrimerObjeto = {} */





// Objeto, agrupacion de datos que hace sentido entre si
/* const miObjeto = {
    unNumero: 12,
    unString: 'Esta es una cadena de caracteres',
    unaCondicion: true,
} */
/* console.log(miObjeto);
console.log(miObjeto.unNumero);
 */

// Arreglo vacio
/* const arrVacio = [] */


// Arreglo, los arreglos pueden contener elementos de 
// cualquier tipo, dentor de el 
/* 
const arr = [1, 2, 'Hola', 'Mundo', miObjeto] 
console.log(arrVacio, arr);

arr.push(5)
console.log(arrVacio, arr);

let miPrimeraVariable = 'diez'
arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(2)
arrVacio.push(1)
arrVacio.push('hola mundo')
arrVacio.push(miPrimeraVariable)
console.log(arrVacio);
*/


/* 
const suma = 2+2
const resta = 10 - 5
const multiplicacion = 10 * 1
const division = 9 / 3
 */
/* console.log(suma, resta, multiplicacion, division); */

/* 
const numero = 9 % 3
let num = 5

num += 5
num -= 5
num *= 5
num /= 2

console.log(num);
*/
/* 
let numero1 = 5 == 6
let numero2 = 5 == 5
let numero3 = 5 == '5'
let numero4 = 5 === '5'
let numero5 = 5 < 3
let numero6 = 3 <= 5
let numero8 = 3 > 5
let numero9 = 3 >= 5
let numero10 = 5 != '5'
let numero11 = 5 !== 6


console.log(numero12);
 */
/* 
let num= 0
while (num < 5) {
    console.log(num);
    num++
}
*/

/* 
let opcion = 5

switch (opcion) {
    case 1: 
        console.log('Soy la opcion 1');
        break;
    case 2: 
        console.log('Soy la opcion 2');
        break;
    case 3: 
        console.log('Soy la opcion 3');
        break;
    case 4: 
        console.log('Soy la opcion 4');
        break;
    default: 
        console.log('Opcion fuera de rango');
        break;
}
*/

/* 
let arreglo = []
let tamArreglo = 0

console.log('Llenando arreglo');
for (let i=0; i < 10; i++) {
    arreglo.push(i);
    tamArreglo++
}
console.log('Arreglo lleno!!');




console.log('Imprimiendo el arrego');
for (let i=0; i < arreglo.length; i++ ) {
    console.log(arreglo[i]);
}
*/

function iterar(arg1) {
    
    for (let i=0; i < arg1.length; i++) {
        console.log(arg1[i]);
    }
}


const numeros = [1, 2, 3, 4, 5]
const nombres = ['Lalo', 'Luis', 'Diego', 'Karime', 'Tony']

iterar(numeros);
iterar(nombres);


