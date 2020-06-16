const express = require('express');
const router = express.Router();
const daoContacto = require('../dao/dao_contactos')

router.get('/contactos', async (req, res) => {
  res.json(await daoContacto.listarContactos())
});

router.post('/contactos',  (req, res, next) => {
  daoContacto.guardarContacto(req.body)
});

router.put('/contactos/:id',async(req,res)=>{
  daoContacto.actualizarContacto(req.params.id,req.body)
});

router.delete('/contactos/:id', async (req,res)=>{
  await daoContacto.borrarContacto(req.params.id);
});

module.exports = router;