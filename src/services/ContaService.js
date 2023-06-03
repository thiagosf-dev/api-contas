'use strict'

const contaModel = require('../models/ContaModel');

module.exports = {
  listar: async () => {
    try {
      const contasCadastradas = await contaModel.find();
      return contasCadastradas;
    } catch (error) {
      throw {
        message: error.message,
        status: 500,
      }
    }
  },
  buscarPorId: async (id) => {
    try {
      return await contaModel.findOne({ _id: id });
    } catch (error) {
      throw {
        message: error.message,
        status: 500,
      }
    }
  },
  cadastrar: async (conta) => {
    try {
      const novaConta = await contaModel.create(conta);
      return novaConta;
    } catch (error) {
      throw {
        message: error.message,
        status: 500,
      }
    }
  },
};