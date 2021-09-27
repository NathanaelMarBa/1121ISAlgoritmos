var A = 10;
var B = 20;  

if(A < B){
    console.log(A + " Es menor que: " + B);
}else{
    console.log(B + " Es menor que: " + A);
}

var n1 = 5;
var n2 = 8;

if(n1 < n2){
    console.log("Perro");
}else{
    console.log("Gato");
}

var y = 30;
var x = 25;

if(x < y){
    console.log("Pez");
}else{
    console.log("Tiburon");
}

var P = 58;
var t = 32;

if(P < t){
    console.log("Manzana");
}else{
    console.log("Pera");
}

var M = 2;
var N = 1;

if(N < M){
    console.log("Mama");
}else{
    console.log("Niño");
}

var gato = "michi";

switch(gato){
    case "michi":
        console.log("El michi es un animal");
    break;
}

var pez = "beta";

switch(pez){
    case "beta":
        console.log("El pez es un beta");
    break;
}

var ganado = "caballo";

switch(ganado){
    case "caballo":
        console.log("El caballo es cafe");
    break;
}

var comida = "tacos";

switch(comida){
    case "tacos":
        console.log("El taco es de suadero");
    break;
}

var fruta = "manzana";

switch(fruta){
    case "manzana":
        console.log("La manzana es amarilla");
    break;
}

var n1 = 5;
var n2 = 10;

if(n1 < n2){
    switch(n1)
    {
        case 1:
            if(n1 < 15){
                console.log("n1 es menor a 15");
            }else{
                switch(n2){
                    case 20:                        
                        console.log("n2 es 20");
                    break;
                    case 30:
                        console.log("n2 es 30");
                    break;
                }
            }
        break;
        case 2:
            console.log("n1 es igual a 2");
        break;
        case "Perro":
            console.log("Saca al perro");
        break;
        default:
            console.log("n1 no es igual a 1, 2");
        break;
    }
}else{
    console.log("n1 es mayor que n2"); 
}

var n = 5;
var m = 5;

if (n = m){
    switch(m){
        case 1:
            if(n != m){
                console.log("no son iguales");
            }
            else{
               switch(n){
                case 2:
                    console.log("Son iguales");
                    break;
               }
            }
            break;
               default:
                   console.log("No son del mismo grupo");
                    break;
    }
}else{
    console.log("No existen");
}

var s = 15;
var d = 10;

if (s < d){
    switch(d){
        case 1:
            if(s == d){
                console.log("Son iguales");
            }
            else{
               switch(s){
                case 2:
                    console.log("No son iguales");
                    break;
               }
            }
            break;
               default:
                   console.log("s es mayor que d");
                    break;
    }
}else{
    console.log("d es menor que s");
}

var w = 10;
var x = 15;

if (w > x){
    switch(w){
        case 1:
            if(x < w){
                console.log("w es mayor");
            }
            else{
               switch(x){
                case 2:
                    console.log("x es menor");
                    break;
               }
            }
            break;
               default:
                   console.log("Son iguales");
                    break;
    }
}else{
    console.log("x es menor que w");
}

var px = 100;
var qx = 50;

if (px > qx){
    switch(qx){
        case 1:
            if(px < qx){
                console.log("qx es mayor");
            }
            else{
               switch(px){
                case 2:
                    console.log("px es mayor");
                    break;
               }
            }
            break;
               default:
                   console.log("px es mayor");
                    break;
    }
}else{
    console.log("Son iguales");
}


