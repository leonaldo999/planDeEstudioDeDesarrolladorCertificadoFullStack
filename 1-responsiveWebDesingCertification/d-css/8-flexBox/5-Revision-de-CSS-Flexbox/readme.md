# Revisión de CSS Flexbox

En esta sección, revisaremos algunos de los problemas comunes que surgen al aplicar estilos a los elementos flexibles. En particular, nos centraremos en el uso de `flex-direction`, `justify-content`, `align-items` y `flex-wrap` para crear diseños flexibles y responsivos.

---

## Introducción a CSS Flexbox y Flex Model

- **Definición**: CSS Flexbox es un modelo de diseño unidimensional que permite organizar elementos en filas y columnas dentro de un contenedor.

- **Flex Model**: este modelo define cómo se organizan los elementos flexibles dentro de un contenedor flexible. Cada contenedor flexible tiene dos ejes: el eje principal y el eje transversal.

---

## Propiedad `flex-direction`

- **Definición**: esta propiedad establece la dirección del eje principal. El valor predeterminado de `flex-direction` es `row`, que coloca todos los elementos flexibles en la misma fila, en la dirección del idioma predeterminado de su navegador (de izquierda a derecha o de derecha a izquierda).

- `flex-direction: row-reverse;`: invierte los elementos de la fila.

- `flex-direction: column;`: alinea los elementos flexibles verticalmente en lugar de horizontalmente.

- `flex-direction: column-reverse;`: invierte el orden de los elementos flexibles verticalmente.
  - **Codigo ejemplo**

    ```html
    <div class="container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </div>
    ```

    ```css
    .container {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
    
    .box {
      background-color: lightblue;
      padding: 20px;
      text-align: center;
    }
    ```

---

## Propiedad `flex-wrap`

- **Definición**: esta propiedad determina cómo se ajustan los elementos flexibles dentro de un contenedor flexible para adaptarse al espacio disponible. `flex-wrap` puede tomar tres valores posibles: `nowrap`, `wrap` y `wrap-reverse`.

- `flex-wrap: nowrap;`: este es el valor predeterminado. Los elementos flexibles no se ajustarán a una nueva línea, incluso si su ancho excede el ancho del contenedor.

- `flex-wrap: wrap;`: esta propiedad ajustará los elementos cuando superen el ancho de su contenedor.

- `flex-wrap: wrap-reverse;`: esta propiedad ajustará los elementos flexibles en orden inverso.

- Propiedad `flex-flow`: esta propiedad es una propiedad abreviada para `flex-direction` y `flex-wrap`.

  - **Codigo ejemplo**

    ```html
    <div class="container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
    </div>
    ```

    ```css
    .container {
      display: flex;
      flex-wrap: wrap;
      width: 150px;
      background: #f0f0f0;
    }
    
    .box {
      width: 60px;
      padding: 10px;
      margin: 5px;
      background: skyblue;
      text-align: center;
    }
    ```

---

## Propiedad justify-content

- **Definición**: esta propiedad alinea los elementos secundarios a lo largo del eje principal del contenedor flexible.

- `justify-content: flex-start;`: en este caso, los elementos flexibles se alinearán con el inicio del eje principal. Esto puede ser horizontal o vertical.

- `justify-content: flex-end;`: en este caso, los elementos flexibles se alinean con el final del eje principal, horizontal o verticalmente.

- `justify-content: center;`: Centra los elementos flexibles a lo largo del eje principal.

- `justify-content: space-between;`: Distribuye los elementos de manera uniforme a lo largo del eje principal.

- `justify-content: space-around;`: Distribuye los elementos flexibles de manera uniforme dentro del eje principal, añadiendo un espacio antes del primer elemento y después del último.

- `justify-content: space-evenly;`: Distribuye los artículos uniformemente a lo largo del eje principal.

  - **Codigo ejemplo**

    ```html
    <div class="container">
      <div class="box">A</div>
      <div class="box">B</div>
      <div class="box">C</div>
    </div>
    ```

    ```css
    .container {
      display: flex;
      justify-content: space-between;
      background: #eee;
    }
    
    .box {
      padding: 20px;
      background: salmon;
    }
    ```

---

## Propiedad `align-items`

- **Definición**: esta propiedad se utiliza para distribuir elementos a lo largo del eje transversal. Recuerde que el eje transversal es perpendicular al eje principal.

- `align-items: center;`: se utiliza para centrar los elementos a lo largo del eje transversal.

- `align-items: flex-start;`: alinea los elementos con el inicio del eje transversal.

- align-items: stretch;: se utiliza para estirar los elementos flexibles a lo largo del eje transversal.

  - **Codigo ejemplo**

    ```html
    <div class="container">
      <div class="box tall">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </div>
    ```

    ```css
    .container {
      display: flex;
      align-items: center;
      height: 150px;
      background: #ddd;
    }
    
    .box {
      background: lightgreen;
      padding: 10px;
    }
    
    .tall {
      height: 100px;
    }
    ```

---
