const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const edicionSchema = new Schema;

const RevistaSchema = Schema({
  nombre: String,
  description: String,
  edicion: [edicionSchema],
  status: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('revistas', RevistaSchema);
