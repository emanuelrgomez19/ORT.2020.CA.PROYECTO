const express = require('express');
const router = express.Router();
const daoRevista = require('../dao/dao_revistas')
// const Revistas = require('../model/revistas');

router.get('/revistas', async (req, res) => {
  res.json(await daoRevista.listarRevistas())
});

router.post('/revistas', (req, res, next) => {
  daoRevista.guardarRevista(req.body)
});

router.put('/revistas/:id', async (req, res) => {
  daoRevista.actualizarRevista(req.params.id, req.body)
});

router.delete('/revistas/:id', async (req, res) => {
  await daoRevista.borrarRevista(req.params.id);
});

module.exports = router;