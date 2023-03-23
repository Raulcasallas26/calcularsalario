const formulario = document.querySelector('#formulario');
const categoria = document.querySelector('#categoria');
const horas = document.querySelector('#horas');
const resultado = document.querySelector('#resultado');
function calcularSalario(categoria, horasTrabajadas) {
    let tarifa = 0;
    let salario = 0;
    switch (categoria) {
        case 1:
            tarifa = 12000;
            break;
        case 2:
            tarifa = 17000;
            break;
        case 3:
            tarifa = 22000;
            break;
        default:
            console.log("La categoría de empleado no es válida.");
            break;
    }

    if (horasTrabajadas > 40) {
        salario = 40 * tarifa + (horasTrabajadas - 40) * tarifa * 0.25;
    } else {
        salario = horasTrabajadas * tarifa;
    }

    return salario;
}



formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const categoriaSeleccionada = parseInt(categoria.value);
    const horasTrabajadas = parseInt(horas.value);

    const salario = calcularSalario(categoriaSeleccionada, horasTrabajadas);

    resultado.textContent = `$${salario}`;
});