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
  }
});

// router.get('/', verificarToken, perfilService.buscarUltimos);

router.get('/', async (req, res) => {
  const resposta = await contaService.listar();
  res.json(resposta);
});

router.get('/:id', async (req, res) => {
  const resposta = await contaService.buscarPorId(req.params.id);
  res.json(resposta);
});

// router.post('', async (req, res) => {
//   const resposta = await perfilService.cadastrar(req.body)
//   res.json(resposta)
// })

// router.post('/conexao', perfilService.criarConexao)

// router.put('/:id', perfilService.editar)

// router.delete('/:id', perfilService.remover)

module.exports = router;
