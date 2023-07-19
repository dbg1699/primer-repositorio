function sumar() {
    // Obtener los valores de los inputs
    let num1 = parseInt(document.getElementById('numero1').value);
    let num2 = parseInt(document.getElementById('num2').value);
   
  
    // Realizar la suma
    let suma = num1 + num2;
  
    // Mostrar el resultado
    document.getElementById('resultado').textContent = 'La suma es: ' + suma;
  }