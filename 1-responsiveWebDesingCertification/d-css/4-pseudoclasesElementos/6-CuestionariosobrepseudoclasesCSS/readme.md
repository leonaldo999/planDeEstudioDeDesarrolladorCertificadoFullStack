# Cuestionario sobre pseudoclases CSS

Para aprobar el cuestionario, debe responder correctamente al menos 18 de las 20 preguntas siguientes.

---

- **1. ¿Qué son las pseudo-clases?**
  - [x] a) Son palabras clave que se añaden a un selector y que aplican un estilo a un elemento en función de su estado. // ❎
  - [ ] b) Son selectores que se usan para agregar efectos de movimiento a un elemento durante las interacciones.
  - [ ] c) Son propiedades que ajustan el tamaño o el diseño de un elemento en la página.
  - [ ] d) Son reglas CSS que crean contenido adicional dentro de un elemento cuando es necesario.

- **2. ¿Qué pseudo-clase se aplica cuando se coloca un dispositivo señalador sobre un elemento?**
  - [x] a) `:hover` // ❎
  - [ ] b) `:active`
  - [ ] c) `:checked`
  - [ ] d) `:focus`

- **3. ¿Qué pseudo-elemento te permite aplicar estilo a la primera letra de un párrafo?**
  - [x] a) `::first-letter` // ❎
  - [ ] b) `:last-of-type`
  - [ ] c) `:first-child`
  - [ ] d) `:first-letter`

- **4. ¿Qué pseudo-clase cambia el estilo de un elemento mientras se hace clic en él?**
  - [x] a) `:active` // ❎
  - [ ] b) `:focus`
  - [ ] c) `:checked`
  - [ ] d) `:hover`

- **5. ¿Qué pseudo-clase se utiliza para aplicar estilo a un elemento cuando está listo para recibir la entrada del usuario, como un campo de texto en el que se hace clic o se pulsa la tecla Tab?**
  - [ ] a) `::focus`
  - [ ] b) `:active`
  - [x] c) `:focus` // ❎
  - [ ] d) `:visited`

- **6. ¿Cuál de las siguientes reglas CSS añade correctamente el texto `Note:` delante de cada elemento de párrafo con una clase de `note`?**
  - [ ] a)
        ```css
        .note::before {
          content: "Note:";
        }
        ```
  - [ ] b)
        ```css
        p.note::after {
          content: "Note:";
        }
        ```
  - [x] c) // ❎
        ```css
        p.note::before {
          content: "Note:";
        }
        ```
  - [ ] d)
        ```css
        p::before {
          content: "Note:";
        }
        ```

- **7. ¿Qué pseudo-clase se aplica a un campo de entrada cuando se selecciona o se activa?**
  - [ ] a) `:optional`
  - [ ] b) `:required`
  - [x] c) `:checked` // ❎
  - [ ] d) `:disabled`

- **8. ¿Cuál de las siguientes es la sintaxis correcta para aplicar estilo al último elemento secundario de una lista?**
  - [ ] a)
        ```css
        #li:last-child {
          color: blue;
        }
        ```
  - [ ] b)
        ```css
        .li:last-child() {
          color: blue;
        }
        ```
  - [x] c) // ❎
        ```css
        li:last-child {
          color: blue;
        }
        ```
  - [ ] d)
        ```css
        li:nth-child(last) {
          color: blue;
        }
        ```

- **9. ¿Qué pseudo-clase se aplica a los campos de entrada que no es obligatorio rellenar?**
  - [ ] a) `:enabled`
  - [ ] b) `:required`
  - [x] c) `:optional` // ❎
  - [ ] d) `::optional`

- **10. ¿Qué hace la pseudo-clase `:disabled`?**
  - [ ] a) Estiliza las entradas verificadas.
  - [ ] b) Selecciona los elementos que no coinciden con un selector determinado.
  - [ ] c) Estiliza los elementos sobre los que se pasa el cursor.
  - [x] d) Estiliza elementos que no están disponibles para la interacción del usuario. // ❎

