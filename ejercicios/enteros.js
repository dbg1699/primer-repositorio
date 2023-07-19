function verificarNumeros() {
    var num1 = parseInt(document.getElementById("num1Input").value);
    var num2 = parseInt(document.getElementById("num2Input").value);
    var num3 = parseInt(document.getElementById("num3Input").value);
    var resultElement = document.getElementById("result");
  
    var formula = num1 + num2 + num3;
  
    if (num1 < num2 + num3) {
      resultElement.textContent = "El número menor es num1. La suma de los tres números es " + formula + ".";
    } else if (num2 < num1 + num3) {
      resultElement.textContent = "El número menor es num2. La suma de los tres números es " + formula + ".";
    } else if (num3 < num1 + num2) {
      resultElement.textContent = "El número menor es num3. La suma de los tres números es " + formula + ".";
    }
  }
  