const request = require('request-promise-native')

const apiPath = '/revistas'

async function listarRevistas(serverPath){
    const options = {
        method: 'GET',
        uri: serverPath + apiPath,
        json: true
    }
    return await request(options)
}

async function grabarNuevaRevista(serverPath, revista){
    const options = {
        method: 'POST',
        uri: serverPath + apiPath,
        body: revista,
        json: true
    }
    return await request(options)
}

async function modificarRevista(serverPath, idRevista, revista){
    const options = {
        method: 'PUT',
        uri: serverPath + apiPath + '/' + idRevista,
        body: revista,
        json: true
    }
    return await request(options)
}

async function eliminarRevista(serverPath, idRevista){
    const options = {
        method: 'DELETE',
        uri: serverPath + apiPath + '/' + idRevista,
        json: true
    }
    return await request(options)
}

module.exports = {listarRevistas,grabarNuevaRevista,modificarRevista,eliminarRevista}