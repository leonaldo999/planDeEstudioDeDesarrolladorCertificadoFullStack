# Crear una `table` de exámenes finales

En este taller, practicarás el trabajo con tablas HTML construyendo una tabla de exámenes finales.

## Paso 1

En este taller, practicarás el trabajo con tablas HTML construyendo una tabla de examen final para un grupo de estudiantes.

Para empezar el proyecto, añade el <!DOCTYPE html>, y un elemento `html` con un atributo `lang` de `en`.

Dentro del elemento `html`, añada un elemento `head`.

---

- **Codigo**

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    
  </head>
  
  </html>
  ```

## Paso 2

Dentro de tu elemento `head`, anida un `meta` elemento con el atributo charset configurado con el valor `"UTF-8"`.

Debajo de ese elemento `meta`, añada un elemento `title`.

El texto del elemento `title` debe ser `Calculus Final Exams Table`.

Después de completar el elemento `head`, puedes añadir el elemento `body`.

---

- **Codigo**

  ```html
  <head>
    <meta charset="UTF-8">
    <title>Calculus Final Exams Table</title>
  </head>
  
  <body>
  
  </body>
  ```

## Paso 3

En las clases anteriores, aprendiste a trabajar con el elemento `table` para representar datos tabulares.

Dentro de su elemento `body`, anide un elemento `table`.

---

- **Codigo**

  ```html
  <table></table>
  ```

## Paso 4

Para añadir un título a una tabla, puede utilizar el elemento título de tabla.

He aquí un ejemplo de uso del elemento caption:

- **Codigo Ejem**

  ```html
  <table>
    <caption>Football Scores</caption>
  </table>
  ```

Dentro del elemento `table`, anida un elemento `caption` con el texto `Calculus Final Exam Grades`.

---

- **Codigo**

  ```html
  <table>
    <caption>Calculus Final Exam Grades</caption>
  </table>
  ```

## Paso 5

Para la primera sección de la tabla, querrá agrupar el contenido de la cabecera que representa las etiquetas de columna para el nombre, apellido y nota del examen final del estudiante.

El elemento de encabezado de tabla, `thead`, se utiliza para agrupar el contenido del encabezado en una tabla.

A continuación se muestra un ejemplo en el que se utiliza el elemento `thead`:

- **Codigo Ejem**

  ```html
  <table>
    <thead>
      <!-- header content goes here -->
    </thead>
  </table>
  ```

Debajo de su elemento `caption`, añada un elemento de encabezado de tabla.

---

- **Codigo**

  ```html
  <thead></thead>
  ```

## Paso 6

El elemento de cabecera de tabla consta de un elemento de fila de tabla, `tr`, que contiene los elementos de celda de cabecera de tabla, `th`.

A continuación se muestra un ejemplo en el que se utilizan los elementos `tr` y `th` para una tabla de deportes:

- **Codigo Ejem**

  ```html
  <table>
    <caption>Football Scores</caption>
    <thead>
      <tr>
        <th>Team</th>
        <th>Wins</th>
        <th>Losses</th>
      </tr>
    </thead>
  </table>
  ```

Dentro de su elemento `thead`, añada un elemento `tr`.

Dentro del elemento `tr`, añada tres elementos `th`.

El primer elemento `th` debe contener el texto `Last Name`. El segundo elemento `th` debe contener el texto `First Name`. El tercer elemento `th` debe contener el texto `Grade`.

---

- **Codigo**

  ```html
  <thead>
    <tr>
      <th>Last Name</th>
      <th>First Name</th>
      <th>Grade</th>
    </tr>
  </thead>
  ```

## Paso 7

Ahora que ha completado la sección head, es el momento de añadir el cuerpo de la tabla, `tbody`. El cuerpo de la tabla representará todos los nombres de los estudiantes y sus calificaciones.

Añada un elemento table body a su tabla.

- **Codigo**

  ```html
  <tbody></tbody>
  ```

## Paso 8

Para añadir datos de los alumnos a la tabla, necesitará utilizar fila de tabla y los elementos de datos tabla.

El elemento de datos de tabla, `td`, se utiliza para crear una celda en la tabla.

A continuación se muestra un ejemplo de uso del elemento `td` para una tabla de jugadores deportivos:

- **Codigo Ejem**

  ```html
  <tr>
    <td>1</td>
    <td>John Doe</td>
    <td>USA</td>
  </tr>
  ```

Dentro del cuerpo de la tabla, añada un elemento de fila de tabla, `tr`, con tres elementos de datos de tabla, `td`.

El primer elemento de datos de tabla debe contener el apellido `Davis`.

El segundo elemento de datos de tabla debe contener el nombre de `Alex`.

El tercer elemento de datos de tabla debe contener la calificación `54`.

---

- **Codigo**

  ```html
  <tr>
    <td>Davis</td>
    <td>Alex</td>
    <td>54</td>
  </tr>
  ```

## Paso 9

Ahora es el momento de añadir dos estudiantes más a la tabla.

Siguiendo el mismo patrón que en el paso anterior, añada una segunda fila a la tabla de estudiantes. Utilice los siguientes datos para los elementos de datos de la tabla:

- Apellido: `Doe`
- Nombre: `Samantha`
- Grado: `92`

Para la tercera fila de la tabla de estudiantes, utilice los siguientes datos para los elementos de datos de la tabla:

- Apellido: `Rodriguez`
- Nombre: `Marcus`
- Grado: `88`

---

- **Codigo**

  ```html
  <tr>
    <td>Doe</td>
    <td>Samantha</td>
    <td>92</td>
  </tr>
  <tr>
    <td>Rodriguez</td>
    <td>Marcus</td>
    <td>88</td>
  </tr>
  ```

## Paso 10

Ahora es el momento de añadir dos estudiantes más a la tabla.

Siguiendo el mismo patrón que en los pasos anteriores, añada una cuarta fila a la tabla de alumnos. Utilice los siguientes datos para los elementos de datos de la tabla:

- Apellido: `Thompson`
- Nombre: `Jane`
- Grado: `77`

Para la quinta fila de la tabla de estudiantes, utilice los siguientes datos para los elementos de datos de la tabla:

- Apellido: `Williams`
- Nombre: `Natalie`
- Grado: `83`

---

- **Codigo**

  ```html
  <tr>
    <td>Thompson</td>
    <td>Jane</td>
    <td>77</td>
  </tr>
  <tr>
    <td>Williams</td>
    <td>Natalie</td>
    <td>83</td>
  </tr>
  ```

## Paso 11

La última sección a añadir a la tabla sería el elemento pie de tabla, `tfoot`. El elemento pie de tabla se utilizará para mostrar la nota media de todos los estudiantes de la tabla.

Añada un elemento `tfoot` a la tabla.

Dentro del elemento `tfoot`, añade un elemento `tr`.

Dentro del elemento `tr`, añada dos elementos `td`.

El primer elemento `td` debe contener el texto `Average Grade`. El segundo elemento `td` debe contener el texto `78.8`.

---

- **Codigo**

  ```html
  <tfoot>
    <tr>
      <td>Average Grade</td>
      <td>78.8</td>
    </tr>
  </tfoot>
  ```

## Paso 12

Su tabla está casi completa pero hay una última cosa que añadir.

Estaría bien que el elemento `td` utilizado para la `Average Grade` abarcara dos columnas en lugar de sólo una.

Para ello, puede utilizar el atributo colspan en el elemento `td`.

El atributo `colspan` especifica el número de columnas que debe abarcar una celda.

A continuación se muestra un ejemplo de uso del atributo `colspan` para una tabla de deportes:

Traducción realizada con la versión gratuita del traductor DeepL.com

- **Codigo Ejem**

  ```html
  <tr>
    <td colspan="3">Total Points</td>
  </tr>
  ```

Dentro de la etiqueta `td` de apertura, añada el atributo `colspan` y ajústelo a `"2"`.

---

- **Codigo**

  ```html
  <td colspan="2">Average Grade</td>
  <td>78.8</td>
  ```

*Y con ese cambio, ¡tu Tabla=`table` está completa!*
