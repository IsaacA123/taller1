let potencia = (array, potencia)=>{

    var tam1 = array.length;
    array_copia = array.slice()

    iteracion_potencia = []
    for(var i=2; i <= potencia; i++){
        for (const item in array) {
            for(const item_2 in array_copia){
                iteracion_potencia.push(array[item].concat(array_copia[item_2]))
            }
        }
        array_copia = iteracion_potencia.slice()
    }

    if(potencia>=1){
        for(var i=0;i<tam1;i++){
            iteracion_potencia.push(array[i]);
        } 
    }

    return iteracion_potencia
}