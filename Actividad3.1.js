// Función principal: recibe un array y un callback
function procesar(array, callback) {
    let nuevoArray = array.map(callback); // Aplica el callback a cada elemento
    return nuevoArray; // Retorna el nuevo array
}

// Ejemplo de uso:
const resultado = procesar([1, 2, 3], x => x * 2);
console.log(resultado); // Salida: [2, 4, 6]
