class moneda {
    constructor(usuario, divisa, valor, pesos) {
        this.usuario = usuario;
        this.divisa = divisa;
        this.valor = valor;
        this.pesos = pesos;
    }

    divMult() {
        return this.pesos / this.valor;
    }

}

let arrDivisa = [];

do {
    var conversion = prompt('comenzar o cancelar');
    if (conversion === "cancelar") {
        break;
    } else {
        Divisa = conversion;
        let nombreUsuario = prompt("ingrese su nombre")
        let nombreDivisa = prompt("Ingrese la divisa que desea consultar");
        let precioDivisa = prompt("Ingrese el precio de la divisa consultada");
        let misPesos = prompt("Cantidad de pesos propios")
        arrDivisa.push(new moneda(nombreUsuario, nombreDivisa, precioDivisa, misPesos));

    }
} while (conversion != "cancelar");

console.log(arrDivisa);

for (const moneda of arrDivisa) {
    document.write("<ul><li><h3>Nombre del usuario: " + moneda.usuario + "</h3></li>");

    document.write("<li><h3>Nombre de la Divisa: " + moneda.divisa + "</h3></li>");
    document.write("<li><h3>valor: " + moneda.valor + "</h3></li>");
    document.write("<li><h3>Pesos: " + moneda.pesos + "</h3></li>");
    document.write("<li><h3>cantidad por adquirir: " + moneda.divMult() + "</h3></li></ul>");


    console.log(moneda.usuario);
    console.log(moneda.divisa);
    console.log(moneda.valor);
    console.log(moneda.pesos);
    console.log(moneda.divMult());
}


let segunDinero = []
segunDinero = arrDivisa.map(money => money);
segunDinero.sort(function (a, b) {
    return a.divMult() - b.divMult()
});

console.log("ordenados segun el valor consultado, de menor a mayor");
console.log(segunDinero);
document.write("<h2>Lista de consultas ordenadas por valor de menor a mayor:</h2>");

for (const moneda of segunDinero) {
    document.write("<ul><li><h3>Nombre del usuario: " + moneda.usuario + "</h3></li>");
    document.write("<li><h3>Cantidad Retirada: " + moneda.divisa + "</h3></li>");
    document.write("<li><h3>Cantidad de moneda Retirada: " + moneda.divMult() + "</h3></li></ul>");

}


















































// switch (opc) {
//     case 1:
//         pesos = parseFloat(prompt(`Ingrese la cantidad de $`));
//         alert((pesos / 216)+ ` Dolares`);
//         break;
//     case 2:
//         pesos = parseFloat(prompt(`Ingrese la cantidad de $`));
//         alert((pesos / 250)+ ` Euros`);
//         break;
//     case 3:
//         pesos = parseFloat(prompt(`Ingrese la cantidad de $`));
//         alert((pesos / 286)+ ` Libras`);
//         break;
//     case 4:
//         break;
//     default:
//         alert(`Cerraste la Calculadora`);
//         break;
// }