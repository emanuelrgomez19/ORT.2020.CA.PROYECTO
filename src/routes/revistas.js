const express = require('express');
const router = express.Router();
const daoRevistda = require('../dao/dao_revistas')
const Revistas = require('../model/revistas');



  router.get('/revistas', async (req, res) => {
    const revistas = await Revistas.find();
    res.render('v_revistas/v_revistas', {
        revistas
    });
  });
  
  router.post('/revistas', async (req, res, next) => {
    console.log(req.body)
    const revistas = new Revistas(req.body);
    await revistas.save();
    res.redirect('/revistas');
  });
  
  router.get('/turn2/:id', async (req, res, next) => {
    let { id } = req.params;
    const revista = await Revistas.findById(id);
    revista.status = !revistas.status;
    await revista.save();
    res.redirect('/revistas');
  });
  
  
  router.get('/revista_edit/:id', async (req, res, next) => {
    const revista = await Revistas.findById(req.params.id);
    console.log(revista)
    res.render('v_revistas/v_revista_edit', { revista });
  });
  
  router.post('/revista_edit/:id', async (req, res, next) => {
    const { id } = req.params;
    await Revistas.update({_id: id}, req.body);
    res.redirect('/revistas');
  });
  
  router.get('/delete2/:id', async (req, res, next) => {
    let { id } = req.params;
    await Revistas.remove({_id: id});
    res.redirect('/revistas');
  });
  
  
  
  
  module.exports = router;