// Tu función original del laboratorio
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

// Función para manejar la Interfaz
function iniciarAnalisis() {
  const arrInput = document.getElementById('arrInput').value;
  const sizeInput = parseInt(document.getElementById('sizeInput').value);

  // Validaciones
  if (!arrInput.trim() || isNaN(sizeInput) || sizeInput < 1) {
    alert("Por favor ingresa un array válido y un tamaño mayor a 0");
    return;
  }

  // Convertir string a array
  const arr = arrInput.split(',').map(item => item.trim());
  const logContainer = document.getElementById('stepsList');
  logContainer.innerHTML = '';

  // Simulación del ciclo para crear el Log educativo
  let pasosHTML = '';
  let grupoActual = 0;

  for (let i = 0; i < arr.length; i += sizeInput) {
    grupoActual++;

    // Obtener el slice actual
    const slice = arr.slice(i, i + sizeInput);
    const indices = `i = ${i} hasta i + size(${sizeInput}) = ${i + sizeInput}`;

    // Crear visualización del array original con highlight
    let arrayVisual = '';
    arr.forEach((item, idx) => {
      const isInGroup = idx >= i && idx < i + sizeInput;
      const clase = isInGroup ? 'array-item first' : 'array-item';
      arrayVisual += `<span class="${clase}">${item}</span>`;
    });

    // Crear contenido del grupo
    let groupContent = slice.map(item => `<span class="array-item">${item}</span>`).join('');

    pasosHTML += `
            <div class="step-card">
                <span class="iteration">Iteración ${grupoActual}</span>
                <div>${indices}</div>
                <div class="array-visual">
                    <strong>Array original:</strong> ${arrayVisual}
                </div>
                <div class="group-container">
                    <div class="group">
                        <div class="group-label">Grupo ${grupoActual}</div>
                        ${groupContent}
                    </div>
                </div>
                <div style="margin-top: 8px;">
                    <code>arr.slice(${i}, ${i + sizeInput})</code> = ${JSON.stringify(slice)}
                </div>
            </div>
        `;
  }

  logContainer.innerHTML = pasosHTML;

  // Ejecutar función real
  const resultado = chunkArrayInGroups(arr, sizeInput);

  // Mostrar resultado
  const resultDisplay = document.getElementById('resultDisplay');
  const resultValue = document.getElementById('resultValue');

  resultValue.innerHTML = `<pre>${JSON.stringify(resultado, null, 2)}</pre>`;
  resultDisplay.className = 'result-box show';
}

// Event Listener
document.getElementById('btnEjecutar').addEventListener('click', iniciarAnalisis);