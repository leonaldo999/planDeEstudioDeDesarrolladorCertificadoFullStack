# Repaso de CSS

Repasa los conceptos que se indican a continuación para prepararte para el próximo examen.

## Conceptos básicos de CSS

- **¿Qué es CSS?**: Las hojas de estilo en cascada (CSS) son un lenguaje de marcado que se utiliza para aplicar estilos a los elementos HTML. El CSS se utiliza para definir colores, imágenes de fondo, diseños y mucho más.

- **Anatomía básica de una regla CSS**: Una regla CSS se compone de dos partes principales: un selector y un bloque de declaración. Un selector es un patrón utilizado en CSS para identificar y seleccionar elementos HTML específicos para aplicarles estilos. Un bloque de declaración aplica un conjunto de estilos a un selector o selectores determinados.

- **Elemento `meta name="viewport"`**: Este elemento `meta` proporciona al navegador instrucciones sobre cómo controlar las dimensiones y el escalado de la página en diferentes dispositivos, especialmente en teléfonos móviles y tabletas.

- **Estilos predeterminados del navegador**: A cada elemento HTML se le aplicarán los estilos predeterminados del navegador. Esto suele incluir elementos como los márgenes y los rellenos predeterminados.

---

## CSS en línea, interno y externo

- **CSS en línea**: Estos estilos se escriben directamente dentro de un elemento HTML utilizando el atributo `style`. La mayoría de las veces no utilizarás CSS en línea debido a la separación de responsabilidades.

- **CSS interno**: Estos estilos se escriben dentro de las etiquetas `<style>` en la sección `head` de un documento HTML. Esto puede ser útil para crear ejemplos de código cortos, pero por lo general no usarás CSS interno.

- **CSS externo**: Estos estilos se escriben en un archivo CSS separado y se vinculan al documento HTML mediante el elemento `link` en la sección `head`. Para la mayoría de los proyectos, usarás un archivo CSS externo en lugar de CSS interno o en línea.

---

## Uso de las propiedades width y height

- **Propiedad `width`**: Esta propiedad especifica el ancho de un elemento. Si no se especifica un ancho, el valor predeterminado es `auto`. Esto permite que el navegador determine el ancho del elemento en función de su contenido, su elemento padre y su tipo de visualización.

- **Propiedad `min-width`**: Esta propiedad especifica el ancho mínimo de un elemento.

- **Propiedad `max-width`**: Esta propiedad especifica el ancho máximo de un elemento.

- **Propiedad `height`**: Esta propiedad especifica la altura de un elemento. De manera similar, la altura es «auto» por defecto, lo que significa que se ajustará al contenido que haya en su interior.

- **Propiedad `min-height`**: Esta propiedad especifica la altura mínima de un elemento.

- **Propiedad `max-height`**: Esta propiedad especifica la altura máxima de un elemento.

---

## Diferentes tipos de combinadores CSS

- Combinador de descendientes (` `) \* un solo espacio entre selectores: este combinador se utiliza para seleccionar elementos que son descendientes de un elemento padre especificado.

- **Combinador de hijos (`>`)**: este combinador se utiliza para seleccionar elementos que son hijos directos de un elemento padre especificado.

- C**ombinador de hermano siguiente (`+`)**: Este combinador selecciona un elemento que sigue inmediatamente a un elemento hermano especificado.

- Combinador de hermano posterior (~): Este combinador selecciona todos los hermanos de un elemento especificado que vienen después de él.

---

## Elementos de nivel en línea, de bloque y de bloque en línea

- **Elementos de nivel en línea**: Los elementos en línea solo ocupan el ancho que necesitan y no comienzan en una nueva línea. Estos elementos se integran en el contenido, lo que permite que el texto y otros elementos en línea aparezcan junto a ellos. Algunos elementos en línea comunes son los elementos `span`, `anchor` e `img`.

- **Elementos de nivel de bloque**: Los elementos de nivel de bloque ocupan todo el ancho disponible de forma predeterminada, extendiéndose a lo ancho de su contenedor. Algunos elementos de nivel de bloque comunes son los elementos `div`, `p` y `section`.

- **Elementos de nivel de bloque en línea**: Puedes configurar un elemento como `inline-block` utilizando la propiedad `display`. Estos elementos se comportan como elementos en línea, pero pueden tener un `width` y una `height` definidos como los elementos de nivel de bloque.

---

## Margin y Padding

- **Propiedad `margin`**: Esta propiedad se utiliza para aplicar espacio fuera del elemento, entre el borde del elemento y los elementos circundantes.

- **Sintáctica abreviada de `margin`**: Puedes especificar de _1 a 4_ valores para definir los márgenes. Un valor se aplica a los cuatro lados; dos valores definen los márgenes `top` e `bottom`, y luego el `right` y el `left`; tres valores definen el margen `top`, los márgenes horizontales (`right` e `left`) y luego el `bottom`; cuatro valores definen los márgenes `top`, `right`, `bottom` y `left`.

- **Propiedad `padding`**: Esta propiedad se utiliza para aplicar espacio dentro del elemento, entre el contenido y su borde.

- **Abreviatura de `padding`**: Se pueden especificar de _1 a 4_ valores para establecer los lados del relleno. Un valor se aplica a los cuatro lados; dos valores establecen la parte `top` e `bottom`, luego la `right` y la `left`; tres valores establecen la parte `top`, horizontal (`right` e `left`), luego la parte `bottom`; cuatro valores establecen la parte `top`, `right`, `bottom` e `left`.

---

## Especificidad del CSS

- Especificidad del CSS en línea: El CSS en línea tiene la especificidad más alta, ya que se aplica directamente al elemento. Anula cualquier CSS interno o externo. El valor de especificidad de los estilos en línea es `(1, 0, 0, 0)`.

- **Especificidad del CSS interno**: El CSS interno se define dentro de un elemento de `style` en la sección `head` del documento HTML. Tiene una especificidad menor que los estilos en línea. Tanto el CSS interno como el externo comparten el mismo nivel de especificidad, que está determinado por sus selectores, no por su ubicación.

- **Especificidad del CSS externo**: El CSS externo se vincula a través de un elemento `link` en la sección `head` y se escribe en archivos `.css` separados. Al igual que el CSS interno, su especificidad viene determinada por los selectores utilizados. Cuando dos reglas tienen la misma especificidad, el orden de origen determina cuál prevalece: la regla que aparece más tarde en el documento tiene prioridad. El CSS externo ofrece la mejor capacidad de mantenimiento para proyectos de mayor envergadura.

- **Selector universal (`*`)**: Este es un tipo especial de selector CSS que coincide con cualquier elemento del documento. A menudo se utiliza para aplicar un estilo a todos los elementos de la página, lo que puede ser útil para restablecer o normalizar estilos en diferentes navegadores. El selector universal tiene el valor de especificidad más bajo de todos los selectores. Aporta 0 a todas las partes del valor de especificidad `(0, 0, 0, 0)`.

- **Selectores de tipo**: Estos selectores se dirigen a elementos en función del nombre de su etiqueta. Los selectores de tipo tienen una especificidad relativamente baja en comparación con otros selectores. El valor de especificidad de un selector de tipo es `(0, 0, 0, 1)`.

- **Selectores de clase**: Estos selectores se definen mediante un punto (`.`) seguido del nombre de la clase. El valor de especificidad de un selector de clase es `(0, 0, 1, 0)`. Esto significa que los selectores de clase pueden anular a los selectores de tipo, pero pueden ser anulados por los selectores de ID y los estilos en línea.

- **Selectores de ID**: Los selectores de ID se definen mediante el símbolo de almohadilla (`#`) seguido del nombre del ID. Los selectores de ID tienen una especificidad muy alta, mayor que la de los selectores de tipo y de clase, pero menor que la de los estilos en línea. El valor de especificidad de un selector de ID es `(0, 1, 0, 0)`.

- **Palabra clave `!important`**: se utiliza para otorgar a una regla de estilo la máxima prioridad, lo que le permite anular cualquier otra declaración para una propiedad. Cuando se utiliza, obliga al navegador a aplicar el estilo especificado, independientemente de la especificidad de otros selectores. Debes tener cuidado al usar `!important` porque puede hacer que tu CSS sea más difícil de mantener y depurar.

