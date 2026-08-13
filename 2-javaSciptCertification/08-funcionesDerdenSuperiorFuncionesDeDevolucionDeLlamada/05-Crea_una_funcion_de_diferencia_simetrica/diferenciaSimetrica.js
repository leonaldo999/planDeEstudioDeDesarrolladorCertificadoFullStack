// Crea una función de diferencia simétrica
function diffArray(arr1, arr2) {

  const inArr1 = arr1.filter((item) => !arr2.includes(item));
  const inArr2 = arr2.filter((item) => !arr1.includes(item));
  const arrResult = inArr1.concat(inArr2);
  return arrResult;
}