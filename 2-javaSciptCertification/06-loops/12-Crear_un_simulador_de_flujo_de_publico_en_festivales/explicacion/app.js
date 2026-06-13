/* ============================================
   APP.JS - Lógica de la Interfaz
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ============================================
  // NAVEGACIÓN ENTRE SECCIONES
  // ============================================
  const navButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.content-section');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Quitar clase active de todos
      navButtons.forEach(b => b.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      // Añadir clase active al botón
      btn.classList.add('active');
      document.getElementById(btn.dataset.section).classList.add('active');
    });
  });

  // ============================================
  // MOSTRAR CÓDIGO COMPLETO
  // ============================================
  const codeElement = document.getElementById('full-code');
  if (codeElement) {
    const codigoCompleto = `/* ============================================
   SIMULADOR DE FLUJO DE PÚBLICO - FESTIVALES
   ============================================ */

// ======================
// DATOS
// ======================
const morningGates = [
  { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
  { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
  { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
  { id: "West", capacity: 2, queue: [4, 1, 2, 3] }
];

const nightGates = [
  { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
  { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
  { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
  { id: "West", capacity: 3, queue: [5, 2, 1, 4] }
];

// ======================
// FUNCIONES
// ======================

// 1. Inicializar resumen
function initializeThroughput(gates) {
  const summary = {};
  for (const gate of gates) {
    summary[gate.id] = 0;
  }
  return summary;
}

// 2. Procesar flujo de una puerta
function processGateFlow(gate, tickIndex) {
  let currentTickQueue = gate.queue[tickIndex];
  let processed = 0;

  while (currentTickQueue > 0 && processed < gate.capacity) {
    currentTickQueue--;
    processed++;
  }

  return {
    processed: processed,
    overflow: currentTickQueue
  };
}

// 3. Derivar overflow
function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
  const currentIndex = gates.indexOf(currentGate);
  const nextGateIndex = (currentIndex + 1) % gates.length;
  
  gates[nextGateIndex].queue[tickIndex] += overflowAmount;
  console.log(overflowAmount + " attendees rerouted to " + gates[nextGateIndex].id);
}

// 4. Manejar puerta en un tick
function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
  console.log("\\nProcessing " + gate.id + "...");
  console.log(gate.queue[tickIndex] + " attendees arriving.");
  
  const result = processGateFlow(gate, tickIndex);
  throughputSummary[gate.id] += result.processed;
  
  if (result.overflow > 0) {
    console.log("Overflow of " + result.overflow + " attendees. Rerouting...");
    rerouteOverflow(gates, gate, tickIndex, result.overflow);
  }
}

// 5. Imprimir resumen
function printSummary(summary) {
  console.log("\\nThroughput Summary");
  for (const gate in summary) {
    console.log(gate + ": " + summary[gate] + " attendees processed");
  }
}

// 6. Simular festival (Principal)
function simulateFestival(gates, timeBlock) {
  console.log("\\n" + timeBlock + " Simulation");
  
  const throughputSummary = initializeThroughput(gates);
  const maxTicks = gates[0].queue.length;
  let tickIndex = 0;

  while (tickIndex < maxTicks) {
    console.log("\\nTick " + (tickIndex + 1));
    
    for (const gate of gates) {
      handleGateAtTick(gates, gate, tickIndex, throughputSummary);
    }
    
    tickIndex++;
  }
  
  printSummary(throughputSummary);
  return throughputSummary;
}

// ======================
// EJECUTAR
// ======================
simulateFestival(morningGates, "Morning");
simulateFestival(nightGates, "Night");`;

    codeElement.textContent = codigoCompleto;
  }

  // ============================================
  // DEMO INTERACTIVA
  // ============================================
  const runDemoBtn = document.getElementById('run-demo');
  const resetDemoBtn = document.getElementById('reset-demo');
  const consoleOutput = document.getElementById('console-output');
  const demoTurno = document.getElementById('demo-turno');

  if (runDemoBtn && consoleOutput) {
    // Guardar referencia original de console.log
    const originalLog = console.log;
    const logs = [];

    // Sobrescribir console.log para mostrar en la web
    console.log = (...args) => {
      const message = args.join(' ');
      logs.push(message);
      consoleOutput.textContent = logs.join('\n');
      consoleOutput.scrollTop = consoleOutput.scrollHeight;
    };

    runDemoBtn.addEventListener('click', () => {
      // Limpiar logs anteriores
      logs.length = 0;
      consoleOutput.textContent = '';

      const turno = demoTurno.value;
      const gates = turno === 'morning'
        ? JSON.parse(JSON.stringify(window.FestivalSimulator.morningGates))
        : JSON.parse(JSON.stringify(window.FestivalSimulator.nightGates));

      window.FestivalSimulator.simulateFestival(gates, turno === 'morning' ? 'Morning' : 'Night');
    });

    resetDemoBtn.addEventListener('click', () => {
      logs.length = 0;
      consoleOutput.textContent = 'Haz clic en "Ejecutar" para ver la simulación...';
    });

    // Mensaje inicial
    consoleOutput.textContent = 'Haz clic en "Ejecutar" para ver la simulación...';
  }
});