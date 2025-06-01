//23)Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, 
// mostrando el valor de dicha variable en la consola del navegador.
function suma(a,b)
{
    return a+b;
}

numero1 = window.prompt("Introduzca un primer número", "0");
num1 = parseInt(numero1);
numero2 = window.prompt("Introduzca un segundo número", "0");
num2 = parseInt(numero2);
let resultado = suma(num1,num2);
console.log("El resultado de la suma es: " +resultado);

/*24)
A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/

/*
function sumaV(a,b)
{
    if(isNaN(a))
    {
        alert("El primer valor no es un número válido");
        return NaN;
    }
    else if(isNaN(b))
    {
        alert("El segundo valor no es un número válido");
        return NaN;
    }
    a=parseInt(a);
    b=parseInt(b);
    tot=a+b
    return tot;
}

n1 = window.prompt("Introduzca un primer número", "0");
n2 = window.prompt("Introduzca un segundo número", "0");
let resul24 = sumaV(n1,n2);
console.log("El resultado de la suma es: " +resul24);
*/

//25)Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(numero)
{
    return Number.isInteger(numero);
}

numf1 = Number(prompt("Introduzca un número", "0"));
console.log(validateInteger(numf1));

/*26)
A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
*/
function suma(a, b) {

  if (isNaN(a) || isNaN(b)) {
    alert("Uno de los parámetros no es un número válido.");
    return NaN;
  }

  if (!Number.isInteger(a)) {
    alert("El primer número no es entero. Se redondeará.");
    a = Math.round(a);
  }

  if (!Number.isInteger(b)) {
    alert("El segundo número no es entero. Se redondeará.");
    b = Math.round(b);
  }

  return a + b;
}

let n1 = Number(prompt("Ingrese el primer número:", "0"));
let n2 = Number(prompt("Ingrese el segundo número:", "0"));

let r26 = suma(n1, n2);
console.log("Resultado:", r26);



//27)Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
function validarEntero(numero, nombre) {
  if (!Number.isInteger(numero)) {
    alert(`El ${nombre} no es entero. Se redondeará.`);
    return Math.round(numero);
  }
  return numero;
}

function suma(a, b) {
  if (isNaN(a) || isNaN(b)) {
    alert("Uno de los parámetros no es un número válido.");
    return NaN;
  }
  a = validarEntero(a, "primer número");
  b = validarEntero(b, "segundo número");
  return a + b;
}

let n1de27 = Number(prompt("Ingrese el primer número:", "0"));
let n2de27 = Number(prompt("Ingrese el segundo número:", "0"));

let r27 = suma(n1de27, n2de27);
console.log("Resultado:", r27);