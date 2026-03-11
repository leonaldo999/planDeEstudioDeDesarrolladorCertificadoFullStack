# Cuestionario sobre selectores de atributos CSS

Para aprobar el cuestionario, debes responder correctamente al menos 9 de las 10 preguntas siguientes.

---

1. **¿Para qué se utilizan los selectores de atributos CSS?**
  
   - [ ] a) Para aplicar estilos a los elementos en función de su elemento padre.
   - [ ] b) Para aplicar estilos a los elementos en función del nombre de su etiqueta.
   - [ ] c) Para aplicar estilos a los elementos en función del nombre de su clase.
   - [x] d) Para aplicar estilos a los elementos en función de sus atributos. // ❎

2. **¿Cuál de los siguientes elementos NO será seleccionado por este selector CSS?**

    ```css
    [title~="flower"] {
      border: 5px solid yellow;
    }
    ```

   - [ ] a)
          ```html
          <img src="img2.jpg" title="flower" width="150" height="113">
          ```
   - [x] b) // ❎
          ```html
          <img src="img2.jpg" title="flowers" width="150" height="113">
          ```
   - [ ] c)
          ```html
          <img src="img1.jpg" title="clematis flower" width="150" height="113">
          ```
   - [ ] d)
          ```html
          <img src="img2.jpg" title="FLOWERS of flower" width="150" height="113">
          ```

3. **¿Qué selector CSS coincide con todos los elementos `p` con un atributo `lang` establecido en `"fr"`?**
  
   - [ ] a)
          ```css
          p[lang-="fr"] { color: blue; }
          ```
   - [ ] b)
          ```css
          p[lang~="fr"] { color: blue; }
          ```
   - [x] c) // ❎
          ```css
          p[lang="fr"] { color: blue; }
          ```
   - [ ] d)
          ```css
          p[lang=="fr"] { color: blue; }
          ```

4. **¿Qué selector CSS coincide con todos los elementos `a` con un atributo `href`?**
  
   - [x] a) // ❎
          ```css
          a[href] { color: blue; }
          ```
   - [ ] b)
          ```css
          a { color: green; }
          ```
   - [ ] c)
          ```css
          a(href) { color: green; }
          ```
   - [ ] d)
          ```css
          a[href~=""] { color: green; }
          ```

5. **¿Qué selector CSS coincide con todas las listas ordenadas con números romanos en mayúscula?**
  
   - [ ] a)
          ```css
          ol[type="i"] { border-color: black; }
          ```
   - [x] b) // ❎
          ```css
          ol[type="I"] { border-color: black; }
          ```
   - [ ] c)
          ```css
          ol[type="a"] { border-color: black; }
          ```
   - [ ] d)
          ```css
          ol[type="A"] { border-color: black; }
          ```

6. **¿Para qué se utiliza normalmente el atributo `data-lang`?**
  
   - [ ] a) Para definir la codificación de caracteres del documento.
   - [ ] b) Para establecer el idioma de un elemento en función de su elemento padre.
   - [ ] c) Para especificar el idioma del documento.
   - [x] d) Para aplicar estilos a los elementos en función de este atributo de datos personalizado. // ❎

7. **¿Qué selector CSS debes usar para aplicar estilos a los elementos `img` solo si su atributo `alt` es igual a `"code"`?**
  
   - [ ] a)
          ```css
          img[alt~="code"] { border: 1px solid red; }
          ```
   - [ ] b)
          ```css
          img[alt*="code"] { border: 1px solid red; }
          ```
   - [ ] c)
          ```css
          img[alt=="code"] { border: 1px solid red; }
          ```
   - [x] d) // ❎
          ```css
          img[alt="code"] { border: 1px solid red; }
          ```

8. **¿Qué selector CSS coincide con las listas ordenadas con numeración numérica?**
  
   - [ ] a)
          ```css
          ol[type="a"] { color: purple; }
          ```
   - [x] b) // ❎
          ```css
          ol[type="1"] { color: purple; }
          ```
   - [ ] c)
          ```css
          ol[type="i"] { color: purple; }
          ```
   - [ ] d)
          ```css
          ol[type="I"] { color: purple; }
          ```

9. **¿Cuál de los siguientes selectores CSS utilizarías para aplicar estilos al elementos `a` con atributos `href` y `title`??**
  
   - [ ] a)
          ```css
          a[href] a[title] { text-decoration: underline dotted; }
          ```
   - [ ] b)
          ```css
          a[href]a[title] { text-decoration: underline dotted; }
          ```
   - [ ] c)
          ```css
          a[href].[title] { text-decoration: underline dotted; }
          ```
   - [x] d) // ❎
          ```css
          a[href][title] { text-decoration: underline dotted; }
          ```

10. **¿Qué selector CSS utilizarías si estuvieras desarrollando un sitio web para un restaurante y quisieras aplicar un estilo a todos los elementos con la clase `menu-item` que tienen un atributo `data-special`?**

    - [ ] a)
          ```css
          [data-special="menu-item"] { background-color: blue; }
          ```
    - [ ] b)
          ```css
          menu-item[data-special] { background-color: blue; }
          ```
    - [x] c) // ❎
          ```css
          .menu-item[data-special] { background-color: blue; }
          ```
    - [ ] d)
          ```css
          #menu-item[data-special] { background-color: blue; }
          ```
