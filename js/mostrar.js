function mostrar_operaciones() {
    var rbutton_seleccionado = document.querySelectorAll('input[name="tipo_operacion"]:checked')[0];

    switch (rbutton_seleccionado.value) {
        case "operaciones_alfabetos":
            document.getElementById("options").innerHTML =
                "<option value='union'> Unión </option>"
                + "<option value='diferencia'> Diferencia </option>"
                + "<option value='interseccion'> Intersección </option>";
            break;
        case "operaciones_lenguajes":
            document.getElementById("options").innerHTML =
                "<option value='union'> Unión </option>"
                + "<option value='diferencia'> Diferencia </option>"
                + "<option value='interseccion'> Intersección </option>"
                + "<option value='concatenacion'> Concatenación </option>"
                + "<option value='potencia'> Potencia </option>"
                + "<option value='cardinalidad'> Cardinalidad </option>";
            break;
        case "operaciones_palabras":
            document.getElementById("options").innerHTML =
                "<option value='inversa'> Inversa </option>"
                + "<option value='cardinalidad'> Cardinalidad </option>";
            break;
        default:
            break;
    }
    mostrar_inputs();

}

function mostrar_inputs() {
    var opcion_seleccionada = document.querySelectorAll('option:checked')[0];

    switch (opcion_seleccionada.value) {
        case "union": case "diferencia": case "interseccion": case "concatenacion": case "potencia":
            console.log("entrada 1");
            document.getElementById("input1").style.display = "inline";
            document.getElementById("input2").style.display = "inline";
            break;
        case "inversa": case "cardinalidad":
            console.log("entrada 2");
            document.getElementById("input1").style.display = "inline";
            document.getElementById("input2").style.display = "none";
            break;
        default:
            break;
    }
    /*
    
    switch (opcion_seleccionada.value) {
        case "union": case "diferencia": case "interseccion": case "concatenacion": case "potencia":
            document.getElementById("Inputs").innerHTML = 
            "<input id='input1' class='row-lg-5 px-2 mx-3' type='text' placeholder='Entrada 1'>"
            +"<input id='input2' class='row-lg-5 px-2' type='text' placeholder='Entrada 2'>";
            break;
        case "inversa": case "cardinalidad":
            document.getElementById("Inputs").innerHTML = 
            "<input  class='row-lg-5 px-2' type='text'placeholder='Entrada 1'>";
            break;
        default:
            break;
    }
    */
}