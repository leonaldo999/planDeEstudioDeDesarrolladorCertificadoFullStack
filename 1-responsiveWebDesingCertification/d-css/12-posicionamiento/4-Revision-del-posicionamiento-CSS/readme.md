# Revisión del posicionamiento CSS

En esta sección, repasaremos los conceptos básicos del posicionamiento CSS, incluyendo los tipos de posicionamiento y cómo trabajar con flotantes.

---

## Trabajar con flotantes

- **Definición**: Los flotantes se utilizan para eliminar un elemento de su flujo normal en la página y colocarlo a la izquierda o a la derecha de su contenedor. Cuando esto ocurre, el texto se ajustará alrededor del contenido flotante.

  - **Codigo ejemplo**

    ```css
    float: left;
    float: right;
    ```

- **Borrar flotantes**: La propiedad `clear` se utiliza para determinar si un elemento debe moverse debajo del contenido flotante. Cuando hay varios elementos flotantes apilados uno al lado del otro, pueden surgir problemas de superposición y colapso en los diseños. Por eso se creó un truco `clearfix` para solucionar este problema.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="clearfix">
      <div class="box left">Left</div>
      <div class="box right">Right</div>
    </div>
    ```

    ```css
    .box {
      width: 100px;
      height: 60px;
      color: white;
      text-align: center;
      line-height: 60px;
    }
    
    .left {
      float: left;
      background: teal;
    }
    
    .right {
      float: right;
      background: purple;
    }
    
    .clearfix::after {
      content: "";
      display: block;
      clear: both;
    }
    ```

## Posicionamiento `Static`, `Relative` y `Absolute`

- Posicionamiento estático: este es el flujo normal del documento. Los elementos se posicionan de arriba abajo y de izquierda a derecha, uno tras otro.

- Posicionamiento relativo: permite utilizar las propiedades `top`, `left`, `right` y `bottom` para posicionar el elemento dentro del flujo normal del documento. También se puede utilizar el posicionamiento relativo para hacer que los elementos se superpongan con otros elementos de la página.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="relative">Relative Element</div>
    ```

    ```css
    .relative {
      position: relative;
      top: 30px;
      left: 30px;
    }
    ```

- **Posicionamiento absoluto**: esto te permite sacar un elemento del flujo normal del documento, haciendo que se comporte de forma independiente al resto de elementos.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="parent">
      Parent
      <div class="positioned">Absolute</div>
    </div>
    ```

    ```css
    .parent {
      position: relative;
      height: 120px;
      background: #eee;
    }
    
    .positioned {
      position: absolute;
      top: 30px;
      left: 30px;
      background-color: coral;
    }
    ```

## Posicionamiento `fixed` y `sticky`

- **Posicionamiento `fixed`**: cuando un elemento se posiciona con `position: fixed`, se elimina del flujo normal del documento y se coloca en relación con la ventana gráfica, lo que significa que permanece en la misma posición incluso cuando el usuario se desplaza. Esto se utiliza a menudo para elementos como encabezados o barras de navegación que deben permanecer visibles en todo momento.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="navbar">Fixed Navbar</div>
    <div style="height: 600px;"></div>
    ```

    ```css
    .navbar {
      position: fixed; 
      top: 0; 
      width: 100%;
      background: #0077ff;
      color: white;
      padding: 8px; 
    }
    ```

- **Posicionamiento `sticky`**: este tipo de posicionamiento actuará como un híbrido entre el posicionamiento relativo y el `sticky`. Inicialmente, el elemento se comporta como si estuviera posicionado de forma relativa, permaneciendo dentro del flujo del documento. Sin embargo, una vez que el usuario desplaza el elemento más allá de un punto determinado, este se «pega» a la ventana gráfica (normalmente la parte superior) y se comporta como si fuera `sticky`. Esto es ideal para crear elementos como barras de navegación fijas, que solo se fijan una vez que el usuario se desplaza hasta una posición determinada.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <p>Scroll down</p>
    <div class="positioned">Sticky Element</div>
    <div style="height: 500px;"></div>
    ```

    ```css
    .positioned {
      position: sticky;
      top: 30px;
      left: 30px;
      background: #4caf50;
      color: white;
      padding: 6px;
    }
    ```

## Trabajar con la propiedad `z-index`

- **Definición**: La propiedad `z-index` en CSS se utiliza para controlar el orden de apilamiento vertical de los elementos posicionados que se superponen en la página.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="container">
      <div class="box box1">1</div>
      <div class="box box2">2</div>
    </div>
    ```

    ```css
    .container {
      position: relative;
      width: 300px;
      height: 300px;
      border: 1px solid black;
    }
    
    .box {
      position: absolute;
      width: 100px;
      height: 100px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .box1 {
      background: lightcoral;
      top: 20px;
      left: 20px;
      z-index: 1;
    }
    
    .box2 {
      background: steelblue;
      top: 40px;
      left: 40px;
      z-index: 2;
    }
    ```
