const express = require('express');
const router = express.Router();
const daoRevista = require('../dao/dao_revistas')
const Joi = require('@hapi/joi');

router.get('/revistas', async (req, res) => {
  let response = {revistas: await daoRevista.listarRevistas() }
  res.status(200).json(response)
});

router.post('/revistas', async (req, res, next) => {
  var response
  let resultado_validacion = await validaRevista(req.body)
  if (resultado_validacion) {
    response = {
      message: 'La revista posee un formato JSON inválido o faltan datos',
      motivo: resultado_validacion, datos: req.body
    }
    res.status(400).json(response)
  } else {
    await daoRevista.guardarRevista(req.body)
    response = { message: 'Se grabó la revista', nuevaRevista: req.body }
    res.status(200).json(response)
  }
});

router.put('/revistas/:id', async (req, res) => {
  var response
  var revistaVieja = await daoRevista.buscarRevista(req.params.id)
  if (revistaVieja) {
    let resultado_validacion = await validaRevista(req.body)
    if (resultado_validacion) {
      response = {
        message: 'La revista posee un formato JSON inválido o faltan datos',
        motivo: resultado_validacion, datos: req.body
      }
      res.status(400).json(response)
    } else {
      await daoRevista.actualizarRevista(req.params.id, req.body)
      response = {
        message: 'Se actualizó la revista con id ' + req.params.id
        , datosAntiguos: revistaVieja, datosActualizados: req.body
      }
      res.status(200).json(response)
    }
  } else {
    response = { message: 'El id de la revista no existe' }
    res.status(400).json(response)
  }
})

router.delete('/revistas/:id', async (req, res) => {
  var response
  var revistaEliminada = await daoRevista.buscarRevista(req.params.id)
  if (revistaEliminada) {
    await daoRevista.borrarRevista(req.params.id);
    response = {message: 'Se eliminó la revista con id ' + req.params.id, datosEliminados: revistaEliminada}
    res.status(200).json(response)
  } else {
    response = { message: 'El id de la revista no existe' }
    res.status(400).json(response)
  }
});


module.exports = router;

function validaRevista(nuevaRevista) {
  const schema = {
    nombre: Joi.string().required(),
    descripcion: Joi.string().required()
  }
  const error = Joi.validate(nuevaRevista, schema, function (err) {
    if (err)
      return err.message
  });
  return error
}