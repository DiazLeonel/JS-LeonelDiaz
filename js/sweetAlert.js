(async () => {
    const {
        value: provincias
    } = await Swal.fire({
        title: 'Bienvenido!',
        text: 'Selecciona tu Provincia',
        confirmButtonText: 'Confirmar',
        footer: '<b>Esta informacion es importante!</b>',
        width: '40%',
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,

        input: 'select',
        inputPlaceholder: 'Seleccione su Provincia para el Envio ',
        inputValue: '',
        inputOptions: {
            BuenosAires: 'Buenos Aires',
            Catamarca: 'Catamarca',
            Chaco: 'Chaco',
            Chubut: 'Chubut',
            Córdoba: 'Córdoba',
            Corrientes: 'Corrientes',
            EntreRíos: 'Entre Ríos',
            Formosa: 'Formosa',
            Jujuy: 'Jujuy',
            LaPampa: 'La Pampa',
            LaRioja: 'La Rioja',
            Mendoza: 'Mendoza',
            Misiones: 'Misiones',
            Neuquén: 'Neuquén',
            RíoNegro: 'Río Negro',
            Salta: 'Salta',
            SanJuan: 'San Juan',
            SanLuis: 'San Luis',
            SantaCruz: 'Santa Cruz',
            SantaFe: 'Santa Fe',
            SantiagoDelEstero: 'Santiago del Estero',
            TierraDelFuego: 'Tierra del Fuego',
            Tucumán: 'Tucumán'
        }
    });

    if (provincias) {
        Swal.fire({
            title: `Seleccionaste ${provincias}`,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,

        });
    }

})()



function showAlert() {
    swal.fire({
        text: 'Agregado Correctamente!!',
        timer: 3000,
        position: 'top-end',
        showConfirmButton: false,
        width: '20%',
        backdrop: false,
        timerProgressBar: true,
    })
}



function cCarrito(){
    swal.fire({
        title: 'Elija metodo de pago',
        input: 'select',
        inputPlaceholder: 'Seleccione un Metodo de pago',
        inputOptions:{
            mercadoPago: 'Mercado Pago',
            efectivo: 'Efectivo',
            transferencia: 'Transferencia',
            tarjeta: 'Visa o MasterCard'
        }
    })
}