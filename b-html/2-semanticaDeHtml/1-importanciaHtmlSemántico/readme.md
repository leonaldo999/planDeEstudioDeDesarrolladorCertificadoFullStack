# Importancia del HTML semántico

En estos videos de lecciones, aprenderá sobre HTML semántico y por qué debería importarle, los elementos semánticos, en qué se diferencia el HTML semántico del HTML de presentación y más.

## ¿Por qué debería importarle el HTML semántico?

La semántica es el significado de las palabras o frases en un lenguaje. En HTML, que es un lenguaje, los elementos también tienen su propio significado semántico. De hecho, puede pensar en su documento HTML como si fuera un documento de texto. Y, al igual que un documento de texto, puede tener encabezados, imágenes, texto en negrita y otros formatos.

El significado semántico de un elemento se refiere a la información especial que transmite. El significado semántico de un elemento `p`, por ejemplo, es un párrafo de texto:

- **Codigo ejemplo**

  ```html
  <p>
    Let me tell you about my fantastic holiday in Paris.
    I saw the impressive Eiffel Tower up close!
  </p>
  ```

La mayoría de los elementos tienen un significado semántico. El elemento div es uno de los pocos que no lo tiene. Pero ¿por qué es importante?

En primer lugar, usar HTML semántico adecuado garantizará la mejor experiencia para los usuarios con tecnología de asistencia, como lectores de pantalla. Además, el HTML semántico puede mejorar tu posicionamiento en los resultados de búsqueda. Esto se conoce como optimización para motores de búsqueda (SEO).

Por último, usar elementos semánticos correctos puede mejorar tu experiencia de desarrollo. En lugar de tener que revisar varios desarrollos para encontrar tu barra de navegación, puedes editar el elemento nav directamente y saber qué estás modificando. En esta sección, aprenderás más sobre estos temas, cómo usar elementos semánticos y por qué el HTML semántico es tan importante.

## Questionario 1

- **¿A qué se refiere la semántica?**

  - a) Seleccionando minuciosamente el código.
  - b) El significado y la estructura de las palabras/frases de un idioma. // correcto
  - c) Es un término gramatical no relacionado con la programación.
  - d) Definiciones del diccionario.

- **¿Qué elemento no tiene significado semántico?**

  - a) `div` // correcto
  - b) `h1`
  - c) `p`
  - d) `img`

- **¿Por qué debería importarle el HTML semántico?**

  - a) Mejora el SEO.
  - b) Mejora la accesibilidad.
  - c) Mejora la experiencia del desarrollador.
  - d) Todo lo anterior. // correcto

## ¿Por qué es importante tener una buena jerarquía estructural?

El aspecto más importante para crear una jerarquía estructural es el uso correcto de los elementos de encabezado. Los elementos de encabezado se numeran como `h1`, `h2`, `h3`, etc. Estos números representan el nivel de encabezado de cada elemento.

Al igual que en un documento de texto, no conviene usar los niveles de encabezado en el orden incorrecto. El elemento `h1` es el encabezado de nivel superior. Rara vez habrá más de uno en una página y, por lo general, debe ir antes de todo el contenido.

El elemento `h2` es el subtítulo. Siempre debe ir después del `h1` y, en ocasiones, después de algún texto introductorio. A diferencia de un elemento `h1`, se pueden tener varios elementos `h2` en la página. Esto se suele hacer para delimitar diferentes secciones de contenido.

Siguiendo el patrón, el elemento `h3` siempre debe ir después de un elemento `h2`. Es decir, nunca se debe saltar directamente del `h1` al `h3`. Sin embargo, sí se pueden tener varios elementos de encabezado en el mismo nivel. Por ejemplo, este código es correcto:

- **Codigo ejemplo**

  ```html
  <div>
    <section>
      <h1>freeCodeCamp</h1>
      <h2>Learn Front-End Development</h2>
      <h2>Learn Back-End Development</h2>
    </section>
  </div>
  ```

Pero este código no sería correcto, porque `h3` viene antes de `h2`:

- **Codigo ejemplo**

  ```html
  <div>
    <section>
      <h1>freeCodeCamp</h1>
      <h3>Learn Front-End Development</h3>
      <h2>Learn Back-End Development</h2>
    </section>
  </div>
  ```

Puede resultar tentador utilizar un elemento de encabezado específico debido a su estilo, como `h1` para texto grande:

- **Codigo ejemplo**

  ```html
  <article>
    <p>
      Here is some
      <h1>Large Text</h1>
    </p>
  </article>
  ```

En su lugar, debería elegir el elemento adecuado para la estructura de su documento y usar CSS para lograr el estilo deseado.

Usar la jerarquía correcta es importante para la accesibilidad. Las tecnologías de asistencia, como los lectores de pantalla, se basan en la estructura de una página web para determinar cómo analizarla y anunciarla al usuario. Usar un elemento `h3` después de un `h1` podría hacer que un usuario de lector de pantalla crea que ha omitido accidentalmente contenido importante debido a la falta de un elemento `h2`.

Una estructura adecuada también es importante para el SEO. Los motores de búsqueda utilizan la automatización para analizar el contenido de su página web y determinar cuándo y dónde debe aparecer en los resultados. Si su estructura es incorrecta, es posible que los motores de búsqueda no puedan posicionarlo bien en los resultados de búsqueda relevantes.

Finalmente, dependiendo de cuán incorrecta sea su estructura, su HTML podría no ser técnicamente válido. Cuando esto sucede, el navegador web tiene que adivinar qué pretendía hacer. Y lo que adivina podría no ser lo que desea.

Como aprendiste hoy, hay muchas razones para usar la jerarquía estructural adecuada en tu página. Ten esto en cuenta al crear nuevos proyectos.

