'use strict'

const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema(
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
      select: false,
    },
    tipo: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
    },
    contas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ContaModel'
      }
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('UsuarioModel', usuarioSchema);
