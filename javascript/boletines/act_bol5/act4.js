function obtenerEstacion() {
    let mes = document.getElementById("mes").value.toLowerCase();
    let resultado = document.getElementById("resultado");

    let estacion = "";

    switch (mes) {
        case "diciembre":
        case "enero":
        case "febrero":
            estacion = "Invierno";
            break;

        case "marzo":
        case "abril":
        case "mayo":
            estacion = "Primavera";
            break;

        case "junio":
        case "julio":
        case "agosto":
            estacion = "Verano";
            break;

        case "septiembre":
        case "octubre":
        case "noviembre":
            estacion = "Otoño";
            break;

        default:
            estacion = "Mes no válido";
    }

    resultado.innerHTML = "La estación es: " + estacion;
    resultado.style.display = "block";
    resultado.style.backgroundColor = "red";
    resultado.style.color = "yellow";
}