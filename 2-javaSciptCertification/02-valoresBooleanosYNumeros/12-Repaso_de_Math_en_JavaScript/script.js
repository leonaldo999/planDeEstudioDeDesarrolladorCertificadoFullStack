/**
 * script.js — Repaso CSS con sidebar
 * Incluye: sidebar drawer, búsqueda de temas,
 * scroll spy, tabs IDE, copiar código, lazy render,
 * scroll unificado passive + rAF.
 */

// =====================
//  1. SIDEBAR
// =====================

const sidebar = document.getElementById('main-sidebar');
const overlay = document.getElementById('sidebar-overlay');
const toggleBtn = document.getElementById('sidebar-toggle-btn');
const sidebarFooter = document.getElementById('sidebar-footer');
const searchInput = document.getElementById('nav-search');
const navLinks = document.querySelectorAll('[data-nav]');

/**
 * Abre o cierra el sidebar (usado en mobile/tablet).
 * @param {boolean} open
 */
function setSidebar(open) {
  if (!sidebar || !overlay || !toggleBtn) return;

  sidebar.classList.toggle('open', open);
  overlay.classList.toggle('visible', open);
  toggleBtn.classList.toggle('open', open);
  toggleBtn.setAttribute('aria-expanded', String(open));
  toggleBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  document.body.style.overflow = open ? 'hidden' : '';
  overlay.setAttribute('aria-hidden', String(!open));
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = sidebar.classList.contains('open');
    setSidebar(!isOpen);
  });
}

if (overlay) {
  overlay.addEventListener('click', () => setSidebar(false));
}

// Cerrar sidebar al hacer clic en un link (mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) setSidebar(false);
  });
});

// Cerrar con Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && sidebar?.classList.contains('open')) {
    setSidebar(false);
    toggleBtn?.focus();
  }
});

// =====================
//  2. BÚSQUEDA EN EL SIDEBAR
// =====================

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    let visible = 0;

    navLinks.forEach(link => {
      const text = link.textContent.toLowerCase();
      const match = !q || text.includes(q);
      link.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    // Mostrar/ocultar group-labels vacíos
    document.querySelectorAll('.nav-group').forEach(group => {
      const hasVisible = [...group.querySelectorAll('[data-nav]')]
        .some(a => a.style.display !== 'none');
      group.style.display = hasVisible ? '' : 'none';
    });

    if (sidebarFooter) {
      sidebarFooter.textContent = q
        ? `${visible} resultado${visible !== 1 ? 's' : ''}`
        : '65 temas';
    }
  });
}

// =====================
//  3. SCROLL SPY — resalta el link activo
// =====================

const sections = document.querySelectorAll('section[id]');

// Throttling para mejor performance
let scrollThrottle = false;
function updateActiveLink() {
  if (scrollThrottle) return;
  scrollThrottle = true;
  setTimeout(() => {
    const scrollY = window.scrollY;
    const offset = window.innerWidth <= 768
      ? parseInt(getComputedStyle(document.documentElement).getPropertyValue('--topbar-h')) + 20
      : 80;

    let current = '';
    sections.forEach(section => {
      if (section.offsetTop - offset <= scrollY) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href')?.replace('#', '');
      link.classList.toggle('active', href === current);
    });

    // Auto-scroll del sidebar para mostrar el link activo
    const activeLink = sidebar?.querySelector('[data-nav].active');
    if (activeLink && sidebar) {
      const nav = sidebar.querySelector('.sidebar-nav');
      if (nav) {
        const linkTop = activeLink.offsetTop;
        const navTop = nav.scrollTop;
        const navH = nav.clientHeight;
        if (linkTop < navTop || linkTop > navTop + navH - 60) {
          nav.scrollTo({ top: linkTop - navH / 2, behavior: 'smooth' });
        }
      }
    }
    scrollThrottle = false;
  }, 100);
}

// =====================
//  4. TABS DEL IDE
// =====================

/**
 * Cambia el tab activo. Lee data-lang del botón.
 * @param {HTMLElement} btn
 */
