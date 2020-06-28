const clienteRevistas = require('./clienteRevistas.js')

const serverPath = 'http://localhost:3000'

async function testGetRevista(serverPath) {
    let response = {}
    try {
        const respuesta = await clienteRevistas.listarRevistas(serverPath)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testPostRevistaError(serverPath) {
    let response = {}
    const revista = {
        "nombre": "Oh Lalá!",
        "descripcion": ""
    }
    try {
        const respuesta = await clienteRevistas.grabarNuevaRevista(serverPath, revista)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testPostRevistaOk(serverPath) {
    let response = {}
    const revista = {
        "nombre": "Oh Lalá!",
        "descripcion": "Moda"
    }
    try {
        const respuesta = await clienteRevistas.grabarNuevaRevista(serverPath, revista)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testPutRevistaError(serverPath) {
    let response = {}
    let idRevista = '5ef3d316fce6be2bd4fcaa3a'
    const revista = {
        "nombre": "",
        "descripcion": "Deportiva"
    }
    try {
        const respuesta = await clienteRevistas.modificarRevista(serverPath, idRevista, revista)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testPutRevistaOk(serverPath) {
    let response = {}
    let idRevista = '5ef3d316fce6be2bd4fcaa3a'
    const revista = {
        "nombre": "Olé",
        "descripcion": "Deportiva"
    }
    try {
        const respuesta = await clienteRevistas.modificarRevista(serverPath, idRevista, revista)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testDeleteRevistaError(serverPath) {
    let response = {}
    let idRevista = '5ef3ba8f8464472d34ee576e'
    try {
        const respuesta = await clienteRevistas.eliminarRevista(serverPath, idRevista)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testDeleteRevistaOk(serverPath) {
    let response = {}
    let idRevista = '5ef3ba8f8464472d34ee576d'
    try {
        const respuesta = await clienteRevistas.eliminarRevista(serverPath, idRevista)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

// testGetRevista(serverPath)
// testPostRevistaError(serverPath)
// testPostRevistaOk(serverPath)
// testPutRevistaError(serverPath)
// testPutRevistaOk(serverPath)
// testDeleteRevistaError(serverPath)
// testDeleteRevistaOk(serverPath)