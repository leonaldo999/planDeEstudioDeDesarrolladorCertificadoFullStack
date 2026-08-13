# Implementa un generador de pares de bases de ADN

En la doble hélice del _ADN_, las bases siempre se emparejan: si en una cadena hay una base _A_, en la otra cadena, justo enfrente, hay una base _T_; el otro par es _C_ y _G_.

En este laboratorio, escribirás una función para completar los pares de bases que faltan en la cadena de _ADN_ proporcionada. Para cada carácter de la cadena proporcionada, encuentra el carácter que representa el par de bases correspondiente.

Por ejemplo, para la entrada `ATCG`, devuelve `[["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]`

La base _A_ se empareja con una base _T_, la base _T_ se empareja con una base _A_, la _C_ se empareja con la base _G_ y, por último, la base _G_ se empareja con una base _C_.

---

## Historias de usuario

1. Debes tener una función `pairElement` que tome como argumento una cadena de cualquier longitud.

2. La función `pairElement` debe devolver un array bidimensional, en el que cada array interno contenga dos cadenas: la primera cadena es una base de la entrada y la segunda cadena es la base emparejada.

3. Si se le pasa `A`, la función debe emparejarla con `T`.

4. Si se le pasa `T`, la función debe emparejarla con `A`.

5. Si se le pasa `C`, la función debe emparejarla con `G`.

6. Si se le pasa `G`, la función debe emparejarla con `C`.

---

## Solucíon

```js
function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  return [...str].map(base => [base, pairs[base]]);
}
```
