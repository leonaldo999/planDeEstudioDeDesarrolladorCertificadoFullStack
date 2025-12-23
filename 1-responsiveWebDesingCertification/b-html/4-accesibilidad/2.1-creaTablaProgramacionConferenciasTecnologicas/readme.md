# Creación de una tabla de programación de conferencias tecnológicas

En este taller, aprenderás a crear elementos de tabla accesibles mediante la elaboración de un programa para una conferencia tecnológica

---

## Paso 1

> Comienza añadiendo un elemento `h1` con el texto `Tech Conference 2025 Schedule`.

- **Codigo**
  
  ```html
  <h1>Tech Conference 2025 Schedule</h1>
  ```

---

## Paso 2

Ahora es el momento de empezar a crear la tabla.

> Empieza añadiendo un elemento de `table` debajo del elemento `h1`. Dentro del elemento de `table`, añade un elemento de `caption` con el texto `Schedule by Track and Time`.

- **Codigo**
  
  ```html
  <h1>Tech Conference 2025 Schedule</h1>
  <!-- Usuario -->
  <table>
    <caption>Schedule by Track and Time</caption>
  </table>
  <!-- Usuario -->
  ```

---

## Paso 3

El siguiente paso es agregar el encabezado de la tabla.

> Comience agregando un elemento `thead` debajo del elemento `caption`. Dentro del `thead`, agregue un elemento `tr`.

- **Codigo**
  
  ```html
  <h1>Tech Conference 2025 Schedule</h1>
  <table>
    <caption>Schedule by Track and Time</caption>
    <!-- Usuario -->
    <thead>
      <tr></tr>
    </thead>
    <!-- Usuario -->
  </table>
  ```

---

## Paso 4

> Dentro del elemento `tr`, agregue cuatro elementos `th`. El primer elemento `th` debe contener el texto `Time`, el segundo debe contener el texto `Track A`, el tercero debe contener el texto `Track B` y el cuarto debe contener el texto `Track C`.

- **Codigo**
  
  ```html
  <h1>Tech Conference 2025 Schedule</h1>
  <table>
    <caption>Schedule by Track and Time</caption>
    <thead>
      <tr>
        <!-- Usuario -->
        <th>Time</th>
        <th>Track A</th>
        <th>Track B</th>
        <th>Track C</th>
        <!-- Usuario -->
      </tr>
    </thead>
  </table>
  ```

---

## Paso 5

El atributo scope se utiliza para especificar si una celda de encabezado es un encabezado para una fila, columna o grupo de filas o columnas. A continuación se muestra un ejemplo:

- **Codigo Ejemplo**
  
  ```html
  <th scope="col">Example Header</th>
  ```

Esto ayuda a los lectores de pantalla a comprender la relación entre las celdas de encabezado y las celdas de datos.

> Para todos los elementos `th`, agregue un atributo `scope` con el valor `col`.

- **Codigo**
  
  ```html
  <h1>Tech Conference 2025 Schedule</h1>
  <table>
    <caption>Schedule by Track and Time</caption>
    <thead>
      <tr>
        <!-- Usuario -->
        <th scope="col">Time</th>
        <th scope="col">Track A</th>
        <th scope="col">Track B</th>
        <th scope="col">Track C</th>
        <!-- Usuario -->
      </tr>
    </thead>
  </table>
  ```

---

## Paso 6

En los siguientes pasos, creará el cuerpo de la tabla.

> Comience añadiendo un elemento `tbody` debajo del elemento `thead`. A continuación, dentro del `tbody`, añada un elemento `tr`.

- **Codigo**
  
  ```html
  <h1>Tech Conference 2025 Schedule</h1>
  <table>
    <caption>Schedule by Track and Time</caption>
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Track A</th>
        <th scope="col">Track B</th>
        <th scope="col">Track C</th>
      </tr>
    </thead>
    <!-- Usuario -->
    <tbody>
      <tr></tr>
    </tbody>
    <!-- Usuario -->
  </table>
  ```

---

## Paso 7

> Dentro del elemento `tr`, agrega un elemento `th` con el texto `9:00 AM`. A continuación, debajo de ese elemento `th`, agrega tres elementos `td` con el texto `Keynote: Tech Future`, `Intro to Web Dev` y `UX for All`.

- **Codigo**
  
  ```html
  <h1>Tech Conference 2025 Schedule</h1>
  <table>
    <caption>Schedule by Track and Time</caption>
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Track A</th>
        <th scope="col">Track B</th>
        <th scope="col">Track C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <!-- Usuario -->
        <th>9:00 AM</th>
        <td>Keynote: Tech Future</td>
        <td>Intro to Web Dev</td>
        <td>UX for All</td>
        <!-- Usuario -->
      </tr>
    </tbody>
  </table>
  ```

