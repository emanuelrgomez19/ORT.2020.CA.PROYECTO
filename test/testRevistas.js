const clienteRevistas = require('./clienteRevistas.js')

const serverPath = 'http://localhost:3000'

async function testGetRevista(serverPath) {
    try {
        const respuesta = await clienteRevistas.get(serverPath)
        console.log(JSON.stringify(respuesta, null, 4))
    } catch (err) {
        console.log(JSON.stringify(err, null, 4))
    }
}

async function testPostRevistaError(serverPath) {
    const revista = {
        "nombre": "Oh Lalá!",
        "descripcion": ""
    }
    try {
        const respuesta = await clienteRevistas.post(serverPath, revista)
        console.log(JSON.stringify(respuesta, null, 4))
    } catch (err) {
        console.log(JSON.stringify(err, null, 4))
    }
}

async function testPostRevistaOk(serverPath) {
    const revista = {
        "nombre": "Oh Lalá!",
        "descripcion": "Moda"
    }
    try {
        const respuesta = await clienteRevistas.post(serverPath, revista)
        console.log(JSON.stringify(respuesta, null, 4))
    } catch (err) {
        console.log(JSON.stringify(err, null, 4))
    }
}

async function testPutRevistaError(serverPath) {
    let idRevista = '5ef3d316fce6be2bd4fcaa3a'
    const revista = {
        "nombre": "",
        "descripcion": "Deportiva"
    }
    try {
        const respuesta = await clienteRevistas.put(serverPath, idRevista, revista)
        console.log(JSON.stringify(respuesta, null, 4))
    } catch (err) {
        console.log(JSON.stringify(err, null, 4))
    }
}

async function testPutRevistaOk(serverPath) {
    let idRevista = '5ef3d316fce6be2bd4fcaa3a'
    const revista = {
        "nombre": "Olé",
        "descripcion": "Deportiva"
    }
    try {
        const respuesta = await clienteRevistas.put(serverPath, idRevista, revista)
        console.log(JSON.stringify(respuesta, null, 4))
    } catch (err) {
        console.log(JSON.stringify(err, null, 4))
    }
}

async function testDeleteRevistaError(serverPath) {
    let idRevista = '5ef3ba8f8464472d34ee576e'
    try {
        const respuesta = await clienteRevistas.dilit(serverPath, idRevista)
        console.log(JSON.stringify(respuesta, null, 4))
    } catch (err) {
        console.log(JSON.stringify(err, null, 4))
    }
}

async function testDeleteRevistaOk(serverPath) {
    let idRevista = '5ef3ba8f8464472d34ee576d'
    try {
        const respuesta = await clienteRevistas.dilit(serverPath, idRevista)
        console.log(JSON.stringify(respuesta, null, 4))
    } catch (err) {
        console.log(JSON.stringify(err, null, 4))
    }
}

testGetRevista(serverPath)
// testPostRevistaError(serverPath)
// testPostRevistaOk(serverPath)
// testPutRevistaError(serverPath)
// testPutRevistaOk(serverPath)
// testDeleteRevistaError(serverPath)
// testDeleteRevistaOk(serverPath)