- **11. ¿Qué pseudo-clase se aplica cuando un campo de formulario cumple los criterios de validación?**
  - [x] a) `:valid` // ❎
  - [ ] b) `:checked`
  - [ ] c) `:required`
  - [ ] d) `:disabled`

- **12. ¿Cuál de estas no es una pseudo-clase de ubicación?**
  - [ ] a) `:visited`
  - [x] b) `:current` // ❎
  - [ ] c) `:link`
  - [ ] d) `:any-link`

- **13. ¿Cuál de las siguientes opciones selecciona el tercer elemento de la lista?**
  - [ ] a)
        `css
  li:child(3) {
    color: red;
  }
  `
  - [ ] b)
        `css
  li:last-child(3) {
    color: red;
  }
  `
  - [x] c) // ❎
        `css
  li:nth-child(3) {
    color: red;
  }
  `
  - [ ] d)
        `css
  li:nth-child(three) {
    color: red;
  }
  `

- **14. ¿Qué elementos tendrán un color azul con el siguiente CSS?**

  ```css
  p:is(.blue, .highlight) {
    color: blue;
  }
  ```

  - [ ] a)
        ```html
        <p>Paragraph 1</p>
        <span class="highlight">Paragraph 2</span>
        ```
  - [x] b) // ❎
        ```html
        <p class="blue">Paragraph 1</p>
        <p class="highlight">Paragraph 2</p>
        ```
  - [ ] c)
        ```html
        <div class="blue">Paragraph 1</div>
        <div class="highlight">Paragraph 2</div>
        ```
  - [ ] d)
        ```html
        <p class="class">Paragraph 1</p>
        <p class="highlight">Paragraph 2</p>
        ```

- **15. ¿Qué hace la pseudo-clase `:not()`?**
  - [ ] a) Añade estilos a todos los elementos.
  - [ ] b) Selecciona los elementos que coinciden con un selector determinado.
  - [ ] c) Selecciona todos los elementos secundarios de un elemento principal.
  - [x] d) Selecciona los elementos que no coinciden con un selector determinado. // ❎

- **16. ¿Qué hace la siguiente regla CSS?**

  ```css
  p:first-of-type {
    font-style: italic;
  }
  ```

  - [ ] a) Selecciona todos los elementos `p` del documento.
  - [ ] b) Selecciona el primer elemento secundario de cada elemento `p`.
  - [x] c) Selecciona el primer elemento `p` dentro de un contenedor principal. // ❎
  - [ ] d) Selecciona el primer elemento `p` del documento.

- **17. ¿Qué hace la pseudo-clase `:last-of-type`?**
  - [x] a) Selecciona el último elemento secundario de un tipo específico dentro de su elemento principal. // ❎
  - [ ] b) Selecciona el primer elemento secundario de un tipo específico dentro de su elemento principal.
  - [ ] c) Selecciona todos los elementos secundarios de un tipo específico dentro de su elemento principal.
  - [ ] d) Selecciona el elemento secundario central de un tipo específico dentro de su elemento principal.

- **18. ¿Qué pseudo-clase se utiliza para seleccionar el segundo elemento de una lista?**
  - [x] a) `:nth-child(2)` // ❎
  - [ ] b) `:is()`
  - [ ] c) `:first-child`
  - [ ] d) `:required`

- **19. ¿Cuál de estas es una pseudo-clase funcional?**
  - [x] a) `:is()` // ❎
  - [ ] b) `:first-child`
  - [ ] c) `:checked`
  - [ ] d) `:match()`

- **20. ¿Cuál de estas no es una pseudo-clase funcional?**
  - [ ] a) `:has()`
  - [ ] b) `:where()`
  - [ ] c) `:not()`
  - [x] d) `:contains()` // ❎
