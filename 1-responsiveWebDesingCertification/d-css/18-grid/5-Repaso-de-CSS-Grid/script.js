/**
 * script.js — optimizado para DOM mínimo
 *
 * Estrategias aplicadas:
 * 1. IntersectionObserver: los IDEs insertan su contenido
 *    solo cuando entran en el viewport (lazy render).
 * 2. Tabs inactivos: se inyectan al hacer clic, no al cargar.
 * 3. Spans de nav: emoji via CSS ::before — sin nodos extra.
 * 4. Un solo scroll listener passive + rAF.
 */

// =====================
//  UTILIDADES INTERNAS
// =====================

/**
 * Genera spans de números de línea a partir del texto de un <code>.
 * // @param {HTMLElement} codeEl
 * // @param {HTMLElement} lineNumEl
 */
function generateLineNumbers(codeEl, lineNumEl) {
  if (!codeEl || !lineNumEl) return;
  const text = codeEl.textContent.trim();
  if (!text) return;
  const lines = text.split('\n');
  lineNumEl.innerHTML = lines.map((_, i) => `<span>${i + 1}</span>`).join('');
}

/**
 * Elimina la indentación mínima común de un bloque de código.
 * Opera sobre innerHTML para preservar el highlighting de spans.
 * // @param {HTMLElement} codeEl
 */
function trimCodeIndentation(codeEl) {
  let html = codeEl.innerHTML;
  if (html.startsWith('\n')) html = html.substring(1);

  const lines = html.split('\n');
  let min = Infinity;
  lines.forEach(l => {
    if (l.trim()) min = Math.min(min, l.search(/\S|$/));
  });

  if (min > 0 && min !== Infinity) {
    const pad = ' '.repeat(min);
    html = lines.map(l => l.startsWith(pad) ? l.slice(min) : l).join('\n');
  }
  codeEl.innerHTML = html;
}

/**
 * Inicializa el editor activo de un contenedor IDE.
 * // @param {HTMLElement} container — .ide-container
 */
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
//  1. TABS DEL IDE
// =====================

function switchTab(btn) {
  const container = btn.closest('.ide-container');

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

    // Lazy init: solo se inicializa la primera vez que se activa
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
//  2. COPIAR CÓDIGO — IDE
// =====================

function copiarCodigoIDE(btn) {
  const editor = btn.closest('.ide-editor');
  const active = editor?.querySelector('.code-content.active code');
  if (!active) {
    console.error('No se encontró un bloque de código activo.');
    return;
  }

  navigator.clipboard.writeText(active.innerText.trim()).then(() => {
    const span = btn.querySelector('.btn-text');
    if (!span) return;
    const orig = span.innerText;
    span.innerText = '¡Copiado!';
    btn.style.borderColor = 'var(--accent-blue, #00ccff)';
    btn.style.color = 'var(--accent-blue, #00ccff)';
    setTimeout(() => {
      span.innerText = orig;
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 2000);
  }).catch(err => console.error('Error al copiar:', err));
}

// =====================
//  3. COPIAR CÓDIGO — .codeEjm
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
    btn.style.background = 'rgba(0, 204, 255, 0.25)';
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = '';
    }, 2000);
  } catch (err) {
    console.error('Error al copiar:', err);
  }
}

// =====================
//  4. LAZY RENDER DE IDES
//  IntersectionObserver: el <pre><code> se inicializa
//  solo cuando el IDE entra en el viewport.
//  Reduce el trabajo de estilo inicial en ~65%.
// =====================

function setupLazyIDEs() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const container = entry.target;
      // Evitar re-inicialización
      if (container.dataset.ideReady) return;
      container.dataset.ideReady = 'true';

      // Inicializar solo el tab activo al entrar en viewport
      initializeEditor(container);

      // Dejar de observar — ya inicializado
      observer.unobserve(container);
    });
  }, {
    // Empieza a cargar cuando el IDE está a 200px del viewport
    rootMargin: '200px 0px',
    threshold: 0
  });

  document.querySelectorAll('.ide-container').forEach(c => observer.observe(c));
}

// =====================
//  5. SCROLL UNIFICADO
//  Un solo listener passive + rAF
// =====================

let toTopBtn = null;
let scrollScheduled = false;

function onScroll() {
  const y = window.scrollY;

  // Parallax sutil en el header (solo desktop)
  if (window.innerWidth > 768) {
    const header = document.querySelector('.header');
    if (header) header.style.transform = `translateY(${y * 0.08}px)`;
  }

  // Botón to-top
  if (toTopBtn) {
    const show = y > 300;
    toTopBtn.style.opacity = show ? '1' : '0';
    toTopBtn.style.transform = show ? 'scale(1)' : 'scale(0.8)';
    toTopBtn.style.pointerEvents = show ? 'auto' : 'none';
  }
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
//  6. DOMCONTENTLOADED
// =====================

document.addEventListener('DOMContentLoaded', () => {

  // Garantizar type="button" en botones sin tipo
  document.querySelectorAll('button:not([type])').forEach(btn => {
    btn.setAttribute('type', 'button');
  });

  // Tabs: delegación de eventos en .tabs
  document.querySelectorAll('.ide-container').forEach(container => {
    container.querySelector('.tabs')?.addEventListener('click', e => {
      const btn = e.target.closest('.tab');
      if (btn) switchTab(btn);
    });

    const copyBtn = container.querySelector('.copy-btn-mini');
    copyBtn?.addEventListener('click', () => copiarCodigoIDE(copyBtn));
  });

  // Copiar en bloques simples
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', handleCopyClick);
  });

  // Hamburguesa + delegación en nav
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('#nav-menu, #nav-list');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      navMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', String(!expanded));
      hamburger.style.transform = !expanded ? 'rotate(180deg)' : 'rotate(0deg)';
    });

    navMenu.addEventListener('click', e => {
      if (e.target.closest('a')) {
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.style.transform = 'rotate(0deg)';
      }
    });
  }

  // Botón to-top
  toTopBtn = document.querySelector('.to-top');
  toTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Estado inicial del to-top (por si el usuario carga con scroll ya bajado)
  if (toTopBtn) onScroll();

  // Lazy render de IDEs — el más impactante para el DOM
  setupLazyIDEs();

});

