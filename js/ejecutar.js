function ejecutar(operacion) {
    var texto1 = document.getElementById("input1").value.split(",");
    var texto2 = document.getElementById("input2").value.split(",");

    switch (operacion) {
        case "union":
            mostrar_mensaje(union(texto1, texto2));
            break;
        case "diferencia":
            mostrar_mensaje(diferencia(texto1, texto2));
            break;
        case "interseccion":
            mostrar_mensaje(interseccion(texto1, texto2));
            break;
        case "concatenacion":
            mostrar_mensaje(concatenacion(texto1, texto2));
            break;
        case "potencia":
            mostrar_mensaje(potencia(texto1, texto2));
            break;
        case "inversa":
            mostrar_mensaje(inversa(texto1));
            break;
        case "cardinalidad":
            mostrar_mensaje(cardinalidad(texto1));
            break;
        default:
            break;
    }
}

function mostrar_mensaje(resultado) {
    Swal.fire({
        icon: 'success',
        text: resultado,
    })
}