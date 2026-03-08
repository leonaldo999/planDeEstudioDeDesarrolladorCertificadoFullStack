# Cuestionario sobre posicionamiento CSS

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

---

1. **¿Qué valor de `position` te permite ajustar la posición de un elemento con `top` y `left` mientras lo mantienes dentro del flujo normal del documento?**
  
   - [x] a) `position: relative;` // ❎
   - [ ] b) `position: absolute;`
   - [ ] c) `position: fixed;`
   - [ ] d) `position: static;`

2. **¿Cómo se comporta inicialmente un elemento con `posición: sticky;`?**

   - [ ] a) Se comporta como un elemento `absolute` dentro de su elemento padre.
   - [ ] b) Siempre se elimina del flujo normal del documento.
   - [x] c) Se comporta como un elemento `relative` hasta que se alcanza una posición de desplazamiento específica. // ❎
   - [ ] d) Se comporta como un elemento `fixed` hasta que se alcanza una posición de desplazamiento.

3. **¿Cuál de las siguientes opciones muestra un uso válido y efectivo de la propiedad `z-index` para que `.box-two` aparezca encima de `.box-one`?**
  
   - [ ] a)
          ```css
          .box-one {
            position: static;
            z-index: 2;
          }
          .box-two {
            position: static;
            z-index: 1;
          }
          ```
   - [ ] b)
          ```css
          .box-one {
            position: absolute;
            stack-order: 1;
          }
          .box-two {
            position: absolute;
            stack-order: 2;
          }
          ```
   - [ ] c)
          ```css
          .box-one {
            float: left;
            z-index: 1;
          }
          .box-two {
            float: left;
            z-index: 2;
          }
          ```
   - [x] d) // ❎
          ```css
          .box-one {
            position: absolute;
            z-index: 1;
          }
          .box-two {
            position: absolute;
            z-index: 2;
          }
          ```

4. **¿Para qué se utiliza la propiedad `z-index` en CSS?**
  
   - [ ] a) Define el espacio entre el contenido de un elemento y su borde.
   - [ ] b) Controla la alineación horizontal de los elementos dentro de un contenedor flexible.
   - [ ] c) Establece el nivel de zoom de la página.
   - [x] d) Controla el orden de apilamiento vertical de los elementos posicionados que se superponen. // ❎

5. **Cuando se aplica `top: 10%;` a un elemento con `position: fixed;`, ¿en relación con qué se calcula el `10%`?**
  
   - [ ] a) El ancho de la ventana gráfica.
   - [ ] b) La altura de su contenedor principal.
   - [ ] c) La altura del propio elemento.
   - [x] d) La altura de la ventana gráfica. // ❎

6. **¿Cuál de los ejemplos de código muestra un uso correcto de la propiedad `z-index` para colocar una superposición sobre otro contenido?**
  
   - [ ] a)
          ```css
          .overlay {
            display: block;
            z-layer: 1;
            background-color: black;
          }
          ```
   - [ ] b)
          ```css
          .overlay {
            float: left;
            z-index: 2;
            background-color: black;
          }
          ```
   - [ ] c)
          ```css
          .overlay {
            z-index: 5;
            background-color: black;
          }
          ```
   - [x] d) // ❎
          ```css
          .overlay {
            position: absolute;
            z-index: 10;
            background-color: black;
          }
          ```

7. **¿Qué propiedad CSS se utiliza para controlar si un elemento debe moverse debajo de los elementos flotantes?**
  
   - [ ] a) `display`
   - [x] b) `clear` // ❎
   - [ ] c) `float`
   - [ ] d) `overflow`

8. **¿Cómo se moverá un elemento con `position: relative;` y parte `bottom: 25px;`?**
  
   - [ ] a) Se moverá 25 píxeles hacia abajo desde su posición normal.
   - [ ] b) Se colocará a 25 píxeles de la parte inferior de la ventana gráfica.
   - [x] c) Se moverá 25 píxeles hacia arriba desde su posición normal. // ❎
   - [ ] d) Se moverá 25 píxeles a la derecha de su posición normal.

