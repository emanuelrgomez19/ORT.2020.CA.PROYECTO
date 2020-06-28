const request = require('request-promise-native')

const apiPath = '/ediciones'

async function listarEdiciones(serverPath){
    const options = {
        method: 'GET',
        uri: serverPath + apiPath,
        json: true
    }
    return await request(options)
}

async function grabarNuevaEdicion(serverPath, idRevista, edicion){
    const options = {
        method: 'POST',
        uri: serverPath + apiPath + '/' + idRevista,
        body: edicion,
        json: true
    }
    return await request(options)
}

async function modificarEdicion(serverPath, idEdicion, edicion){
    const options = {
        method: 'PUT',
        uri: serverPath + apiPath + '/' + idEdicion,
        body: edicion,
        json: true
    }
    return await request(options)
}

async function eliminarEdicion(serverPath, idEdicion){
    const options = {
        method: 'DELETE',
        uri: serverPath + apiPath + '/' + idEdicion,
        json: true
    }
    return await request(options)
}

module.exports = {listarEdiciones,grabarNuevaEdicion,modificarEdicion,eliminarEdicion}