---

## Paso 8

Otro valor para el atributo `scope` es `row`, que indica que una celda de encabezado es un encabezado para toda su fila.

> Dentro de su elemento `th`, agregue un atributo `scope` con un valor de `row`.

- **Codigo**
  
  ```html
  <h1>Tech Conference 2025 Schedule</h1>
  <table>
    <caption>Schedule by Track and Time</caption>
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Track A</th>
        <th scope="col">Track B</th>
        <th scope="col">Track C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <!-- Usuario -->
        <th scope="row">9:00 AM</th>
        <!-- Usuario -->
        <td>Keynote: Tech Future</td>
        <td>Intro to Web Dev</td>
        <td>UX for All</td>
      </tr>
    </tbody>
  </table>
  ```

---

## Paso 9

Ahora es el momento de añadir otra fila a la tabla.

> Empieza añadiendo otro elemento `tr`. Dentro de ese elemento `tr`, añade un elemento `th` con un atributo `scope` establecido en `row` y el contenido de texto `10:00 AM`.
>
> A continuación, añade tres elementos `td` con el siguiente contenido de texto:

- `Accessibility Deep Dive`
- `CSS for Beginners`
- `Inclusive Design Principles`

- **Codigo**
  
  ```html
  <h1>Tech Conference 2025 Schedule</h1>
  <table>
    <caption>Schedule by Track and Time</caption>
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Track A</th>
        <th scope="col">Track B</th>
        <th scope="col">Track C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">9:00 AM</th>
        <td>Keynote: Tech Future</td>
        <td>Intro to Web Dev</td>
        <td>UX for All</td>
      </tr>
      <!-- Usuario -->
      <tr>
        <th scope="row">10:00 AM</th>
        <td>Accessibility Deep Dive</td>
        <td>CSS for Beginners</td>
        <td>Inclusive Design Principles</td>
      </tr>
      <!-- Usuario -->
    </tbody>
  </table>
  ```

---

## Paso 10

> A continuación, agrega una tercera fila a la tabla. Comienza agregando otro elemento `tr`. Dentro de ese elemento `tr`, agrega un elemento `th` con un atributo `scope` establecido en `row` y el contenido de texto `11:00 AM`. Luego, debajo de ese elemento `th`, agrega un elemento `td` con el contenido de texto `Break`.

- **Codigo**
  
  ```html
  <h1>Tech Conference 2025 Schedule</h1>
  <table>
    <caption>Schedule by Track and Time</caption>
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Track A</th>
        <th scope="col">Track B</th>
        <th scope="col">Track C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">9:00 AM</th>
        <td>Keynote: Tech Future</td>
        <td>Intro to Web Dev</td>
        <td>UX for All</td>
      </tr>
      <tr>
        <th scope="row">10:00 AM</th>
        <td>Accessibility Deep Dive</td>
        <td>CSS for Beginners</td>
        <td>Inclusive Design Principles</td>
      </tr>
      <!-- Usuario -->
      <tr>
        <th scope="row">11:00 AM</th>
        <td>Break</td>
      </tr>
      <!-- Usuario -->
    </tbody>
  </table>
  ```

---

## Paso 11

En este momento, el elemento `td` con el contenido de texto `Break` solo abarca una columna. Pero sería bueno que abarcara las tres columnas.

Como recordarás de talleres y lecciones anteriores, puedes usar el atributo `colspan` para hacer que una celda de tabla abarque varias columnas.

- **Codigo Ejemplo**
  
  ```html
  <tr>
    <td colspan="3">Total Points</td>
  </tr>
  ```

> Agregue un atributo `colspan` al elemento `td` y establezca su valor en `3`.

- **Codigo**
  
  ```html
  <h1>Tech Conference 2025 Schedule</h1>
  <table>
    <caption>Schedule by Track and Time</caption>
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Track A</th>
        <th scope="col">Track B</th>
        <th scope="col">Track C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">9:00 AM</th>
        <td>Keynote: Tech Future</td>
        <td>Intro to Web Dev</td>
        <td>UX for All</td>
      </tr>
      <tr>
        <th scope="row">10:00 AM</th>
        <td>Accessibility Deep Dive</td>
        <td>CSS for Beginners</td>
        <td>Inclusive Design Principles</td>
      </tr>
      <tr>
        <th scope="row">11:00 AM</th>
        <!-- Usuario -->
        <td colspan="3">Break</td>
        <!-- Usuario -->
      </tr>
    </tbody>
  </table>
  ```

---

## Paso 12

Ahora es el momento de añadir otra fila a la tabla.

> Empieza añadiendo otro elemento `tr`. Dentro de ese elemento `tr`, añade un elemento `th` con un atributo `scope` establecido en `row` y el contenido de texto `11:30 AM`.
>
> A continuación, añade tres elementos `td` con el siguiente contenido de texto:

