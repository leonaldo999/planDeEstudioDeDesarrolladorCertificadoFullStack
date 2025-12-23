# Trabajando con tablas

En estos vídeos didácticos aprenderá qué son las tablas HTML, cómo crearlas y cuándo utilizarlas.

## ¿Para qué sirven las tablas HTML y para qué no?

Las tablas HTML ya no se utilizan tanto como antes. Pero, como desarrollador frontend, deberías estar familiarizado con ellas. Las tablas son una de las primeras formas que tenían los desarrolladores de mostrar datos en un navegador, allá por la década de 1990.

He aquí un ejemplo de código utilizado para generar una tabla de la Oficina de Estadísticas Laborales de EE.UU.:

- **Codigo ejemplo**

  ```html
  <table id="quickfacts">
    <thead>
      <tr>
        <th colspan="2">Quick Facts: Software Developers, Quality Assurance Analysts, and Testers</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>2023 Median Pay</th>
        <td>
          $130,160 per year
          <br>$62.58 per hour
        </td>
      </tr>
      <tr>
        <th>Typical Entry-Level Education</th>
        <td>Bachelor's degree</td>
      </tr>
      <tr>
        <th>Work Experience in a Related Occupation</th>
        <td>None</td>
      </tr>
      <tr>
        <th>On-the-job Training</th>
        <td>None</td>
      </tr>
      <tr>
        <th>Number of Jobs, 2022</th>
        <td>1,795,300</td>
      </tr>
      <tr>
        <th>Job Outlook, 2022-32</th>
        <td>25% (Much faster than average)</td>
      </tr>
      <tr>
        <th>Employment Change, 2022-32</th>
        <td>451,200</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>If this table had a footer it would be here.</th>
      </tr>
    </tfoot>
  </table>
  ```

Como puedes ver, hay un elemento de `table` principal con un `id` establecido a `quickfacts`. Dentro de ella, la tabla tiene un elemento cabeza de tabla, `thead`, un elemento cuerpo de tabla, `tbody`, y un elemento pie de tabla, `tfoot`.

Los elementos cabeza, cuerpo y pie de tabla pueden contener cada uno un número determinado de filas de tabla, `tr`. Y cada fila de tabla puede contener una cabecera de tabla `th` que etiquete los datos de esa fila. También puede contener cierto número de celdas de datos individuales, llamadas datos de tabla, `td`.

Son muchos elementos HTML. Pero no te sientas intimidado: siguen una jerarquía sencilla.

Aquí está la tabla más simple que podemos crear que incluye todos estos elementos:

- **Codigo ejemplo**

  ```html
  <table>
    <thead>
      <tr>
        <th>The title of this table</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>First Row</th>
        <td>
          First Data Cell
        </td>
      </tr>
      <tr>
        <th>Second Row</th>
        <td>
          Second Data Cell
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>The footer of this table, which might contain date of publication, author credits, or other meta information.</th>
      </tr>
    </tfoot>
  </table>
  ```

Como puede ver, los datos en sí siempre están dentro de un `tr`, y dentro de ese elemento `tr` hay un elemento `th` con un encabezado y un elemento `td` con datos.

Algunos sitios web optan por utilizar `div`s para construir sus propias tablas en lugar de utilizar el elemento `table`, más apropiado.

Aunque es posible mostrar datos tabulares utilizando elementos `div` genéricos, sigue siendo mejor utilizar el elemento `table`.

Hace muchos años, los desarrolladores podían utilizar una `table` para colocar elementos que no fueran datos en una página web. Esto nunca se consideró una buena práctica. Pero es posible que encuentres algunas bases de código en las que todavía se utilizan tablas de este modo.

Hoy en día, los desarrolladores utilizan CSS flexbox y grid para maquetar sus diseños. freeCodeCamp tratará estas herramientas en profundidad más adelante.

Por ahora, utiliza las tablas HTML para su propósito original: mostrar datos tabulares.

## Questionario

- **¿En una tabla HTML, ¿qué elementos están contenidos dentro de un elemento tr?**

  - a) `thead` and `tfoot`.
  - b) `td` and `th`.
  - c) `td` and `th`. // correcto
  - d) `td` and `th`.

- **¿Cuáles de las siguientes son las secciones principales de una tabla HTML?**

  - a) `table`, `div`, and `span`.
  - b) `table`, `div`, and `span`.
  - c) `thead`, `tbody`, and `tfoot`. // correcto
  - d) `article`, `aside`, and `nav`.

- **¿Cuál es el principal uso recomendado de las tablas HTML en la actualidad?**

  - a) Creación de diseños de página.
  - b) Visualización de datos tabulares. // correcto
  - c) Estilo con CSS.
  - d)  Incrustación de imágenes.
