# Importancia de la accesibilidad y de una buena estructura HTML

En estos vídeos de conferencias, aprenderá sobre la accesibilidad y su importancia, las herramientas de asistencia para personas con discapacidad, los atributos HTML que permiten crear sitios web inclusivos, las mejores prácticas de accesibilidad y mucho más.

## ¿Qué es la accesibilidad?

La accesibilidad consiste en crear productos y servicios que todo el mundo pueda utilizar. En el contexto del desarrollo web, se trata de crear sitios web que todo el mundo pueda entender e interactuar con ellos, incluidas las personas con discapacidades visuales, auditivas, motoras y cognitivas.

Algunos ejemplos de discapacidades que pueden afectar a la experiencia en línea de los usuarios son:

Traducción realizada con la versión gratuita del traductor DeepL.com

- Blindness.
- Low vision.
- Color blindness.
- Deafness.
- Difficulty using keyboards, mice, or touchscreens.
- Attention disorders
- Memory issues.
- Difficulty speaking or understanding spoken language.
- Sensitivity to flashing lights.

Éstas son sólo algunas de las muchas condiciones que pueden afectar a usuarios de todo el mundo.

Para ayudarle a crear sitios web accesibles, el Consorcio World Wide Web, conocido como W3C, desarrolló un conjunto de normas internacionales que puede seguir para que sus sitios web sean más accesibles y fáciles de usar para las personas con discapacidad.

Estas normas se conocen como «Pautas de Accesibilidad al Contenido en la Web» (WCAG).

Estas pautas se han diseñado teniendo en cuenta cuatro principios básicos, conocidos como POUR.

- `P` significa Perceptible. Los usuarios deben poder percibir la información que usted presenta. Por ejemplo, puede proporcionar texto alternativo para las imágenes, de modo que los usuarios que accedan a su sitio web con un lector de pantalla puedan entenderlas.

- `O` significa Operable. Los usuarios deben poder interactuar con la interfaz de usuario. Por ejemplo, puedes asegurarte de que todas las funciones sean accesibles también a través del teclado, no sólo del ratón.

- `U` significa Comprensible. Los usuarios deben poder entender la información. Por ejemplo, puede evitar frases complejas y utilizar un lenguaje sencillo en la medida de lo posible.

- `R` de Robusto. Una amplia gama de navegadores y otras herramientas, incluidas las tecnologías de apoyo, deben ser capaces de interpretar el contenido.

Utilizar HTML semántico es muy útil para que su sitio web sea compatible con distintos navegadores y tecnologías de asistencia.

Si su contenido no sigue alguno de estos principios básicos, no todo el mundo podrá utilizar su sitio web.

Para comprobar si está siguiendo correctamente estas directrices, puede acceder a la Referencia rápida del Consorcio World Wide Web. Allí encontrará una lista completa de criterios y técnicas.

La accesibilidad es esencial para el desarrollo web. Desarrollar pensando en la inclusión garantiza que todo el mundo pueda acceder a sus contenidos y participar en ellos, fomenta la igualdad y crea una mejor experiencia de usuario para todos en todo el mundo.

## Questionario 1

- **¿Cuál es el objetivo principal de la accesibilidad web?**

  - a) Para que los sitios web tengan mejor aspecto.
  - b) Garantizar que los sitios web sean utilizables por todos. // correcto
  - c) Para mejorar el rendimiento del sitio web.
  - d) Aumentar el tráfico del sitio web.

- **¿Qué son las Pautas de Accesibilidad al Contenido en la Web (WCAG)?**

  - a) Un lenguaje de programación para el desarrollo web.
  - b) Un conjunto de directrices para que los sitios web sean accesibles a todo el mundo. // correcto
  - c) Una nueva tendencia de diseño para sitios web.
  - d) Una herramienta para comprobar el rendimiento de los sitios web.

- **¿Cuál de los siguientes NO es un principio básico de las Pautas de Accesibilidad al Contenido en la Web (WCAG)?**

  - a) Perceivable.
  - b) Operable.
  - c) Understandable.
  - d) Compatible. // correcto

## ¿Qué son los lectores de pantalla y quién los utiliza?

Los lectores de pantalla son programas de tecnología de apoyo que ayudan a las personas ciegas y deficientes visuales a utilizar ordenadores y dispositivos móviles.