- `AR/VR in Education`
- `JavaScript Fundamentals`
- `Design Systems at Scale`

- **Codigo**
  
  ```html
  <h1>Tech Conference 2025 Schedule</h1>
  <table>
    <caption>Schedule by Track and Time</caption>
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Track A</th>
        <th scope="col">Track B</th>
        <th scope="col">Track C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">9:00 AM</th>
        <td>Keynote: Tech Future</td>
        <td>Intro to Web Dev</td>
        <td>UX for All</td>
      </tr>
      <tr>
        <th scope="row">10:00 AM</th>
        <td>Accessibility Deep Dive</td>
        <td>CSS for Beginners</td>
        <td>Inclusive Design Principles</td>
      </tr>
      <tr>
        <th scope="row">11:00 AM</th>
        <td colspan="3">Break</td>
      </tr>
      <!-- Usuario -->
      <tr>
        <th scope="row">11:30 AM</th>
        <td>AR/VR in Education</td>
        <td>JavaScript Fundamentals</td>
        <td>Design Systems at Scale</td>
      </tr>
      <!-- Usuario -->
    </tbody>
  </table>
  ```

---

## Paso 13

> A continuación, agrega una quinta fila a la tabla. Comienza agregando otro elemento `tr`. Dentro de ese elemento `tr`, agrega un elemento `th` con un atributo `scope` establecido en «`row`» y el contenido de texto `12:30 p. m`. Luego, debajo de ese elemento `th`, agrega un elemento `td` con el contenido de texto `Lunch Break`. Tu elemento t`d` también debe tener un atributo `colspan` establecido en `3` para que abarque las tres pistas.

- **Codigo**
  
  ```html
  <h1>Tech Conference 2025 Schedule</h1>
  <table>
    <caption>Schedule by Track and Time</caption>
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Track A</th>
        <th scope="col">Track B</th>
        <th scope="col">Track C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">9:00 AM</th>
        <td>Keynote: Tech Future</td>
        <td>Intro to Web Dev</td>
        <td>UX for All</td>
      </tr>
      <tr>
        <th scope="row">10:00 AM</th>
        <td>Accessibility Deep Dive</td>
        <td>CSS for Beginners</td>
        <td>Inclusive Design Principles</td>
      </tr>
      <tr>
        <th scope="row">11:00 AM</th>
        <td colspan="3">Break</td>
      </tr>
      <tr>
        <th scope="row">11:30 AM</th>
        <td>AR/VR in Education</td>
        <td>JavaScript Fundamentals</td>
        <td>Design Systems at Scale</td>
      </tr>
      <!-- Usuario -->
      <tr>
        <th scope="row">12:30 PM</th>
        <td colspan="3">Lunch Break</td>
      </tr>
      <!-- Usuario -->
    </tbody>
  </table>
  ```

---

## Paso 14

El último paso es agregar una fila más a la tabla.

Comience agregando otro elemento `tr`. Dentro de ese elemento `tr`, agregue un elemento `th` con un atributo `scope` establecido en `row` y el contenido de texto `2:00 PM`.

A continuación, agregue tres elementos `td` con el siguiente contenido de texto:

- `Voice UI Workshop`
- `Git & GitHub Essentials`
- `Color & Contrast in UI`

- **Codigo**
  
  ```html
  <h1>Tech Conference 2025 Schedule</h1>
  <table>
    <caption>Schedule by Track and Time</caption>
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Track A</th>
        <th scope="col">Track B</th>
        <th scope="col">Track C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">9:00 AM</th>
        <td>Keynote: Tech Future</td>
        <td>Intro to Web Dev</td>
        <td>UX for All</td>
      </tr>
      <tr>
        <th scope="row">10:00 AM</th>
        <td>Accessibility Deep Dive</td>
        <td>CSS for Beginners</td>
        <td>Inclusive Design Principles</td>
      </tr>
      <tr>
        <th scope="row">11:00 AM</th>
        <td colspan="3">Break</td>
      </tr>
      <tr>
        <th scope="row">11:30 AM</th>
        <td>AR/VR in Education</td>
        <td>JavaScript Fundamentals</td>
        <td>Design Systems at Scale</td>
      </tr>
      <tr>
        <th scope="row">12:30 PM</th>
        <td colspan="3">Lunch Break</td>
      </tr>
      <!-- Usuario -->
      <tr>
        <th scope="row">2:00 PM</th>
        <td>Voice UI Workshop</td>
        <td>Git & GitHub Essentials</td>
        <td>Color & Contrast in UI</td>
      </tr>
      <!-- Usuario -->
    </tbody>
  </table>
  ```

---

**¡Con ese último conjunto de cambios, tu tabla ya está completa!**
