const modelContactos = require('../model/revistas')

function buscarRevista(id){
    return modelContactos.findById(id);

}

function listarRevistas(){
    return modelContactos.find();
}

async function actualizarRevista(id,dato){
    await modelContactos.update({_id:id},dato)
}

function guardarRevista(dato){
    var contacto= new modelContactos(dato) 
    contacto.save();
}

async function  borrarRevista(id){
  await  modelContactos.remove({_id:id});

}

module.exports = {
    buscarRevista,
    listarRevistas,
    actualizarRevista,
    guardarRevista,
    borrarRevista
};
