# Crear un verificador de requisitos para préstamos

*En este taller, repasarás las sentencias condicionales de JavaScript mediante la creación de una aplicación para verificar la elegibilidad para préstamos.*

---

## Paso 1

La aplicación verificará si el usuario es elegible para un préstamo para una casa dúplex, un automóvil o un departamento, en función de sus ingresos anuales y su puntaje crediticio. El puntaje crediticio es un número que representa tu capacidad para administrar el dinero prestado.

>> Para comenzar, crea las siguientes variables y valores.

| Variable Name | Value |
| ---- | ---- |
| `minIncomeForDuplex` | `60000` |
| `minCreditScoreForDuplex` | `700` |
| `minIncomeForCondo` | `45000` |
| `minCreditScoreForCondo` | `680` |
| `minIncomeForCar` | `30000` |
| `minCreditScoreForCar` | `650` |

- **Code**
  
  ```js
  const minIncomeForDuplex = 60000;
  const minCreditScoreForDuplex = 700;
  const minIncomeForCondo = 45000;
  const minCreditScoreForCondo = 680;
  const minIncomeForCar = 30000;
  const minCreditScoreForCar = 650;
  ```

---

## Paso 2

Cuando el usuario reúna los requisitos para obtener un préstamo, querrás mostrarle un mensaje en la consola.

Para ello, crearás una función en la que incluirás algunas comprobaciones que determinarán para qué préstamo reúne los requisitos el solicitante.

>> Crea una función `getLoanMessage` vacía con los parámetros `annualIncome` y `creditScore`.

- **Code**
  
  ```js
  const minIncomeForDuplex = 60000;
  const minCreditScoreForDuplex = 700;
  const minIncomeForCondo = 45000;
  const minCreditScoreForCondo = 680;
  const minIncomeForCar = 30000;
  const minCreditScoreForCar = 650;
  /* <==== code ====> */
  function getLoanMessage(annualIncome, creditScore) {
    
  }
  /* <==== code ====> */
  ```

---

## Paso 3

Para comprobar a qué préstamo tiene derecho un usuario en función de sus `annualIncome` (ingresos anuales) y su `creditScore` (puntuación crediticia), debes utilizar una instrucción `if/else if` o un operador ternario dentro de la función `getLoanMessage`. A continuación, devolverás el mensaje correspondiente en el bloque de cada condición.

>> Comenzando con el préstamo para dúplex, comprueba si `annualIncome` es mayor o igual que `minIncomeForDuplex` Y si `creditScore` es mayor o igual que `minCreditScoreForDuplex`.
>
>> Si esa condición es verdadera, entonces el solicitante es elegible para un préstamo para dúplex y para los otros préstamos. Por lo tanto, dentro de la comprobación, `return` el string `"You qualify for a duplex, condo, and car loan."`.

- **Code**
  
  ```js
  const minIncomeForDuplex = 60000;
  const minCreditScoreForDuplex = 700;
  const minIncomeForCondo = 45000;
  const minCreditScoreForCondo = 680;
  const minIncomeForCar = 30000;
  const minCreditScoreForCar = 650;

  function getLoanMessage(annualIncome, creditScore) {
    /* <==== code ====> */
    if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
      return "You qualify for a duplex, condo, and car loan.";
    }
    /* <==== code ====> */
  }
  ```

---

## Paso 4

>> Si los ingresos anuales del solicitante son iguales o superiores a `minIncomeForCondo`, Y si su puntaje crediticio es igual o superior a `minCreditScoreForCondo`, entonces cumple los requisitos para obtener un préstamo para un departamento y un automóvil.

Comprueba si eso es cierto en la función `getLoanMessage`. Si es así, `return` el string `"You qualify for a condo and car loan."`.

- **Code**
  
  ```js
  const minIncomeForDuplex = 60000;
  const minCreditScoreForDuplex = 700;
  const minIncomeForCondo = 45000;
  const minCreditScoreForCondo = 680;
  const minIncomeForCar = 30000;
  const minCreditScoreForCar = 650;

  function getLoanMessage(annualIncome, creditScore) {
    if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
      return "You qualify for a duplex, condo, and car loan.";
    /* <==== code ====> */
    } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
      return "You qualify for a condo and car loan.";
    }
    /* <==== code ====> */
  }
  ```

---

## Paso 5

>> Ahora, debes comprobar si el solicitante cumple los requisitos para obtener un préstamo para la compra de un automóvil. Si es así, devuelve el string `"You qualify for a car loan."`.

- **Code**
  
  ```js
  const minIncomeForDuplex = 60000;
  const minCreditScoreForDuplex = 700;
  const minIncomeForCondo = 45000;
  const minCreditScoreForCondo = 680;
  const minIncomeForCar = 30000;
  const minCreditScoreForCar = 650;

  function getLoanMessage(annualIncome, creditScore) {
    if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
      return "You qualify for a duplex, condo, and car loan.";
    } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
      return "You qualify for a condo and car loan.";
    /* <==== code ====> */
    } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
      return "You qualify for a car loan.";
    }
    /* <==== code ====> */
  }
  ```

---

## Paso 6

>> Si los ingresos anuales y la calificación crediticia del solicitante son inferiores a `minIncomeForCar` y `minCreditScoreForCar`, respectivamente, entonces no cumple los requisitos para obtener ningún préstamo. Por lo tanto, devuelve el string `"You don't qualify for any loans."`.

- **Code**
  
  ```js
  const minIncomeForDuplex = 60000;
  const minCreditScoreForDuplex = 700;
  const minIncomeForCondo = 45000;
  const minCreditScoreForCondo = 680;
  const minIncomeForCar = 30000;
  const minCreditScoreForCar = 650;

  function getLoanMessage(annualIncome, creditScore) {
    if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
      return "You qualify for a duplex, condo, and car loan.";
    } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
      return "You qualify for a condo and car loan.";
    } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
      return "You qualify for a car loan.";
    /* <==== code ====> */
    } else {
      return "You don't qualify for any loans.";
    }
    /* <==== code ====> */
  }
  ```

---

## Paso 7

Ahora es el momento de probar tu función `getLoanMessage`.

>> Utiliza la tabla siguiente para crear 4 variables y sus valores:

| Variable Name | Value |
| ------ | ------ |
| `duplexLoanMsg` | `getLoanMessage(85000, 850)` |
| `condoLoanMsg` | `getLoanMessage(65000, 690)` |
| `carLoanMsg` | `getLoanMessage(45000, 660)` |
| `noLoanMsg` | `getLoanMessage(25000, 550)` |

> A continuación, registra cada variable en la consola para ver los mensajes.

- **Code**
  
  ```js
  const minIncomeForDuplex = 60000;
  const minCreditScoreForDuplex = 700;
  const minIncomeForCondo = 45000;
  const minCreditScoreForCondo = 680;
  const minIncomeForCar = 30000;
  const minCreditScoreForCar = 650;

  function getLoanMessage(annualIncome, creditScore) {
    if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
      return "You qualify for a duplex, condo, and car loan.";
    } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
      return "You qualify for a condo and car loan.";
    } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
      return "You qualify for a car loan.";
    } else {
      return "You don't qualify for any loans.";
    }
  }
    /* <==== code ====> */
    const duplexLoanMsg = getLoanMessage(85000, 850);
    const condoLoanMsg = getLoanMessage(65000, 690);
    const carLoanMsg = getLoanMessage(45000, 660);
    const noLoanMsg = getLoanMessage(25000, 550);

    
    /* <==== code ====> */


  ```

---

**¡Y con esto, tu proyecto de verificador de elegibilidad para préstamos está listo!**