function switchTab(btn) {
  const container = btn.closest('.ide-container');
  if (!container) return;

  container.querySelectorAll('.code-content').forEach(b => {
    b.style.display = 'none';
    b.classList.remove('active');
  });
  container.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

  const lang = btn.dataset.lang;
  const target = container.querySelector(`.code-content[data-lang="${lang}"]`);
  if (target) {
    target.style.display = 'flex';
    target.classList.add('active');

    if (!target.dataset.initialized) {
      target.dataset.initialized = 'true';
      const code = target.querySelector('code');
      const nums = target.querySelector('.line-numbers');
      if (code) trimCodeIndentation(code);
      if (code && nums) generateLineNumbers(code, nums);
    }
  }
  btn.classList.add('active');
}

// =====================
//  5. COPIAR CÓDIGO — IDE
// =====================

function copiarCodigoIDE(btn) {
  const editor = btn.closest('.ide-editor');
  const active = editor?.querySelector('.code-content.active code');
  if (!active) return;

  navigator.clipboard.writeText(active.innerText.trim()).then(() => {
    const span = btn.querySelector('.btn-text');
    if (!span) return;
    const orig = span.innerText;
    span.innerText = '¡Copiado!';
    btn.style.borderColor = 'var(--accent-blue)';
    btn.style.color = 'var(--accent-blue)';
    setTimeout(() => {
      span.innerText = orig;
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 2000);
  }).catch(err => {
    console.error('Error al copiar:', err);
    // Fallback: usar document.execCommand si clipboard falla
    const textArea = document.createElement('textarea');
    textArea.value = active.innerText.trim();
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  });
}

// =====================
//  6. COPIAR CÓDIGO — .codeEjm
// =====================

async function handleCopyClick(e) {
  const btn = e.currentTarget;
  const container = btn.closest('.codeEjm');
  if (!container) return;
  const codeEl = container.querySelector('code');
  if (!codeEl) return;
  try {
    await navigator.clipboard.writeText(codeEl.innerText.trim());
    const orig = btn.textContent;
    btn.textContent = '¡Copiado!';
    btn.style.background = 'rgba(0,204,255,0.25)';
    setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 2000);
  } catch (err) { console.error(err); }
}

// =====================
//  7. NÚMEROS DE LÍNEA
// =====================

function generateLineNumbers(codeEl, lineNumEl) {
  if (!codeEl || !lineNumEl) return;
  const text = codeEl.textContent.trim();
  if (!text) return;
  const lines = text.split('\n');
  let count = lines.length;
  if (text.endsWith('\n') && count > 1) count--;
  lineNumEl.innerHTML = Array.from({ length: count }, (_, i) => `<span>${i + 1}</span>`).join('');
}

// =====================
//  8. LIMPIEZA DE INDENTACIÓN
// =====================

function trimCodeIndentation(codeEl) {
  let html = codeEl.innerHTML;
  if (html.startsWith('\n')) html = html.substring(1);
  const lines = html.split('\n');
  let min = Infinity;
  lines.forEach(l => { if (l.trim()) min = Math.min(min, l.search(/\S|$/)); });
  if (min > 0 && min !== Infinity) {
    const pad = ' '.repeat(min);
    html = lines.map(l => l.startsWith(pad) ? l.slice(min) : l).join('\n');
  }
  codeEl.innerHTML = html;
}

// =====================
//  9. INICIALIZAR EDITOR
// =====================

function initializeEditor(container) {
  const active = container.querySelector('.code-content.active');
  if (!active) return;
  const code = active.querySelector('code');
  const nums = active.querySelector('.line-numbers');
  if (!code) return;
  trimCodeIndentation(code);
  if (nums) generateLineNumbers(code, nums);
}

// =====================
//  10. LAZY RENDER DE IDES
// =====================

function setupLazyIDEs() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const container = entry.target;
      if (container.dataset.ideReady) return;
      container.dataset.ideReady = 'true';
      initializeEditor(container);
      observer.unobserve(container);
    });
  }, { rootMargin: '200px 0px', threshold: 0 });

  document.querySelectorAll('.ide-container').forEach(c => observer.observe(c));
}

