function calcularPago() {
    let nombre = document.getElementById("nombre").value;
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let resultado = document.getElementById("resultado");

    let iva = 0;

    if (cantidad >= 5000) {
        iva = 0.10;
    } 
    else if (cantidad > 3000 && cantidad < 5000) {
        iva = 0.15;
    } 
    else if (cantidad <= 3000) {
        iva = 0.21;
    }

    let total = cantidad + (cantidad * iva);

    resultado.innerHTML = nombre + " debe pagar un total de " + total.toFixed(2) + " € (IVA aplicado: " + (iva*100) + "%)";
}