## Questionario 2

- **¿Por qué es importante la jerarquía estructural?**

  - a) Accesibilidad
  - b) SEO
  - c) Para que los navegadores sepan a qué nos referimos
  - d) Todo lo anterior // correcto

- **¿Qué elemento de encabezado debe preceder a un elemento h3?**

  - a) h5
  - b) h2 // correcto
  - c) h6
  - d) h4

- **¿Cómo deberías crear un texto más grande en tu página?**

  - a) Utiliza cualquier elemento que quieras y dale estilo con CSS.
  - b) Utilice un h1 porque ya tiene texto grande.
  - c) Utilice un elemento span.
  - d) Utilice el elemento estructural correcto y estírelo con CSS. // correcto

## ¿Cuál es la diferencia entre HTML de presentación y HTML semántico?

El HTML de presentación se centra en la apariencia y el estilo del contenido. En los inicios del HTML, los desarrolladores usaban elementos como "`center`", "`big`" y "`font`". Sin embargo, en el desarrollo web moderno, no se recomiendan estos tipos de elementos debido a sus limitaciones y su impacto negativo en la accesibilidad y el mantenimiento.

Muchos elementos HTML de presentación están obsoletos, lo que significa que están desactualizados y ya no se recomiendan. Existen mejores maneras de obtener los mismos resultados. Sin embargo, es útil saber que existen, así que veamos algunos ejemplos.

El elemento "`font`" es un elemento obsoleto que se utiliza para establecer el tamaño y el color de la fuente del texto. A continuación, se muestra un ejemplo de un elemento "`font`":

- **Codigo ejemplo**

  ```html
  <font size="5" color="blue">This text is blue and large.</font>
  ```

Este ejemplo establece el color del texto en `blue` y el tamaño en `5`. El rango del atributo `size` va de `1` a `7`, siendo `1` el valor más pequeño y `7` el más grande. El valor predeterminado es `3` si no se establece explícitamente.

Aunque este elemento sigue funcionando, no se recomienda usarlo, ya que el tamaño y el color de la fuente siempre deben configurarse en CSS, no en HTML.

El elemento `center` es otro elemento obsoleto que se utiliza para centrar el contenido horizontalmente dentro de su contenedor. A continuación, se muestra un ejemplo del elemento `center` que contiene texto y un elemento de párrafo:

- **Codigo ejemplo**

  ```html
  <center>
    This text is centered.
    <p>HTML is awesome.</p>
  </center>
  ```

En el navegador, verás todo el contenido dentro del elemento `center`, centrado horizontalmente.

A continuación, tenemos el elemento `big`. Este es otro elemento HTML de presentación obsoleto que aumenta el tamaño del texto adjunto un nivel respecto al texto circundante. Aquí tenemos un ejemplo que define un párrafo con dos partes:

- **Codigo ejemplo**

  ```html
  <p>
    This text has a normal font size.
    <big>This text is larger.</big>
  </p>
  ```

La primera parte tiene texto de tamaño normal, mientras que la segunda, dentro del elemento grande, se mostrará con un tamaño de fuente más grande. En el navegador, verá que el texto dentro del elemento grande se ve más grande en comparación con el texto circundante.

Sin embargo, recuerde que el tamaño de fuente siempre debe configurarse con CSS, por lo que no debería usar este elemento en HTML moderno.

Estos fueron ejemplos de elementos HTML de presentación. Sin embargo, todos están obsoletos y ya no se recomiendan. Entonces, ¿qué debería usar en su lugar? Veamos.

El HTML semántico es ahora la práctica recomendada. Describe el contenido de los elementos, por lo que es mucho más fácil de leer, comprender y mantener.

Los motores de búsqueda pueden comprender fácilmente su sitio web cuando usa HTML semántico. También es útil para fines de accesibilidad, ya que los lectores de pantalla necesitan información semántica para describir el contenido de la página web.

### Algunos ejemplos de elementos HTML semánticos son

- El elemento `header` (encabezado), que define el encabezado del documento o sección.
- El elemento `nav` (navegación), que se utiliza para secciones con enlaces de navegación.
- El elemento `section` (sección), que agrupa información relacionada.
- El elemento `figure` (figura), que se utiliza para ilustraciones y diagramas.

Este es un ejemplo de un elemento de `header` que contiene un elemento de sección de navegación:

- **Codigo ejemplo**

  ```html
  <header>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  ```

Los elementos semánticos muestran claramente su propósito dentro de la estructura HTML. Existen muchos elementos HTML semánticos diferentes. Seguro que encontrarás uno que se ajuste a las necesidades de tu proyecto.

¡Excelente trabajo! Ahora ya conoces la diferencia entre HTML presentacional y HTML semántico: el HTML semántico describe el contenido, mientras que el HTML presentacional se centra en la apariencia.

## Questionario 3

- **¿Cuál de las siguientes opciones describe mejor la diferencia entre HTML presentacional y semántico?**

  - a) El HTML presentacional se centra en la estructura del contenido, mientras que el HTML semántico se centra en la apariencia.
  - b) El HTML semántico se centra en la estructura del contenido, mientras que el HTML de presentación se centra en la apariencia. <!-- correcto -->
  - c) No hay diferencia entre HTML presentacional y semántico.
  - d) Ambos se centran en el estilo, pero el HTML de presentación es más moderno.

- **¿Cuál de los siguientes es un ejemplo de HTML de presentación?**

  - a) Usando el elemento de `header` para definir un encabezado.
  - b) Usando el elemento `nav` para definir una sección de navegación.
  - c) Utilizando el elemento `article` para definir contenido independiente.
  - d) Usando el elemento `center` para centrar el contenido. <!-- correcto -->

