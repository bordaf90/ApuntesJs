// Métodos find, forEach, map, filter

// find: busca el primer elemnto de un array que cumpla con una condición particular. 

var a=[10,58,62,45,65,25];

var num= a.find(function(elem,index,array){
    //console.log(elem + " Es el índice "+ index);
    // console.log(array);

    return elem >= 40;  // devuelve el primer elemento encontado mayor a 40
});

console.log(num)

// forEach: ejecuta una función para cada elemento de un array. 
// En este caso, por cada elemento del array evalúa el condicional if. 

var b= ['a','b','c','d','e'];

b.forEach(function(elem){
    if (elem=='c'){
        console.log("Existe una letra llamada 'c' ")
    }
});

// map: crea un array nuevo a partir de otro array

var c= [10,20,30];

var cuadrados= c.map(function(elem){
    return elem * elem
});

console.log("El valor de los números " + c + " al cuadrado es " + cuadrados)

// filter: crea un nuevo array que cumplan con una condición de filtrado

var d= [
    {nombre: 'José', edad: 16},
    {nombre: 'Alejandra', edad: 19},
    {nombre: 'Juan', edad: 32}
]

var adultos= d.filter(function(elem){
    return elem.edad >= 18;
});

console.log(adultos)

