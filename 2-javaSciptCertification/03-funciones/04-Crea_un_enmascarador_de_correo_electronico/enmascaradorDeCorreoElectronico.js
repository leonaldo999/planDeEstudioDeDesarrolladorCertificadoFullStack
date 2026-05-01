const email = "constantino666@gmail.com";

const maskEmail = (email) => {
  const atIndex = email.indexOf('@');
  const localPart = email.slice(0, atIndex);
  const domainPart = email.slice(atIndex);

  const maskedLocalPart = localPart[0] + '*'.repeat(localPart.length - 2) + localPart.slice(-1);

  return maskedLocalPart + domainPart;
};

console.log(maskEmail(email)); // "c************6@gmail.com"

console.log(maskEmail("apple.pie@example.com"));     // "a*******e@example.com"
console.log(maskEmail("freecodecamp@example.com"));  // "f**********p@example.com"
console.log(maskEmail("info@test.dev"));             // "i**o@test.dev"
console.log(maskEmail("user@domain.org"));           // "u**r@domain.org"

/*
Explicación paso a paso:

- email.indexOf('@') encuentra la posición del @
- email.slice(0, atIndex) obtiene la parte local (antes del @)
- email.slice(atIndex) obtiene la parte del dominio (incluyendo el @)
- localPart[0] toma el primer carácter
- '*'.repeat(localPart.length - 2) crea los asteriscos para los caracteres del medio
- localPart.slice(-1) toma el último carácter
*/