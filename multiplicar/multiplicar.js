const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    let contenido = "";
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject("La base o limite no son numeros");
        } else {
            for (let index = 1; index < limite; index++) {
                contenido += (`${base*index}\n`);
            }

            resolve(contenido);

        }

    });
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let contenido = "";
        if (!Number(base) || !Number(limite)) {
            reject("La base o limite no es un numero");
            return;
        } else {
            for (let index = 1; index < limite; index++) {

                contenido += ` resultado ${base * index}\n`;
            }

            fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, contenido, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`tablas/tabla-${base}-${limite}.txt`.green)
                }
            });
        }

    });

}


module.exports = {
    crearArchivo,
    listarTabla
}