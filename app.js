// const { argv } = argveand = require('./config/yargs')
// ===
const argv = require('./config/yargs').argv
var colors = require('colors');

const { crearArchivo, listarTabla } = multiplicar = require('./multiplicar/multiplicar')


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log("entra en el swith crear");
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${ archivo}`.blue))
            .catch(e => console.log(colors.red(e)))
        break;

    default:
        console.log('comando no reconocido');
}