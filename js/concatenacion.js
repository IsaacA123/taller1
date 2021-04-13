let concatenacion = (array1, array2) => {
    array_concatenacion = []
    var tam1 = array1.length;
    var tam2 = array2.length;

    for (var i = 0; i < tam1; i++) {
        for (var j = 0; j < tam2; j++) {
            array_concatenacion.push(array1[i].concat(array2[j])) ;
        }
    }
    return array_concatenacion
}

