const inputRango = document.getElementById('inputRango');
const Visitas = document.getElementById('visitas');
const Precio = document.getElementById('precio');
const ArrayVisitas = ['10K', '50K', '100K', '500K', '1M'];

inputRango.addEventListener('input', () => {
    console.log("este es mi rango")
    console.log(inputRango.value)
    Precio.textContent = inputRango.value;
    Visitas.textContent = ArrayVisitas[(inputRango.value / 8 - 1)]
})