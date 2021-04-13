let diferencia = (array1, array2)=>{
    array_diferencia =  []
    var tam1 = array1.length;
    for(var i=0;i<tam1;i++){
        if(!array2.includes(array1[i])){
            array_diferencia.push(array1[i]);
        }
    }
    return array_diferencia;
}
