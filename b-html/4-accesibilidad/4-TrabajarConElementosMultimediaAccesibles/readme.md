# Trabajar con elementos multimedia accesibles

En estos vídeos didácticos aprenderá a crear enlaces y contenidos de audio y vídeo accesibles.

## ¿Cuándo es necesario el atributo `alt` y cuáles son algunos ejemplos de un buen texto alternativo?

El texto alternativo, a menudo abreviado como `alt` text, es una breve descripción textual de una imagen. Proporciona información esencial sobre la imagen para los usuarios que no pueden verla, como los que utilizan lectores de pantalla y otras tecnologías de asistencia.

Es esencial para que los sitios web sean accesibles a personas con discapacidad visual.

Los motores de búsqueda también utilizan el texto alternativo para entender las imágenes. Algunos navegadores también pueden mostrarlo cuando una imagen no se carga correctamente. Esto puede ocurrir cuando falta el archivo de imagen o cuando el usuario tiene problemas de conectividad. Así que es útil para muchos fines distintos.

Una persona con discapacidad visual no podrá saber qué hay en la imagen a menos que se describa en el texto alternativo. Un ejemplo de mal texto alternativo para una imagen de un cachorro sería «Un lindo cachorro». Este texto no es lo suficientemente específico para transmitir los detalles importantes de la imagen, como ¿qué aspecto tiene el cachorro? ¿Dónde está? ¿Hay algún objeto importante alrededor del cachorro?

Mejorémoslo. Un ejemplo de buen texto alternativo sería "Un cachorro blanco y negro con un collar naranja está tumbado boca abajo en la arena, mirando hacia un lado. Una pelota naranja brillante descansa cerca de sus patas delanteras".

Aquí puedes ver esto en HTML con un elemento de imagen, el atributo `alt` y una descripción más detallada:

- **Codigo Ejemplo**

  ```html
  <img src="puppy.png" alt="A black and white puppy with an orange collar lies on its belly in the sand, looking off to the side. A bright orange ball rests near its front paws." />
  ```

Es importante tener en cuenta que no existe una única forma correcta de escribir el texto alternativo de una imagen. Lo que incluya en la descripción dependerá del contexto en el que se utilice la imagen. Por ejemplo, si la foto del cachorro está en un sitio web sobre razas de perros, es posible que desee incluir más detalles sobre la descripción física del cachorro y posiblemente ignorar el hecho de que el cachorro está en la playa jugando con una pelota naranja. En última instancia, el texto `alt` que utilice para una imagen debe reflejar el propósito principal de incluir la imagen en la página, y la información que proporcione debe dar a las personas que no pueden ver la imagen los detalles necesarios para entender ese propósito.

Aquí tenemos otro ejemplo de un hermoso complejo turístico tropical. Vamos a describirlo.

Un ejemplo de mal texto `alt` para esta imagen sería «Resort».

Es demasiado corto y no proporciona suficiente información sobre la imagen. Para mejorar esta descripción, podría ampliarla para incluir los elementos más importantes de la imagen:

«Resort tropical con piscina rodeada de palmeras y bungalows».

Puede utilizar el atributo alt en HTML de esta forma:

- **Codigo Ejemplo**

  ```html
  <img src="resort.png" alt="Tropical resort featuring a swimming pool surrounded by palm trees and bungalows." />
  ```

Ahora que ya sabes qué es un buen y un mal texto alternativo, veamos algunas de las mejores prácticas.

- El texto `alt` debe ser breve. Debe ser lo suficientemente detallado como para que se entienda la imagen, pero no tan largo como para que resulte confuso.

- No intente describir todos los detalles. Céntrese en los aspectos más importantes de la imagen.

- Por lo general, no es necesario empezar con «imagen de» o «foto de». Puedes empezar la descripción directamente.

- Además, si hay un texto similar alrededor de la imagen, no hace falta que lo escribas de nuevo.

- Normalmente se recomienda terminar el texto alternativo con un punto por coherencia.

- Si la imagen es un enlace a otra página, en lugar de describir la imagen en sí, el texto `alt` debe describir lo que ocurrirá si los usuarios hacen clic en ella.

Por ejemplo, si su sitio web tiene un icono con una flecha hacia la derecha que lleva al usuario a la página siguiente, en lugar de escribir un texto alt que sólo diga «flecha hacia la derecha», como en este ejemplo, donde puede ver el atributo alt con esta descripción:

