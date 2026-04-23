# Trabajar con el comportamiento de los operadores

En esata sección, aprenderás a trabajar con el comportamiento de los operadores. Esto incluye aprender a usar operadores de comparación, operadores lógicos y operadores de asignación.

---

## Tema 1: ¿Cómo funciona la precedencia de los operadores?

Si escribes una expresión con varios operadores en JavaScript, ¿cómo decide JavaScript cuál evaluar primero? Aquí es donde entra en juego la precedencia de los operadores. Exploremos la precedencia de los operadores en detalle con ejemplos de código, y también qué sucede cuando los operadores tienen la misma precedencia.

La precedencia de los operadores determina el orden en el que se evalúan las operaciones en una expresión. Los operadores con mayor precedencia se evalúan antes que los que tienen menor precedencia. Piensa en la precedencia de los operadores como en las matemáticas, donde la división y la multiplicación se realizan antes que la suma y la resta.

Sin seguir esta regla, las ecuaciones básicas te darían una respuesta incorrecta. JavaScript funciona de la misma manera. Tiene sus propias reglas sobre qué operadores van primero, segundo, y así sucesivamente. Por ejemplo, echa un vistazo a la siguiente expresión:

- **Example code**

  ```js
  const result = 2 + 3 * 4;

  console.log(result); // 14
  ```

Si JavaScript evaluara esta expresión de izquierda a derecha, cabría esperar que `2 + 3 = 5` y, a continuación, `5 * 4 = 20`. Sin embargo, dado que la multiplicación tiene mayor prioridad que la suma, JavaScript evalúa primero la parte `3 * 4`, lo que da como resultado `2 + 12 = 14`.

A veces, es posible que quieras que ciertas partes de tu expresión se ejecuten primero, independientemente de las reglas de precedencia. Puedes usar paréntesis, `()`, para hacer esto. Todo lo que esté dentro de los paréntesis se evalúa primero, sin importar qué. Hagamos que la parte `2 + 3` del ejemplo anterior se evalúe primero:

- **Example code**

  ```js
  const result = (2 + 3) * 4;

  console.log(result); // 20
  ```

En el ejemplo anterior, los paréntesis obligan a JavaScript a calcular primero `2 + 3` y, a continuación, multiplicar el resultado por `4`. Esto da como resultado `20` en lugar de `14`.

El operador de división también tiene mayor prioridad que la suma o la resta:

- **Example code**

  ```js
  const result = 2 + 6 / 3;

  console.log(result); // 4
  ```

Si JavaScript evaluara esta expresión de izquierda a derecha, cabría esperar que `2 + 6 = 8` y, a continuación, `8 / 3 = 2,67`. Pero, dado que la división tiene mayor prioridad que la suma, JavaScript evalúa primero la división: `6 / 3 = 2`, y luego suma `2 + 2`, lo que da como resultado `4`.

Por lo tanto, tanto en la multiplicación como en la división, esas operaciones siempre se realizarán antes que la suma y la resta, a menos que utilices paréntesis para cambiar el orden. Entonces, ¿qué sucede si los operadores tienen la misma prioridad? JavaScript utiliza la asociatividad para determinar el orden en que evaluarlos.

La asociatividad es lo que le indica a JavaScript si debe evaluar los operadores de izquierda a derecha o de derecha a izquierda. Para la mayoría de los operadores, como la suma y la multiplicación, la asociatividad es de izquierda a derecha. Por lo tanto, JavaScript procesa estos desde el extremo izquierdo de la expresión hacia la derecha:

- **Example code**

  ```js
  const result = 10 - 2 + 3;

  console.log(result); // 11
  ```

Primero, `10 - 2 = 8`; luego, `8 + 3 = 11`. En este caso, JavaScript evalúa la expresión de izquierda a derecha. Algunos operadores, como el de asignación (`=`), son asociativos de derecha a izquierda. Esto significa que se evalúa primero el lado derecho de la expresión:

- **Example code**

  ```js
  let a, b;
  a = b = 5;

  console.log(a); // 5
  console.log(b); // 5
  console.log(a + b); // 10
  ```

En el ejemplo anterior, JavaScript asigna primero el valor `5` a `b` y, a continuación, asigna el valor de `b` (que ahora es `5`) a `a`.

El operador exponencial también es asociativo de derecha a izquierda:

- **Example code**

  ```js
  const result = 2 ** 3 ** 2;

  console.log(result); // 512
  ```

