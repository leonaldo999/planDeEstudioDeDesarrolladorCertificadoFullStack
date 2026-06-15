/* Crea un sistema inteligente de reabastecimiento de despensa */
function parseShipment(rawData) {
  const seen = new Set();
  const shipment = [];

  for (const line of rawData) {
    const [sku, name, qty, expires, zone = "general"] = line.split("|");
    if (seen.has(sku)) continue;
    seen.add(sku);

    shipment.push({ sku, name, qty: Number(qty), expires, zone });
  }
  return shipment;
}

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

function groupByZone(actions) {
  const grouped = {};
  for (const action of actions) {
    const zone = action.item.zone;
    if (!grouped[zone]) grouped[zone] = [];
    grouped[zone].push(action);
  }
  return grouped;
}

function clonePantry(pantry) {
  return pantry.map(item => ({ ...item }));
}

// Ejemplo de uso
const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01|pantry",
  "B21|Bananas|10|2027-01-01|fridge" // duplicado
];

const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 2, expires: "2026-12-01", zone: "general" },
  { sku: "C32", name: "Eggs", qty: 6, expires: "2026-11-15", zone: "pantry" }
];

const shipment = parseShipment(rawData);
const pantryCopy = clonePantry(pantry);
const actions = planRestock(pantryCopy, shipment);
const groupedResult = groupByZone(actions);

console.log(groupedResult);
