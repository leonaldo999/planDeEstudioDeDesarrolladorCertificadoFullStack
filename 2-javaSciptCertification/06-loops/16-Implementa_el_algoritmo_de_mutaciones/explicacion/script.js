// Tu función original entregada en el laboratorio
function mutation(arr) {
  // Convertir ambas cadenas a minúsculas para ignorar mayúsculas y minúsculas
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();

  // Recorrer cada letra de la segunda cadena
  for (let i = 0; i < str2.length; i++) {
    // Verificar si la letra actual de str2 está presente en str1
    if (str1.indexOf(str2[i]) === -1) {
      // Si no se encuentra la letra, devolver false
      return false;
    }
  }

  // Si todas las letras de str2 están presentes en str1, devolver true
  return true;
}

// Función para manejar la Interfaz de Usuario
function iniciarAnalisis() {
  const input1 = document.getElementById('str1').value;
  const input2 = document.getElementById('str2').value;

  // Validación
  if (!input1 || !input2) {
    alert("Por favor ingresa ambas cadenas");
    return;
  }

  const arr = [input1, input2];
  const logContainer = document.getElementById('stepsList');
  logContainer.innerHTML = '';

  // Simulación del ciclo para crear el Log educativo
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();
  let pasosHTML = '';
  let resultadoFinal = true;

  for (let i = 0; i < str2.length; i++) {
    const charBuscado = str2[i];
    const indice = str1.indexOf(charBuscado);
    let pasoClase = indice !== -1 ? 'success' : 'fail';
    let pasoMsg = '';

    if (indice !== -1) {
      pasoMsg = `Se encontró la letra "<strong>${charBuscado}</strong>" en la posición ${indice} de la primera cadena.`;
    } else {
      pasoMsg = `La letra "<strong>${charBuscado}</strong>" NO se encontró en "${str1}".`;
      resultadoFinal = false;
    }

    pasosHTML += `<div class="step-card ${pasoClase}">${pasoMsg}</div>`;

    if (!resultadoFinal) break;
  }

  // Resultado final del log
  if (resultadoFinal) {
    pasosHTML += `<div class="step-card success" style="font-weight:bold; border-left: 4px solid #007bff;">
            Todas las letras encontradas. Función retorna <strong>TRUE</strong>.
        </div>`;
  } else {
    pasosHTML += `<div class="step-card fail" style="font-weight:bold; border-left: 4px solid #007bff;">
            Falta una letra. Función retorna <strong>FALSE</strong>.
        </div>`;
  }

  logContainer.innerHTML = pasosHTML;

  // Ejecutar función real y mostrar resultado
  const resultado = mutation(arr);
  const resultDisplay = document.getElementById('resultDisplay');
  const resultValue = document.getElementById('resultValue');

  resultDisplay.style.display = 'block';
  resultValue.innerText = resultado ? 'TRUE' : 'FALSE';

  if (resultado) {
    resultDisplay.className = 'result-box true';
  } else {
    resultDisplay.className = 'result-box false';
  }
}

// Event Listener para el botón
document.getElementById('btnEjecutar').addEventListener('click', iniciarAnalisis);