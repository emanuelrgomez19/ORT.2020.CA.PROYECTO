const clienteContactos = require('./clienteContactos.js')

const serverPath = 'http://localhost:3000'

async function testGetContacto(serverPath) {
    try {
        const respuesta = await clienteContactos.get(serverPath)
        console.log(JSON.stringify(respuesta, null, 4))
    } catch (err) {
        console.log(JSON.stringify(err, null, 4))
    }
}

async function testPostContactoError(serverPath) {
    const contacto = {
        "nombre": "",
        "apellido": "Lulkin",
        "mail": "NicolásLulkin@hotmail.com"
    }
    try {
        const respuesta = await clienteContactos.post(serverPath, contacto)
        console.log(JSON.stringify(respuesta, null, 4))
    } catch (err) {
        console.log(JSON.stringify(err, null, 4))
    }
}

async function testPostContactoOk(serverPath) {
    const contacto = {
        "nombre": "Nicolás",
        "apellido": "Lulkin",
        "mail": "NicolásLulkin@hotmail.com"
    }
    try {
        const respuesta = await clienteContactos.post(serverPath, contacto)
        console.log(JSON.stringify(respuesta, null, 4))
    } catch (err) {
        console.log(JSON.stringify(err, null, 4))
    }
}

async function testPostContactoRevista(serverPath) {
    let idContacto = '5ef3cb87536fa62584156d29'
    let idRevista = '5ef3d316fce6be2bd4fcaa3a'
    try {
        const respuesta = await clienteContactos.post(serverPath, idContacto, idRevista)
        console.log(JSON.stringify(respuesta, null, 4))
    } catch (err) {
        console.log(JSON.stringify(err, null, 4))
    }
}

async function testPutContactoError(serverPath) {
    let idContacto = '5ef3ceac66794a12c81b8536'
    const contacto = {
        "idContacto": "Federico",
        "apellido": "López",
        "mail": "fede.lopezlive.com.ar"
    }
    try {
        const respuesta = await clienteContactos.put(serverPath, idContacto, contacto)
        console.log(JSON.stringify(respuesta, null, 4))
    } catch (err) {
        console.log(JSON.stringify(err, null, 4))
    }
}

async function testPutContactoOk(serverPath) {
    let idContacto = '5ef3ceac66794a12c81b8536'
    const contacto = {
        "nombre": "Federico",
        "apellido": "López",
        "mail": "fede.lopez@live.com.ar"
    }
    try {
        const respuesta = await clienteContactos.put(serverPath, idContacto, contacto)
        console.log(JSON.stringify(respuesta, null, 4))
    } catch (err) {
        console.log(JSON.stringify(err, null, 4))
    }
}

async function testDeleteContactoError(serverPath) {
    let idContacto = '5ef3ceac66794a12c81b8537'
    try {
        const respuesta = await clienteContactos.dilit(serverPath, idContacto)
        console.log(JSON.stringify(respuesta, null, 4))
    } catch (err) {
        console.log(JSON.stringify(err, null, 4))
    }
}

async function testDeleteContactoOk(serverPath) {
    let idContacto = '5ef3ceac66794a12c81b8536'
    try {
        const respuesta = await clienteContactos.dilit(serverPath, idContacto)
        console.log(JSON.stringify(respuesta, null, 4))
    } catch (err) {
        console.log(JSON.stringify(err, null, 4))
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