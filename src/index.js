'use strict'

const api = require('./server')
const PORT = 3000

api.listen(
  PORT,
  () => console.info(`Servidor rodando na porta ${PORT} em: http://localhost:${PORT}`)
)