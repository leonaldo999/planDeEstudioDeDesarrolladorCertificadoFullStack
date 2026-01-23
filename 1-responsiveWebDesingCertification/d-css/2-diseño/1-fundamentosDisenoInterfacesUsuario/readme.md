# Fundamentos del diseño de interfaces de usuario (UI)

En este módulo, explorarás los principios esenciales que transforman un sitio funcional en una experiencia visual profesional. Aprenderás a utilizar el contraste y el espacio en blanco para mejorar la legibilidad, cómo establecer una jerarquía visual clara mediante la escala y la alineación, y las mejores prácticas para trabajar con imágenes. Finalmente, entenderás la mejora progresiva para asegurar que tus diseños sean accesibles y efectivos en cualquier dispositivo.

---

## ¿Cuáles son los términos de diseño comunes que te ayudan a comunicarte con los diseñadores?

> [!NOTE]
> Algunos de los ejemplos interactivos pueden utilizar CSS que aún no has aprendido. No te preocupes por intentar comprender todo el código. El objetivo de los ejemplos es mostrarte vistas previas de estos conceptos de diseño para que comprendas mejor cómo funcionan las cosas.

Como desarrollador, es posible que tengas que trabajar en estrecha colaboración con diseñadores. Si comprendes la terminología básica del diseño, compartirás un vocabulario común y podrás participar más activamente en el proceso de diseño. Esto puede hacer que tu flujo de trabajo sea más eficiente y dar lugar a una mejor experiencia de usuario.

Así que vamos a profundizar en el tema. Comenzaremos con el término *design*. El diseño es la forma en que se organizan los elementos visuales en una página o pantalla para comunicar un mensaje. Estos elementos pueden incluir texto, imágenes y espacios en blanco. El diseño es como el plano de un proyecto. Los diseñadores deben tener en cuenta la ubicación, el tamaño y la jerarquía de cada elemento.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css" />

  <header>
    <div class="container">
      <h1>ShopMate</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Cart (2)</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <main>
    <section class="hero">
      <h2>Fall Collection 2025</h2>
      <p>Discover the latest trends</p>
      <a href="#" class="btn">Shop Now</a>
    </section>
  
    <section class="products container">
      <h3>Featured Products</h3>
      <div class="product-grid">
        <div class="product-card">
          <img src="https://placehold.co/300x200" alt="Product 1" />
          <h4>Product 1</h4>
          <p>$49.99</p>
          <button>Add to Cart</button>
        </div>
        <div class="product-card">
          <img src="https://placehold.co/300x200" alt="Product 2" />
          <h4>Product 2</h4>
          <p>$59.99</p>
          <button>Add to Cart</button>
        </div>
        <div class="product-card">
          <img src="https://placehold.co/300x200" alt="Product 3" />
          <h4>Product 3</h4>
          <p>$39.99</p>
          <button>Add to Cart</button>
        </div>
        <div class="product-card">
          <img src="https://placehold.co/300x200" alt="Product 4" />
          <h4>Product 4</h4>
          <p>$29.99</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </section>
  </main>
  
  <footer>
    <div class="container">
      <p>&copy; 2025 ShopMate. All rights reserved.</p>
    </div>
  </footer>
  ```
  
  ```css
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background: #f9f9f9;
    color: #333;
  }
  
  .container{
    width: 90%;
    max-width: 1200px;
    margin: auto;
  }
  
  header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  header {
    background: #fff;
    border-bottom: 1px solid #ddd;
    padding: 1rem 0;
  }
  
  header h1 {
    color: #2c3e50;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    justify-content: flex-end;
  }
  
  nav a {
    text-decoration: none;
    color: #2c3e50;
    font-weight: 500;
  }
  
  .hero {
    background-color: lightgrey;
    text-align: center;
    padding: 4rem 1rem;
    margin-bottom: 2rem;
  }
  
  .hero h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  .hero .btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background: #2c3e50;
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }
  
  .products h3 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    color: #2c3e50;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
  }
  
  .product-card {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }
  
  .product-card img {
    max-width: 100%;
    border-radius: 6px;
    margin-bottom: 1rem;
  }
  
  .product-card h4 {
    margin: 0.5rem 0;
  }
  
  .product-card button {
    background: #27ae60;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .product-card button:hover {
    background: #219150;
  }
  
  footer {
    background: #2c3e50;
    color: white;
    text-align: center;
    padding: 1rem 0;
    margin-top: 2rem;
  }
  ```

El término estrechamente relacionado con el diseño es la *alignment*. La alineación es la forma en que se colocan los elementos entre sí. Utilizar correctamente la alineación ayuda a que el diseño resulte limpio y organizado. Los diseñadores crean orden visual alineando los elementos a lo largo de líneas imaginarias, bordes o un punto central.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css" />

  <div class="container">
    <section class="alignment left">
      <h2>Left-Aligned</h2>
      <p>This content is aligned to the left. Left alignment is most common for body text because it follows natural reading flow in left-to-right languages.</p>
    </section>
  
    <section class="alignment center">
      <h2>Center-Aligned</h2>
      <p>This content is centered. Center alignment is useful for titles, headings, and content that needs to be the focal point.</p>
    </section>
  
    <section class="alignment right">
      <h2>Right-Aligned</h2>
      <p>This content is aligned to the right. Right alignment can be used for stylistic emphasis or when aligning content against the right edge of a container.</p>
    </section>
  </div>
  ```
  
  ```css
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background: #f4f4f4;
    color: #333;
    padding: 2rem;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .alignment {
    background: #fff;
    border-left: 4px solid #3498db;
    padding: 1.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }
  
  .alignment:hover {
    transform: scale(1.02);
  }
  
  .alignment h2 {
    margin-bottom: 0.5rem;
    color: #3498db;
  }
  
  .left {
    text-align: left;
  }
  
  .center {
    text-align: center;
  }
  
  .right {
    text-align: right;
  }
  ```

Genial. Ahora hablemos de la *composition*. La composición es el arte de organizar elementos para crear un diseño armonioso. Determina cómo se relacionan entre sí elementos como imágenes, texto y formas, y cómo contribuyen al diseño de una manera artística. Mientras que el diseño se centra principalmente en la ubicación de los elementos, la composición también tiene en cuenta el impacto artístico que esta ubicación tendrá en el diseño general.

