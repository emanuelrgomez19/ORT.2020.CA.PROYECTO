const modelContactos = require('../model/contactos')

async function buscarContacto(id) {
    return await modelContactos.findById(id);
}

async function listarContactos() {
    return await modelContactos.find();
}

async function actualizarContacto(id, dato) {
    await modelContactos.update({ _id: id }, dato)
}

function guardarContacto(dato) {
    var contacto = new modelContactos(dato)
    contacto.save();
}

async function borrarContacto(id) {
    await modelContactos.remove({ _id: id });
}

module.exports = {
    buscarContacto,
    listarContactos,
    actualizarContacto,
    guardarContacto,
    borrarContacto
};