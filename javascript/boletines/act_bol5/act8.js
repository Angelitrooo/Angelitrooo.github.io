function convertir() {
  let valor = parseFloat(document.getElementById("valor").value);
  let tipo = document.getElementById("conversion").value;
  let resultado = 0;

  if (isNaN(valor)) {
    document.getElementById("resultado").innerHTML = "Introduce un número válido";
    return;
  }

  if (tipo === "kmToMiles") {
    resultado = valor / 1.60934;
    document.getElementById("resultado").innerHTML =
      valor + " km = " + resultado.toFixed(2) + " millas";
  } else {
    resultado = valor * 1.60934;
    document.getElementById("resultado").innerHTML =
      valor + " millas = " + resultado.toFixed(2) + " km";
  }
}