La composición está estrechamente relacionada con los conceptos de *balance*. El equilibrio es la forma en que se distribuye el peso visual dentro de una composición. Los diseñadores buscan crear un equilibrio a través de disposiciones simétricas o asimétricas. Un diseño equilibrado transmite armonía.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <h1>Composition &amp; Balance</h1>
  
  <div class="section symmetrical">
    <div class="box-container">
      <div class="box">A</div>
      <div class="box">B</div>
      <div class="box">A</div>
    </div>
    <div class="description">Symmetrical Balance – Equal weight on both sides.</div>
  </div>
  
  <div class="section asymmetrical">
    <div class="box-container">
      <div class="box">A</div>
      <div class="box">C</div>
      <div class="box">B</div>
    </div>
    <div class="description">Asymmetrical Balance – Unequal but still harmonious.</div>
  </div>
  ```

  ```css
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 40px;
    background: #f4f4f4;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .section {
    margin-bottom: 60px;
  }
  
  .box-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  
  .box {
    width: 100px;
    height: 100px;
    background: #3498db;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border-radius: 8px;
  }
  
  .asymmetrical .box:nth-child(2) {
    transform: scale(1.5);
    background: #e74c3c;
  }
  
  .description {
    text-align: center;
    margin-top: 50px;
    font-style: italic;
    color: #333;
  }
  ```

La *Hierarchy* es otro concepto importante que debes conocer. La jerarquía establece el orden de importancia de los elementos en un diseño. Se trata de asegurarse de que la información más importante se perciba primero. Puedes implementar una jerarquía visual con el tamaño, el color, el contraste, la alineación, el espacio en blanco e incluso la tipografía.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="card">
    <div class="headline">Upgrade to Pro</div>
    <div class="subheadline">Get more features and storage</div>
    <div class="body-text">
      The Pro plan offers advanced tools, priority support, and 10x more storage. Perfect for professionals and teams looking to scale their productivity.
    </div>
    <a href="#" class="call-to-action">Start Free Trial</a>
  </div>
  ```
  
  ```css
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #fefefe;
    margin: 40px;
    line-height: 1.6;
    color: #333;
  }
  
  .card {
    max-width: 600px;
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }
  
  .headline {
    font-size: 32px;
    color: #2c3e50;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .subheadline {
    font-size: 20px;
    color: #555;
    margin-bottom: 20px;
  }
  
  .body-text {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }
  
  .call-to-action {
    display: inline-block;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 5px;
    font-weight: bold;
    transition: background 0.3s ease;
  }
  
  .call-to-action:hover {
    background-color: #2980b9;
  }
  ```