- **Algoritmo de cascada**: un algoritmo utilizado para decidir qué reglas CSS aplicar cuando hay múltiples estilos dirigidos al mismo elemento. Garantiza que se utilicen los estilos más apropiados, basándose en un conjunto de reglas bien definidas.

- **Herencia en CSS**: proceso mediante el cual los estilos se transmiten de los elementos padres a sus hijos. La herencia permite definir estilos en un nivel superior del árbol del documento y hacer que se apliquen a varios elementos sin necesidad de especificarlos explícitamente para cada uno de ellos.

---

## Terminología del diseño

- **Diseño**: Es la forma en que se disponen los elementos visuales en una página o pantalla para transmitir un mensaje. Estos elementos pueden incluir texto, imágenes y espacios en blanco.

- **Alineación**: Es la forma en que se colocan los elementos entre sí. Utilizar correctamente la alineación ayuda a que el diseño luzca limpio y organizado.

- **Composición**: Es el acto de organizar elementos para crear un diseño armonioso. Determina cómo elementos como imágenes, texto y formas se relacionan entre sí y contribuyen al diseño de manera artística.

- **Equilibrio**: Es la forma en que se distribuye el peso visual dentro de una composición. Los diseñadores buscan crear un equilibrio a través de disposiciones simétricas o asimétricas.

- **Escala**: Se refiere a comparar las dimensiones o el tamaño de un elemento con respecto a otro.

- **Jerarquía**: Establece el orden de importancia de los elementos en un diseño. Se trata de asegurarse de que la información más importante se perciba primero.

- **Contraste**: Es el proceso de crear distinciones claras entre los elementos. Esto se puede lograr mediante variaciones en el color, el tamaño, la forma, la textura o cualquier otra característica visual. Un contraste fuerte también ayuda a mejorar la legibilidad.

- **Espacio en blanco (espacio negativo)**: Es el espacio vacío en un diseño. Es el área que rodea a los elementos.

- **UI (Interfaz de usuario)**: La UI incluye los elementos visuales e interactivos que los usuarios pueden ver en sus pantallas, como íconos, imágenes, texto, menús, enlaces y botones.

- **UX (Experiencia de usuario)**: La UX se refiere a cómo se sienten los usuarios al utilizar un producto o servicio. Una aplicación con una experiencia de usuario bien diseñada es intuitiva, fácil de usar, eficiente, accesible y agradable.

- **Brote de diseño**: Es un documento que describe los objetivos, metas y requisitos de un proyecto. Es una hoja de ruta que guía el proceso de diseño y garantiza que el producto final satisfaga las necesidades del cliente.

- **Diseño basado en vectores**: Implica la creación de arte digital utilizando fórmulas matemáticas para definir líneas, formas y colores.

- **Prototipado**: Se refiere al proceso de creación de un modelo interactivo de un producto o interfaz de usuario

---

## Fundamentos del diseño de la interfaz de usuario

- **Buen contraste entre los colores de fondo y de primer plano**: Es importante asegurarse de que los colores de fondo y de primer plano tengan un buen contraste para que el texto sea legible. Las Pautas de Accesibilidad al Contenido en la Web (WCAG) recomiendan una relación de contraste mínima de 4,5:1 para el texto normal y de 3:1 para el texto grande.

- **Buena jerarquía visual en el diseño**: Una jerarquía visual sólida puede proporcionar una ruta clara que siga la vista, asegurando que la información que transmites se consuma en el orden que pretendes.

- **Imágenes adaptativas**: Las imágenes adaptativas son imágenes que se ajustan al tamaño de la pantalla en la que se visualizan. Esto es importante porque garantiza que tus imágenes se vean bien en todos los dispositivos, desde computadoras de escritorio hasta teléfonos móviles.

- **Mejora progresiva**: Se trata de un enfoque de diseño que garantiza que todos los usuarios, independientemente del navegador o dispositivo, puedan acceder al contenido y la funcionalidad esenciales de una aplicación.

- **Diseño centrado en el usuario**: Se trata de un enfoque que prioriza al usuario final, desde sus necesidades hasta sus preferencias y limitaciones. El objetivo del diseño centrado en el usuario es crear una página web que sea intuitiva, eficiente de usar y agradable para que los usuarios interactúen con ella.

- **Investigación de usuarios**: Es el estudio sistemático de las personas que utilizan su producto. El objetivo es evaluar las necesidades, los comportamientos y los puntos débiles de los usuarios.

- **Pruebas de usuario**: se refiere a la práctica de recopilar datos de los usuarios mientras interactúan con tu aplicación.

- **Pruebas A/B**: es el proceso de lanzar una nueva función a un subconjunto seleccionado al azar de tu base de usuarios. A continuación, puedes aprovechar los datos analíticos para determinar si la función resulta beneficiosa.

- **Requisitos de usuario**: se refiere a las historias o los criterios que debe seguir tu aplicación. Los requisitos de usuario pueden definirse mediante estudios de usuarios o estándares del sector. Incluso pueden definirse a partir de las aportaciones de las partes interesadas.

- **Divulgación progresiva**: Es un patrón de diseño que se utiliza para mostrar a los usuarios solo el contenido relevante en función de su actividad actual y ocultar el resto. Esto se hace para reducir la carga cognitiva y hacer que la experiencia del usuario sea más intuitiva.

- **Registro diferido/lazy**: Es un patrón de diseño de interfaz de usuario que permite a los usuarios navegar e interactuar con su aplicación sin tener que registrarse.

---

## Mejores prácticas de diseño

- **Modo oscuro**: se trata de una función especial de las aplicaciones web que permite cambiar la combinación de colores clara predeterminada por una oscura. En el modo oscuro, se deben utilizar colores desaturados. Los colores desaturados son aquellos que tienen menos intensidad y un nivel de saturación más bajo.

- **Ruta de navegación**: es una ayuda de navegación que muestra al usuario en qué parte de la jerarquía del sitio se encuentra. Lo mejor es colocar la ruta de navegación en la parte superior de la página para que los usuarios puedan encontrarla fácilmente. Además, debes asegurarte de que la ruta de navegación sea lo suficientemente grande como para que se lea con facilidad, pero no tan grande como para que ocupe demasiado espacio en la página.

- **Componente de Card**: Tu componente de Card debe tener un diseño sencillo, sin estar visualmente recargado ni mostrar demasiada información. En cuanto a los medios, asegúrate de elegir imágenes y videos de alta calidad para mejorar la experiencia del usuario.

- **Desplazamiento infinito**: se trata de un patrón de diseño que carga más contenido a medida que el usuario se desplaza hacia abajo en la página. Se recomienda considerar el uso de un botón "Cargar más", ya que permite al usuario controlar cuándo desea ver más contenido. También se puede añadir un botón "Atrás" para que los usuarios puedan volver a la página anterior sin tener que desplazarse hasta el principio.

- **Diálogo modal**: Es un tipo de ventana emergente que se muestra sobre el contenido existente de la página. Por lo general, el contenido de fondo tendrá una superposición de color tenue para ayudar al usuario a enfocarse mejor en el contenido modal. Además, siempre es una buena idea permitir que el usuario haga clic fuera del modal para cerrarlo. Al utilizar el elemento de diálogo HTML, obtendrás muchas de las ventajas de funcionalidad y accesibilidad incorporadas.

- **Indicador de progreso para el registro en formularios**: Esta es una forma de mostrar a los usuarios en qué punto del proceso se encuentran. Se puede utilizar en formularios, registros y procesos de configuración. Su diseño debe ser sencillo, fácil de encontrar y permitir volver a los pasos anteriores.

- **Carrito de compras**: Los carritos son un lugar donde el usuario puede ver qué artículos ya ha seleccionado en una plataforma de comercio electrónico. Tus carritos siempre deben estar visibles para el usuario, usar un ícono común como un carrito, una bolsa o una canasta, y tener un botón de llamada a la acción claro para que los usuarios puedan proceder al pago.

---

