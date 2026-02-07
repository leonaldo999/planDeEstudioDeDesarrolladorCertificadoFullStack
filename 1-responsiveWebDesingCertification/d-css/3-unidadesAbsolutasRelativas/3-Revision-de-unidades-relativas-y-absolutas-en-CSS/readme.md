# Revisión de unidades relativas y absolutas en CSS

En CSS, las unidades de medida se dividen en dos categorías principales: unidades absolutas y unidades relativas. Comprender la diferencia entre estas unidades es crucial para diseñar sitios web responsivos y adaptables a diferentes dispositivos y tamaños de pantalla.

## Unidades absolutas

- **`px` (píxeles)**: esta unidad absoluta es una unidad de medida de tamaño fijo en CSS. Es la unidad absoluta más común y proporciona un control preciso sobre las dimensiones. `1px` siempre equivale a 1/96 de pulgada.

- **`in` (pulgada)**: esta unidad absoluta equivale a 96 px.

- **`cm` (centímetros)**: esta unidad absoluta equivale a 25.2/64 de pulgada.

- **`mm` (milímetros)**: esta unidad absoluta equivale a 1/10 de centímetro.

- **`q` (cuartos de milímetro)**: esta unidad absoluta equivale a 1/40 de centímetro.

- **`pc` (picas)**: esta unidad absoluta equivale a 1/6 de pulgada.

- **`pt` (puntos)**: esta unidad absoluta equivale a 1/72 de pulgada.

  - **Codigo ejemplo**

      ```html
    <link rel="stylesheet" href="styles.css">
    <div class="units">
      <div class="unit px">px</div>
      <div class="unit inch">in</div>
      <div class="unit cm">cm</div>
      <div class="unit mm">mm</div>
      <div class="unit q">q</div>
      <div class="unit pc">pc</div>
      <div class="unit pt">pt</div>
    </div>
    ```

      ```css
    .units {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      align-items: flex-end;
    }
    
    .unit {
      background: steelblue;
      color: white;
      text-align: center;
      padding: 4px;
    }
    
    .px {
      width: 40px;
      height: 40px;
    }
    
    .inch {
      width: 0.5in;
      height: 0.5in;
    }
    
    .cm {
      width: 1cm;
      height: 1cm;
    }
    
    .mm {
      width: 10mm;
      height: 10mm;
    }
    
    .q {
      width: 40q;
      height: 40q;
    }
    
    .pc {
      width: 6pc;
      height: 6pc;
    }
    
    .pt {
      width: 36pt;
      height: 36pt;
    }
    ```

---

## Unidades relativas

- **Porcentajes**: estas unidades relativas le permiten definir tamaños, dimensiones y otras propiedades como una proporción de su elemento principal. Por ejemplo, si establece `width: 50%`; en un elemento, este ocupará la mitad del ancho de su contenedor principal.

- **Unidad `em`**: estas unidades son relativas al tamaño de fuente del elemento. Si utiliza `em`s para la propiedad `font-size`, el tamaño del texto será relativo al tamaño de fuente del elemento principal.

- **Unidad `rem`**: estas unidades son relativas al tamaño de fuente del elemento raíz, que es el elemento `html`.

- **Unidad `vh`**: `vh` significa «altura de la ventana gráfica(`viewport height`)» y `1vh` es igual al 1 % de la altura de la ventana gráfica.

- **Unidad `vw`**: `vw` significa «anchura de la ventana gráfica(`viewport width`)» y `1vw` es igual al 1 % de la anchura de la ventana gráfica.

  - **Codigo ejemplo**

      ```html
    <link rel="stylesheet" href="styles.css">
    <div class="parent">
      <div class="box percent">50%</div>
      <div class="box em">2em</div>
      <div class="box rem">2rem</div>
      <div class="box vh">10vh</div>
      <div class="box vw">10vw</div>
    </div>
    ```

      ```css
    html {
      font-size: 16px;
    }
    
    .parent {
      width: 200px;
      font-size: 20px;
      border: 2px dashed #555;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .box {
      background: seagreen;
      color: white;
      text-align: center;
      padding: 6px;
    }
    
    .percent {
      width: 50%;
    }
    
    .em {
      font-size: 2em;
    }
    
    .rem {
      font-size: 2rem;
    }
    
    .vh {
      height: 10vh;
    }
    
    .vw {
      width: 10vw;
    }
    ```

---

## Función `calc`

- **Función `calc()`**: Con la función `calc()`, puede realizar cálculos directamente en sus hojas de estilo para determinar los valores de las propiedades de forma dinámica. Esto significa que puede crear interfaces de usuario flexibles y receptivas calculando las dimensiones en función del tamaño de la ventana gráfica u otros elementos.

  - **Codigo ejemplo**

    ```html
    <link rel="stylesheet" href="styles.css">
    <div class="calc-box">calc()</div>
    ```

    ```css
    .calc-box {
      width: calc(100% - 40px);
      padding: 10px;
      background: steelblue;
      color: white;
      text-align: center;
      border: 2px solid black;
    }
    ```
