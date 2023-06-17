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
        success: false,
      }
    }
  },

  buscarPorId: async (id) => {
    try {
      return await contaModel.findOne({ _id: id }).populate('usuario').exec();
    } catch (error) {
      throw {
        message: error.message,
        status: 500,
        success: false,
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
        status: 404,
        success: false,
      }
    }
  },

  editar: async (id, novasInformacoes) => {
    try {
      let contaEncontrada = await contaModel.findById(id);

      if (!contaEncontrada) {
        throw {
          message: 'Não foi possível localizar a conta',
          status: 404,
          success: false,
        }
      }

      const contaAtualizada = await contaModel.findByIdAndUpdate(
        id,
        { ...novasInformacoes },
        { new: true }
      );

      return contaAtualizada;
    } catch (error) {
      console.error(error);
      throw {
        message: error.message,
        status: 500,
        success: false,
      }
    }
  },

  excluir: async (id) => {
    try {
      const contaExcluida = await contaModel.findByIdAndRemove(id);

      if (!contaExcluida) {
        throw {
          message: 'Não foi possível locallizar a conta',
          status: 404,
        }
      }

      return {
        message: 'Conta excluída com sucesso',
        status: 200,
        success: true,
      }
    } catch (error) {
      console.error(error);
      throw {
        message: error.message,
        status: 500,
        success: false,
      }
    }
  },

  buscarPorUsuarioId: async (usuarioId) => {
    try {
      const contas = contaModel.find({ usuario: usuarioId });
      return contas;
    } catch (error) {
      console.error(error);
      throw {
        message: error.message,
        status: 500,
        success: false,
      }
    }
  }
};