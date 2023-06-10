'use strict'

const bcrypt = require('bcrypt');
const loginModel = require('../models/UsuarioModel');

module.exports = {
  autenticar: async (usuario) => {
    try {
      let usuarioEncontrado = await loginModel.findOne({
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

      return {
        message: 'Login realizado com sucesso',
        status: 200,
        success: true,
        usuario: usuarioEncontrado,
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