function enviar() {
    const name = document.querySelector(".inputUN");
    const divisa = document.querySelector(".inputDivisa");
    const cant = document.querySelector(".inputCant").value;


    document.querySelector(".pUserName").innerHTML = name.value;

    if (divisa.value == 'euro') {
        document.querySelector(".pDivisa").innerHTML = '260 Pesos';
        document.querySelector('.pCant').innerHTML = Math.round(cant / 260) + ' Euros';
    } else if (divisa.value == 'dolar') {
        document.querySelector(".pDivisa").innerHTML = '220 pesos';
        document.querySelector('.pCant').innerHTML = Math.round(cant / 220) + ' Dolares';
    } else if (divisa.value == 'libra') {
        document.querySelector(".pDivisa").innerHTML = '290 pesos';
        document.querySelector('.pCant').innerHTML = Math.round(cant / 290) + ' Libras';
    }
}


function anade() {
    const elemento = document.createElement("li");
    
    const nombre = document.querySelector(".pUserName");
    const moneda = document.querySelector(".pDivisa");
    const cantidad = document.querySelector(".pCant");
    
    elemento.appendChild(nombre);
    elemento.appendChild(moneda);
    elemento.appendChild(cantidad);
    
    var lista = document.getElementById("lista");
    lista.appendChild(elemento);
    
    var nuevoElemento = elemento.innerHTML;
    lista.innerHTML = lista.innerHTML + nuevoElemento + "<hr>";
}