// =====================
//  11. SCROLL UNIFICADO
//  passive + rAF
// =====================

let toTopBtn = null;
let scrollScheduled = false;

function onScroll() {
  const y = window.scrollY;

  // Botón to-top
  if (toTopBtn) {
    const show = y > 300;
    toTopBtn.style.opacity = show ? '1' : '0';
    toTopBtn.style.transform = show ? 'scale(1)' : 'scale(0.8)';
    toTopBtn.style.pointerEvents = show ? 'auto' : 'none';
  }

  // Scroll spy
  updateActiveLink();
}

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
//  12. DOMCONTENTLOADED
// =====================

document.addEventListener('DOMContentLoaded', () => {

  // type="button" en todos los botones sin tipo
  document.querySelectorAll('button:not([type])').forEach(btn => {
    btn.setAttribute('type', 'button');
  });

  // Delegación de eventos para tabs IDE y copiar
  document.addEventListener('click', e => {
    const tabBtn = e.target.closest('.tab');
    if (tabBtn) {
      switchTab(tabBtn);
      return;
    }
    const copyBtnIDE = e.target.closest('.copy-btn-mini');
    if (copyBtnIDE) {
      copiarCodigoIDE(copyBtnIDE);
      return;
    }
    const copyBtnEjm = e.target.closest('.copy-btn');
    if (copyBtnEjm) {
      handleCopyClick(e);
      return;
    }
  });

  // Botón to-top
  toTopBtn = document.querySelector('.to-top');
  toTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Estado inicial
  if (toTopBtn) onScroll();

  // Lazy IDEs
  setupLazyIDEs();

  // Scroll spy inicial
  updateActiveLink();

});

// =====================
//  13. THEME SWITCHER
// =====================
document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('theme-switcher');

  // Recuperar el tema guardado o por defecto a oscuro
  const savedTheme = localStorage.getItem('js-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('js-theme', newTheme);
    });
  }
});

// =====================
//  14. LIVE CODING ANIMATION
// =====================
function startLiveCoding(selector, codeString, speed = 40) {
  const targetPre = document.querySelector(selector);
  if (!targetPre) return;

  // Insertamos la estructura para el código escrito y el cursor
  targetPre.innerHTML = '<span class="typed-code"></span><span class="ide-cursor"></span>';
  const textElement = targetPre.querySelector('.typed-code');

  // Buscamos el contenedor de los números de línea más cercano
  const lineNumbers = targetPre.closest('.code-content').querySelector('.line-numbers');

  let i = 0;
  let currentLines = 1;

  function typeWriter() {
    if (i < codeString.length) {
      const char = codeString.charAt(i);
      textElement.textContent += char;

      // Actualizar números de línea en tiempo real si hay un salto de línea
      if (char === '\n' && lineNumbers) {
        currentLines++;
        lineNumbers.innerHTML = Array.from({ length: currentLines }, (_, idx) => `<span>${idx + 1}</span>`).join('');
      }

      i++;
      // Variación aleatoria de velocidad para parecer humano
      const humanSpeed = speed + Math.random() * 40 - 20;
      setTimeout(typeWriter, humanSpeed);
    }
  }

  // Iniciar inicializando la línea 1
  if (lineNumbers) lineNumbers.innerHTML = '<span>1</span>';

  // Retraso de 1 segundo antes de empezar a escribir
  setTimeout(typeWriter, 1000);
}

// Inicializar el Live Coding cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const codigoJS = `// Variables y Tipos de Datos\nlet nombre = "JavaScript";\nconst version = ES6;\nlet esDivertido = true;\n\nfunction saludar() {\n  console.log("¡Hola, " + nombre + "!");\n}\n\nsaludar();`;

  // Inicia la animación en el elemento con la clase .live-coding-target
  startLiveCoding('.live-coding-target', codigoJS, 50);
});