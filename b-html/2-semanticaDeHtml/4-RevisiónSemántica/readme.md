# Revisión semántica

Antes de que te examinen sobre HTML semántico, primero debes repasar los conceptos.

Abre esta página para repasar los elementos `em`, `strong`, `blockquote`, `address` y otros elementos HTML semánticos.

## Importancia del HTML semántico

- **Jerarquía estructural de los elementos de encabezado:** Es importante usar el elemento de encabezado correcto para mantener la jerarquía estructural del contenido. El elemento `h1` es el nivel superior del encabezado y el elemento `h6` es el inferior.

- **Elementos HTML de presentación:** Elementos que definen la apariencia del contenido. Por ejemplo, los elementos obsoletos "`center`", "`big`" y "`font`".

- **Elementos HTML semánticos:** Elementos que contienen significado y estructura. Por ejemplo, "`header`", "`nav`" y "`figure`".

## Elementos HTML semánticos

- **Elemento de encabezado(`header`):** define el encabezado de un documento o sección.

- **Elemento principal(`main`):** contiene el contenido principal de la página web.

- **Elemento de sección de navegación (`nav`):** representa una sección con enlaces de navegación.

- **Elemento de `figura`:** contiene ilustraciones y diagramas.

- **Elemento de énfasis (`em`):** marca el texto con énfasis.
  
  - **Codigo ejemplo**

      ```html
        <p>
          Never give up on <em>your</em> dreams.
        </p>
      ```

- **Elemento de texto idiomático (`i`):** se utiliza para resaltar voces o modos alternativos, términos idiomáticos de otro idioma, términos técnicos y pensamientos.

  - **Codigo ejemplo**

      ```html
          <p>
            There is a certain <i lang="fr">je ne sais quoi</i> in the air.
          </p>
      ```

  El atributo `lang`, dentro de la etiqueta open `i`, se utiliza para especificar el idioma del contenido. En este caso, sería francés. El elemento `i` no indica si el texto es importante o no, solo indica que es diferente del texto circundante.

- **Elemento de fuerte importancia (`strong`):** marca el texto que tiene fuerte importancia.

  - **Codigo ejemplo**

      ```html
          <p>
            <strong>Warning:</strong> 
            This product may cause allergic reactions.
          </p>
      ```

- **Elemento "Llamar la atención a" (`b`):** se utiliza para dirigir la atención a texto que no es importante para el significado del contenido. Se suele usar para destacar palabras clave en resúmenes o nombres de productos en reseñas.

  - **Codigo ejemplo**

      ```html
          <p>
            We tested several products, including the <b>SuperSound 3000</b> for audio quality, the <b>QuickCharge Pro</b> for fast charging, and the <b>Ecoclean Vacuum</b> for cleaning. The first two performed well, but the <b>Ecoclean Vacuum</b> did not meet expectations.
          </p>
      ```

- **Elemento de lista de descripción (`dl`):** se utiliza para representar una lista de agrupaciones de descripción de términos.

- **Elemento término de descripción (`dt`):** se utiliza para representar el término que se está definiendo.

- **Elemento Detalles de descripción (`dd`):** se utiliza para representar la descripción del término.

  - **Codigo ejemplo**

      ```html
          <dl>
            <dt>HTML</dt>
            <dd>HyperText Markup Language</dd>
            <dt>CSS</dt>
            <dd>Cascading Style Sheets</dd>
          </dl>
      ```

- **Elemento de cita en bloque (`blockquote`):** se utiliza para representar una sección citada de otra fuente. Este elemento tiene un atributo cite. El valor de este atributo es la URL de la fuente.

  - **Codigo ejemplo**

      ```html
          <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
            "Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?"
          </blockquote>
      ```

- **Elemento de cita (`cite`):** se utiliza para atribuir visualmente la fuente de la obra referenciada. Marca el título de la referencia.

  - **Codigo ejemplo**

      ```html
        <div>
          <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
            "Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?"
          </blockquote>
          <p>
            -Quincy Larson, <cite>How to learn to Code and Get a Developer Job [Full Book].</cite>
          </p>
        </div>
      ```

- **Elemento de cita en línea (`q`):** se utiliza para representar una cita corta en línea.

  - **Codigo ejemplo**

      ```html
      <p>
        As Quincy Larson said,
        <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">
            Momentum is everything.
        </q>
      </p>
      ```

- **Elemento de abreviatura (`abbr`):** se utiliza para representar una abreviatura o acrónimo. Para que los usuarios comprendan qué es la abreviatura o acrónimo, puede mostrar su forma completa, una descripción legible, con el atributo `title`.

  - **Codigo ejemplo**

      ```html
      <p>
        <abbr title="HyperText Markup Language">HTML</abbr> is the foundation of the web.
      </p>
      ```

- **Elemento de dirección de contacto (`address`):** se utiliza para representar la información de contacto.

- **Elemento de hora (`time`):** se utiliza para representar una fecha u hora. El atributo `datetime` se utiliza para traducir fechas y horas a un formato legible por máquina.

  - **Codigo ejemplo**

      ```html
      <p>
        The reservations are for the <time datetime="20:00">20:00 </time>
      </p>
      ```

- **Atributo de fecha (`datetime`) ISO 8601:** se utiliza para representar fechas y horas en un formato legible por máquina. El formato estándar es `AAAA-MM-DDThh:mm:ss`, con la `T` mayúscula como separador entre la fecha y la hora.

- **Elemento superíndice (`sup`):** se utiliza para representar texto en superíndice. Los usos comunes del elemento `sup` incluyen exponentes, superíndices y números ordinales.

  - **Codigo ejemplo**

      ```html
      <p>
        2<sup>2</sup> (2 squared) is 4.
      </p>
      ```

- **Elemento subíndice (`sub`):** se utiliza para representar texto en subíndice. Entre los usos más comunes de este elemento se incluyen fórmulas químicas, notas al pie y subíndices variables.

  - **Codigo ejemplo**

      ```html
      <p>
        CO<sub>2</sub>
      </p>
      ```

- **Elemento de código en línea (`code`):** se utiliza para representar un fragmento de código informático.

- **Elemento de texto preformateado (`pre`):** representa texto preformateado.

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

- **Elemento de anotación no articulada (``u``):** se utiliza para representar un fragmento de texto en línea que debe representarse de forma que indique que tiene una anotación no textual.

  - **Codigo ejemplo**

      ```html
      <p>
        You can use the unarticulated annotation element to highlight
        <u>inccccort</u> <u>spling</u> <u>issses</u>.
      </p>
      ```

- **Elemento de anotación Ruby (`ruby`):** se utiliza para anotar texto con explicaciones de pronunciación o significado. Un ejemplo de uso es para tipografía de Asia Oriental.

- **Elemento de paréntesis de respaldo Ruby (`rp`):** se utiliza como alternativa para navegadores que no admiten la visualización de anotaciones Ruby.

- **Elemento de texto Ruby (`rt`):** se utiliza para indicar texto para la anotación Ruby. Generalmente se usa para detalles de pronunciación o traducción en tipografía de Asia Oriental.

  - **Codigo ejemplo**

      ```html
      <ruby>
        明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp>
      </ruby>
      ```

- **Elemento tachado(`s`):** se utiliza para representar contenido que ya no es preciso o relevante.

  - **Codigo ejemplo**

      ```html
      <p>
        <s>Tomorrow's hike will be meeting at noon.</s>
      </p>
      <p>
        Due to unforeseen weather conditions, the hike has been cancelled.
      </p>
      ```