Los lectores de pantalla no son sólo herramientas para que los ciegos y deficientes visuales accedan a ordenadores y dispositivos móviles.

Permiten a estas personas acceder a la educación, las oportunidades laborales y las redes sociales. Esto garantiza la inclusión digital y mejora su capacidad para participar plenamente en la sociedad.

Existe la idea errónea de que los lectores de pantalla son dispositivos de conversión de texto en voz.

Sin embargo, la conversión de texto a voz(`text-to-speech`) es sólo una de las características de un lector de pantalla. Algunos lectores de pantalla incluso convierten el texto en braille en lugar de voz.

Aparte de la conversión de texto a voz(`text-to-speech`) y la salida braille(`braille output`), otras características notables de los lectores de pantalla son las ayudas a la navegación y la asistencia en la navegación web.

Además, los programas lectores de pantalla no sólo están pensados para ciegos y deficientes visuales. Los disléxicos y las personas con discapacidades cognitivas también utilizan lectores de pantalla. Todos los sistemas operativos más populares tienen lectores de pantalla integrados.

Tanto macOS como iOS tienen VoiceOver integrado. Puedes activarlo en tu ordenador pulsando `CMD + F5`. Puedes acceder a él en iPhones a través de Ajustes.

Los ordenadores Windows tienen Narrador integrado. Puedes activarlo pulsando `WIN + CTRL + ENTER`. También están disponibles NonVisual Desktop Access (NVDA) y Job Access With Speech (JAWS) para ordenadores Windows. NVDA es gratuito y de código abierto, mientras que JAWS es de pago.

Linux dispone de *Orca* para el entorno de escritorio y *Speakup* para el terminal Linux.

Los teléfonos Android tienen TalkBack incorporado. Puedes activarlo accediendo a *Settings > Special Function > Accessibility > Talkback*.

Algunos dispositivos Android también incorporan Ella y Select to Speak.

Uno de los principales retos para los usuarios de lectores de pantalla es que muchos desarrolladores de software no diseñan sus productos teniendo en cuenta la accesibilidad y la compatibilidad con los lectores de pantalla.

Aunque la accesibilidad es un tema muy amplio, todos los desarrolladores deben aprender a hacer que su software web sea accesible para ciegos y deficientes visuales, así como para otros grupos de personas con discapacidad.

Esto demuestra empatía y un compromiso con la inclusión, garantizando que todos los usuarios puedan beneficiarse de su trabajo.

## Questionario 2

- **¿Cuál de los siguientes es el lector de pantalla integrado en los dispositivos macOS e iOS?**

  - a) Ella.
  - b) Speakup.
  - c) VoiceBox.
  - d) VoiceOver. // correcto

- **¿Para cuál de los siguientes casos no están hechos los lectores de pantalla?**

  - a) Los ciegos.
  - b) Personas con discapacidad visual.
  - c) Los sordos. // correcto
  - d) Personas disléxicas.

- **¿Cuál de estas no es una característica de los lectores de pantalla?**

  - a) Speech-to-text. // correcto
  - b) Text-to-speech.
  - c) Braille output.
  - d) Web browsing support.

## ¿Qué son los teclados de texto grande o braille y quién los utiliza?

Los teclados de texto grande y braille están diseñados para usuarios con discapacidad visual. En los teclados de texto grande, también llamados teclados de letra grande, las letras, números y símbolos son más grandes que en los teclados estándar. Este diseño es útil para las personas a las que les resulta difícil ver el texto más pequeño de las teclas. La mayoría de ellos también tienen contraste y brillo mejorados.

El teclado de letra grande de la marca `MaxiAids` tiene teclas amarillas con letras, números y símbolos negros, grandes y en negrita. Esto es útil para las personas con baja visión.

Otro teclado es el negro de letra grande con letras blancas en las teclas. Este teclado también está retroiluminado, por lo que los usuarios pueden ajustar su brillo a diferentes condiciones de iluminación.

Mientras que los teclados con letra grande proporcionan indicaciones visuales a los usuarios con baja visión, los teclados braille ofrecen una experiencia completamente táctil a las personas con discapacidades visuales más graves, incluidas las personas ciegas.

El braille es un sistema de lectura y escritura táctil. Consiste en puntos en relieve dispuestos en patrones específicos para representar letras, números y signos de puntuación.