## Herramientas de diseño habituales

- **Figma**: Esta herramienta basada en la nube está especializada en el diseño de interfaces de usuario y experiencias de usuario (UI/UX). Permite a los equipos de diseño y desarrollo colaborar desde cualquier lugar, y ofrece funciones integradas como diseño vectorial, maquetación automática, un sistema de comentarios y retroalimentación, y mucho más.

- **Sketch**: Esta es una herramienta de diseño popular utilizada por su interfaz intuitiva y su simplicidad, lo que la hace ideal para desarrolladores que desean crear prototipos rápidamente. También es ampliamente utilizada por diseñadores para tareas como la creación de interfaces de usuario, íconos y diseños web.

- **Adobe XD**: Esta es una herramienta de diseño y prototipado basada en vectores para el diseño de UI/UX, conocida por su perfecta integración con otras aplicaciones de Adobe como Photoshop, Illustrator y After Effects.

- Canva: Esta herramienta te permite crear una amplia gama de contenido visual, incluyendo carteles, fotos de portada, presentaciones, videos cortos y más. Su diseño sencillo y fácil de usar la hace ideal para principiantes.

---

## Unidades absolutas

- **`px` (píxeles)**: Esta unidad absoluta es una unidad de medida de tamaño fijo en CSS que permite un control preciso de las dimensiones. Esto significa que `1px` equivale siempre a `1/96` de pulgada.

- **`in` (pulgadas)**: Esta unidad absoluta equivale a `96px`.

- **`cm` (centímetros)**: Esta unidad absoluta equivale a `25.2/64` de pulgada.

- **`mm` (milímetros)**: Esta unidad absoluta equivale a `1/10` de centímetro.

- **`q` (cuartos de milímetro)**: Esta unidad absoluta equivale a `1/40` de centímetro.

- **`pc` (picas)**: Esta unidad absoluta equivale a `1/6` de pulgada.

- **`pt` (puntos)**: Esta unidad absoluta equivale a `1/72` de pulgada.

---

## Función `calc`

- **Función `calc()`**: Con la función `calc()`, puedes realizar cálculos directamente en tus hojas de estilo para determinar los valores de las propiedades de forma dinámica. Esto significa que puedes crear interfaces de usuario flexibles y adaptativas calculando las dimensiones en función del tamaño de la ventana de visualización u otros elementos.

---

## Pseudoclases de acción del usuario

- **Definición de pseudoclases**: Son palabras clave especiales de CSS que permiten seleccionar un elemento en función de su estado o posición específicos.

- **Pseudoclases de acción del usuario**: Son palabras clave especiales que permiten cambiar la apariencia de los elementos en función de las interacciones del usuario, mejorando así la experiencia general del usuario.

- **Pseudoclase `:active`**: Esta pseudoclase permite seleccionar el estado activo de un elemento, como al hacer clic en un botón.

- **Pseudoclase `:hover`**: Esta pseudoclase define el estado de desplazamiento del cursor sobre un elemento.

- **Pseudoclase `:focus`**: Esta pseudoclase aplica estilos cuando un elemento obtiene el foco, normalmente a través de la navegación por teclado o cuando un usuario hace clic en un campo de entrada de un formulario.

- **Pseudoclase `:focus-within`**: Esta pseudoclase se utiliza para aplicar estilos a un elemento cuando este o cualquiera de sus descendientes tiene el foco.

---

## Pseudoclases de Input

- **Pseudoclases de Input**: Estas pseudoclases se utilizan para seleccionar elementos de `input` HTML en función del estado en el que se encuentran antes y después de la interacción del usuario.

- **Pseudoclase `:enabled`**: Esta pseudoclase se utiliza para seleccionar botones de formulario u otros elementos que estén actualmente habilitados.

- **Pseudoclase `:disabled`**: Esta pseudoclase permite aplicar estilos a un elemento interactivo en modo deshabilitado.

- **Pseudoclase `:checked`**: Esta pseudoclase se utiliza para indicar al usuario que está marcado.

- **Pseudoclase `:valid`**: Esta pseudoclase se aplica a los campos de Input que cumplen los criterios de validación.

- **Pseudoclase `:invalid`**: Esta pseudoclase se aplica a los campos de Input que no cumplen los criterios de validación.

- **Pseudoclases `:in-range` y `:out-of-range`**: Estas pseudoclases aplican estilos a los elementos en función de si sus valores se encuentran dentro o fuera de los límites de rango especificados.

- **Pseudoclase `:required`**: Esta pseudoclase se aplica a los elementos de `input` que tienen el atributo `required`. Indica al usuario que debe completar el campo para enviar el formulario.

- **Pseudoclase `:optional`**: Esta pseudoclase aplica estilos a los elementos de Input que no son obligatorios y pueden dejarse vacíos.

- **Pseudoclase `:autofill`**: Esta pseudoclase aplica estilos a los campos de Input que el navegador completa automáticamente con datos guardados.

---

## Pseudoclases de ubicación

- Pseudoclases de ubicación: Estas pseudoclases se utilizan para aplicar estilos a enlaces y elementos que se encuentran dentro del documento actual.

- **Pseudoclase `:any-link`**: Esta pseudoclase es una combinación de las pseudoclases `:link` y `:visited`. Por lo tanto, coincide con cualquier elemento de anclaje que tenga un atributo `href`, independientemente de si ha sido visitado o no.

- **Pseudoclase `:link`**: Esta pseudoclase te permite seleccionar todos los enlaces no visitados de una página web. Puedes usarla para aplicar estilos diferentes a los enlaces antes de que el usuario haga clic en ellos.

- **Pseudoclase `:local-link`**: Esta pseudoclase selecciona los enlaces que apuntan al mismo documento. Puede ser útil cuando deseas diferenciar los enlaces internos de los externos.

- **Pseudoclase `:visited`**: Esta pseudoclase se aplica a un enlace que el usuario ha visitado.

- **Pseudoclase `:target`**: Esta pseudoclase se utiliza para aplicar estilos a un elemento que es el destino de un fragmento de URL.

---

## Pseudoclases de estructura de árbol

- **Pseudoclases de Tree-structural**: Estas pseudoclases te permiten seleccionar y aplicar estilos a elementos en función de su posición dentro del árbol del documento.

- **Pseudoclase `:root`**: Esta pseudoclase suele ser el elemento html raíz. Te ayuda a seleccionar el nivel más alto del documento para que puedas aplicar un estilo común a todo el documento.

- **Pseudoclase `:empty`**: Los elementos vacíos, es decir, aquellos que no tienen hijos más que espacios en blanco, también se incluyen en el árbol del documento. Por eso existe la pseudoclase `:empty` para seleccionar elementos vacíos.

- **Pseudoclase `:nth-child(n)`**: Esta pseudoclase te permite seleccionar elementos en función de su posición dentro de un elemento padre.

- **Pseudoclase `:nth-last-child(n)`**: Esta pseudoclase te permite seleccionar elementos contando desde el final.

- **Pseudoclase `:first-child`**: Esta pseudoclase selecciona el primer elemento de un elemento padre o del documento.

- **Pseudoclase `:last-child`**: Esta pseudoclase selecciona el último elemento de un elemento padre o del documento.

- **Pseudoclase `:only-child`**: Esta pseudoclase selecciona el único elemento de un elemento padre o del documento.

- **Pseudoclase `:first-of-type`**: Esta pseudoclase selecciona la primera aparición de un tipo de elemento específico dentro de su elemento padre.

- **Pseudoclase `:last-of-type`**: Esta pseudoclase selecciona la última aparición de un tipo de elemento específico dentro de su elemento padre.

- **Pseudoclase `:nth-of-type(n)`**: Esta pseudoclase te permite seleccionar un elemento específico dentro de su elemento padre en función de su posición entre los hermanos del mismo tipo.

- **Pseudoclase `:only-of-type`**: Esta pseudoclase selecciona un elemento si es el único de su tipo dentro de su elemento padre.

---

## Pseudoclases funcionales

