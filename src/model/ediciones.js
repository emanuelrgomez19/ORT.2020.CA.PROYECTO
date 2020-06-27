const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EdicioneSchema = Schema({
  titulo: String,
  precio: Number,
  descripcion: String,
  status: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('ediciones', EdicioneSchema);