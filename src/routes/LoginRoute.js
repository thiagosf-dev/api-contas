'use strict'

const express = require('express');
const router = express.Router();

const loginService = require('../services/LoginService');

router.post('', async (req, res) => {
  const resposta = await loginService.autenticar(req.body);
  res.json(resposta);
});

module.exports = router;