- **¿Cuál de los siguientes es un ejemplo de HTML semántico?**

  - a) Usando `<font color="red">` para hacer que el texto sea rojo.
  - b) Usando el elemento `center` para centrar el contenido.
  - c) Usando el elemento `nav` para representar una sección de navegación <!-- correcto -->
  - d) Usando el elemento `big` para hacer el texto más grande.

## ¿Cuándo debería usarse el elemento de énfasis en lugar del elemento de texto idiomático?

Estos elementos están estrechamente relacionados con los conceptos de HTML presentacional y semántico. El elemento de texto idiomático, `i`, se usó originalmente con fines presentacionales para mostrar el texto en cursiva. Sin embargo, ahora se usa con frecuencia para resaltar voces o estados de ánimo alternativos, términos idiomáticos de otros idiomas, términos técnicos y reflexiones.

A continuación, se muestra un ejemplo de la especificación oficial de HTML, donde se usa el elemento `i` para mostrar una frase idiomática en francés:

- **Codigo ejemplo**

  ```html
  <p>There is a certain <i lang="fr">je ne sais quoi</i> in the air.</p>
  ```

El atributo `lang` dentro de la etiqueta `<i>` abierta se utiliza para especificar el idioma del contenido. En este caso, el idioma sería el francés. El elemento `i` no indica si el texto es importante o no, solo muestra que es diferente del texto circundante.

Si necesita enfatizar la importancia del texto, puede usar un elemento semántico similar llamado elemento de énfasis (`em`). Esto suele recomendarse si necesita proporcionar más contexto. Debe usar este elemento para las partes del texto que requieren un énfasis especial en comparación con el texto circundante. Suele limitarse a unas pocas palabras, ya que puede alterar el significado de la oración.

Este es un ejemplo del elemento de énfasis dentro de un párrafo:

- **Codigo ejemplo**

  ```html
  <p>
    Never give up on <em>your</em> dreams.
  </p>
  ```

Puedes ver la frase "`Never give up on your dreams`". Observa que la palabra "`your`" estará resaltada, ya que está dentro de este elemento. En el navegador, verás que la palabra "`your`" está en cursiva para indicar a los lectores que es importante en la frase.

Aunque parezca igual cuando el texto estaba dentro del elemento de texto idiomático, el elemento de énfasis semántico transmite su significado e importancia en segundo plano.

Es importante saber que estos elementos no deben usarse solo con fines de presentación. Si necesitas mostrar el texto en cursiva, pero no tiene un propósito, estilo o significado específico en el párrafo, debes usar CSS.

## Questionario 4

- **¿Qué elemento HTML se utiliza para diferenciar el texto del contenido que lo rodea sin transmitir una importancia específica?**

  - a) `em`
  - b) `strong`
  - c) `i` <!-- correcto -->
  - d) `mark`

- **¿Cuándo debería utilizar CSS en lugar de los elementos i o em?**

  - a) Cuando el texto tiene un propósito o significado especial en el párrafo.
  - b) Cuando desee mostrar texto en cursiva únicamente con fines de presentación. <!-- correcto -->
  - c) Cuando el texto es una expresión idiomática.
  - d) Cuando es necesario enfatizar el texto por su importancia.

- **¿Cuál es la diferencia principal entre `i` y `em`?**

  - a) No hay diferencia; ambos enfatizan el texto.
  - b) i indica que el texto difiere del contenido circundante, mientras que em enfatiza el texto importante. <!-- correcto -->
  - c) i es para enfatizar, mientras que em es para estilizar.
  - d) Ambos enfatizan el texto de la misma manera, pero em transmite más importancia.

## ¿Cuándo debería usarse el elemento "strong" en lugar del elemento "bring attention to"?

El elemento "bring attention to", `b`, se usa comúnmente para resaltar palabras clave en resúmenes o nombres de productos en reseñas. Normalmente, los navegadores muestran este texto en negrita. Aquí hay un ejemplo usando el elemento b para resaltar nombres de productos en esta reseña:

- **Codigo ejemplo**

  ```html
    <p>
      We tested several products, including the <b>SuperSound 3000</b> for audio
      quality, the <b>QuickCharge Pro</b> for fast charging, and the
      <b>EcoClean Vacuum</b> for cleaning. The first two performed well, but the
      <b>EcoClean Vacuum</b> did not meet expectations.
    </p>
  ```

El navegador muestra estas partes del texto en negrita. Este énfasis visual atraerá la atención de los lectores hacia los nombres de los productos.

Si necesita enfatizar la importancia del texto, debe usar el elemento `strong` en lugar del elemento `b`.

`strong` es un elemento HTML semántico que enfatiza el texto crucial o urgente. Este es un ejemplo donde el elemento `strong` se usa para etiquetar una advertencia muy importante sobre las posibles reacciones alérgicas que los clientes pueden experimentar a un producto:

- **Codigo ejemplo**

  ```html
    <p>
      <strong>Warning:</strong> This product may cause allergic reactions.
    </p>
  ```

El elemento `strong` comunica esa sensación de urgencia.

Visualmente, ambos son muy similares, ya que se representan en negrita por defecto. Sin embargo, sus significados son bastante diferentes. Mientras que el elemento "llamar la atención" solo dirige la atención al texto, sin indicar su mayor importancia, el elemento `strong` hace más que eso. Transmite una sensación de importancia o urgencia. Esta es su principal diferencia.

Para elegir entre ellos, considere el propósito del texto y su importancia dentro del contenido circundante.

## Questionario 5

