// Implementar un filtro de objetos coincidentes
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

function whatIsInAName(colection, source) {
  const keys = Object.keys(source);

  return colection.filter(obj => 
    keys.every(key => obj[key] === source[key])
  )
}
