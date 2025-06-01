/*17) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje
“Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
*/

let random=Math.random();
if (random>=0.5) 
    {
        alert("Greater than 0.5");
        console.log("Greater than 0.5");
        console.log(random);
    } 
    else 
    {
        alert("Lower than 0.5");
        console.log("Lower than 0.5");
        console.log(random);
    }

/*18)
Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
i. “Bebe” si la edad es menor a 2 años;
ii. “Niño” si la edad es entre 2 y 12 años;
iii. “Adolescente” entre 13 y 19 años;
iv. “Joven” entre 20 y 30 años;
v. “Adulto” entre 31 y 60 años;
vi. “Adulto mayor” entre 61 y 75 años;
vii. “Anciano” si es mayor a 75 años.
*/
let age18 = Math.floor(Math.random() * 101); // 0 a 100 inclusive
if (age18<2) 
    {
        alert("Bebé");
        console.log("Es un Bebé tiene: "+age18);
    } 
        else if(age18<=12)
        {
            alert("Niño");
            console.log("Es un Niño tiene: "+age18);
        }
            else if(age18<=19)
            {
                alert("Adolescente");
                console.log("Es un Adolescente tiene: "+age18);

            }
                else if(age18<=30)
                {
                    alert("Joven");
                    console.log("Es un Joven tiene: "+age18);
                }
                    else if(age18<=60)
                    {
                        alert("Adulto");
                        console.log("Es un Adulto tiene: "+age18);
                    }
                        else if(age18<=75)
                        {
                            alert("Adulto Mayor");
                            console.log("Es un Adulto Mayor tiene: "+age18);
                        }
                            else
                            {
                                alert("Anciano");
                                console.log("Es un Anciano tiene: "+age18);
                            }