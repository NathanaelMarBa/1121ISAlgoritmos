//Declaración del arreglo

/*var simpson = [];
var ingreso, bandera = true;
alert("Bienvenido al resgistro de los simpsons");

while(bandera == true){
 
    ingreso = prompt("Ingresa un personaje de los simpsons");
    var res = prompt("Deseas ingresar otro personaje? S/N");
    simpson.push(ingreso); //Subir datos a un arreglo

    if(res == "s" || res == "S"){
        bandera = true;
    }else{
        bandera = false;
    }
}

console.log(simpson);*/

/*var simpson = ["homero", "marge", "bart", "lisa", "maggie"];
var bandera = true;

while (bandera == true){
    var res = prompt("Quieres borrar algun personaje S/N");
    if(res == "s" || res == "S"){
        var personaje = prompt("Ingresa el nombre del personaje");
        personaje.toLowerCase();

        //Busqueda
            for(var i = 0; i < simpson.length; i++){
                if(personaje == simpson[i]){
                    simpson.splice(i, 1)
                    alert("El personaje a sido borrado")
                    console.log(simpson)
                }
            }
    }else{
    bandera = false;
}
}*/

var vengadores = {

    "Asociacion": "Asociacion de engadores",
    "Jefe" : "Tony Stark",

    "Integrante1":{
        "Nombre": "Steve",
        "Poder": "Super velocidad"
    },
    "Integrante2":{
        "Nombre": "Bruce",
        "Poder": "Super fuerza"
    },
    "Integrante3":{
        "Nombre": "Tony",
        "Poder": "Super inteligencia",

        "Traje" : {
            "Color" : "Rojo y Dorado",
            "Energia" : "Reactor"
        }

    }
}

console.log(vengadores);