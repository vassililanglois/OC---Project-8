const myButton = document.getElementById("myButton");
const myMessage = document.getElementById("myMessage");

myButton.addEventListener("click", () => {
  myMessage.innerText = "Bonjour, vous avez cliqué sur le bouton !";
});
