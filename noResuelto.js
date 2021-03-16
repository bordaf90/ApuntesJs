/*
1) Transformo el string en un array, llamado prueba
2) Del array prueba paso a un nuevo array (a) que solo se quede con mayúsculas y a otro array (b) 
que se quede con el resto. 
3) concateno el array a y el array b

*/


// Paso 1

var str= "henrySOY"

var prueba= str.split("");

// Paso 2

var a= prueba.filter(function(valor){
    if (valor=== valor.toUpperCase()){
        return valor
    }
})


var b= prueba.filter(function(valor){
    if (valor=== valor.toLocaleLowerCase()){
        return valor
    }
})

// Paso 3

var concatenar= b+a


var j= function(concatenar){
    for(i=0; i < concatenar.lenght; i++){
        if( concatenar[i]=== ","){
            return concatenar.replace(',','')
        }

        
    }
}

j(concatenar)

console.log(j)

