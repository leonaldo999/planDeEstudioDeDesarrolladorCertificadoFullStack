// Notas --> scores
// Nota de estudiante --> studentScore
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