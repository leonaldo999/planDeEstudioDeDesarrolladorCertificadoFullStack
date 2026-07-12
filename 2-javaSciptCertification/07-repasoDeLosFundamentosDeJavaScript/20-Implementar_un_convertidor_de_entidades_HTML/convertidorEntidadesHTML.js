// Implementar un convertidor de entidades HTML
function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return str.replace(/[&<>"']/g, function (char) {
    return entities[char];
  });
}

console.log(convertHTML("Dolce & Gabbana"));
