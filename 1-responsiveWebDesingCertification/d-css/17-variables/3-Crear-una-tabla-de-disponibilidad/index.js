/* ─── Constants ─────────────────────────────────────────── */
const TIMES = [
  '8:00', '8:30', '9:00', '9:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00'
];

const DAYS_ES = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const COLORS = [
  '#1a0a0a', // --color0
  '#7d1c1c', // --color1
  '#c0572a', // --color2
  '#c9a227', // --color3
  '#4aad52', // --color4
  '#00e676'  // --color5
];

/* ─── State ──────────────────────────────────────────────── */
let weekOffset = 0;
let tasks = JSON.parse(localStorage.getItem('sched_tasks') || '{}');

/* Modal state */
let modalState = { key: null, taskIdx: null };

/* ─── Helpers ────────────────────────────────────────────── */
/**
 * Returns the Monday of the week at the given offset from today.
 */
function getMonday(offset) {
  const d = new Date();
  const day = d.getDay() || 7; // treat Sunday as 7
  d.setDate(d.getDate() - day + 1 + offset * 7);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Formats a Date as "dd mmm" in Spanish locale.
 */
function fmtDate(d) {
  return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
}

/**
 * Builds the localStorage key for a given week start, day index, and time index.
 * Format: "YYYY-MM-DD_HH:MM"
 */
function cellKey(weekStart, dayIdx, timeIdx) {
  const d = new Date(weekStart);
  d.setDate(d.getDate() + dayIdx);
  return d.toISOString().slice(0, 10) + '_' + TIMES[timeIdx];
}

/**
 * Returns the availability class number (0-5) for a cell key,
 * derived from the number of tasks in that slot.
 */
function getAvail(key) {
  const list = tasks[key] || [];
  if (!list.length) return 0;
  return Math.min(5, list.length + 1);
}

/**
 * Persists the tasks object to localStorage.
 */
function saveTasks() {
  localStorage.setItem('sched_tasks', JSON.stringify(tasks));
}

/* ─── Render Legend ──────────────────────────────────────── */
function renderLegend() {
  const lbl = document.getElementById('legend-lbl');
  lbl.innerHTML = ['0', '1', '2', '3', '4', '5']
    .map(n => `<span>${n}</span>`)
    .join('');
}

/* ─── Render Table ───────────────────────────────────────── */
function renderTable() {
  const mon = getMonday(weekOffset);
  const sun = new Date(mon);
  sun.setDate(sun.getDate() + 6);
  document.getElementById('week-label').textContent =
    fmtDate(mon) + ' – ' + fmtDate(sun);

  /* ── Header row ── */
  const hr = document.getElementById('header-row');
  hr.innerHTML = '<th class="time"></th>';
  for (let d = 0; d < 7; d++) {
    const dt = new Date(mon);
    dt.setDate(dt.getDate() + d);
    const isToday = dt.toDateString() === new Date().toDateString();
    hr.innerHTML +=
      `<th ${isToday ? 'class="today-header"' : ''}>
        ${DAYS_ES[d]}<br>
        <span style="font-size:10px;font-weight:400;opacity:0.5">${fmtDate(dt)}</span>
      </th>`;
  }

  /* ── Body rows ── */
  const tbody = document.getElementById('sched-body');
  tbody.innerHTML = '';

  TIMES.forEach((t, ti) => {
    const tr = document.createElement('tr');
    tr.className = ti % 2 === 0 ? 'sharp' : 'half';

    /* Time header cell */
    const th = document.createElement('th');
    th.className = 'time';
    th.textContent = t;
    tr.appendChild(th);

    /* Data cells – one per day */
    for (let d = 0; d < 7; d++) {
      const key = cellKey(mon, d, ti);
      const avail = getAvail(key);
      const list = tasks[key] || [];

      const td = document.createElement('td');
      td.className = 'available-' + avail;
      td.dataset.key = key;

      /* Task chips */
      let inner = list.map((task, idx) => `
        <div class="task-chip" data-key="${key}" data-idx="${idx}">
          <span class="name">${escHtml(task.name)}</span>
          <span class="del" data-key="${key}" data-idx="${idx}" title="Eliminar">✕</span>
        </div>
      `).join('');

      /* Add-task button */
      inner += `<span class="add-btn" data-key="${key}">+ agregar</span>`;

      td.innerHTML = inner;
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  });

  attachCellEvents();
}

/* ─── Escape HTML helper ─────────────────────────────────── */
function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ─── Attach cell-level events ───────────────────────────── */
function attachCellEvents() {
  /* Add-task buttons */
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openModal(btn.dataset.key, null);
    });
  });

  /* Delete buttons */
  document.querySelectorAll('.task-chip .del').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const { key, idx } = btn.dataset;
      tasks[key].splice(parseInt(idx), 1);
      if (!tasks[key].length) delete tasks[key];
      saveTasks();
      renderTable();
    });
  });

  /* Edit chips */
  document.querySelectorAll('.task-chip').forEach(chip => {
    chip.addEventListener('click', e => {
      if (e.target.classList.contains('del')) return;
      openModal(chip.dataset.key, parseInt(chip.dataset.idx));
    });
  });
}

