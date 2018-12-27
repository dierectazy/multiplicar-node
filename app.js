//tres tipos de requieres, uno de las librerias de node
//filesystem
const fs = require('fs');
const argv = require('./config/yargs').argv;
const colores = require('colors')
    //const multiplicar = require('./multiplicar/multiplicar')
    // otro tipo de un paquete que se instala y se utiliza
    //tercero require de un archivo require('./fs')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log("Listar".green);
        listarTabla(argv.base, argv.limite).then(retorno => console.log(retorno)).catch(err => console.log(err));
        break;

    case 'crear':
        console.log("Crear".green);

        crearArchivo(argv.base, argv.limite).then(
                archivo =>
                console.log(`Archivo creado : ${archivo}`))
            .catch(
                err => console.log(err)
            );
        break;

    default:
        console.log("Comando no reconocido");
        break;
}