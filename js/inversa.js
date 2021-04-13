let inversa = (array1)=>{
    array_inversa = []
  //  var tam1 =  array1.length;
    for(const item in array1){
        str_array = array1[item].split("") 
        inversa_array = str_array.reverse() 
        str_inverso = inversa_array.join("") 
        array_inversa.push(str_inverso)
    }
    return array_inversa;
}