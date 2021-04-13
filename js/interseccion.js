let interseccion = (array1 , array2)=>{
    array_interseccion = []
    var tam2 = array2.length;
    
    for(var i=0;i<tam2;i++){
        if(array1.includes(array2[i])){
            array_interseccion.push(array2[i]);
        }
    }
    return array_interseccion;
}


