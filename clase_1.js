const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado ** 2;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
let alturaTriangulo = 5.5;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

const radioCirculo = 3;
const PI = 3.14159;

const circunferencia = 2 * radioCirculo * PI;
const areaCirculo = Math.pow(radioCirculo,2) * Math.PI.toFixed(3);