Los teclados Braille utilizan este sistema para ayudar a los usuarios a encontrar las teclas correctas en el teclado sintiendo estos patrones con los dedos. Las teclas tienen puntos en relieve que representan letras, números y símbolos.

Y algunos teclados combinan ambos enfoques: fuentes grandes y patrones braille en las teclas. Esto es útil para las personas con discapacidad visual y para las que están aprendiendo braille.

El texto grande y los teclados braille son herramientas que ayudan a las personas con discapacidad visual. Al ofrecer métodos de entrada alternativos, estas tecnologías de apoyo garantizan que todo el mundo pueda formar parte del mundo digital.

## Questionario 3

- **¿Cuál es la ventaja de utilizar teclados de texto grandes?**

  - a) Velocidad de escritura mejorada.
  - b) Mayor rendimiento.
  - c) Mejora de la legibilidad de las teclas. // correcto
  - d) Niveles de ruido reducidos.

- **¿A quién beneficia principalmente el uso de textos grandes y teclados braille?**

  - a) Personas con discapacidad auditiva.
  - b) Personas con discapacidades cognitivas.
  - c) Personas con discapacidad visual. // correcto
  - d) Personas con discapacidad motriz.

- **¿Cómo se identifican las letras, números y símbolos en los teclados braille?**

  - a) Palpando con los dedos patrones de puntos en relieve. // correcto
  - b) Hablando en el teclado.
  - c) Utilizando un lápiz óptico.
  - d) Leyendo las llaves.

## ¿Para qué sirven los dispositivos señaladores alternativos, como trackballs, joysticks y touchpads?

Los dispositivos señaladores alternativos son dispositivos de entrada alternativos al ratón tradicional. Son esenciales para mejorar la accesibilidad informática de las personas con discapacidad, problemas en las extremidades anteriores y movilidad limitada.

Ejemplos comunes de dispositivos señaladores alternativos son los trackballs, los joysticks y los touchpads.

Un trackball es un dispositivo señalador fijo que consiste en una bola grande y móvil dentro de un zócalo. También incluye botones adicionales para hacer clic y realizar otras funciones.

A diferencia del ratón tradicional, que requiere el movimiento alrededor de una superficie para controlar el cursor, un trackball permanece en su sitio. Los usuarios manipulan la bola directamente con los dedos, el pulgar o la palma de la mano para mover el cursor en la pantalla.

Algunos ratones tradicionales también tienen un trackball en la parte superior o lateral. Estos ratones pueden ser un buen punto de partida si quieres cambiar gradualmente a un trackball.

Los trackballs reducen el movimiento físico que el usuario necesita para navegar, lo que los hace ideales para usuarios con problemas de movilidad. Aparte de eso, si necesitas gran precisión y tienes poco espacio en el escritorio, un trackball es más ideal que un ratón tradicional.

Un joystick es un dispositivo señalador diseñado principalmente para juegos y ciertas aplicaciones industriales como el control de maquinaria. Consiste en una palanca que gira hacia arriba, abajo, izquierda y derecha, y a menudo incluye botones adicionales para diversas acciones.

Los joysticks proporcionan un control preciso del movimiento y las acciones en entornos digitales. Por eso son tan populares en simuladores de vuelo, grúas, juegos de conducción y otras aplicaciones que requieren una dirección precisa.

Como los joysticks admiten movimientos más amplios y deliberados, son beneficiosos para personas con temblores y manos inestables.

También reducen la tensión y el dolor que producen los movimientos repetitivos, por lo que son ideales para personas con artritis y síndrome del túnel carpiano.

Un touchpad es un dispositivo plano sensible al tacto integrado en los ordenadores portátiles y en algunos teclados. Permite a los usuarios controlar el cursor en la pantalla deslizando los dedos por su superficie.

Además de la superficie para controlar el cursor, los touchpads también incorporan botones que emulan las acciones de un ratón tradicional, como hacer clic con el botón derecho e izquierdo.

La mayoría de la gente considera que los touchpads son una alternativa mejor al ratón porque mejoran significativamente la navegación al permitir gestos multitáctiles como pellizcar para ampliar, desplazarse con dos dedos, tocar para hacer clic y deslizar con tres dedos.

