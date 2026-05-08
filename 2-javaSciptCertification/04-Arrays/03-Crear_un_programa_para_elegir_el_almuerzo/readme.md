# Crear un programa para elegir el almuerzo

_En este ejercicio práctico, crearás un programa que ayude a gestionar las opciones de almuerzo. Trabajarás con un array de almuerzos, añadirás y eliminarás elementos del array, y seleccionarás al azar una opción de almuerzo._

---

## Historias de usuario

1. Debes crear una variable `lunches` y asignarle un array vacío que se utilizará para almacenar los platos del almuerzo.

2. Debes crear una función `addLunchToEnd` que tome un array como primer argumento y un string como segundo argumento. La función debe:
   - Añadir el string al final del array.
   - Registrar en la consola el string `[Lunch Item] added to the end of the lunch menu.`, donde `[Lunch Item]` es el string pasado a la función.
   - Devolver el array actualizado.

3. Debes crear una función `addLunchToStart` que tome un array como primer argumento y un string como segundo argumento. La función debe:
   - Agregar el string al principio del array.
   - Registrar en la consola el string `[Lunch Item] added to the start of the lunch menu.`, donde `[Lunch Item]` es el string pasado a la función.
   - Devolver el array actualizado.

4. Debes crear una función `removeLastLunch` que tome un array como argumento. La función debe:
   - Eliminar el último elemento del array.
   - Si la eliminación se realiza correctamente, registra el string `[Lunch Item] removed from the end of the lunch menu.` en la consola, donde `[Lunch Item]` es el elemento eliminado del array.
   - Si el array está vacío, registra el string `"No lunches to remove."` en la consola.
   - Devuelve la array actualizado.

5. Debes crear una función `removeFirstLunch` que tome un array como argumento. La función debe:
   - Eliminar el primer elemento del array.
   - Si la eliminación se realiza correctamente, registra la string `[Lunch Item] removed from the start of the lunch menu.` en la consola, donde `[Lunch Item]` es el elemento eliminado del array.
   - Si el array está vacío, registra la string `"No lunches to remove."` en la consola.
   - Devuelve el array actualizado.

6. Debes crear una función `getRandomLunch` que tome un array como argumento. La función debe:
   - Seleccionar un elemento al azar del array.
   - Si tiene éxito, registra el string `Randomly selected lunch: [Lunch Item]` en la consola, donde `[Lunch Item]` es un elemento aleatorio del array.
   - Si el array está vacío, registra la string `"No lunches available."` en la consola.

7. Debes crear una función `showLunchMenu` que tome un array como argumento y:
   - Si hay elementos en el array, registre el string `Menu items: [Lunch Item], [Lunch Item]...` en la consola, donde cada `[Lunch Item]` es uno de los elementos del array, en orden.
   - Si el array está vacío, registre la string `"The menu is empty."` en la consola.
