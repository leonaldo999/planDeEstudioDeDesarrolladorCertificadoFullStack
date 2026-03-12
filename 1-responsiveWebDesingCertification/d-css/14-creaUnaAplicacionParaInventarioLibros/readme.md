# Crea una aplicación para inventario de libros

## Historias de usuario

1. Debe tener un elemento `h1` con el texto `Book Inventory`.

2. Debe tener un elemento de `table` con columnas llamadas `Title`, `Author`, `Category`, `Status`, y `Rate`.

3. Su tabla debe tener al menos cuatro filas, la primera para los encabezados de columna y el resto rellenada con información sobre los libros.

4. Cada fila de la tabla dentro del cuerpo de la tabla debe tener la clase `read`, `to-read`, o `in-progress`.

5. Los elementos `td` de la columna Estado deben contener un elemento `span` con la `class` de `status` que rodee el texto `Read`, `To Read`, o `In Progress`, dependiendo de la clase de esa fila.

6. Los elementos `td` de la columna `Rate` deben contener un elemento `span` con la clase de `rate` que envuelva tres elementos `span` vacíos.

7. Los elementos `.rate` colocados dentro de las filas `.read` deben tener una clase adicional con el valor `one`, `two` o `three`, dependiendo de la calificación personal. Este valor debe ir después de `rate`.

8. Debes crear tres selectores de atributos para seleccionar los elementos con la clase `read`, `to-read` e `in-progress`, y establecer su propiedad `background-image` para que utilicen un `linear-gradient` de tu elección.

9. Debes establecer la propiedad display de cada elemento `span` en `inline-block`.

10. Debes utilizar un selector de atributos para seleccionar los elementos `span` con la clase `status` que sean descendientes de elementos `tr` con la clase `to-read` y establecer sus propiedades `border` y `background-image`.

11. Debes utilizar un selector de atributos para seleccionar los elementos `span` con la clase `status` que sean descendientes de elementos `tr` con la clase `read` y establecer sus propiedades `border` y `background-image`.

12. Debes utilizar un selector de atributos para seleccionar los elementos `span` con la clase `status` que sean descendientes de elementos `tr` con la clase `in-progress` y establecer sus propiedades de `border` y `background-image`.

13. Debes utilizar un selector de atributos para seleccionar los elementos `span` con la clase `status` y los elementos span con el valor de clase que comience por `rate` y establecer sus propiedades de `height`, `width`, y `padding`.

14. Debe utilizar un selector de atributos para seleccionar los elementos `span` que son hijos directos de elementos `span` con el valor de `class` que comienza por `rate` y establecer sus propiedades de `border`, `border-radius`, `margin`, `height`, `width`, y `background-color`.

15. Debe utilizar un selector de atributos para seleccionar el primer descendiente de los elementos `span` que tienen la palabra `one` como parte de su valor de `class` y establecer su propiedad de `background-image` para utilizar un `linear-gradient`.

16. Debe utilizar un selector de atributos para seleccionar los dos primeros descendientes de los elementos `span` que tengan la palabra `two` como parte de su valor de `class` y establecer su propiedad `background-image` para utilizar un `linear-gradient`.

17. Debe utilizar un selector de atributos para seleccionar los tres elementos `span` que sean descendientes de elementos `span` que tengan la palabra `three` como parte de su valor de `class` y establecer su propiedad `background-image` para utilizar un `linear-gradient`.
