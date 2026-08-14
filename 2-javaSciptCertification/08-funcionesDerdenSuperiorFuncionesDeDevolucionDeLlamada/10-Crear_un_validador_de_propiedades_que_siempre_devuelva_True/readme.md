# Crear un validador de propiedades que siempre devuelva `True`

En este laboratorio, comprobarás una propiedad específica de cada objeto de un array para ver si siempre tiene un valor `True` o no.

Por ejemplo, se te podría pedir que comprobaras una propiedad de los objetos de un array como el siguiente:

---

```js
[{
    name: "Quincy",
    role: "Founder",
    isBot: false
}, {
    name: "Naomi",
    role: "",
    isBot: false
}, {
    name: "Camperbot",
    role: "Bot",
    isBot: true
}]
```

---

Si te pidieran que comprobaras la propiedad `name`, en los objetos de este array la propiedad `name` tiene los valores `"Quincy"`, `"Naomi"` y `"Camperbot"`, por lo que siempre es un valor verdadero.

Si te pidieran que comprobaras la propiedad `role`, los valores serían `"Founder"`, `""` y `"Bot"`; en este caso, `""` es un valor falso, por lo que los valores no siempre son verdaderos.

---

## Historias de usuario

1. Debes tener una función llamada `truthCheck`.

2. La función `truthCheck` toma dos argumentos: un array de objetos y una cadena que representa el nombre de una propiedad presente en esos objetos.

3. La función debe verificar si la propiedad cuyo nombre coincide con el segundo argumento tiene un valor verdadero en todos los objetos del array, y debe devolver `true` si es así, y `false` en caso contrario.

---

## Resultado

```js
// Crear un validador de propiedades que siempre devuelva True
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true }
  ]
  , "isBot");


```