En primer lugar, JavaScript evalúa `3 ** 2`, que es igual a 9; a continuación, evalúa `2 ** 9`, que es igual a `512`. Si el operador exponencial tuviera asociatividad de izquierda a derecha, JavaScript habría calculado primero `2 ** 3` para obtener `8` y, a continuación, `8 ** 2` para obtener `64`.

---

## Cuestionario 1

1. **¿En qué se diferencia la precedencia de los operadores en JavaScript de la matemática?**

    - [ ] a) La suma se realiza antes que la multiplicación y la división.
    - [x] b) La división y la multiplicación se realizan antes que la suma y la resta, igual que en matemática. //correcto
    - [ ] c) Todas las operaciones se realizan en el orden en que aparecen.
    - [ ] d) La resta tiene precedencia sobre todas las demás operaciones.

2. **¿Cómo se puede anular la precedencia de los operadores en JavaScript?**

    - [ ] a) Utilizando el operador de suma (`+`) para cambiar el orden de las operaciones.
    - [x] b) Utilizando paréntesis para forzar que ciertas partes de la expresión se evalúen primero. //correcto
    - [ ] c) Invirtiendo el orden de los operadores en la expresión.
    - [ ] d) Realizando todas las operaciones de izquierda a derecha, independientemente de la precedencia.

3. **¿Cómo evalúa JavaScript las expresiones con el operador exponencial (`**`)?**

    - [ ] a) De izquierda a derecha.
    - [x] b) De derecha a izquierda, lo que significa que evalúa primero la elevación a la potencia situada más a la derecha. //correcto
    - [ ] c) Multiplicando la base por sí misma el número de veces indicado.
    - [ ] d) Summando primero los exponentes y calculando después el resultado.

[☝️](#trabajar-con-el-comportamiento-de-los-operadores)

---

## Tema 2: ¿Cómo funcionan los operadores de incremento y decremento?

Si estás trabajando con números y necesitas aumentar o disminuir un valor en uno, los operadores de incremento y decremento te facilitan la tarea. Veámoslo de forma sencilla.

Los operadores de incremento y decremento se representan con `++` y `--`, respectivamente. Ambos te permiten ajustar el valor de una variable en `1`.

En lugar de escribir algo como `x = x + 1` o `x = x - 1`, puedes simplemente usar `x++` para sumar `1`, o `x--` para restar `1`. Es más rápido, más limpio y más fácil de leer.

Hay un matiz en el funcionamiento de los operadores de incremento y decremento: existen en dos formas, prefijo y posfijo, y la diferencia radica en cuándo se actualiza el valor. Para el operador de incremento, el prefijo es `++x` y el posfijo es `x++`.

El prefijo (`++x`) aumenta primero el valor de la variable y luego devuelve un nuevo valor. El posfijo (`x++`) devuelve primero el valor actual de la variable y luego lo aumenta:

- **Example code**

  ```js
  let x = 5;
  
  console.log(++x); // 6
  console.log(x); // 6
  ```

En el código anterior, `++x` significa "incrementa `x` primero y luego utilízalo". Por lo tanto, cuando registras `++x`, obtienes inmediatamente el valor incrementado, que es `6`.

Ahora, veamos un ejemplo en el que se utiliza el sintaxis posfijo:

- **Example code**

  ```js
  let y = 5;

  console.log(y++); // 5
  console.log(y); // 6
  ```

En este ejemplo, `y++` significa "usa `y` primero y luego incrémentala". Cuando registras `y++`, obtienes `5`, pero `y` pasa a ser `6` después de esa línea de código.

El operador de decremento hace lo mismo que el de incremento, excepto que disminuye el valor en `1`. De nuevo, hay dos formas: el prefijo (`--x`) disminuye primero el valor de la variable y luego devuelve el nuevo valor. Y el posfijo (`x--`) devuelve primero el valor actual y luego lo disminuye:

- **Example code**

  ```js
  let x = 5;
  console.log(--x); // 4
  console.log(x); // 4
  
  let y = 5;
  console.log(y--); // 5
  console.log(y); // 4
  ```

Entonces, ¿qué deberías usar: prefijo o posfijo? En muchos casos, no importa cuál uses. Ambos cumplen su función. Sin embargo, si vas a utilizar el valor inmediatamente en una expresión, la diferencia cobra importancia. Veamos este ejemplo:

- **Example code**

  ```js
  let a = 5;
  let b = ++a;
  console.log(b); // 6 (a was incremented before assignment)
  
  let c = 5;
  let d = c++;
  console.log(d); // 5 (c was incremented after assignment)
  ```

Por lo tanto, si necesitas el valor actualizado de inmediato, utiliza el prefijo. Si prefieres obtener primero el valor actual y no te importa el incremento hasta más adelante, opta por el sufijo.

---

## Cuestionario 2

1. **¿Qué operadores de JavaScript te permiten incrementar el valor de una variable en 1?**

    - [ ] a) `+` y `-`
    - [ ] b) `*` y `/`
    - [x] c) `++` y `--` //correcto
    - [ ] d) `&&` y `||`

