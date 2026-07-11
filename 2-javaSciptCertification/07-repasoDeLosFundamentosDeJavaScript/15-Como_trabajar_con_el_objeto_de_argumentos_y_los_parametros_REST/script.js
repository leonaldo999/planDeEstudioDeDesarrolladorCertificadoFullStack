/**
 * script.js
 * Lógica principal del sitio: tabs del IDE, copiar código,
 * números de línea, menú hamburguesa y efectos de scroll.
 */

// =====================
//  1. TABS DEL IDE
// =====================

function switchTab(btn) {
  const container = btn.closest('.ide-container');
  container.querySelectorAll('.code-content').forEach(block => {
    block.style.display = 'none';
    block.classList.remove('active');
  });
  container.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  const lang = btn.dataset.lang;
  const activeBlock = container.querySelector(`.code-content[data-lang="${lang}"]`);
  if (activeBlock) {
    activeBlock.style.display = 'flex';
    activeBlock.classList.add('active');
  }
  btn.classList.add('active');

  initializeEditor(container);
}

// =====================
//  2. COPIAR CÓDIGO
// =====================

function copiarCodigoIDE(btn) {
  const editorContainer = btn.closest('.ide-editor');
  const activeCodeBlock = editorContainer.querySelector('.code-content.active code');

  if (!activeCodeBlock) {
    console.error('No se encontró un bloque de código activo.');
    return;
  }

  navigator.clipboard.writeText(activeCodeBlock.innerText.trim()).then(() => {
    const btnSpan = btn.querySelector('.btn-text');
    if (!btnSpan) return;

    const originalText = btnSpan.innerText;
    btnSpan.innerText = '¡Copiado!';
    btn.style.borderColor = '#10b981';
    btn.style.color = '#10b981';

    setTimeout(() => {
      btnSpan.innerText = originalText;
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 2000);
  }).catch(err => {
    console.error('Error al copiar el código:', err);
  });
}

// =====================
//  3. NÚMEROS DE LÍNEA
// =====================

function generateLineNumbers(codeBlock, lineNumberContainer) {
  if (!lineNumberContainer) {
    console.warn('No se encontró el contenedor de números de línea.');
    return;
  }
  if (!codeBlock.textContent.trim()) return;

  const lines = codeBlock.textContent.split('\n');
  let lineCount = lines.length;

  if (codeBlock.textContent.endsWith('\n') && lineCount > 1) {
    lineCount--;
  }

  let html = '';
  for (let i = 1; i <= lineCount; i++) {
    html += `<span>${i}</span>`;
  }
  lineNumberContainer.innerHTML = html;
}

// =====================
//  4. LIMPIEZA DE INDENTACIÓN
// =====================

function trimCodeIndentation(codeBlock) {
  let html = codeBlock.innerHTML;

  // Quitar salto de línea inicial si existe
  if (html.startsWith('\n')) {
    html = html.substring(1);
  }

  // Calcular indentación mínima (ignorando líneas vacías)
  const lines = html.split('\n');
  let minIndent = Infinity;

  lines.forEach(line => {
    if (line.trim().length > 0) {
      const leadingSpaces = line.search(/\S|$/);
      if (leadingSpaces < minIndent) minIndent = leadingSpaces;
    }
  });

  // Aplicar recorte
  if (minIndent !== Infinity && minIndent > 0) {
    const indent = ' '.repeat(minIndent);
    html = lines.map(line => line.startsWith(indent) ? line.substring(minIndent) : line).join('\n');
  }

  codeBlock.innerHTML = html;
}

// =====================
//  5. INICIALIZAR EDITOR
// =====================

function initializeEditor(container) {
  const activeBlock = container.querySelector('.code-content.active');
  if (!activeBlock) {
    console.warn('No se encontró un bloque de código activo.');
    return;
  }

  const code = activeBlock.querySelector('code');
  const lineNumbers = activeBlock.querySelector('.line-numbers');

  if (!code) {
    console.warn('No se encontró el elemento <code>.');
    return;
  }

  trimCodeIndentation(code);
  if (lineNumbers) {
    generateLineNumbers(code, lineNumbers);
  }
}

// =====================
//  6. SCROLL UNIFICADO
// =====================

function onScroll() {
  const scrollY = window.scrollY;

  // Parallax sutil en el header
  const header = document.querySelector('.header');
  if (header) {
    header.style.transform = `translateY(${scrollY * 0.1}px)`;
  }

  // Mostrar / ocultar botón to-top
  if (toTopBtn) {
    if (scrollY > 300) {
      toTopBtn.style.opacity = '1';
      toTopBtn.style.transform = 'scale(1)';
    } else {
      toTopBtn.style.opacity = '0';
      toTopBtn.style.transform = 'scale(0.8)';
    }
  }
}

let scrollScheduled = false;

window.addEventListener('scroll', () => {
  if (!scrollScheduled) {
    scrollScheduled = true;
    requestAnimationFrame(() => {
      onScroll();
      scrollScheduled = false;
    });
  }
}, { passive: true });

// =====================
//  7. DOMCONTENTLOADED
// =====================

// Referencia al botón to-top (necesaria en onScroll)
let toTopBtn = null;

document.addEventListener('DOMContentLoaded', () => {

  // --- Inicializar editores IDE ---
  document.querySelectorAll('.ide-container').forEach(container => {
    initializeEditor(container);
  });

  // --- Garantizar type="button" en todos los botones sin tipo ---
  document.querySelectorAll('button:not([type])').forEach(btn => {
    btn.setAttribute('type', 'button');
  });

  // --- Tabs: delegación por data-lang ---
  document.querySelectorAll('.ide-container').forEach(container => {
    container.querySelector('.tabs').addEventListener('click', e => {
      const btn = e.target.closest('.tab');
      if (btn) switchTab(btn);
    });

    const copyBtn = container.querySelector('.copy-btn-mini');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => copiarCodigoIDE(copyBtn));
    }
  });

  // --- Hamburguesa ---
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('#nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      navMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', String(!isExpanded));
      hamburger.style.transform = !isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
    });

    // Cierra el menú al hacer clic en cualquier enlace de la nav
    navMenu.addEventListener('click', e => {
      if (e.target.closest('a')) {
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.style.transform = 'rotate(0deg)';
      }
    });
  }

  // --- Botón to-top ---
  toTopBtn = document.querySelector('.to-top');

  if (toTopBtn) {
    onScroll();
  }

});