- **¿Qué elemento HTML se utiliza para llamar la atención sobre una parte específica del texto sin transmitir una importancia específica?**

  - a) `strong`
  - b) `mark`
  - c) `em`
  - d) `b` <!-- correcto -->

- **¿Qué elemento HTML se utiliza para indicar texto que es especialmente importante o urgente?**

  - a) `strong` <!-- correcto -->
  - b) `b`
  - c) `em`
  - d) `mark`

- **¿Cuál es la diferencia principal entre b y strong?**

  - a) No hay diferencia: ambos ponen el texto en negrita.
  - b) `b` es para énfasis visual, mientras que `strong` es para enfatizar la importancia. <!-- correcto -->
  - c) `strong` es para estilizar, mientras que `b` es para enfatizar la importancia.
  - d) Ambos se utilizan únicamente con fines de presentación.

## ¿Qué son las listas de descripción y cuándo usarlas?

Las listas de descripción son perfectas para presentar términos y definiciones de forma organizada y fácil de leer, como en un glosario o un diccionario, donde se pueden encontrar palabras con sus definiciones correspondientes.

Este es un ejemplo de una lista de descripción en HTML con dos términos y sus detalles correspondientes:

- **Codigo ejemplo**

  ```html
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
  </dl>
  ```

En este caso, los términos son las siglas HTML y CSS, y los detalles son sus extensiones. Los detalles también pueden ser definiciones u otra información relacionada con los términos.

Necesitará tres elementos HTML para definir una lista de descripciones. Primero, el elemento de lista de descripciones, `dl`, que contiene toda la lista. Puede ver que envuelve todos los demás elementos de la lista de descripciones en el ejemplo.

Luego, un elemento de término de descripción, `dt`, para cada término. En este caso, la lista de descripciones tiene dos términos, HTML y CSS, por lo que tiene dos de estos elementos.

Y finalmente, después de cada término encontrará un elemento de detalles de descripción, `dd`, para la descripción o los detalles asociados a ese término. En este ejemplo, son Lenguaje de Marcado de Hipertexto y Hojas de Estilo en Cascada.

En el navegador, verá cada término seguido de su descripción correspondiente. Por defecto, las descripciones tienen una sangría ligeramente mayor hacia la derecha para distinguirlas visualmente.

Pero las listas de descripciones no se limitan solo a términos y definiciones. Son mucho más versátiles. Aquí tenemos una receta con dos ingredientes.

- **Codigo ejemplo**

  ```html
  <dl>
    <dt>Flour</dt>
    <dd>2 cups</dd>
    <dt>Sugar</dt>
    <dd>1/2 cup</dd>
  </dl>
  ```

La lista de descripciones completa se encuentra dentro de un elemento de lista de descripciones. El primer ingrediente, `Flour`, se encuentra dentro de un elemento de término de descripción. A continuación, puede ver la cantidad necesaria de este ingrediente: `2 cups`. Esto se encuentra dentro de un elemento de detalles de descripción, justo después de sus ingredientes correspondientes.

La misma estructura se repite para el `Sugar`. En este caso, la receta solo tiene dos ingredientes, pero si hubiera más, la misma estructura podría repetirse a lo largo de la lista de descripciones.

En el navegador, verá los ingredientes alineados a la izquierda y las medidas sangradas para separarlos visualmente.

Otros casos de uso para las listas de descripciones incluyen especificaciones de productos, preguntas frecuentes, información de contacto y metadatos. En esencia, cuando tiene dos datos relacionados en un formato de par clave-valor, donde uno actúa como etiqueta (la clave) y el otro como información adicional relacionada (el valor), puede usar una lista de descripciones.

## Questionario 6

- **¿Qué etiqueta HTML se utiliza para definir una lista de descripciones completa?**

  - a) `dt`
  - b) `dd`
  - c) `dl` <!-- correcto -->
  - d) `li`

- **¿Qué etiqueta HTML se utiliza para representar un término en una lista de descripciones?**

  - a) `dl`
  - b) `dt` <!-- correcto -->
  - c) `dd`
  - d) `li`

- **¿Qué etiqueta HTML se utiliza para definir o proporcionar más detalles sobre un término en una lista de descripciones?**

  - a) `dl`
  - b) `dt`
  - c) `dd` <!-- correcto -->
  - d) `li`

## ¿Cómo funcionan las citas en bloque y en línea en HTML?

En HTML, los elementos de cita se utilizan para distinguir el texto citado del contenido circundante. Esto le da al texto citado un formato fácil de identificar.

Se recomienda utilizar el elemento de cita en bloque para representar una sección citada de otra fuente. Se utiliza principalmente para citas extensas. Si la fuente de la cita tiene una dirección, se puede citar con el atributo cite. El valor de este atributo debe ser una URL válida. Este es un ejemplo de una cita dentro de un elemento de cita en bloque:

- **Codigo ejemplo**

  ```html
    <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
      "Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?"
    </blockquote>
  ```

Este elemento tiene un atributo `cite`. El valor de este atributo es la URL de la fuente. Si bien este atributo no modifica la presentación de la cita en bloque, resulta muy útil para proporcionar a los lectores de pantalla y a los motores de búsqueda más información sobre ella. En el navegador, verá que el texto tiene una ligera sangría.

Si desea que la cita en bloque comience y termine con comillas, es posible que deba escribirlas explícitamente dentro del texto. Puede escribir el texto directamente dentro del elemento de cita en bloque, como acabo de hacer, o encerrarlo dentro de uno o más elementos de párrafo. Esto es útil cuando el texto tiene varios párrafos, pero desea mantenerlos dentro de la misma cita en bloque. Aquí tiene un ejemplo con cuatro párrafos:

