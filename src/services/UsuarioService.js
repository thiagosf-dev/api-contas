'use strict'

const bcrypt = require('bcrypt');
const usuarioModel = require('../models/UsuarioModel');

module.exports = {
  listar: async () => {
    try {
      const usuariosCadastrados = await usuarioModel.find();
      return usuariosCadastrados;
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
      return await usuarioModel.findOne({ _id: id });
    } catch (error) {
      throw {
        message: error.message,
        status: 500,
        success: false,
      }
    }
  },

  cadastrar: async (usuario) => {
    try {
      usuario.senha = await bcrypt.hash(
        usuario.senha,
        10
      );

      const novoUsuario = await usuarioModel.create(usuario);

      return novoUsuario;
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
      let usuariosEncontrado = await usuarioModel.findById(id);

      if (!usuariosEncontrado) {
        throw {
          message: 'Não foi possível localizar o usuário',
          status: 404,
          success: false,
        }
      }

      const usuarioAtualizado = await usuarioModel.findByIdAndUpdate(
        id,
        { ...novasInformacoes },
        { new: true }
      );

      return usuarioAtualizado;
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
      const usuarioExcluido = await usuarioModel.findByIdAndRemove(id);

      if (!usuarioExcluido) {
        throw {
          message: 'Não foi possível locallizar o usuário',
          status: 404,
        }
      }

      return {
        message: 'Usuário excluído com sucesso',
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
};