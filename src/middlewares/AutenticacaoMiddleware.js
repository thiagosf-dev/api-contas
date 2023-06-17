'use strict'

const jwt = require("jsonwebtoken");
const { validarToken } = require("../utils/TokenUtil");

module.exports = {
  verificarToken: (req, res, next) => {
    const token = req.headers.token;

    if (!token) return res.status(401).json({ message: 'O token não foi informado.' });

    try {
      validarToken(token);
      return next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: error });
    }
  },
}