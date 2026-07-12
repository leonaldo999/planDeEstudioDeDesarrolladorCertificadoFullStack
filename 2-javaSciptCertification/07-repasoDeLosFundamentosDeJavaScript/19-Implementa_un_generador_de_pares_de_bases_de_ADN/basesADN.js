// Implementa un generador de pares de bases de ADN
function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }

  const result = [];

  for (let base of str) {
    result.push([base, pairs[base]])
  }

  return result;
}

// console.log(pairs["A"]);
// console.log(pairs["C"]);
console.log(pairElement("ATCGA"));
