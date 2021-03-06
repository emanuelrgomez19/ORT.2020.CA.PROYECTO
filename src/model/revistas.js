const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RevistaSchema = Schema({
  nombre: String,
  descripcion: String,
  edicion: [],
  status: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('revistas', RevistaSchema);
