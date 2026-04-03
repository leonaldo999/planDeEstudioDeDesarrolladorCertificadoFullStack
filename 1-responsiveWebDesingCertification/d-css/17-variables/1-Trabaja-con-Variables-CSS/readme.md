# Trabaja con Variables CSS

## Navegación

- [Trabaja con Variables CSS](#trabaja-con-variables-css)
  - [Navegación](#navegación)
  - [Tema 1: ¿Qué son las propiedades personalizadas CSS y cómo funcionan?](#tema-1-qué-son-las-propiedades-personalizadas-css-y-cómo-funcionan)
  - [Cuestionario 1](#cuestionario-1)
  - [Tema 2: ¿Qué es la regla @property y cómo funciona con los valores de reserva?](#tema-2-qué-es-la-regla-property-y-cómo-funciona-con-los-valores-de-reserva)
  - [Cuestionario 2](#cuestionario-2)

---

Las variables CSS, también conocidas como Custom Properties, son una característica poderosa que permite almacenar valores reutilizables en tu hoja de estilos. Esto facilita la gestión de estilos y mejora la mantenibilidad de tu código CSS.

---

## Tema 1: ¿Qué son las propiedades personalizadas CSS y cómo funcionan?

Las propiedades personalizadas CSS, también conocidas como variables CSS, son entidades definidas por los autores CSS que contienen valores específicos para ser reutilizados a lo largo de un documento. Son una potente característica que permite crear hojas de estilo más eficientes, fáciles de mantener y flexibles.

La sintaxis para declarar una propiedad personalizada es muy sencilla. Comienza con dos guiones (`--`) seguidos del nombre de la propiedad:

- **Codigo Ejemplo**
  
  ```css
  :root {
    --main-color: #3498db;
  }
  ```

En este ejemplo, declaramos una propiedad personalizada denominada `--main-color` con un valor de `#3498db`. La pseudoclase `:root` se utiliza habitualmente para declarar propiedades personalizadas globales, ya que representa el elemento padre de mayor nivel en el árbol DOM.

Para utilizar una propiedad personalizada, se emplea la función `var()`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <button class="button">Click Me</button>
  ```

  ```css
  :root {
    --main-color: #3498db;
  }
  
  .button {
    background-color: var(--main-color);
  }
  ```

Esto establece el color de fondo de los elementos con la clase `button` al valor almacenado en `--main-color`.

Una de las características clave de las propiedades personalizadas es que siguen la cascada CSS. Esto significa que puedes redefinirlas para elementos o contextos específicos:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="alert">This is an alert message.</div>
  ```

  ```css
  .alert {
    --main-color: #e74c3c;
    background-color: var(--main-color);
  }
  ```

En este caso, los elementos con la clase `alert` utilizarán un valor `--main-color` diferente, anulando la definición global.

Las propiedades personalizadas también admiten valores alternativos. Si una propiedad personalizada no está definida o no es válida, puede proporcionar un valor alternativo:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="text">This is some text.</div>
  ```

  ```css
  :root {
    --text-color: green;
  }
  
  .text {
    color: var(--text-color, green);
  }
  ```

Aquí, si no se define `--text-color`, el `color` predeterminado será el `green`.

Las propiedades personalizadas son especialmente útiles para crear diseños personalizables. Puede definir un conjunto de propiedades para diferentes temas:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="light-theme">
    <p>This is some light themed text.</p>
  </div>
  ```

  ```css
  :root {
    --bg-color: black;
  }
  
  body {
    background-color: var(--bg-color);
  }
  
  .light-theme {
    --bg-color: white;
    --text-color: black;
    background-color: var(--bg-color);
    color: var(--text-color);
    padding: 10px;
  }
  ```

Cambiar de tema es tan sencillo como añadir o eliminar una clase del elemento `body`.

Las propiedades personalizadas también se pueden utilizar con consultas de medios para crear diseños adaptables:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="card">
    <h2>Responsive Design</h2>
    <p>Resize the window to see the card adapt!</p>
  </div>
  ```

  ```css
  :root {
    --card-width: 90%;
    --card-bg: #f0f0f0;
    --card-padding: 1rem;
    --text-color: #333;
  }
  
  /* Tablet screens and up */
  @media (min-width: 600px) {
    :root {
      --card-width: 70%;
      --card-bg: #e8f5e9;
      --card-padding: 1.5rem;
    }
  }
  
  /* Desktop screens and up */
  @media (min-width: 1024px) {
    :root {
      --card-width: 50%;
      --card-bg: #d0f0ff;
      --card-padding: 2rem;
    }
  }
  
  body {
    font-family: system-ui, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #fafafa;
  }
  
  .card {
    width: var(--card-width);
    background-color: var(--card-bg);
    padding: var(--card-padding);
    color: var(--text-color);
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    text-align: center;
    transition: all 0.3s ease;
  }
  ```

Este enfoque permite diseños adaptables más fáciles de mantener, ya que puedes cambiar los valores en un solo lugar en lugar de hacerlo en toda la hoja de estilos. Esto puede reducir significativamente la repetición en tus hojas de estilos, especialmente en el caso de valores complejos y de uso frecuente.

Las propiedades personalizadas también pueden hacer referencia a otras propiedades personalizadas:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <button class="button">Click Me</button>
  ```

  ```css
  :root {
    --primary-color: #3498db;
    --button-bg: var(--primary-color);
  }
  
  button {
    background-color: var(--button-bg);
  }
  
  ```

Esto permite crear relaciones entre diferentes aspectos de estilo, lo que facilita mantener temas coherentes en todo el sitio.

Aunque las propiedades personalizadas ofrecen muchas ventajas, es importante tener en cuenta su compatibilidad con los navegadores. Son compatibles con los navegadores modernos, pero es posible que los navegadores más antiguos no las reconozcan. Siempre hay que tener un plan alternativo cuando se utilizan funciones de vanguardia.

En conclusión, las propiedades personalizadas de CSS proporcionan una forma poderosa de crear hojas de estilo más dinámicas, flexibles y fáciles de mantener. Permiten la creación de diseños personalizables, simplifican los diseños adaptables y permiten la manipulación de estilos en tiempo de ejecución.

A medida que el desarrollo web sigue evolucionando, las propiedades personalizadas se están convirtiendo en una herramienta cada vez más importante en el kit de herramientas de los desarrolladores, ya que ofrecen nuevas posibilidades para crear CSS adaptables y eficientes.

---

## Cuestionario 1

1. **¿Cuál es la sintaxis correcta para declarar una propiedad personalizada de CSS?**

    - [ ] a) `$main-color: #3498db;`
    - [ ] b) `@main-color: #3498db;`
    - [x] c) `--main-color: #3498db;` //correcto
    - [ ] d) `main-color: #3498db;`

2. **¿Cómo se utiliza una propiedad personalizada de CSS en una declaración de estilo?**

    - [ ] a) `use(--main-color)`
    - [x] b) `var(--main-color)` //correcto
    - [ ] c) `@main-color`
    - [ ] d) `$(--main-color)`