- **Pseudoclases funcionales**: Las pseudoclases funcionales te permiten seleccionar elementos basándote en condiciones o relaciones más complejas. A diferencia de las pseudoclases normales, que seleccionan elementos en función de un estado (por ejemplo, `:hove`r, `:focus`), las pseudoclases funcionales aceptan argumentos.

- **Pseudoclase `:is()`**: Esta pseudoclase toma una lista de selectores (p. ej., `ol`, `ul`) y selecciona un elemento que coincida con uno de los selectores de la lista.

- **Pseudoclase `:where()`**: Esta pseudoclase toma una lista de selectores (p. ej., ol, ul) y selecciona un elemento que coincida con uno de los selectores de la lista. La diferencia entre :is y :where es que esta última tendrá una especificidad de 0.

- **Pseudoclase `:has()`**: Esta pseudoclase a menudo se denomina selector "padre" porque permite aplicar estilos a elementos que contienen elementos hijos especificados en la lista de selectores.

---

## Pseudoelementos

- **Pseudoelemento `::before`**: Este pseudoelemento utiliza la propiedad `content` para insertar contenido decorativo, como iconos, justo antes del elemento.

- **Pseudoelemento `::after`**: Este pseudoelemento utiliza la propiedad `content` para insertar contenido decorativo, como íconos, justo después del elemento.

- **Pseudoelemento `::first-letter`**: Este pseudoelemento se aplica a la primera letra del contenido de un elemento, lo que te permite darle estilo.

- **Pseudoelemento `::marker`**: Este pseudoelemento te permite seleccionar el marcador (viñeta o numeración) de los elementos de una lista para aplicarles estilo.

---

## Teoría del color

- **Definición de la teoría del color**: Es el estudio de cómo interactúan los colores entre sí y cómo influyen en nuestra percepción. Abarca las relaciones entre los colores, la armonía cromática y el impacto psicológico del color.

- **Colores primarios**: Estos colores, que son el `amarillo`, el `azul` y el `rojo`, son los tonos fundamentales de los que se derivan todos los demás colores.

- **Colores secundarios**: Estos colores se obtienen al mezclar cantidades iguales de dos colores primarios. El `verde`, el `naranja` y el `morado` son ejemplos de colores secundarios.

- **Colores terciarios**: Estos colores resultan de la combinación de un color primario con un color secundario adyacente. El `amarillo verdoso`, el `azul verdoso` y el `azul violeta` son ejemplos de colores terciarios.

- **Colores cálidos**: Estos colores, que incluyen `rojos`, `naranjas` y `amarillos`, evocan sentimientos de comodidad, calidez y acogedor.

- **Colores fríos**: Estos colores, que incluyen `azule`s, `verdes` y `morados`, evocan sentimientos de calma, serenidad y profesionalismo.

- **Rueda de colores**: La rueda de colores es un diagrama circular que muestra cómo se relacionan los colores entre sí. Es una herramienta esencial para los diseñadores, ya que les ayuda a seleccionar combinaciones de colores.

- **Esquemas de colores análogos**: Estos esquemas de colores crean experiencias armoniosas y relajantes. Utilizan colores análogos, que son los que se encuentran uno al lado del otro en la rueda de colores.

- **Esquemas de colores complementarios**: Estos esquemas de colores crean un alto contraste y un gran impacto visual. Sus colores se encuentran en los extremos opuestos de la rueda de colores, uno frente al otro.

- **Esquema de colores triádico**: Este esquema de colores tiene colores vibrantes. Se componen de colores que están aproximadamente a la misma distancia entre sí. Si se conectan, forman un triángulo equilátero en la rueda de colores.

- **Esquema de colores monocromático**: En este esquema de colores, todos los colores se derivan del mismo color base ajustando su luminosidad, oscuridad y saturación. Esto evoca una sensación de unidad y armonía, al tiempo que crea contraste.

---

## Diferentes formas de trabajar con colores en CSS

- **Colores con nombre**: Estos colores son nombres de colores predefinidos que reconocen los navegadores. Algunos ejemplos son `blu`e, `darkred` y `lightgreen`.

- **Función `rgb()`**: `RGB` son las siglas de `rojo`, `verde` y `azul`, los colores primarios de la luz. Estos tres colores se combinan en diferentes intensidades para crear una amplia gama de colores. La función `rgb()` te permite definir colores utilizando el modelo de color `RGB`.

- **Función `rgba()`**: Esta función agrega un cuarto valor —alfa— que controla la transparencia del color.

- **Función `hsl()`**: HSL significa Tono, Saturación y Luminosidad —tres componentes clave que definen un color.

- **Función `hsla()`**: Esta función agrega un cuarto valor —alfa— que controla la opacidad del color.

- **Hexadecimal**: Un código `hex` (abreviatura de código hexadecimal) es una cadena de seis caracteres que se utiliza para representar colores en el modelo de color RGB. El término `hex` hace referencia al sistema numérico de `base 16`, que utiliza los dígitos del `0` al `9` y las letras de la `A` a la `F`.

---

## Propiedad `box-shadow`

- **Definición**: La propiedad `box-shadow` aplica una o más sombras alrededor de un elemento.

- **Valores de desplazamiento**: Debes especificar valores horizontales (`offset-x`) y verticales (`offset-y`). Un valor positivo de `offset-x` desplaza la sombra hacia la derecha, mientras que los valores negativos la desplazan hacia la izquierda. Un valor positivo de `offset-y` desplaza la sombra hacia abajo, mientras que los valores negativos la desplazan hacia arriba. Si un valor es 0, no es necesario incluir una unidad.

- **Radio de desenfoque**: Este valor opcional controla el grado de desenfoque de la sombra. Si no se incluye, el valor predeterminado es `0`, lo que crea bordes nítidos. Cuanto mayor sea el valor, más suave será la sombra.

- **Radio de expansión**: Este valor opcional controla cuánto se expande o se contrae la sombra. Si no se incluye, el valor predeterminado es `0`.

- **Color de la sombra**: Puedes especificar el color utilizando colores con nombre, valores hexadecimales o las funciones `rgb()`, `rgba()`, `hsl()` o `hsla()`.

- **Palabra clave `inset`**: Al añadir la palabra clave `inset`, la sombra se coloca dentro del elemento en lugar de fuera.

- Aplicación de múltiples sombras de cuadro: Puedes aplicar múltiples sombras separándolas con comas. Las sombras se superponen de adelante hacia atrás.
  - **Codigo ejemplo**

    ```html
    <div class="shadow-box">Shadow Example</div>

    <style>
     .shadow-box {
       width: 200px;
       padding: 20px;
       margin: 20px;
       background-color: lightblue;
       text-align: center;
       box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
     }
    </style>
    ```

    ```css
    box-shadow: offset-x offset-y blur-radius spread-radius color;
    ```

---

## Degradados lineales y radiales

- **Degradados lineales**: Estos degradados crean una transición gradual entre colores a lo largo de una línea recta. Puedes controlar la dirección de esta línea y los colores utilizados.

- **Degradados radiale**s: Estos degradados crean efectos circulares o elípticos que se extienden desde un punto central.

---

## Prácticas recomendadas para el diseño de `Inputs`

- **Diseño de `Inputs`**: Al igual que con todos los elementos de texto, debes asegurarte de que los estilos que apliques a los `Inputs` sean accesibles. Esto significa que la fuente debe tener un tamaño adecuado y que el color debe contrastar lo suficiente con el fondo. Los elementos de entrada también pueden recibir el foco. Al editar tus estilos, debes asegurarte de mantener un indicador visible cuando el elemento tenga el foco, como un borde en negrita.

---

## Uso de `appearance: none` para los Inputs

`appearance: none`: Los navegadores aplican estilos predeterminados a muchos elementos. La propiedad CSS `appearance: none` te ofrece un control total sobre el estilo, pero conlleva algunas salvedades. Al crear estilos personalizados para los Inputs, deberás asegurarte de que los indicadores de foco y de error sigan estando presentes.

---

## Problemas comunes al aplicar estilos a las propiedades `datetime-local` y `color`

