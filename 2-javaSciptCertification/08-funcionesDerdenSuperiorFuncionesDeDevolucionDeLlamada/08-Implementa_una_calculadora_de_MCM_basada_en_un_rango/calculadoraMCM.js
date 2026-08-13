// Implementa una calculadora de MCM basada en un rango
function smallestCommons(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);

  const rango = [];
  for (let i = min; i <= max; i++) {
    rango.push(i);
  }

  let mcm = max;
  while (!rango.every(num => mcm % num === 0)) {
    mcm += max;
  }
  
  return mcm;
}
