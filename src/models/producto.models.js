const mongoose = require("../config/connection");

  // los nombres y tipos deben coincidir con los datos en la bd que ya se encuentran almacenados
  const schemaProducto = new mongoose.Schema({
    referencia: {
      type: [Number,"La referencia debe ser numerica"],
      required: [true, "Es obligatorio"],
    },
    nombre: {
      type: [String, "El nombre debe ser obligatorio"],
      required: [true, "Es obligatorio"],
    },
    precio:{
        type: [mongoose.Types.Decimal128,"El precio debe ser numerico"],
        default: 0.0,
        min: [0.0, "Los precios no pueden ser negativos"]
      },
    },{versionkey: false});

  const producto = mongoose.model("producto", schemaProducto);
  module.exports = producto;