- **Problemas comunes**: Estos tipos especiales de campos de entrada se basan en pseudoelementos complejos para crear elementos como los selectores de fecha y de color. Esto supone un reto importante a la hora de aplicar estilos a estos campos. Uno de los retos es que el estilo predeterminado depende totalmente del navegador, por lo que el CSS que escribas para que el selector tenga el aspecto deseado puede ser completamente diferente en otro navegador.

---

## Propiedad `overflow` de CSS

- **Definición**: `Overflow` se refiere a la forma en que los elementos gestionan el contenido que excede, o `"desborda"`, el tamaño del elemento contenedor. El desbordamiento es bidimensional.

- `overflow-x`: El `eje x` determina el desbordamiento horizontal.

- `overflow-y`: El `eje y` determina el desbordamiento vertical.

---

## Propiedad CSS `transform`

- **Definición**: Esta propiedad permite aplicar diversas transformaciones a los elementos, como rotarlos, escalarlos, inclinarlos o desplazarlos (trasladarlos) en un espacio 2D o 3D.

- **Función `translate()`**: Esta función se utiliza para desplazar un elemento desde su posición actual.

- **Función `scale()`**: Esta función permite cambiar el tamaño de un elemento.

- **Transformaciones y accesibilidad**: Si utiliza transform para ocultar o mostrar contenido, asegúrese de que el contenido siga siendo accesible para los lectores de pantalla y la navegación por teclado. El contenido oculto debe estar realmente oculto, por ejemplo, utilizando display: none o visibility: hidden, en lugar de simplemente ser desplazado visualmente fuera de la pantalla.

---

## El Box Model

- **Definición**: En el Box Model de CSS, cada elemento está rodeado por una caja. Esta caja consta de cuatro componentes: el área de contenido, el `padding`, `border` y `margin`.

- **Área de contenido**: El área de contenido es la parte más interna de la caja. Es el espacio que contiene el contenido real de un elemento, como texto o imágenes.

- `padding`: El relleno es el área inmediatamente posterior al área de contenido. Es el espacio entre el área de contenido y el borde de un elemento.

- `border`: El borde es el borde exterior o contorno de un elemento en el Box Model CSS. Es el límite visual del elemento.

- `margin`: El margen es el espacio fuera del borde de un elemento. Determina la distancia entre un elemento y otros elementos a su alrededor.

---

## Colisión de márgenes

- **Definición**: Este comportamiento se produce cuando los márgenes verticales de elementos adyacentes se superponen, lo que da como resultado un único margen igual al mayor de los dos. Este comportamiento se aplica únicamente a los márgenes verticales (superior e inferior), no a los márgenes horizontales (izquierdo y derecho).

---

## Los valores de las propiedades `content-box` y `border-box`

- **Propiedad `box-sizing`**: Esta propiedad se utiliza para determinar cómo se calculan el ancho y la altura finales de un elemento HTML.

- **Valor `content-box`**: En el modelo `content-box`, el ancho y la altura que establezcas para un elemento determinan las dimensiones del área de contenido, pero no incluyen el relleno, el borde ni el margen.

- **Valor `border-box`**: Con `border-box`, el ancho y la altura de un elemento incluyen el área de contenido, el relleno y el borde, pero no incluyen el margen.

---

## Restablecimiento de CSS

- **Definición**: Un restablecimiento de CSS es una hoja de estilo que elimina todo o parte del formato predeterminado que los navegadores web aplican a los elementos HTML. Entre las opciones de terceros para el restablecimiento de CSS se encuentran `sanitize.css` y `normalize.css`.

---

## Propiedad de filtro CSS

- **Definición**: Esta propiedad se puede utilizar para crear diversos efectos, como desenfoque, cambio de color y ajuste de contraste.

- **Función `blur()`**: Esta función aplica un desenfoque gaussiano al elemento. El valor se define en píxeles y representa el radio del desenfoque.

- **Función `brightness()`**: Esta función ajusta el brillo del elemento. Un valor de 0% hará que el elemento sea completamente negro, mientras que los valores superiores al 100% aumentarán el brillo.

- **Función `grayscale()`**: Esta función convierte el elemento a escala de grises. La intensidad se define como un porcentaje, donde el 100% es escala de grises completa y el 0% deja la imagen sin cambios.

- **Función `sepia()`**: Esta función aplica un tono sepia al elemento. Al igual que la escala de grises, utiliza un valor porcentual.

- **Función `hue-rotate()`**: Esta función aplica una rotación de matiz al elemento. El valor se define en grados y representa una rotación alrededor del círculo cromático.

---

## Introducción a CSS Flexbox y al modelo Flex

- **Definición**: CSS Flexbox es un modelo de diseño unidimensional que permite organizar elementos en filas y columnas dentro de un contenedor.

- **Modelo Flex**: Este modelo define cómo se organizan los elementos flexibles dentro de un contenedor flexible. Cada contenedor flexible tiene dos ejes: el eje principal y el eje transversal.

---

## La propiedad `flex-direction`

- **Definición**: Esta propiedad establece la dirección del eje principal. El valor predeterminado de `flex-direction` es `row`, lo que coloca todos los elementos flexibles en la misma fila, en la dirección del idioma predeterminado de tu navegador (de izquierda a derecha o de derecha a izquierda).

- `flex-direction: row-reverse;`: Invierte el orden de los elementos en la fila.

- `flex-direction: column;`: Alinea los elementos flexibles verticalmente en lugar de horizontalmente.

- `flex-direction: column-reverse;`: Invierte el orden de los elementos flexibles verticalmente.

---

## La propiedad `flex-wrap`

- **Definición**: Esta propiedad determina cómo se ajustan los elementos flexibles dentro de un contenedor flexible para adaptarse al espacio disponible. `flex-wrap` puede tomar tres valores posibles: `nowrap`, `wrap` y `wrap-reverse`.

- `flex-wrap: nowrap;`: Este es el valor predeterminado. Los elementos flexibles no se ajustarán a una nueva línea, incluso si su ancho excede el ancho del contenedor.

- `flex-wrap: wrap;`: Esta propiedad ajustará los elementos cuando superen el ancho de su contenedor.

- `flex-wrap: wrap-reverse;`: Esta propiedad ajustará los elementos flexibles en orden inverso.

- **Propiedad `flex-flow`**: Esta propiedad es una propiedad abreviada para `flex-direction` y `flex-wrap`.

---

## La propiedad justify-content

- **Definición**: Esta propiedad alinea los elementos secundarios a lo largo del eje principal del contenedor `flex`.

- `justify-content: flex-start;`: En este caso, los elementos flex se alinearán con el inicio del eje principal. Este puede ser horizontal o vertical.

- `justify-content: flex-end;`: En este caso, los elementos flex se alinearán con el final del eje principal, ya sea horizontal o verticalmente.

- `justify-content: center;`: Esto centra los elementos flexibles a lo largo del eje principal.

- `justify-content: space-between;`: Esto distribuirá los elementos de manera uniforme a lo largo del eje principal.

- `justify-content: space-around;`: Esto distribuirá los elementos flexibles de manera uniforme dentro del eje principal, añadiendo un espacio antes del primer elemento y después del último.

- `justify-content: space-evenly;`: Esto distribuye los elementos de manera uniforme a lo largo del eje principal.

---

## La propiedad `align-items`

- **Definición**: Esta propiedad se utiliza para distribuir los elementos a lo largo del eje transversal. Recuerda que el eje transversal es perpendicular al eje principal.

- `align-items: center;`: Se utiliza para centrar los elementos a lo largo del eje transversal.

- `align-items: flex-start;`: Alinea los elementos con el inicio del eje transversal.

- `align-items: stretch;`: Se utiliza para estirar los elementos flexibles a lo largo del eje transversal.

---

## Introducción a la tipografía

- **Definición**: La tipografía es el arte de elegir las fuentes y el formato adecuados para que el texto resulte visualmente atractivo y fácil de leer. El término "type" se refiere al diseño y la disposición de los caracteres individuales.

- **Definición de tipo de letra**: Un tipo de letra es el diseño y el estilo general de un conjunto de caracteres, números y símbolos. Es como un plano de una familia de fuentes.

- **Definición de fuente**: Una fuente es una variación específica de un tipo de letra con características concretas, como el tamaño, el grosor, el estilo y el ancho.

