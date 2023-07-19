function verificarPago() {
    var articulo = parseInt(document.getElementById("articuloInput").value);
    var resultElement = document.getElementById("result");
  
    if (isNaN(articulo)) {
      resultElement.textContent = "Ingrese un número válido.";
    } else if (articulo < 3) {
      resultElement.textContent = "Pagar en efectivo.";
    } else {
      resultElement.textContent = "Pagar con tarjeta.";
    }
  }
  