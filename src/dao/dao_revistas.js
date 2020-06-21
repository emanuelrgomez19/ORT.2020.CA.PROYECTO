const modelRevistas = require('../model/revistas')

async function buscarRevista(id) {
    return await modelRevistas.findById(id)
}

async function listarRevistas() {
    return await modelRevistas.find()
}

async function actualizarRevista(id, dato) {
    await modelRevistas.update({ _id: id }, dato)
}

async function guardarRevista(dato) {
    var revista = await new modelRevistas(dato)
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