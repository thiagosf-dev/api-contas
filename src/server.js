'use strict'

// DEVE INSTALAR A DEPENDÊNCIA 'express' COM O COMANDO: npm i express
const express = require('express')

// DEVE INSTALAR A DEPENDÊNCIA 'cors' COM O COMANDO: npm i cors
// const cors = require('cors')

const api = express()
const PORT = 3000

api.use(express.json())

// api.use(cors({
//   origin: '*'
// }))

api.get("/", (request, response) => {
  response.json({
    status: 'OK',
    message: 'API rodando com sucesso'
  })
})

// const contas = require("./contas")

// api.get("/contas", (request, response) => {
//   response.json(contas)
// })

api.listen(
  PORT,
  () => console.info(`Servidor rodando na porta ${PORT} em: http://localhost:${PORT}`)
)

// module.exports = api