- **Tipo de letra `serif`**: Este tipo de letra tiene un estilo clásico con pequeñas líneas al final de los caracteres. Los tipos de letra `serif` se utilizan comúnmente para materiales impresos, como los libros.

- **Estilo tipográfico `sans-serif`**: Este estilo tipográfico tiene un aspecto más moderno, sin las pequeñas líneas al final de los caracteres. Los estilos tipográficos `sans-serif` se utilizan comúnmente en el diseño digital porque son fáciles de leer en pantalla. Algunos ejemplos son Helvetica, Arial y Roboto.

- **Graso de la fuente**: Es el grosor de los caracteres, que incluye `light`, `regular`, `bold` y `black`.

- **Estilo de fuente**: es la inclinación y la orientación de los caracteres, como la cursiva y la oblicua.

- **Ancho de fuente**: es el espacio horizontal que ocupan los caracteres, como el condensado y el expandido.

- **Línea de base**: es la línea imaginaria sobre la que se asientan la mayoría de los caracteres.

- **Altura de mayúscula**: es la altura de las letras mayúsculas, medida desde la línea de base hasta la parte superior.

- **Altura x**: Es la altura promedio de las letras minúsculas, excluyendo las ascendentes y descendentes.

- **Ascendentes**: Son las partes de las letras minúsculas que se extienden por encima de la altura x, como las partes superiores de las letras "h", "b", "d" y "f".

- **Descendentes**: Son las partes de las letras minúsculas que se extienden por debajo de la línea de base, como las colas de "y", "g", "p" y "q".

- **Kerning**: Es la forma en que se ajusta el espacio entre pares específicos de caracteres para mejorar su legibilidad y estética. Por ejemplo, reducir el espacio entre las letras A y V.

- **Espaciado entre caracteres**: Es la forma en que se ajusta el espacio entre todos los caracteres de un bloque de texto. Es, esencialmente, la distancia entre los caracteres. Afecta la densidad y la apertura del texto.

- **Espaciado entre líneas**: Es el espacio vertical entre las líneas de texto. Se mide desde la línea de base de una línea hasta la línea de base de la siguiente línea.

- **Prácticas recomendadas en tipografía**: Debes elegir fuentes claras y sencillas para que tus diseños sean fáciles de entender. Esto es especialmente importante para el texto principal de tu sitio web. Los usuarios estarán más dispuestos a interactuar con tu contenido si la fuente es fácil de leer. Debes utilizar dos o tres fuentes como máximo para crear una coherencia visual. Usar demasiadas fuentes puede dificultar la lectura del texto y debilitar la identidad de tu marca. Esto también puede afectar la experiencia del usuario al aumentar el tiempo de carga del sitio web. Puedes usar el tamaño de la fuente para crear una jerarquía visual para los títulos, subtítulos, párrafos y otros elementos. Por ejemplo, el título principal de una página web debe tener una fuente más grande, seguido de subtítulos con tamaños de fuente más pequeños. Esto le dará a cada elemento de la jerarquía un tamaño de fuente específico que ayuda a los usuarios a navegar visualmente por la estructura.

---

## Propiedad `font-family` de CSS

- **Definición**: Una familia tipográfica es un conjunto de fuentes que comparten un diseño común. Todas las fuentes que pertenecen a la misma familia se basan en el mismo tipo de letra básico, pero también presentan variaciones en cuanto a estilo, grosor y ancho. Se pueden especificar varias familias tipográficas por orden de prioridad, de mayor a menor, separándolas con comas. Estas fuentes alternativas actuarán como opciones de reserva. Siempre debes incluir una familia de fuentes genérica al final de la lista de familias de fuentes.

- **Familias de fuentes comunes**: Estas son algunas de las familias de fuentes más comunes utilizadas en CSS: `serif`, `sans-serif`, `monospace`, `cursive`, `fantasy`

---

## Fuentes seguras para la web

- **Definición**: Estas fuentes son un subconjunto de fuentes que es muy probable que estén instaladas en una computadora o dispositivo. Cuando el navegador tiene que mostrar una fuente, intenta encontrar el archivo de la fuente en el sistema del usuario. Pero si no encuentra la fuente, por lo general recurrirá a una fuente predeterminada del sistema.

- **Fuentes aptas para la web**:

  - Las fuentes sans-serif se utilizan habitualmente en el desarrollo web porque no tienen pequeños "feet" o trazos al final de los caracteres, por lo que resultan fáciles de leer en pantalla. Algunos ejemplos de fuentes sans-serif aptas para la web son: Arial, Verdana y Trebuchet MS.

  - Por el contrario, las fuentes serif sí tienen pequeños "feet" al final de los caracteres, por lo que se utilizan comúnmente para la impresión tradicional. Las fuentes serif seguras para la web incluyen: Times New Roman y Georgia.

---

## Reglas (at-rules) `@` y la regla `@font-face`

- **Definición**: Las reglas `@` son instrucciones que proporcionan indicaciones al navegador. Se pueden utilizar para definir diversos aspectos de la hoja de estilos, como consultas de medios, fotogramas clave, tipos de letra y mucho más.

- `@font-face`: Permite definir una fuente personalizada especificando el archivo de fuente, el formato y otras propiedades importantes, como el grosor y el estilo. Para que la regla `@font-face` sea válida, también es necesario especificar la propiedad src. Esta propiedad contiene referencias a los recursos de fuente.

- **Formatos de fuente**: Para cada recurso de fuente, también se puede especificar el formato. Esto es opcional. Es una sugerencia para el navegador sobre el formato de la fuente. Si se omite el formato, el recurso se descargará y el formato se detectará después de la descarga. Si el formato no es válido, el recurso no se descargará. Los formatos de fuente posibles incluyen `collection`, `embedded-opentype`, `opentype`, `svg`, `truetype`, `woff` y `woff2`.

- **`woff` y `woff2`**: `woff` significa «Web Open Font Format». Es un formato de fuente ampliamente utilizado desarrollado por Mozilla en colaboración con Type Supply, LettError y otras organizaciones. La diferencia entre `woff` y `woff2` es el algoritmo utilizado para comprimir los datos.

- **OpenType**: Este es un formato para fuentes de computadora escalables desarrollado por Microsoft y Adobe que permite a los usuarios acceder a características adicionales en una fuente. Se utiliza ampliamente en los principales sistemas operativos.

- `tech()`: Se utiliza para especificar la tecnología del recurso de fuente. Esto es opcional.

---

## Cómo trabajar con fuentes externas

- **Definición**: Una fuente externa es un archivo de fuente que no está incluido directamente en los archivos de tu proyecto. Por lo general, se alojan en un servidor independiente. Para incluir estas fuentes externas en tu proyecto, puedes utilizar un elemento `link` o una instrucción `@import` en tu CSS.

- **Google Fonts**: Este es un servicio de Google que ofrece una colección de fuentes, muchas de las cuales están diseñadas específicamente para el desarrollo web.

- **Font Squirrel**: Este es otro recurso popular que puedes utilizar para agregar fuentes externas personalizadas a tus proyectos.

---

## Propiedad `text-shadow`

- **Definición**: Esta propiedad se utiliza para aplicar sombras al texto. Es necesario especificar los desplazamientos `X` e `Y`, que representan la distancia horizontal `y` vertical de la sombra con respecto al texto, respectivamente. Estos valores son obligatorios. Los valores positivos de los desplazamientos `X` e `Y` moverán la sombra hacia la derecha y hacia abajo, respectivamente, mientras que los valores negativos la moverán hacia la izquierda y hacia arriba.

- **Color de la sombra**: También puedes personalizar el color de la sombra especificando este valor antes o después del desplazamiento. Si no se especifica el color, el navegador lo determinará automáticamente, por lo que suele ser mejor establecerlo explícitamente.

- **Radio de desenfoque**: El radio de desenfoque es opcional, pero hará que la sombra se vea mucho más suave y sutil. El valor predeterminado del radio de desenfoque es cero. Cuanto mayor sea el valor, mayor será el desenfoque, lo que significa que la sombra se vuelve más clara.

