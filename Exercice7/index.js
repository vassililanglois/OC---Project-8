function convertToBinary() {
  const decimalInput = document.getElementById("decimalInput").value.trim();
  const resultElement = document.getElementById("binaryResult");

  // Vérifier que l'entrée est un nombre entier positif pur (pas de lettres ni de caractères spéciaux)
  if (!/^\d+$/.test(decimalInput)) {
    resultElement.textContent = "";
    return;
  }

  // Conversion du nombre décimal en binaire
  let decimalNumber = parseInt(decimalInput, 10);
  let binary = "";

  if (decimalNumber === 0) {
    binary = "0";
  } else {
    while (decimalNumber > 0) {
      binary = (decimalNumber % 2) + binary;
      decimalNumber = Math.floor(decimalNumber / 2);
    }
  }

  // Afficher le résultat
  resultElement.textContent = `Binaire : ${binary}`;
}