El touchpad es ideal para personas con poca movilidad en el brazo o la mano, porque la extremidad anterior está casi siempre inmóvil mientras se utiliza. También es adecuado para personas con artritis y dolores articulares porque no mueven demasiado los brazos.

## Questionario 4

- **¿Qué tipo de dispositivo son el trackball, el joystick y el touchpad?**

  - a) Dispositivos de salida.
  - b) Dispositivos de entrada/salida.
  - c) Dispositivos señaladores. // correcto
  - d) Dispositivos VDU.

- **¿Qué dispositivo admite gestos multitáctiles como pellizcar para ampliar, desplazarse con dos dedos, pulsar para hacer clic y deslizar con tres dedos?**

  - a) The traditional mouse.
  - b) Touchpad. // correcto
  - c) Joystick.
  - d) Trackballs.

- **¿Qué dispositivo señalador está diseñado principalmente para juegos y aplicaciones industriales específicas?**

  - a) Joystick. // correcto
  - b) Trackball.
  - c) Mouse.
  - d) Trackpad or touchpad.

## ¿Para qué sirven las lupas de pantalla?

Las lupas de pantalla son herramientas que ayudan a las personas con baja visión y otras deficiencias visuales a acceder mejor a los contenidos digitales y a la web.

Profundicemos en qué son estas herramientas y qué papel desempeñan en la accesibilidad de los contenidos digitales.

Las lupas de pantalla amplían los textos, gráficos y otros elementos de la pantalla de un ordenador o dispositivo móvil. Muchas lupas de pantalla permiten a los usuarios ampliar la visualización más de un 200%. A continuación, los usuarios pueden navegar por la página utilizando su dispositivo señalador o el teclado. Además, la mayoría de las lupas ofrecen porcentajes de zoom personalizables y otras funciones en su configuración.

Las lupas de pantalla ayudan sobre todo a las personas con baja visión a leer texto, ya que las fuentes pequeñas de documentos o aplicaciones pueden suponer un reto para ellas. Al ampliar el texto, pueden leer correos electrónicos, artículos y otros contenidos sin forzar la vista. Las lupas de pantalla también ayudan a navegar por Internet. Ayudan a los usuarios a localizar y hacer clic en botones, enlaces y otros elementos interactivos difíciles de ver. Esta mejora de la visibilidad garantiza que los usuarios puedan navegar por sitios web, rellenar formularios y participar en actividades en línea sin dificultad.

Por eso, los desarrolladores de software tienen que hacer que sus productos digitales sean accesibles para las personas con baja visión. Algunas consideraciones a tener en cuenta son:

- Utilizar fuentes escalables para que el usuario pueda cambiar el tamaño de la página sin que se rompa el diseño.

- Garantizar que la interfaz de usuario se adapte a diferentes tamaños de pantalla mediante un diseño adaptable.

- Utilizar esquemas de color de alto contraste y colores personalizables.

- Utilizar una barra de navegación diminuta y no pegajosa para que los usuarios puedan ver el contenido aunque utilicen lupas.

- Utilizar texto HTML normal en lugar de imágenes de texto.

- Proporcionar comentarios directamente junto al elemento que los activa, y mucho más.

Todos los principales sistemas operativos tienen al menos una lupa incorporada por sus fabricantes:

- Tanto macOS como iOS tienen Zoom. Puedes activarlo en Mac yendo a Ajustes, filtrando por Accesibilidad y haciendo clic en «Zoom». Activa la opción «Usar atajos de teclado para hacer zoom».
  - Puedes activarlo en iPhone a través de Ajustes > Accesibilidad > Zoom.

- Los dispositivos Android disponen de Ampliación. Para activarla, vaya a Ajustes > Función especial > Accesibilidad> Ampliación. Como esto puede variar de un dispositivo a otro, puedes buscar «Ampliación» en la página de inicio de los ajustes para acceder a ella.

- Windows dispone de Lupa. Puedes utilizarla yendo a Configuración > Facilidad de acceso > Lupa.

- Las lupas para los sistemas operativos Linux varían. Puede ser Zoom o Lupa.

Aparte de los incorporados en los sistemas operativos, algunos magnificadores de pantalla útiles de terceros son:

- ZoomText para Windows.
- ClaroView para Mac y Windows.
- iZoom para Windows.
- Zoomify - Lupa de pantalla para Mac.
- LunarPluse para Windows.
- Loupe para Mac.

