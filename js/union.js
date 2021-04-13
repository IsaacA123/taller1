let union = (array1, array2) => {
    console.log("Hola bb "+array1+array2);

    array_union = array1.slice() ;
    var tam2 = array2.length;

    for(var i=0;i<tam2;i++){
        if(!array_union.includes(array2[i])){
            array_union.push(array2[i]) ;
        }
    }
    return array_union ;
}


