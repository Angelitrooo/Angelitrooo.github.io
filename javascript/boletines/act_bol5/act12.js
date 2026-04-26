const recetas = [
    { id: 1, nombrereceta: "Salmorejo", ingredientes: "tomate,aceite,pan" },
    { id: 2, nombrereceta: "Gachas", ingredientes: "harina,agua,azucar" },
    { id: 3, nombrereceta: "Migas", ingredientes: "pan,ajos,aceite" }
];

function mostrarRecetas() {
    let contenedor = document.getElementById("contenedor");

    let tabla = "<table border='1'>";
    tabla += "<tr><th>ID</th><th>Receta</th><th>Ingredientes</th></tr>";

    for (let i = 0; i < recetas.length; i++) {
        tabla += "<tr>";
        tabla += "<td>" + recetas[i].id + "</td>";
        tabla += "<td>" + recetas[i].nombrereceta + "</td>";
        tabla += "<td>" + recetas[i].ingredientes + "</td>";
        tabla += "</tr>";
    }

    tabla += "</table>";

    contenedor.innerHTML = tabla;
}