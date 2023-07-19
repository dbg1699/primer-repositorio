function calcularCompra() {
    var cantidad = parseInt(document.getElementById("cantidadInput").value);
    var valor = parseFloat(document.getElementById("valorInput").value);
    var total = cantidad * valor;
    var totalCompra;
  
    if (cantidad >= 3) {
      totalCompra = total * 0.2;
    } else {
      totalCompra = total * 0.1;
    }
  
    var totalResultElement = document.getElementById("totalResult");
    totalResultElement.textContent = "El total fue de: " + total.toFixed(2);
    
    var totalCompraResultElement = document.getElementById("totalCompraResult");
    totalCompraResultElement.textContent = "El total a pagar sin descuento es: " + totalCompra.toFixed(2);
  }
  