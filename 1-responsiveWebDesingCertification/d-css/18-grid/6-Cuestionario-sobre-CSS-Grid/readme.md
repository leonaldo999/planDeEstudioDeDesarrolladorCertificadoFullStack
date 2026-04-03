# Cuestionario sobre CSS Grid

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

1. **¿Cómo se posiciona un elemento de _grid_ dentro de un diseño definido por `grid-template-areas`?**

   - [ ] a) Utilizando la propiedad `grid-area` y especificando las posiciones de inicio y fin tanto de las filas como de las columnas.
   - [x] b) Asignando el área con nombre a la propiedad `grid-area` del elemento. // ❎
   - [ ] c) Definiendo directamente el tamaño y la ubicación del elemento dentro de la cuadrícula mediante `grid-template-rows` y `grid-template-columns`.
   - [ ] d) Estableciendo tanto `grid-area` como coordenadas explícitas en píxeles.

2. **¿Qué controla la propiedad `grid-auto-rows`?**

   - [ ] a) El espaciado entre filas.
   - [x] b) El tamaño de las filas creadas implícitamente. // ❎
   - [ ] c) El ancho máximo de las columnas de la cuadrícula.
   - [ ] d) La altura de las filas definidas explícitamente.

3. **¿Qué propiedad usarías para que un elemento del _grid_ ocupe varias filas?**
  
   - [x] a) `grid-row` // ❎
   - [ ] b) `grid-row-span`
   - [ ] c) `span-rows`
   - [ ] d) `row-span`

4. **¿Qué define un _grid_ explícito?**
  
   - [x] a) Las pistas establecidas explícitamente mediante `grid-template-columns` o `grid-template-rows`. // ❎
   - [ ] b) Las pistas añadidas con `grid-auto-flow`.
   - [ ] c) Las pistas creadas automáticamente para adaptarse al contenido.
   - [ ] d) Las pistas definidas por la unidad `fr`.

5. **¿Qué valor de `grid-auto-flow` haría que los nuevos elementos ocuparan primero las columnas?**

   - [ ] a) `vertical`
   - [x] b) `column` // ❎
   - [ ] c) `row dense`
   - [ ] d) `row`

6. **¿Cuál es la finalidad de `grid-template-areas`?**
  
   - [x] a) Asignar visualmente elementos a áreas de cuadrícula con nombre. // ❎
   - [ ] b) Reemplazar la unidad `fr`.
   - [ ] c) Generar automáticamente pistas implícitas.
   - [ ] d) Establecer valores de `z-index`.

7. **¿Cómo se puede hacer para que un elemento de la cuadrícula comience en la línea de la columna 2 y termine en la línea de la columna 4?**
  
   - [ ] a) `"grid-column: 2 / span 4;`
   - [x] b) `grid-column: 2 / 4;` // ❎
   - [ ] c) `grid-column: start 2 / end 4;`
   - [ ] d) `grid-column: from 2 to 4;`

8. **¿Cuál es el efecto de `grid-template-columns: 1fr 2fr 1fr`?**

   - [ ] a) Hace que la columna del medio sea tres veces más ancha que las demás.
   - [ ] b) Crea tres columnas de igual ancho.
   - [ ] c) Obliga a que todas las columnas tengan exactamente 1fr de ancho.
   - [x] d) Crea tres columnas en las que la del medio es el doble de ancha que las laterales. // ❎

9. **¿Cómo se crearía un _grid_ con tres columnas iguales y un espacio de `20px` entre ellas?**

   - [x] a) // ❎
          ```css
          .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          ```
   - [ ] b)
          ```css
          .container {
            display: grid;
            grid-template: repeat(3, 1fr) / 20px;
          }
          ```
   - [ ] c)
          ```css
          .container {
            display: grid;
            grid-template-columns: 20px 1fr 1fr 1fr;
          }
          ```
   - [ ] d)
          ```css
          .container {
            display: grid;
            grid: 1fr 1fr 1fr / gap 20px;
          }
          ```

10. **Qué genera la expresión `repeat(3, minmax(100px, 1fr))`?**

    - [ ] a) Tres columnas fijas de `100px`.
    - [ ] b) Tres filas con una altura máxima de `1fr`.
    - [x] c) Tres columnas que se amplían proporcionalmente, pero que no se reducen por debajo de `100px`. // ❎
    - [ ] d) Tres columnas que no pueden reducirse por debajo de `100px`.

