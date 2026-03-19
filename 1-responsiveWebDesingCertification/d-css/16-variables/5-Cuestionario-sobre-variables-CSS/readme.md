# Cuestionario sobre variables CSS

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

---

1. **¿Cuál de las siguientes opciones es la forma correcta de declarar una propiedad personalizada CSS?**

   - [ ] a) `custom-property: blue;`
   - [ ] b) `background-color: var(--blue);`
   - [x] c) `--my-color: blue;` // ❎
   - [ ] d) `define --my-color: blue;`

2. **¿Qué selector se suele utilizar para definir propiedades CSS personalizadas globales?**

   - [ ] a) `body {}`
   - [ ] b) `* {}`
   - [ ] c) `.global {}`
   - [x] d) `:root {}` // ❎

3. **¿Por qué se recomienda incluir un valor alternativo al usar `var()`?**
  
   - [ ] a) Asegura que la variable se anime correctamente.
   - [ ] b) Evita la carga de hojas de estilo externas.
   - [ ] c) Evita el reajuste de la página en el navegador.
   - [x] d) Garantiza un valor válido si la propiedad personalizada no está definida. // ❎

4. **¿Cuál es la sintaxis correcta para aplicar una propiedad personalizada como color de fondo?**
  
   - [ ] a) `background: css(--main-bg);`
   - [x] b) `background: var(--main-bg);` // ❎
   - [ ] c) `background: --main-bg;`
   - [ ] d) `background: get(--main-bg);`

5. **¿Qué regla CSS permite a los desarrolladores definir propiedades personalizadas con un mayor control sobre su comportamiento?**

   - [ ] a) `@keyframes`
   - [ ] b) `@media`
   - [ ] c) `@supports`
   - [x] d) `@property` // ❎

6. **¿Qué controla el campo `inherits` en una definición de `@property`?**
  
   - [ ] a) Si la propiedad provocará una actualización de la página.
   - [ ] b) Si la propiedad se utiliza en JavaScript.
   - [ ] c) Si la propiedad puede contener funciones.
   - [x] d) Si el valor de la propiedad se transmite a los elementos secundarios. // ❎

7. **¿Qué sintaxis se debe utilizar al definir el ángulo de un degradado animado con `@property`?**
  
   - [ ] a) `"<number>"`
   - [x] b) `"<angle>"` // ❎
   - [ ] c) `"<color>"`
   - [ ] d) `"<string>"`

8. **¿En qué se diferencia una propiedad CSS personalizada de una propiedad CSS estándar en cuanto a su forma de definición?**

   - [ ] a) Las propiedades CSS estándar se definen con un solo guión, mientras que las propiedades personalizadas utilizan dos guiones.
   - [ ] b) Las propiedades CSS estándar utilizan `var()` para su definición, mientras que las propiedades personalizadas no.
   - [x] c) Las propiedades personalizadas deben comenzar con dos guiones (`--`), mientras que las propiedades CSS estándar no. // ❎
   - [ ] d) Las propiedades CSS estándar se definen mediante la regla `@property`, mientras que las propiedades personalizadas no.

9. **¿Cuál de las siguientes es una ventaja de utilizar propiedades personalizadas de CSS?**

   - [ ] a) Hacen que las variables de JavaScript queden obsoletas.
   - [ ] b) Reducen la necesidad de comentarios en CSS.
   - [x] c) Permiten reutilizar los estilos y mantenerlos de forma centralizada. // ❎
   - [ ] d) Optimizan automáticamente las imágenes.

10. **¿Qué propiedad CSS puede cambiar dinámicamente en función de las consultas de medios utilizando propiedades personalizadas?**

    - [x] a) Cualquier propiedad que admita un valor. // ❎
    - [ ] b) Solo `z-index`
    - [ ] c) Solo `background-color`
    - [ ] d) Solo `font-family`

11. **En el contexto de las variables CSS, ¿cuál es la función de `initial-value` en una regla `@property`?**

    - [ ] a) Define el valor máximo para las animaciones.
    - [x] b) Asigna un valor predeterminado a la propiedad si no se ha establecido ninguno. // ❎
    - [ ] c) Establece el valor mínimo de la propiedad.
    - [ ] d) Cambia la prioridad del selector.

