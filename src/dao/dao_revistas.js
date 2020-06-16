const modelRevistas = require('../model/revistas')

function buscarRevista(id) {
    return modelRevistas.findById(id)
}

function listarRevistas() {
    return modelRevistas.find()
}

async function actualizarRevista(id, dato) {
    await modelRevistas.update({ _id: id }, dato)
}

function guardarRevista(dato) {
    var revista = new modelRevistas(dato)
    revista.save();
}

async function borrarRevista(id) {
    await modelRevistas.remove({ _id: id });
}

module.exports = {
    buscarRevista,
    listarRevistas,
    actualizarRevista,
    guardarRevista,
    borrarRevista
};