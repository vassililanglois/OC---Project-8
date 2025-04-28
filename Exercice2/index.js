// Créez votre fonction ici

function calculate(num1, num2, operator) {
  // Enlève les parenthèses s'il y en a
  num1 = String(num1).replace(/[()]/g, "");
  num2 = String(num2).replace(/[()]/g, "");

  // Convertit ensuite en nombre
  num1 = Number(num1);
  num2 = Number(num2);

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Division by zero is not allowed";
      }
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, "+")); // Affiche 8
console.log(calculate(10, 4, "-")); // Affiche 6
console.log(calculate(7, 2, "*")); // Affiche 14
console.log(calculate(12, 3, "/")); // Affiche 4
console.log(calculate(8, 0, "/")); // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, "%")); // Affiche "Invalid operator"

export default calculate;
