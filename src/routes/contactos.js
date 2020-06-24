const express = require("express");
const router = express.Router();
const daoContacto = require("../dao/dao_contactos");
const Joi = require('@hapi/joi');

router.get('/contactos', async (req, res) => {
  let response = { contactos: await daoContacto.listarContactos() }
  res.status(200).json(response)
});

router.post('/contactos', async (req, res, next) => {
  var response
  let resultado_validacion = await validaContacto(req.body)
  if (resultado_validacion) {
    response = {
      message: 'El contacto posee un formato JSON inválido o faltan datos',
      motivo: resultado_validacion, datos: req.body
    }
    res.status(400).json(response)
  } else {
    daoContacto.guardarContacto(req.body)
    response = { message: 'Se grabó el contacto', nuevoContacto: req.body }
    res.status(200).json(response)
  }
});

router.put('/contactos/:id', async (req, res) => {
  var response
  var contactoViejo = await daoContacto.buscarContacto(req.params.id)
  if (contactoViejo) {
    let resultado_validacion = await validaContacto(req.body)
    if (resultado_validacion) {
      response = {
        message: 'El contacto posee un formato JSON inválido o faltan datos',
        motivo: resultado_validacion, datos: req.body
      }
      res.status(400).json(response)
    } else {
      await daoContacto.actualizarContacto(req.params.id, req.body)
      response = {
        message: 'Se actualizó el contacto con id ' + req.params.id
        , datosAntiguos: contactoViejo, datosActualizados: req.body
      }
      res.status(200).json(response)
    }
  } else {
    response = { message: 'El id del contacto no existe' }
    res.status(400).json(response)
  }
})

router.delete('/contactos/:id', async (req, res) => {
  var contactoEliminado = await daoContacto.buscarContacto(req.params.id)
  if (contactoEliminado) {
    await daoContacto.borrarContacto(req.params.id);
    const rta = { message: 'Se eliminó el contacto con id ' + req.params.id, datosEliminados: contactoEliminado }
    res.status(200).json(rta)
  } else {
    response = { message: 'El id del contacto no existe' }
    res.status(400).json(response)
  }
});

router.post('/contactos/:idContacto&:idRevista', async (req, res) => {
  const contactoID = req.params.idContacto;
  const contactos = await daoContacto.buscarContacto(contactoID);
  if (contactos) {
    var existeRevista = false
    const revistaID = req.params.idRevista;
    arrayRevistas = contactos.revistas;
    for (let i = 0; i < arrayRevistas.length; i++) {
      if (revistaID == arrayRevistas[i]) {
        existeRevista = true
      };
    }
    if (existeRevista) {
      const rta = { message: 'El contacto ya tiene esa revista' }
      res.json(rta)
    } else {
      arrayRevistas.push(revistaID);
      contactos.revistas = arrayRevistas;
      await daoContacto.actualizarContacto(contactoID, contactos);
      const rta = { message: 'Se agrego revista al contacto  ' + req.params.idContacto }
      res.json(rta)
    }
  } else {
    response = { message: 'El id del contacto no existe' }
    res.status(400).json(response)
  }
});

module.exports = router;

function validaContacto(nuevoContacto) {
  const schema = {
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    doc: Joi.number().integer().min(1).max(99999999),
    mail: Joi.string().required().regex(/@/),
    mail2: Joi.string(),
    celular: Joi.number().integer().min(1500000000).max(1599999999),
    telefono: Joi.number().integer().min(40000000).max(49999999),
    description: Joi.string()
  }
  const error = Joi.validate(nuevoContacto, schema, function (err) {
    if (err)
      return err.message
  });
  return error
}