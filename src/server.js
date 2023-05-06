'use strict'

const express = require('express')
const cors = require('cors')

const api = express()

api.use(express.json())

api.use(cors({
  origin: '*'
}))

api.get('/', (request, response) => {
  console.log('first')
  response.json({
    status: 'OK',
    message: 'API rodando com sucesso'
  })
})

module.exports = api