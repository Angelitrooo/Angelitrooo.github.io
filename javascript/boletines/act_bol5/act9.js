function contarCaracteres(event) {
  event.preventDefault(); // evita que el formulario recargue la página

  let texto = document.getElementById("texto").value;
  let cantidad = texto.length;

  document.getElementById("resultado").innerHTML =
    "La cadena tiene " + cantidad + " caracteres.";
}