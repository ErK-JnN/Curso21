console.log("hola mundo desde un archivo");
alert("hola mundo desde una alerta");



//comentario//


/*varias lineas
 */

//declaraciones
var nombre = Brenyer
let = edad

//tipos de datos//
let string = 'hola word'; //con "", ''//
let number = 25; // 0 25 -8 //
let decimal = 2.5;
let booleano = true; // true, false//
let nulo = null;
let undefinido = undefined;
let indefinidoSinValor;

//operadores comparativos
let mayorQue = 10 > 5;
console.log("10 > 5",mayorQue);
let menorQue = 10 < 5;
console.log("10 < 5",menorQue);
let mayorOigual = 10>=10;
console.log("10>=10",mayorOigual);
let menorOigual = 10<=10;
console.log("10<=10",menorOigual);
let igual = 10 == "10"; // true
console.log(" 10 == 10", igual);
let diferente = 1 != true; // false
console.log(" 1 != true", diferente);
let estrictoIgual = 10 === "10"; // false
console.log(" 10 === '10'", estrictoIgual);

// Operadores aritmeticos
let suma = 10 + 5; // 15
console.log("10 + 5", suma);
let resta = 10 - 5; // 5
console.log("10 - 5", resta);
let multiplicacion = 10 * 5; // 50
console.log("10 * 5", multiplicacion);
let division = 10 / 5; // 2
console.log("10 / 5", division);
let potencia = 10^2; // 100
console.log("10 ** 2", potencia);
let modulo = 10 % 3; // 1
console.log("10 % 3", modulo);

// Operadores Logicos
let and = true && true; // true
console.log("true && true", and);
let andCondicion = (10 > 5) && (5 < 3); // false
console.log("(10 > 5) && (5 < 3)", andCondicion);
let or = true || false; // true
console.log("true || false", or);
let not = !true; // false
console.log("!true", not);



// Ejercicios para practicar "en casa"

const doce = !( true && (!true === !( !(16 === (4*2) + 8))) ) !== (false);
   //        !( true && true
const trece = !(((!(!(10 / 5 == "2") === false) != false) === ((5 * 5) <= (100 / 4))) && (!((1 + 1) !== (10 / 5)) !== (true)));