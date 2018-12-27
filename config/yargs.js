const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'crea la tabla', opts)
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}