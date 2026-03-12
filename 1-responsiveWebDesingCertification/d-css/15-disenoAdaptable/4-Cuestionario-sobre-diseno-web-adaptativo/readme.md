# Cuestionario sobre diseño web adaptativo

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

---

1. **¿Qué son los breakpoints en el diseño web adaptativo?**
  
   - [ ] a) Puntos específicos que se utilizan para determinar cómo se comportará un diseño tabular en la página.
   - [x] b) Puntos específicos en un diseño en los que el diseño y el contenido se ajustan para adaptarse a diferentes tamaños de pantalla. // ❎
   - [ ] c) Puntos específicos en un diseño en los que los elementos flotantes se superponen con otros elementos de la página.
   - [ ] d) Puntos específicos que se utilizan para establecer las columnas y filas de un diseño de cuadrícula o flexible.

2. **¿Cuál de los siguientes NO es un breakpoints utilizado para dispositivos más pequeños?**

   - [ ] a) `600px`
   - [ ] b) `480px`
   - [x] c) `960px` // ❎
   - [ ] d) `320px`

3. **¿Cuál es el objetivo principal del uso de consultas de `@media queries` en el diseño web adaptativo?**
  
   - [ ] a) Cambiar la combinación de colores de la página para los navegadores Safari.
   - [x] b) Aplicar diferentes estilos en función del tamaño de la pantalla o del tipo de dispositivo. // ❎
   - [ ] c) Ajustar los márgenes y el relleno de los diseños utilizando CSS flexbox.
   - [ ] d) Crear animaciones para diseños de tablas.

4. **¿Qué característica multimedia de una `@media queries` comprueba el ancho de la ventana del navegador?**
  
   - [ ] a) `set-width`
   - [x] b) `min-width` // ❎
   - [ ] c) `allow-width`
   - [ ] d) `accept-width`

5. **¿Qué hará el siguiente código?**

    ```css
    @media screen and (min-width: 768px) {
      /* Styles go here */
    }
    ```

   - [x] a) Esto aplicará estilos para pantallas de `768px` o más. // ❎
   - [ ] b) Esto ignorará los estilos para pantallas de `768px` de ancho.
   - [ ] c) Esto aplicará estilos para pantallas de menos de `768px`.
   - [ ] d) Esto aplicará estilos para pantallas de solo `768px` de ancho.

6. **¿En qué se centra el diseño `mobile-first`?**
  
   - [ ] a) En diseñar primero para pantallas Android más pequeñas e ignorar los dispositivos Apple.
   - [x] b) En diseñar primero para pantallas más pequeñas y ampliar el diseño para dispositivos más grandes. // ❎
   - [ ] c) En diseñar solo para dispositivos más pequeños e ignorar los demás.
   - [ ] d) En diseñar solo para dispositivos móviles fabricados por Apple.

7. **¿Qué consulta de `@media queries` aplicará estilos cuando el ancho del dispositivo esté entre 600px y 1200px?**
  
   - [ ] a) `@media screen and (width: 800px)`
   - [ ] b) `@media screen and (min-width: 600px)`
   - [ ] c) `@media screen and (max-width: 1200px)`
   - [x] d) `@media screen and (min-width: 600px) and (max-width: 1200px)` // ❎

8. **¿Cuál de los siguientes NO es un tipo de `@media queries` válido?**
  
   - [ ] a) `all`
   - [ ] b) `print`
   - [ ] c) `screen`
   - [x] d) `poster` // ❎

9. **¿Cuál de los siguientes tipos de `@media queries` está destinado al material paginado y a los documentos que se visualizan en una pantalla en modo de vista previa de impresión?**
  
   - [ ] a) `flex`
   - [ ] b) `screen`
   - [ ] c) `aspect-ratio`
   - [x] d) `print` // ❎

10. **¿Qué función tiene la `aspect-ratio` en las consultas de `@media queries`?**

    - [ ] a) Describe la relación entre filas y columnas para los diseños de tablas.
    - [ ] b) Describe la relación entre los ejes x e y para los contenedores de cuadrícula.
    - [x] c) Describe la relación entre el ancho y el alto de la ventana gráfica. // ❎
    - [ ] d) Describe la relación entre las propiedades flexibles en un diseño flexible.

