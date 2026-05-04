// Enmascarador de correo electrónico

// Paso 1: Definir un correo electrónico de ejemplo para probar la función
const email = "constantino666@gmail.com";

// Paso 2: Definir la función maskEmail que toma un email como parámetro
const maskEmail = (email) => {
  // Paso 3: Encontrar la posición del símbolo '@' en el email
  const atIndex = email.indexOf('@');

  // Paso 4: Extraer la parte local del email (antes del '@')
  const localPart = email.slice(0, atIndex);

  // Paso 5: Extraer la parte del dominio del email (desde el '@' en adelante)
  const domainPart = email.slice(atIndex);

  // Paso 6: Enmascarar la parte local: mantener el primer y último carácter, reemplazar el resto con '*'
  const maskedLocalPart = localPart[0] + '*'.repeat(localPart.length - 2) + localPart.slice(-1);

  // Paso 7: Retornar el email enmascarado combinando la parte local enmascarada con la parte del dominio
  return maskedLocalPart + domainPart;
};

// Paso 8: Probar la función con el email de ejemplo y mostrar el resultado en la consola
console.log(maskEmail(email)); // "c************6@gmail.com"

// Paso 9: Probar la función con otros emails de ejemplo
console.log(maskEmail("apple.pie@example.com"));     // "a*******e@example.com"
console.log(maskEmail("freecodecamp@example.com"));  // "f**********p@example.com"
console.log(maskEmail("info@test.dev"));             // "i**o@test.dev"
console.log(maskEmail("user@domain.org"));           // "u**r@domain.org"