9. **¿La propiedad `z-index` solo afectará a los elementos que tengan aplicada qué propiedad CSS?**
  
   - [ ] a) Un valor `float` distinto de `none`.
   - [ ] b) Un valor de `display` de `inline-block`.
   - [ ] c) Un color de `background-color`.
   - [x] d) Un valor de `position` distinto de `static`. // ❎

10. **¿Cuál sería el efecto de aplicar `float: right;` a un logotipo en un encabezado?**

    - [ ] a) El logotipo se alinearía a la derecha, pero permanecería en el flujo normal del documento, evitando que el resto del contenido se ajustara a su alrededor.
    - [x] b) El logotipo se eliminaría de su flujo normal y se colocaría en el lado derecho de su contenedor, con el resto del contenido ajustándose a su alrededor. // ❎
    - [ ] c) El logotipo se sacaría del flujo y se colocaría en el lado derecho de toda la ventana gráfica del navegador, no de su contenedor.
    - [ ] d) El logotipo se convertiría en un elemento de nivel de bloque que ocuparía todo el ancho del encabezado, empujando los demás elementos por debajo de él.

11. **¿Qué fragmento de CSS mantendrá un elemento fijo en la parte superior de la ventana gráfica una vez que se haya desplazado hasta él?**

    - [x] a) // ❎
          ```css
          .header {
            position: sticky;
            top: 0;
          }
          ```
    - [ ] b)
          ```css
          .header {
            position: relative;
            top: 0;
          }
          ```
    - [ ] c)
          ```css
          .header {
            position: fixed;
            top: 0;
          }
          ```
    - [ ] d)
          ```css
          .header {
            position: absolute;
            top: 0;
          }
          ```

12. **¿Cuál es el propósito específico de `clear: both;` en CSS?**

    - [x] a) Asegura que el elemento se mueva debajo de cualquier elemento flotante que aparezca antes que él, tanto a la izquierda como a la derecha. // ❎
    - [ ] b) Cancela la propiedad flotante del propio elemento, devolviéndolo al flujo normal del documento.
    - [ ] c) Solo borra los elementos `float` que se encuentran a la derecha, permitiendo que los elementos flotantes a la izquierda permanezcan como están.
    - [ ] d) Elimina cualquier propiedad `clear` heredada de un elemento padre, restaurando el comportamiento flotante predeterminado.

13. **Dado el siguiente código, ¿cómo se posicionará `.child`?**

    ```css
    .parent {
      /* No position property set */
      height: 200px;
    }
    .child {
      position: absolute;
      top: 10px;
    }
    
    ```
  
    - [ ] a) Se posicionará a `10px` de la parte superior del elemento `.parent`, ya que el posicionamiento `absolute` siempre es relativo al elemento padre directo.
    - [x] b) Se posicionará a 10px de la parte superior del bloque contenedor inicial, como el `<body>`, porque su padre no está posicionado. // ❎
    - [ ] c) Permanecerá en su posición estática predeterminada porque el valor `absolute` no es válido sin una propiedad `z-index`.
    - [ ] d) Se posicionará a 10px de la parte superior de la ventana del navegador, permaneciendo fijo en su lugar incluso cuando el usuario se desplace por la página.

14. **¿Qué efecto tendrá el siguiente CSS en el elemento `.box`?**

    ```css
    .box {
      position: absolute;
      top: 50px;
      left: 50px;
    }
    ```

    - [ ] a) El elemento se fijará a la ventana gráfica y permanecerá a 50 píxeles de la parte superior y a 50 píxeles de la izquierda, incluso cuando se desplace la página.
    - [ ] b) El elemento se posicionará en relación con su propio punto de partida, desplazándose 50 píxeles hacia abajo y 50 píxeles hacia la derecha sin salir del flujo del documento.
    - [x] c) El elemento se sacará del flujo normal y se colocará a 50 píxeles de la parte superior y a 50 píxeles de la izquierda de su antecesor posicionado más cercano. // ❎
    - [ ] d) El elemento permanecerá en su flujo normal, pero se sangrará 50 píxeles desde la parte superior e izquierda, empujando a los demás elementos.

