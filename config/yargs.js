const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    demand: true,
    alias: 'c',
    desc: 'Actualizar descripción',
    default: true
}

/* se sustituye todo esto para no tener tanto repetido
const crearOpt = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}

const actualizarOpt = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        demand: true,
        alias: 'c',
        desc: 'Actualizar descripción',
        default: true
    }
}

const borrarOpt = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
}*/

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion //es lo mismo a que hacer esto descripcion: descripcion
    })
    .command('actualizar', 'Actualizar el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}