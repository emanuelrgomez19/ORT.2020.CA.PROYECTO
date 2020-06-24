const express = require("express");
const router = express.Router();
const daoContacto = require("../dao/dao_contactos");
const Joi = require('@hapi/joi');

router.get('/contactos', async (req, res) => {
  let response = {contactos: await daoContacto.listarContactos() }
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
    await daoContacto.guardarContacto(req.body)
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
    descripcion: Joi.string()
  }
  const error = Joi.validate(nuevoContacto, schema, function (err) {
    if (err)
      return err.message
  });
  return error
}