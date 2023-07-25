'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

const contaSchema = new Schema(
  {
    descricao: {
      type: String,
      required: true,
    },
    estaPaga: {
      type: Boolean,
      required: false,
      default: false,
    },
    valor: {
      type: Number,
      required: true,
    },
    dataVencimento: {
      type: Date,
      required: false,
    },
    tipo: {
      type: String,
      required: false,
      enum: ['Despesa', 'Receita'],
    },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UsuarioModel',
      required: false,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('ContaModel', contaSchema)
