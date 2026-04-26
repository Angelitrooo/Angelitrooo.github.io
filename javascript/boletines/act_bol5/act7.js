function mostrarDatos() {
    let nombre = document.getElementById("nombre").value;
    let provincia = document.getElementById("provincia").value;
    let pueblo = document.getElementById("pueblo").value;

    let resultado = document.getElementById("resultado");

    if (nombre === "" || provincia === "" || pueblo === "") {
        resultado.innerHTML = "Completa todos los campos.";
        return;
    }

    // Gentilicio básico
    let gentilicio = "";

    if (provincia === "Almería") gentilicio = "almeriense";
    else if (provincia === "Cádiz") gentilicio = "gaditano";
    else if (provincia === "Córdoba") gentilicio = "cordobés";
    else if (provincia === "Granada") gentilicio = "granadino";
    else if (provincia === "Huelva") gentilicio = "onubense";
    else if (provincia === "Jaén") gentilicio = "jienense";
    else if (provincia === "Málaga") gentilicio = "malagueño";
    else if (provincia === "Sevilla") gentilicio = "sevillano";

    resultado.innerHTML = nombre + ", eres " + gentilicio + " de " + pueblo;
}