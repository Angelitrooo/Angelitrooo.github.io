const agenda = new Map();

function agregarUsuario(event) {
    event.preventDefault();
    
    const dni = document.getElementById('dni').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    
    if (dni && nombre) {
        agenda.set(dni, nombre);
        document.getElementById('agenda-form').reset();
        visualizarUsuarios();
    }
}

function visualizarUsuarios() {
    const lista = document.getElementById('lista-usuarios');
    lista.innerHTML = '';
    
    if (agenda.size === 0) {
        const itemVacio = document.createElement('li');
        itemVacio.textContent = 'La agenda está vacía.';
        itemVacio.style.borderLeftColor = '#e74c3c';
        lista.appendChild(itemVacio);
        return;
    }
    
    agenda.forEach((nombre, dni) => {
        const item = document.createElement('li');
        item.textContent = `DNI: ${dni} - Nombre: ${nombre}`;
        lista.appendChild(item);
    });
}