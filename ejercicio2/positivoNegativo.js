
function verificarNumero() {
    let number = parseFloat(document.getElementById("numberInput").value)
    let resultElement = document.getElementById("resultado")

    /*Comenzamos con condicional*/
    if (number > 0){ 
        resultElement.textContent = "El número es positivo"
    }
    else if(number < 0)
    {
        resultElement.textContent = "El número es negativo"
    }
    else {
        resultElement.textContent = "El número es cero"
    }
}


