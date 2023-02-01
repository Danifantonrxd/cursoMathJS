function calcularAreaTriangulo(a,b,c){
    let a2 = a ** 2;
    let b2 = b ** 2;
    let c2 = c ** 2;
    let x = (b2 + c2 - a2)/(2*c);
    let x2 = x ** 2;
    let h = (Math.sqrt(b2 - x2));
    console.log({
        a2,b2,c2,x,x2,h
    });
    return((c * h) / 2);
}