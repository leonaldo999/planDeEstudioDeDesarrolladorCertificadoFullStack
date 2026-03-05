# Cuestionario sobre accesibilidad CSS

Para aprobar el cuestionario, debes responder correctamente al menos 9 de las 10 preguntas siguientes.

---

1. **¿Por qué es necesario tener un buen contraste de colores en tu página web?**
  
   - [ ] a) Para resaltar los elementos importantes de la página.
   - [ ] b) Para que la página sea más dinámica.
   - [x] c) Para que el contenido de la página sea accesible y legible. // ❎
   - [ ] d) Para cumplir con los requisitos de optimización de motores de búsqueda (SEO).

2. **¿Cuál de las siguientes herramientas te permite introducir colores de fondo y de primer plano y comprobar su relación de contraste?**

   - [ ] a) TPGi Colour Contrast Analyzer
   - [ ] b) Canva
   - [ ] c) Figma
   - [x] d) WebAIM's Color Contrast Checker // ❎

3. **¿Cuál de las siguientes herramientas te permite seleccionar los colores de fondo y de primer plano del contenido que se muestra en tu pantalla y comprobar su relación de contraste?**
  
   - [ ] a) Figma
   - [ ] b) WebAIM's Color Contrast Checker
   - [ ] c) Canva
   - [x] d) TPGi Colour Contrast Analyzer // ❎

4. **¿Por qué NO se debe utilizar `display: none` y `visibility: hidden` para ocultar visualmente el contenido?**
  
   - [ ] a) Estos métodos hacen que solo las tecnologías de asistencia, como los lectores de pantalla, puedan acceder al contenido oculto.
   - [x] b) Estos métodos eliminan el contenido del árbol de accesibilidad, lo que imposibilita que los lectores de pantalla accedan al contenido oculto. // ❎
   - [ ] c) Estos métodos hacen que el contenido solo se oculte hasta que los usuarios muevan el ratón sobre él.
   - [ ] d) Estos métodos no funcionan con algunos navegadores.

5. **¿Qué es un árbol de accesibilidad?**
  
   - [ ] a) Una copia del árbol DOM.
   - [ ] b) Una representación visual del diseño de una página web.
   - [x] c) Una estructura utilizada por los lectores de pantalla para interpretar e interactuar con el contenido de una página web. // ❎
   - [ ] d) Una estructura utilizada por los lectores de pantalla para leer el contenido textual de una página web.

6. **¿Cuál de las siguientes opciones garantiza que una imagen tenga un ancho mínimo de `400px`, pero se amplíe cuando el ancho de la ventana gráfica sea superior a `1000px`?**
  
   - [ ] a)
          ```css
          img {
            width: max(400px, 20vw);
          }
          ```
   - [x] b)
          ```css
          img {
            width: max(400px, 40vw);
          }
          ``` // ❎
   - [ ] c)
          ```css
          img {
            width: max(400px, 10vw);
          }
          ```
   - [ ] d)
          ```css
          img {
            width: max(400px, 30vw);
          }
          ```

7. **¿Cuál de los siguientes valores de `scroll-behavior` permite un desplazamiento fluido?**
  
   - [ ] a) `revert`
   - [ ] b) `inherit`
   - [ ] c) `auto`
   - [x] d) `smooth` // ❎

8. **¿Cuál de las siguientes funciones se utiliza para detectar las preferencias de animación del usuario?**
  
   - [ ] a) `animation`
   - [x] b) `prefers-reduce-motion`  // ❎
   - [ ] c) `display-mode`
   - [ ] d) `prefers-contrast`

9. **¿Cuál de las siguientes opciones es un problema de accesibilidad del atributo `placeholder` en un elemento de entrada?**
  
   - [ ] a) El texto del placeholder impide que los lectores de pantalla lean el valor introducido.
   - [ ] b) El texto del placeholder es demasiado pequeño para poder leerlo.
   - [ ] c) El texto del placeholder impide que los lectores de pantalla lean el texto de la etiqueta de entrada.
   - [x] d) El texto del placeholder puede confundirse con un valor de entrada real. // ❎

10. **¿Qué hace el atributo `hidden`?**

    - [x] a) Oculta el contenido tanto visualmente como en el árbol de accesibilidad. // ❎
    - [ ] b) Oculta el contenido solo en el árbol de accesibilidad.
    - [ ] c) Oculta el contenido visualmente, pero el contenido está disponible en el árbol de accesibilidad.
    - [ ] d) Oculta el contenido y lo muestra al pasar el cursor por encima.
