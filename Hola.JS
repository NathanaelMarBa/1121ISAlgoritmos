//INT sirve escribir o almacenar numeros enteros 1,2,3,1000, etc.
//FLOAT sirve para almacenar numeros con decimales 1.2,2.3,3.4, etc.
//STRING sirve para almacenar texto "Hola", "Mundo", "JavaScript" "Hola esto es un string", etc.
//Char sirve para almacenar un caracter "H", "M", "J", "S", etc.
//Boolean sirve para almacenar true o false.

/*alert("Binevenido al menu");

var contador = false;*/


/*while(contador == false){

    var opc = prompt("Que deseas hacer? \n 1. saludo, \n 2. despedida, \n 3. salir")

    switch (opc) {
        case "1":
            alert("Hola, Como estas?");
            break;
        case "2":
            alert("Adios, te vere pronto");
            break;
            case "3":
                alert("Gracias por utilizar nuestro programa");
                contador = true;
                break;
        default:
            alert("Opcion no valida");
            break;
    }
}*/

/*do{
    var opc = prompt("Que deseas hacer? \n 1. saludo, \n 2. despedida, \n 3. salir")

    switch (opc) {
        case "1":
            alert("Hola, Como estas?");
            break;
        case "2":
            alert("Adios, te vere pronto");
            break;
            case "3":
                alert("Gracias por utilizar nuestro programa");
                contador = true;
                break;
        default:
            alert("Opcion no valida");
            break;
    }
} while(contador == false)*/


/*for(var i = 1; i < 10; i++){
    alert("Hola");
}*/


var opc = prompt("Que deseas hacer? \n 1. saludo, \n 2. despedida, \n 3. salir")

    switch (opc) {

        case "1":
            alert("Hola como estas?");
        break;

        case "2":
            alert("Adios, te vere pronto");
        break;

        case "3":
            alert("Gracias por utilizar nuestro programa");
        break;

        default:
            alert("Opcion no valida");
        break;
    }