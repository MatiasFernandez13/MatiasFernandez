//4) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
let texto4 = "Ornitorrinco";
let texto4EnMay = texto4.toUpperCase();
console.log(texto4EnMay);

//5) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
let texto5 = "Ornitorrinco";
let texto5Cortado = texto5.substring(0,5);
console.log(texto5Cortado);

//6) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
let texto6="Ornitorrinco";
texto6c=texto6.length;
let texto6Ult3=texto6.substring(texto6c,texto6c-3);
console.log(texto6Ult3);

//7) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
let texto7="orniTorrinco";
t7tot=texto7.length;
t7p=texto7.substring(0,1);
t7p=t7p.toUpperCase();
t7u=texto7.substring(1,t7tot);
t7u=t7u.toLowerCase();
t7final=t7p+t7u
console.log(t7final);

//8)Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
let texto8="Cadena Espaciada";
let t8esp=texto8.indexOf(" ");
console.log("La posicion espaciada es "+ t8esp);

//9)Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
let texto9="orniTorRinco dinOsAurioS";
t9largo=texto9.length;
t9espacio=texto9.indexOf(" ");
let t9a=texto9.substring(0,1).toUpperCase()+texto9.substring(1,t9espacio).toLowerCase();
let t9b=texto9.substring(t9espacio+1,t9espacio+2).toUpperCase()+texto9.substring(t9espacio+2,t9largo).toLowerCase();
console.log(t9a+" "+t9b);