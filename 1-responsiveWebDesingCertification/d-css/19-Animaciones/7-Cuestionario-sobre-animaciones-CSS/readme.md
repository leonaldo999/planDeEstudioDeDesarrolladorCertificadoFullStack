# Cuestionario sobre animaciones CSS

Para aprobar el cuestionario, debes responder correctamente al menos 18 de las 20 preguntas siguientes.

1. **¿Para qué sirve la propiedad `animation-delay` de CSS?**

   - [ ] a) Define la dirección de la animación.
   - [x] b) Retrasa el inicio de la animación. // ❎
   - [ ] c) Establece la duración de la animación.
   - [ ] d) Especifica la función de temporización.

2. **¿Qué propiedad de animación especifica cómo debe verse el elemento antes y después de la animación?**

   - [ ] a) `animation-delay`
   - [ ] b) `animation-iteration-count`
   - [x] c) `animation-fill-mode` // ❎
   - [ ] d) `animation-direction`

3. **¿Por qué se deben usar las animaciones CSS con moderación?**
  
   - [x] a) Un exceso de animaciones CSS puede provocar un rendimiento deficiente y resultar molesto o problemático para los usuarios con determinadas necesidades de accesibilidad. // ❎
   - [ ] b) Un exceso de animaciones CSS provocará automáticamente la caída del servidor y aumentará la probabilidad de que surjan riesgos de seguridad.
   - [ ] c) Un exceso de animaciones CSS puede provocar errores de estilo, así como inconsistencias de estilo entre los distintos navegadores.
   - [ ] d) Un exceso de animaciones CSS puede provocar una disminución o la ausencia total de posicionamiento en los resultados de los motores de búsqueda.

4. **¿Qué propiedad de animación determina si la animación debe reproducirse hacia adelante, hacia atrás o de forma alterna?**
  
   - [x] a) `animation-direction` // ❎
   - [ ] b) `animation-timing-function`
   - [ ] c) `animation-delay`
   - [ ] d) `animation-fill-mode`

5. **¿Qué consulta de medios CSS detecta si el usuario ha solicitado animaciones mínimas o efectos de movimiento?**

   - [ ] a) `motion-preferences`
   - [x] b) `prefers-reduced-motion` // ❎
   - [ ] c) `min-motion-preference`
   - [ ] d) `reduce-motion`

6. **¿Qué propiedad determina cuántas veces se repite una animación?**
  
   - [ ] a) `animation-duration`.
   - [x] b) `animation-iteration-count` // ❎
   - [ ] c) `animation-delay`
   - [ ] d) `animation-count`

7. **¿Qué regla CSS se utiliza para definir las fases y los estilos de una animación en distintos momentos a lo largo de su duración?**
  
   - [ ] a) `@style`
   - [ ] b) `@transform`
   - [x] c) `@keyframes` // ❎
   - [ ] d) `@transition`

8. **Dentro de la consulta de medios `reduced-motion`, ¿qué declaración desactiva las transiciones?**

   - [x] a) `transition: none;` // ❎
   - [ ] b) `transition: remove;`
   - [ ] c) `animation-play-state: paused;`
   - [ ] d) `animation: none;`

9. **¿Qué permite hacer la propiedad `animation-play-state`?**

   - [x] a) Pausar y reanudar la animación. // ❎
   - [ ] b) Establecer cuántas veces se repite la animación.
   - [ ] c) Determinar la dirección en la que se reproduce la animación.
   - [ ] d) Especificar cuánto tiempo tarda la animación en completarse.

10. **¿Cuál de las siguientes opciones es una buena práctica al trabajar con animaciones?**

    - [ ] a) Evitar probar las animaciones en diferentes dispositivos o tamaños de pantalla.
    - [ ] b) Utilizar tantos colores intermitentes y movimientos rápidos como sea posible para llamar la atención.
    - [ ] c) Hacer que las animaciones duren el mayor tiempo posible para asegurarse de que los usuarios las noten.
    - [x] d) Evitar contenidos que parpadeen más de tres veces por segundo para prevenir la aparición de convulsiones o causar molestias. // ❎

