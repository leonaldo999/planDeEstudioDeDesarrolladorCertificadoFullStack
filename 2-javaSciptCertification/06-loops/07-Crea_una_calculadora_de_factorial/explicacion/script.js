// ============================================
// VARIABLES GLOBALES
// ============================================
let numero = 0;
let i = 1;
let result = 1;
let isRunning = false;
let intervalId = null;
let velocidad = 500;

// ============================================
// ELEMENTOS DEL DOM
// ============================================
const numeroInput = document.getElementById('numero');
const btnCalcular = document.getElementById('btn-calcular');
const btnPaso = document.getElementById('btn-paso');
const btnReset = document.getElementById('btn-reset');
const velocidadInput = document.getElementById('velocidad');
const velocidadValor = document.getElementById('velocidad-valor');
const stepsContainer = document.getElementById('steps-container');
const historyList = document.getElementById('history-list');
const explanation = document.getElementById('explanation');
const formulaDiv = document.getElementById('formula');
const resultDiv = document.getElementById('result');

// ============================================
// EVENT LISTENERS
// ============================================

// Actualizar velocidad
velocidadInput.addEventListener('input', (e) => {
  velocidad = 1100 - (e.target.value * 100);
  velocidadValor.textContent = e.target.value;

  if (isRunning && intervalId) {
    clearInterval(intervalId);
    intervalId = setInterval(ejecutarPaso, velocidad);
  }
});

// Botón calcular
btnCalcular.addEventListener('click', iniciarCalculo);

// Botón reiniciar
btnReset.addEventListener('click', reiniciar);

// Botón paso a paso
btnPaso.addEventListener('click', () => {
  if (!isRunning) {
    iniciarCalculo();
  }
  ejecutarPaso();
});

// Permitir ENTER
numeroInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    iniciarCalculo();
  }
});

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

// Iniciar el cálculo
function iniciarCalculo() {
  numero = parseInt(numeroInput.value);

  // Validar entrada
  if (isNaN(numero) || numero < 1 || numero > 20) {
    explanation.innerHTML = '<p style="color: var(--primary);">⚠️ Por favor ingresa un número entre 1 y 20</p>';
    return;
  }

  // Reiniciar variables
  i = 1;
  result = 1;
  isRunning = true;

  // Generar visualización de pasos
  generarPasosVisuales();

  // Actualizar estado
  actualizarEstado();

  explanation.innerHTML = '<p>🧮 Iniciando cálculo factorial...</p>';
  formulaDiv.innerHTML = '<p>Fórmula: <code>result = result × i</code></p>';

  // Iniciar automático
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(ejecutarPaso, velocidad);
}

// Generar visualización de pasos
function generarPasosVisuales() {
  stepsContainer.innerHTML = '';
  historyList.innerHTML = '';

  for (let j = 1; j <= numero; j++) {
    const stepBox = document.createElement('div');
    stepBox.className = 'step-box';
    stepBox.id = `step-${j}`;

    stepBox.innerHTML = `
      <span class="step-number">i = ${j}</span>
      <span class="step-value">× ${j}</span>
    `;

    stepsContainer.appendChild(stepBox);
  }
}

// Ejecutar un paso
function ejecutarPaso() {
  // Verificar si llegamos al final
  if (i > numero) {
    finalizar();
    return;
  }

  // Calcular nuevo resultado
  const resultadoAnterior = result;
  result = result * i;

  // Mostrar paso actual
  mostrarPasoActual();

  // Agregar al historial
  agregarAlHistorial(i, resultadoAnterior, result);

  // Actualizar explicación
  explanation.innerHTML = `
    <p>📝 <strong>Paso ${i}</strong></p>
    <p>Cálculo: <code>${resultadoAnterior} × ${i} = ${result}</code></p>
    <p>Se multiplica el resultado anterior por ${i}</p>
  `;

  // Actualizar estado
  actualizarEstado();

  // Avanzar al siguiente paso
  i++;
}

// Mostrar el paso actual
function mostrarPasoActual() {
  // Quitar clase active de todos
  document.querySelectorAll('.step-box').forEach(box => {
    box.classList.remove('active');
  });

  // Marcar los procesados
  for (let j = 1; j < i; j++) {
    const box = document.getElementById(`step-${j}`);
    if (box) box.classList.add('processed');
  }

  // Marcar actual
  const actualBox = document.getElementById(`step-${i}`);
  if (actualBox) {
    actualBox.classList.add('active');
  }
}

// Agregar al historial
function agregarAlHistorial(paso, anterior, actual) {
  const item = document.createElement('div');
  item.className = 'history-item';
  item.innerHTML = `
    <span>${anterior}</span>
    <span class="multiply">×</span>
    <span>${paso}</span>
    <span class="equals">=</span>
    <span class="result-value">${actual}</span>
  `;
  historyList.appendChild(item);
}

// Actualizar estado
function actualizarEstado() {
  document.querySelector('#var-i .var-value').textContent = i;
  document.querySelector('#var-result .var-value').textContent = result;
  document.querySelector('#var-num .var-value').textContent = numero;
}

// Finalizar
function finalizar() {
  clearInterval(intervalId);
  isRunning = false;

  // Marcar todos como procesados
  document.querySelectorAll('.step-box').forEach(box => {
    box.classList.remove('active');
    box.classList.add('processed');
  });

  // Mostrar resultado
  resultDiv.innerHTML = `
    <h2>✅ Resultado</h2>
    <div class="result-content">
      <p>El factorial de ${numero} es: <strong>${result}</strong></p>
    </div>
  `;

  explanation.innerHTML = `
    <p>🎉 <strong>¡Cálculo completado!</strong></p>
    <p>${numero}! = ${result}</p>
  `;
}

// Reiniciar
function reiniciar() {
  clearInterval(intervalId);
  isRunning = false;

  i = 1;
  result = 1;
  numero = 0;

  stepsContainer.innerHTML = '';
  historyList.innerHTML = '';

  actualizarEstado();

  explanation.innerHTML = '<p>Ingresa un número y presiona "Calcular" para comenzar.</p>';
  formulaDiv.innerHTML = '<p>Fórmula: <code>result = result × i</code></p>';

  resultDiv.innerHTML = `
    <h2>Resultado</h2>
    <div class="result-content">
      <p>El factorial es: <strong>0</strong></p>
    </div>
  `;

  numeroInput.value = '';
  numeroInput.focus();
}

// Inicializar
reiniciar();