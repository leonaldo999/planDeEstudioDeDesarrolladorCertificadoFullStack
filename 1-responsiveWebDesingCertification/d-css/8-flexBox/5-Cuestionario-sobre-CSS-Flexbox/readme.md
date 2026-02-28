# Cuestionario sobre CSS Flexbox

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

---

1. **¿Cuál es el propósito de un modelo de diseño unidimensional como Flexbox?**
  
   - [ ] a) Controlar el orden de apilamiento de los elementos posicionados utilizando el `z-index`.
   - [x] b) Diseñar elementos a lo largo de una sola línea o eje, ya sea en forma de fila o columna. // ❎
   - [ ] c) Crear transformaciones 3D y animaciones complejas en los elementos de la página.
   - [ ] d) Manejar el diseño en dos dimensiones, tanto filas como columnas al mismo tiempo.

2. **¿Qué propiedad CSS alineará todos los elementos flexibles al lado derecho del elemento .container?**

    ```css
    .container {
      display: flex;
      flex-direction: row;
    }
    ```

   - [ ] a) `justify-content: space-between;`
   - [ ] b) `align-items: flex-end;`
   - [ ] c) `justify-content: flex-start;`
   - [x] d) `justify-content: flex-end;` // ❎

3. **¿Cuáles son los dos ejes que definen la dirección de la disposición de los elementos en el modelo Flex?**
  
   - [ ] a) El eje principal y el eje secundario.
   - [ ] b) El eje x y el eje y.
   - [x] c) El eje principal y el eje transversal. // ❎
   - [ ] d) l eje horizontal y el eje vertical.

4. **¿Cuál de las siguientes reglas CSS organizará los elementos en una columna vecssrtical y también los centrará horizontalmente dentro de su contenedor?**
  
   - [ ] a)
           ```css
           .container {
             display: flex;
             flex-direction: row;
             align-items: center;
           }
           ```
   - [ ] b)
           ```css
           .container {
             display: flex;
             flex-direction: column;
             justify-content: center;
           }
           ```
   - [x] c) // ❎
           ```css
           .container {
             display: flex;
             flex-direction: column;
             align-items: center;
           }
           ```
   - [ ] d)
           ```css
           .container {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
           ```

5. **¿Cuál es el objetivo principal de la propiedad `flex-wrap`?**
  
   - [ ] a) Establece la dirección en la que se colocan los elementos flexibles en el contenedor flexible.
   - [ ] b) Alinea los elementos flexibles a lo largo del eje principal del contenedor.
   - [x] c) Determina si los elementos flexibles deben ajustarse a nuevas líneas para adaptarse al espacio disponible. // ❎
   - [ ] d) Alinea los elementos flexibles a lo largo del eje transversal del contenedor.

6. **¿Cuál es el comportamiento predeterminado de la declaración `flex-wrap: nowrap;`?**
  
   - [ ] a) Obliga a los elementos flexibles a pasar a una nueva línea si son demasiado anchos para el contenedor.
   - [x] b) Obliga a los elementos flexibles a permanecer en una sola línea, incluso si desbordan el contenedor. // ❎
   - [ ] c) Evita que el contenedor flexible sea más grande que su elemento padre.
   - [ ] d) Pasa los elementos a una nueva línea, pero en orden inverso.

7. **¿Qué propiedad CSS es una forma abreviada para establecer las propiedades `flex-direction` y `flex-wrap` a la vez?**
  
   - [x] a) `flex-flow` // ❎
   - [ ] b) `flex-align`
   - [ ] c) `flex-container`
   - [ ] d) `flex-box`

8. **¿Cuál es el efecto de establecer `flex-direction: column-reverse;` en un contenedor flexible?**
  
   - [ ] a) Invierte los elementos de una fila, pero los mantiene en una sola línea.
   - [ ] b) Ordena los elementos verticalmente de arriba abajo.
   - [ ] c) Ordena los elementos horizontalmente de derecha a izquierda.
   - [x] d) Ordena los elementos verticalmente en orden inverso, de abajo arriba. // ❎

9. **¿Qué fragmento de CSS organiza correctamente los elementos flexibles en una columna vertical y permite que se ajusten a una nueva columna si sobrepasan la altura del contenedor?**
  
   - [x] a)  // ❎
          ```css
          .container {
            display: flex;
            flex-flow: column wrap;
          }
          ```
   - [ ] b)
          ```css
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          ```
   - [ ] c)
          ```css
          .container {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
          }
          ```
   - [ ] d)
          ```css
          container {
            display: flex;
            flex-flow: row wrap;
          }
          ```

10. **¿Qué valor de `justify-content` alinea todos los elementos flexibles con el extremo del eje principal del contenedor?**

    - [x] a) `justify-content: flex-end;` // ❎
    - [ ] b) `justify-content: center;`
    - [ ] c) `justify-content: flex-start;`
    - [ ] d) `justify-content: end;`

