//Analisis personal de Juanita

function encontrarPersona(personaEnBusqueda){
    return salarios.find(persona => persona.name == personaEnBusqueda);
}

function medianaPorPersona(personaEnBusqueda){
    let trabajos = encontrarPersona(personaEnBusqueda).trabajos; // [ {}, {}, {}]

    let Salarios = [];
    for(let i = 0; trabajos[i]; i++){ //[200, 250, 300]
        Salarios.push(trabajos[i].salario);
    }

    return PlatziMath.mediana(Salarios);
}

function medianaPorPersonaConMap(personaEnBusqueda){
    let trabajos = encontrarPersona(personaEnBusqueda).trabajos; // [ {}, {}, {}]

    let Salario = trabajos.map(function(elemento){
        return elemento.salario;
    });

    return Salario;
}

function proyeccionSalarialDaniel(personaEnBusqueda){
    //Crear un arreglo con el promedio de aumento de la mitad de los años trabajando
    let trabajos = encontrarPersona(personaEnBusqueda).trabajos; // [ {}, {}, {}]
    let Salario = trabajos.map(num => num.salario); //[250, 250, 1000]

    let anios = Salario.length;
    if(anios == 1){
        return Salario[0];
    }
    let cambios = [];
    for(let i = anios-1; i >= anios/2; i--){
        let cambio = Salario[i] - Salario[i-1];
        cambio = cambio / Salario[i-1] * 100;
        cambios.push(cambio);
    }

    let aumento = PlatziMath.promedio(cambios);

    aumento = Salario[anios-1] + (Salario[anios-1] * aumento / 100);

    return Number(aumento.toFixed(2));
}

function trabajadoresPorEmpresa(empresa){// [{name: "", nombreEmpresa:[{año:xxxx,salario: yyyy}]}]
    let personas = salarios.filter(x => {
        for(let i=0; x.trabajos[i];i++){
            return x.trabajos[i].empresa == empresa;
        }
    });
    for(let i = 0; i < personas.length; i++){
        personas[i].trabajos = personas[i].trabajos.filter(x => x.empresa == empresa);
    }
    return personas;
}

/*
{   Salida[Empresa_1][2018][0]
    Empresa_1: {
        2018:[Salario, Salario, Salario],
        2019:[Salario]
    }
    Empresa_2:{
        2018:[Salario, Salario]
    }
}
*/

function salariosPorEmpresa(){
    let salida = {};
    for(let i=0; i < salarios.length; i++){
        for(let j=0; salarios[i].trabajos[j]; j++){
            let nombreEmpresa = salarios[i].trabajos[j].empresa;
            let years = salarios[i].trabajos[j].year;
            let salary = salarios[i].trabajos[j].salario;
            if(!salida[nombreEmpresa]){
                salida[nombreEmpresa] = {};
            }
            if(!salida[nombreEmpresa][years]){
                salida[nombreEmpresa][years] = [];
            }
            salida[nombreEmpresa][years].push(salary);
        }
    }
    return salida;
}

function salariosPorEmpresaJuanDC(){
    let empresas = {};
    for(persona of salarios){
        for(trabajo of persona.trabajos){
            if(!empresas[trabajo.empresa]){
                empresas[trabajo.empresa] = {};
            }
            if(!empresas[trabajo.empresa][trabajo.year]){
                empresas[trabajo.empresa][trabajo.year] = [];
            }
            empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
        }
    }
    return empresas;
}

function medianaEmpresaYear(empresa,year){
    let aux = salariosPorEmpresa();
    if(!aux[empresa]){
        console.log("La empresa no existe");
        return;
    }
    if(!aux[empresa][year]){
        console.log("La empresa no tuvo trabajadores ese año");
        return;
    }
    return PlatziMath.mediana(aux[empresa][year]);
}

function proyeccionSalarialEmpresa(empresa){
    let estructura = salariosPorEmpresa();
    if(!estructura[empresa]){
        console.log("La empresa no existe");
        return;
    }
    let medianas = [];
    let years = Object.keys(estructura[empresa]);
    for(let i = 0; i < years.length; i++){
        medianas.push(PlatziMath.mediana(estructura[empresa][years[i]]));
    }
    let variaciones = [];
    for(let i = medianas.length-1; i > 0; i--){
        let cambio = medianas[i]-medianas[i-1];
        cambio = cambio / medianas[i-1] * 100;
        variaciones.push(cambio);
    }
    let proyeccion = PlatziMath.promedio(variaciones);
    proyeccion = medianas[medianas.length-1] + medianas[medianas.length-1]*proyeccion/100;
    return Number(proyeccion.toFixed(2));
}

function proyeccionSalarialEmpresaJuanDC(empresa){
    let estructura = salariosPorEmpresa();
    if(!estructura[empresa]){
        console.log("La empresa no existe");
        return;
    }
    let empresaYear = Object.keys(estructura[empresa]);
    let listaMedianaYears = empresaYear.map((year) => {
        return medianaEmpresaYear(empresa, year);
    });    
    //Hasta aqui fue que me gusto

}

function medianaGeneral(){
    const medianaPersonas = salarios.map(persona => medianaPorPersona(persona.name));
    return PlatziMath.mediana(medianaPersonas);
}

function medianaTop10(){
    let medianaPersonas = salarios.map(persona => medianaPorPersona(persona.name));
    medianaPersonas = medianaPersonas.sort((a,b) => a - b);
    let top10 = Math.round(medianaPersonas.length * 0.1);
    let j = medianaPersonas.length-1;
    let aux = [];
    for(let i = 0; i < top10; i++){
        aux.push(medianaPersonas[j]);
        j--;    
    }

    let limit = medianaPersonas.length - top10;
    let JuanDC = medianaPersonas.slice(limit, medianaPersonas.length);
    //El slice COPIA elementos de un arreglo a otro desde una posicion inicial a final
    //El splice CORTA los elementos de igual manera
    console.log(JuanDC);
    return PlatziMath.mediana(aux);
}