12. **Analiza el siguiente código HTML y CSS. ¿Qué color de fondo se aplicará al elemento `.card`?**

    ```html
    <div class="dark-theme">
      <div class="card">Content</div>
    </div>
    ```

    ```css
    :root {
      --bg-color: white;
    }
    
    .dark-theme {
      --bg-color: #333;
    }
    
    .card {
      background: var(--bg-color);
    }
    ```

    - [ ] a) `white`
    - [ ] b) `inherit`
    - [ ] c) `transparent`
    - [x] d) `#333` // ❎

13. **En el siguiente código CSS, ¿qué ocurre si un usuario intenta asignar un valor no válido a `--padding` (por ejemplo, un color en lugar de una longitud)?**

    ```css
    @property --padding {
      syntax: "<length>";
      initial-value: 0px;
      inherits: false;
    }
    ```

    - [ ] a) El navegador genera un error en tiempo de ejecución.
    - [x] b) El navegador recurre al valor inicial de la propiedad. // ❎
    - [ ] c) El navegador acepta el valor, pero lo ignora durante el proceso de maquetación.
    - [ ] d) El navegador convierte automáticamente el valor a una longitud válida.

14. **¿Cuál es la finalidad de la propiedad personalizada `--gradient-angle` en este ejemplo?**

    ```css
    @property --gradient-angle {
      syntax: "<angle>";
      inherits: false;
      initial-value: 0deg;
    }
    
    .gradient {
      width: 100px;
      height: 100px;
      background: linear-gradient(var(--gradient-angle), red, blue);
      transition: --gradient-angle 0.5s;
    }
    
    .gradient:hover {
      --gradient-angle: 90deg;
    }
    ```

    - [ ] a) Establece el modo de fusión de colores.
    - [x] b) Controla la dirección del gradiente. // ❎
    - [ ] c) Especifica el tamaño del degradado.
    - [ ] d) Define la velocidad de la transición del degradado.

15. **¿Qué situación ilustra mejor la ventaja de utilizar propiedades personalizadas en los temas?**

    - [ ] a) Limitarlas a una sola clase CSS.
    - [x] b) Modificar los valores a través de la clase. // ❎
    - [ ] c) Utilizarlas únicamente para el tamaño de la fuente.
    - [ ] d) Aplicarlas solo al pasar el cursor por encima (`:hover`).

16. **¿Por qué los desarrolladores podrían preferir usar `:root` para definir variables CSS?**

    - [ ] a) Porque `:root` desactiva la especificidad.
    - [ ] b) Porque `:root` es necesario para JavaScript.
    - [x] c) Porque `:root` permite que las propiedades tengan un ámbito global. // ❎
    - [ ] d) Porque `:root` mejora la velocidad de carga de la página.

17. **¿Qué haría el siguiente CSS si --secondary-color no estuviera definido?**

    ```css
    h1 {
      color: var(--secondary-color, orange);
    }
    ```

    - [ ] a) Ignorará la propiedad `color`.
          ```
    - [ ] b) Aplicará `--secondary-color`.
    - [x] c) Aplicará el color `orange`. // ❎
    - [ ] d) Aplicará el color `black`.

18. **¿Qué tipo de valores representa `<color>` en un campo de sintaxis `@property`?**

    - [ ] a) Longitudes como `10px`.
    - [x] b) Valores de color como `#ff0000` o `red`. // ❎
    - [ ] c) Porcentajes como `50%`.
    - [ ] d) Ángulos como `90deg`.

19. **¿Cuál es la principal ventaja de utilizar propiedades personalizadas junto con `@property`?**

    - [ ] a) Evitan la necesidad de valores de reserva.
    - [x] b) Permiten la animación de propiedades. // ❎
    - [ ] c) Reducen la necesidad de utilizar clases.
    - [ ] d) Obligan a utilizar un diseño estático.

20. **¿Qué hace `var(--undefined-property, fallback)` cuando la propiedad personalizada no está definida?**

    - [ ] a) Lanza un error y deja de aplicar estilos.
    - [x] b) Aplica el valor de reserva en su lugar. // ❎
    - [ ] c) Ignora toda la regla CSS.
    - [ ] d) Aplica el nombre de la variable tal cual.
