const fs = require('fs'); // fs es para la gestion de archivos, pertenece a node no necesita installar
var colors = require('colors');



let listarTabla = (base, limite = 10) => {

    console.log('==================='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('==================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i} \n`)
    }
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('El valor de base o limite no es un numero')
            return;
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)

        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}