- **Aplicación de múltiples sombras de texto**: El texto puede tener más de una sombra. Las sombras se aplicarán en capas, de adelante hacia atrás, con la primera sombra en la parte superior.

---

## Árbol de accesibilidad

- El árbol de accesibilidad es una estructura que utilizan las tecnologías de apoyo, como los lectores de pantalla, para interpretar el contenido de una página web e interactuar con él.

---

## Función `max()`

- La función `max()` devuelve el mayor de un conjunto de valores separados por comas:

  - **Codigo ejemplo**

    ```css
    img {
      width: max(250px, 25vw);
    }
    ```

- En el ejemplo anterior, el ancho de la imagen será de `250px` si el ancho de la ventana de visualización es inferior a `1000px` (ya que `250px` es más del `25%` de ese ancho). Si el ancho de la ventana gráfica es mayor de `1000px`, el ancho de la imagen será de `25vw`. Esto se debe a que 25vw equivale al `25%` del ancho de la ventana gráfica.

---

## Prácticas recomendadas con CSS y accesibilidad

- `display: none;`: El uso de `display: none;` implica que los lectores de pantalla y otras tecnologías de apoyo no podrán acceder a este contenido, ya que no se incluye en el árbol de accesibilidad. Por lo tanto, es importante utilizar este método solo cuando se desee eliminar por completo el contenido tanto de la presentación visual como de la accesibilidad.

- `visibility: hidden;`: Esta propiedad y este valor ocultan el contenido visualmente, pero lo mantienen en el flujo del documento, lo que significa que sigue ocupando espacio en la página. Estos elementos tampoco serán leídos por los lectores de pantalla, ya que se habrán eliminado del árbol de accesibilidad.

- **Clase CSS `.sr-only`**: Esta es una técnica común utilizada para ocultar visualmente el contenido, al tiempo que se mantiene accesible para los lectores de pantalla.

  - **Codigo ejemplo**

    ```css
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
    ```

- `scroll-behavior: smooth;`: Esta propiedad y este valor permiten un desplazamiento fluido.

- `prefers-reduced-motion` feature: Se trata de una característica de medios que se puede utilizar para detectar las preferencias del usuario en cuanto a animaciones.

  - **Codigo ejemplo**

    ```css
    @media (prefers-reduced-motion: no-preference) {
      * {
        scroll-behavior: smooth;
      }
    }
    ```

- En el ejemplo anterior, el desplazamiento suave se activa si el usuario no tiene configuradas preferencias de animación en su dispositivo.

---

## Ocultar contenido con atributos HTML

- **Atributo `aria-hidden`**: Se utiliza para ocultar un elemento a los usuarios que emplean tecnologías de asistencia, como los lectores de pantalla. Por ejemplo, se puede utilizar para ocultar imágenes decorativas que no aportan ningún contenido significativo.

- **Atributo `hidden`**: Este atributo es compatible con la mayoría de los navegadores modernos y oculta el contenido tanto visualmente como del árbol de accesibilidad. Se puede activar y desactivar fácilmente con JavaScript.

  - **Codigo ejemplo**

    ```html
    <p aria-hidden>This paragraph is visible for sighted users, but is hidden from assistive technology.</p>
    <p hidden>This paragraph is hidden from both sighted users and assistive technology.</p>
    ```

---

## Problemas de accesibilidad del atributo `placeholder`

- El uso del texto de `placeholder` no es recomendable desde el punto de vista de la accesibilidad. Con demasiada frecuencia, los usuarios confunden el texto de `placeholder` con un valor real de entrada; creen que ya hay un valor en el campo de entrada.

---

## Trabajar con diferentes selectores de atributos y enlaces

- **Definición**: El selector de atributos permite seleccionar elementos HTML en función de sus atributos, como los atributos `href` o `title`.

- **Atributo `title`**: Este atributo proporciona información adicional sobre un elemento.

---

## Cómo identificar elementos con los atributos `lang` y `data-lang`

- **Atributo `lang`**: este atributo se utiliza en HTML para especificar el idioma del contenido de un elemento. Es posible que desees aplicar estilos diferentes a los elementos en función del idioma en el que estén escritos, especialmente en un sitio web multilingüe.

- **Atributo `data-lang`**: los atributos de datos personalizados, como el atributo `data-lang`, se utilizan habitualmente para almacenar información adicional en los elementos, como por ejemplo, especificar el idioma utilizado en una sección concreta de texto.

---

## Cómo trabajar con el selector de atributos, los elementos de listas ordenadas y el atributo `type`

- **Atributo `type`**: al trabajar con listas ordenadas en HTML, el atributo `type` permite especificar el estilo de numeración que se va a utilizar, como numérica, alfabética o con números romanos.

---

## Trabajar con elementos flotantes

- **Definición**: Los elementos flotantes se utilizan para sacar un elemento de su flujo normal en la página y colocarlo a la izquierda o a la derecha de su contenedor. Cuando esto ocurre, el texto se ajusta alrededor de ese contenido flotante.

- **Borrar flotantes**: La propiedad `clear` se utiliza para determinar si un elemento debe moverse debajo del contenido flotante. Cuando hay varios elementos flotantes apilados uno al lado del otro, pueden surgir problemas de superposición y colapso en los diseños. Por eso se creó el truco `clearfix` para solucionar este problema.

---

## Posicionamiento estático, relativo y absoluto

- **Posicionamiento estático**: Es el flujo normal del documento. Los elementos se colocan de arriba abajo y de izquierda a derecha, uno tras otro.

- **Posicionamiento relativo**: permite utilizar las propiedades `top`, `left`, `right` y `bottom` para posicionar el elemento dentro del flujo normal del documento. También se puede utilizar el posicionamiento relativo para hacer que los elementos se superpongan con otros elementos de la página.

- **Posicionamiento absoluto**: permite sacar un elemento del flujo normal del documento, haciendo que se comporte de forma independiente respecto a los demás elementos.

---

## Posicionamiento fijo y adherido

- **Posicionamiento fijo**: cuando un elemento se posiciona con `position: fixed`, se retira del flujo normal del documento y se coloca en relación con la ventana de visualización, lo que significa que permanece en la misma posición incluso cuando el usuario se desplaza. Esto se utiliza a menudo para elementos como encabezados o barras de navegación que deben permanecer visibles en todo momento.

- **Posicionamiento adherido**: este tipo de posicionamiento actúa como un híbrido entre el posicionamiento relativo y el fijo. Inicialmente, el elemento se comporta como si estuviera posicionado de forma relativa, permaneciendo dentro del flujo del documento. Sin embargo, una vez que el usuario desplaza el elemento más allá de un punto determinado, este se «pega» a la ventana de visualización (normalmente la parte superior) y se comporta como si fuera fijo. Esto es ideal para crear elementos como barras de navegación fijas, que solo se vuelven fijas una vez que el usuario se desplaza hasta una posición determinada.

---

## Cómo trabajar con la propiedad `z-index`

- **Definición**: La propiedad `z-index` en CSS se utiliza para controlar el orden de superposición vertical de los elementos posicionados que se superponen en la página.

---

## Diseño web adaptativo

- **Definición**: El principio fundamental del diseño adaptativo es la adaptabilidad: la capacidad de un sitio web para ajustar su diseño y contenido en función del tamaño de la pantalla y las capacidades del dispositivo en el que se visualiza.

- **Cuadrículas fluidas**: Estas utilizan unidades relativas, como porcentajes, en lugar de unidades fijas, como píxeles, lo que permite que el contenido cambie de tamaño y se reajuste según el tamaño de la pantalla.

- **Imágenes flexibles**: Estas están configuradas para cambiar de tamaño dentro de los elementos que las contienen, lo que garantiza que no desborden sus contenedores en pantallas más pequeñas.

---

## Media Queries (Consultas de medios)

- **Definición**: Permite a los desarrolladores aplicar diferentes estilos en función de las características del dispositivo, principalmente el ancho de la ventana de visualización.

- **Tipo de medio `all`**: Es adecuado para todos los dispositivos. Es el valor predeterminado si no se especifica ningún tipo de medio.

