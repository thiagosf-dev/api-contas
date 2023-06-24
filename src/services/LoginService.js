'use strict'

const bcrypt = require('bcrypt');
const usuarioModel = require('../models/UsuarioModel');
const { gerarToken } = require('../utils/TokenUtil');

module.exports = {
  autenticar: async (usuario) => {
    try {
      let usuarioEncontrado = await usuarioModel.findOne({
        email: usuario.email,
      });

      if (!usuarioEncontrado) {
        return {
          message: 'Credenciais inválidas',
          status: 200,
          success: true,
        };
      }

      const match = await bcrypt.compare(
        usuario.senha,
        usuarioEncontrado.senha,
      );

      if (!match) {
        return {
          message: 'Credenciais inválidas',
          status: 200,
          success: true,
        };
      }

      const token = gerarToken(JSON.stringify(usuarioEncontrado));

      return {
        message: 'Login realizado com sucesso',
        status: 200,
        success: true,
        token,
      };
    } catch (error) {
      return {
        message: error.message,
        status: 500,
        success: false,
      };
    }
  }
};