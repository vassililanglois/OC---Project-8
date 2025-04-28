// Créez votre fonction ici

function calculateAverage(numbersArray) {
  if (!numbersArray) {
    return "No numbers to calculate average";
  }

  let sum = 0;

  numbersArray.forEach((number) => {
    sum += number;
  });

  let result = sum / numbersArray.length;
  return result;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage;
