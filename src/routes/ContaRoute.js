'use strict'

const express = require('express');
const router = express.Router();

// const { verificarToken } = require('../middlewares/AutenticacaoMiddleware');
const contaService = require('../services/ContaService');

router.post('/', async (req, res) => {
  try {
    const resposta = await contaService.cadastrar(req.body);
    res.json(resposta);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const resposta = await contaService.listar();
    res.json(resposta);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

router.get('/:id', async (req, res) => {
  const resposta = await contaService.buscarPorId(req.params.id);
  res.json(resposta);
});

router.put('/:id', async (req, res) => {
  try {
    const resposta = await contaService.editar(
      req.params.id,
      req.body
    );
    return res.json(resposta);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const resposta = await contaService.excluir(req.params.id)
    return res.json(resposta);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

module.exports = router;