## Questionario 5

- **¿Cómo funcionan la mayoría de los magnificadores de pantalla?**

  - a) Mediante la función de texto a voz.
  - b) Ampliando los textos, gráficos y otros elementos de la pantalla de un ordenador o dispositivo móvil. // correcto
  - c) Proporcionando una regla alrededor de cada elemento de la página.
  - d) Ampliando sólo los textos de una pantalla para mejorar su visibilidad.

- **¿Qué debe hacer un desarrollador para que sus productos digitales sean compatibles con las lupas de pantalla?**

  - a) Utilice sólo fuentes grandes.
  - b) Desactiva el zoom para mantener el diseño intacto.
  - c) Utilice sólo imágenes para transmitir la información.
  - d) Haga que sus páginas respondan a diferentes tamaños de pantalla. // correcto

- **¿Cuál de los siguientes es un magnificador de pantalla de terceros?**

  - a) Zoom
  - b) Loops
  - c) ZoomText // correcto
  - d) Loup

## ¿Para qué sirve el software de reconocimiento de voz?

Los programas de reconocimiento de voz ayudan a las personas con discapacidad a interactuar con los ordenadores y otros dispositivos digitales. Veamos qué es el software de reconocimiento de voz y qué papel desempeña en la inclusión digital.

En el contexto de la accesibilidad, las herramientas de reconocimiento de voz permiten a las personas con discapacidad utilizar su voz para transmitir órdenes y realizar diversas tareas en lugar de utilizar dispositivos de entrada tradicionales como teclados y ratones. Esto incluye escribir correos electrónicos y otros documentos, navegar por internet y controlar dispositivos domésticos inteligentes.

Dado que las herramientas de software de reconocimiento de voz eliminan la necesidad de interacción física, dotan a las personas con discapacidad de una gran independencia y control sobre su entorno.

Éstas son algunas de las personas a las que el software de reconocimiento de voz puede resultar de gran ayuda:

- Personas con deficiencias visuales, incluidas aquellas con baja visión o ceguera.
- Personas con problemas de movilidad, como el uso limitado de manos y brazos o afecciones como la artritis y el síndrome del túnel carpiano.
- Personas que se recuperan de lesiones en manos o brazos.
- Personas con trastornos cognitivos, como problemas de memoria o déficit de atención.
- Personas mayores a las que les resulte más fácil utilizar comandos de voz.

>[!NOTE]
>Tenga en cuenta que las personas con discapacidades no son las únicas que utilizan la tecnología de reconocimiento de voz. Las fuerzas de seguridad, los jugadores, los conductores y los profesionales ocupados también utilizan herramientas de reconocimiento de voz.

Algunos ejemplos de software de reconocimiento de voz que permite a las personas interactuar con su ordenador son Voice Control para macOS/iOS, Voice Access para Android y Windows Speech Recognition para Windows (denominado Voice Access en las versiones más recientes de Windows). Dragon de Nuance es un popular software de reconocimiento de voz de terceros para Windows.

## Questionario 6

- **¿Cuáles son los principales dispositivos de entrada a los que sustituye el software de reconocimiento de voz?**

  - a) Lectores de huellas dactilares.
  - b) Escáneres de imágenes.
  - c) Teclados y ratones. // correcto
  - d) Webcams.

- **¿Cuál de los siguientes sería el menos propenso a beneficiarse del software de reconocimiento de voz?**

  - a) Ancianos.
  - b) Personas con problemas de movilidad.
  - c) Personas con poco movimiento de piernas. // correcto
  - d) Personas con discapacidad visual.

- **¿Cuál de los siguientes no es un programa de reconocimiento de voz?**

  - a) Dragon.
  - b) Audacity. // correcto
  - c) Voice Control.
  - d) Voice Access.

## ¿Cuáles son las herramientas de auditoría de accesibilidad más comunes?

La accesibilidad es un aspecto crucial de los contenidos digitales que a menudo se pasa por alto. Al hacer accesibles sus contenidos digitales, es importante asegurarse de que cumplen las normas de accesibilidad.

Una herramienta de auditoría de accesibilidad es una aplicación que te ayuda a mejorar la accesibilidad de tus contenidos digitales informando de los problemas de accesibilidad que pueden detectarse fácilmente mediante pruebas automatizadas. Este contenido incluye sitios web, aplicaciones web y aplicaciones móviles.