- **Codigo ejemplo**

  ```html
    <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
      <p>Build your projects. Show them to your friends. Build projects for your friends.</p>
      <p>Build your network. Help the people you meet along the way. What goes around comes around. You'll get what's coming to you.</p>   
      <p>It is not too late. Life is long.</p>
      <p>You will look back on this moment years from now and be glad you made a move.</p>
    </blockquote>
  ```

Todos los párrafos están contenidos en el mismo elemento de cita en bloque, por lo que forman parte de la misma cita. Puedes ver que el elemento tiene un atributo `cite` con la URL de la fuente. En el navegador, verás que los cuatro párrafos están alineados entre sí, pero con sangría respecto a su contenedor.

Hasta ahora he estado usando el atributo `cite` para atribuir la fuente de la cita, pero este no muestra la fuente al usuario. Solo funciona en segundo plano.

Si quieres atribuir la fuente visualmente, puedes añadir un elemento de cita, `cite`, fuera del elemento de cita en bloque. Esto es diferente del atributo `cite`. El elemento cita es un elemento HTML que puedes usar para marcar el título de una obra creativa referenciada, como un artículo de libro, una canción, una película, un sitio web o un trabajo de investigación. Aquí tienes un ejemplo:

- **Codigo ejemplo**

  ```html
  <div>
    <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
      Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?
    </blockquote>
    <p>—Quincy Larson, <cite>How to Learn to Code and Get a Developer Job [Full Book].</cite></p>
  </div>
  ```

El elemento de cita en bloque contiene el texto citado. Debajo del elemento, se puede ver un elemento de párrafo con el nombre del autor, seguido de un elemento de cita. Este elemento contiene el título del libro del que proviene la cita.

Si abre el navegador, la fuente será claramente visible y verá que la cita proviene de un libro escrito por Quincy Larson. El título de este libro es `How to Learn to Code and Get a Developer Job`.

Debería usar citas en bloque como estas para citas largas de otras fuentes. Sin embargo, a veces solo necesitará citar algunas palabras dentro de un párrafo más extenso.

Para eso sirve precisamente el elemento de cita en línea: para citas cortas en línea de otras fuentes. La mayoría de los navegadores modernos añaden comillas alrededor de la cita en línea automáticamente al usar este elemento. Este es un ejemplo:

- **Codigo ejemplo**

  ```html
  <p>
  As Quincy Larson said,
    <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">
      Momentum is everything.
    </q>
  </p>
  ```

Puedes ver un elemento de párrafo que contiene texto. Parte del texto es una cita en línea, ya que está dentro del elemento de cita en línea. También puedes agregar el atributo `cite` para atribuir la fuente.

Esto funciona exactamente igual que con el elemento de cita en bloque. No habrá cambios visuales, pero proporcionará a los lectores de pantalla y a los motores de búsqueda más información sobre la cita.

En el navegador, verás que el texto citado forma parte del párrafo y está entre comillas. La mayoría de los navegadores modernos agregan estas comillas automáticamente.

¿Cuál es la diferencia entre las citas en bloque y las citas en línea? Debes usar las citas en bloque para citas extensas de otras fuentes y las citas en línea para citas cortas de otras fuentes que deben formar parte de párrafos existentes.

## Questionario 7

- **¿Qué elemento HTML se utiliza para mostrar citas extendidas de otras fuentes?**

  - a) `q`
  - b) `blockquote` <!-- correcto -->
  - c) `cite`
  - d) `p`

- **¿Cuál es el propósito del elemento cite en HTML?**

  - a) Para mostrar citas en línea.
  - b) Para especificar la URL de origen de una cita.
  - c) Para marcar el título de una obra creativa referenciada. <!-- correcto -->
  - d) Para mostrar citas extendidas.

- **¿Qué atributo HTML se utiliza para especificar la fuente de una cita en un bloque o en un elemento de cita en línea?**

  - a) `href`
  - b) `src`
  - c) `title`
  - d) `cite` <!-- correcto -->

## ¿Cómo se muestran las abreviaturas y los acrónimos en HTML?

Una abreviatura es la forma abreviada de una palabra. Por ejemplo, "Dr." seguido de un punto, es la abreviatura de la palabra "doctor".

Un acrónimo es una palabra formada por las letras iniciales de una frase, donde cada letra representa la primera letra de la palabra. HTML es un ejemplo de acrónimo. Significa Lenguaje de Marcado de Hipertexto (`HyperText Markup Language`).

Al tomar las primeras letras de cada palabra H, T, M y L, se obtiene el acrónimo HTML. Ambos son muy útiles para escribir textos más concisos, especialmente cuando son conocidos y fáciles de entender en un contexto determinado.

Si necesita mostrar abreviaturas y acrónimos en HTML, el elemento de abreviatura es justo lo que necesita. Siempre debe explicar su significado completo al usarlos por primera vez. Después, puede usar el elemento de abreviatura para resaltarlos y proporcionar más detalles.

A continuación se muestra un ejemplo donde se puede ver un párrafo con la frase `HTML is the foundation of the web`:

- **Codigo ejemplo**

  ```html
  <p><abbr>HTML</abbr> is the foundation of the web.</p>
  ```

El acrónimo HTML se encuentra dentro de un elemento de abreviatura. En el navegador, verá que no ha cambiado nada. Sigue pareciendo texto normal. El elemento de abreviatura proporciona contexto útil, pero los usuarios seguirán viendo el acrónimo como texto normal.

Si desea que los usuarios comprendan el significado del acrónimo, puede mostrar su forma completa con el atributo `title`.

El atributo `title` es opcional, pero si decide incluirlo, debe ser una descripción legible de la abreviatura o acrónimo.

