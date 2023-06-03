'use strict'

const express = require('express')
const cors = require('cors')
const db = require('mongoose')

const api = express()

api.use(express.json())
api.use(express.urlencoded({ extended: true }))
api.use(cors({ origin: '*' }))

const uriMongo = 'mongodb+srv://admin:admin@cluster0.wemyr6w.mongodb.net/api-conta?retryWrites=true&w=majority'

db
  .connect(uriMongo,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Banco conectado...'))
  .catch(err => console.error('ERRO ao tentar conecatr no banco', err));

api.get("/", (request, response) => {
  response.json({
    api: 'API Contas',
    status: 'OK',
    message: 'API rodando com sucesso'
  })
});

// endpoints
const contaRoute = require('./routes/ContaRoute');
api.use('/conta', contaRoute);
api.use('/contas', contaRoute);

module.exports = api;