3. **¿Qué debes tener en cuenta al utilizar propiedades personalizadas de CSS?**

    - [ ] a) Se pueden utilizar con versiones anteriores de CSS.
    - [x] b) Es posible que los navegadores más antiguos no las admitan. //correcto
    - [ ] c) Pueden contribuir a que las páginas se carguen más rápido.
    - [ ] d) Aumentan la repetición en tus hojas de estilo.

[☝️](#trabaja-con-variables-css)

---

## Tema 2: ¿Qué es la regla @property y cómo funciona con los valores de reserva?

La regla @property es una potente función de CSS que permite a los desarrolladores definir propiedades personalizadas con un mayor control sobre su comportamiento, incluyendo cómo se animan y cuáles son sus valores iniciales.

Esta regla ofrece una forma de mejorar la funcionalidad de las propiedades personalizadas de CSS y brinda mayor flexibilidad en su aplicación.

La sintaxis básica de la regla @property es la siguiente:

- **Codigo Ejemplo**
  
  ```css
  @property --property-name {
    syntax: '<type>';
    inherits: true | false;
    initial-value: <value>;
  }
  ```

El `--property-name` es el nombre de la propiedad personalizada que estás definiendo. Al igual que todas las propiedades personalizadas, debe comenzar con dos guiones.

`syntax` define el tipo de la propiedad, que puede ser, por ejemplo, `<color>`, `<length>`, `<number>`, `<percentage>` o tipos más complejos.

`inherits` especifica si la propiedad debe heredar su valor del elemento padre.

`initial-value` establece el valor predeterminado de la propiedad.

A continuación, se muestra un ejemplo práctico del uso de la regla `@property`:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <button class="button">Click Me</button>
  ```

  ```css
  @property --main-color {
    syntax: '<color>';
    inherits: false;
    initial-value: #3498db;
  }
  
  .button {
    background-color: var(--main-color);
  }
  ```

En este ejemplo, definimos una propiedad personalizada `--main-color` como un valor de `color`, establecemos que no se herede y le asignamos un valor inicial de `#3498db`.

Una de las principales ventajas de la regla `@property` es que permite animar propiedades personalizadas, algo que antes no era posible:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="gradient-box"></div>
  ```

  ```css
  @property --gradient-angle {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
  }
  
  .gradient-box {
    width: 100px;
    height: 100px;
    background: linear-gradient(var(--gradient-angle), red, blue);
    transition: --gradient-angle 0.5s;
  }
  
  .gradient-box:hover {
    --gradient-angle: 90deg;
  }
  ```

El código anterior crea un degradado que se anima suavemente al pasar el cursor por encima del elemento, algo que no se podía lograr con las propiedades personalizadas estándar.

Ahora, veamos cómo funciona la regla `@property` con los valores de reserva.

Los valores de reserva son cruciales en CSS para garantizar que los estilos se degraden de forma elegante en los navegadores que no admiten ciertas características. Con `@property`, los valores de reserva funcionan en dos niveles: para la regla en sí y para el uso de la propiedad personalizada.

Para los navegadores que no admiten la regla `@property`, puedes proporcionar un valor de reserva declarando la propiedad personalizada de la manera tradicional:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  ```

  ```css
  :root {
    --main-color: #3498db;
  }
  
  @property --main-color {
    syntax: '<color>';
    inherits: false;
    initial-value: #3498db;
  }
  
  body {
    background-color: var(--main-color);
  }
  ```

En este caso, los navegadores que admiten `@property` utilizarán la versión definida de forma más estricta, mientras que los demás recurrirán a la declaración estándar de propiedades personalizadas.

Al utilizar la propiedad personalizada, puedes proporcionar un valor de reserva mediante la función `var()`, tal y como lo harías con las propiedades personalizadas estándar:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <button class="button">Click Me</button>
  ```

  ```css
  .button {
    background-color: var(--main-color, #3498db);
  }
  ```

Esto garantiza que, incluso si la propiedad `--main-color` no está definida o no es válida, el botón seguirá teniendo un color de fondo.

La regla `@property` también permite escenarios de alternativa más complejos. Por ejemplo, puedes usarla para proporcionar alternativas seguras en cuanto al tipo:

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">
  <div class="box">Colored box</div>
  ```

  ```css
  @property --padding {
    syntax: '<length>';
    inherits: false;
    initial-value: 10px;
  }
  
  .box {
    width: 100px;
    height: 100px;
    background-color: darkred;
    color: white;
    padding: var(--padding);
  }
  ```

En este caso, si alguien intenta establecer `--padding` con un valor no válido, como un color, el navegador recurrirá al valor inicial de `10px`, lo que garantiza la seguridad de tipos.

La regla `@property` de CSS se considera ampliamente compatible con todos los principales motores de navegadores modernos (como Chrome, Edge, Opera, Firefox y Safari) desde principios de 2024. Si deseas ofrecer compatibilidad con navegadores anteriores, debes proporcionar un CSS alternativo como se ha explicado anteriormente.

En conclusión, la regla `@property` representa un avance significativo en la forma en que trabajamos con propiedades personalizadas en CSS. Proporciona más control y permite nuevas posibilidades, como la animación de propiedades personalizadas. Sin embargo, es importante utilizarla con prudencia y proporcionar siempre alternativas adecuadas para garantizar una buena experiencia en todos los navegadores. Al igual que con cualquier tecnología web de vanguardia, la clave es mejorar la experiencia para los navegadores que la admiten, al tiempo que se garantiza la funcionalidad básica para aquellos que no lo hacen.

---

## Cuestionario 2

1. **¿Cuál es el objetivo principal de la regla @property en CSS?**

    - [ ] a) Crear nuevas propiedades CSS.
    - [x] b) Definir y controlar el comportamiento de las propiedades personalizadas. //correcto
    - [ ] c) Reemplazar las propiedades CSS estándar.
    - [ ] d) Crear animaciones.

2. **¿Cuál de las siguientes opciones NO es un descriptor válido en la regla `@property`?**

    - [ ] a) `syntax`
    - [ ] b) `inherits`
    - [ ] c) `initial-value`
    - [x] d) `animation` //correcto

3. **¿Cómo se puede ofrecer una alternativa para los navegadores que no admiten la regla `@property`?**

    - [ ] a) Utiliza un polyfill.
    - [x] b) Declara la propiedad personalizada mediante el método estándar. //correcto
    - [ ] c) Utiliza la regla `@supports`.
    - [ ] d) No es posible ofrecer una alternativa.

[☝️](#trabaja-con-variables-css)

---
