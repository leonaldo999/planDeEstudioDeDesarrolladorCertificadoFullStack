/**
 * 1. MANEJO DEL MENÚ HAMBURGUESA
 */
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav ul');
const navLinks = document.querySelectorAll('.nav ul li a');

const toggleMenu = () => {
  if (!hamburger || !navUl) return;
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

  navUl.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', !isExpanded);

  hamburger.style.transition = 'transform 0.3s ease';
  hamburger.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(90deg)';
};

if (hamburger) {
  hamburger.addEventListener('click', toggleMenu);
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navUl && navUl.classList.contains('active')) {
      toggleMenu();
    }
  });
});

/**
 * 2. LÓGICA DEL IDE INTERACTIVO (NUEVA INTEGRACIÓN)
 */

// Cambiar entre pestañas HTML y CSS
function switchTab(evt, tabName) {
  const container = evt.currentTarget.closest('.ide-container');

  // Ocultar todos los contenidos de código del contenedor actual
  const contents = container.querySelectorAll('.code-content');
  contents.forEach(content => {
    content.style.display = 'none';
    content.classList.remove('active');
  });

  // Desactivar todas las pestañas
  const tabs = container.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Mostrar el contenido seleccionado y activar pestaña
  const activeContent = container.querySelector(`.code-content[data-lang="${tabName}"]`);
  if (activeContent) {
    activeContent.style.display = 'flex';
    activeContent.classList.add('active');
    evt.currentTarget.classList.add('active');

    // Forzar actualización de números de línea
    const code = activeContent.querySelector('code');
    const lineNumbers = activeContent.querySelector('.line-numbers');
    generateLineNumbers(code, lineNumbers);
  }
}

// Generador automático de números de línea
function generateLineNumbers(codeBlock, lineNumberContainer) {
  if (!codeBlock || !lineNumberContainer) return;
  // Limpiamos espacios al inicio/final y contamos saltos de línea
  const lines = codeBlock.textContent.trim().split('\n');
  lineNumberContainer.innerHTML = lines.map((_, i) => `<span>${i + 1}</span>`).join('');
}

// Función para copiar código desde el IDE
async function copiarCodigoIDE(btn) {
  const container = btn.closest('.ide-container');
  const activeCode = container.querySelector('.code-content.active code');

  if (activeCode) {
    try {
      await navigator.clipboard.writeText(activeCode.textContent.trim());
      const span = btn.querySelector('.btn-text') || btn;
      const originalText = span.textContent;
      span.textContent = "¡Copiado!";
      setTimeout(() => span.textContent = originalText, 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  }
}

/**
 * 3. BOTÓN "VOLVER ARRIBA" (TO-TOP)
 */
const toTopBtn = document.querySelector('.to-top');

if (toTopBtn) {
  toTopBtn.style.opacity = '0';
  toTopBtn.style.pointerEvents = 'none';
  toTopBtn.style.transition = 'all 0.3s ease';

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      toTopBtn.style.opacity = '1';
      toTopBtn.style.pointerEvents = 'auto';
      toTopBtn.style.transform = 'scale(1)';
    } else {
      toTopBtn.style.opacity = '0';
      toTopBtn.style.pointerEvents = 'none';
      toTopBtn.style.transform = 'scale(0.8)';
    }
  });

  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * 4. FUNCIÓN COPIAR CÓDIGO (BLOQUES SIMPLES)
 */
const copyButtons = document.querySelectorAll('.copy-btn');

async function handleCopyClick(e) {
  const button = e.currentTarget;
  const container = button.closest('.codeEjm');
  if (!container) return; // Si es un botón del IDE, esta función no lo maneja

  const codeElement = container.querySelector('code');
  const textToCopy = codeElement.innerText.trim();

  try {
    await navigator.clipboard.writeText(textToCopy);
    const originalText = button.textContent;
    button.textContent = "¡Copiado!";
    button.style.background = "#4ade80";
    button.style.color = "#000";

    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = "";
      button.style.color = "";
    }, 2000);
  } catch (err) {
    console.error('Error al copiar:', err);
  }
}

copyButtons.forEach(btn => btn.addEventListener('click', handleCopyClick));

/**
 * 5. INICIALIZACIÓN Y EFECTOS EXTRA
 */
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar números de línea en todos los IDEs
  const ideContainers = document.querySelectorAll('.ide-container');
  ideContainers.forEach(container => {
    const activeCode = container.querySelector('.code-content.active code');
    const lineNumbers = container.querySelector('.code-content.active .line-numbers');
    generateLineNumbers(activeCode, lineNumbers);
  });
});

// Parallax sutil en el header
const header = document.querySelector('.header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
      const scrolled = window.scrollY;
      header.style.transform = `translateY(${scrolled * 0.1}px)`;
      header.style.opacity = 1 - (scrolled / 1000);
    }
  });
}