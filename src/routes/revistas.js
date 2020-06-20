const express = require('express');
const router = express.Router();
const daoRevista = require('../dao/dao_revistas')
// const Revistas = require('../model/revistas');

router.get('/revistas', async (req, res) => {
  res.json(await daoRevista.listarRevistas())
});

router.post('/revistas', (req, res, next) => {
  daoRevista.guardarRevista(req.body)
  const rta = {message: 'Se grabó la revista',nuevaRevista:req.body}
  res.json(rta)
});

router.put('/revistas/:id', async (req, res) => {
  await daoRevista.actualizarRevista(req.params.id, req.body)
  const rta = {message: 'Se actualizó la revista con id ' + req.params.id,datosActualizados:req.body}
  res.json(rta)
});

router.delete('/revistas/:id', async (req, res) => {
  await daoRevista.borrarRevista(req.params.id);
  const rta = {message: 'Se eliminó la revista con id ' + req.params.id}
  res.json(rta)
});

module.exports = router;