Tomemos el mismo ejemplo anterior, pero añadiendo el atributo `title`. Se tratará del `Lenguaje de Marcado de Hipertexto` (`HTML`), la forma expandida del acrónimo:

- **Codigo ejemplo**

  ```html
  <p><abbr title="HyperText Markup Language">HTML</abbr> is the foundation of the web.</p>
  ```

Normalmente, el estilo del elemento de abreviatura cambia al añadir este atributo. El estilo específico depende del navegador. Algunos navegadores muestran un subrayado punteado, mientras que otros convierten el contenido a versalitas o incluso asignan estilos predeterminados, como el subrayado punteado. Al pasar el ratón sobre el acrónimo, se muestra su forma completa como información sobre herramientas.

Si bien no es necesario usar el elemento de abreviatura para todas las abreviaturas o acrónimos de la página web, se recomienda para aquellos que no sean claros o necesiten contexto adicional.

Utilice su criterio para encontrar el equilibrio adecuado entre la información y la presentación, evitando sobrecargar el texto y manteniendo la claridad y la concisión.

## Questionario 8

- **¿Qué elemento HTML se utiliza para indicar una abreviatura o acrónimo?**

  - a) `abbr` <!-- correcto -->
  - b) `acronym`
  - c) `abbrev`
  - d) `acron`

- **¿Cuál es el propósito principal del elemento abbr?**

  - a) Para dar estilo al texto como abreviatura.
  - b) Para indicar una abreviatura o acrónimo y proporcionar información adicional. <!-- correcto -->
  - c) Para abreviar el contenido de una página web.
  - d) Para mejorar la clasificación en los motores de búsqueda.

- **¿Qué atributo se puede utilizar dentro del elemento abbr para proporcionar la forma completa de un acrónimo o abreviatura?**

  - a) `explain`
  - b) `description`
  - c) `title` <!-- correcto -->
  - d) `fullform`

## ¿Cómo se muestran las direcciones en HTML?

El elemento de `address` de contacto se utiliza para representar la información de contacto de una sección de una página web. Es versátil y puede usarse para páginas de empresa, páginas de autor, sitios personales y más.

Al crear las secciones de contacto de tu sitio web, deberías usar el elemento de `address` semántico en lugar de un elemento genérico como un `div`.

A continuación, se muestra un ejemplo del uso del elemento de `address` para la página de contacto de una empresa:

- **Codigo ejemplo**

  ```html
  <address>
    <h2>Company Name</h2>
    <p>
      1234 Elm Street<br />
      Springfield, IL 62701<br />
      United States
    </p>
    <p>Phone: <a href="tel:+15555555555">+1 (555) 555-5555</a></p>
    <p>Email: <a href="mailto:contact@company.com">contact@company.com</a></p>
  </address>
  ```

En este ejemplo, se incluye el nombre de la empresa, la dirección física, el teléfono y la información de correo electrónico. Para la dirección física, se utiliza el elemento de salto de línea, `br,` para mostrar la división entre el nombre de la calle, la ciudad y el país.

Para el número de teléfono, tenemos un elemento de anclaje con el valor `href` establecido para números de teléfono. El valor `tel:+` dentro del atributo `href` crea un enlace clicable para iniciar una llamada telefónica en ciertos dispositivos compatibles.

Para la dirección de correo electrónico, se utiliza otro elemento de anclaje con el valor `href` establecido en un enlace `mailto`. Los enlaces `mailto` se utilizan en documentos HTML para permitir a los usuarios abrir un nuevo correo electrónico en su cliente de correo electrónico preferido.

Una de las desventajas de usar un enlace `mailto` es que los usuarios a menudo lo perciben como spam. Desafortunadamente, muchos spammers usan esta opción para enviar correos electrónicos a los usuarios. Así que tenlo en cuenta al usarlo.

## Questionario 9

- **¿Cuál es el propósito del elemento de address?**

  - a) Se utiliza para definir una sección para enlaces de navegación.
  - b) Se utiliza para representar información de contacto de una sección de una página web. <!-- correcto -->
  - c) Se utiliza para establecer el estilo de fuente para una sección de la página.
  - d) Se utiliza para agrupar contenido para darle estilo con CSS.

- **¿Para qué se utiliza el enlace mailto?**

  - a) Se utiliza para enlazar a una página web.
  - b) Se utiliza para crear un enlace de descarga de archivos.
  - c) Se utiliza para redirigir a otro sitio web.
  - d) Se utiliza para permitir a los usuarios abrir un nuevo correo electrónico dentro de su cliente de correo electrónico preferido. <!-- correcto -->

- **¿Cuál es la desventaja de utilizar enlaces mailto?**

  - a) Estos enlaces son un objetivo para que los spammers envíen correos electrónicos a los usuarios. <!-- correcto -->
  - b) Estos enlaces crean automáticamente una página web.
  - c) Estos enlaces mejoran el SEO del sitio web.
  - d) Estos enlaces mejoran la velocidad de carga del sitio web.

## ¿Cómo se muestran horas y fechas en HTML?

El elemento de `time` se utiliza para representar un momento específico.

Aquí hay un ejemplo que utiliza el elemento de `time` para representar las veinte en punto, o las ocho de la tarde.

- **Codigo ejemplo**

  ```html
  <p>The reservations are for <time datetime="20:00">20:00 </time></p>
  ```

El atributo `datetime` se utiliza para traducir fechas y horas a un formato legible por máquina.

Esto es importante, ya que mejora los resultados de los motores de búsqueda y permite que el navegador procese la información de fecha y hora de forma más eficaz.

El valor del atributo `datetime` debe ser un año válido, un mes válido, una hora válida, una fecha local válida, una fecha global válida o una cadena de duración válida.

