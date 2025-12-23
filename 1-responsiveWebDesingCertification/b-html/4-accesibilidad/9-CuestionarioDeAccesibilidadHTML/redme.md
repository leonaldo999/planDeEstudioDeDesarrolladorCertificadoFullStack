# Cuestionario de accesibilidad HTML

El siguiente cuestionario pondrá a prueba sus conocimientos sobre los conceptos de accesibilidad que ha aprendido hasta ahora.

Si te estás preparando para el examen, hay varios conjuntos de cuestionarios disponibles para practicar. Después de completar un cuestionario, puede volver a visitar esta página para acceder a un nuevo conjunto de preguntas.

*Para aprobar el cuestionario, debe responder correctamente al menos a 18 de las 20 preguntas siguientes.*

## Questionario

- **1.¿Cuál de las siguientes NO es una de las categorías principales para los roles de ARIA?**

  - a) Landmark
  - [x] b) Hidden //correcto
  - c) Widget
  - d) Window

- **2.¿Cuál de los siguientes NO es un dispositivo señalador alternativo de uso común utilizado por personas con discapacidades de movilidad para acceder a la web?**

  - a) trackballs
  - [x] b) scanners //correcto
  - c) joysticks
  - d) touchpads

- **3.¿Cuál es la función del atributo `tabindex`?**

  - a) Se utiliza para definir un método abreviado de teclado para un elemento que haga que el elemento sea enfocable.
  - [x] b) Solía hacer que los elementos fueran enfocables y definir el orden relativo en el que debían navegarse usando el teclado. //correcto
  - c) Se usa para indicar que un elemento interactivo activará un elemento emergente cuando se active.
  - d) Se utiliza para indicar que el contenido de un elemento es lo suficientemente importante como para requerir que los lectores de pantalla anuncien cualquier cambio en el contenido.

- **4.¿Cuál de las siguientes opciones NO es una herramienta de accesibilidad común?**

  - a) Wave
  - b) Google Lighthouse
  - [x] c) AWS Accessibility Validator //correcto
  - d) IBM Equal Accessibility Checker

- **5.¿Cuál de las siguientes funciones se utiliza para definir el propósito y la funcionalidad de los elementos interactivos, como las barras de desplazamiento?**

  - a) Document structure roles.
  - b) Live region roles.
  - c) Landmark roles.
  - [x] d) Widget roles. //correcto

- **6.¿Cuál es la función de los live region roles?**

  - a) Estos roles ayudan a organizar el documento y todos los elementos del encabezado.
  - [x] b) Estos roles definen elementos con contenido que cambiará dinámicamente. //correcto
  - c) Estos roles definen subventanas, como diálogos modales emergentes.
  - d) Estos roles definen la estructura general de la página web.

- **7.¿Cuál de las siguientes es la forma correcta de agregar una etiqueta de texto a un elemento que los lectores de pantalla pueden leer?**

  - [x] a)

      ```html
      <button aria-label="Search">
        <i class="fas fa-search"></i>
      </button>
      ```  //correcto

  - b)

      ```html
      <button aria-live="Search">
        <i class="fas fa-search"></i>
      </button>
      ```

  - c)

      ```html
      <button aria-labels="Search">
        <i class="fas fa-search"></i>
      </button>
      ```

  - d)

      ```html
      <button aria-region="Search">
        <i class="fas fa-search"></i>
      </button>
      ```

- **8.¿Cuál es el propósito de WAI-ARIA?**

  - a) Es un tipo especial de validador que se utiliza para auditar la página web y verificar si hay errores de accesibilidad.
  - b) Es un atributo utilizado para proporcionar información adicional sobre un elemento asociándolo con otro elemento que contiene la información. //correcto
  - c) Es un atributo utilizado para asociar un elemento con otro elemento que controla.
  - [X] d) Es una especificación que mejora la accesibilidad del contenido dinámico y los componentes de la interfaz de usuario (UI).

- **9.¿Cuál de las siguientes es la forma correcta de indicar que se selecciona una pestaña?**

  - a)

      ```html
      <div role="tablist">
        <button role="tab" aria-selecting="true">Tab 1</button>
        <button role="tab" aria-selecting="false">Tab 2</button>
        <button role="tab" aria-selecting="false">Tab 3</button>
      </div>
      ```

  - b)

      ```html
      <div role="tablist">
        <button role="tab" aria-selects="true">Tab 1</button>
        <button role="tab" aria-selects="false">Tab 2</button>
        <button role="tab" aria-selects="false">Tab 3</button>
      </div>
      ```

  - c)

      ```html
      <div role="tablist">
        <button role="tab" aria-select="true">Tab 1</button>
        <button role="tab" aria-select="false">Tab 2</button>
        <button role="tab" aria-select="false">Tab 3</button>
      </div>
      ```

  - [x] d)
  
      ```html
      <div role="tablist">
        <button role="tab" aria-selected="true">Tab 1</button>
        <button role="tab" aria-selected="false">Tab 2</button>
        <button role="tab" aria-selected="false">Tab 3</button>
      </div>
      ``` //correcto

