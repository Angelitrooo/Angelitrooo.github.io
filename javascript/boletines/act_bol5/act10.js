function compararPalabras() {
    let p1 = document.getElementById("palabra1").value;
    let p2 = document.getElementById("palabra2").value;

    if (p1.length > p2.length) {
        alert("La palabra 1 es más larga: " + p1);
    } else if (p2.length > p1.length) {
        alert("La palabra 2 es más larga: " + p2);
    } else {
        alert("Las dos palabras tienen la misma longitud");
    }
}