# Desarrolla una aplicación de calificaciones

En este laboratorio, crearás una aplicación que calcule la calificación promedio de un estudiante y determine si ha aprobado o no el curso. La aplicación también proporcionará la calificación en letra correspondiente a la calificación numérica del estudiante.

---

## Historias de usuario

1. Debes tener una función llamada `getAverage` que tome como parámetro una matriz de calificaciones de exámenes y devuelva la calificación promedio.

2. Debes contar con una función llamada `getGrade` que tome como parámetro la calificación de un estudiante y devuelva una cadena que represente una calificación alfabética basada en dicha calificación. A continuación se muestran las calificaciones y sus correspondientes calificaciones alfabéticas:

    | Rango de puntuación | Calificación |
    | --- | --- |
    | `100` | `"A+"` |
    | `90 - 99` | `"A"` |
    | `80 - 89` | `"B"` |
    | `70 - 79` | `"C"` |
    | `60 - 69` | `"D"` |
    | `0 - 59` | `"F"` |

3. Debes tener una función llamada `hasPassingGrade` que tome una calificación como parámetro y devuelva `true` o `false`, dependiendo de si la calificación corresponde a una nota de aprobado.

4. La función `hasPassingGrade` debe utilizar la función `getGrade` para obtener la calificación en letra y usarla para determinar si la calificación es aprobatoria. Una calificación aprobatoria es cualquier calificación que no sea `"F"`.

5. Debes tener una función llamada `studentMsg` que tome como parámetros un array de calificaciones y la calificación de un estudiante. La función debe devolver una cadena con el siguiente formato:

    - `"Class average: average-goes-here. Your grade: grade-goes-here. You passed the course."`, si el estudiante aprobó el curso.
    - `"Class average: average-goes-here. Your grade: grade-goes-here. You failed the course."`, si el estudiante no aprobó la materia.

Reemplaza `average-goes-here` por el promedio de las calificaciones totales y `grade-goes-here` por la calificación del estudiante. Usa `getAverage` para obtener el promedio de las calificaciones y `getGrade` para obtener la calificación del estudiante.

---

## Solución

```js
const scores = [92, 88, 12, 99, 57, 63, 87, 80];
const studentScore = 85;

// Primero necesitas recorrer el arreglo.
function getAverage(score) {
  let sum = 0;
  for (let i = 0; i < score.length; i++) {
    sum = sum + score[i];
  }

  return sum / score.length;
}

// Ahora debes transformar una nota en una letra.
function getGrade(score) {
  if (score === 100) {
    return "A+"
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  const grade = getGrade(score);
  if (grade === "F") {
    return false;
  } else {
    return true;
  }
}

// Esta función reúne todo.
function studentMsg(scores, studentScore) {

  const average = getAverage(scores);
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);

  if (passed) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  }

  return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;

}

// console.log(getAverage([100, 90, 80]));
// console.log(getAverage([10, 20, 30]));
// console.log(getGrade(95));
// console.log(getGrade(75));
// console.log(hasPassingGrade(95));
// console.log(hasPassingGrade(40));
console.log(studentMsg(scores, 85));
console.log(studentMsg(scores, 40));
```