- **Codigo Ejemplo**

  ```html
  <a href="about.html">
    <img src="arrow-right.png" alt="Right arrow." />
  </a>
  ```

En su lugar, debería escribir algo como esto, donde el texto `alt` describe lo que ocurrirá si los usuarios hacen clic en la imagen. Pasarán a la página siguiente.

- **Codigo Ejemplo**

  ```html
  <a href="about.html">
    <img src="arrow-right.png" alt="Go to next page." />
  </a>
  ```

Sólo las imágenes que transmiten información importante deben tener texto alternativo. Si una imagen sólo se utiliza con fines decorativos, debe tener un texto alternativo nulo (vacío), para que pueda ser ignorado por los lectores de pantalla y otras tecnologías de asistencia.

He aquí un ejemplo de atributo alt vacío:

- **Codigo Ejemplo**

  ```html
  <img src="decorative_image.jpg" alt="" />
  ```

Todas las imágenes de su sitio web deben tener un atributo alt, aunque esté vacío. Si omite el atributo alt por completo, algunos lectores de pantalla leerán el nombre del archivo en su lugar, lo que puede distraer a las personas que utilizan tecnologías de asistencia, por lo que no es recomendable.

Por último, antes de poner en marcha el sitio web, debe comprobar cuidadosamente si los lectores de pantalla pueden leer correctamente el texto alternativo.

Escribir un texto alternativo eficaz es esencial para crear contenidos web accesibles. Como desarrollador web, si proporcionas descripciones claras de tus imágenes, puedes asegurarte de que todo el mundo pueda interactuar con tu sitio web en una experiencia online inclusiva.

---

## Cuestionario 1

<details>

  <summary>
    <strong>
      ¿Para qué sirve el texto alternativo en una imagen?
    </strong>
  </summary>
  
- [ ] a) Para mejorar el aspecto de una imagen.
- [ ] b) Proporcionar un elemento decorativo a la página web.
- [x] c) Describir la imagen para personas con discapacidad visual. <span style="color: #4caf50; font-weight: bold;">✔ Correcto</span>
- [ ] d) Para aumentar la velocidad de carga del sitio web.
  
</details>

<details>

  <summary>
    <strong>
      ¿Cuándo conviene dejar vacío el texto alternativo de una imagen?
    </strong>
  </summary>

- [x] a) Cuando la imagen es puramente decorativa. <span style="color: #4caf50; font-weight: bold;">✔ Correcto</span>
- [ ] b) Cuando la imagen es importante para comprender el contenido.
- [ ] c) Cuando la imagen es pequeña.
- [ ] d) Siempre, para mejorar el rendimiento del sitio web.

</details>

<details>

  <summary>
    <strong>
      ¿Cuál debe ser el enfoque principal del texto alternativo de una imagen que actúa como enlace?
    </strong>
  </summary>

- [ ] a) Describir la imagen visualmente.
- [x] b) Indica el destino del enlace. <span style="color: #4caf50; font-weight: bold;">✔ Correcto</span>
- [ ] c) Combinando la descripción de la imagen y el destino del enlace.
- [ ] d) El texto alternativo no es importante para las imágenes que son enlaces.

</details>

---

## ¿Cuáles son las ventajas de un buen texto de enlace desde el punto de vista de la accesibilidad y qué ejemplos hay de buenos textos de enlace?

Veamos las ventajas de escribir buenos textos de enlace en el contexto de la accesibilidad y algunos ejemplos de buenos textos de enlace.

La primera ventaja visible de un buen texto de enlace es que facilita a todo el mundo la búsqueda rápida de información. Los enlaces descriptivos ayudan a los usuarios a saber adónde se dirigen y a qué van a acceder. Esto garantiza que el usuario no se sienta perdido y mejora la experiencia general del usuario.

Para quienes utilizan lectores de pantalla, es imprescindible que el texto del enlace sea claro y descriptivo. Los lectores de pantalla leen el texto del enlace en voz alta, por lo que un texto como «Lea nuestra guía de accesibilidad» es mucho mejor que «Haga clic aquí».

Hacer que el texto del enlace sea claro y descriptivo no sólo es beneficioso para las personas con deficiencias visuales. Los enlaces descriptivos también ayudan a las personas con discapacidades cognitivas al proporcionarles un contexto claro.

