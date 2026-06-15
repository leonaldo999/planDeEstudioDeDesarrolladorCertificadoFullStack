# Crea un sistema inteligente de reabastecimiento de despensa

---

En este laboratorio, crearás un pequeño programa de gestión de despensa utilizando conceptos básicos de JavaScript, como matrices, objetos, bucles y sentencias condicionales.

Simularás la recepción de un envío de artículos de despensa, decidirás qué hacer con cada artículo y organizarás los resultados para su almacenamiento.

La matriz `rawData` contiene cadenas separadas por barras verticales con el formato `sku|name|qty|expires|zone`, donde `zone` es opcional.

> > Por ejemplo:

  ```js
  const rawData = [
    "A10|Tomatoes|5|2027-01-01", // no zone field
    "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
    "C32|Eggs|3|2027-01-01|pantry", // zone: "pantry"
  ];
  ```

## Historias de usuario

1. Debes implementar una función `parseShipment(rawData)` que tome una matriz de cadenas y devuelva una matriz de objetos con las propiedades `{ sku, name, qty, expires, zone }`.

    - Se deben ignorar los valores de `sku` duplicados en el envío.
    - Cuando no se proporcione el segmento de `zone`, el valor predeterminado debe ser `"general"`.
    - El valor de `qty` debe convertirse a un número.

2. Debes implementar una función `planRestock(pantry, shipment)` que compare el estado actual de la despensa con el envío entrante y devuelva una matriz de acciones en el formato `{ type, item }`, donde `type` puede ser `"restock"`, `"discard"` o `"donate"`, y `"item"` es el objeto de envío analizado.

    El parámetro `pantry` es una matriz de objetos con la misma estructura que un artículo de envío analizado (`{ sku, name, qty, expires, zone }`).

    - Si un artículo de envío tiene un `qty` de `0` o menos, el `type` de acción debe ser `"discard"`, independientemente de si el artículo existe en la despensa.

    - De lo contrario, si el `sku` del artículo del envío ya existe en la despensa, el `type` de acción debe ser `"restock"`.

    - De lo contrario (el `sku` del artículo del envío no existe en la despensa), el `type` de acción debe ser `"donate"`.

3. Debes implementar una función `groupByZone(actions)` que agrupe las acciones en zonas de almacenamiento según la propiedad `zone` de cada elemento.

4. Debes implementar una función `clonePantry(pantry)` que devuelva una copia profunda de la despensa para que los cambios en la planificación no afecten a la lista original. Una copia profunda significa crear una nueva matriz con nuevos objetos, de modo que modificar la copia no cambie la despensa original.

5. Debes utilizar todas las funciones juntas para procesar un envío y registrar el objeto de resultado agrupado final en la consola.

---

```js
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
```
