// Datos del laboratorio
let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// Tu función original
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

// Inicializar visualización de contactos
function initContactsVisual() {
  const container = document.getElementById('contactsVisual');
  container.innerHTML = contacts.map((contact, index) => {
    const fields = Object.keys(contact).map(key => {
      const value = Array.isArray(contact[key])
        ? `[${contact[key].join(", ")}]`
        : contact[key];
      return `<div class="contact-field"><strong>${key}:</strong> <span>${value}</span></div>`;
    }).join('');

    return `<div class="contact-card" data-index="${index}">${fields}</div>`;
  }).join('');
}

// Función principal
function iniciarAnalisis() {
  const nameInput = document.getElementById('nameInput').value;
  const propInput = document.getElementById('propInput').value;
  const logContainer = document.getElementById('stepsList');
  logContainer.innerHTML = '';

  let pasosHTML = '';
  let contactoEncontrado = false;
  let propiedadExiste = false;
  let resultado = '';

  // Simular búsqueda paso a paso
  for (let i = 0; i < contacts.length; i++) {
    const contacto = contacts[i];
    const nombreCoincide = contacto.firstName === nameInput;

    // Resaltar contacto actual
    pasosHTML += `
      <div class="step-card processing">
        <span class="iteration-badge">Iteración ${i + 1}</span>
        <div>Comparando con: <strong>${contacto.firstName} ${contacto.lastName}</strong></div>
        <div class="prop-list">¿${contacto.firstName} === ${nameInput}? <strong>${nombreCoincide ? 'SÍ' : 'NO'}</strong></div>
      </div>
    `;

    if (nombreCoincide) {
      contactoEncontrado = true;

      // Verificar propiedad
      const tieneProp = contacto.hasOwnProperty(propInput);

      if (tieneProp) {
        propiedadExiste = true;
        resultado = contacto[propInput];

        pasosHTML += `
          <div class="step-card found">
            <span class="iteration-badge" style="background-color: #28a745;">✓ Encontrado</span>
            <div>¡Nombre coincidente!</div>
            <div class="prop-list">¿${propInput} existe en el objeto? <strong>SÍ</strong></div>
            <div style="margin-top: 10px;">
              <strong>Resultado:</strong> <code>contacts[${i}].${propInput}</code> = 
              <span class="result-highlight">${Array.isArray(resultado) ? JSON.stringify(resultado) : resultado}</span>
            </div>
          </div>
        `;
      } else {
        resultado = "No such property";

        pasosHTML += `
          <div class="step-card not-found">
            <span class="iteration-badge" style="background-color: #dc3545;">✗ Error</span>
            <div>El contacto existe pero la propiedad <strong>"${propInput}"</strong> no</div>
            <div class="prop-list">Propiedades disponibles: ${Object.keys(contacto).join(", ")}</div>
            <div style="margin-top: 10px;"><strong>Resultado:</strong> "${resultado}"</div>
          </div>
        `;
      }
      break;
    }
  }

  if (!contactoEncontrado) {
    resultado = "No such contact";

    pasosHTML += `
      <div class="step-card not-found">
        <span class="iteration-badge" style="background-color: #dc3545;">✗ No encontrado</span>
        <div>Ningún contacto coincide con el nombre: <strong>"${nameInput}"</strong></div>
        <div style="margin-top: 10px;"><strong>Resultado:</strong> "${resultado}"</div>
      </div>
    `;
  }

  logContainer.innerHTML = pasosHTML;

  // Mostrar resultado final
  const resultDisplay = document.getElementById('resultDisplay');
  const resultValue = document.getElementById('resultValue');

  if (contactoEncontrado && propiedadExiste) {
    resultDisplay.className = 'result-box show success';
    resultValue.innerHTML = typeof resultado === 'string' ? resultado : JSON.stringify(resultado);
  } else {
    resultDisplay.className = 'result-box show error';
    resultValue.innerText = resultado;
  }
}

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', initContactsVisual);
document.getElementById('btnEjecutar').addEventListener('click', iniciarAnalisis);