Es importante tener en cuenta que, aunque las herramientas automáticas de accesibilidad pueden contribuir a mejorar la accesibilidad, normalmente sólo detectan un tercio de los posibles problemas de accesibilidad. Por lo tanto, es importante no confiar totalmente en ellas para evaluar la accesibilidad de tus contenidos. Siempre será necesario realizar pruebas manuales, preferiblemente por parte de personas con discapacidad, para garantizar que el contenido sea lo más accesible posible.

Veamos algunas herramientas gratuitas que pueden ayudarte a mejorar la accesibilidad de tus contenidos digitales.

Google Lighthouse es un popular comprobador de métricas web que puedes utilizar directamente en Chrome DevTools o en línea. Esto significa que puedes comprobar no sólo los sitios web activos, sino también los desarrollados localmente.

Las métricas que puedes comprobar incluyen accesibilidad, SEO, mejores prácticas y rendimiento.

Para utilizar Lighthouse, abre DevTools pulsando `F12` y cambiando a la pestaña Lighthouse. Seleccione las métricas que desea comprobar, elija el dispositivo en el que desea realizar la prueba y haga clic en el botón «Analizar carga de página».

Una vez finalizada la comprobación, aparecerá una puntuación de accesibilidad, junto con una lista de los problemas que deben solucionarse.

Si desea obtener métricas más fiables, considere la posibilidad de utilizar la versión web. El inconveniente es que no permite comprobar sitios web locales. Puedes acceder a la versión web en `pagespeed.web.dev`.

WAVE es otro comprobador de accesibilidad fiable que puedes utilizar como extensión de Chrome o en la web. Todo lo que tienes que hacer es introducir la URL de tu sitio web y se generará un completo informe de accesibilidad para ti. Este informe incluye las características de accesibilidad implementadas, ARIA y contrastes.

IBM Equal Accessibility Checker es otra sólida herramienta para mejorar la accesibilidad de los contenidos digitales. Con ella, puede escanear sus sitios web en busca de problemas de accesibilidad y generar un informe detallado.

Puede utilizarlo como extensión de Chrome o complemento de Firefox.

Para utilizar IBM Accessibility Checker como extensión de Chrome, descárguela de la tienda web de Chrome. Abra su Devtools pulsando `F12` y seleccionando la pestaña «Comprobador de accesibilidad» situada en el panel Elementos. Haga clic en el botón de escaneo para iniciar la comprobación y se generará un informe para usted. Puede exportar el informe como una hoja de cálculo y un archivo HTML pulsando el botón «Exportar XLS».

Ten en cuenta que, aunque estas herramientas automáticas te ayudan a hacer tus contenidos más accesibles, una puntuación perfecta de cualquiera de ellas no significa que tus contenidos sean totalmente accesibles. La gama de problemas que comprueban estas herramientas es limitada, por lo que siempre será necesario realizar pruebas manuales para garantizar una experiencia más accesible para todos.

## Questionario 7

- **¿Cuál de estas opciones describe mejor una herramienta de auditoría de accesibilidad?**

  - a) Corrige automáticamente todos los problemas de accesibilidad
  - b) Evalúa el grado de accesibilidad de sus contenidos digitales // correcto
  - c) Sólo comprueba las aplicaciones móviles
  - d) No requiere ninguna intervención manual

- **¿Cuál de las siguientes opciones describe cómo puede utilizar *IBM Equal Access Accessibility Checker*?**

  - a) Sólo puede utilizarse como aplicación de escritorio.
  - b) Puede utilizarse sin ninguna integración de desarrollo.
  - c) Es exclusivo para aplicaciones móviles.
  - d) Puede utilizarse como extensión de Chrome, complemento de Firefox o paquete NPM. // correcto

- **¿Cuál de estas es una limitación del uso de la versión web de la herramienta en Google Lighthouse?**

  - a) Proporciona métricas poco fiables.
  - b) Sólo puede probar sitios web locales.
  - c) No puede probar sitios web locales. // correcto
  - d) No admite pruebas móviles.

## ¿Cómo afecta a la accesibilidad una estructura adecuada de los niveles de encabezamiento?

