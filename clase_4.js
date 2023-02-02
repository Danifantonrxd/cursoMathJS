const PlatziMath = {};

PlatziMath.promedio = function promedio(arr){
    let acum = 0;
    for(let i=0; i<arr.length; i++){
        acum += arr[i];
    }
    return acum/arr.length;
}

PlatziMath.promedioReduce = function promedioReduce(arr){
    let elPromedio = arr.reduce(function(acumulador, elemento){
        return acumulador + elemento;
    });
    return elPromedio/arr.length;
}

PlatziMath.promedioSintaxisNueva = function promedioSintaxisNueva(arr){
    let sintaxis = arr.reduce((acumulador, numero) => acumulador + numero);
    return sintaxis/arr.length;
}

PlatziMath.arrayPar = function arrayPar(arr){ //Devuelve true si es par, false si es impar
    if(arr.length % 2 == 0){ //es par
        return true;
    }
    return false;
}

PlatziMath.mediana = function mediana(arr){
    arr.sort((a, b) => a - b);//Ordena los elementos de menor a mayor no se como

    if(arrayPar(arr)){
        let mitad = arr.length/2;
        let result = (arr[mitad] + arr[mitad-1]) / 2;
        return result;
    }
    else{
        let mitad = Math.round(arr.length/2);
        return arr[mitad-1];
    }
}

PlatziMath.calcularModa = function calcularModa(arr){
    let objeto = {};

    for(let i=0; i < arr.length; i++){
        let elemento = arr[i];

        if(objeto[elemento]){
            objeto[elemento] += 1;
        }
        else{
            objeto[elemento] = 1;
        }
    }
    let modas = Object.entries(objeto);//[ [], [], [], [] ]
    modas.sort((a, b) => {
        if(a[1] > b[1]){
            return 1;
        }
        else{
            return 0;
        }
    });
    let num = modas.length;
    if(modas[num-1][1] == modas[num-2][1]){
        console.log("No hay moda");
    }
    else{
        console.log("La moda es: " + modas[num-1][0]);
    }
}

PlatziMath.mediaExponencial = function mediaExponencial(arr){
    let periodo = arr.length;
    let mult = (2)/(periodo + 1);
    let vInicial = promedio(arr);
    
    let result = (arr[periodo-1] - vInicial) * mult + vInicial;
    return result;
}