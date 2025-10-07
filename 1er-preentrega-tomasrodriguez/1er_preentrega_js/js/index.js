//1er_entrega

// Un sistema para sacar promedio de nota de un alumno segun la cantidad de materias

function calcularPromedio() {
    
    let cantidadMaterias = parseInt(prompt("Ingresa la cantidad de materias:"));
    
    if (isNaN(cantidadMaterias) || cantidadMaterias <= 0) {
        alert("Por favor ingresa un número válido de materias.");
        return;
    }
    let sumaNotas = 0;
    for (let i = 0; i < cantidadMaterias; i++) {
        let nota;
        do {
            nota = parseFloat(prompt(`Ingresa la nota de la materia ${i + 1}:`));
            if (isNaN(nota) || nota < 0 || nota > 10) {
                alert("Por favor ingresa una nota válida entre 0 y 10.");
            }
        } while (isNaN(nota) || nota < 0 || nota > 10);
        sumaNotas += nota;
    }
    let promedio = sumaNotas / cantidadMaterias;
    alert(`El promedio de las ${cantidadMaterias} materias es: ${promedio.toFixed(2)}`);
}
calcularPromedio();