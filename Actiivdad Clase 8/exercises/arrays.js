//10) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
/*
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
console.log(meses[4]);
console.log(meses[10]);
*/

//11) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)
/*
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let mesord=meses.sort();
console.log(mesord);
*/
//12) Agregar un elemento al principio y al final del array (utilizar unshift y push)
/*
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
meses.unshift("aaa");
meses.push("zzz");
console.log(meses);
*/

//13) Quitar un elemento del principio y del final del array (utilizar shift y pop).
/*
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
meses.shift();
meses.pop();
console.log(meses);
*/

//14) Invertir el orden del array (utilizar reverse).
/*
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
mesesRev=meses.reverse();
console.log(mesesRev);
*/

//15) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
/*
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
mesGuion=meses.join("-");
console.log(mesGuion);
*/

//16) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
mesCop=meses.slice(4,11);
console.log(mesCop);