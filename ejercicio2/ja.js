function calcularcompra(){     
    let cantidad =parseInt(document.getElementById("cantidadInput").value)     
    let precio =parseInt(document.getElementById("valorinput").value)     
    let total = cantidad * precio     
    let totalCompra }      
    if (cantidad >= 3) {         
        totalcompra = total * 0.8     
    }     
    else{         
        totalcompra = total * 0.9     
    }      

    let totalResultadoElement = document.getElementById("totalresultado")
    totalResultadoElement.textContent = "El total de la cantidad de camisas es: " + total

    let totalConDescuento = document.getElementById("totalcompraressultado")
    totalConDescuento.textContent = "El total con descuento fue de : " + totalCompra