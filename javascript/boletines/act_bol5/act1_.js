function mostrarDatos() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = parseInt(document.getElementById("edad").value);

    let añoActual = new Date().getFullYear();
    let añoNacimiento = añoActual - edad;

    let mensaje = "";

    if (edad >= 18) {
        mensaje = nombre + " tiene " + edad + " años, nació en " + añoNacimiento + " y es mayor de edad.";
    } else {
        mensaje = nombre + " tiene " + edad + " años, nació en " + añoNacimiento + " y es menor de edad.";
    }

    document.getElementById("resultado").innerHTML = mensaje;
}