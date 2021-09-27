console.log("Ejercicio 5");

var x = parseInt(prompt ("Ingresa un numero"));
var contador = 1;
var total = 0;

while (contador <= x){
    var n = parseInt(prompt("Ingrese un numero"));
    total = total + n;
    contador++;
}
console.log(total);