2. **¿Qué forma del operador de incremento o decremento debes usar si necesitas el valor actualizado de inmediato en una expresión?**

    - [ ] a) Posfijo (`valor++` o `valor--`).
    - [x] b) Prefijo (`++valor` o `--valor`). //correcto
    - [ ] c) Tanto prefijo como posfijo, da igual.
    - [ ] d) Ninguno; en su lugar, debes usar la suma o la resta.

3. **¿En qué formas se presentan los operadores de incremento y decremento en JavaScript?**

    - [x] a) Prefijo y posfijo. //correcto
    - [ ] b) Suma y resta.
    - [ ] c) Multiplicación y división.
    - [ ] d) Izquierda y derecha.

[☝️](#trabajar-con-el-comportamiento-de-los-operadores)

---

## Tema 3: ¿Qué son los operadores de asignación compuestos en JavaScript y cómo funcionan?

En JavaScript, todos los operadores aritméticos tienen una forma de asignación compuesta. Los operadores de asignación compuestos ofrecen una forma concisa de realizar una operación sobre una variable y, a continuación, almacenar el resultado en esa misma variable. Combinan la operación y la asignación en una forma más breve, como `x += y`, que equivale a escribir `x = x + y`, pero sin repetir el nombre de la variable. En lugar de escribir algo como esto:

- **Example code**

  ```js
  let num = 5;
  num = num + 2;
  
  console.log(num); // 7
  ```

Puedes escribir algo como esto:

- **Example code**

  ```js
  let num = 5;
  num += 2;
  
  console.log(num); // 7
  ```

Fíjate en cómo `num += 2` combina los pasos de suma y asignación en uno solo. Esto ahorra tiempo y reduce la complejidad del código. Profundicemos en los operadores de asignación compuestos más comunes en JavaScript.

Como ya has visto, el operador `+=` te permite sumar un valor a una variable existente. Se conoce como el operador de asignación por suma. El operador de asignación por suma toma el valor actual de la variable, le suma el número especificado y luego asigna el resultado de nuevo a la variable:

- **Example code**

  ```js
  let total = 10;
  total += 5;
  
  console.log(total); // 15
  ```

Como te puedes imaginar, existe un operador de asignación de resta que se denota con `-=`. El operador de asignación de resta resta el valor especificado del valor actual de la variable y asigna el nuevo valor a la variable:

- **Example code**

  ```js
  let score = 20;
  score -= 7;
  
  console.log(score); // 13
  ```

Si no hubieras utilizado la asignación de resta, habrías hecho algo como esto:

- **Example code**

  ```js
  let score = 20;
  score = score - 7;
  
  console.log(score); // 13
  ```

El operador de asignación de multiplicación se representa con `*=`. Multiplica el valor actual de la variable por el número especificado y lo reasigna a la variable:

- **Example code**

  ```js
  let points = 5;
  points *= 3;
  
  console.log(points); // 15
  ```

Por último, existe un operador de asignación de división que se denota con `/=`. Al igual que los anteriores, te permite dividir el valor actual de una variable por un número que especifiques y, a continuación, asignar el resultado a la variable:

- **Example code**

  ```js
  let balance = 100;
  balance /= 4;
  
  console.log(balance); // 25
  ```

Recuerda que en JavaScript hay un operador de asignación compuesto para cada operador. Así pues, además de los cuatro ya mencionados, también tenemos:

- El operador de asignación de resto (`%=`), que divide una variable por el número especificado y asigna el resto a la variable.

- El operador de asignación exponencial (`**=`), que eleva una variable a la potencia del número especificado y reasigna el resultado a la variable.

- El operador de asignación AND bit a bit (`&=`), que realiza una operación AND bit a bit con el número especificado y reasigna el resultado a la variable.

- El operador de asignación OR bit a bit (`|=`), que realiza una operación OR bit a bit con el número especificado y reasigna el resultado a la variable.
