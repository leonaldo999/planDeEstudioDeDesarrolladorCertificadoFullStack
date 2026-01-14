# Cuestionario sobre los fundamentos de CSS

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

---

- **1. ¿Cuáles son las partes principales de una regla CSS?**

  - [ ] a) Elementos y atributos
  - [ ] b) Estilo y hojas
  - [ ] c) Scripts y valores
  - [x] d) Selectores y bloques de declaración

- **2. ¿Cuál de las siguientes es la sintaxis correcta para una regla CSS?**

  - [ ] a)
          ```CSS
          font-family {
            body: Arial;
          }
          ```
  - [ ] b)
          ```CSS
          body [
            font-family: Arial;
          ]
          ```
  - [ ] c)
          ```CSS
          body {
            font-family; Arial:
          }
          ```
  - [X] d)
          ```CSS
          body {
            font-family: Arial;
          }
          ```

- **3. ¿Qué son los estilos predeterminados del navegador?**

  - [ ] a) Elementos HTML que tienen las mismas propiedades de estilo independientemente del navegador.
  - [x] b) Las reglas CSS que los navegadores aplican automáticamente.
  - [ ] c) Son estilos obligatorios que debes utilizar para elementos HTML específicos.
  - [ ] d) Son los temas de color para los distintos navegadores.

- **4. ¿Cuál es el valor predeterminado de la propiedad width?**

  - [ ] a) `100%`
  - [x] b) `auto`
  - [ ] c) `none`
  - [ ] d) `0`

- **5. ¿Qué especifica la propiedad `min-height`?**

  - [ ] a) La altura inicial de un elemento.
  - [ ] b) La altura máxima de un elemento.
  - [ ] c) La altura de un elemento.
  - [x] d) La altura mínima de un elemento.

- **6. ¿Cuál de las siguientes afirmaciones sobre el selector universal `*` es VERDADERA?**

  - [x] a) Tiene el valor de especificidad más bajo de todos los selectores.
  - [ ] b) Tiene la mayor especificidad porque puede aplicar estilos a todos los elementos de una página.
  - [ ] c) No puede restablecer estilos en diferentes navegadores.
  - [ ] d) Contribuye con 1 a todas las partes del valor de especificidad.

- **7. ¿Qué selector apunta correctamente a los elementos `li` de una lista ordenada?**

  - [x] a) `ol li {}`
  - [ ] b) `ol + li {}`
  - [ ] c) `ul li {}`
  - [ ] d) `li {}`

- **8. ¿Qué selector apunta a los elementos de párrafo de un elemento `div`?**

  - [ ] a) `div, p {}`
  - [x] b) `div p {}`
  - [ ] c) `p div {}`
  - [ ] d) `p, div {}`

- **9. ¿Dónde se aplican las propiedades de estilo del `margin`?**

  - [ ] a) En el borde del elemento.
  - [ ] b) Entre el contenido y el borde.
  - [ ] c) El espacio dentro del elemento.
  - [x] d) El espacio fuera del elemento.

- **10. ¿Dónde se aplica el estilo de la propiedad `padding`?**

  - [ ] a) El espacio fuera del elemento.
  - [ ] b) En el borde del elemento.
  - [x] c) El espacio dentro del elemento.
  - [ ] d) Entre el borde del elemento y los elementos circundantes.

- **11. ¿Qué afirmación es FALSA sobre los elementos de nivel de bloque?**

  - [ ] a) Pueden estirarse para adaptarse al ancho de su recipiente.
  - [x] b) No pueden ocupar todo el ancho disponible, ya que se les impide hacerlo.
  - [ ] c) Los elementos de nivel de bloque comienzan en una nueva línea y ocupan todo el ancho de su contenedor.
  - [ ] d) Los elementos comunes a nivel de bloque incluyen `div`, `p`, y `section`.

- **12. ¿Qué afirmación es FALSA cuando se utiliza el valor `inline-block`?**

  - [x] a) No comparten propiedades con elementos en línea o de nivel de bloque.
  - [ ] b) Pueden tener propiedades de `width` y `height`.
  - [ ] c) Los elementos conservan el flujo en línea, pero permiten establecer el `width` y el `height`.
  - [ ] d) Los elementos `inline-block` se comportan como elementos inline.

- **13. ¿Qué es VERDADERO sobre la palabra clave `!important`?**

  - [ ] a) Se utilizan para hacer comentarios sobre una propiedad CSS importante.
  - [ ] b) Facilitan el mantenimiento de las reglas CSS.
  - [x] c) Anulan la especificidad de otros selectores.
  - [ ] d) Se aseguran de que una propiedad CSS tenga la sintaxis correcta.

- **14. ¿Qué carácter precede al nombre de un selector de clase?**

  - [x] a) `.`
  - [ ] b) `*`
  - [ ] c) `$`
  - [ ] d) `#`

- **15. ¿Cuál de las siguientes afirmaciones sobre los elementos de nivel en línea es FALSA?**

  - [x] a) Siempre empiezan en una nueva línea.
  - [ ] b) No comienzan en una nueva línea.
  - [ ] c) Los elementos en línea comunes incluyen `span` e `img`.
  - [ ] d) Solo ocupan el espacio que necesitan.

- **16. ¿Dónde se accede a los estilos CSS internos?**

  - [ ] a) Se almacenan dentro del elemento `body` cuando solo hay una página web a la que aplicar estilo.
  - [x] b) Se escriben dentro de la sección de `style` dentro del elemento `head`.
  - [ ] c) Dado que constituyen el estilo básico del proyecto, se guardan en el archivo `styles.css` para que otras páginas web puedan acceder a ellos.
  - [ ] d) Son estilos importantes para el proyecto, por lo que no se comparten externamente.

- **17. ¿Cuál es el orden para aplicar la propiedad `padding` cuando se utiliza la sintaxis abreviada?**

  - [ ] a) `right`, `top`, `left`, `bottom`
  - [x] b) `top`, `right`, `bottom`, `left`
  - [ ] c) `top`, `bottom`, `left`, `right`
  - [ ] d) `left`, `right`, `top`, `bottom`

- **18. ¿Cuál es el orden para aplicar la propiedad `margin` cuando se utiliza la sintaxis abreviada?**

  - [ ] a) `right`, `top`, `left`, `bottom`
  - [x] b) `top`, `right`, `bottom`, `left`
  - [ ] c) `top`, `bottom`, `left`, `right`
  - [ ] d) `left`, `right`, `top`, `bottom`

- **19. ¿Para qué se utilizan los estilos CSS en línea?**

  - [ ] a) Se utilizan únicamente para dar estilo a elementos en línea.
  - [ ] b) Se utilizan para resolver el problema de la separación de preocupaciones.
  - [ ] c) Se utilizan para dar estilo a los elementos solo cuando todos aparecen en la misma línea de la ventana gráfica del navegador.
  - [x] d) Se utilizan para aplicar estilos directamente dentro del elemento, en lugar de utilizar CSS interno o externo.

- **20. ¿Qué símbolo precede al selector `ID`?**

  - [ ] a) `$`
  - [ ] b) `.`
  - [x] c) `#`
  - [ ] d) `*`
