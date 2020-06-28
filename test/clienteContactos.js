const request = require('request-promise-native')

const apiPath = '/contactos'

async function listarContactos(serverPath){
    const options = {
        method: 'GET',
        uri: serverPath + apiPath,
        json: true
    }
    return await request(options)
}

async function grabarNuevoContacto(serverPath, contacto){
    const options = {
        method: 'POST',
        uri: serverPath + apiPath,
        body: contacto,
        json: true
    }
    return await request(options)
}

async function suscribirARevista(serverPath, idContacto, idRevista){
    const options = {
        method: 'POST',
        uri: serverPath + apiPath + '/' + idContacto + '&' + idRevista,
        json: true
    }
    return await request(options)
}

async function modificarContacto(serverPath, idContacto, contacto){
    const options = {
        method: 'PUT',
        uri: serverPath + apiPath + '/' + idContacto,
        body: contacto,
        json: true
    }
    return await request(options)
}

async function eliminarContacto(serverPath, idContacto){
    const options = {
        method: 'DELETE',
        uri: serverPath + apiPath + '/' + idContacto,
        json: true
    }
    return await request(options)
}

module.exports = {listarContactos,grabarNuevoContacto,suscribirARevista,modificarContacto,eliminarContacto}