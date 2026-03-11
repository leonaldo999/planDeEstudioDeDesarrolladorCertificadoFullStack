// 1. Lógica de Pestañas (Tabs)
function switchTab(evt, tabName) {
  // Ocultar todos los contenidos de código
  const container = evt.currentTarget.closest('.ide-container');
  const contents = container.getElementsByClassName("code-content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
    contents[i].classList.remove("active");
  }

  // Quitar clase active de todos los botones tab
  const tabs = container.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }

  // Mostrar el tab actual y añadir clase active
  const activeContent = container.querySelector('.code-content[data-lang="' + tabName + '"]');
  if (activeContent) {
    activeContent.style.display = "flex";
    activeContent.classList.add("active");
  }
  evt.currentTarget.className += " active";

  // Ejecutar inicialización para el nuevo tab (Números de línea, etc.)
  initializeEditor(container);
}

// 2. Lógica Copiar Código - Corregida para coincidir con el HTML
function copiarCodigoIDE(btn) {
  // Buscamos el contenedor del editor más cercano para evitar conflictos entre varios IDEs
  const editorContainer = btn.closest('.ide-editor');

  // Seleccionamos específicamente el bloque de código que tiene la clase 'active'
  const activeCodeBlock = editorContainer.querySelector('.code-content.active code');

  if (!activeCodeBlock) {
    console.error("No se encontró un bloque de código activo.");
    return;
  }

  // Usamos innerText para obtener el código sin etiquetas HTML ni números de línea
  const text = activeCodeBlock.innerText;

  // API de portapapeles
  navigator.clipboard.writeText(text).then(() => {
    // Feedback visual en el botón
    const btnSpan = btn.querySelector('.btn-text');
    if (!btnSpan) return;

    const originalText = btnSpan.innerText;

    // Cambios de estado visual
    btnSpan.innerText = "¡Copiado!";
    btn.style.borderColor = "#10b981";
    btn.style.color = "#10b981";

    // Revertir el botón después de 2 segundos
    setTimeout(() => {
      btnSpan.innerText = originalText;
      btn.style.borderColor = "";
      btn.style.color = "";
    }, 2000);
  }).catch(err => {
    console.error('Error al copiar el código: ', err);
  });
}

/** * Genera el HTML de los números de línea basado en el número de saltos de línea. 
 */
function generateLineNumbers(codeBlock, lineNumberContainer) {
  // VALIDACIÓN: Si el contenedor no existe, salir
  if (!lineNumberContainer) {
    console.warn('No se encontró el contenedor de números de línea');
    return;
  }

  // Asegurarse de que solo procesamos bloques que tienen contenido
  if (!codeBlock.textContent.trim()) return;

  // Contamos los saltos de línea, +1 para la última línea
  const lines = codeBlock.textContent.split('\n');
  let lineCount = lines.length;

  // Si el último carácter es un salto de línea, no contamos una línea extra
  if (codeBlock.textContent.endsWith('\n') && lineCount > 1) {
    lineCount--;
  }

  let html = '';
  for (let i = 1; i <= lineCount; i++) {
    html += `<span>${i}</span>`;
  }
  lineNumberContainer.innerHTML = html;
}

/**
 * Limpia la indentación común de un bloque de código para evitar espacios excesivos.
 */
function trimCodeIndentation(codeBlock) {
  let html = codeBlock.innerHTML;

  // 1. Quitar el salto de línea inicial si existe (por la indentación de tu HTML)
  if (html.startsWith('\n')) {
    html = html.substring(1);
  }

  // 2. Calcular la indentación mínima
  const lines = html.split('\n');
  let minIndent = Infinity;

  lines.forEach(line => {
    if (line.trim().length > 0) {
      const leadingSpaces = line.search(/\S|$/);
      if (leadingSpaces < minIndent) minIndent = leadingSpaces;
    }
  });

  // 3. Aplicar el recorte de indentación
  if (minIndent !== Infinity && minIndent > 0) {
    html = lines.map(line => {
      return line.startsWith(' '.repeat(minIndent)) ? line.substring(minIndent) : line;
    }).join('\n');
  }

  codeBlock.innerHTML = html;
}

/**
 * Inicializa el editor (trim y números de línea) para el tab activo.
 */
function initializeEditor(container) {
  const activeBlock = container.querySelector('.code-content.active');

  // VALIDACIÓN: Si no hay bloque activo, salir
  if (!activeBlock) {
    console.warn('No se encontró un bloque de código activo');
    return;
  }

  const code = activeBlock.querySelector('code');
  const lineNumbers = activeBlock.querySelector('.line-numbers');

  // VALIDACIÓN: Si no hay elemento code, salir
  if (!code) {
    console.warn('No se encontró el elemento <code>');
    return;
  }

  // 1. Limpieza de Espacios
  trimCodeIndentation(code);

  // 2. Generación de Números de Línea (solo si existe el contenedor)
  if (lineNumbers) {
    generateLineNumbers(code, lineNumbers);
  }
}

// Inicialización: Ejecutar al cargar la página para el tab por defecto.
document.addEventListener("DOMContentLoaded", () => {
  // Buscar todos los contenedores IDE
  const ideContainers = document.querySelectorAll('.ide-container');

  ideContainers.forEach(container => {
    // Inicializar el editor activo (generalmente el HTML)
    initializeEditor(container);
  });

  // Asegurar que todos los botones tengan type="button" para evitar envíos de formulario accidentales
  document.querySelectorAll('button').forEach(btn => {
    if (!btn.hasAttribute('type')) btn.setAttribute('type', 'button');
  });
});

// Hamburguesa
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

if (hamburger && navUl) {
  hamburger.addEventListener('click', function () {
    navUl.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
    hamburger.setAttribute('aria-expanded', expanded);

    // Animación del icono hamburguesa
    hamburger.style.transform = expanded === 'true' ? 'rotate(180deg)' : 'rotate(0deg)';
  });
}

// Cerrar menú hamburguesa al hacer clic en un enlace
function closeNavMobile() {
  if (navUl && hamburger) {
    navUl.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.style.transform = 'rotate(0deg)';
  }
}

// Smooth scroll
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       target.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   });
// });

// Efecto parallax sutil
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const header = document.querySelector('.header');
  if (header) {
    header.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
});

// Mostrar/ocultar botón to-top
const toTopBtn = document.querySelector('.to-top');
if (toTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      toTopBtn.style.opacity = '1';
      toTopBtn.style.transform = 'scale(1)';
    } else {
      toTopBtn.style.opacity = '0';
      toTopBtn.style.transform = 'scale(0.8)';
    }
  });
}