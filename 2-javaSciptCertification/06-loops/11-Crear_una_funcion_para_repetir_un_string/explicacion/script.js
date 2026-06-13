// Tu función original del laboratorio
function repeatStringNumTimes(str, num) {
  let result = "";

  if (num <= 0) {
    return "";
  }

  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

// Función principal
function iniciarAnalisis() {
  const strInput = document.getElementById('strInput').value;
  const numInput = parseInt(document.getElementById('numInput').value);
  const logContainer = document.getElementById('stepsList');
  logContainer.innerHTML = '';

  // Validaciones
  if (strInput.trim() === '' || isNaN(numInput)) {
    alert("Por favor ingresa un string y un número válido");
    return;
  }

  let pasosHTML = '';

  // Paso 1: Verificar condición
  if (numInput <= 0) {
    pasosHTML += `
      <div class="step-card condition">
        <span class="iteration-badge">Condición</span>
        <div>Evaluando: <code>num (${numInput}) <= 0</code></div>
        <div style="margin-top: 8px;">
          <strong>Resultado:</strong> La condición es <strong>TRUE</strong>
        </div>
        <div style="margin-top: 8px; color: #721c24;">
          Retornamos cadena vacía: <code>""</code>
        </div>
      </div>
    `;

    logContainer.innerHTML = pasosHTML;

    // Mostrar resultado
    const resultDisplay = document.getElementById('resultDisplay');
    const resultValue = document.getElementById('resultValue');
    resultDisplay.className = 'result-box show empty';
    resultValue.innerHTML = '<code>""</code> (string vacía)';
    return;
  }

  // Paso 2: Iniciar loop
  pasosHTML += `
    <div class="step-card condition">
      <span class="iteration-badge">Condición</span>
      <div>Evaluando: <code>num (${numInput}) <= 0</code></div>
      <div style="margin-top: 8px;">
        <strong>Resultado:</strong> La condición es <strong>FALSE</strong>
      </div>
      <div style="margin-top: 8px;">
        Procedemos al ciclo for. Se repetirá <strong>${numInput}</strong> veces.
      </div>
    </div>
  `;

  // Paso 3: Simular iteraciones
  let acumulado = '';

  for (let i = 0; i < numInput; i++) {
    acumulado += strInput;

    // Mostrar cada string parte
    const partes = strInput.repeat(i + 1);
    let stringVisual = '';
    for (let j = 0; j <= i; j++) {
      stringVisual += `<span class="string-part">${strInput}</span>`;
    }

    pasosHTML += `
      <div class="step-card loop">
        <span class="iteration-badge">Iteración ${i + 1}</span>
        <div>Ejecutando: <code>result += "${strInput}"</code></div>
        <div class="string-builder">
          <strong>Construcción:</strong> ${stringVisual}
        </div>
        <div style="margin-top: 8px;">
          Acumulado: <span class="accumulator">"${acumulado}"</span>
        </div>
      </div>
    `;
  }

  // Resultado final
  pasosHTML += `
    <div class="step-card concat">
      <span class="iteration-badge" style="background-color: #27ae60;">✓ Completo</span>
      <div>Todas las iteraciones completadas. Retornamos el resultado:</div>
      <div class="final-result">
        Resultado: <span>"${acumulado}"</span>
      </div>
    </div>
  `;

  logContainer.innerHTML = pasosHTML;

  // Ejecutar función real
  const resultado = repeatStringNumTimes(strInput, numInput);

  // Mostrar resultado
  const resultDisplay = document.getElementById('resultDisplay');
  const resultValue = document.getElementById('resultValue');
  resultDisplay.className = 'result-box show success';
  resultValue.innerHTML = `<code>"${resultado}"</code>`;
}

// Event Listener
document.getElementById('btnEjecutar').addEventListener('click', iniciarAnalisis);