A continuación, se muestra otro ejemplo del uso del elemento `time` para representar una fecha específica:

- **Codigo ejemplo**

  ```html
  <p>
    The graduation will be on <time datetime="2024-06-15T15:00">June 15</time>
  </p>
  ```

El valor del atributo `datetime` está en formato ISO 8601. ISO 8601 es un estándar internacional para representar fechas y horas.

La primera parte de ese valor corresponde al año, mes y día. La T mayúscula separa la fecha de la hora.

Las 15:00 horas serían las 15:00.

Siempre que necesite representar eventos, fechas de publicación o citas, es recomendable usar el elemento de `time`.

## Questionario 10

- **¿En qué ayuda el atributo datetime en el elemento time?**

  - a) Formatea el texto en negrita.
  - b) Traduce fechas y horas a un formato legible por máquina. <!-- correcto -->
  - c) Añade color al texto.
  - d) Crea hipervínculos a otras páginas.

- **¿Cuál es el formato correcto para el valor del atributo datetime según ISO 8601?**

  - a) YYYY-MM-DDTHH:MM:SS <!-- correcto -->
  - b) DD-MM-YYYY HH:MM
  - c) MM-DD-YYYY HH:MM AM/PM
  - d) YYYY/MM/DD HH:MM:SS

- **¿Qué representa la “T” mayúscula en el valor de fecha y hora ISO 8601?**

  - a) La zona horaria.
  - b) El separador entre fecha y hora. <!-- correcto -->
  - c) El título del documento.
  - d) La temperatura.

## ¿Cómo se muestran ecuaciones matemáticas y fórmulas químicas en HTML?

El elemento superíndice se utiliza para mostrar un texto como superíndice. Un superíndice es un símbolo o letra que se imprime sobre la línea de texto normal.

A continuación, se muestra un ejemplo del uso del elemento superíndice para ilustrar exponentes:

- **Codigo ejemplo**

  ```html
  <p>2<sup>2</sup> (2 squared) is 4.</p>
  ```

En este ejemplo, el número 2 se encierra entre etiquetas `sup` para representar el superíndice dentro del párrafo. En el navegador, verá que el segundo número 2 es más pequeño y ligeramente más alto que el primero.

El uso común del elemento superíndice incluye exponentes, superíndices y números ordinales. A continuación, se muestra un ejemplo con el elemento superíndice para superíndices:

- **Codigo ejemplo**

  ```html
  <p>
    Monseigneur is often written as <strong>M<sup>gr</sup></strong>.
  </p>
  ```

Las letras superiores se refieren a las letras escritas en superíndice, generalmente para indicar abreviaturas. En este ejemplo, las letras `g` y `r` se incluyen dentro de etiquetas de superíndice para ilustrar la abreviatura.

Es importante tener en cuenta que el elemento superíndice solo debe usarse por motivos tipográficos. Si desea aplicar estilo a un texto con una línea de base elevada, debe usar CSS en lugar del elemento superíndice.

Para representar ecuaciones químicas en HTML, se debe usar el elemento subíndice. Este elemento utiliza un subíndice que muestra una línea de base más baja con texto más pequeño.

A continuación, se muestra un ejemplo del uso del elemento subíndice para mostrar la representación química del dióxido de carbono.

- **Codigo ejemplo**

  ```html
  <p>CO<sub>2</sub></p>
  ```

El número dos se encierra dentro de etiquetas `sub` para indicar que el carácter debe ser un subíndice.

El elemento subíndice se usa comúnmente en fórmulas químicas, notas al pie y subíndices variables.

## Questionario 11

- **¿Cuál es el uso principal del elemento superíndice en HTML?**

  - a) Para mostrar el texto en un color diferente.
  - b) Para mostrar texto en un tamaño de fuente más pequeño.
  - c) Para mostrar texto como superíndice encima de la línea de texto normal. <!-- correcto -->
  - d) Para subrayar texto.

- **¿Cuál de los siguientes es un ejemplo de uso correcto del elemento superíndice?**

  - a) `<p>2<sub>2</sub> (2 squared) is 4.</p>`
  - b) `<p>2<sup>2</sup> (2 squared) is 4.</p>` <!-- correcto -->
  - c) `<p>2<sul>2</sul> (2 squared) is 4.</p>`
  - d) `<p>2<sutp>2</sutp> (2 subscript) is 4.</p>`

- **¿Qué se debe utilizar en lugar del elemento superíndice si desea darle estilo al texto con una línea base elevada por razones tipográficas?**

  - a) El elemento sub.
  - b) CSS <!-- correcto -->
  - c) El elemento strong.
  - d) El elemento em.

## ¿Cómo se representa el código informático en HTML?

El elemento de código en línea se utiliza para representar fragmentos cortos de código dentro del texto. Su uso más común es en artículos técnicos y páginas de documentación.

A continuación, se muestra un ejemplo del uso del elemento de código para mostrar un fragmento de código CSS:

- **Codigo ejemplo**

  ```html
  <p>
    To set the text color to blue in CSS, use the following code:
    <code>color: blue;</code>
  </p>
  ```

En este ejemplo, la propiedad CSS `color` se utiliza para establecer el color del texto en `blue`. Al encapsular este fragmento de código dentro de etiquetas `<code>`, se comunica al navegador que el texto es un fragmento de código en línea.

El navegador aplicará los estilos predeterminados al contenido dentro del elemento `code`. El estilo predeterminado es una fuente monoespaciada.

El elemento `code` está diseñado para representar una sola línea de código. Si desea representar varias líneas de código, deberá colocar un elemento `code` dentro de un elemento de texto preformateado.

