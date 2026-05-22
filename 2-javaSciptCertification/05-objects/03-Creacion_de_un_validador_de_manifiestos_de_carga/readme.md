# Creación de un validador de manifiestos de carga

*En este laboratorio, utilizarás JavaScript para normalizar y validar manifiestos de carga. Un manifiesto de carga es un documento que suele enumerar las mercancías que se transportan (por ejemplo, en barco o en tren) e incluye detalles sobre dichas mercancías.*

Cada manifiesto de carga se representará como un objeto con las siguientes propiedades:

- `containerId`: un entero positivo que identifica el contenedor de carga asociado.
- `destination`: una cadena no vacía (después de eliminar los espacios en blanco) que indica el destino final de la carga.
- `weight`: un número positivo que representa el peso de la carga.
- `unit`: una cadena que describe las unidades de la propiedad de peso de la carga (ya sea `kg` para kilogramos o `lb` para libras).
- `hazmat`: un valor booleano que indica si se requiere el manejo de materiales peligrosos.

*Ejemplo de objeto de manifiesto de carga:*

  ```js
  {
    containerId: 1,
    destination: "Monterey, California, USA",
    weight: 831,
    unit: "lb",
    hazmat: false
  }
  ```

---

## Historias de usuario

1. Debes implementar una función llamada `normalizeUnits` con un parámetro de tipo `manifest`.

    - La función no debe modificar el objeto `manifest` original y siempre debe devolver un nuevo objeto en el que `weight` esté normalizado a kilogramos y la `unit` esté establecida en `"kg"`.

    - Si `weight` del objeto de manifiesto se expresa en libras (`unit: "lb"`), la función debe convertir `weight` a kilogramos utilizando la conversión aproximada, 1 lb = 0,45 kg, y actualizar la unidad en consecuencia.

    - Si `weight` ya se expresa en kilogramos (`unit: "kg"`), `weight` y `unit` deben permanecer sin cambios.

2. Debes implementar una función llamada `validateManifest` con un parámetro `manifest`.

    - La función no debe modificar el objeto `manifest` original y siempre debe devolver un nuevo objeto.

    - Si el manifiesto de entrada es válido (no hay propiedades faltantes ni inválidas), la función debe devolver un objeto vacío.

    - Si el manifiesto de entrada no es válido, la función debe devolver un objeto que contenga entradas para cada propiedad que falte o sea inválida. Las propiedades que falten deben tener el valor `"Missing"` y las propiedades inválidas deben tener el valor `"Invalid"`.

    Ejemplo de valor de retorno en el que al objeto de entrada le falta la propiedad `destination` y tiene una propiedad `weight` inválida:

    ```js
    {
      destination: "Missing",
      weight: "Invalid"
    }
    ```

3. Debes implementar una función llamada `processManifest` con un parámetro `manifest`. La función debe registrar en el registro de consola:

    - Si el objeto `manifest` es válido, `Validation success: ${containerId}` y, a continuación, el peso del manifiesto en kilogramos, `Validation success: ${containerId}`. Utiliza `normalizeUnits()` para esta conversión.

    - Si el objeto de manifiesto no es válido, `Validation error: ${containerId}` y, a continuación, el objeto devuelto al llamar a `validateManifest()` con el objeto de manifiesto.

    > [!Note]
    > cada uno de estos dos casos debe tener dos llamadas a `console.log()`.