11. **¿Cuál de las siguientes afirmaciones sobre las _grid_ implícitas es cierta?**

    - [ ] a) Las pistas implícitas solo se pueden crear utilizando la propiedad `grid-auto-flow`.
    - [ ] b) Las cuadrículas implícitas ignoran la propiedad `gap`.
    - [ ] c) Las pistas implícitas deben definirse con `grid-template-areas`.
    - [x] d) Las pistas implícitas se crean cuando el contenido no cabe en las pistas explícitas. // ❎

12. **¿Para qué sirve la propiedad `place-items` en CSS Grid?**

    - [ ] a) Ajusta el orden de los elementos de la cuadrícula dentro del contenedor.
    - [ ] b) Establece automáticamente el tamaño de los elementos de la cuadrícula en función del espacio disponible.
    - [x] c) Es una forma abreviada de alinear los elementos de la cuadrícula tanto en el eje de bloques como en el de línea. // ❎
    - [ ] d) Controla las definiciones de columnas y filas de la plantilla de cuadrícula.

13. **¿Qué hace este CSS?**

    ```css
    .container {
       grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
     }
    ```

    - [ ] a) Crea un máximo de una columna por cada `150px` de ancho disponible.
    - [x] b) Crea columnas flexibles de al menos `150px` que se contraen cuando el espacio es limitado. // ❎
    - [ ] c) Crea columnas con un ancho exacto de 1fr, independientemente del contenido.
    - [ ] d) Crea columnas fijas de `150px` que desbordan el contenedor.

14. **¿Cómo se pueden crear diseños de _grid_ asimétricos?**

    - [ ] a) Mezclando diferentes unidades de longitud en `grid-template-columns`.
    - [ ] b) Utilizando únicamente unidades `fr`.
    - [x] c) Definiendo diferentes tamaños para cada pista. // ❎
    - [ ] d) Estableciendo `grid-asymmetric: true`.

15. **¿Qué efecto tiene `grid-column-start: 2` en un elemento del _grid_?**

    - [ ] a) Lo posiciona comenzando en la segunda línea de la cuadrícula vertical.
    - [ ] b) Lo desplaza 2 píxeles.
    - [ ] c) Hace que ocupe 2 columnas.
    - [x] d) Hace que comience en la segunda línea de columnas. // ❎

16. **¿Qué propiedad utilizarías para controlar el comportamiento del desbordamiento en las pistas de la cuadrícula?**

    - [ ] a) `track-sizing`
    - [ ] b) `grid-overflow`
    - [x] c) `minmax()` // ❎
    - [ ] d) `fit-content`

17. **¿Cuál será el resultado del siguiente código?**

    ```css
    .container {
      display: grid;
      grid-template-columns: 100px 1fr 2fr;
      grid-template-rows: auto 150px;
      gap: 10px;
    }
    ```

    - [x] a) El contenedor tendrá tres columnas: de `100px`, `1fr` y `2fr` de ancho, y dos filas: una de altura automática y otra de `150px` de altura. // ❎
    - [ ] b) El contenedor tendrá tres columnas de igual ancho y dos filas de `150px` de altura cada una.
    - [ ] c) El contenedor tendrá dos filas, cada una con una altura de `1fr`.
    - [ ] d) El contenedor tendrá tres columnas, todas con `100px` de ancho, y dos filas con `150px` de altura.

18. **¿Cómo se puede hacer para que un elemento del `grid` ocupe todas las filas disponibles?**

    - [ ] a) `grid-row: full;`
    - [x] b) `grid-row: 1 / -1;` // ❎
    - [ ] c) `grid-row: auto / -1;`
    - [ ] d) `grid-row: 1 / span infinite;`

19. **¿Qué propiedad controla la alineación de los elementos de la cuadrícula a lo largo del eje de bloque?**

    - [x] a) `align-items` // ❎
    - [ ] b) `aling-content`
    - [ ] c) `justify-items`
    - [ ] d) `place-items`

20. **¿Cómo se puede garantizar que un elemento de la cuadrícula permanezca en la primera columna independientemente de los cambios que se produzcan en la _grid_?**

    - [ ] a) `grid-column: fixed;`
    - [ ] b) `grid-column: first;`
    - [x] c) `grid-column: 1;` // ❎
    - [ ] d) `grid-lock: column;`
