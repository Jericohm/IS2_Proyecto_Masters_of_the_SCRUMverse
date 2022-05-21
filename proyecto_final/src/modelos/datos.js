var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JuegoSchema= Schema({
    id: Number,
    nombre: String,
    anio: Number,
    compania: String,
    consola: String
  });

module.export=mongoose.model('informacion',JuegoSchema);