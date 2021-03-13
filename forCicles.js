// --------- Crear un ciclo for para recorrer un array -----------

// lenght calcula la cantidad de elementos que hay en un array

/* var lenguajes= ['JS', 'C++', 'PHP','JAVA', 'PYTHON']

for (i=0; i < lenguajes.length; ++i){
    console.log(lenguajes[i])
} */


/* var lenguajes= ['JS', 'C++', 'PHP','JAVA', 'PYTHON']


for (i=0; i < lenguajes.length; i++){
    console.log(lenguajes[i])
} */


// ----------- Crear un ciclo forEach para recorrer un array --------------------

/* var nombres= ['Juan', 'Paula', 'Fernando', 'Julia']

nombres.forEach(function(valor,indice,nombres){
  
    //console.log(valor);

    console.log(`${valor} se encuentra en el índice ${indice}`)
})

console.log()  // Esto es un salto de línea

// Otra forma:

function recorrido(valor,indice,nombre){
    console.log(`${valor}`);
};

nombres.forEach(recorrido) */



/* function recorridoArray1(matriz){
    matriz.forEach(function(value,index,matriz){
        //console.log(value,index)
        // console.log(value + " se encuentra en la posición " + index)
        console.log("En el índice " + index + " se encuentra " + value)
    });
}

recorridoArray1([4,5,6,2,4]) 

console.log();
console.log(" Filtro con un if, y me queda: ");
console.log();

 function recorridoArray2(matriz){
    matriz.forEach(function(value,index,matriz){

        if (value > 4){
            console.log(value)
        } 

    });
}

recorridoArray2([4,5,6,2,4]) */


// ---------- Crear un while para recorrer un array -----------


/* var nombres= ['Juan', 'Paula', 'Fernando', 'Julia']

var i= 0;

while( i < nombres.length){
    console.log(nombres[i]);
    i++;
} */


// ----------- Pre incremento y Post incremento

/* console.log()

i=5;

console.log("Soy i: " , i); 
console.log()

console.log("soy i++: ", i++); // Toma el valor "antiguo" o "anterior" de i, que es 0
console.log("Soy ++i: ",++i); // Toma el valor "nuevo" o "siguiente" de i, que es 2 */

/*

var arreglo=[];

// Pre incremento

for(var j=1; j<= 10; ++j){
    arreglo.push(j);
}


console.log(arreglo)

console.log()


var arr=[];

// Post incremento

for(var k=1; k<= 10; k++){
    arr.push(k);
}


console.log(arr)

*/

// ---------------- Matrices ---------------

/*
var matriz= [[2,4,6],[5,1,8],[9,0,2]]

console.log();

console.log("Cantidad de filas: ", matriz.length);

console.log();

console.log("La matriz es:" );
console.log(matriz)

console.log();

// Ayuda a ver visualmente mejor a la matriz
console.log(matriz[0]);
console.log(matriz[1]);
console.log(matriz[2]);

console.log()

console.log("Usamos el ciclo for: ")

for (var i=0; i< matriz.length; i++){
    console.log(matriz[i])
}

*/

//-------------------------


/*

var numeros= 'avliqerbvlkwevb';

var n= numeros.split("");

var conteo= {};

var ocurrencias= n.forEach((valor,indice, arreglo) => {
    if (conteo[valor]){
        conteo[valor]= conteo[valor]+1;
    } else {
        conteo[valor]=1;
    }
} )


console.log(numeros)
console.log(n)
console.log(conteo) 

*/
