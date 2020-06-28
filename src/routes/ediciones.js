const express = require("express");
const router = express.Router();
const daoEdiciones = require("../dao/dao_ediciones");
const daoRevista = require("../dao/dao_revistas");
const edicionesModel = require("../model/ediciones");
const Joi = require("@hapi/joi");

router.get("/ediciones", async (req, res) => {
  let response = { revistas: await daoEdiciones.listarEdiciones() };
  res.status(200).json(response);
});

router.post("/ediciones/:idRevista", async (req, res) => {


  const revista = await daoRevista.buscarRevista(req.params.idRevista);
  if(revista){
    const revistaID = revista.id;
    let arrayEdiciones = revista.edicion;
    let resueltado_validar = await validarEdicion(req.body);
  
    if (resueltado_validar) {
      response = {
        message: "La revista posee un formato JSON inválido o faltan datos",
        motivo: resueltado_validar,
        datos: req.body,
      };
      res.status(400).json(response);
    } else {
      const edicion = new edicionesModel(req.body);
      edicion.save(edicion, async function (err, id) {
        let edicionid = id._id;
        arrayEdiciones.push(edicionid);
        revista.edicion = arrayEdiciones;
        await daoRevista.actualizarRevista(revistaID, revista);
      });
  
      response = { message: "Se grabó la edicion", edicion };
      res.status(200).json(response);
    }

  }else{
    response = { message: 'El id de la revista no existe' }
    res.status(400).json(response)
  }

});

router.put('/ediciones/:id', async (req, res) => {
  var response
  var edicionVieja = await daoEdiciones.buscarEdiciones(req.params.id)
  if (edicionVieja) {
    let resultado_validacion = await validarEdicion(req.body)
    if (resultado_validacion) {
      response = {
        message: 'La edición posee un formato JSON inválido o faltan datos',
        motivo: resultado_validacion, datos: req.body
      }
      res.status(400).json(response)
    } else {
      await daoEdiciones.actualizarEdiciones(req.params.id, req.body)
      response = {
        message: 'Se actualizó la edición con id ' + req.params.id
        , datosAntiguos: edicionVieja, datosActualizados: req.body
      }
      res.status(200).json(response)
    }
  } else {
    response = { message: 'El id de la edición no existe' }
    res.status(400).json(response)
  }
});

router.delete('/ediciones/:id', async (req, res) => {
  var response
  var edicionesEliminada = await daoEdiciones.buscarEdiciones(req.params.id)
  if (edicionesEliminada) {
    await daoEdiciones.borrarEdiciones(req.params.id);
    response = {message: 'Se eliminó la edicion con id ' + req.params.id, datosEliminados: edicionesEliminada}
    res.status(200).json(response)
  } else {
    response = { message: 'El id de la edicion no existe' }
    res.status(400).json(response)
  }
});




module.exports = router;

function validarEdicion(nuevaEdicion) {
  const schema = {
    titulo: Joi.string().required(),
    precio: Joi.number().required(),
    descripcion: Joi.string().required(),
  };
  const error = Joi.validate(nuevaEdicion, schema, function (err) {
    if (err) return err.message;
  });
  return error;
}