11. **¿Cuál de los siguientes elementos se utiliza para indicar si el dispositivo está en orientación horizontal o vertical?**

    - [ ] a) `set-orientation`
    - [ ] b) `oriente`
    - [x] c) `orientation` // ❎
    - [ ] d) `apply-orientation`

12. **¿Cuál de los siguientes se utiliza habitualmente para pantallas de escritorio y pantallas más grandes?**

    - [ ] a)
          ```css
          @media screen and (min-width: 140000px) {
            /* Styles go here */
          }
          ```
    - [x] b) // ❎
          ```css
          @media screen and (min-width: 1400px) {
            /* Styles go here */
          }
          ```
    - [ ] c)
          ```css
          @media screen and (min-width: 140px) {
            /* Styles go here */
          }
          ```
    - [ ] d)
          ```css
          @media screen and (min-width: 14000px) {
            /* Styles go here */
          }
          ```

13. **¿Cuál de los siguientes se utiliza para detectar si el usuario ha solicitado un tema de color claro u oscuro?**
  
    - [ ] a) `set-colors-scheme`
    - [x] b) `prefers-color-scheme` // ❎
    - [ ] c) `apply-color-scheme`
    - [ ] d) `allow-colors-scheme`

14. **¿Cuál de los siguientes se utiliza para comprobar si el mecanismo de entrada principal puede situarse sobre los elementos?**

    - [ ] a)
          ```css
          @media (apply: hover) {
            /* Styles for devices that support hover */
          }
          ```
    - [x] b) // ❎
          ```css
          @media (hover: hover) {
            /* Styles for devices that support hover */
          }
          ```
    - [ ] c)
          ```css
          @media (set: hover) {
            /* Styles for devices that support hover */
          }
          ```
    - [ ] d)
          ```css
          @media (hover: apply) {
            /* Styles for devices that support hover */
          }
          ```

15. **¿Cuál de los siguientes NO es un tipo de operador lógico que se puede utilizar con consultas de `@media`?**

    - [ ] a) `and`
    - [ ] b) `not`
    - [x] c) `accept` // ❎
    - [ ] d) `only`

16. **¿Cuál de los siguientes `breakpoints` se utiliza habitualmente para las tabletas en el diseño web adaptativo?**

    - [ ] a) `2560px`
    - [ ] b) `1920px`
    - [x] c) `768px` // ❎
    - [ ] d) `480px`

17. **¿Cuál de las siguientes es la forma correcta de aplicar la `aspect-ratio` en una consulta de medios?**

    - [x] a) // ❎
          ```css
          @media screen and (aspect-ratio: 16/9) {
            /* Styles for screens with a 16:9 aspect ratio */
          }
          ```
    - [ ] b)
          ```css
          @media screen and (aspect-ratio: 16:9) {
            /* Styles for screens with a 16:9 aspect ratio */
          }
          ```
    - [ ] c)
          ```css
          @media screen and (aspect-ratio: 16=9) {
            /* Styles for screens with a 16:9 aspect ratio */
          }
          ```
    - [ ] d)
          ```css
          @media screen and (aspect-ratio: 16-9) {
            /* Styles for screens with a 16:9 aspect ratio */
          }
          ```

18. **¿Qué propiedad CSS se utiliza para crear un diseño que se ajuste al tamaño de la pantalla sin consultas de `@media`?**

    - [x] a) `flex` // ❎
    - [ ] b) `float`
    - [ ] c) `display: block;`
    - [ ] d) `width: 100%;`

19. **¿Cuál de los siguientes se puede utilizar para pantallas panorámicas de `768px` o más?**

    - [ ] a)
          ```css
          @media screen and (max-width: 768px) and (orientation: landscape) {
            /* Styles go here */
          }
          ```
    - [x] b) // ❎
          ```css
          @media screen and (min-width: 768px) and (orientation: landscape) {
            /* Styles go here */
          }
          ```
    - [ ] c)
          ```css
          @media screen and (min-width: 768px) and (landscape: set) {
            /* Styles go here */
          }
          ```
    - [ ] d)
          ```css
          @media screen and (min-width: 768px) and (landscape: orientation) {
            /* Styles go here */
          }
          ```

20. **¿Cuál es el tipo de `@media` predeterminado si no se especifica ningún tipo de `@media`?**

    - [ ] a) `print`
    - [ ] b) `mobile`
    - [ ] c) `screen`
    - [x] d) `all` // ❎