Estas son algunas de las mejores prácticas que hay que tener en cuenta al redactar los textos de los enlaces:

- Asegúrese de que los enlaces se distinguen visualmente mediante el subrayado y otras señales visuales, para que los usuarios puedan identificarlos y navegar por ellos fácilmente.

- Evite textos genéricos como «aquí», «haga clic aquí» y «más información», ya que no aportan información útil.

- Procure que los textos de los enlaces sean concisos y descriptivos, idealmente entre 2 y 5 palabras, que transmitan el propósito del enlace.

- Evite jerga y abreviaturas que los usuarios puedan no entender.

- Céntrese en el destino, no en la acción. Por ejemplo, «resultados del comportamiento del usuario», en lugar de «haga clic aquí para leer más».

- No repita el mismo texto de enlace para diferentes destinos.

- Coloque los enlaces de forma que tengan sentido dentro del texto que los rodea. Por ejemplo, «para más detalles, visite nuestra página de eventos», en lugar de «haga clic aquí para obtener más información».

He aquí algunos ejemplos de buenos textos de enlace para casos de uso específicos, en comparación con otros menos útiles. Supongamos que quiere enlazar con una página que ofrece detalles sobre un acontecimiento como este:

- **Codigo Ejemplo**

  ```html
  <a href="webinar-details-link">Details</a>
  ```

`Details` es vago y no proporciona información específica sobre lo que el usuario encontrará si hace clic en el enlace. Sin contexto adicional, los usuarios podrían no saber si el enlace lleva a detalles sobre un seminario web, un producto, una política u otra cosa.

He aquí un ejemplo de buen texto de enlace:

- **Codigo Ejemplo**

  ```html
  <a href="webinar-details-link">
    Get details about our upcoming webinar
  </a>
  ```

Este texto de enlace ofrece a los usuarios contexto sobre el contenido que van a encontrar, lo que les facilita decidir si quieren hacer clic en él. Reduce la ambigüedad al especificar que el enlace está relacionado con un seminario web.

He aquí otro ejemplo que enlaza a una entrada de un blog:

- **Codigo Ejemplo**

  ```html
  <a href="/blog-post-link">Read more</a>
  ```

El texto del enlace `Read more` no es ideal en términos de accesibilidad porque carece de contexto.

He aquí un ejemplo mejor de texto de enlace:

- **Codigo Ejemplo**

  ```html
  <a href="/blog-post-link">
    Read our latest blog post on web accessibility
  </a>
  ```

Este texto de enlace actualizado proporciona a los usuarios una idea más clara de lo que pueden esperar y de por qué les interesa hacer clic en el enlace, lo que es especialmente importante para quienes utilizan lectores de pantalla.

Veamos otro ejemplo. Supongamos que desea proporcionar más información sobre un tema determinado:

- **Codigo Ejemplo**

  ```html
  <a href="/link-to-topic">More info</a>
  ```

`More info` también es vago y puede ser problemático para la accesibilidad. No proporciona detalles específicos sobre el destino del enlace, lo que puede confundir a los usuarios que utilizan lectores de pantalla o a los que navegan por el sitio de forma no lineal.

He aquí un ejemplo mejor de texto de enlace:

- **Codigo Ejemplo**

  ```html
  <a href="/link-to-topic">
    Learn more about our accessibility efforts
  </a>
  ```

Este texto de enlace actualizado es mejor porque describe claramente lo que el usuario encontrará si hace clic en el enlace. Los usuarios pueden entender inmediatamente que el enlace conduce a información sobre sus esfuerzos de accesibilidad.

---

## Cuestionario 2

<details>

  <summary>
    <strong>
      ¿Por qué es esencial un texto de enlace claro y descriptivo para los usuarios de lectores de pantalla?
    </strong>
  </summary>
  
- [ ] a) Mejora el atractivo visual del sitio web.
- [x] b) Garantiza que el lector de pantalla lea claramente el texto del enlace. <span style="color: #4caf50; font-weight: bold;">✔ Correcto</span>
- [ ] c) Acelera la velocidad de carga del sitio web.
- [ ] d) Reduce el número de enlaces de una página.
  
</details>

<details>

  <summary>
    <strong>
      ¿Cuál es el primer beneficio visible de un buen texto de enlace?
    </strong>
  </summary>

