# Crea un secuenciador de semáforos

En este laboratorio, simularás ciclos de semáforos configurables y registrarás anomalías.

Trabajarás con objetos de configuración que describen las fases de un semáforo. Cada objeto de configuración tiene las siguientes propiedades:

- `fault`: un indicador booleano que activa la terminación anticipada cuando es `true`.
- `phases`: un array de objetos de fase.

Cada objeto de fase dentro de `phases` tiene las siguientes propiedades:

- `color`: una cadena que representa el color de la luz (`"green"`, `"yellow"`, o `"red"`).
- `duration`: un entero positivo que representa la duración de la fase en segundos.

Puedes consultar los objetos `config1`, `config2`, `config3`, y `config4` proporcionados como ejemplos de posibles objetos de configuración.

>[!NOTE]
> No agregues ninguna instrucción `console.log()` adicional, ya que podrían hacer que las pruebas fallen.

---

## Historias de usuario

1. Debes tener una función llamada `runSequence` con dos parámetros: `config` y `cycles`, donde `config` representa un objeto de configuración y `cycles` representa el número máximo de veces que la secuencia puede ejecutarse antes de detenerse.

2. Debes implementar `runSequence(config, cycles)` utilizando un bucle `for` o `while` para recorrer cada fase a lo largo del número de ciclos dado.

3. La función `runSequence` debe:

    - Registrar `No phases found` y regresar inmediatamente si `config.phases` está vacío.
    - Registrar `Faulted phase!` y detener la simulación anticipadamente si `config.fault` está establecido en `true`.
    - Mostrar el mensaje `Invalid phase detected` si la `duration <= 0`.
    - Mostrar el mensaje `Switching to [color] for [duration] s` para cada fase válida. Reemplaza `[color]` y `[duración]` por las propiedades correspondientes del objeto de fase.
    - Por ejemplo, `runSequence(config1, 1)` debería mostrar:

    ```tx
    Switching to green for 5 s
    Switching to yellow for 2 s
    Switching to red for 4 s
    ```

4. Debes tener una función llamada `generateTimeline` con dos parámetros: `config` y `cycles`.

5. La función `generateTimeline` debe:

    - Registrar en un array el tiempo acumulado transcurrido después de cada fase a lo largo de los ciclos, sumando la `duration` de cada fase al total acumulado a medida que se itera.
    - Procesar todas las fases con fallas e inválidas sin validación, incluso si `config.fault` es `true` o si la `duration <= 0`.
    - Retorna el array de marcas de tiempo acumuladas.
    - Por ejemplo, `generateTimeline(config1, 1)` debe devolver el array `[5, 7, 11]`.

---

## Solución

```js
```
