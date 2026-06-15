// Función para convertir rawData en objetos, sin duplicados y con valores correctos
function parseShipment(rawData) {
  const seen = new Set();
  const shipment = [];

  for (const line of rawData) {
    const [sku, name, qty, expires, zone = "general"] = line.split("|");
    if (seen.has(sku)) continue; // Ignora duplicados
    seen.add(sku);

    shipment.push({ sku, name, qty: Number(qty), expires, zone });
  }
  return shipment;
}

// Decide qué hacer con cada artículo del envío basado en la despensa actual
function planRestock(pantry, shipment) {
  const actions = [];
  for (const item of shipment) {
    if (item.qty <= 0) {
      actions.push({ type: "discard", item });
    } else if (pantry.some(p => p.sku === item.sku)) {
      actions.push({ type: "restock", item });
    } else {
      actions.push({ type: "donate", item });
    }
  }
  return actions;
}

// Agrupa las acciones según la zona
function groupByZone(actions) {
  const grouped = {};
  for (const action of actions) {
    const zone = action.item.zone;
    if (!grouped[zone]) grouped[zone] = [];
    grouped[zone].push(action);
  }
  return grouped;
}

// Realiza una copia profunda para evitar modificar la despensa original
function clonePantry(pantry) {
  return pantry.map(item => ({ ...item }));
}

// Datos de ejemplo para simular el envío y la despensa actual
const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01|pantry",
  "B21|Bananas|10|2027-01-01|fridge" // duplicado que será ignorado
];

const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 2, expires: "2026-12-01", zone: "general" },
  { sku: "C32", name: "Eggs", qty: 6, expires: "2026-11-15", zone: "pantry" }
];

// Al hacer clic en el botón, procesa el envío y muestra los resultados
document.getElementById("processBtn").addEventListener("click", () => {
  const shipment = parseShipment(rawData);
  const pantryCopy = clonePantry(pantry);
  const actions = planRestock(pantryCopy, shipment);
  const groupedResult = groupByZone(actions);

  // Mostrar el objeto agrupado en formato JSON legible
  document.getElementById("output").textContent = JSON.stringify(groupedResult, null, 2);
});
