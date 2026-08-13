// Crear una herramienta de aplanamiento profundo
function steamrollArray(arr) {
  const result = [];

  for (const element of arr) {
    if (Array.isArray(element)) {
      result.push(...steamrollArray(element));
    }else{
      result.push(element);
    }
  }

  return result;
}