11. **¿Por qué se utiliza la declaración !important en las reglas CSS?**

    - [ ] a) Para evitar que se carguen otras consultas de medios.
    - [ ] b) Para limitar los estilos al primer elemento secundario.
    - [ ] c) Para depurar el CSS más fácilmente.
    - [x] d) Para garantizar que estas reglas tengan prioridad sobre otros estilos. // ❎

12. **¿Qué garantiza la propiedad `animation-iteration-count: 1 !important;` en CSS?**

    - [x] a) Que las animaciones en bucle solo se reproduzcan una vez. // ❎
    - [ ] b) Que las animaciones se ejecuten de forma infinita.
    - [ ] c) Que las animaciones inviertan su dirección en cada ciclo.
    - [ ] d) Que las animaciones se pongan en pausa.

13. **¿Qué propiedad CSS se utiliza para especificar cuánto tiempo debe tardar en completarse una animación?**

    - [ ] a) `animation-timing-function`
    - [ ] b) `animation-iteration-count`
    - [x] c) `animation-duration` // ❎
    - [ ] d) `animation-delay`

14. **¿Qué propiedad NO forma parte de la sintaxis abreviada de animación?**

    - [ ] a) `animation-direction`
    - [ ] b) `animation-delay`
    - [x] c) `animation-transform` // ❎
    - [ ] d) `animation-timing-function`

15. **¿Qué define la regla `@keyframes`?**

    - [ ] a) La función de sincronización de una animación.
    - [x] b) La secuencia de estilos en diferentes momentos de una animación. // ❎
    - [ ] c) Las consultas de medios para animaciones.
    - [ ] d) El estado predeterminado de un elemento.

16. **¿Qué efecto tiene esta regla `@keyframe` en el elemento animado?**

    ```css
    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    ```

    - [ ] a) Cambia el color del texto a negro.
    - [x] b) Hace que el elemento aparezca gradualmente al reducir su transparencia poco a poco. // ❎
    - [ ] c) Amplía el elemento del 0% al 100%.
    - [ ] d) Mueve el elemento de izquierda a derecha.

17. **En una regla de `keyframes`, ¿qué representa el 100%?**

    - [ ] a) El punto medio.
    - [ ] b) El inicio de la animación.
    - [x] c) El final de la animación. // ❎
    - [ ] d) La función de aceleración.

18. **¿Qué propiedad controla el ritmo de una animación a lo largo de su duración?**

    - [ ] a) `animation-duration`
    - [ ] b) `animation-delay`
    - [ ] c) `animation-iteration-count`
    - [x] d) `animation-timing-function` // ❎

19. **¿Qué deben tener en cuenta los desarrolladores al implementar animaciones para garantizar la accesibilidad?**

    - [ ] a) Incluir solo efectos llamativos, rápidos y sorprendentes.
    - [ ] b) Recurrir exclusivamente a JavaScript para todas las animaciones.
    - [ ] c) Añadir animaciones frecuentes e intensas para lograr un mayor impacto.
    - [x] d) Utilizar efectos sutiles e intencionados, respetar las preferencias y ofrecer control al usuario. // ❎

20. **¿Cuál de las siguientes opciones es la sintaxis correcta para hacer que un elemento entre deslizándose desde la izquierda?**

    - [ ] a)
          ```css
          @keyframes slide-in {
            0 {
              transform: translate(-100%);
            }
            100 {
              transform: translate(0);
            }
          }
          ```
    - [x] b) // ❎
          ```css
          keyframes slide-in {
            from {
              translateX(-100%);
            }
            to {
              translateX(0);
            }
          }
          ```
    - [ ] c)
          ```css
          @keyframes slide-in {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(0);
            }
          }
          ```
    - [ ] d)
          ```css
          @keyframes slide-in {
            start {
              transform: moveX(-100%);
            }
            end {
              transform: moveX(0);
            }
          }
          ```
