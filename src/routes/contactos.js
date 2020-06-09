const express = require('express');
const router = express.Router();
const daoContacto = require('../dao/dao_contactos')

router.get('/contactos', async (req, res) => {
  const contactos = await daoContacto.listarContactos() ;
  res.render('v_contactos/v_contactos', {
      contactos
  });
});

router.post('/addContacto',  (req, res, next) => {
   daoContacto.guardarContacto(req.body)
  res.redirect('/contactos')
});

router.get('/eliminar/:id', async (req,res)=>{
  const {id} = req.params
  await daoContacto.borrarContacto(id);
  res.redirect('/contactos')
});

router.get('/editar/:id',async(req,res)=>{
  const {id} = req.params
 const contactos = await daoContacto.buscarContacto(id)
  res.render('v_contactos/v_contactos_edit',{
    contactos
  });

});


router.post('/editar/:id', async (req, res, next) => {
  const { id } = req.params;
  daoContacto.actualizarContacto(id,req.body);
  res.redirect('/contactos');
});

module.exports = router;
