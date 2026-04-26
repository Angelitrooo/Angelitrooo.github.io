function sumarN() {
    let n = parseInt(document.getElementById("numeroN").value);

    if (isNaN(n) || n < 0) {
        alert("Introduce un número válido mayor o igual a 0");
        return;
    }

    let suma = 0;

    for (let i = 0; i <= n; i++) {
        suma += i;
    }

    alert("La suma de 0 hasta " + n + " es: " + suma);
}