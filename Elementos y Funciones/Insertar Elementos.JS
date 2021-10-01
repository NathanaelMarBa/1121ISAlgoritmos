var total = 0;
var suma = [];
for(i=0; i<=100; i++){
    if(i % 3 == 0){
        total = total + i;
    }
    suma.push(total);
    console.log(suma); 
}