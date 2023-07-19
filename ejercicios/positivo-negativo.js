function verificarNumero() {
  var number = parseFloat(document.getElementById("numberInput").value);
  var resultElement = document.getElementById("result");

  if (number >= 0) {
    resultElement.textContent = "El número ingresado es positivo.";
  } 
   else {
    resultElement.textContent = "El número ingresado es negativo.";
  }
}
