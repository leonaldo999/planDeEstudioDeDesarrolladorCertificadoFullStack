// ============================================
// VARIABLES GLOBALES
// ============================================
let oracion = '';
let i = 0;
let currentLength = 0;
let maxLength = 0;
let isRunning = false;
let intervalId = null;
let velocidad = 500;

// ============================================
// ELEMENTOS DEL DOM
// ============================================
const oracionInput = document.getElementById('oracion');
const btnAnalizar = document.getElementById('btn-analizar');
const btnPaso = document.getElementById('btn-paso');
const btnReset = document.getElementById('btn-reset');  // CORREGIDO: btnReset (antes estaba mal escrito)
const velocidadInput = document.getElementById('velocidad');
const velocidadValor = document.getElementById('velocidad-valor');
const charsContainer = document.getElementById('chars-container');
const explanation = document.getElementById('explanation');
const resultDiv = document.getElementById('result');

// ============================================
// EVENT LISTENERS
// ============================================

// Actualizar velocidad
velocidadInput.addEventListener('input', (e) => {
  velocidad = 1100 - (e.target.value * 100); // Invertir para que sea más rápido
  velocidadValor.textContent = e.target.value;

  // Reiniciar el interval si está corriendo
  if (isRunning && intervalId) {
    clearInterval(intervalId);
    intervalId = setInterval(ejecutarPaso, velocidad);
  }
});

// Botón analizar
btnAnalizar.addEventListener('click', iniciarAnalisis);

// CORREGIDO: btnReset (estaba btnReser que estaba mal escrito)
btnReset.addEventListener('click', reiniciar);

// Botón paso a paso
btnPaso.addEventListener('click', () => {
  if (!isRunning) {
    iniciarAnalisis();
  }
  ejecutarPaso();
});

// Permitir ENTER para iniciar
oracionInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    iniciarAnalisis();
  }
});

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

// Función para iniciar el análisis
function iniciarAnalisis() {
  oracion = oracionInput.value;

  if (!oracion.trim()) {
    explanation.innerHTML = '<p style="color: var(--danger);">⚠️ Por favor ingresa una oración</p>';
    return;
  }

  // Reiniciar variables
  i = 0;
  currentLength = 0;
  maxLength = 0;
  isRunning = true;

  // Generar visualización de caracteres
  generarCharsVisuales();

  // Actualizar estado
  actualizarEstado();

  explanation.innerHTML = '<p>🔄 Iniciando análisis...</p>';

  // Iniciar automático
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(ejecutarPaso, velocidad);
}

// Generar visualización de caracteres
function generarCharsVisuales() {
  charsContainer.innerHTML = '';

  for (let j = 0; j < oracion.length; j++) {
    const char = oracion[j];
    const charBox = document.createElement('div');
    charBox.className = 'char-box';
    charBox.id = `char-${j}`;

    if (char === ' ') {
      charBox.classList.add('space');
      charBox.textContent = '␣';
      charBox.title = 'Espacio';
    } else {
      charBox.textContent = char;
    }

    charsContainer.appendChild(charBox);
  }
}

// Ejecutar un paso del algoritmo
function ejecutarPaso() {
  // Verificar si llegamos al final
  if (i >= oracion.length) {
    // Verificar última palabra
    if (currentLength > maxLength) {
      maxLength = currentLength;
      explanation.innerHTML = `<p>🎉 ¡Última palabra! Se actualiza maxLength = ${maxLength}</p>`;
    }

    finalizar();
    return;
  }

  const char = oracion[i];

  // Resaltar carácter actual
  mostrarCharActual();

  if (char !== ' ') {
    // No es espacio - parte de una palabra
    currentLength++;
    explanation.innerHTML = `
      <p>📝 <strong>Letra "${char}"</strong></p>
      <p>No es un espacio, aumento <code>currentLength++</code></p>
      <p>Ahora currentLength = <strong>${currentLength}</strong></p>
    `;
  } else {
    // Es un espacio - fin de palabra
    if (currentLength > maxLength) {
      maxLength = currentLength;
      explanation.innerHTML = `
        <p>🔚 <strong>Espacio encontrado</strong></p>
        <p>Fin de palabra (longitud = ${currentLength})</p>
        <p style="color: var(--secondary);">✓ currentLength > maxLength</p>
        <p>Actualizo <code>maxLength = ${maxLength}</code></p>
      `;
    } else {
      explanation.innerHTML = `
        <p>🔚 <strong>Espacio encontrado</strong></p>
        <p>Fin de palabra (longitud = ${currentLength})</p>
        <p style="color: var(--danger);">✗ currentLength ≤ maxLength</p>
        <p>No actualizo maxLength</p>
      `;
    }
    currentLength = 0;
  }

  actualizarEstado();
  i++;
}

// Mostrar el carácter actual
function mostrarCharActual() {
  // Quitar clase active de todos
  document.querySelectorAll('.char-box').forEach(box => {
    box.classList.remove('active');
  });

  // Marcar los procesados
  for (let j = 0; j < i; j++) {
    const box = document.getElementById(`char-${j}`);
    if (box) box.classList.add('processed');
  }

  // Marcar actual
  const actualBox = document.getElementById(`char-${i}`);
  if (actualBox) {
    actualBox.classList.add('active');
  }
}

// Actualizar el panel de estado
function actualizarEstado() {
  document.querySelector('#var-i .var-value').textContent = i;
  document.querySelector('#var-current .var-value').textContent = currentLength;
  document.querySelector('#var-max .var-value').textContent = maxLength;
}

// Finalizar análisis
function finalizar() {
  clearInterval(intervalId);
  isRunning = false;

  // Marcar todos como procesados
  document.querySelectorAll('.char-box').forEach(box => {
    box.classList.remove('active');
    box.classList.add('processed');
  });

  // Mostrar resultado
  resultDiv.innerHTML = `
    <h2>✅ Resultado</h2>
    <div class="result-content">
      <p>La palabra más larga tiene: <strong>${maxLength}</strong> letras</p>
    </div>
  `;
}

// ============================================
// FUNCIÓN REINICIAR
// ============================================
function reiniciar() {
  // Detener el análisis
  clearInterval(intervalId);
  isRunning = false;

  // Reiniciar variables
  i = 0;
  currentLength = 0;
  maxLength = 0;

  // Limpiar visualización
  charsContainer.innerHTML = '';

  // Reiniciar estado
  actualizarEstado();

  // Mensaje inicial
  explanation.innerHTML = '<p>Ingresa una oración y presiona "Analizar" para comenzar.</p>';

  // Reiniciar resultado
  resultDiv.innerHTML = `
    <h2>Resultado</h2>
    <div class="result-content">
      <p>La palabra más larga tiene: <strong>0</strong> letras</p>
    </div>
  `;
}

// ============================================
// INICIALIZAR AL CARGAR LA PÁGINA
// ============================================
reiniciar();