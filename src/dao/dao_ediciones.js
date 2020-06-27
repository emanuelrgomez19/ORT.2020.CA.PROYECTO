const modelEdiciones = require('../model/ediciones')
const { model } = require('../model/ediciones')

async function buscarEdiciones(id) {
    return await modelEdiciones.findById(id)
}

async function listarEdiciones() {
    return await modelEdiciones.find()
}

async function actualizarEdiciones(id, dato) {
    await modelEdiciones.update({ _id: id }, dato)
}

async function guardarEdiciones(dato) {
    var revista = await new modelEdiciones(dato)
    revista.save();
}

async function borrarEdiciones(id) {
    await modelEdiciones.remove({ _id: id });
}

module.exports = {
    buscarEdiciones,
    listarEdiciones,
    actualizarEdiciones,
    guardarEdiciones,
    borrarEdiciones
};