- [x] a) Ayuda a los usuarios a saber adónde se dirigen y a qué van a acceder. <span style="color: #4caf50; font-weight: bold;">✔ Correcto</span>
- [ ] b) Mejora la estética de la página web.
- [ ] c) Aumenta la velocidad de carga de la página.
- [ ] d) Reduce el número de enlaces de una página.

</details>

<details>

  <summary>
    <strong>
      ¿Cuál de las siguientes es una buena práctica para redactar textos de enlace?
    </strong>
  </summary>

- [ ] a) Utilice textos genéricos como «haga clic aquí» para mantener la sencillez.
- [ ] b) Repita el mismo texto de enlace para diferentes destinos.
- [x] c) Distinga visualmente los enlaces con subrayados y otras señales visuales. <span style="color: #4caf50; font-weight: bold;">✔ Correcto</span>
- [ ] d) Céntrese en la acción más que en el destino, como «haga clic aquí para leer más».

</details>

---

## ¿Cómo hacer accesibles los contenidos de audio y vídeo?

Los contenidos multimedia, especialmente el vídeo, se han convertido en el formato preferido para compartir información en Internet.

Con este aumento de los contenidos, crece la necesidad de garantizar que todo el mundo pueda acceder y disfrutar de los contenidos de audio y vídeo en línea, independientemente de sus capacidades o entorno.

Hacer que sus contenidos de audio y vídeo sean accesibles no es sólo un detalle, es esencial para llegar a un público más amplio. Veamos algunas formas baratas de hacer que sus contenidos de audio y vídeo sean más accesibles.

Un vídeo no es sólo visual, sino también sonoro, así que lo primero que debe plantearse es añadir subtítulos a su contenido.

Los subtítulos ofrecen la versión en texto de las palabras habladas y sonidos no verbales importantes, como música o risas, sincronizados con el vídeo.

Por otro lado, los subtítulos son esenciales para las personas que no entienden el idioma que usted habla. Esto ayuda no sólo a las personas sordas o con problemas de audición, sino también a quienes ven vídeos en entornos ruidosos o silenciosos.

Para añadir subtítulos a tus contenidos de vídeo o audio, puedes utilizar el elemento de `track` dentro de tu `video` o elemento de `audio`:

- **Codigo Ejemplo**

  ```html
  <!-- Video -->
  <video controls src="video.mp4">
    <track
      src="captions.vtt" 
      kind="captions"
      srclang="en"
      label="English" 
    />
  </video>
  
  <!-- Audio -->
  <audio controls src="audio.mp3">
    <track
      src="captions.vtt"
      kind="captions"
      srclang="en"
      label="English"
    />
  </audio>
  ```

El atributo `kind` se utiliza para indicar al elemento track cómo debe utilizarse. Los valores válidos para el atributo `kind` incluyen `captions`, `subtitles`, `chapters`, y `metadata`.

El atributo `srclang` representa el idioma del contenido de `track`. El atributo `label` es un título descriptivo para la pista de texto que los navegadores utilizan para identificarla y mostrarla en la lista de pistas de texto disponibles.

Otro aspecto importante a tener en cuenta es la transcripción de los contenidos de audio y vídeo. Una transcripción es una versión en texto de todas las palabras pronunciadas en el audio o el vídeo. A diferencia de los subtítulos, las transcripciones no necesitan estar sincronizadas con los medios. Las transcripciones son útiles para las personas sordas o con problemas de audición. También son beneficiosas para quienes prefieren leer en lugar de ver o escuchar. Las transcripciones también facilitan la búsqueda de contenidos, lo que permite a los usuarios encontrar rápidamente partes concretas del audio o el vídeo. Si tienes un vídeo o audio en un sitio web, puedes añadir la transcripción debajo del audio o vídeo:

- **Codigo Ejemplo**

  ```html
  <audio controls>
  <source src="audio.mp3" />
    Your browser does not support the audio element.
  </audio>
  
  <!-- Transcript -->
  <h3>Transcript</h3>
  <p>
    [Speaker 1]: Welcome to the tutorial on making accessible content
  </p>
  <p>
    [Speaker 2]: Today, we'll cover captions, transcripts, and more.
  </p>
  
  <!-- Rest of transcript -->
  ```

