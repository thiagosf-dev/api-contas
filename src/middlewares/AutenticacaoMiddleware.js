'use strict'

module.exports = {
  verificarToken: (req, res, next) => {
    const token = req.headers.token
    if (!token) return res.status(401).json({ message: 'O token não foi informado.' })

    if (!(token === '1234567890')) return res.status(401).json({ message: 'Token inválido.' })

    return next()
  }
}