const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Joi = require('@hapi/joi');
// const { required } = require('@hapi/joi');


const ContactoSchema = Schema({
  // nombre: {type: String, required},
  nombre: String,
  apellido: String,
  doc: Number,
  mail: String,
  mail2: String,
  celular: Number,
  telefono: Number,
  revistas: [],
  status: {
    type: Boolean,
    default: true
  }
});


module.exports = mongoose.model('contactos', ContactoSchema);