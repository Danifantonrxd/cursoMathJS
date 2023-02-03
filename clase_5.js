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