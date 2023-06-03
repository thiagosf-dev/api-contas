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
      required: true,
      default: false,
    },
    valor: {
      type: Number,
      required: true,
    },
    dataVencimento: {
      type: Date,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
      enum: ['Despesa', 'Receita'],
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('ContaModel', contaSchema)
