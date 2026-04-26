function mostrarEstacion() {
    let num = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];

    if (num < 1 || num > 4 || isNaN(num)) {
        resultado.innerHTML = "Introduce un número válido entre 1 y 4.";
        return;
    }

    let estacion = estaciones[num - 1];

    resultado.innerHTML = "<b>" + "La estación es: " + estacion + "</b>";


}