Si publicas vídeos en una plataforma de intercambio de vídeos como YouTube o Vimeo, disponen de subtítulos y transcripciones automáticas para los vídeos. Pero si no estás satisfecho, puedes utilizar servicios como veed.io, Rev, Amara y Descript.

Otras formas de hacer accesibles tus contenidos de vídeo y audio son:

- Añadir una superposición de lenguaje de signos a los vídeos para sordos y personas con dificultades auditivas.

- Controles de volumen y velocidad.

- Garantizar un buen contraste del texto en pantalla.

- Ofrecer múltiples formatos.

---

## Cuestionario 3

<details>

  <summary>
    <strong>
      ¿En qué se diferencian los `captions` de los `subtitles` en los contenidos de vídeo?
    </strong>
  </summary>
  
- [ ] a) Los subtítulos ofrecen traducciones para los hablantes no nativos.
- [x] b) Los subtítulos incluyen palabras habladas y sonidos no verbales, mientras que los subtítulos son para espectadores que no entienden el idioma. <span style="color: #4caf50; font-weight: bold;">✔ Correcto</span>
- [ ] c) Los subtítulos incluyen tanto palabras habladas como sonidos no verbales, mientras que los subtítulos son sólo traducciones.
- [ ] d) Los subtítulos están sincronizados con el vídeo, pero los subtítulos no.
  
</details>

<details>

  <summary>
    <strong>
      ¿Cómo puedes añadir `captions` or `subtitles` directamente a tus contenidos de vídeo o audio en HTML?
    </strong>
  </summary>

- [ ] a) Utilizando la etiqueta `caption` dentro del elemento de `video` o `audio`.
- [x] b) Utilizando la etiqueta `track` dentro del elemento de `video` o `audio`. <span style="color: #4caf50; font-weight: bold;">✔ Correcto</span>
- [ ] c) Colocando la etiqueta de `subtitle` dentro del elemento de `vídeo` o `audio`.
- [ ] d) Insertando una etiqueta de `text` dentro del elemento de `video` o `audio`.

</details>

<details>

  <summary>
    <strong>
      ¿Por qué son importantes las transcripciones de los contenidos de audio y vídeo?
    </strong>
  </summary>

- [ ] a) Las transcripciones sólo son útiles para quienes prefieren ver vídeos.
- [X] b) Las transcripciones ayudan a que los contenidos sean accesibles para las personas sordas o con dificultades auditivas y facilitan la búsqueda de contenidos específicos. <span style="color: #4caf50; font-weight: bold;">✔ Correcto</span>
- [ ] c) Las transcripciones sirven únicamente para traducir la lengua hablada a otro idioma.
- [ ] d) Las transcripciones se utilizan para añadir al contenido sonidos no verbales, como música y risas.

</details>

---

## ¿Cómo hacer que las aplicaciones web sean accesibles desde el teclado?

Muchos usuarios utilizan teclados en lugar de ratones debido a discapacidades físicas, lesiones por esfuerzo repetitivo o preferencias personales. Esto incluye a los usuarios de lectores de pantalla y a quienes no disponen de un ratón operativo. La accesibilidad del teclado garantiza que estos usuarios puedan navegar por las aplicaciones web de forma eficaz y sin barreras.

Veamos algunas técnicas prácticas que puedes emplear para que las aplicaciones web sean accesibles desde el teclado.

Muchos usuarios utilizan el `Tab` para navegar por los elementos interactivos de una página web. El atributo `tabindex` se utiliza para hacer que los elementos sean enfocables y definir el orden relativo en el que deben ser navegados utilizando el teclado. Toma un valor numérico, que puede ser positivo, cero o negativo.

Esta es la sintaxis básica:

- **Codigo Ejemplo**

  ```html
  <element tabindex="number">Element Text</element>
  ```

Es importante no utilizar nunca el atributo `tabindex` con un valor superior a `0`. En su lugar, debe utilizar un valor de `0` o `-1`.

Puedes establecer el `tabindex` a `-1` para permitir que reciba foco programático. Esto se utiliza en una variedad de situaciones para la «gestión del foco», como cuando necesitas establecer el foco en un encabezado, mensaje de error o diálogo, o estás construyendo componentes personalizados como interfaces de tabulación o componentes de árbol.

- **Codigo Ejemplo**

  ```html
  <p tabindex="-1">Sorry, there was an error with your submission.</p>
  ```

