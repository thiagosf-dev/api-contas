'use strict'

const express = require('express');
const router = express.Router();

const contaService = require('../services/ContaService');

router.get("", (request, response) => {
  response.json({
    api: 'API Contas',
    status: 'OK',
    message: 'API rodando com sucesso'
  })
});

module.exports = router;
