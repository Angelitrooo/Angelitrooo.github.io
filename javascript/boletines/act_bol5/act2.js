function comprobarNumero() {
    let num = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (num < 1 || num > 30 || isNaN(num)) {
        resultado.style.display = "block";
        resultado.innerHTML = "Introduce un número válido entre 1 y 30.";
        return;
    }

    if (num % 2 === 0) {
        resultado.innerHTML = "El número " + num + " es divisible por 2.";
    } else {
        resultado.innerHTML = "El número " + num + " NO es divisible por 2.";
    }

    resultado.style.display = "block";
    resultado.style.backgroundColor = "black";
    resultado.style.color = "white";
}