En un vídeo anterior, aprendiste sobre la estructura adecuada de los niveles de encabezamiento. En este vídeo, aprenderá cómo afecta una buena estructura de encabezados a la accesibilidad.

El uso adecuado de los encabezados crea una jerarquía visual para que los usuarios naveguen y entiendan tu página web. El uso de una jerarquía lógica de encabezados permite a los usuarios de lectores de pantalla comprender la estructura de su contenido y navegar por él rápidamente. Crear un texto de encabezamiento apropiado que describa con precisión el contenido que sigue ayuda a todos a encontrar la información que necesitan en su sitio. Como beneficio adicional, los encabezados bien formados también pueden mejorar el SEO de su sitio.

Piense en los títulos como en los cimientos de su sitio web. Sin una buena base, la accesibilidad del contenido se resentirá.

Veamos cómo hacer que tus proyectos web sean más accesibles para los usuarios de tecnologías de apoyo utilizando correctamente los encabezados.

Los encabezados, que van del h1 al h6, crean una estructura de navegación para los usuarios de lectores de pantalla. Los lectores de pantalla pueden listar todos los encabezados de una página, lo que permite a los usuarios saltar directamente a las secciones que necesitan. Así pues, disponer correctamente los encabezados es importante para ayudar a estos usuarios a evitar contenidos innecesarios y encontrar rápidamente la información que buscan.

Las personas con visión parcial o discapacidades cognitivas necesitan procesar la información con rapidez y facilidad para reducir la carga cognitiva.

Aunque la disposición adecuada de los títulos es importante, también es necesario que los textos de los títulos sean claros y descriptivos.

He aquí algunas prácticas clave a seguir para utilizar adecuadamente los encabezamientos:

- Utilice encabezamientos con una jerarquía que refleje una organización clara. Por ejemplo, el título de la página debe ser un h1, las secciones principales deben introducirse con títulos h2, las subsecciones con h3 , y así sucesivamente, hasta h6.

- No salte de h1 a h3, o de h2 a h4, y así sucesivamente.

- Utilice un texto claro y descriptivo que resuma el contenido que sigue a cada encabezamiento.

- No utilice un encabezamiento de forma aislada: debe haber algún contenido a continuación del encabezamiento.

- Utilice encabezamientos apropiados cuando sea necesario en lugar de formatear el texto para que parezca un encabezamiento.

- Cada página debe tener un único elemento h1 que represente el tema o título principal.

*A continuación se muestra un marcado básico que representa cómo debe utilizar los encabezados en una página*:

```html
<!-- Page title -->
<h1>What is HTML</h1>

<!-- First section -->
<section>
  <h2>Introduction to HTML</h2>
  <p>
    HTML stands for HyperText Markup Language. It is the standard language for
    creating web pages.
  </p>
</section>
<!-- Second section -->
<section>
  <h2>History of HTML</h2>
  <p>HTML began to take shape in the early 90s</p>
  <h3>Origins</h3>
  <p>
    HTML was created by Tim Berners-Lee in 1991. It has evolved significantly
    over the years.
  </p>
</section>
```

## Questionario 8

- **¿Cómo ayuda una estructura de encabezamientos adecuada a los usuarios de lectores de pantalla?**

  - a) Proporciona un estilo visual al contenido.
  - b) Ayuda a los lectores de pantalla a generar un resumen del contenido.
  - c) Permite a los lectores de pantalla navegar y saltar a diferentes secciones fácilmente. // correcto
  - d) Mejora la velocidad de carga de la página web.

- **¿Por qué es importante utilizar correctamente los encabezamientos para los usuarios que dependen del teclado?**

  - a) Mejora el atractivo visual de la página web.
  - b) Permite a los usuarios imprimir la página web más fácilmente.
  - c) Permite a los usuarios saltar entre secciones sin necesidad de pasar por cada enlace. // correcto
  - d) Ayuda a los usuarios a descargar la página web más rápidamente.

- **¿Cuál de estas es una de las mejores prácticas para utilizar encabezados en una página web?**

  - a) Saltar de `h1` a `h3` para ahorrar tiempo.
  - b) Utilizar textos claros y descriptivos que resuman los siguientes contenidos. // correcto
  - c) Utilizar cualquier nivel de encabezamiento de forma aislada sin ningún contenido a continuación.
  - d) Utilizar varias etiquetas `h1` en una misma página para dar énfasis.
