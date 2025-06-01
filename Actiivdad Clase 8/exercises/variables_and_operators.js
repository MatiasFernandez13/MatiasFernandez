//Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
let numero1,numero2,suma;
numero1 = window.prompt("Introduzca un primer número", "0");
num1 = parseInt(numero1);
numero2 = window.prompt("Introduzca un segundo número", "0");
num2 = parseInt(numero2);
suma=num1+num2;
console.log("Los numeros ingresados son ("+num1+") y ("+num2+") la suma de ambos es: " + suma);

//Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
let cad1,cad2;
cad1 = window.prompt("Introduzca una primera palabra", "0");
let cade1 = cad1.toString();
cad2 = window.prompt("Introduzca una segunda palabra", "0");
let cade2 = cad2.toString();
let cadena=cade1+cade2
scadena1=cade1.length;
scadena2=cade2.length;
scadtotal=scadena1+scadena2;
console.log("");

//Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
let caden1,caden2;
cad1 = window.prompt("Introduzca una primera palabra", "0");
let ca1 = cad1.toString();
cad2 = window.prompt("Introduzca una segunda palabra", "0");
let ca2 = cad2.toString();
scadena1=ca1.length;
scadena2=ca2.length;
scadtotal=scadena1+scadena2;
console.log("Los palabras ingresados son "+ca1+" de ("+scadena1+" letras) y ("+ca2+") de ("+scadena2+" letras)  la cantidad de ambos es: " + scadtotal);