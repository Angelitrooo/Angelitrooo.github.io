function obtenerEstacion() {
    let mes = document.getElementById("mes").value.toLowerCase();
    let resultado = document.getElementById("resultado");

    let estacion = "";

    if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
        estacion = "Invierno";
    } 
    else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
        estacion = "Primavera";
    } 
    else if (mes === "junio" || mes === "julio" || mes === "agosto") {
        estacion = "Verano";
    } 
    else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
        estacion = "Otoño";
    } 
    else {
        estacion = "Mes no válido";
    }

    resultado.innerHTML = "La estación es: " + estacion;
    resultado.style.display = "block";
    resultado.style.backgroundColor = "red";
    resultado.style.color = "yellow";
}