11. **¿Cuál es el efecto de la siguiente regla CSS en los elementos flexibles?**

    ```css
    .container {
      flex-flow: row nowrap;
    }
    ```

    - [ ] a) Los elementos se organizan en una fila y se ajustarán a una nueva fila.
    - [ ] b) Los elementos se organizan en una columna y se ajustarán a una nueva columna.
    - [x] c) Los elementos se organizan en una fila y desbordarán el contenedor si no caben. // ❎
    - [ ] d) Los elementos se organizan en una columna y se desbordarán si no caben.

12. **¿Cómo `justify-content: space-evenly;` alinea los elementos flexibles?**

    ```css
    .container {
      display: flex;
      justify-content: space-evenly;
    }
    ```

    - [x] a) Los artículos tienen el mismo espacio entre ellos y en ambos extremos del contenedor. // ❎
    - [ ] b) Los artículos están espaciados uniformemente, sin espacio al principio ni al final.
    - [ ] c) Los artículos se empujan hacia el lado derecho del contenedor, con el mismo espacio entre ellos.
    - [ ] d) Los artículos se apilan juntos en el centro del contenedor.

13. **¿Qué propiedad utilizarías para centrar verticalmente los elementos cuando se establece `flex-direction: row;`?**
  
    - [x] a) `align-items: center;` // ❎
    - [ ] b) `text-align: center;`
    - [ ] c) `justify-content: center;`
    - [ ] d) `vertical-align: middle;`

14. **¿Qué hace el valor `flex-start` de la propiedad `justify-content`?**

    - [x] a) Alinea los elementos al inicio del eje principal del contenedor. // ❎
    - [ ] b) Alinea los elementos al inicio del eje transversal.
    - [ ] c) Centra todos los elementos a lo largo del eje principal.
    - [ ] d) Estira los elementos para llenar el eje principal del contenedor.

15. **¿Cómo configurarías un contenedor flexible para organizar sus elementos de derecha a izquierda en una sola línea y, además, colocarlos en la parte superior del contenedor?**

    - [x] a) // ❎
          ```css
          .container {
            display: flex;
            flex-direction: row-reverse;
            align-items: flex-start;
          }
          ```
    - [ ] b)
          ```css
          .container {
            display: flex;
            flex-wrap: wrap-reverse;
            align-items: flex-start;
          }
          ```
    - [ ] c)
          ```css
          .container {
            display: flex;
            flex-direction: column-reverse;
            align-items: flex-start;
          }
          ```
    - [ ] d)
          ```css
          .container {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
          }
          ```

16. **¿Cuál de las siguientes es una declaración válida para la propiedad `flex-flow`?**

    - [ ] a) `flex-flow: center wrap;`
    - [x] b) `flex-flow: column wrap-reverse;` // ❎

    - [ ] c) `flex-flow: row space-between;`
    - [ ] d) `flex-flow: column reverse;`

17. **¿Cuál de las siguientes reglas CSS hará que los elementos flexibles se centren horizontalmente y se estiren verticalmente para llenar la altura del contenedor?**

    - [ ] a)
          ```css
          .container {
            display: flex;
            justify-content: flex-start;
            align-items: stretch;
          }
          ```
    - [x] b) // ❎
          ```css
          container {
            display: flex;
            justify-content: center;
            align-items: stretch;
          }
          ```
    - [ ] c)
          ```css
          .container {
            display: flex;
            justify-content: stretch;
            align-items: center;
          }
          ```
    - [ ] d)
          ```css
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          ```

18. **¿Qué efecto tiene `align-items: stretch;` cuando `flex-direction` está configurado en `column`?**

    - [ ] a) Estira los elementos verticalmente para llenar la altura del contenedor.
    - [x] b) Estira los elementos horizontalmente para llenar el ancho del contenedor. // ❎
    - [ ] c) No tiene ningún efecto cuando la dirección es column.
    - [ ] d) Estira los elementos verticalmente para que coincidan con el elemento más alto.

19. **Si desea invertir el orden de los elementos en una fila horizontal, ¿qué declaración debe utilizar?**

    - [ ] a) `flex-direction: reverse-row;`
    - [x] b) `flex-direction: row-reverse;` // ❎
    - [ ] c) `flex-direction: column-reverse;`
    - [ ] d) `flex-wrap: wrap-reverse;`

20. **¿Qué valor de `align-items` posicionará los elementos en la parte superior de un contenedor cuya `flex-direction` es `row`?**

    - [ ] a) `justify-content: flex-start;`
    - [ ] b) `align-items: stretch;`
    - [x] c) `align-items: flex-start;` // ❎
    - [ ] d) `align-items: top;`
