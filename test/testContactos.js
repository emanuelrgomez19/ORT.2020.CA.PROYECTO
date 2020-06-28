const clienteContactos = require('./clienteContactos.js')

const serverPath = 'http://localhost:3000'

async function testGetContacto(serverPath) {
    let response = {}
    try {
        const respuesta = await clienteContactos.listarContactos(serverPath)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testPostContactoError(serverPath) {
    let response = {}
    const contacto = {
        "nombre": "",
        "apellido": "Lulkin",
        "mail": "NicolásLulkin@hotmail.com"
    }
    try {
        const respuesta = await clienteContactos.grabarNuevoContacto(serverPath, contacto)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testPostContactoOk(serverPath) {
    let response = {}
    const contacto = {
        "nombre": "Nicolás",
        "apellido": "Lulkin",
        "mail": "NicolásLulkin@hotmail.com"
    }
    try {
        const respuesta = await clienteContactos.grabarNuevoContacto(serverPath, contacto)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testPostContactoRevista(serverPath) {
    let response = {}
    let idContacto = '5ef3cb87536fa62584156d29'
    let idRevista = '5ef3d316fce6be2bd4fcaa3a'
    try {
        const respuesta = await clienteContactos.suscribirARevista(serverPath, idContacto, idRevista)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testPutContactoError(serverPath) {
    let response = {}
    let idContacto = '5ef3d8a628fbe913c476d1df'
    const contacto = {
        "nombre": "Federico",
        "apellido": "López",
        "mail": "fede.lopezlive.com.ar"
    }
    try {
        const respuesta = await clienteContactos.modificarContacto(serverPath, idContacto, contacto)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testPutContactoOk(serverPath) {
    let response = {}
    let idContacto = '5ef3d8a628fbe913c476d1df'
    const contacto = {
        "nombre": "Federico",
        "apellido": "López",
        "mail": "fede.lopez@live.com.ar"
    }
    try {
        const respuesta = await clienteContactos.modificarContacto(serverPath, idContacto, contacto)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testDeleteContactoError(serverPath) {
    let response = {}
    let idContacto = '5ef3ceac66794a12c81b8537'
    try {
        const respuesta = await clienteContactos.eliminarContacto(serverPath, idContacto)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

async function testDeleteContactoOk(serverPath) {
    let response = {}
    let idContacto = '5ef3d8a628fbe913c476d1df'
    try {
        const respuesta = await clienteContactos.eliminarContacto(serverPath, idContacto)
        return response['status']=200
    } catch (err) {
        return response['status']=400
    }
}

// testGetContacto(serverPath)
// testPostContactoError(serverPath)
// testPostContactoOk(serverPath)
// testPutContactoError(serverPath)
// testPutContactoOk(serverPath)
// testDeleteContactoError(serverPath)
// testDeleteContactoOk(serverPath)
// testPostContactoRevista(serverPath)