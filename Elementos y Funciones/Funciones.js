function suma (){
    let n1 = 5;
    let n2 = 10;
    let total = n1 + n2;
    console.log("La suma es: " + total);
}
function resta (){
    let n1 = 5;
    let n2 = 10;
    let total = n1 - n2;
    console.log("La resta es: " + total);
}
function mult (){
    let n1 = 5;
    let n2 = 10;
    let total = n1 * n2;
    console.log("La multiplicacion es: " + total);
}
function div (){
    let n1 = 5;
    let n2 = 10;
    let total = n1 / n2;
    console.log("La divicion es: " + total);
}

var x = prompt("¿Que operacion deseas realizar?");

switch(x){
    case "suma":
        suma();
    break;
    case "resta":
        resta();
    break;
    case "multiplicacion":
        mult();
    break;
    case "divicion":
        div();
    break;
    default:
        alert("Operacion Invalida");
}