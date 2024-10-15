function crearFormularioMaterias() {
    const numMaterias = 6;
    const contenedor = document.getElementById('formularioMaterias');
    contenedor.innerHTML = ''; 

    for (let i = 1; i <= numMaterias; i++) {
        const materiaDiv = document.createElement('div');
        materiaDiv.innerHTML = `
            <h3>Materia ${i}</h3>
            <label for="creditos${i}">Créditos:</label>
            <input type="number" id="creditos${i}" min="1" value=""><br>
            <label for="componente${i}">Nota promedio de la materia:</label>
            <input type="number" id="componente${i}" step="0.1" min="0" max="10"><br><br>
        `;

        contenedor.appendChild(materiaDiv);
    }

    const botonCalcular = document.createElement('button');
    botonCalcular.innerText = 'Calcular Promedio General';
    botonCalcular.onclick = calcularPromedio;
    contenedor.appendChild(botonCalcular);
}

function calcularPromedio() {
    const numMaterias = 6; 
    let sumaPromediosPonderados = 0;
    let sumaCreditos = 0;

    for (let i = 1; i <= numMaterias; i++) {
        const promedioMateria = parseFloat(document.getElementById(`componente${i}`).value) || 0;
        const creditos = parseFloat(document.getElementById(`creditos${i}`).value) || 1;

        sumaPromediosPonderados += promedioMateria * creditos;
        sumaCreditos += creditos;
    }

    const promedioGeneral = sumaPromediosPonderados / sumaCreditos;
    

    document.getElementById('resultadoPromedio').innerText = `El promedio ponderado general es: ${promedioGeneral.toFixed(2)}`;
}