El elemento de texto preformateado se utiliza para representar texto preformateado. A continuación, se muestra un ejemplo del uso del elemento de texto preformateado para mostrar una declaración CSS:

- **Codigo ejemplo**

  ```html
  <pre>
    <code>
      body {
        color: red;
      }
    </code>
  </pre>
  ```

Al usar el elemento `pre`, debe tener en cuenta el espaciado, ya que se mostrará exactamente como está escrito dentro del documento HTML.

En el navegador, verá que el código tiene una sangría de varios espacios a la derecha. Si cambia la sangría en el ejemplo de código, verá una diferencia en la pantalla.

Al incluir ejemplos de código en su documento HTML, debe usar el elemento `code` para ejemplos cortos en línea.

Si necesita mostrar fragmentos de código más largos, deberá usar los elementos `pre` y `code`.

## Questionario 12

- **¿Para qué se utiliza el elemento de code?**

  - a) Se utiliza para crear hipervínculos a otras páginas web.
  - b) Se utiliza para formatear texto con estilos negrita o cursiva.
  - c) Se utiliza para representar fragmentos cortos de código dentro del texto. <!-- correcto -->
  - d) Se utiliza para incrustar imágenes y archivos multimedia.

- **¿Para qué se utiliza el elemento de texto preformateado (pre)?**

  - a) Se utiliza para aplicar estilos CSS al texto.
  - b) Se utiliza para crear tablas y diseños estructurados.
  - c) Se utiliza para representar texto preformateado. <!-- correcto -->
  - d) Se utiliza para insertar hipervínculos y direcciones de correo electrónico.

- **¿Cuál es el estilo predeterminado para el elemento de code?**

  - a) Fuente monoespaciada. <!-- correcto -->
  - b) Texto en cursiva con fondo de color.
  - c) Texto en negrita con un tamaño de fuente más grande.
  - d) Texto subrayado con fuente de ancho fijo.

## ¿Para qué se utilizan los elementos `u`, `s` y `ruby` ​​y cómo funcionan?

El elemento de anotación no articulada, o elemento `u` para abreviar, se utiliza para representar texto en línea con anotaciones no textuales.

A continuación, se muestra un ejemplo del uso del elemento `u` para resaltar diversos errores ortográficos:

- **Codigo ejemplo**

  ```html
  <p>
    You can use the unarticulated annotation element to highlight
    <u>inccccort</u> <u>spling</u> <u>issses</u>.
  </p>
  ```

En el ejemplo, las palabras `inccccort`, `spling` y `issses` están mal escritas. El estilo predeterminado del elemento `u` es un subrayado negro debajo del texto.

En HTML4, el elemento `u` se usaba con fines de estilo. Sin embargo, en HTML5, solo debe usarse para indicar que el texto tiene anotaciones no textuales.

Si desea aplicar un subrayado a un texto, debe usar CSS en lugar de HTML.

El elemento tachado, o elemento `s` para abreviar, debe usarse para indicar cuándo el texto ya no es preciso o relevante. A continuación, se muestra un ejemplo del uso del elemento `s` para indicar la cancelación de una actividad:

- **Codigo ejemplo**

  ```html
  <p><s>Tomorrow's hike will be meeting at noon.</s></p>

  <p>Due to unforeseen weather conditions, the hike has been cancelled.</p>
  ```

En este ejemplo, la primera oración está tachada porque la excursión se canceló por razones meteorológicas.

El elemento `s` nunca debe usarse solo para mostrar cambios en un documento. En ese caso, los elementos de texto eliminado y el elemento de texto insertado serían más apropiados.

El elemento `ruby` ​​representa texto pequeño que se muestra encima o debajo del texto principal. Se suele usar para mostrar la pronunciación de caracteres de Asia Oriental. Aquí está el ejemplo del elemento `ruby` ​​de la página de documentación web de MDN:

- **Codigo ejemplo**

  ```html
  <ruby> 
    明日 
    <rp>(</rp>
    <rt>Ashita</rt>
    <rp>)</rp> 
  </ruby>
  ```

El elemento `rp`, o elemento de paréntesis de respaldo Ruby, se utiliza como alternativa para navegadores que no admiten la visualización de anotaciones Ruby.

El elemento `rt`, o elemento de texto Ruby, se utiliza para indicar el texto de la anotación Ruby. Este texto se suele usar para la pronunciación o detalles de traducción en tipografía de Asia Oriental.

Si bien el elemento `ruby` puede utilizarse para otros tipos de anotaciones, su uso más común es en tipografía de Asia Oriental.

## Questionario 13

- **¿Para qué se utiliza el elemento u?**

  - a) Se utiliza para mostrar subíndices en fórmulas químicas.
  - b) Se utiliza para representar la entrada del usuario en formularios HTML.
  - c) Se utiliza para representar texto en línea al que se le ha aplicado una anotación no textual. <!-- correcto -->
  - d) Se utiliza para poner texto en cursiva en HTML.

- **¿Para qué se utiliza el elemento s?**

  - a) Se utiliza para representar cuando el texto ya no es preciso o relevante. <!-- correcto -->
  - b) Se utiliza para crear ayudas de navegación en sitios web.
  - c) Se utiliza para representar información de derechos de autor en las páginas.
  - d) Se utiliza para representar subtítulos para imágenes.

- **¿Para qué se utiliza normalmente el elemento rubí?**

  - a) Se utiliza para escribir aplicaciones Ruby.
  - b) Se utiliza para crear elementos de lista en una página.
  - c) Se utiliza para aplicar un subrayado al texto.
  - d) Se utiliza para mostrar la pronunciación de caracteres del este de Asia. <!-- correcto -->
