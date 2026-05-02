// Conteo de Cartas

let count = 0;

function cardCounter(card) {
  // Cartas bajas (2-6): count +1
  if (card >= 2 && card <= 6) {
    count++;
  }
  // Cartas medias (7-9): sin cambio
  else if (card >= 7 && card <= 9) {
    // count no cambia
  }
  // Cartas altas (10, J, Q, K, A): count -1
  else {
    count--;
  }

  // Retorna el resultado según el valor de count
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(cardCounter(2));  // "1 Bet"
console.log(cardCounter(3));  // "2 Bet" 
console.log(cardCounter(7));  // "2 Hold"
console.log(cardCounter(10)); // "1 Hold"
console.log(cardCounter("J"));// "0 Hold"
console.log(cardCounter("A"));// "-1 Hold"