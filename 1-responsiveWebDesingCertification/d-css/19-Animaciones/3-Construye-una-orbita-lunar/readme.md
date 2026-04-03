# Construye una órbita lunar

En este desafío, crearás una animación de la órbita de la Luna alrededor de la Tierra utilizando HTML y CSS. Para lograr esto, usarás posicionamiento absoluto para colocar los elementos en su lugar y una animación de keyframes para hacer que la Luna gire alrededor de la Tierra.

## Historias de usuario

1. Debes alinear todos los elementos al centro de la página estableciendo la altura al `100%` de la ventana gráfica y configurando un diseño flexbox en el elemento `body`.

2. Debes tener un elemento `div` con la clase `space`.

3. Dentro del elemento `.space`, debe haber dos elementos `div` más con las clases `earth` y `orbit`, respectivamente, en ese orden.

4. Dentro del elemento `.orbit`, debe haber otro `div` con la clase `moon`.

5. El elemento `div` con la clase `space` debe estar centrado en la página y tener un ancho y una altura de `200px`.

6. El elemento `div` con la clase `space` debe usar posicionamiento `relative`.

7. El elemento `.earth` debe utilizar posicionamiento `absolute`. Coloca el centro del elemento `.earth` en el punto medio de su elemento padre tanto en el eje vertical (arriba) como en el horizontal (izquierda). Después de eso, desplaza el elemento `.earth` hacia atrás la mitad de su propio ancho y alto, para centrarlo dentro de su elemento padre, el elemento `.space`.

8. El elemento `.earth` debe tener un ancho y un alto de `100px`.

9. El elemento `.orbit` debe tener un ancho y una altura de `200px`.

10. El elemento `.orbit` debe posicionarse utilizando el posicionamiento `absolute`. Su esquina inferior derecha debe estar en el centro del elemento `.space` utilizando una propiedad `transform` que lo desplace un `-50%` tanto en el eje vertical como en el horizontal.

11. La trayectoria orbital de la Luna alrededor de la Tierra debe ser un círculo.

12. El elemento `.moon` debe posicionarse mediante posicionamiento `absolute` y tener un ancho y una altura de `30px`. El elemento `.moon` debe situarse en la parte superior del elemento `.orbit` y estar centrado horizontalmente.

13. Debes ajustar aún más la posición horizontal del elemento `.moon` desplazándolo hacia la izquierda la mitad de su ancho.

14. El selector `.earth` debe tener un `background-color` y un `border-radius` del `50%`.

15. El selector `.moon` debe tener un `background-color` y un `border-radius` del `50%`.

16. Debes definir una animación `@keyframes orbit` que gire el elemento `.orbit` 360 grados alrededor de su centro. Debes aplicar esta animación al elemento `.orbit` con una duración de `5s`, una función de tiempo lineal e iteraciones infinitas.

**Nota: Asegúrate de vincular tu hoja de estilos en tu HTML y aplicar tu CSS.**
