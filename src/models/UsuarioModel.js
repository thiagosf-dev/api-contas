'use strict'

const mongoose = require('mongoose');
const { Schema } = mongoose;

const contaSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    senha: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('UsuarioModel', contaSchema);
