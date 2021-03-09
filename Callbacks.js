// La función saludar recibe en el parámetro (callback) la función llamada callback()
function saludar(callback){
    return callback();
}

saludar( function(){
    console.log('Hola, intento entender esto')
})

/* Si en el navegador escribo solamente saludar() me devuelve error. 
    Cada vez que quiero llamar a la función saludar() debo escribir la función paramétrica a mano. 
    Ej: saludar( function(){
     console.log('Hola, digo algo de nuevo')
    }) */

// -------------------- Ejemplo 2 ------------------- 

// saludar() ahora recibe (name,callback):

function saludar(name,callback){
    return callback(name);
}

saludar('Juan Perez', function(name){
    console.log('Hola, ', name)
})

/* Sería como decir:

saludar('Juan Perez', callback) */

// la función que está dentro de saludar() es una función anónima por no estar asociada a ninguna variable
// saludar('Juan perez', función anónima)

// ----------------- Ejemplo 3 -----------------------

function saludar(name,callback){
    return callback(name);
}

// función apartada:

function saludo(name){
    console.log('hola ', name)
}

saludar('Juan Aguirre', saludo)


// --------------------------------------------------------------

// ¿Cuándo se utilizan los callback? Se utilizan siempre que haya procesos dependientes. //

/* Sumar 2 números,
    al resultado elevarlo al cuadrado,
    al resultado dividirlo entre 2,
    al resultado restarle (sustraerle) 100,
    y al resultado validar si es mayor, menor o igual a cero */

function sumar (num1,num2, callback){
    callback(num1 + num2);
}

function cuadrado (num, callback){
    callback(num*num);
}

function dividir (num, callback){
    callback(num/2);
}

function sustraer (num, callback){
    callback(num-100);
}

function esMayor (num, callback){
    if(num > 0){
        callback("Es mayor a cero");
    } else {
        callback("Menor o igual a cero");
    }
}

sumar(8,5, function(resultadoSumar) {
    console.log("Suma de dos números: ", resultadoSumar);

    cuadrado(resultadoSumar, function(resultadoCuadrado){
        console.log("Cuadrado de la suma: ", resultadoCuadrado);
    

        dividir(resultadoCuadrado, function(resultadoDividir){
            console.log("Dividido en dos: ", resultadoDividir);
        

            sustraer(resultadoDividir, function(resultadoSustraer){
                console.log("El resultado de la resta es ", resultadoSustraer);
            

                esMayor(resultadoSustraer, function(resultadoFinal){
                    console.log("El número es ", resultadoFinal);
                });
            });
        });
    });


});


// ----------------- Lo mismo pero de forma paramétrica: ---------------------------

function sumar (num1,num2, callback){
    callback(num1 + num2);
}

function cuadrado (num, callback){
    callback(num*num);
}

function dividir (num, callback){
    callback(num/2);
}

function sustraer (num, callback){
    callback(num-100);
}

function esMayor (num, callback){
    if(num > 0){
        callback("Es mayor a cero");
    } else {
        callback("Menor o igual a cero");
    }
}

// Funciones apartadas

function callbackSumar(resultadoSumar){
    console.log("Suma de dos nros", resultadoSumar);

    cuadrado(resultadoSumar,callbackCuadrado);
}

function callbackCuadrado(resultadoCuadrado){
    console.log("Cuadrado de la suma", resultadoCuadrado);

    dividir(resultadoCuadrado,callbackDividir);

}

function callbackDividir(resultadoDividir){
    console.log("División de dos nros", resultadoDividir)

    sustraer(resultadoDividir, callbackSustraer);

}

function callbackSustraer(resultadoSustraer){
    console.log("Sustraer 100: ", resultadoSustraer);

    esMayor(resultadoSustraer, callbackFinal)

}

function callbackFinal(resultadoFinal){
    console.log(resultadoFinal);

}

sumar(8,5,callbackSumar)
