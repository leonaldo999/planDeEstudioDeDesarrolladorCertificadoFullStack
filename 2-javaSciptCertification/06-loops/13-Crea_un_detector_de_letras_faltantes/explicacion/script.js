function fearNotLetter(str) {
  for (let i = 1; i < str.length; i++) {
    let prevCode = str.charCodeAt(i - 1);
    let currentCode = str.charCodeAt(i);

    // Si la diferencia no es 1, significa que falta una letra
    if (currentCode - prevCode > 1) {
      return String.fromCharCode(prevCode + 1);
    }
  }
  return undefined;
}

// Evento para detectar la letra faltante cuando se presiona el botón
document.getElementById("checkButton").addEventListener("click", () => {
  const inputStr = document.getElementById("inputLetters").value.trim();
  const missingLetter = fearNotLetter(inputStr);

  const resultElement = document.getElementById("result");
  if (missingLetter === undefined) {
    resultElement.textContent = "No falta ninguna letra.";
  } else {
    resultElement.textContent = `La letra faltante es: "${missingLetter}"`;
  }
});
