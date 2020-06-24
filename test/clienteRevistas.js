const request = require('request-promise-native')

const apiPath = '/revistas'

async function get(serverPath){
    const options = {
        method: 'GET',
        uri: serverPath + apiPath,
        json: true
    }
    return await request(options)
}

async function post(serverPath, revista){
    const options = {
        method: 'POST',
        uri: serverPath + apiPath,
        body: revista,
        json: true
    }
    return await request(options)
}

async function put(serverPath, idRevista, revista){
    const options = {
        method: 'PUT',
        uri: serverPath + apiPath + '/' + idRevista,
        body: revista,
        json: true
    }
    return await request(options)
}

async function dilit(serverPath, idRevista){
    const options = {
        method: 'DELETE',
        uri: serverPath + apiPath + '/' + idRevista,
        json: true
    }
    return await request(options)
}

module.exports = {get,post,put,dilit}