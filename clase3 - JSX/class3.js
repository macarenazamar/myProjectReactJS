//Sin ternary operator

const condition = true; //esto siempre dejarlo activo 
//1)Primer alternativa 
/* let result = null;
if (condition) {
    result = 'correct';    
} else {
    result = 'incorrect';
}
console.log(`This is ${result}`); */

//para ejecutar en la consola:
//posicionarse en la carpeta luego: node clase3.js
//si condition = null o "" lo toma como valores falsos por lo tanto arroja incorrecto
//si condition = "escribo lo que sea" lo toma como true por lo tanto es correcto

//Con ternary operator
// console.log(`This is ${condition ? 'correct' : 'incorrect'}`);

//otra manera de hacerlo
/* let result = (`This is ${condition ? "correct" : "incorrect"}`) ;
console.log(result); */

//concatenar condiciones
const condition2 = false;
console.log(`The result is: ${condition ? 'Condition 1 correct' : condition2 ? 'Condition1 is incorrect & Condition2 is correct' : 'Both are incorrect'}`);