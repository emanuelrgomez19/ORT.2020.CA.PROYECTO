const clienteEdiciones = require('./clienteEdiciones.js')

const serverPath = 'http://localhost:3000'

async function testGetEdicion(serverPath) {
    let response = {}
    try {
        const respuesta = await clienteEdiciones.listarEdiciones(serverPath)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testPostEdicionError(serverPath) {
    let response = {}
    let idRevista = ''
    const edicion = {
        "titulo": "Julio 2020",
        "precio": 200,
        "descripcion": ""
    }
    try {
        const respuesta = await clienteEdiciones.grabarNuevaEdicion(serverPath, idRevista, edicion)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testPostEdicionOk(serverPath) {
    let response = {}
    let idRevista = ''
    const edicion = {
        "titulo": "Julio 2020",
        "precio": 200,
        "descripcion": "Tu mensual del mes de Julio!"
    }
    try {
        const respuesta = await clienteEdiciones.grabarNuevaEdicion(serverPath, idRevista, edicion)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testPutEdicionError(serverPath) {
    let response = {}
    let idEdicion = ''
    const edicion = {
        "titulo": "",
        "precio": 230,
        "descripcion": "Tu mensual del mes de Agosto!"
    }
    try {
        const respuesta = await clienteEdiciones.modificarEdicion(serverPath, idEdicion, edicion)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testPutEdicionOk(serverPath) {
    let response = {}
    let idEdicion = ''
    const edicion = {
        "titulo": "Agosto 2020",
        "precio": 230,
        "descripcion": "Tu mensual del mes de Agosto!"
    }
    try {
        const respuesta = await clienteEdiciones.modificarEdicion(serverPath, idEdicion, edicion)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testDeleteEdicionError(serverPath) {
    let response = {}
    let idEdicion = ''
    try {
        const respuesta = await clienteEdiciones.eliminarEdicion(serverPath, idEdicion)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testDeleteEdicionOk(serverPath) {
    let response = {}
    let idEdicion = ''
    try {
        const respuesta = await clienteEdiciones.eliminarEdicion(serverPath, idEdicion)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

// testGetEdicion(serverPath)
// testPostEdicionError(serverPath)
// testPostEdicionOk(serverPath)
// testPutEdicionError(serverPath)
// testPutEdicionOk(serverPath)
// testDeleteEdicionError(serverPath)
// testDeleteEdicionOk(serverPath)