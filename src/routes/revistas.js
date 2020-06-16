const express = require('express');
const router = express.Router();
const daoRevista = require('../dao/dao_revistas')




  router.get('/revistas', async (req, res) => {
    const revistas = await daoRevista.listarRevistas();
    res.render('v_revistas/v_revistas', {
        revistas
    });
  });
  
  router.post('/revistas', async (req, res, next) => {
   
   await daoRevista.guardarRevista(req.body)
   
    res.redirect('/revistas');
  });
    
  
  router.get('/revista_edit/:id', async (req, res, next) => {
    const revista = await daoRevista.buscarRevista(req.params.id);
    console.log(revista)
    res.render('v_revistas/v_revista_edit', { revista });
  });
  
  router.post('/revista_edit/:id', async (req, res, next) => {
    const { id } = req.params;
    await daoRevista.actualizarRevista(id,req.body)
    res.redirect('/revistas');
  });
  
  router.get('/delete2/:id', async (req, res, next) => {
    let { id } = req.params;
    await daoRevista.borrarRevista(id)
    res.redirect('/revistas');
  });
  
  
  
  
  module.exports = router;