/* ─── Modal ──────────────────────────────────────────────── */
function openModal(key, taskIdx) {
  modalState = { key, taskIdx };

  const task = taskIdx !== null ? (tasks[key] || [])[taskIdx] : null;

  document.getElementById('modal-title').textContent = task ? 'Editar tarea' : 'Nueva tarea';
  document.getElementById('task-name').value = task ? task.name : '';
  document.getElementById('task-notes').value = task ? (task.notes || '') : '';
  document.getElementById('task-name').style.borderColor = '';

  buildAvailDots(task ? (task.avail ?? 3) : 3);

  document.getElementById('modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('task-name').focus(), 60);
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

function buildAvailDots(selected) {
  const container = document.getElementById('avail-dots');
  container.innerHTML = COLORS.map((col, i) => `
    <div class="avail-dot ${i === selected ? 'sel' : ''}"
         data-v="${i}"
         style="background:${col}"
         title="${i} personas disponibles">
    </div>
  `).join('');

  container.querySelectorAll('.avail-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      container.querySelectorAll('.avail-dot').forEach(d => d.classList.remove('sel'));
      dot.classList.add('sel');
    });
  });
}

/* ─── Save task ──────────────────────────────────────────── */
document.getElementById('save-btn').addEventListener('click', () => {
  const nameInput = document.getElementById('task-name');
  const name = nameInput.value.trim();

  if (!name) {
    nameInput.style.borderColor = '#e24b4a';
    nameInput.focus();
    return;
  }

  const notes = document.getElementById('task-notes').value.trim();
  const selDot = document.querySelector('#avail-dots .avail-dot.sel');
  const avail = selDot ? parseInt(selDot.dataset.v) : 3;

  const { key, taskIdx } = modalState;
  if (!tasks[key]) tasks[key] = [];

  const entry = { name, notes, avail };

  if (taskIdx !== null) {
    tasks[key][taskIdx] = entry;
  } else {
    tasks[key].push(entry);
  }

  saveTasks();
  closeModal();
  renderTable();
});

/* ─── Cancel / close modal ───────────────────────────────── */
document.getElementById('cancel-btn').addEventListener('click', closeModal);

document.getElementById('modal').addEventListener('click', e => {
  if (e.target === document.getElementById('modal')) closeModal();
});

/* Close modal on Escape key */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ─── Week navigation ────────────────────────────────────── */
document.getElementById('prev').addEventListener('click', () => {
  weekOffset--;
  renderTable();
});

document.getElementById('next').addEventListener('click', () => {
  weekOffset++;
  renderTable();
});

document.getElementById('today-btn').addEventListener('click', () => {
  weekOffset = 0;
  renderTable();
});

/* ─── Init ───────────────────────────────────────────────── */
renderLegend();
renderTable();