Para crear distinciones claras entre los elementos, puedes utilizar el *contrast.*. El contraste es útil para dirigir la atención del usuario hacia lo que deseas resaltar. Puedes hacerlo mediante variaciones en el color, el tamaño, la forma, la textura o cualquier otra característica visual. Un contraste fuerte también es útil para mejorar la legibilidad.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="container">
    <h1>Contrast in Design</h1>
    <p>
      Contrast helps draw attention to important elements. It also makes content easier to read and visually engaging.
    </p>
  
    <div class="highlight-box">
      This box stands out because of strong color contrast.
    </div>
  
    <button class="high-contrast-button">Example button</button>
  
    <p class="low-contrast-text">
      This text is harder to read due to low contrast with the background.
    </p>
  </div>
  ```
  
  ```css
  body {
    font-family: Arial, sans-serif;
    background-color: #f6f6f6;
    margin: 40px;
    color: #333;
  }
  
  .container {
    max-width: 700px;
    margin: 0 auto;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
  
  h1 {
    font-size: 36px;
    margin-bottom: 10px;
    color: #111;
  }
  
  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 25px;
  }
  
  .highlight-box {
    background-color: #222;
    color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
  
  .low-contrast-text {
    color: #999999;
    font-size: 16px;
    margin-top: 30px;
  }
  
  .high-contrast-button {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: background 0.3s ease;
  }
  
  .high-contrast-button:hover {
    background-color: #c0392b;
  }
  ```

Otro término útil es *white space*. El espacio en blanco, también conocido como *espacio negativo*, es el espacio vacío en un diseño. Es el área que rodea a los elementos. Quizás le sorprenda saber que el espacio en blanco no tiene por qué ser necesariamente blanco. En realidad, puede ser un espacio de cualquier color o textura. Su finalidad es mejorar la legibilidad y realzar la jerarquía visual de un diseño.

- **Codigo Ejemplo**
  
  ```html
  <link rel="stylesheet" href="styles.css">

  <div class="container">
    <h1>The Power of White Space</h1>
    <p>
      White space (or negative space) is the empty space around elements. It’s not just “blank”—it gives your content room to breathe, improves focus, and adds elegance to the design.
    </p>
    <a href="#" class="button">Learn More</a>
  </div>
  
  <div class="no-whitespace">
    <strong>Without white space:</strong> This block has minimal padding, making the content feel cramped, harder to read, and less appealing.
  </div>
  ```
  
  ```css
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }
  
  .container {
    max-width: 800px;
    margin: 60px auto;
    background-color: #ffffff;
    padding: 60px;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
  
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #2c3e50;
  }
  
  p {
    font-size: 18px;
    line-height: 1.8;
    color: #555;
    margin-bottom: 30px;
  }
  
  .button {
    display: inline-block;
    padding: 14px 28px;
    background-color: #27ae60;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s ease;
  }
  
  .button:hover {
    background-color: #219150;
  }
  
  .no-whitespace {
    background-color: #ffffff;
    padding: 10px;
    margin: 60px auto;
    width: 800px;
    box-shadow: 0 0 0 1px #ccc;
    font-size: 16px;
    color: #222;
  }
  ```

Estos son conceptos generales de diseño que encontrarás muy a menudo, pero también puedes encontrar términos de diseño más relacionados con el desarrollo de software.

La interfaz de usuario, también conocida como *UI*, es la forma en que los humanos interactúan con las computadoras. Una interfaz de usuario incluye los elementos visuales e interactivos que los usuarios pueden ver en sus pantallas, como iconos, imágenes, texto, menús, enlaces y botones.

La experiencia de usuario, también conocida como *UX*, se refiere a cómo se sienten los usuarios al utilizar un producto o servicio. Una aplicación con una experiencia de usuario bien diseñada es intuitiva, fácil de usar, eficiente, accesible y agradable. La interfaz de usuario desempeña un papel fundamental a la hora de hacer que la experiencia del usuario sea lo más fácil y agradable posible, por lo que ambas están muy relacionadas.

Estos son algunos de los términos comunes que debes conocer para comunicarte con los diseñadores. Con estos conocimientos, ahora puedes desempeñar un papel más activo en el proceso de diseño.

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---

## Cuestionario 1

- **1.¿Qué principio de diseño se refiere a la distribución del peso visual dentro de un diseño?**

  - [ ] a) Alineación
  - [x] b) Equilibrio //correcto
  - [ ] c) Jerarquía
  - [ ] d) Contraste

- **2.¿Cómo se denomina el espacio vacío que rodea a los elementos de un diseño?**

  - [ ] a) Diseño
  - [ ] b) Jerarquía
  - [x] c) Espacio en blanco //correcto
  - [ ] d) Contraste

- **3.¿Qué principio de diseño establece el orden de importancia de los elementos en un diseño?**

  - [ ] a) alineación
  - [ ] b) contraste
  - [x] c) jerarquía //correcto
  - [ ] d) Proximidad

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---

## ¿Cómo crear un buen contraste entre el fondo y el primer plano en tus diseños?

> [!NOTE]
> Algunos de los ejemplos interactivos pueden utilizar CSS que aún no has aprendido. No te preocupes por intentar comprender todo el código. El objetivo de los ejemplos es mostrarte una vista previa de estos conceptos de diseño para que comprendas mejor cómo funcionan las cosas.

En primer lugar, es posible que necesites familiarizarte con el contraste. El contraste es la diferencia entre dos colores, o lo fácil que resulta distinguirlos.

Los colores con un mayor contraste serán más distintos visualmente, mientras que los colores con un menor contraste serán más similares visualmente. Por ejemplo, el blanco y el negro tienen una relación de contraste muy alta. Por el contrario, el azul claro y el morado claro tienen menos contraste.

- **Codigo Ejemplo**

  ```html
  <style>
    .example {
      padding: 20px;
      margin-bottom: 20px;
      font-size: 18px;
      font-family: sans-serif;
    }
  
    .high-contrast {
      background-color: black;
      color: white;
    }
  
    .low-contrast {
      background-color: #add8e6; 
      color: #dda0dd; 
    }
  
    .label {
      font-weight: bold;
      margin-bottom: 5px;
    }
  </style>
  
  <div class="example high-contrast">
    <div class="label">High Contrast</div>
    This text has high contrast (black background and white text).
  </div>
  
  <div class="example low-contrast">
    <div class="label">Low Contrast</div>
    This text has low contrast (light blue background and light purple text).
  </div>
  ```

Por supuesto, en estos ejemplos la distinción puede resultar más clara debido al diseño. Pero, ¿qué pasa si aplicamos estos colores al texto? Se puede utilizar texto negro de alto contraste sobre fondo blanco. Y texto morado de bajo contraste sobre fondo azul.

- **Codigo Ejemplo**

  ```html
  <style>
    .text-example {
      padding: 10px;
      margin-bottom: 20px;
      font-size: 18px;
      font-family: sans-serif;
    }
  
    .text-high-contrast {
      background-color: white;
      color: black;
    }
  
    .text-low-contrast {
      background-color: #add8e6; 
      color: #dda0dd; 
    }
  
    .label {
      font-weight: bold;
      margin-bottom: 5px;
      display: block;
    }
  </style>
  
  <div class="text-example text-high-contrast">
    <span class="label">High Contrast Text</span>
    This is high contrast text: black text on a white background.
  </div>
  
  <div class="text-example text-low-contrast">
    <span class="label">Low Contrast Text</span>
    This is low contrast text: purple text on a light blue background.
  </div>
  ```

Pero, ¿cómo se determina qué es un contraste «suficientemente bueno»? No se puede basar únicamente en cómo se ve el texto, ya que cada usuario tendrá una experiencia diferente. Afortunadamente, las Pautas de Accesibilidad al Contenido en la Web, o WCAG, proporcionan una norma para ello.

El texto con una relación de contraste de 4,5:1 se considera el estándar AA, que es el mínimo que se debe seguir para que sea accesible a la mayoría de los usuarios. El texto con una relación de contraste de 7:1 se considera el estándar AAA y garantiza el mejor nivel de accesibilidad.

- **Codigo Ejemplo**

  ```html
  <style>
    .contrast-example {
      padding: 15px;
      margin-bottom: 20px;
      font-size: 18px;
      font-family: sans-serif;
    }
  
    .aa-contrast {
      background-color: #ffffff; 
      color: #4b4b4b; 
    }
  
    .aaa-contrast {
      background-color: #ffffff; 
      color: #1a1a1a; 
    }
  
    .label {
      font-weight: bold;
      margin-bottom: 8px;
      display: block;
    }
  </style>
  
  <div class="contrast-example aa-contrast">
    <span class="label">AA Standard (Contrast Ratio ~4.5:1)</span>
    This text meets the minimum accessibility standard for contrast.
  </div>
  
  <div class="contrast-example aaa-contrast">
    <span class="label">AAA Standard (Contrast Ratio ~7:1)</span>
    This text meets the highest accessibility standard for contrast.
  </div>
  ```

Hay varios sitios web que permiten comprobar la relación de contraste entre dos colores, pero la mayoría de los navegadores te permiten hacerlo directamente en las herramientas de desarrollo de tu sitio web.

Veamos algunos ejemplos más de relación de contraste para comprender mejor el concepto.

Aquí tienes un ejemplo de texto negro sobre fondo blanco con una relación de contraste de 21:1.

- **Codigo Ejemplo**

  ```html
  <style>
    .contrast-21 {
      background-color: white;
      color: black;
      padding: 15px;
      font-family: sans-serif;
      font-size: 18px;
      margin-bottom: 20px;
    }
  
    .label {
      font-weight: bold;
      margin-bottom: 8px;
      display: block;
    }
  </style>
  
  <div class="contrast-21">
    <span class="label">Contrast Ratio 21:1</span>
    This is black text on a white background, which has the highest contrast ratio of 21:1.
  </div>
  ```

Este ejemplo cumple con creces el estándar AAA. Ahora, echemos un vistazo al texto morado sobre fondo azul.

- **Codigo Ejemplo**

  ```html
  <style>
    .contrast-21 {
      background-color: white;
      color: black;
      padding: 15px;
      font-family: sans-serif;
      font-size: 18px;
      margin-bottom: 20px;
    }
  
    .label {
      font-weight: bold;
      margin-bottom: 8px;
      display: block;
    }
  
    .purple-on-blue {
      background-color: #0000cc;
      color: #800080; 
      padding: 15px;
      font-family: sans-serif;
      font-size: 18px;
      margin-bottom: 20px;
    }
  </style>
  
  <div class="contrast-21">
    <span class="label">Contrast Ratio 21:1</span>
    This example more than meets the AAA standard with black text on white background.
  </div>
  
  <div class="purple-on-blue">
    <span class="label">Purple on Blue (Lower Contrast)</span>
    This doesn't meet the AA standard.
  </div>
  ```

Este ejemplo tiene una relación de contraste de 1,48:1, lo que ni siquiera cumple con el estándar AA.

¿Cómo se puede solucionar esto? Bueno, hay tres aspectos que influyen en la relación de contraste.

El primero es el tono, que representa el tipo de color general, como el rojo, el azul o el naranja. Cambiemos a un tono que esté más alejado del azul. En este caso, utilicemos el rojo.

- **Codigo Ejemplo**

  ```html
  <style>
    .contrast-21 {
      background-color: white;
      color: black;
      padding: 15px;
      font-family: sans-serif;
      font-size: 18px;
      margin-bottom: 20px;
    }
  
    .label {
      font-weight: bold;
      margin-bottom: 8px;
      display: block;
    }
  
    .red-on-blue {
      background-color: #0000cc; 
      color: #ff0000; 
      padding: 15px;
      font-family: sans-serif;
      font-size: 18px;
      margin-bottom: 20px;
    }
  </style>
  
  <div class="contrast-21">
    <span class="label">Contrast Ratio 21:1</span>
    This example more than meets the AAA standard with black text on white background.
  </div>
  
  <div class="red-on-blue">
    <span class="label">Red on Blue (Higher Contrast Hue Shift)</span>
    This doesn't meet accessibility standards.
  </div>
  ```

Desafortunadamente, este cambio solo elevó la relación de contraste a 1.49:1, lo que significa que es necesario modificar la saturación, o la «cantidad» de color presente. Aumentemos la cantidad de rojo en el texto. Esto nos acerca mucho más al objetivo, con una relación de contraste de 3.54:1.

- **Codigo Ejemplo**

  ```html
  <style>
    .contrast-21 {
      background-color: white;
      color: black;
      padding: 15px;
      font-family: sans-serif;
      font-size: 18px;
      margin-bottom: 20px;
    }
  
    .label {
      font-weight: bold;
      margin-bottom: 8px;
      display: block;
    }
  
    .low-sat-red-on-blue {
      background-color: #0000cc; 
      color: #b23333; 
      padding: 15px;
      font-family: sans-serif;
      font-size: 18px;
      margin-bottom: 20px;
    }
  
    .high-sat-red-on-blue {
      background-color: #0000cc; 
      color: #ff4d4d;
      padding: 15px;
      font-family: sans-serif;
      font-size: 18px;
      margin-bottom: 20px;
    }
  </style>
  
  <div class="contrast-21">
    <span class="label">Contrast Ratio 21:1</span>
    This example more than meets the AAA standard with black text on white background.
  </div>
  
  <div class="low-sat-red-on-blue">
    <span class="label">Low Saturation Red on Blue (Contrast ~1.49:1)</span>
    This red has low saturation, resulting in a poor contrast ratio.
  </div>
  
  <div class="high-sat-red-on-blue">
    <span class="label">Higher Saturation Red on Blue (Contrast ~3.54:1)</span>
    Increasing the saturation of red improves contrast but it’s still below AA standard.
  </div>
  ```

Sin embargo, es posible acercarse aún más cambiando el último valor, que es la luminosidad. La luminosidad representa la cantidad de blanco presente en el color.

Disminuyamos la luminosidad del rojo. Ahora hay un rojo mucho más oscuro sobre el fondo azul claro, lo que eleva la relación de contraste a 10.34:1.

- **Codigo Ejemplo**

  ```html
  <style>
    .contrast-21 {
      background-color: white;
      color: black;
      padding: 15px;
      font-family: sans-serif;
      font-size: 18px;
      margin-bottom: 20px;
    }
  
    .label {
      font-weight: bold;
      margin-bottom: 8px;
      display: block;
    }
  
    .blue-bg {
      background-color: #add8e6; 
      padding: 15px;
      font-family: sans-serif;
      font-size: 18px;
      margin-bottom: 20px;
    }
  
    .low-sat-red-on-blue {
      background-color: #0000cc; 
      color: #b23333;
      margin-bottom: 20px;
    }
  
    .high-sat-red-on-blue {
      background-color: #0000cc; 
      color: #ff4d4d; 
      margin-bottom: 20px;
    }
    
    .dark-red-on-light-blue {
      background-color: #add8e6; 
      color: #8b0000;
    }
  </style>
  
  <div class="contrast-21">
    <span class="label">Contrast Ratio 21:1</span>
    This example more than meets the AAA standard with black text on white background.
  </div>
  
  <div class="low-sat-red-on-blue blue-bg">
    <span class="label">Low Saturation Red on Medium Blue (Contrast ~1.49:1)</span>
    This red has low saturation, resulting in a poor contrast ratio.
  </div>
  
  <div class="high-sat-red-on-blue blue-bg">
    <span class="label">Higher Saturation Red on Medium Blue (Contrast ~3.54:1)</span>
    Increasing the saturation of red improves contrast but it’s still below AA standard.
  </div>
  
  <div class="dark-red-on-light-blue">
    <span class="label">Darker Red on Light Blue (Contrast ~10.34:1)</span>
    Decreasing the lightness of the red increases the contrast ratio significantly.
  </div>
  ```

Puede seguir ajustando los colores hasta encontrar el equilibrio entre el efecto visual que desea y una relación de contraste accesible. Pero es importante recordar que la accesibilidad siempre debe tener prioridad.

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---

## Cuestionario 2

- **1.¿Qué es el contraste en el contexto del diseño web?**

  - [ ] a) El brillo de los colores en una página web.
  - [x] b) La diferencia entre dos colores y la facilidad con la que se pueden distinguir. //correcto
  - [ ] c) El número de colores utilizados en una página web.
  - [ ] d) La nitidez de las imágenes en una página web.

- **2.Según las Pautas de Accesibilidad al Contenido en la Web (WCAG), ¿cuál es la relación de contraste mínima que debe tener el texto para cumplir con el estándar AA?**

  - [ ] a) 3:1
  - [x] b) 4.5:1 //correcto
  - [ ] c) 7:1
  - [ ] d) 21:1

- **3.¿Cuál de los siguientes aspectos NO se menciona como factor que influye en la relación de contraste?**

  - [ ] a) Tono
  - [ ] b) Saturación
  - [ ] c) Ligereza
  - [x] d) Opacidad //correcto

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---

## ¿Cuál es la importancia de una buena jerarquía visual en el diseño?

>[!NOTE]
> Algunos de los ejemplos interactivos pueden utilizar CSS que aún no has aprendido. No te preocupes por intentar comprender todo el código. El objetivo de los ejemplos es mostrarte una vista previa de estos conceptos de diseño para que comprendas mejor cómo funcionan las cosas.

La jerarquía visual se refiere a la forma en que diseñas y muestras el contenido de tu página para guiar la atención del espectador.

Una jerarquía sólida puede proporcionar una ruta clara que seguir con la vista, lo que garantiza que la información que transmites se consuma en el orden que tú deseas.

Consideremos un diseño de página básico en el que el HTML de la página es semánticamente correcto, pero el estilo aplicado no crea una jerarquía visual sólida.

- **Codigo Ejemplo**

  ```html
  <style>
    body {
      font-family: sans-serif;
      color: #333;
      background-color: #fff;
    }
  
    header, nav, main, section, footer {
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
    }
  
    h1, h2, h3 {
      font-weight: normal;
      font-size: 16px;
      margin: 5px 0;
    }
  
    nav a {
      text-decoration: none;
      color: #333;
      margin-right: 10px;
      font-size: 14px;
    }
  
    p {
      font-size: 14px;
      margin: 5px 0;
    }
  </style>
  
  <header>
    <h1>My Website</h1>
  </header>
  
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </nav>
  
  <main>
    <section>
      <h2>Welcome</h2>
      <p>This is the welcome section of the homepage.</p>
    </section>
  
    <section>
      <h2>Our Services</h2>
      <p>Here we describe what we offer.</p>
    </section>
  
    <section>
      <h2>Get in Touch</h2>
      <p>Contact us for more information.</p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2025 My Website</p>
  </footer>
  ```

Si el tamaño de la fuente no es claro, no hay ninguna indicación visible del flujo del documento, aunque los elementos estén separados por encabezados.

Para crear una jerarquía visual, debe aplicar diferentes tamaños de fuente a los niveles de los encabezados. También puede utilizar algo parecido a un «recuadro de llamada» para resaltar una sección específica.

- **Codigo Ejemplo**

  ```html
  <style>
    body {
      font-family: sans-serif;
      line-height: 1.6;
      padding: 20px;
      background: #f9f9f9;
      color: #333;
    }
  
    h1 {
      font-size: 32px;
      margin-bottom: 10px;
    }
  
    h2 {
      font-size: 24px;
      margin-top: 20px;
      margin-bottom: 8px;
    }
  
    h3 {
      font-size: 18px;
      margin-top: 15px;
      margin-bottom: 6px;
    }
  
    p {
      font-size: 16px;
      margin-bottom: 12px;
    }
  
    .callout {
      background-color: #fff3cd;
      border-left: 5px solid #ffc107;
      padding: 15px;
      margin: 20px 0;
    }
  </style>
  
  <h1>Understanding Visual Hierarchy</h1>
  <p>Visual hierarchy helps users navigate and understand content by guiding their attention.</p>
  
  <h2>Heading Tiers</h2>
  <p>Using different font sizes for headings creates structure and makes content scannable.</p>
  
  <h3>Level 3 Heading</h3>
  <p>This smaller heading further breaks down the section without overpowering it.</p>
  
  <div class="callout">
    <strong>Tip:</strong> Use a callout box like this to highlight important notes or key takeaways.
  </div>
  ```

La jerarquía visual también puede ayudar a aumentar la conversión de usuarios. Por ejemplo, puedes aprovechar el cuadro de llamada para llamar aún más la atención sobre un botón de llamada a la acción (CTA).

- **Codigo Ejemplo**

  ```html
  <style>
    body {
      font-family: sans-serif;
      padding: 20px;
      background-color: #f4f4f4;
      color: #333;
    }
  
    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    p {
      font-size: 16px;
      margin-bottom: 15px;
    }
  
    .callout {
      background-color: #e0f7fa;
      border-left: 5px solid #00acc1;
      padding: 20px;
      margin-top: 20px;
      text-align: center;
    }
  
    .cta-button {
      display: inline-block;
      background-color: #00acc1;
      color: white;
      padding: 12px 20px;
      font-size: 16px;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 10px;
    }
  
    .cta-button:hover {
      background-color: #008b9a;
    }
  </style>
  
  <h2>Ready to Boost Your Productivity?</h2>
  <p>Join thousands of users who are getting more done with our simple and effective tools.</p>
  
  <div class="callout">
    <strong>Don’t wait!</strong> Start your free trial today and see the difference.
    <br>
    <a href="#" class="cta-button">Start Free Trial</a>
  </div>
  ```

Por último, la jerarquía visual puede ser importante para transmitir otros componentes, como una barra de navegación o un pie de página.

Esto facilita a los usuarios encontrar la información esencial que pueden estar buscando.

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---

## Cuestionario 3

- **1.¿Cuál es el objetivo principal de la jerarquía visual en el diseño web?**

  - [ ] a) Para hacer el sitio web más colorido.
  - [x] b) Para guiar la atención del espectador en un orden específico. //correcto
  - [ ] c) Reducir la cantidad de contenido de una página.
  - [ ] d) Para aumentar la velocidad de carga de un sitio web.

- **2.¿Cuál de las siguientes opciones NO se menciona en el artículo como técnica para crear jerarquía visual?**

  - [ ] a) Usar diferentes tamaños de fuente para los encabezados.
  - [ ] b) Implementación de un cuadro de llamada para información importante.
  - [x] c) Aplicación de efectos de animación a los elementos. //correcto
  - [ ] d) Creación de secciones diferenciadas para la navegación y el pie de página.

- **3.¿Cómo puede una jerarquía visual sólida influir en la conversión de los usuarios?**

  - [ ] a) Haciendo que el sitio web sea más atractivo estéticamente.
  - [ ] b) Al reducir el número de clics necesarios para navegar por el sitio.
  - [x] c) Llamando la atención sobre información importante y botones de llamada a la acción (CTA). //correcto
  - [ ] d) Aumentando el posicionamiento del sitio web en los motores de búsqueda.

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---

## ¿Cómo funciona la escala en el diseño?

>[!NOTE]
> Algunos de los ejemplos interactivos pueden utilizar CSS que aún no has aprendido. No te preocupes por intentar comprender todo el código. El objetivo de los ejemplos es mostrarte una vista previa de estos conceptos de diseño para que comprendas mejor cómo funcionan las cosas.

La `"scale"` de algo se refiere a su tamaño.

Cuando analizas la escala en tu diseño web, estás analizando las relaciones de tamaño entre los diferentes elementos y cómo estos elementos pueden adaptarse a diferentes tamaños de pantalla.

Usar la escala correcta para tus elementos juega un papel importante en la jerarquía visual. Los elementos más grandes llamarán más la atención, lo que puede guiar a tus usuarios a través del contenido de la manera que tú quieras.

Por ejemplo, la separación visual entre un título y un párrafo llama la atención del lector, pero la escala debe ser la adecuada para conseguir un texto llamativo que atraiga al lector a esa sección.

- **Codigo Ejemplo**

  ```html
  <style>
    body {
      font-family: sans-serif;
      padding: 20px;
      background-color: #fdfdfd;
      color: #333;
    }
  
    .section {
      margin-bottom: 40px;
    }
  
    .big-heading {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 12px;
    }
  
    .paragraph {
      font-size: 16px;
      max-width: 600px;
      line-height: 1.6;
    }
  </style>
  
  <div class="section">
    <div class="big-heading">Discover the Power of Smart Design</div>
    <p class="paragraph">
      Great design isn’t just about colors or fonts — it’s also about scale. 
      A large heading like this one instantly grabs your attention, while the paragraph beneath it provides context and detail.
      Proper scaling creates a clear path for the reader’s eye to follow.
    </p>
  </div>
  ```

Sin embargo, la escala no solo se aplica al texto, sino que también es importante para las imágenes. Y aunque la escala de una imagen de banner puede tener sentido para un diseño de escritorio, puede resultar demasiado grande para un diseño móvil.

Al reducir la escala de una imagen a una proporción más adecuada, se puede mantener el impacto visual y garantizar que la información del sitio sea visible.

- **Codigo Ejemplo**

  ```html
  <style>
    body {
      font-family: sans-serif;
      padding: 20px;
      background-color: #fefefe;
      color: #333;
    }
  
    .banner {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto 20px auto;
      border-radius: 8px;
    }
  
    .content {
      max-width: 600px;
      margin: 0 auto;
      font-size: 16px;
      line-height: 1.6;
    }
  
    @media (max-width: 600px) {
      .banner {
        max-width: 90%;
      }
  
      .content {
        font-size: 15px;
      }
    }
  </style>
  
  <img 
    src="https://placehold.co/1200x400/png?text=Large+Banner+Image"
    alt="Banner" 
    class="banner"
  >
  
  <div class="content">
    <p>
      This banner image looks great on a large screen, but on smaller devices, it scales down automatically.
      That way, it still delivers a strong visual impression without pushing the actual content off the screen.
      Scaling images properly helps maintain balance and accessibility across layouts.
    </p>
  </div>
  ```

La escala también es importante para la interactividad y la capacidad de utilizar realmente su sitio web. Si el texto de una barra de navegación no tiene una escala adecuada, a los usuarios de teléfonos móviles les resultará difícil pulsar los enlaces.

Y si lo escala adecuadamente, obtendrá enlaces que no solo son más fáciles de leer, sino también más fáciles de pulsar para sus usuarios móviles.

- **Codigo Ejemplo**

  ```html
  <style>
    body {
      font-family: sans-serif;
      padding: 20px;
      margin: 0;
      background-color: #fafafa;
    }
  
    .navbar {
      background-color: #004080;
      padding: 15px 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  
    .nav-link {
      color: white;
      text-decoration: none;
      font-size: 18px;
      padding: 10px 15px;
      display: inline-block;
      border-radius: 4px;
    }
  
    .nav-link:hover {
      background-color: #0059b3;
    }
  
    @media (max-width: 600px) {
      .nav-link {
        font-size: 20px;
        padding: 14px 18px;
      }
    }
  </style>
  
  <nav class="navbar">
    <a href="#" class="nav-link">Home</a>
    <a href="#" class="nav-link">About</a>
    <a href="#" class="nav-link">Services</a>
    <a href="#" class="nav-link">Contact</a>
  </nav>
  ```

La escala es importante en tus diseños de muchas maneras. Hemos cubierto los aspectos básicos, por lo que ahora deberías tener una comprensión fundamental de su importancia.

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---

## Cuestionario 4

- **1.¿Cuál es el objetivo principal de utilizar la escala correcta en el diseño web?**

  - [ ] a) Para que todo tenga el mismo tamaño.
  - [x] b) Para guiar a los usuarios a través del contenido. //correcto
  - [ ] c) Aprovechar al máximo el espacio disponible.
  - [ ] d) Para que el texto sea más difícil de leer.

- **2.¿Por qué una imagen de banner grande puede ser problemática en un diseño para dispositivos móviles?**

  - [ ] a) Se carga demasiado lento.
  - [ ] b) No es visualmente atractivo.
  - [x] c) Ocupa demasiado espacio en la pantalla. //correcto
  - [ ] d) No es lo suficientemente interactivo.

- **3.¿Qué es importante tener en cuenta al escalar elementos de navegación en dispositivos móviles?**

  - [ ] a) Haciéndolos lo más pequeños posible.
  - [x] b) Asegurarse de que sean fáciles de tocar. //correcto
  - [ ] c) Usar colores vivos.
  - [ ] d) Eliminarlos por completo.

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---

## ¿Cómo funciona la alineación en el diseño?

>[!NOTE]
> Algunos de los ejemplos interactivos pueden utilizar CSS que aún no has aprendido. No te preocupes por intentar comprender todo el código. El objetivo de los ejemplos es mostrarte una vista previa de estos conceptos de diseño para que comprendas mejor cómo funcionan las cosas.

Cuando diseñas páginas web, es importante crear diseños coherentes y visualmente atractivos. Una forma de lograrlo es mediante el uso de la alineación.

La alineación es el proceso de organizar el texto y las imágenes de manera que se cree una conexión visual entre los elementos.

Ayuda a crear una sensación de orden y organización en la página, lo que facilita a los usuarios la navegación y la comprensión del contenido.

Hay varios tipos de alineación que puedes utilizar, pero los básicos son:

- `left alignment`

- `center alignment`

- `right alignment`

- `justified alignment`

- `vertical alignment`

Las alineaciones a la izquierda, a la derecha y al centro son subtipos de la alineación horizontal, mientras que la alineación vertical se utiliza para alinear elementos a lo largo de un eje vertical.

Veamos más de cerca cada tipo de alineación y cómo puedes utilizarlas en tus diseños.

La alineación a la izquierda se utiliza habitualmente con texto, donde cada elemento se alinea con el margen izquierdo. Alinear todos los encabezados y párrafos de una página web con el margen izquierdo facilita al usuario la lectura y el seguimiento del contenido.

- **Codigo Ejemplo**

  ```html
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #fff;
      color: #222;
      max-width: 700px;
      margin: 0 auto;
    }
  
    h1, h2, h3, p {
      text-align: left;
      margin: 10px 0;
    }
  
    p {
      line-height: 1.5;
    }
  </style>
  
  <h1>Why Left Alignment Matters</h1>
  <p>Left alignment is one of the most common and effective ways to present text on web pages.</p>
  
  <h2>Consistency</h2>
  <p>Aligning all headings and paragraphs to the left margin creates a clean and consistent reading flow.</p>
  
  <h3>Easy to Follow</h3>
  <p>Users can easily scan and follow content without confusion or misalignment.</p>
  ```

Lo contrario a la alineación a la izquierda es la alineación a la derecha, donde cada elemento se alinea con el margen derecho. Esto se utiliza a menudo en sitios web para mostrar contenido adicional, como banners promocionales o anuncios.

- **Codigo Ejemplo**

  ```html
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #fff;
      color: #222;
      max-width: 700px;
      margin: 0 auto;
    }
  
    h1, h2, h3, p {
      text-align: right;
      margin: 10px 0;
    }
  
    p {
      font-size: 16px;
      line-height: 1.5;
    }
  </style>
  
  <h1>Right Alignment in Web Design</h1>
  <p>Right alignment is commonly used to display additional or promotional content on websites.</p>
  
  <h2>Secondary Content</h2>
  <p>Aligning text to the right margin can help separate it visually from the main content.</p>
  
  <h3>Promotional Use</h3>
  <p>This alignment is often chosen for banners, advertisements, or sidebar messages.</p>
  ```

Por ejemplo, un anuncio alineado al margen derecho destaca del resto del contenido de la página, pero no distrae al usuario del contenido principal.

La alineación centrada consiste en centrar los elementos en la página. Se suele utilizar para encabezados, logotipos y otros elementos importantes sobre los que se desea llamar la atención.

- **Codigo Ejemplo**

  ```html
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #fff;
      color: #222;
      max-width: 700px;
      margin: 0 auto;
    }
  
    h1, h2, h3, p {
      text-align: center;
      margin: 10px 0;
    }
  
    p {
      font-size: 16px;
      line-height: 1.5;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  </style>
  
  <h1>Center Alignment for Impact</h1>
  <p>Center alignment is perfect for drawing attention to headings and important elements.</p>
  
  <h2>Eye-Catching Layout</h2>
  <p>By centering key content, you make it stand out and create a balanced visual appeal.</p>
  
  <h3>Common Uses</h3>
  <p>This technique is often used for logos, hero headings, and call-to-action messages.</p>
  ```

La alineación justificada es cuando el texto se alinea tanto al margen izquierdo como al derecho. Se suele utilizar en pasajes descriptivos o artículos, y crea un aspecto limpio y profesional.

- **Codigo Ejemplo**

  ```html
  <style>
    body {
      font-family: Georgia, serif;
      padding: 20px;
      background-color: #fff;
      color: #222;
      max-width: 700px;
      margin: 0 auto;
    }
  
    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
  
    p {
      text-align: justify;
      line-height: 1.7;
      margin-bottom: 20px;
    }
  </style>
  
  <h1>Justified Alignment for Clean Text Blocks</h1>
  
  <p>
    Justified alignment ensures that each line of text stretches evenly between the left and right margins. 
    This creates a smooth, block-like appearance that looks very polished and professional. 
    It’s commonly used in newspapers, magazines, and formal documents where a uniform look is desired.
  </p>
  
  <p>
    However, care should be taken with justified text to avoid uneven spacing or "rivers" of white space, 
    especially on narrow columns or screens. Proper hyphenation and responsive design can help maintain readability.
  </p>
  ```

El último tipo de alineación es la alineación vertical, que se utiliza para alinear elementos a lo largo de un eje vertical.

La alineación vertical se puede utilizar, por ejemplo, para un formulario de contacto en un sitio web. Alinear todos los campos del formulario, como el nombre, el correo electrónico y el mensaje, a lo largo de un eje vertical facilita al usuario el rellenar el formulario.

- **Codigo Ejemplo**

  ```html
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #fff;
      color: #222;
      max-width: 400px;
      margin: 0 auto;
    }
  
    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  
    label {
      font-weight: bold;
      margin-bottom: 5px;
    }
  
    input, textarea {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 100%;
      box-sizing: border-box;
    }
  
    button {
      padding: 10px;
      background-color: #007bff;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  </style>
  
  <form>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="e.g., Jane Doe">
  
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="janedoe@example.com">
  
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="4" placeholder="Write your message here"></textarea>
  
    <button type="submit">Submit</button>
  </form>
  ```

Al utilizar diferentes tipos de alineación, puedes crear una sensación de orden y organización en la página que facilita a los usuarios la navegación y la comprensión del contenido.

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---

## Cuestionario 5

- **1.¿Qué es la alineación en el diseño?**

  - [ ] a) Proceso de añadir bordes a los elementos de una página.
  - [x] b) Proceso de disposición del texto y las imágenes de manera que se cree una conexión visual entre los elementos. //correcto
  - [ ] c) El proceso de añadir color a un diseño.
  - [ ] d) El proceso de creación del diseño de una página web.

- **2.¿Para qué se suele utilizar la alineación a la izquierda?**

  - [ ] a) Se usa comúnmente con videos.
  - [ ] b) Se utiliza habitualmente con elementos de pie de página.
  - [x] c) Se utiliza habitualmente con texto en el que cada elemento está alineado con el margen izquierdo. //correcto
  - [ ] d) Se usa comúnmente con listas.

- **3.¿Qué es la alineación vertical?**

  - [x] a) Se utiliza para alinear elementos a lo largo de un eje vertical. //correcto
  - [ ] b) Se utiliza para alinear elementos a lo largo de un eje diagonal.
  - [ ] c) Se utiliza para alinear elementos a lo largo de un eje horizontal.
  - [ ] d) Se utiliza para alinear elementos a lo largo de un eje circular.

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---

## ¿Cuál es la importancia del `White space` en el diseño?

El `White space` se refiere a cualquier tipo de espacio alrededor de elementos como imágenes, texto y botones. El espacio en blanco es importante en el diseño porque ayuda a crear un equilibrio entre los elementos de la página.

Veamos algunos ejemplos de cómo se puede utilizar eficazmente el espacio en blanco en el diseño.

Por ejemplo, consideremos un botón de llamada a la acción (CTA). Las CTA se utilizan para animar a los usuarios a realizar una acción específica, como suscribirse a un boletín informativo o realizar una compra.

En la página de inicio de freeCodeCamp, el botón CTA está separado visualmente de otros elementos. La imagen siguiente muestra este botón, con una cierta cantidad de espacio a su alrededor.

![En la página de inicio de freeCodeCamp, el botón CTA está separado visualmente de otros elementos.](./img/whitespace.webp)

Al utilizar el espacio en blanco de manera eficaz, podemos ayudar a que un botón CTA destaque más y animar a los usuarios a hacer clic en él.

Ahora veamos más de cerca los diferentes tipos de espacio en blanco.

En este primer ejemplo se utilizan tanto espacios en blanco macro como activos. Los espacios en blanco macro son los espacios entre elementos más grandes, como imágenes, bloques de texto y botones.

Los espacios en blanco activos son aquellos que se crean intencionadamente para guiar la mirada del usuario y llamar su atención sobre determinados elementos de la página.

En contraste con el espacio en blanco activo, también existe el espacio en blanco pasivo. El espacio en blanco pasivo es el espacio que queda después de colocar todos los elementos de una página.

Otro tipo de espacio en blanco sería el espacio en blanco micro. Se trata del espacio entre los caracteres individuales de una línea de texto.

La imagen siguiente muestra la sección de preguntas frecuentes de la página de inicio de freeCodeCamp, donde este espaciado permite leer fácilmente cada pregunta y respuesta.

![Questions section](./img/questionsSection.webp)

El microespacio en blanco es importante porque ayuda a mejorar la legibilidad y la claridad, facilitando a los usuarios el escaneo y la comprensión del contenido.

Al diseñar sus páginas web, siempre debe tener en cuenta la ley de la proximidad. Esta ley establece que los elementos que están cerca entre sí se perciben como relacionados, mientras que los elementos que están lejos se perciben como no relacionados.

Puede utilizar el espacio en blanco para agrupar elementos relacionados y ayudar a los usuarios a navegar por el contenido de su página.

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---

## Cuestionario 6

- **1.¿Qué es el espacio en blanco macro?**

  - [ ] a) El espacio entre los caracteres individuales en una línea de texto.
  - [ ] b) Solo el espacio alrededor de las imágenes.
  - [ ] c) El espacio alrededor del texto únicamente.
  - [x] d) El espacio entre elementos más grandes, como imágenes, bloques de texto y botones. //correcto

- **2.¿Qué es el espacio en blanco activo?**

  - [ ] a) Espacio destinado exclusivamente a elementos de texto en una página.
  - [ ] b) Espacio destinado a los elementos de figura en una página.
  - [ ] c) Espacio destinado a los elementos de una lista en una página. //correcto
  - [x] d) Espacio creado intencionadamente para guiar la mirada del usuario y llamar su atención sobre determinados elementos de la página.

- **3.¿Qué es el espacio en blanco pasivo?**

  - [x] a) Espacio que queda libre después de colocar todos los elementos de una página. //correcto
  - [ ] b) Espacio destinado exclusivamente a elementos de texto en una página.
  - [ ] c) Espacio destinado a los elementos de imagen en una página.
  - [ ] d) Espacio destinado a los elementos de navegación en una página.

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---

## ¿Cuáles son las mejores prácticas para trabajar con imágenes en tus diseños?

>[!NOTE]
> Algunos de los ejemplos interactivos pueden utilizar CSS que aún no has aprendido. No te preocupes por intentar comprender todo el código. El objetivo de los ejemplos es mostrarte vistas previas de estos conceptos de diseño para que comprendas mejor cómo funcionan las cosas.

Añadir imágenes a tus sitios web es una forma estupenda de atraer a tus usuarios y aumentar el atractivo visual de tu sitio. Sin embargo, hay algunas cosas que debes tener en cuenta al trabajar con imágenes en tus diseños.

Lo primero que debes considerar es crear imágenes adaptables. Las imágenes adaptables son imágenes que se ajustan al tamaño de la pantalla en la que se visualizan. Esto es importante porque garantiza que tus imágenes se vean bien en todos los dispositivos, desde computadoras de escritorio hasta teléfonos móviles.

- **Codigo Ejemplo**

  ```html
  <style>
    body {
      font-family: sans-serif;
      padding: 20px;
      background-color: #fefefe;
      color: #333;
      text-align: center;
    }
  
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
  
    p {
      font-size: 16px;
      max-width: 600px;
      margin: 20px auto;
      line-height: 1.6;
    }
  </style>
  
  <h1>Responsive Cat Image</h1>
  
  <img 
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
    alt="Two cats peacefully sleeping together."
  />
  
  <p>
    This image automatically scales based on the screen size. Whether you're viewing on a desktop or a mobile phone,
    it adjusts its size without losing proportions, making the design clean and user-friendly on all devices.
  </p>
  ```

Otra cosa a tener en cuenta es la resolución de las imágenes. Las imágenes de mayor calidad y mejor resolución tienen más píxeles por pulgada. Los píxeles son pequeños cuadrados que componen una imagen.

Los píxeles por pulgada, o PPI, son el número de píxeles que hay en una pulgada de una imagen. Cuanto mayor sea el PPI, mejor será la calidad de la imagen.

Debes asegurarte de que tus imágenes sean de alta calidad y se vean bien en todos los dispositivos. Esto significa que debe utilizar imágenes de alta resolución optimizadas para la web.

Otra cosa a tener en cuenta es el tamaño de sus imágenes y cómo encajan en los espacios del diseño. Debe asegurarse de que sus imágenes tengan el tamaño adecuado y no sean demasiado grandes ni demasiado pequeñas.

El uso de imágenes grandes destinadas a encajar en espacios más pequeños del diseño puede ralentizar su sitio web y dificultar la carga del mismo a los usuarios. Debes asegurarte de que tus imágenes tengan el tamaño adecuado y estén optimizadas para la web.

En cuanto a la ubicación de las imágenes, debes pensar en el equilibrio, la jerarquía y la alineación para garantizar que tus imágenes estén optimizadas para la web.

El equilibrio es la distribución del peso visual en un diseño. Debes asegurarte de que haya un buen equilibrio entre el texto y las imágenes del sitio para crear un diseño armonioso.

- **Codigo Ejemplo**

  ```html
  <style>
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 40px 20px;
      background-color: #f9f9f9;
      color: #333;
    }
  
    .container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
      max-width: 1000px;
      margin: 0 auto;
    }
  
    .text {
      flex: 1 1 400px;
    }
  
    .text h2 {
      font-size: 28px;
      margin-bottom: 10px;
    }
  
    .text p {
      font-size: 16px;
      line-height: 1.6;
    }
  
    .image {
      flex: 1 1 400px;
    }
  
    .image img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  </style>
  
  <div class="container">
    <div class="text">
      <h2>Balanced Layout</h2>
      <p>
        Balance is essential in web design. By evenly distributing visual weight—such as pairing this block of text
        with a complementary image—you create a layout that feels calm, structured, and easy to navigate.
      </p>
    </div>
  
    <div class="image">
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Two cats peacefully sleeping together.">
    </div>
  </div>
  ```

La jerarquía es el orden en que se ven los elementos en una página. Debes asegurarte de que las imágenes que se alinean con contenido importante se coloquen más arriba que las imágenes menos importantes.

- **Codigo Ejemplo**

  ```html
  <style>
    body {
      font-family: sans-serif;
      padding: 30px 20px;
      background-color: #fff;
      color: #222;
      max-width: 800px;
      margin: 0 auto;
    }
  
    .section {
      margin-bottom: 40px;
    }
  
    .section img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 15px;
    }
  
    .section h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    .section p {
      font-size: 16px;
      line-height: 1.6;
    }
  </style>
  
  <div class="section">
    <img 
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
      alt="Two cats peacefully sleeping together."
    >
    <h2>Our Feline Rescue Mission</h2>
    <p>
      This image supports one of our most important stories — the rescue of 12 stray cats from a storm drain. 
      Placing it at the top ensures visitors connect emotionally with our mission right away.
    </p>
  </div>
  
  <div class="section">
    <h2>Upcoming Fundraiser</h2>
    <p>
      Join us for a small fundraising event to support our shelter. It’ll be a fun, casual afternoon with 
      snacks, games, and of course — plenty of cats!
    </p>
    <img 
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
      alt="Two cats peacefully sleeping together."
    >
  </div>
  ```

La alineación es la ubicación de los elementos en relación entre sí. Debes asegurarte de que tus imágenes estén alineadas con el texto y otros elementos de tu sitio web para crear un diseño coherente.

- **Codigo Ejemplo**

  ```html
  <style>
    body {
      font-family: sans-serif;
      padding: 40px 20px;
      background-color: #ffffff;
      color: #222;
      max-width: 900px;
      margin: 0 auto;
    }
  
    .aligned-content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 20px;
    }
  
    .aligned-content img {
      width: 300px;
      height: auto;
      border-radius: 8px;
      flex-shrink: 0;
    }
  
    .aligned-text {
      flex: 1;
      min-width: 250px;
    }
  
    .aligned-text h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    .aligned-text p {
      font-size: 16px;
      line-height: 1.6;
    }
  </style>
  
  <div class="aligned-content">
    <img 
      src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
      alt="Two cats peacefully sleeping together."
    >
  
    <div class="aligned-text">
      <h2>Aligned Elements</h2>
      <p>
        In this example, the image is aligned horizontally next to the text block. This creates a visually cohesive layout, 
        where both elements feel like they belong together. Proper alignment like this improves readability and reinforces 
        structure in your design.
      </p>
    </div>
  </div>
  ```

Lo último que hay que tener en cuenta es la accesibilidad de las imágenes. Debes asegurarte de que tus imágenes sean accesibles para todos los usuarios, incluidos aquellos con discapacidad visual. Esto significa que debes utilizar texto alternativo para tus imágenes, de modo que los lectores de pantalla puedan leer el texto a los usuarios con discapacidad visual.

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---

## Cuestionario 7

- **1.¿Cuál es la importancia del equilibrio en el diseño al colocar imágenes?**

  - [ ] a) Para garantizar que las imágenes tengan el tamaño adecuado.
  - [ ] b) Para que las imágenes sean accesibles para todos los usuarios.
  - [x] c) Crear un diseño armonioso distribuyendo el peso visual. //correcto
  - [ ] d) Para mejorar la resolución de las imágenes.

- **2.¿Cuál es el propósito de utilizar imágenes de alta resolución en tus diseños?**

  - [ ] a) Para asegurarte de que tus imágenes tengan el color adecuado.
  - [x] b) Para garantizar que tus imágenes se vean bien en todos los dispositivos. //correcto
  - [ ] c) Para asegurarte de que tus imágenes tengan el tamaño adecuado.
  - [ ] d) Para asegurarte de que tus imágenes sean accesibles para todos los usuarios.

- **3.¿Qué es el PPI?**

  - [x] a) El número de píxeles por pulgada de una imagen. //correcto
  - [ ] b) El número de puntos por pulgada de una imagen.
  - [ ] c) El número de píxeles por centímetro de una imagen.
  - [ ] d) El número de picas por imagen.

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---

## ¿Qué es la mejora progresiva?

La mejora progresiva es un enfoque de diseño que garantiza que todos los usuarios, independientemente del navegador o dispositivo que utilicen, puedan acceder al contenido y las funciones esenciales de una aplicación.

Se centra en ofrecer una experiencia básica que funcione para todos, al tiempo que ofrece funciones adicionales y mejoras a los usuarios con navegadores más avanzados o mejores conexiones a Internet.

El enfoque de mejora progresiva se basa en los siguientes principios básicos:

- Todo el contenido principal y las funciones básicas deben ser accesibles en todos los navegadores.
- Todos los diseños avanzados deben proporcionarse a través de hojas de estilo CSS externas.
- Todas las funciones avanzadas deben proporcionarse a través de archivos JavaScript externos.
- Se deben respetar las preferencias del navegador del usuario.

El uso de un enfoque de mejora progresiva hace que sus aplicaciones sean más accesibles, ya que todo el contenido y las funciones principales no deben bloquearse en entornos no compatibles.

En términos de velocidad, un enfoque de mejora progresiva también puede ayudar a mejorar el rendimiento de sus aplicaciones.

Los usuarios que trabajen con velocidades de conexión a Internet más lentas podrán seguir accediendo al contenido, ya que el navegador descargará primero los recursos necesarios.

En lo que respecta al SEO, la mejora progresiva también puede ayudar a mejorar la visibilidad de sus aplicaciones.

Los motores de búsqueda podrán rastrear el contenido de sus aplicaciones, ya que el contenido principal está disponible en la respuesta HTML inicial.

Aunque algunos han criticado este enfoque por considerar que no siempre es realista para aplicaciones cuya funcionalidad depende en gran medida de JavaScript, sigue siendo una buena práctica a seguir a la hora de crear aplicaciones.

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---

## Cuestionario 8

- **1.¿Cuál es el objetivo principal de la mejora progresiva?**

  - [ ] a) Asegurarse de que la aplicación dependa en gran medida de JavaScript.
  - [x] b) Garantizar que todos los usuarios, independientemente del navegador o dispositivo que utilicen, puedan acceder al contenido y las funciones esenciales de una aplicación. //correcto
  - [ ] c) Garantizar que todas las personas puedan acceder a las últimas funciones complejas.
  - [ ] d) Para garantizar que la aplicación solo esté disponible para los usuarios que tengan los navegadores más recientes.

- **2.¿Cuál de las siguientes opciones NO es un principio básico de la mejora progresiva?**

  - [ ] a) Se deben respetar las preferencias del navegador del usuario.
  - [ ] b) Todos los diseños avanzados deben proporcionarse a través de hojas de estilo CSS externas.
  - [c] c) Las preferencias del navegador del usuario deben ignorarse. //correcto
  - [ ] d) Todas las funciones avanzadas deben proporcionarse a través de archivos JavaScript externos.

- **3.¿Cuál es una crítica común al enfoque de mejora progresiva?**

  - [x] a) No siempre es realista para aplicaciones que dependen en gran medida de JavaScript para su funcionalidad. //correcto
  - [ ] b) Puede dar lugar a una experiencia de usuario menos atractiva en los dispositivos modernos debido a su enfoque en la compatibilidad con versiones anteriores.
  - [ ] c) Esto da lugar a páginas web sobrecargadas, con código y recursos excesivos que los navegadores modernos no necesitan.
  - [ ] d) Requiere pruebas exhaustivas en navegadores antiguos y menos potentes, lo que puede resultar lento y costoso.

[☝️](#fundamentos-del-diseño-de-interfaces-de-usuario-ui)

---
