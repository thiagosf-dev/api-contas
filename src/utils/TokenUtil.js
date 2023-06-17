'use strict'

const jwt = require("jsonwebtoken");

module.exports = {
  gerarToken: (usuario) => {
    try {
      return jwt.sign(usuario, 'secret');
    } catch (error) {
      console.error(error);
      throw {
        message: `Erro ao gerar token: ${error.message}`,
        status: 500,
        success: false,
      }
    }
  },

  validarToken: (token) => {
    try {
      return jwt.verify(token, 'secret');
    } catch (error) {
      console.error(error);
      throw {
        message: `Erro ao validar o token: ${error.message}`,
        status: 500,
        success: false,
      }
    }
  }
}