- **10.¿Para qué se usa el atributo `aria-expanded`?**

  - a) Se usa para indicar que un elemento está deshabilitado solo para personas que usan tecnologías de asistencia, como lectores de pantalla.
  - b) Se usa para indicar que un elemento interactivo activará un elemento emergente cuando se active.
  - [x] c) Se utiliza para transmitir el estado de una función de alternancia (o divulgación) a los usuarios del lector de pantalla. //correcto
  - d) Se usa para indicar si un elemento está en el estado comprobado.

- **11.¿Cuál de las siguientes es una función ARIA role de uso común?**

  - a) `role="hidden"`

  - [x] b) `role="tab"` //correcto

  - c) `role="live"`

  - d) `role="document"`

- **12.¿Cuáles son los cuatro principios detrás de las Pautas de Accesibilidad al Contenido Web?**

  - a) Persistent, Operable, Understandable, and Robust.
  - b) Perceivable, Operable, Units, and Robust.
  - [x] c) Perceivable, Operable, Understandable, and Robust. //correcto
  - d) Perceivable, Operations, Understandable, and Robust.

- **13.¿Cuál de las siguientes es la forma correcta de informar a los usuarios del lector de pantalla que el botón Editar está deshabilitado y no se puede interactuar con él?**

  - [x] a) //correcto
  
    ```htm
    <div role="button" tabindex="-1" aria-disabled="true">Edit</div>
    ```

  - b)
  
    ```htm
    <div role="button" tabindex="-1" aria-disable="true">Edit</div>
    ```

  - c)
  
    ```html
    <div role="button" tabindex="-1" aria-disables="true">Edit</div>
    ```

  - d)
  
    ```html
    <div role="button" tabindex="-1" aria-disabling="true">Edit</div>
    ```

- **14.¿Cuál de los siguientes atributos se usa para definir un método abreviado de teclado para un elemento?**

  - a) `provideaccesskey`
  - b) `tabindexkey`
  - [x] c) `accesskey` //correcto
  - d) `accessingkey`

- **15.¿Para qué se utilizan los landmark roles?**

  - a) Se utilizan para agregar etiquetas solo a entradas de texto y correo electrónico.

  - b) Se usan solo para agregar etiquetas a tablas y formularios.

  - c) Estos roles se utilizan para etiquetar la sección formularios de una página web.

  - [x] d) Se utilizan para clasificar y etiquetar las secciones principales de una página web. //correcto

- **16.¿Cuál de las siguientes es la forma correcta de indicar si un elemento está en el checked state?**

  - a)

      ```html
      <div role="checkbox" aria-checking="true" tabindex="0">Checkbox</div>
      ```

  - b)

      ```html
      <div role="checkbox" aria-checks="true" tabindex="0">Checkbox</div>
      ```

  - [x] c)  //correcto

      ```html
      <div role="checkbox" aria-checked="true" tabindex="0">Checkbox</div>
      ```

  - d)

      ```html
      <div role="checkbox" aria-check="true" tabindex="0">Checkbox</div>
      ```

- **17.¿Cuál de las siguientes funciones se utiliza para las ventanas emergentes?**

  - a) `send`

  - [x] b) `dialog` //correcto

  - c) `hidden`

  - d) `notify`

- **18.¿Para qué se utiliza el software de reconocimiento de voz?**

  - [x] a) Estas herramientas permiten que las personas con discapacidades usen su voz para pasar comandos para realizar diversas tareas, como escribir correos electrónicos. //correcto
  - b) Estas herramientas permiten que las personas con discapacidades usen su voz para iniciar y detener animaciones.
  - c) Estas herramientas permiten que las personas con discapacidades usen su voz para agregar formularios a una página web.
  - d) Estas herramientas permiten que las personas con discapacidades usen su voz para agregar tablas a una página web.

- **19.¿Cuál de las siguientes es la forma correcta de ocultar un icono de la tecnología de asistencia?**

  - a)

      ```html
      <button>
        <i class="fa-solid fa-gear" aria-hides="true"></i>
        <span class="label">Settings</span>
      </button>
      ```

  - b)

      ```html
      <button>
        <i class="fa-solid fa-gear" aria-live="true"></i>
        <span class="label">Settings</span>
      </button>
      ```

  - [x] c)  //correcto

      ```html
      <button>
        <i class="fa-solid fa-gear" aria-hidden="true"></i>
        <span class="label">Settings</span>
      </button>
      ```

  - d)

      ```html
      <button>
        <i class="fa-solid fa-gear" aria-region="true"></i>
        <span class="label">Settings</span>
      </button>
      ```

- **20.¿Cuál de los siguientes atributos se utiliza para crear una relación programática entre un elemento que controla la presencia de otro elemento en la página?**

  - a) `aria-controlled`
  - b) `aria-controlling`
  - [x] c) `aria-controls` //correcto
  - d) `aria-control`
