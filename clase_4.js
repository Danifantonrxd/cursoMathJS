let array = [1,2,3,4,5,6,7,8,9];

function promedio(arr){
    let acum = 0;
    for(let i=0; i<arr.length; i++){
        acum += arr[i];
    }
    return acum/arr.length;
}

function promedioReduce(arr){
    let elPromedio = arr.reduce(function(acumulador, elemento){
        return acumulador + elemento;
    });
    return elPromedio/arr.length;
}

function promedioSintaxisNueva(arr){
    let sintaxis = arr.reduce((acumulador, numero) => acumulador + numero);
    return sintaxis/arr.length;
}

function arrayPar(arr){ //Devuelve true si es par, false si es impar
    if(arr.length % 2 == 0){ //es par
        return true;
    }
    return false;
}

function mediana(arr){
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