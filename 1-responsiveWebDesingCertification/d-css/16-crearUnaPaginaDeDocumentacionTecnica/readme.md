# Crear una página de documentación técnica

---

## Historias de usuario

1. Se puede observar un elemento `main` con el identificador correspondiente `id="main-doc"`, que contiene el contenido principal de la página (documentación técnica).

2. Dentro del elemento `#main-doc`, se pueden ver varios elementos de `section`, cada uno con la clase `main-section`. Debe haber un mínimo de cinco.

3. El primer elemento dentro de cada `.main-section` debe ser un elemento de `header`, que contenga texto que describa el tema de esa sección.

4. Cada elemento de `section` con la clase `main-section` también debe tener un `id` que corresponda con el texto de cada `header` que contiene. Cualquier espacio debe sustituirse por guiones bajos (por ejemplo, la sección que contiene el encabezado _"JavaScript y Java"_ debe tener un `id="JavaScript_and_Java"`).

5. Los elementos `.main-section` deben contener al menos diez elementos `p` en total (no cada uno).

6. Los elementos `.main-section` deben contener al menos cinco elementos `code` en total (no en cada uno).

7. Los elementos `.main-section` deben contener al menos cinco elementos `li` en total (no en cada uno).

8. Puedes ver un elemento `nav` con un `id="navbar"`.

9. El elemento navbar debe contener un elemento `header` que incluya texto que describa el tema de la documentación técnica.

10. Además, la barra de navegación debe contener elementos de enlace (`a`) con la clase `nav-link`. Debe haber uno por cada elemento con la clase `main-section`.

11. El elemento `header` en `#navbar` debe aparecer antes que cualquier elemento de enlace (`a`) en la barra de navegación.

12. Cada elemento con la clase `nav-link` debe contener texto que corresponda al texto del `hader` dentro de cada `section` (por ejemplo, si tienes una sección/encabezado "Hello world", tu barra de navegación debe tener un elemento que contenga el texto "Hello world").

13. Al hacer clic en un elemento de la barra de navegación, la página debe navegar a la sección correspondiente del elemento `#main-doc` (por ejemplo, si haces clic en un elemento `.nav-link` que contiene el texto "Hello world", la página navega a un elemento de `section` con ese id y que contiene el encabezado correspondiente).

14. En dispositivos de tamaño normal (computadoras portátiles, de escritorio), el elemento con `id="navbar"` debe mostrarse en el lado izquierdo de la pantalla y debe estar siempre visible para el usuario.

15. Tu documentación técnica debe utilizar al menos una consulta de medios.

---

>[!NOTE] Asegúrate de vincular tu hoja de estilos en tu HTML y aplicar tu CSS.
