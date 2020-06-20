const express = require('express');
const router = express.Router();
const daoContacto = require('../dao/dao_contactos')

router.get('/contactos', async (req, res) => {
  res.json(await daoContacto.listarContactos())
});

router.post('/contactos',  (req, res, next) => {
  daoContacto.guardarContacto(req.body)
  const rta = {message: 'Se grabó el contacto',nuevoContacto:req.body}
  res.json(rta)
});

router.put('/contactos/:id',async(req,res)=>{
  await daoContacto.actualizarContacto(req.params.id,req.body)
  const rta = {message: 'Se actualizó el contacto con id ' + req.params.id,datosActualizados:req.body}
  res.json(rta)
});

router.delete('/contactos/:id', async (req,res)=>{
  await daoContacto.borrarContacto(req.params.id);
  const rta = {message: 'Se eliminó el contacto con id ' + req.params.id}
  res.json(rta)
});

module.exports = router;