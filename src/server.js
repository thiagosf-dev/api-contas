'use strict'

const express = require('express');
const cors = require('cors');
const db = require('./db').connect();

const AutenticacaoMiddleware = require('./middlewares/AutenticacaoMiddleware');

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(cors({ origin: '*' }));

// ENDPOINTS - ROTAS
const infoRoute = require('./routes/InfoRoute');
api.use('/', infoRoute);

const contaRoute = require('./routes/ContaRoute');
api.use('/contas', contaRoute);
api.use('/conta', contaRoute);

const usuarioRoute = require('./routes/UsuarioRoute');
api.use('/usuarios', usuarioRoute);
api.use('/usuario', usuarioRoute);

const loginRoute = require('./routes/LoginRoute');
api.use('/login', loginRoute);

module.exports = api;