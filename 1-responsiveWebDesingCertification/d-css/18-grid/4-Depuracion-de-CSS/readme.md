# Depuración de CSS

En esta sección, se presentan algunos consejos y técnicas para depurar CSS de manera efectiva. La depuración de CSS puede ser un proceso desafiante, pero con las herramientas adecuadas y un enfoque sistemático, puedes identificar y solucionar problemas de estilo en tus proyectos web.

---

## Tema 1: ¿Cómo puedes utilizar la herramienta de inspección de DevTools y los validadores de CSS para depurar tu CSS?

Las herramientas de desarrollo, las herramientas de inspección y los validadores de CSS son recursos esenciales para depurar problemas de CSS y garantizar que tus hojas de estilo estén libres de errores y optimizadas.

Estas herramientas proporcionan información muy valiosa sobre cómo se aplica tu CSS y pueden ayudar a identificar posibles problemas.

Comencemos con las herramientas de desarrollo del navegador, comúnmente conocidas como DevTools. La mayoría de los navegadores modernos, incluidos Chrome, Firefox y Safari, vienen con DevTools integradas. Para acceder a ellas, puedes hacer clic con el botón derecho del ratón en un elemento de tu página web y seleccionar _"Inspect"_ o utilizar atajos de teclado como `F12` o `Cmd+Opción+I` (en macOS).

DevTools te permite inspeccionar y modificar tu CSS en tiempo real. El panel «Estilos» muestra todas las reglas CSS aplicadas al elemento seleccionado, incluidos los estilos heredados.

Puedes activar y desactivar propiedades individuales, editar valores e incluso agregar nuevas reglas directamente en el navegador. Esta retroalimentación inmediata es increíblemente útil para experimentar con diferentes estilos sin modificar tu código fuente.

La herramienta de inspección, que forma parte de DevTools, te permite pasar el cursor sobre los elementos de tu página y ver su modelo de caja, incluyendo márgenes, bordes, relleno y área de contenido. Esto es particularmente útil para diagnosticar problemas de diseño o comprender por qué los elementos están posicionados de cierta manera.

Los validadores de CSS son otra herramienta importante para la depuración. El validador de CSS del W3C es una opción popular. Comprueba tu CSS con respecto a las especificaciones oficiales e informa de cualquier error o advertencia. Para utilizarlo, puedes subir tu archivo CSS, introducir tu CSS directamente o proporcionar una URL para validar.

Por ejemplo, supongamos que estás trabajando con el siguiente CSS:

- **Example code**

  ```css
  .container {
    width: 100%;
    height: 200px
    background-color: #F0F0F0;
  }
  ```

El validador señalaría que falta un punto y coma después de la propiedad «height». Este tipo de error puede pasarse por alto fácilmente, pero puede causar problemas importantes en tu hoja de estilos.

A la hora de depurar diseños adaptativos, la función de emulación de dispositivos de DevTools resulta invaluable. Te permite simular cómo se ve tu sitio en distintos tamaños de pantalla y dispositivos. Esto puede ayudarte a identificar problemas con los puntos de ruptura o estilos que no se adaptan bien a los diferentes tamaños de ventana gráfica.

Recuerda que una depuración eficaz de CSS suele implicar una combinación de estas herramientas. Puedes empezar utilizando un validador para detectar cualquier error de sintaxis, luego usar DevTools para inspeccionar elementos específicos y experimentar con cambios. La herramienta de emulación de dispositivos puede ayudarte a garantizar que tus estilos funcionen en diferentes tamaños de pantalla.

Al dominar estas herramientas, puedes acelerar significativamente tu proceso de depuración de CSS y crear hojas de estilo más robustas y libres de errores.

El uso regular de estas técnicas de depuración no solo te ayudará a resolver problemas inmediatos, sino que también mejorará tu comprensión general de CSS y de cómo interactúa con tu HTML.

---

## Cuestionario 1

1. **¿Cuál es una de las principales ventajas de utilizar las herramientas de desarrollo del navegador para depurar CSS?**

    - [ ] a) Corrige automáticamente todos los errores de CSS.
    - [x] b) Permite inspeccionar y modificar el CSS en tiempo real. //correcto
    - [ ] c) Comprime los archivos CSS.
    - [ ] d) Genera nuevas reglas CSS automáticamente.

2. **¿Cuál de las siguientes opciones NO es una característica típica de los validadores de CSS?**

    - [ ] a) Comprobar que el CSS cumple con las especificaciones oficiales.
    - [ ] b) Informar de errores de sintaxis.
    - [x] c) Ofrecer sugerencias para mejorar el rendimiento del CSS. //correcto
    - [ ] d) Identificar los puntos y comas que faltan.

3. **¿Cómo puede ayudar la función de emulación de dispositivos de DevTools en la depuración de CSS?**

    - [ ] a) Ajusta automáticamente tu CSS para todos los dispositivos.
    - [x] b) Muestra cómo se ve tu sitio en diferentes tamaños de pantalla y dispositivos. //correcto
    - [ ] c) Crea archivos CSS independientes para cada dispositivo.
    - [ ] d) Optimiza las imágenes para dispositivos móviles.

[☝️](#depuración-de-css)

---