15. **¿Cuál de los siguientes valores de `position` elimina por completo un elemento del flujo normal del documento?**

    - [ ] a) `position: inherit;`
    - [ ] b) `position: static;`
    - [ ] c) `position: relative;`
    - [x] d) `position: absolute;` // ❎

16. **Dados un elemento `.parent` y un elemento `.child`, ¿qué fragmento de CSS posicionará correctamente el elemento `.child` a 20px de la esquina superior izquierda del elemento `.parent`?**

    - [ ] a)
          ```css
          .parent {
            position: relative;
          }
          .child {
            position: relative;
            top: 20px;
            left: 20px;
          }
          ```
    - [x] b) // ❎
          ```css
          .parent {
            position: relative;
          }
          .child {
            position: absolute;
            top: 20px;
            left: 20px;
          }
          ```
    - [ ] c)
          ```css
          .parent {
            position: relative;
          }
          .child {
            float: left;
            top: 20px;
            left: 20px;
          }
          ```
    - [ ] d)
          ```css
          .parent {
            /* position: static; by default */
          }
          .child {
            position: absolute;
            top: 20px;
            left: 20px;
          }
          ```

17. **¿Cuál es la diferencia entre el posicionamiento `static` y el `relative`?**

    - [ ] a) Un elemento con `position: static;` se puede desplazar con las propiedades `top` e `left`, mientras que la `position: relative;` no.
    - [ ] b) El posicionamiento `static` elimina un elemento del flujo del documento, mientras que el posicionamiento `relative` lo mantiene en el flujo.
    - [x] c) Ambos mantienen un elemento en el flujo normal del documento, pero el posicionamiento `relative` permite desplazar el elemento de su posición original. // ❎
    - [ ] d) El posicionamiento `static` es para elementos de nivel de bloque, mientras que el posicionamiento `relative` solo está pensado para elementos en línea.

18. **¿Qué fragmento de CSS flota correctamente una imagen a la izquierda, permitiendo que el resto del contenido la rodee?**

    - [ ] a)
          ```css
          .image {
            display: inline-block;
          }
          ```
    - [x] b) // ❎
          ```css
          .image {
            float: left;
          }
          ```
    - [ ] c)
          ```css
          .image {
            position: absolute;
            left: 0;
          }
          ```
    - [ ] d)
          ```css
          .image {
            text-align: left;
          }
          ```

19. **¿Cuál es la diferencia entre el posicionamiento `absolute` y el `fixed`?**

    - [ ] a) El posicionamiento `absolute` mantiene el elemento en el flujo normal del documento, mientras que el posicionamiento `fixed` lo elimina del flujo.
    - [ ] b) Ambos se posicionan en relación con la ventana gráfica, pero los elementos `fixed` se desplazarán con la página, mientras que los elementos `absolute` no lo harán.
    - [x] c) El posicionamiento `absolute` es relativo al antecesor posicionado más cercano, mientras que el posicionamiento `fixed` es relativo a la ventana gráfica del navegador. // ❎
    - [ ] d) El posicionamiento `absolute` es relativo a la ventana gráfica, mientras que el posicionamiento `fixed` es relativo al antecesor posicionado más cercano.

20. **¿Qué valor de `position` coloca un elemento en el flujo normal del documento e impide que las propiedades de desplazamiento, como `top` y `left`, tengan algún efecto?**

    - [ ] a) `position: fixed;`
    - [ ] b) `position: absolute;`
    - [x] c) `position: static;` // ❎
    - [ ] d) `position: relative;`