Establecer `tabindex` a `0` le permite añadir un elemento que no recibe el foco del teclado por defecto en el orden natural de tabulación de la página. Esto permite a los usuarios de teclado `Tab` al elemento. Esto se utiliza principalmente cuando se construyen elementos personalizados que necesitan funcionalidad de teclado.

- **Codigo Ejemplo**

  ```html
  <div role="combobox" tabindex="0">
  ```

`accesskey` es otro atributo que puedes utilizar para que tu proyecto web sea accesible desde el teclado. Permite definir una tecla que enfoca o activa un elemento en particular:

- **Codigo Ejemplo**

  ```html
  <button accesskey="s">Save</button>
  <button accesskey="c">Cancel</button>
  <a href="index.html" accesskey="h">Home</a>
  ```

En el código anterior

- `accesskey="s"` asigna la tecla `S` al botón `Save`. En la mayoría de los navegadores, pulsando `ALT + S` (en Windows) y `CTRL + Opción + S` (en Mac) se activará este botón.

- `accesskey="c"` asigna la tecla `C` al botón `Cancel`, permitiendo a los usuarios activarlo utilizando `ALT + C` (Windows) y `CTRL + Opción + C` (Mac).

- `accesskey="h"` asigna la tecla `H` al enlace `Home`, permitiendo a los usuarios navegar a la página de inicio utilizando `ALT + H` (Windows) y `CTRL + Opción + H` (Mac).

Tenga en cuenta que la combinación de teclas exacta para activar el accesskey puede variar según el navegador y el sistema operativo. Normalmente es `ALT + Tecla especificada` en Windows y `CTRL + Opción + Tecla especificada` en Mac.

Otra forma de hacer que el teclado sea accesible en tus aplicaciones es asegurarte de que proporcionas indicadores de enfoque claros. Si crees que el indicador de enfoque por defecto del navegador no es suficiente, puedes anularlo apuntando al estado de enfoque del elemento.

He aquí un ejemplo de cómo estilizar el estado de enfoque de un elemento HTML:

- **Codigo Ejemplo**

  ```css
  element:focus {
    outline: 2px solid #005fcc;
  }
  ```

La propiedad `outline` se utiliza para definir el contorno alrededor del elemento. Este ejemplo establece el contorno en una línea azul sólida con 2 píxeles de grosor. El indicador de foco debe tener un estilo que haga obvio qué elemento tiene actualmente el foco. Para que sea accesible, el indicador debe tener un contraste de color mínimo de al menos 3:1 con el color de fondo que cubre.

También debes evitar las trampas de teclado, que se producen cuando un usuario no puede apartar el foco de un determinado elemento en componentes como modals y popups.

---

## Cuestionario 4

<details>

  <summary>
    <strong>
      ¿Por qué es importante la propiedad `tabindex` a la hora de gestionar la navegación por teclado en una página web?
    </strong>
  </summary>
  
- [ ] a) Hace que la página se cargue más rápido.
- [x] b) Permite controlar el orden en que se enfocan los elementos al utilizar el tabulador. <span style="color: #4caf50; font-weight: bold;">✔ Correcto</span>
- [ ] c) Añade animaciones a los elementos enfocables.
- [ ] d) Oculta los elementos no esenciales de la navegación por teclado.
  
</details>

<details>

  <summary>
    <strong>
      ¿Cómo contribuye el atributo `accesskey` a la accesibilidad mediante teclado en una página web?
    </strong>
  </summary>

- [ ] a) Mejora el aspecto visual de la página web.
- [ ] b) Acelera el tiempo de carga del sitio web.
- [x] c) Permite definir una tecla específica que enfoca o activa un elemento concreto. <span style="color: #4caf50; font-weight: bold;">✔ Correcto</span>
- [ ] d) Genera automáticamente atajos de teclado para todos los elementos.

</details>

<details>

  <summary>
    <strong>
      ¿Por qué es importante evitar las trampas de teclado en las aplicaciones web?
    </strong>
  </summary>

- [ ] a) Mejora el SEO.
- [ ] b) Permite al desarrollador trabajar más rápido.
- [ ] c) Garantiza que la página tenga menos elementos interactivos.
- [x] d) Garantiza que los usuarios puedan apartar la atención de elementos como modales y ventanas emergentes. <span style="color: #4caf50; font-weight: bold;">✔ Correcto</span>

</details>

---
