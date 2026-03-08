# Diseña una página con los planes de precios

---

## Historias de usuario

1. Tu página debe tener un elemento `h1` con el texto `Pricing Plans`.

2. Tu página debe tener un elemento `div` con la clase `pricing-container` debajo del elemento `h1`.
    - El selector `.pricing-container` debe tener una propiedad `display` con el valor `flex` y una propiedad `flex-wrap` con el valor `wrap`.

3. Dentro del elemento `.pricing-container`, debes tener tres elementos `div` con la clase `pricing-card` para representar los planes de precios.
    - Uno de los elementos `.pricing-card` debe tener la clase `basic-plan` además de la clase `pricing-card`.
    - Uno de los elementos `.pricing-card` debe tener la clase `pro-plan` además de la clase `pricing-card`.
    - Uno de los elementos `.pricing-card` debe tener la clase `premium-plan` además de la clase `pricing-card`.

4. Tu elemento `.basic-plan` debe tener un elemento `h2` con el texto `Basic`.

5. Tu elemento `.basic-plan` debe tener un elemento `p` con el texto `$9/month`.

6. Tu elemento `.pro-plan` debe tener un elemento `h2` con el texto `Pro`.

7. Tu elemento `.pro-plan` debe tener un elemento `p` con el texto `$19/nomth`.

8. Tu elemento `.premium-plan` debe tener un elemento `h2` con el texto `Premium`.

9. Tu elemento `.premium-plan` debe tener un elemento `p` con el texto `$29/month`.

10. Cada uno de tus elementos `.pricing-card` debe:
    - Usar Flexbox para apilar su contenido en una columna y justificar el espacio entre los hijos usando `space-between`.
    - Establecer la propiedad `flex` en `0 0 200px` para darle un ancho consistente y evitar que crezca o se reduzca en el diseño.
    - Establecer la propiedad `border` en `2px solid black` para ver cómo ocupan espacio las diferentes tarjetas.

11. El elemento `.basic-plan` debe aparecer primero en el diseño. Debes usar la propiedad `order` para ello.

12. El elemento `.pro-plan` debe aparecer en segundo lugar en el diseño. Debes utilizar la propiedad `order` y establecer su propiedad flex-grow en 2 para que ocupe más espacio que los otros planes.

13. El elemento `.premium-plan` debe aparecer en último lugar en el diseño. Debes utilizar la propiedad `order` para ello.

>[!note]
> Asegúrate de vincular tu hoja de estilos en tu HTML y aplicar tu CSS.