- **Tipos de medio `print`**: Destinado a material paginado y documentos visualizados en pantalla en modo de vista previa de impresión.

- **Tipos de medio `screen`**: Destinado principalmente a pantallas.

- `aspect-ratio`: Describe la relación entre el ancho y el alto de la ventana de visualización.

- `orientation`: Se utiliza para indicar si el dispositivo está en orientación horizontal o vertical.

- `resolution`: Se utiliza para describir la resolución del dispositivo de salida en puntos por pulgada (ppp) o puntos por centímetro (pcc).

- `hover`: Se utiliza para comprobar si el mecanismo de entrada principal puede pasar el cursor sobre los elementos.

- `prefers-color-scheme`: Se utiliza para detectar si el usuario ha solicitado un tema de color claro u oscuro.

- **Consultas de medios y operadores lógicos**: El operador «and» se utiliza para combinar múltiples características de medios, mientras que «not» y «only» se pueden utilizar para negar o aislar consultas de medios.

---

## Breakpoints de medios habituales

- **Definición**: Los puntos de ruptura de medios son puntos específicos en el diseño de un sitio web en los que el diseño y el contenido se ajustan para adaptarse a diferentes tamaños de pantalla. Existen algunos puntos de ruptura generales que puedes utilizar para adaptarte a teléfonos, tabletas y pantallas de escritorio. Sin embargo, no es recomendable intentar adaptarse a todos y cada uno de los tamaños de pantalla posibles para los distintos dispositivos.

- **Dispositivos pequeños (teléfonos inteligentes)**: hasta 640 píxeles

- **Dispositivos medianos (tabletas)**: de 641 a 1024 píxeles

- **Dispositivos grandes (computadoras de escritorio)**: 1025 píxeles y más

---

## Enfoque `mobile first`

- **Definición**: El enfoque `mobile first` es una filosofía de diseño y una estrategia de desarrollo en el diseño web adaptativo que da prioridad a la creación de sitios web para dispositivos móviles antes de diseñar para pantallas más grandes.

---

## Propiedades personalizadas de CSS (variables de CSS)

- **Definición**: Las propiedades personalizadas de CSS, también conocidas como variables de CSS, son entidades definidas por los autores de CSS que contienen valores específicos para ser reutilizados a lo largo de un documento. Son una característica poderosa que permite hojas de estilo más eficientes, fáciles de mantener y flexibles. Las propiedades personalizadas son particularmente útiles para crear diseños personalizables. Puedes definir un conjunto de propiedades para diferentes temas.

---

## La regla `@property`

- **Definición**: La regla `@property` es una potente función de CSS que permite a los desarrolladores definir propiedades personalizadas con un mayor control sobre su comportamiento, incluyendo cómo se animan y sus valores iniciales.

  - **Codigo ejemplo**

    ```css
    @property --property-name {
      syntax: '<type>';
      inherits: true | false;
      initial-value: <value>;
    }
    ```

- `--property-name`: Este es el nombre de la propiedad personalizada que estás definiendo. Al igual que todas las propiedades personalizadas, debe comenzar con dos guiones.

- `syntax`: Define el tipo de la propiedad, que puede ser, por ejemplo, `<color>`, `<length>`, `<number>`, `<percentage>` o tipos más complejos.

- `inherits`: Esto especifica si la propiedad debe heredar su valor del elemento padre.

- `initial-value`: Esto establece el valor predeterminado de la propiedad.

- **Valores de reserva**: Al utilizar la propiedad personalizada, puedes proporcionar un valor de reserva utilizando la función `var()`, tal como lo harías con las propiedades personalizadas estándar.

---

## Conceptos básicos de CSS Grid

- **Definición**: CSS Grid es un sistema de diseño bidimensional que se utiliza para crear diseños complejos en páginas web. Las cuadrículas constan de filas y columnas con espacios entre ellas. Para definir un diseño de cuadrícula, hay que establecer la propiedad `display` en `grid`.

- **La unidad `fr` (fraccional)**: Esta unidad representa una fracción del espacio dentro del contenedor de la cuadrícula. Puedes utilizar la unidad `fr` para crear cuadrículas flexibles.

- **Creación de espacios entre pistas**: Hay tres formas de crear espacios entre pistas en CSS Grid. Se puede usar la propiedad `column-gap` para crear espacios entre columnas. Se puede usar la propiedad `row-gap` para crear espacios entre filas. O se puede usar la propiedad abreviada `gap` para crear espacios tanto entre filas como entre columnas.

- **Función `repeat()`**: Esta función se usa para repetir secciones en la lista de pistas. En lugar de escribir `grid-template-columns: 1fr 1fr 1fr;`, puedes usar la función `repeat()`.

- **Cuadrícula explícita**: Puedes especificar el número de líneas o pistas usando las propiedades `grid-template-columns` o `grid-template-rows`.

- **Cuadrícula implícita**: Cuando los elementos se colocan fuera de la cuadrícula, se crean automáticamente filas y columnas para esos elementos externos.

- **Función `minmax()`**: Esta función se utiliza para establecer los tamaños mínimo y máximo de una pista.

- **Colocación automática en la cuadrícula**: El navegador coloca automáticamente los elementos mediante el algoritmo de colocación automática. La propiedad `grid-auto-flow` controla este comportamiento, utilizando valores como `row`, `column` o `dense` para influir en la dirección de colocación y en si se rellenan los espacios vacíos.

- **Colocación basada en líneas**: Todas las cuadrículas tienen líneas. Para especificar dónde comienza el elemento en una línea, puedes usar las propiedades `grid-column-start` y `grid-row-start`. Para especificar dónde termina el elemento en la línea, puedes usar las propiedades `grid-column-end` y `grid-row-end`. También puedes optar por usar las propiedades abreviadas `grid-column` o `grid-row`.

- `grid-template-areas`: Esta propiedad se utiliza para proporcionar un nombre a los elementos que vas a colocar en la cuadrícula.

- **Alineación**: Usa `justify-items` y `align-items` para controlar cómo se alinean los elementos dentro de sus áreas de cuadrícula. Usa `justify-self` y `align-self` en elementos de cuadrícula individuales para anular la alineación establecida en el contenedor.

---

## Conceptos básicos de las animaciones CSS

- **Definición**: Las animaciones CSS te permiten crear efectos dinámicos y visualmente atractivos en páginas web sin necesidad de JavaScript ni de una programación compleja. Ofrecen una forma de realizar transiciones fluidas entre diferentes estilos de los elementos durante un tiempo determinado.

- **La regla `@keyframes`**: Esta regla define las etapas y los estilos de la animación. Especifica qué estilos debe tener el elemento en distintos momentos de la animación.

- **Propiedad `animation`**: Es la propiedad abreviada que se utiliza para aplicar animaciones.

- `animation-name`: Especifica el nombre que debe utilizar la regla `@keyframes`.

- `animation-duration`: Establece cuánto tiempo debe tardar la animación en completarse.

- `animation-timing-function`: Define cómo progresa la animación a lo largo del tiempo (por ejemplo, ease, linear, ease-in-out).

- `animation-delay`: Especifica un retraso antes de que comience la animación.

- `animation-iteration-count`: Establece cuántas veces debe repetirse la animación.

- `animation-direction`: Determina si la animación debe reproducirse hacia adelante, hacia atrás o de forma alterna.

- `animation-fill-mode`: Especifica cómo debe verse el elemento antes y después de la animación.

- `animation-play-state`: Permite pausar y reanudar la animación.

---

## Accesibilidad y la consulta de medios `prefers-reduced-motion`

- **La consulta de medios `prefers-reduced-motion`**: Una de las principales preocupaciones en materia de accesibilidad con respecto a las animaciones es que pueden causar molestias o incluso daños físicos a algunos usuarios. Las personas con trastornos vestibulares o sensibilidad al movimiento pueden experimentar mareos, náuseas o dolores de cabeza cuando se exponen a ciertos tipos de movimiento en la pantalla. La consulta de medios `prefers-reduced-motion` permite a los desarrolladores web detectar si el usuario ha solicitado animaciones o efectos de movimiento mínimos a nivel del sistema.

---
