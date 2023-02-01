const precio = document.querySelector("#precio");
const descuento = document.querySelector("#cupon");
const mensaje = document.querySelector(".descuento");
const boton = document.querySelector(".boton");

let descuentos = {platzi: 10, platziExpert: 20, freddy: 50};


boton.addEventListener("click", crearMensaje);

let cupones = [];

cupones.push({
    name: "JS",
    descuento: 30
});

function crearMensaje(){
    let validarCupon = cupones.find(function(c){
        return c.name == descuento.value;
    });
    if(validarCupon){
        let nuevoPrecio = Number(precio.value) * ( (100 - validarCupon.descuento)/(100));
        mensaje.innerHTML = "el nuevo precio es: " + nuevoPrecio;
    }
    else{
        mensaje.innerHTML = "El cupon no es valido";
    }
}

/* function comprobar(tipo){
    if(descuentos[tipo]){
        return descuentos[tipo];
    }
    else{
        return false;
    }
}

function crearMensaje(){
    let x = comprobar(descuento.value);
    if(x){
        let nuevoPrecio = Number(precio.value) * ( (100 - x)/(100));
        mensaje.innerHTML = "el nuevo precio es: " + nuevoPrecio;
    }
    else{
        mensaje.innerHTML = "El cupon no es valido";
    }

} */
