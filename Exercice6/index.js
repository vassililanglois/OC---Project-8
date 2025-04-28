const display = document.getElementById("display");

let result = 1;

function appendToDisplay(character) {
  display.value += character;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  const expression = display.value;

  try {
    const result = eval(expression);

    if (result === Infinity || result === -Infinity) {
      display.value = "Division by zero is not allowed";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Erreur";
  }
}
