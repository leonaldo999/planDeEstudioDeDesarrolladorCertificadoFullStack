# Revisión de formularios de estilo

En esta sección, revisaremos algunos de los problemas comunes que surgen al aplicar estilos a los formularios. En particular, nos centraremos en los campos de entrada de texto, el uso de `appearance: none` para entradas y los problemas comunes relacionados con el estilo de las propiedades `datetime-local` y `color`.

---

## Mejores prácticas para el estilo de los `inputs`

- **Estilo de los `inputs`**: al igual que con todos los elementos de texto, debes asegurarte de que los estilos que apliques a los `inputs` de texto sean accesibles. Esto significa que el tamaño de la fuente debe ser adecuado y que el color debe contrastar suficientemente con el fondo. Los elementos de entrada también son enfocables. Cuando edites tus estilos, debes tener cuidado de conservar un indicador visible cuando el elemento esté enfocado, como un borde en negrita.

## Uso de appearance: none para inputs

- appearance: none: los navegadores aplican un estilo predeterminado a muchos elementos. La propiedad CSS appearance: none le ofrece un control total sobre el estilo, pero tiene algunas salvedades. Al crear estilos personalizados para elementos de entrada, deberá asegurarse de que los indicadores de foco y error sigan estando presentes.

## Problemas comunes Estilo de las propiedades datetime-local y color

- Problemas comunes: Estos tipos especiales de entradas se basan en pseudoelementos complejos para crear elementos como selectores de fecha y color. Esto supone un reto importante a la hora de aplicar estilos a estas entradas. Uno de los retos es que el estilo predeterminado depende totalmente del navegador, por lo que el CSS que escribas para que el selector tenga el aspecto que deseas puede ser totalmente diferente en otro navegador.
