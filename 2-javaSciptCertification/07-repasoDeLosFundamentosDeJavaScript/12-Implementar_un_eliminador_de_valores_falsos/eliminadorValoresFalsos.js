// Implementar un eliminador de valores falsos
/*
Los valores que JavaScript considera falsos:

false
null
0
""
undefined
NaN
*/
function bouncer(arr) {
  return arr.filter(function(valor) {
    return Boolean(valor);
  });
}


console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
console.log(bouncer);
console.log(bouncer([]));




// const arr = [7, "ate", "", false, 9]; // [7, "ate", 9]

// const arrFalse = [false, null, 0, NaN, undefined, ""]; // []


